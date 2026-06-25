import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injector, runInInjectionContext } from "@angular/core";
import { firstValueFrom, Observable, of, throwError } from "rxjs";
import { authHttpInterceptor } from "./auth-http.interceptor";
import { AUTHORIZATION_HEADER, BEARER_PREFIX } from "./resolve-token";
import { TOKEN_PROVIDER, TokenProvider, TokenResult } from "./token-provider";

/** A representative (structurally valid) JWT used across the assertions. */
const TOKEN: string = "header.payload.signature";

/** The expected `Authorization` header value for {@link TOKEN}. */
const BEARER: string = `${BEARER_PREFIX}${TOKEN}`;

/** A representative gRPC-web-over-HTTP endpoint the interceptor authorizes. */
const URL: string = "https://api.example.com/ondewo.survey.Surveys/ListSurveys";

/** A `TokenProvider` whose `getToken` returns a caller-supplied value. */
class StubTokenProvider implements TokenProvider {
  /**
   * @param value the token result every `getToken()` call should return.
   */
  public constructor(private readonly value: TokenResult) {}

  /**
   * @returns the caller-supplied token result.
   */
  public getToken(): TokenResult {
    return this.value;
  }
}

/** The outcome of driving the interceptor: the forwarded request and its event stream. */
interface RunResult {
  /** The request actually handed to the `next` handler. */
  forwarded: HttpRequest<unknown>;
  /** The stream of HTTP events the interceptor returned. */
  events: Observable<HttpEvent<unknown>>;
}

/**
 * Drive `authHttpInterceptor` inside an injection context that provides the
 * given `TokenProvider`, capturing the request actually handed to the next
 * handler. The fake `next` echoes a sentinel data event so the stream is
 * observable end-to-end.
 *
 * @param tokenResult the token result the stub `TokenProvider` should return.
 * @param request the outgoing request to feed through the interceptor.
 * @returns the forwarded request (lazily, via getter) and the event stream.
 */
function run(tokenResult: TokenResult, request: HttpRequest<unknown>): RunResult {
  const injector: Injector = Injector.create({
    providers: [{ provide: TOKEN_PROVIDER, useValue: new StubTokenProvider(tokenResult) }]
  });

  let forwarded: HttpRequest<unknown> | undefined;
  const next: HttpHandlerFn = (req: HttpRequest<unknown>): Observable<HttpEvent<unknown>> => {
    forwarded = req;
    return of({ type: 0 } as HttpEvent<unknown>);
  };

  const events: Observable<HttpEvent<unknown>> = runInInjectionContext(injector, () =>
    authHttpInterceptor(request, next)
  );
  // `forwarded` is assigned synchronously only for the sync-token paths; the
  // caller awaits `events` before reading it for async paths.
  return { get forwarded(): HttpRequest<unknown> {
      if (forwarded === undefined) {
        throw new Error("next handler was not invoked");
      }
      return forwarded;
    }, events };
}

/**
 * Build a plain `GET` request to {@link URL}, optionally carrying preset headers.
 *
 * @param headers optional headers to attach (e.g. a pre-set `Authorization`).
 * @returns the constructed request.
 */
function newRequest(headers?: HttpHeaders): HttpRequest<unknown> {
  return new HttpRequest("GET", URL, headers === undefined ? undefined : { headers });
}

/**
 * Covers the functional HTTP interceptor: it attaches a bearer header when a
 * token is available (sync/Promise/Observable), forwards untouched otherwise,
 * never overwrites a caller-set `Authorization`, and propagates token errors.
 */
describe("authHttpInterceptor", () => {
  /** A synchronous token is attached as the `Authorization` header on a clone. */
  it("attaches the bearer header when a synchronous token is present", async (): Promise<void> => {
    const result: RunResult = run(TOKEN, newRequest());
    await firstValueFrom(result.events);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** A `null` token leaves the original request object untouched (same reference). */
  it("forwards the original request untouched when the token is null", async (): Promise<void> => {
    const request: HttpRequest<unknown> = newRequest();
    const result: RunResult = run(null, request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
    expect(result.forwarded.headers.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** An empty-string token is normalized to "no token" and forwards untouched. */
  it("forwards untouched when the token is an empty string", async (): Promise<void> => {
    const request: HttpRequest<unknown> = newRequest();
    const result: RunResult = run("", request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
    expect(result.forwarded.headers.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** A `Promise`-based token is awaited before the request is sent. */
  it("resolves a Promise-based token before sending", async (): Promise<void> => {
    const result: RunResult = run(Promise.resolve(TOKEN), newRequest());
    await firstValueFrom(result.events);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** An `Observable`-based token is awaited before the request is sent. */
  it("resolves an Observable-based token before sending", async (): Promise<void> => {
    const result: RunResult = run(of(TOKEN), newRequest());
    await firstValueFrom(result.events);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** An async source resolving to `null` must not clone the request. */
  it("does not clone the request when the token source resolves to null", async (): Promise<void> => {
    const request: HttpRequest<unknown> = newRequest();
    const result: RunResult = run(Promise.resolve(null), request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
  });

  /** A caller-supplied `Authorization` header wins and is not overwritten. */
  it("leaves an explicitly-set Authorization header untouched", async (): Promise<void> => {
    const preset: string = `${BEARER_PREFIX}caller-supplied`;
    const request: HttpRequest<unknown> = newRequest(new HttpHeaders({ [AUTHORIZATION_HEADER]: preset }));
    const result: RunResult = run(TOKEN, request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(preset);
  });

  /** An error from the token source surfaces and the request is never sent. */
  it("propagates an error raised by the token source without sending the request", async (): Promise<void> => {
    const boom: Error = new Error("token refresh failed");
    const result: RunResult = run(throwError(() => boom), newRequest());
    await expect(firstValueFrom(result.events)).rejects.toBe(boom);
  });
});
