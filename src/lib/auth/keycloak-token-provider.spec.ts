import { HttpClient, provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting, TestRequest } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { throwError } from "rxjs";
import {
  KEYCLOAK_TOKEN_PROVIDER_CONFIG,
  KeycloakTokenError,
  KeycloakTokenProvider,
  KeycloakTokenProviderConfig,
  MIN_REFRESH_DELAY_IN_S,
  REFRESH_SKEW_IN_S
} from "./keycloak-token-provider";

/** Base Keycloak URL used across the tests (deliberately carries a trailing slash). */
const KEYCLOAK_URL: string = "https://auth.example.com/auth/";

/** Realm name; chosen to also exercise URL-encoding of the realm path segment. */
const REALM: string = "ondewo ccai/platform";

/** Public SDK client id sent on every token request. */
const CLIENT_ID: string = "ondewo-nlu-cai-sdk-public";

/** The fully-qualified token endpoint the provider must POST to for {@link REALM}. */
const TOKEN_ENDPOINT: string = `https://auth.example.com/auth/realms/${encodeURIComponent(REALM)}/protocol/openid-connect/token`;

/** First access token returned by the login flush. */
const ACCESS_TOKEN_1: string = "access-token-1";

/** Second access token returned by the first background refresh flush. */
const ACCESS_TOKEN_2: string = "access-token-2";

/** First refresh token returned by login. */
const REFRESH_TOKEN_1: string = "refresh-token-1";

/** Rotated refresh token returned by the refresh flush. */
const REFRESH_TOKEN_2: string = "refresh-token-2";

/** A pre-obtained offline token supplied via config for the refresh-grant login path. */
const OFFLINE_TOKEN: string = "offline-token-seed";

/** Username for the password-grant login path. */
const USERNAME: string = "svc-user@example.com";

/** Password for the password-grant login path. */
const PASSWORD: string = "s3cret";

/** Access-token lifetime (seconds) used so the refresh delay is comfortably positive. */
const EXPIRES_IN: number = 300;

/** Milliseconds to advance the fake clock to fire a refresh armed for {@link EXPIRES_IN}. */
const PAST_REFRESH_MS: number = ((EXPIRES_IN - REFRESH_SKEW_IN_S) * 1000) + 1;

/** Milliseconds just shy of the floored minimum refresh delay (no refresh yet). */
const BEFORE_MIN_REFRESH_MS: number = (MIN_REFRESH_DELAY_IN_S * 1000) - 1;

/**
 * Build a config with the password-grant credentials, overlaying any provided
 * partial fields.
 *
 * @param overrides partial config fields to merge over the password-grant base.
 * @returns a complete {@link KeycloakTokenProviderConfig}.
 */
function passwordConfig(overrides: Partial<KeycloakTokenProviderConfig> = {}): KeycloakTokenProviderConfig {
  return { keycloakUrl: KEYCLOAK_URL, realm: REALM, clientId: CLIENT_ID, username: USERNAME, password: PASSWORD, ...overrides };
}

/**
 * Configure a `TestBed` providing the {@link HttpClient} test backend and the
 * given provider config, construct the {@link KeycloakTokenProvider} through DI,
 * and return it alongside the {@link HttpTestingController}.
 *
 * @param config the config bound under {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}, or
 *   `null` to omit the binding (exercising the missing-config guard).
 * @returns the constructed provider and the HTTP testing controller.
 */
function setup(config: KeycloakTokenProviderConfig | null): {
  provider: KeycloakTokenProvider;
  httpMock: HttpTestingController;
} {
  TestBed.configureTestingModule({
    providers: [
      provideHttpClient(),
      provideHttpClientTesting(),
      { provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG, useValue: config },
      KeycloakTokenProvider
    ]
  });
  const httpMock: HttpTestingController = TestBed.inject(HttpTestingController);
  const provider: KeycloakTokenProvider = TestBed.inject(KeycloakTokenProvider);
  return { provider, httpMock };
}

/**
 * Flush the single pending token-endpoint request with the given JSON body and
 * return the captured request (so the test can assert on the form body).
 *
 * @param httpMock the HTTP testing controller.
 * @param body the JSON token response to flush.
 * @returns the flushed {@link TestRequest}.
 */
