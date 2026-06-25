import { firstValueFrom, Observable, of, Subject, Subscription, throwError } from "rxjs";
import {
  AUTHORIZATION_HEADER,
  BEARER_PREFIX,
  buildBearerValue,
  once,
  resolveBearerValue,
  resolveToken
} from "./resolve-token";

/** A representative (structurally valid) JWT used across the token assertions. */
const TOKEN: string = "eyJhbGciOi.payload.signature";

/**
 * Guards the public header/scheme constants that the interceptors rely on; a
 * change to either value silently breaks every request the library authorizes.
 */
describe("constants", () => {
  /** The header name must stay lower-case (HTTP/2 + gRPC-web metadata convention). */
  it("uses a lower-case authorization header name", (): void => {
    expect(AUTHORIZATION_HEADER).toBe("authorization");
  });

  /** The scheme prefix must stay the standard `"Bearer "` (with trailing space). */
  it("uses the standard bearer scheme prefix", (): void => {
    expect(BEARER_PREFIX).toBe("Bearer ");
  });
});

/**
 * Covers every shape a `TokenResult` can take (sync string, `null`, `Promise`,
 * `Observable`), the normalization rules (trim, empty/whitespace/undefined →
 * `null`), error propagation, and unsubscription teardown.
 */
describe("resolveToken", () => {
  /** A ready synchronous string token passes through unchanged. */
  it("resolves a synchronous string token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(TOKEN))).resolves.toBe(TOKEN);
  });

  /** An explicit `null` (unauthenticated) is preserved as `null`. */
  it("resolves null when the token is null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(null))).resolves.toBeNull();
  });

  /** An empty string is treated as "no token" and collapsed to `null`. */
  it("collapses an empty-string token to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(""))).resolves.toBeNull();
  });

  /** A whitespace-only string is treated as "no token" and collapsed to `null`. */
  it("collapses a whitespace-only token to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken("   "))).resolves.toBeNull();
  });

  /** A misbehaving source emitting `undefined` must yield `null`, not crash. */
  it("collapses an undefined emission from a misbehaving source to null", async (): Promise<void> => {
    // A `TokenResult` source can emit `undefined` at runtime even though the
    // type says `string | null`; it must be treated as "no token", not crash.
    const source: Observable<string | null> = of(undefined as unknown as string | null);
    await expect(firstValueFrom(resolveToken(source))).resolves.toBeNull();
  });

  /** Surrounding whitespace around a real token is trimmed off. */
  it("trims surrounding whitespace from a real token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(`  ${TOKEN}  `))).resolves.toBe(TOKEN);
  });

  /** A `Promise`-based async source is awaited and its token emitted. */
  it("resolves a Promise-based token source", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(Promise.resolve(TOKEN)))).resolves.toBe(TOKEN);
  });

  /** A `Promise` resolving to `null` is preserved as `null`. */
  it("resolves a Promise that resolves to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(Promise.resolve(null)))).resolves.toBeNull();
  });

  /** An `Observable`-based async source is subscribed and its token emitted. */
  it("resolves an Observable-based token source", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(of(TOKEN)))).resolves.toBe(TOKEN);
  });

  /** A rejected `Promise` source surfaces the original error to the consumer. */
  it("propagates an error from a Promise token source", async (): Promise<void> => {
    const boom: Error = new Error("token refresh failed");
    await expect(firstValueFrom(resolveToken(Promise.reject(boom)))).rejects.toBe(boom);
  });

  /** An erroring `Observable` source surfaces the original error to the consumer. */
  it("propagates an error from an Observable token source", async (): Promise<void> => {
    const boom: Error = new Error("token stream failed");
    await expect(firstValueFrom(resolveToken(throwError(() => boom)))).rejects.toBe(boom);
  });

  /** Unsubscribing the wrapper must tear down the underlying source subscription. */
  it("tears down the underlying subscription when the consumer unsubscribes", (): void => {
    const source: Subject<string | null> = new Subject<string | null>();
    const subscription: Subscription = resolveToken(source).subscribe();
    expect(source.observed).toBe(true);
    subscription.unsubscribe();
    expect(source.observed).toBe(false);
  });
});

/** Covers prefixing a real token and the `null` pass-through of `buildBearerValue`. */
describe("buildBearerValue", () => {
  /** A real token is prefixed with the bearer scheme. */
  it("prefixes a real token with the bearer scheme", (): void => {
    expect(buildBearerValue(TOKEN)).toBe(`${BEARER_PREFIX}${TOKEN}`);
  });

  /** A `null` token yields `null` (no empty `"Bearer "` header is ever built). */
  it("returns null for a null token", (): void => {
    expect(buildBearerValue(null)).toBeNull();
  });
});

/**
 * Covers the end-to-end convenience wrapper: resolve a `TokenResult`, normalize
 * it, and emit the ready `Authorization` header value (or `null`), including
 * error propagation and unsubscription teardown.
 */
describe("resolveBearerValue", () => {
  /** A present token is emitted as a fully-formed bearer header value. */
  it("emits the bearer header value for a present token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(TOKEN))).resolves.toBe(`${BEARER_PREFIX}${TOKEN}`);
  });

  /** An absent token (`null`) yields `null` rather than a header value. */
  it("emits null when no token is available", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(null))).resolves.toBeNull();
  });

  /** An empty token is normalized to `null` and yields `null`. */
  it("emits null for an empty token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(""))).resolves.toBeNull();
  });

  /** An error from the token source surfaces to the consumer. */
  it("propagates an error from the token source", async (): Promise<void> => {
    const boom: Error = new Error("nope");
    await expect(firstValueFrom(resolveBearerValue(throwError(() => boom)))).rejects.toBe(boom);
  });

  /** Unsubscribing the wrapper must tear down the underlying source subscription. */
  it("tears down the underlying subscription when the consumer unsubscribes", (): void => {
    const source: Subject<string | null> = new Subject<string | null>();
    const subscription: Subscription = resolveBearerValue(source).subscribe();
    expect(source.observed).toBe(true);
    subscription.unsubscribe();
    expect(source.observed).toBe(false);
  });

  /** A token pushed asynchronously through an `Observable` is emitted as a header value. */
  it("emits the bearer value for a token pushed through an Observable source", async (): Promise<void> => {
    const source: Subject<string | null> = new Subject<string | null>();
    const promise: Promise<string | null> = firstValueFrom(resolveBearerValue(source));
    source.next(TOKEN);
    source.complete();
    await expect(promise).resolves.toBe(`${BEARER_PREFIX}${TOKEN}`);
  });
});

/** Covers the single-emission `of` wrapper used to stay in the observable world. */
describe("once", () => {
  /** The wrapped value is emitted exactly once. */
  it("emits the given value exactly once", async (): Promise<void> => {
    await expect(firstValueFrom(once("value"))).resolves.toBe("value");
  });
});
