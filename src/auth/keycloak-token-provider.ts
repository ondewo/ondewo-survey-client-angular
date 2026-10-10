import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, InjectionToken, OnDestroy, Optional } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { TokenProvider, TokenResult } from "./token-provider";

/**
 * Seconds of head-room subtracted from a token's `expires_in` so the background
 * refresh fires *before* the access token actually lapses (covers clock skew and
 * the round-trip to Keycloak). Mirrors the nodejs SDK's `REFRESH_SKEW_IN_S` and the
 * python SDK's `_EXPIRY_LEEWAY_S`.
 */
export const REFRESH_SKEW_IN_S: number = 30;

/**
 * Lower bound (in seconds) for the scheduled refresh delay so a tiny / zero
 * `expires_in` cannot spin a hot refresh loop.
 */
export const MIN_REFRESH_DELAY_IN_S: number = 1;

/**
 * Configuration for the {@link KeycloakTokenProvider}.
 *
 * Exactly one credential mode must be supplied:
 *
 * - an `offlineToken` (a previously-obtained offline / refresh token), or
 * - a `username` + `password` pair (Resource Owner Password Credentials grant
 *   against a *public* SDK client with the `offline_access` scope).
 *
 * The provider performs a one-time login, then keeps the short-lived access token
 * fresh in the background from the (rotating) refresh token.
 */
export interface KeycloakTokenProviderConfig {
  /**
   * Base Keycloak URL, e.g. `"https://auth.example.com/auth"` or
   * `"https://auth.example.com"`. A trailing slash is tolerated.
   */
  keycloakUrl: string;
  /** Realm name, e.g. `"ondewo-ccai-platform"`. */
  realm: string;
  /**
   * Public SDK client id, e.g. `"ondewo-nlu-cai-sdk-public"`. No `client_secret`
   * is ever sent (the client is public).
   */
  clientId: string;
  /**
   * A previously-obtained offline / refresh token. When set, the provider seeds
   * its first access token via a `refresh_token` grant instead of a password
   * login. Mutually exclusive with {@link username} / {@link password}.
   */
  offlineToken?: string;
  /**
   * 2FA-exempt technical-user email / username for the password grant. Required
   * (with {@link password}) when no {@link offlineToken} is supplied.
   */
  username?: string;
  /**
   * Technical-user password for the password grant. Required (with
   * {@link username}) when no {@link offlineToken} is supplied.
   */
  password?: string;
  /**
   * Whether to verify the Keycloak server's TLS certificate on the
   * token-endpoint call. Defaults to `true` (secure).
   *
   * NO-OP IN THIS ANGULAR/BROWSER CLIENT. The token request is made with
   * Angular's `HttpClient` (an XHR/fetch call), and in a browser the TLS
   * handshake is owned by the user agent — there is no `https.Agent`, undici
   * dispatcher, or `rejectUnauthorized` hook that app code can reach, and
   * `HttpClient`'s request options expose no certificate-verification slot. The
   * value is therefore stored on the provider for cross-SDK config parity with
   * the Python/Node.js clients (where it does disable TLS verification) but has
   * no effect on the outgoing request here. For a self-signed local Envoy at
   * `https://localhost:12001/auth`, the certificate must be trusted at the
   * browser/OS level instead.
   */
  keycloakVerifySsl?: boolean;
}

/**
 * DI token under which the consuming application supplies the
 * {@link KeycloakTokenProviderConfig} consumed by {@link KeycloakTokenProvider}.
 *
 * Example:
 *
 * ```ts
 * providers: [
 *   {
 *     provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *     useValue: {
 *       keycloakUrl: "https://auth.example.com/auth",
 *       realm: "ondewo-ccai-platform",
 *       clientId: "ondewo-nlu-cai-sdk-public",
 *       username: "svc-user@example.com",
 *       password: "…",
 *     } satisfies KeycloakTokenProviderConfig,
 *   },
 *   provideOndewoSurveyAuth(KeycloakTokenProvider),
 * ]
 * ```
 */
