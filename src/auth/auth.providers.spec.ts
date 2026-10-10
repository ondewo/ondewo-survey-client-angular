import { EnvironmentProviders, Provider } from "@angular/core";
import { GRPC_INTERCEPTORS } from "@ngx-grpc/core";
import { AuthGrpcInterceptor } from "./auth-grpc.interceptor";
import { provideOndewoSurveyAuth } from "./auth.providers";
import { TOKEN_PROVIDER, TokenProvider, TokenResult } from "./token-provider";

/** A concrete `TokenProvider` the consumer would register. */
class KeycloakTokenProvider implements TokenProvider {
  /**
   * @returns a fixed token string standing in for a real Keycloak access token.
   */
  public getToken(): TokenResult {
    return "token-from-keycloak";
  }
}

/**
 * `makeEnvironmentProviders` wraps the provider array in an opaque
 * `EnvironmentProviders` whose flat list lives under the internal `ɵproviders`
 * field. Reading it lets us assert the exact wiring without bootstrapping a full
 * Angular environment injector (which would need zone.js / TestBed).
 *
 * @param environmentProviders the opaque value returned by
 *   {@link provideOndewoSurveyAuth}.
 * @returns the underlying flat list of Angular providers.
 */
function flatten(environmentProviders: EnvironmentProviders): Provider[] {
  return (environmentProviders as unknown as { ɵproviders: Provider[] }).ɵproviders;
}

/**
 * Verifies the three-way wiring produced by {@link provideOndewoSurveyAuth}: the
 * consumer's `TokenProvider` class is registered, `TOKEN_PROVIDER` aliases it via
 * `useExisting`, and `AuthGrpcInterceptor` is registered as a multi interceptor.
 */
describe("provideOndewoSurveyAuth", () => {
  /** The supplied provider class itself is registered so Angular can instantiate it. */
  it("registers the supplied TokenProvider class so it is instantiable", (): void => {
    const providers: Provider[] = flatten(provideOndewoSurveyAuth(KeycloakTokenProvider));
    expect(providers).toContain(KeycloakTokenProvider);
  });

  /** `TOKEN_PROVIDER` resolves to the same instance via a `useExisting` alias. */
  it("aliases TOKEN_PROVIDER to the supplied implementation via useExisting", (): void => {
    const providers: Provider[] = flatten(provideOndewoSurveyAuth(KeycloakTokenProvider));
    const tokenBinding: Provider | undefined = providers.find(
      (provider: Provider): boolean =>
        typeof provider === "object" && provider !== null && "provide" in provider && provider.provide === TOKEN_PROVIDER
    );
    expect(tokenBinding).toEqual({ provide: TOKEN_PROVIDER, useExisting: KeycloakTokenProvider });
  });

  /** The gRPC interceptor is appended as a `multi: true` `GRPC_INTERCEPTORS` entry. */
  it("registers AuthGrpcInterceptor as a multi GRPC_INTERCEPTORS provider", (): void => {
    const providers: Provider[] = flatten(provideOndewoSurveyAuth(KeycloakTokenProvider));
    const interceptorBinding: Provider | undefined = providers.find(
      (provider: Provider): boolean =>
        typeof provider === "object" &&
        provider !== null &&
        "provide" in provider &&
        provider.provide === GRPC_INTERCEPTORS
    );
    expect(interceptorBinding).toEqual({
      provide: GRPC_INTERCEPTORS,
      useClass: AuthGrpcInterceptor,
      multi: true
    });
  });
});
