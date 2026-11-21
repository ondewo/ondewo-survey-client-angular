import { KeycloakAuthenticationError, KeycloakTokenError } from "./keycloak-token-provider";

/**
 * The error name earlier releases of this SDK raised stays importable, deprecated, as the same
 * class as the cross-SDK {@link KeycloakAuthenticationError}.
 */
describe("KeycloakTokenError (deprecated alias)", (): void => {
  it("is the very class KeycloakAuthenticationError, so instanceof matches under either name", (): void => {
    const error: KeycloakTokenError = new KeycloakTokenError("refused");
    expect(KeycloakTokenError).toBe(KeycloakAuthenticationError);
    expect(error).toBeInstanceOf(KeycloakAuthenticationError);
    expect(new KeycloakAuthenticationError("refused")).toBeInstanceOf(KeycloakTokenError);
    expect(error.name).toBe("KeycloakAuthenticationError");
    expect(error.message).toBe("refused");
  });
});
