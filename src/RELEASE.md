# Release History

*****************

## Release ONDEWO Survey Angular Client 2.0.3

### Bug Fixes

* The hand-written Keycloak bearer-auth surface (`AuthGrpcInterceptor`, `authHttpInterceptor`, the auth providers, `KeycloakTokenProvider`, `TokenProvider`) is now part of the published package. 2.0.2 announced its re-export but was built with ondewo-proto-compiler 5.10.0, which emits no such export, so no auth symbol reached npm; and with any newer compiler the build failed with `error TS2307: Cannot find module './lib/auth'`, because the sources lived under `src/lib`, the ng-packagr `dest` that ng-packagr deletes before compiling. They moved to `src/auth`, and a jest guard (`src/auth/ng-packagr-dest.spec.ts`) fails when the barrel sits inside `dest` again.

### Improvements

* **TLS endpoint builder for the browser gRPC-web client.** `buildGrpcWebHost(config)` turns the `host` / `port` / `useSecureChannel` fields every ONDEWO SDK takes into the gRPC-web base URL: `https://` by default; `http://` only with `useSecureChannel: false`, and then a `console.warn` naming `host:port`. A bare IPv6 literal is bracketed; a host that already carries an `http(s)://` scheme is used as given, and an `http://` URL together with `useSecureChannel: true` is refused.
* **Certificate and key fields are refused instead of being silently dropped.** In a browser the user agent owns the TLS handshake, so a non-empty `grpcCert`, `grpcClientCert` or `grpcClientKey` (or their snake_case spellings, listed in `BROWSER_UNSUPPORTED_TLS_FIELDS`) throws a `GrpcWebEndpointError`. An empty host, a `host:port` string and a port outside 1-65535 are refused as well. Error messages name the field, never its value.
* README: new section "TLS, mutual TLS and certificates".
* Regenerated with [ondewo-proto-compiler 5.15.7](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.15.7).
* Tracking API Version [2.0.1](https://github.com/ondewo/ondewo-survey-api/releases/tag/2.0.1) ( [Documentation](https://ondewo.github.io/ondewo-survey-api/) ); the API is now pinned to that tag instead of a feature branch. Its protos are identical to the ones 2.0.2's development tracked.
* Release tooling: release credentials reach the recipes through the environment, never a process argv (pinned by a jest test); the dead `esm2022` staging and the detached-HEAD submodule pulls no longer break the release; markdownlint runs in a single batch so parallel hooks cannot rewrite the same file.

### Tests

* Unit tests for every TLS rule above, real-handshake tests against an HTTPS server with an in-test openssl PKI, and a jest spec that pins the release-notes slice and keeps `src/RELEASE.md` identical to `RELEASE.md`.

*****************

## Release ONDEWO Survey Angular Client 2.0.2

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written `auth/` surface is now re-exported from the generated public-api barrel. It was compiled and shipped inside the package but nothing re-exported it, so importing a symbol from the package root did not resolve and consumers could only deep-import the module. The re-export is emitted by the compiler, so it survives the regeneration that rewrites the barrel on every build.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

*****************

## Release ONDEWO Survey Angular Client 2.0.1

### Improvements

* Optimized for Angular 16 (esm2022 and fesm2022)
* Tracking API Version [2.0.0](https://github.com/ondewo/ondewo-survey-api/releases/tag/2.0.0) ( [Documentation](https://ondewo.github.io/ondewo-survey-api/) )

*****************

## Release ONDEWO Survey Angular Client 2.0.0

### Improvements

* Tracking API Version [2.0.0](https://github.com/ondewo/ondewo-survey-api/releases/tag/2.0.0) ( [Documentation](https://ondewo.github.io/ondewo-survey-api/) )

*****************

## Release ONDEWO Survey Angular Client 1.1.0

* Track version 1.1.0 of [ONDEWO Survey API](https://github.com/ondewo/ondewo-survey-api/releases/1.1.0)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************

## Release ONDEWO Survey Angular Client 1.0.0

* Track version 1.0.0 of [ONDEWO Survey API](https://github.com/ondewo/ondewo-survey-api/releases/1.0.0)

*****************

## Release ONDEWO Survey Angular Client 0.6.1

* Track version 0.6.0 of [ONDEWO Survey API](https://github.com/ondewo/ondewo-survey-api/releases/tag/0.6.0)
* Upgraded to Angular >= 13.x.x and ngx-grpc >=3.0.0

*****************

## Release ONDEWO Survey Angular Client 0.6.0

* Track version 0.6.0 of [ONDEWO Survey API](https://github.com/ondewo/ondewo-survey-api/releases/0.6.0)
* Updated generation with ONDEWO Survey API 0.6.0
* Improved build scripts

*****************

## Release ONDEWO Survey Angular Client 0.5.0

* Track version 0.5.0 of [ONDEWO Survey API](https://github.com/ondewo/ondewo-survey-api/releases/0.5.0)
* Status for agent related to survey
* User information for answers of the survey (anonymous surveys are also possible)

*****************

## Release ONDEWO Survey Angular Client 0.4.1

* First Release
* Release on [NPM](https://www.npmjs.com/package/@ondewo/survey-client-angular)
* Track version 0.4.1 of [ONDEWO Survey API](https://github.com/ondewo/ondewo-survey-api/releases/0.4.1)

*****************
