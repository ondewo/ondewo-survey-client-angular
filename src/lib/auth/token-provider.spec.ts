import { InjectionToken } from "@angular/core";
import { TOKEN_PROVIDER } from "./token-provider";

/**
 * Guards the public DI token a consuming application binds its `TokenProvider`
 * implementation to; its identity and descriptive name are part of the contract.
 */
describe("TOKEN_PROVIDER", () => {
  /** It is a real Angular `InjectionToken` carrying the documented description. */
  it("is an InjectionToken with a descriptive name", (): void => {
    expect(TOKEN_PROVIDER).toBeInstanceOf(InjectionToken);
    expect(TOKEN_PROVIDER.toString()).toContain("ONDEWO_SURVEY_TOKEN_PROVIDER");
  });
});