export const KEYCLOAK_TOKEN_PROVIDER_CONFIG: InjectionToken<KeycloakTokenProviderConfig> =
  new InjectionToken<KeycloakTokenProviderConfig>("ONDEWO_SURVEY_KEYCLOAK_TOKEN_PROVIDER_CONFIG");

/** Raised on any token-endpoint failure or unusable token response. */
export class KeycloakTokenError extends Error {
  /**
   * @param message a human-readable description of the token failure.
   */
  public constructor(message: string) {
    super(message);
    this.name = "KeycloakTokenError";
  }
}

/**
 * The subset of a Keycloak token-endpoint JSON response this provider reads.
 */
interface KeycloakTokenResponse {
  /** The short-lived bearer access token. */
  access_token: string;
  /** The (optionally rotated) offline refresh token; absent if none was issued. */
  refresh_token?: string;
  /** The access-token lifetime in seconds, as reported by Keycloak. */
  expires_in?: number;
}

/**
 * Concrete, ready-to-use {@link TokenProvider} that performs the Keycloak headless
 * offline-token flow itself so a consuming application gets background access-token
 * refresh without implementing {@link TokenProvider}.
 *
 * On construction it logs in once against the realm's OIDC token endpoint — either
 * with a supplied offline / refresh token (`grant_type=refresh_token`) or a
 * username + password (`grant_type=password`, `scope=offline_access`) against a
 * *public* SDK client (no `client_secret`). It then arms a background timer that
 * refreshes the access token shortly *before* it expires (skew + deadline clamp,
 * mirroring the nodejs `OfflineTokenProvider` and the python `KeycloakTokenProvider`).
 *
 * {@link getToken} returns the current valid access token synchronously, or `null`
 * before the first login completes (so the interceptors send the request unchanged
 * rather than with an empty `Bearer` header). Register it with
 * `provideOndewoSurveyAuth(KeycloakTokenProvider)` and supply a
 * {@link KeycloakTokenProviderConfig} under {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}.
 */
@Injectable()
export class KeycloakTokenProvider implements TokenProvider, OnDestroy {
  /** Pre-computed OIDC token endpoint URL for the configured realm. */
  private readonly tokenEndpoint: string;
  /** Public SDK client id sent on every token request (no `client_secret`). */
  private readonly clientId: string;
  /**
   * Whether TLS-certificate verification is requested for the token-endpoint
   * call. Defaults to `true`. Stored for cross-SDK config parity only — it is a
   * NO-OP in this browser client (the browser owns the TLS handshake), so the
   * outgoing {@link postTokenRequest} call is unaffected by its value. See
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl}.
   */
  private readonly verifySsl: boolean;
  /** Pre-validated form params for the one-time login grant (password or refresh). */
  private readonly loginParams: Record<string, string>;

  /** The current access token, or `null` before the first login completes. */
  private accessToken: string | null = null;
  /** The current (rotating) offline refresh token, or `null` before login. */
  private refreshToken: string | null = null;
  /** Handle of the armed refresh timer, or `null` when none is scheduled. */
  private timer: ReturnType<typeof setTimeout> | null = null;
  /** Whether {@link ngOnDestroy} ran; suppresses any further (re-)scheduling. */
  private destroyed: boolean = false;
  /** Resolves once the first login completes; lets callers await readiness. */
  private readonly ready: Promise<void>;

  /**
   * Construct the provider and start the one-time login + background refresh loop.
   *
   * @param http the Angular {@link HttpClient} used for the token-endpoint calls.
   * @param config the {@link KeycloakTokenProviderConfig}, injected under
   *   {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}.
   * @throws KeycloakTokenError synchronously when no config is provided or the
   *   credential fields are missing / inconsistent.
   */
  public constructor(
    private readonly http: HttpClient,
    @Optional() @Inject(KEYCLOAK_TOKEN_PROVIDER_CONFIG) config: KeycloakTokenProviderConfig | null
  ) {
    if (config === null) {
      throw new KeycloakTokenError(
        "KeycloakTokenProvider requires a KeycloakTokenProviderConfig provided under KEYCLOAK_TOKEN_PROVIDER_CONFIG"
      );
    }
    this.clientId = config.clientId;
    // Stored for cross-SDK config parity; a no-op on the browser transport (see field doc).
    this.verifySsl = config.keycloakVerifySsl ?? true;
    this.loginParams = KeycloakTokenProvider.buildLoginParams(config);
    this.tokenEndpoint = KeycloakTokenProvider.buildTokenEndpoint(config.keycloakUrl, config.realm);
    this.ready = this.login();
  }