function flushToken(
  httpMock: HttpTestingController,
  body: { access_token?: string; refresh_token?: string; expires_in?: number }
): TestRequest {
  const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
  request.flush(body);
  return request;
}

/**
 * Drain the microtask queue so the `await firstValueFrom(...)` continuations inside
 * the provider's `refresh()` / `login()` settle after a synchronous `flush()`.
 *
 * Several awaits chain in the refresh path (`firstValueFrom`, then back in
 * `refresh`); a few real-timer microtask hops flush them all without advancing the
 * faked clock.
 *
 * @returns a promise that resolves once the queued microtasks have run.
 */
async function flushMicrotasks(): Promise<void> {
  for (let i: number = 0; i < 5; i++) {
    await Promise.resolve();
  }
}

/**
 * Covers the concrete Keycloak {@link KeycloakTokenProvider}: config validation,
 * the two login grants, the rotating refresh loop with its skew / floor delay, the
 * error paths, and lifecycle teardown.
 */
describe("KeycloakTokenProvider", () => {
  beforeEach((): void => {
    jest.useFakeTimers();
  });

  afterEach((): void => {
    jest.useRealTimers();
    TestBed.resetTestingModule();
  });

  /** The skew / floor constants are part of the documented refresh contract. */
  it("exposes the documented refresh-timing constants", (): void => {
    expect(REFRESH_SKEW_IN_S).toBe(30);
    expect(MIN_REFRESH_DELAY_IN_S).toBe(1);
  });

  describe("construction guards", () => {
    /** A missing config (null binding) fails fast with a descriptive error. */
    it("throws when no config is provided", (): void => {
      expect((): KeycloakTokenProvider => setup(null).provider).toThrow(KeycloakTokenError);
    });

    /** Each required string field is validated; an empty realm is rejected. */
    it("throws when a required string field is blank", (): void => {
      expect((): KeycloakTokenProvider => setup(passwordConfig({ realm: "   " })).provider).toThrow(
        /realm is required/
      );
    });

    /** Supplying neither an offline token nor a username + password pair is rejected. */
    it("throws when neither offlineToken nor username+password is supplied", (): void => {
      const config: KeycloakTokenProviderConfig = { keycloakUrl: KEYCLOAK_URL, realm: REALM, clientId: CLIENT_ID };
      expect((): KeycloakTokenProvider => setup(config).provider).toThrow(/either an offlineToken or a username/);
    });

    /** A username without a password does not satisfy the password-grant requirement. */
    it("throws when a username is given without a password", (): void => {
      const config: KeycloakTokenProviderConfig = {
        keycloakUrl: KEYCLOAK_URL,
        realm: REALM,
        clientId: CLIENT_ID,
        username: USERNAME
      };
      expect((): KeycloakTokenProvider => setup(config).provider).toThrow(KeycloakTokenError);
    });
  });

  describe("login", () => {
    /** The password grant posts the expected form body to the realm token endpoint. */
    it("performs a password grant with scope=offline_access", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig());
      const request: TestRequest = flushToken(httpMock, {
        access_token: ACCESS_TOKEN_1,
        refresh_token: REFRESH_TOKEN_1,
        expires_in: EXPIRES_IN
      });
      await provider.whenReady();

      const body: string = request.request.body as string;
      const params: URLSearchParams = new URLSearchParams(body);
      expect(params.get("grant_type")).toBe("password");
      expect(params.get("client_id")).toBe(CLIENT_ID);
      expect(params.get("username")).toBe(USERNAME);
      expect(params.get("password")).toBe(PASSWORD);
      expect(params.get("scope")).toBe("offline_access");
      expect(request.request.headers.get("Content-Type")).toBe("application/x-www-form-urlencoded");
      expect(provider.getToken()).toBe(ACCESS_TOKEN_1);
      provider.ngOnDestroy();
    });

    /** With an offlineToken, login uses a refresh_token grant (no password fields). */
    it("performs a refresh_token grant when an offlineToken is supplied", async (): Promise<void> => {
      const config: KeycloakTokenProviderConfig = {
        keycloakUrl: KEYCLOAK_URL,
        realm: REALM,
        clientId: CLIENT_ID,
        offlineToken: OFFLINE_TOKEN
      };
      const { provider, httpMock } = setup(config);
      const request: TestRequest = flushToken(httpMock, {
        access_token: ACCESS_TOKEN_1,
        refresh_token: REFRESH_TOKEN_1,
        expires_in: EXPIRES_IN
      });
      await provider.whenReady();

      const params: URLSearchParams = new URLSearchParams(request.request.body as string);
      expect(params.get("grant_type")).toBe("refresh_token");
      expect(params.get("refresh_token")).toBe(OFFLINE_TOKEN);
      expect(params.has("password")).toBe(false);
      expect(provider.getToken()).toBe(ACCESS_TOKEN_1);
      provider.ngOnDestroy();
    });

    /** getToken() is null until the first login response is flushed. */
    it("returns null before the first login completes", (): void => {
      const { provider, httpMock } = setup(passwordConfig());
      expect(provider.getToken()).toBeNull();
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      provider.ngOnDestroy();
    });

    /** A login response without an access_token rejects whenReady() with a token error. */
    it("rejects whenReady when the response has no access_token", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig());
      flushToken(httpMock, { refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      await expect(provider.whenReady()).rejects.toThrow(/did not contain an access_token/);
      provider.ngOnDestroy();
    });

    /** A failed token-endpoint request is wrapped in a KeycloakTokenError. */
    it("wraps a token-endpoint HTTP failure in a KeycloakTokenError", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig());
      const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
      request.flush("nope", { status: 401, statusText: "Unauthorized" });
      await expect(provider.whenReady()).rejects.toThrow(KeycloakTokenError);
      provider.ngOnDestroy();
    });
  });

  describe("keycloakVerifySsl (browser no-op, config -> provider parity)", () => {
    /** Omitting the field defaults the stored flag to verification-ON (secure). */
    it("defaults the stored flag to true when keycloakVerifySsl is omitted", (): void => {
      const { provider, httpMock } = setup(passwordConfig());
      expect(provider.keycloakVerifySsl).toBe(true);
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      provider.ngOnDestroy();
    });

    /** An explicit true is stored as true. */
    it("stores an explicit keycloakVerifySsl: true as true", (): void => {
      const { provider, httpMock } = setup(passwordConfig({ keycloakVerifySsl: true }));
      expect(provider.keycloakVerifySsl).toBe(true);
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      provider.ngOnDestroy();
    });

    /** An explicit false is threaded from config through to the provider field. */
    it("stores keycloakVerifySsl: false as false (threaded config -> provider)", (): void => {
      const { provider, httpMock } = setup(passwordConfig({ keycloakVerifySsl: false }));
      expect(provider.keycloakVerifySsl).toBe(false);
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      provider.ngOnDestroy();
    });

    /**
     * The flag is inert at the transport layer: with keycloakVerifySsl: false the
     * provider issues the SAME single POST (same URL, method, headers, body) and
     * logs in exactly as with the field omitted — proving it is a no-op, not wired
     * to TLS.
     */
    it("does not alter or break the token request when keycloakVerifySsl is false", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig({ keycloakVerifySsl: false }));
      const request: TestRequest = flushToken(httpMock, {
        access_token: ACCESS_TOKEN_1,
        refresh_token: REFRESH_TOKEN_1,
        expires_in: EXPIRES_IN
      });
      await provider.whenReady();

      expect(request.request.method).toBe("POST");
      expect(request.request.headers.get("Content-Type")).toBe("application/x-www-form-urlencoded");
      const params: URLSearchParams = new URLSearchParams(request.request.body as string);
      expect(params.get("grant_type")).toBe("password");
      expect(params.get("client_id")).toBe(CLIENT_ID);
      expect(params.get("username")).toBe(USERNAME);
      expect(params.get("password")).toBe(PASSWORD);
      expect(params.get("scope")).toBe("offline_access");
      expect(provider.getToken()).toBe(ACCESS_TOKEN_1);
      provider.ngOnDestroy();
    });
  });

  describe("background refresh", () => {
    /**
     * Drive login then advance the fake clock past the scheduled refresh delay and
     * flush the second token; the provider must hand out the refreshed access token
     * and send the rotated refresh token on the refresh request.
     */
    it("refreshes the access token before expiry using the rotating refresh token", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig());
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      await provider.whenReady();
      expect(provider.getToken()).toBe(ACCESS_TOKEN_1);

      // The refresh fires REFRESH_SKEW_IN_S before expiry; advance just past it.
      jest.advanceTimersByTime(PAST_REFRESH_MS);
      const refreshRequest: TestRequest = flushToken(httpMock, {
        access_token: ACCESS_TOKEN_2,
        refresh_token: REFRESH_TOKEN_2,
        expires_in: EXPIRES_IN
      });
      await flushMicrotasks();

      const params: URLSearchParams = new URLSearchParams(refreshRequest.request.body as string);
      expect(params.get("grant_type")).toBe("refresh_token");
      expect(params.get("refresh_token")).toBe(REFRESH_TOKEN_1);
      expect(provider.getToken()).toBe(ACCESS_TOKEN_2);
      provider.ngOnDestroy();
    });

    /** When a refresh response omits a refresh_token, the previous one is reused. */
    it("keeps the previous refresh token when the refresh response omits it", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig());
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      await provider.whenReady();

      jest.advanceTimersByTime(PAST_REFRESH_MS);
      flushToken(httpMock, { access_token: ACCESS_TOKEN_2, expires_in: EXPIRES_IN });
      await flushMicrotasks();
      expect(provider.getToken()).toBe(ACCESS_TOKEN_2);

      // The next refresh must still carry the original (non-rotated) refresh token.
      jest.advanceTimersByTime(PAST_REFRESH_MS);
      const secondRefresh: TestRequest = flushToken(httpMock, { access_token: ACCESS_TOKEN_1, expires_in: EXPIRES_IN });
      await flushMicrotasks();
      expect(new URLSearchParams(secondRefresh.request.body as string).get("refresh_token")).toBe(REFRESH_TOKEN_1);
      provider.ngOnDestroy();
    });

    /**
     * A background-refresh HTTP failure must be swallowed by the timer body's catch:
     * the previous (stale) access token stays served and no unhandled rejection escapes.
     */
    it("swallows a failed background refresh and keeps the previous token", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig());
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      await provider.whenReady();

      jest.advanceTimersByTime(PAST_REFRESH_MS);
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 500, statusText: "Server Error" });
      await flushMicrotasks();

      expect(provider.getToken()).toBe(ACCESS_TOKEN_1);
      provider.ngOnDestroy();
    });

    /** A missing / non-positive expires_in floors the refresh delay at the minimum. */
    it("floors the refresh delay when expires_in is missing", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig());
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1 });
      await provider.whenReady();

      // No timer should have fired before the minimum delay elapses...
      jest.advanceTimersByTime(BEFORE_MIN_REFRESH_MS);
      httpMock.expectNone(TOKEN_ENDPOINT);
      // ...and exactly one refresh fires once it does.
      jest.advanceTimersByTime(2);
      flushToken(httpMock, { access_token: ACCESS_TOKEN_2, refresh_token: REFRESH_TOKEN_2, expires_in: EXPIRES_IN });
      await flushMicrotasks();
      expect(provider.getToken()).toBe(ACCESS_TOKEN_2);
      provider.ngOnDestroy();
    });
  });

  describe("lifecycle", () => {
    /** ngOnDestroy clears the armed timer so no further refresh request fires. */
    it("stops the refresh loop on ngOnDestroy", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig());
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      await provider.whenReady();

      provider.ngOnDestroy();
      jest.advanceTimersByTime(PAST_REFRESH_MS);
      httpMock.expectNone(TOKEN_ENDPOINT);
    });

    /** ngOnDestroy is idempotent: a second call with no timer armed is a no-op. */
    it("is idempotent on repeated ngOnDestroy", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig());
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      await provider.whenReady();
      provider.ngOnDestroy();
      expect((): void => provider.ngOnDestroy()).not.toThrow();
    });

    /** A refresh that fires after destroy is a no-op and issues no request. */
    it("does not refresh when the timer body runs after destroy", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig());
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      await provider.whenReady();

      // Destroy after the timer is armed but suppress its clearing so the queued
      // callback still runs; the `destroyed` guard inside refresh() must short-circuit.
      const armed: ReturnType<typeof setTimeout> | null = (
        provider as unknown as { timer: ReturnType<typeof setTimeout> | null }
      ).timer;
      (provider as unknown as { destroyed: boolean }).destroyed = true;
      jest.advanceTimersByTime(PAST_REFRESH_MS);
      await flushMicrotasks();
      httpMock.expectNone(TOKEN_ENDPOINT);
      expect(armed).not.toBeNull();
      provider.ngOnDestroy();
    });
  });

  describe("refresh failure paths", () => {
    /** refresh() with no stored refresh token raises a descriptive token error. */
    it("throws when refreshing without a refresh token", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig());
      // Login response carries an access token but no refresh token.
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, expires_in: EXPIRES_IN });
      await provider.whenReady();

      // White-box: drive the private refresh() directly with no refresh token stored.
      const internals: { refresh: () => Promise<void> } = provider as unknown as { refresh: () => Promise<void> };
      await expect(internals.refresh()).rejects.toThrow(/no refresh_token/);
      provider.ngOnDestroy();
    });

    /** scheduleRefresh is inert once the provider has been destroyed. */
    it("does not arm a timer when scheduling after destroy", async (): Promise<void> => {
      const { provider, httpMock } = setup(passwordConfig());
      flushToken(httpMock, { access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      await provider.whenReady();
      provider.ngOnDestroy();

      (provider as unknown as { scheduleRefresh: (e: number | undefined) => void }).scheduleRefresh(EXPIRES_IN);
      expect((provider as unknown as { timer: unknown }).timer).toBeNull();
    });

    /**
     * Construct a provider over a stub `HttpClient` whose token-endpoint observable
     * rejects with the given value, then assert the wrapped error message matches.
     * Drives every branch of the private `describe()` value renderer.
     *
     * @param rejection the value the stub `HttpClient.post` observable errors with.
     * @param expected a regex the resulting {@link KeycloakTokenError} message matches.
     * @returns a promise resolving once the rejection assertion has run.
     */
    async function expectWrappedTokenError(rejection: unknown, expected: RegExp): Promise<void> {
      const http: HttpClient = { post: () => throwError(() => rejection) } as unknown as HttpClient;
      const provider: KeycloakTokenProvider = new KeycloakTokenProvider(http, passwordConfig());
      await expect(provider.whenReady()).rejects.toThrow(expected);
      provider.ngOnDestroy();
    }

    /** An Error rejection is unwrapped to its message (describe() Error branch). */
    it("describes an Error rejection using its message", async (): Promise<void> => {
      await expectWrappedTokenError(new Error("network down"), /network down/);
    });

    /** A plain-string rejection is passed through verbatim (describe() string branch). */
    it("describes a string rejection verbatim", async (): Promise<void> => {
      await expectWrappedTokenError("string-failure", /string-failure/);
    });

    /** A plain-object rejection is JSON-rendered (describe() JSON.stringify branch). */
    it("describes a plain-object rejection as JSON", async (): Promise<void> => {
      await expectWrappedTokenError({ error: "bad", code: 503 }, /"code":503/);
    });

    /** An unserializable rejection (BigInt) falls back to the fixed catch-branch label. */
    it("describes an unserializable rejection with a fallback label", async (): Promise<void> => {
      await expectWrappedTokenError(10n, /unstringifiable error/);
    });
  });

  describe("token endpoint URL", () => {
    /** A base URL with no /auth suffix and no trailing slash builds the right path. */
    it("builds the endpoint tolerating a plain base URL", async (): Promise<void> => {
      const config: KeycloakTokenProviderConfig = passwordConfig({ keycloakUrl: "https://kc.example.com", realm: "r1" });
      TestBed.configureTestingModule({
        providers: [
          provideHttpClient(),
          provideHttpClientTesting(),
          { provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG, useValue: config },
          KeycloakTokenProvider
        ]
      });
      const httpMock: HttpTestingController = TestBed.inject(HttpTestingController);
      const provider: KeycloakTokenProvider = TestBed.inject(KeycloakTokenProvider);
      const request: TestRequest = httpMock.expectOne(
        "https://kc.example.com/realms/r1/protocol/openid-connect/token"
      );
      request.flush({ access_token: ACCESS_TOKEN_1, refresh_token: REFRESH_TOKEN_1, expires_in: EXPIRES_IN });
      await provider.whenReady();
      expect(provider.getToken()).toBe(ACCESS_TOKEN_1);
      provider.ngOnDestroy();
    });
  });
});
