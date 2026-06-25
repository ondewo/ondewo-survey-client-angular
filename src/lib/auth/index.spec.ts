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
    expect(authApi.AUTHORIZATION_HEADER).toBe("authorization");
    expect(authApi.BEARER_PREFIX).toBe("Bearer ");
    expect(authApi.TOKEN_PROVIDER).toBeDefined();
  });
});