  /**
   * Return the current access token.
   *
   * @returns the current valid access token, or `null` before the first login
   *   completes (the interceptors then forward the request unchanged).
   */
  public getToken(): TokenResult {
    return this.accessToken;
  }

  /**
   * The resolved TLS-verification setting from
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl} (defaults to `true`).
   *
   * Exposed for cross-SDK config parity and introspection only. It is a NO-OP in
   * this browser client — the browser owns the TLS handshake, so the value never
   * reaches {@link postTokenRequest} and does not change the outgoing request.
   *
   * @returns `true` when TLS verification is requested (the default), `false`
   *   when the config explicitly opted out (still inert here).
   */
  public get keycloakVerifySsl(): boolean {
    return this.verifySsl;
  }

  /**
   * Await the one-time login that seeds the first access token.
   *
   * Awaiting is optional — {@link getToken} simply returns `null` until login
   * completes — but a consumer can `await provider.whenReady()` at bootstrap to
   * fail fast on bad credentials.
   *
   * @returns a promise that resolves once the first token is stored, or rejects
   *   with the {@link KeycloakTokenError} from a failed login.
   */
  public whenReady(): Promise<void> {
    return this.ready;
  }

  /** Stop the background refresh loop. Idempotent; safe to call from any state. */
  public ngOnDestroy(): void {
    this.destroyed = true;
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  /**
   * Validate a config and build the one-time login grant params from it.
   *
   * Prefers a `refresh_token` grant when an `offlineToken` is supplied, otherwise a
   * `password` grant with `scope=offline_access`. This is the single point where the
   * credential fields are validated and narrowed to `string`.
   *
   * @param config the config to validate.
   * @returns the form params for the login grant.
   * @throws KeycloakTokenError when a required base field is absent / empty, or when
   *   neither an offline token nor a username + password pair is supplied.
   */
  private static buildLoginParams(config: KeycloakTokenProviderConfig): Record<string, string> {
    for (const key of ["keycloakUrl", "realm", "clientId"] as const) {
      const value: string = config[key];
      if (typeof value !== "string" || value.trim().length === 0) {
        throw new KeycloakTokenError(`KeycloakTokenProviderConfig.${key} is required and must be a non-empty string`);
      }
    }
    if (typeof config.offlineToken === "string" && config.offlineToken.length > 0) {
      return { grant_type: "refresh_token", client_id: config.clientId, refresh_token: config.offlineToken };
    }
    const username: string | undefined = config.username;
    const password: string | undefined = config.password;
    if (typeof username !== "string" || username.length === 0 || typeof password !== "string" || password.length === 0) {
      throw new KeycloakTokenError(
        "KeycloakTokenProviderConfig must supply either an offlineToken or a username + password pair"
      );
    }
    return { grant_type: "password", client_id: config.clientId, username, password, scope: "offline_access" };
  }

  /**
   * Perform the one-time login (using the pre-built {@link loginParams}) and arm the
   * first refresh.
   *
   * @returns a promise that resolves once the first token is stored and the refresh
   *   is armed.
   * @throws KeycloakTokenError when the token endpoint fails or the response carries
   *   no usable `access_token`.
   */
  private async login(): Promise<void> {
    const response: KeycloakTokenResponse = await this.postTokenRequest(this.loginParams);
    this.store(response);
    this.scheduleRefresh(response.expires_in);
  }

  /**
   * Exchange the current refresh token for a fresh access token and re-arm the
   * next refresh. No-ops once {@link ngOnDestroy} has run.
   *
   * @returns a promise that resolves once the token is refreshed and the next
   *   refresh is armed.
   * @throws KeycloakTokenError when there is no refresh token or the endpoint call
   *   returns an unusable body.
   */
  private async refresh(): Promise<void> {
    if (this.destroyed) {
      return;
    }
    if (this.refreshToken === null) {
      throw new KeycloakTokenError("Cannot refresh: no refresh_token was issued by Keycloak");
    }
    const response: KeycloakTokenResponse = await this.postTokenRequest({
      grant_type: "refresh_token",
      client_id: this.clientId,
      refresh_token: this.refreshToken
    });
    this.store(response);
    this.scheduleRefresh(response.expires_in);
  }

  /**
   * Store the access token and (rotated) refresh token from a token response.
   *
   * Keycloak may omit the refresh token on a refresh; the previous one is kept in
   * that case so a same-token refresh does not blank out the offline token.
   *
   * @param response the parsed token-endpoint response.
   * @throws KeycloakTokenError when the response carries no `access_token`.
   */
  private store(response: KeycloakTokenResponse): void {
    if (typeof response.access_token !== "string" || response.access_token.length === 0) {
      throw new KeycloakTokenError("Keycloak token response did not contain an access_token");
    }
    this.accessToken = response.access_token;
    if (typeof response.refresh_token === "string" && response.refresh_token.length > 0) {
      this.refreshToken = response.refresh_token;
    }
  }

  /**
   * Arm a single timer for the next refresh.
   *
   * The delay is `expires_in` minus {@link REFRESH_SKEW_IN_S}, floored at
   * {@link MIN_REFRESH_DELAY_IN_S}; a missing / non-positive `expires_in` falls
   * back to {@link MIN_REFRESH_DELAY_IN_S}.
   *
   * @param expiresInRaw the `expires_in` (seconds) from the latest token response.
   */
  private scheduleRefresh(expiresInRaw: number | undefined): void {
    if (this.destroyed) {
      return;
    }
    const expiresInS: number = typeof expiresInRaw === "number" && expiresInRaw > 0 ? expiresInRaw : MIN_REFRESH_DELAY_IN_S;
    const delayInS: number = Math.max(expiresInS - REFRESH_SKEW_IN_S, MIN_REFRESH_DELAY_IN_S);
    this.timer = setTimeout((): void => {
      void this.refresh().catch((): void => {
        // Swallow a transient background-refresh failure: the next interceptor read
        // gets the stale (possibly expired) token and the server replies
        // UNAUTHENTICATED, prompting the consumer to re-login.
      });
    }, delayInS * 1000);
  }

  /**
   * POST a form-encoded body to the token endpoint and return the parsed JSON.
   *
   * @param params the form fields (grant type, client id, credentials).
   * @returns the parsed {@link KeycloakTokenResponse}.
   * @throws KeycloakTokenError when the request fails (the {@link HttpClient}
   *   error is wrapped).
   */
  private async postTokenRequest(params: Record<string, string>): Promise<KeycloakTokenResponse> {
    const body: string = new URLSearchParams(params).toString();
    try {
      return await firstValueFrom(
        this.http.post<KeycloakTokenResponse>(this.tokenEndpoint, body, {
          headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" }
        })
      );
    } catch (error: unknown) {
      throw new KeycloakTokenError(`Keycloak token endpoint request failed: ${KeycloakTokenProvider.describe(error)}`);
    }
  }

  /**
   * Build the realm's OIDC token endpoint URL, tolerating a trailing slash on the
   * base URL.
   *
   * @param keycloakUrl the base Keycloak URL (trailing slashes are stripped).
   * @param realm the realm name; URL-encoded into the path.
   * @returns the fully-qualified `.../protocol/openid-connect/token` URL.
   */
  private static buildTokenEndpoint(keycloakUrl: string, realm: string): string {
    const base: string = keycloakUrl.replace(/\/+$/, "");
    return `${base}/realms/${encodeURIComponent(realm)}/protocol/openid-connect/token`;
  }

  /**
   * Render an unknown caught value as a short string for error messages.
   *
   * @param error the caught value.
   * @returns the `message` of an `Error`, the value itself when it is already a
   *   string, otherwise a JSON rendering (falling back to a fixed label for
   *   values that cannot be stringified).
   */
  private static describe(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }
    if (typeof error === "string") {
      return error;
    }
    try {
      return JSON.stringify(error);
    } catch {
      return "unstringifiable error";
    }
  }
}
