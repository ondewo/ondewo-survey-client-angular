import * as authApi from "./index";

/**
 * Guards the public barrel: every hand-written auth symbol must be re-exported
 * from `./index` so consumers can import the whole surface from one entry point.
 * A dropped or renamed export silently breaks downstream `import { … }` calls.
 */
describe("auth public API barrel", () => {
  /** Each interceptor, provider factory, helper, constant and DI token is present. */
  it("re-exports the full hand-written auth surface", (): void => {
    expect(typeof authApi.authHttpInterceptor).toBe("function");
    expect(typeof authApi.AuthGrpcInterceptor).toBe("function");
    expect(typeof authApi.provideOndewoSurveyAuth).toBe("function");
    expect(typeof authApi.resolveToken).toBe("function");
    expect(typeof authApi.resolveBearerValue).toBe("function");
    expect(typeof authApi.buildBearerValue).toBe("function");
    expect(authApi.AUTHORIZATION_HEADER).toBe("Authorization");
    expect(authApi.BEARER_PREFIX).toBe("Bearer ");
    expect(authApi.TOKEN_PROVIDER).toBeDefined();
    expect(typeof authApi.KeycloakTokenProvider).toBe("function");
    expect(typeof authApi.KeycloakTokenError).toBe("function");
    expect(authApi.KEYCLOAK_TOKEN_PROVIDER_CONFIG).toBeDefined();
    expect(authApi.REFRESH_SKEW_IN_S).toBe(30);
    expect(authApi.MIN_REFRESH_DELAY_IN_S).toBe(1);
  });
});
