<div align="center">
  <table>
    <tr>
      <td>
        <a href="https://ondewo.com/en/products/natural-language-understanding/">
            <img width="400px" src="https://raw.githubusercontent.com/ondewo/ondewo-logos/master/ondewo_we_automate_your_phone_calls.png"/>
        </a>
      </td>
    </tr>
    <tr>
       <td align="center">
          <a href="https://www.linkedin.com/company/ondewo "><img width="40px" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"></a>
          <a href="https://www.facebook.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733547.png"></a>
          <a href="https://twitter.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733579.png"> </a>
          <a href="https://www.instagram.com/ondewo.ai/"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/174/174855.png"></a>
          <a href="https://badge.fury.io/js/%40ondewo%2Fsurvey-client-angular"><img src="https://badge.fury.io/js/%40ondewo%2Fsurvey-client-angular.svg" alt="npm version" height="32"></a>
       </td>
    </tr>
  </table>
  <h1 align="center">
    ONDEWO SURVEY Client Angular
  </h1>
</div>

## Overview

`@ondewo/survey-client-angular` is a compiled version of the [ONDEWO SURVEY API](https://github.com/ondewo/ondewo-survey-api) using the [ONDEWO PROTO COMPILER](https://github.com/ondewo/ondewo-proto-compiler). Here you can find the SURVEY API [documentation](https://ondewo.github.io).

ONDEWO APIs use [Protocol Buffers](https://github.com/google/protobuf) version 3 (proto3) as their Interface Definition Language (IDL) to define the API interface and the structure of the payload messages. The same interface definition is used for gRPC versions of the API in all languages.

## Setup

Using NPM:

```shell
npm i --save @ondewo/survey-client-angular
```

Using GitHub:

```shell
git clone https://github.com/ondewo/ondewo-survey-client-angular.git ## Clone repository
cd ondewo-survey-client-angular                                      ## Change into repo-directoy
make setup_developer_environment_locally                          ## Install dependencies
```

## Authentication (Keycloak bearer token)

The client attaches the current Keycloak access token as an
`authorization: Bearer <token>` credential to every gRPC-web (and HTTP) request.
Wire it up **once** at application bootstrap — supply a `TokenProvider` (or the
ready-made `KeycloakTokenProvider`) and register the interceptors:

```ts
import {
  authHttpInterceptor,
  KEYCLOAK_TOKEN_PROVIDER_CONFIG,
  KeycloakTokenProvider,
  KeycloakTokenProviderConfig,
  provideOndewoSurveyAuth
} from "@ondewo/survey-client-angular";
import { provideHttpClient, withInterceptors } from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
      useValue: {
        keycloakUrl: "https://auth.example.com/auth",
        realm: "ondewo-ccai-platform",
        clientId: "ondewo-nlu-cai-sdk-public",
        username: "svc-user@example.com",
        password: "…"
      } satisfies KeycloakTokenProviderConfig
    },
    provideOndewoSurveyAuth(KeycloakTokenProvider),
    provideHttpClient(withInterceptors([authHttpInterceptor]))
  ]
});
```

Once the providers are registered, injected clients such as `SurveysClient` are
authenticated automatically — no per-call token handling is required.

## Package structure

```
npm
├── api
│   ├── google
│   │   └── api
│   │       ├── annotations.pb.d.ts
│   │       └── http.pb.d.ts
│   └── ondewo
│       └── survey
│           ├── fhir.pbconf.d.ts
│           ├── fhir.pb.d.ts
│           ├── fhir.pbsc.d.ts
│           ├── survey.pbconf.d.ts
│           ├── survey.pb.d.ts
│           └── survey.pbsc.d.ts
├── esm2022
│   ├── api
│   │   ├── google
│   │   │   └── api
│   │   │       ├── annotations.pb.mjs
│   │   │       └── http.pb.mjs
│   │   └── ondewo
│   │       └── survey
│   │           ├── fhir.pbconf.mjs
│   │           ├── fhir.pb.mjs
│   │           ├── fhir.pbsc.mjs
│   │           ├── survey.pbconf.mjs
│   │           ├── survey.pb.mjs
│   │           └── survey.pbsc.mjs
│   ├── ondewo-survey-client-angular.mjs
│   └── public-api.mjs
├── fesm2022
│   ├── ondewo-survey-client-angular.mjs
│   └── ondewo-survey-client-angular.mjs.map
├── ondewo-survey-api
│   └── README.md
├── index.d.ts
├── LICENSE
├── package.json
├── public-api.d.ts
└── README.md
```

## TLS, mutual TLS and certificates

gRPC encrypts with **TLS**; in this library the transport is **gRPC-web** over the browser's `fetch`/XHR, so TLS
means an `https://` endpoint (an Envoy or other gRPC-web proxy in front of the ONDEWO server). The **browser** owns
the handshake: it verifies the server against its own (OS / browser) trust store, and it presents a client
certificate only from its own certificate store. Application code can neither add a CA nor attach a client identity,
so this package takes no certificate or key. `buildGrpcWebHost` builds the endpoint URL from the same `host` /
`port` / `useSecureChannel` fields every ONDEWO SDK uses:

| Mode | `useSecureChannel` | Where the certificates live |
| --- | --- | --- |
| Plaintext (not for production) | `false` | none; `http://`, logged with `console.warn` naming `host:port` |
| TLS, public CA (system roots) | `true` (default) | nothing to do: the browser trusts the server certificate |
| TLS, private / custom CA | `true` (default) | the CA (`ca.pem`) imported into the OS / browser trust store of every client machine |
| Mutual TLS | `true` (default) | the proxy requests a client certificate; the browser offers one from the user's certificate store |

For mutual TLS without certificates on the client machines, let the gRPC-web proxy (Envoy) terminate the browser's
TLS and use mutual TLS on its upstream connection to the ONDEWO server.

```ts
import { GrpcCoreModule } from "@ngx-grpc/core";
import { GrpcWebClientModule } from "@ngx-grpc/grpc-web-client";
import { buildGrpcWebHost } from "@ondewo/survey-client-angular";

@NgModule({
  imports: [
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings: { host: buildGrpcWebHost({ host: "survey.example.com", port: 443 }) } // https://survey.example.com:443
    })
  ]
})
export class AppModule {}
```

Rules the code enforces (`GrpcWebEndpointError`, whose message names the field, never its value):

- `useSecureChannel` defaults to `true` (`https://`). `false` gives `http://` and a `console.warn` naming `host:port`.
- `grpcCert`, `grpcClientCert`, `grpcClientKey` (and the snake_case spellings of the other SDKs' configs) are
  **refused** when non-empty, instead of being silently dropped: never ship a private key or certificate in a browser
  bundle. Empty strings / `null` count as unset (plain TLS).
- A bare IPv6 literal is bracketed (`::1` → `https://[::1]:8443`); a bracketed host is left alone. A host with a
  scheme (`https://survey.example.com/grpc`) is used as given; then `port` must be omitted, and an `http://` URL
  together with `useSecureChannel: true` is refused. A `host:port` string is refused; use `port`.
- The certificate's subject alternative names (SAN) must match the host in the URL; a browser has no
  `ssl_target_name_override`.

Outside a browser (Node.js services, tests, CLIs) use [`@ondewo/survey-client-nodejs`](https://www.npmjs.com/package/@ondewo/survey-client-nodejs): it takes
the CA and the client certificate / key as PEM content and implements mutual TLS in code. This package runs only in a
browser (Angular, gRPC-web) and has no Node.js transport.

### A test PKI with openssl

A CA, a server certificate with SANs, and a client certificate with the `clientAuth` extended key usage. For tests
only: the keys are unencrypted.

```bash
openssl req -x509 -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes -days 365 \
  -subj "/CN=Test CA" -keyout ca.key -out ca.pem

printf 'subjectAltName=DNS:localhost,IP:127.0.0.1\nextendedKeyUsage=serverAuth\n' > server.ext
openssl req -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes \
  -subj "/CN=localhost" -keyout server.key -out server.csr
openssl x509 -req -in server.csr -CA ca.pem -CAkey ca.key -CAcreateserial -days 365 \
  -extfile server.ext -out server.pem

printf 'extendedKeyUsage=clientAuth\n' > client.ext
openssl req -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes \
  -subj "/CN=my-client" -keyout client.key -out client.csr
openssl x509 -req -in client.csr -CA ca.pem -CAkey ca.key -CAcreateserial -days 365 \
  -extfile client.ext -out client.pem

# the browser imports a client identity as PKCS#12
openssl pkcs12 -export -in client.pem -inkey client.key -certfile ca.pem -out client.p12

chmod 600 *.key *.p12
openssl verify -CAfile ca.pem server.pem client.pem
```

The gRPC-web proxy serves `server.pem` / `server.key` and, for mutual TLS, trusts `ca.pem` for its clients (Envoy:
`require_client_certificate: true` with `validation_context.trusted_ca`). The browser machine imports `ca.pem` as a
trusted root and, for mutual TLS, `client.p12` as a personal certificate.

### TLS security notes

- No secret is part of the endpoint config, so nothing in it needs redacting, and this package never logs a config.
- A private key in a web application is readable by anyone who loads the page. Keep client identities in the
  browser's certificate store (or a smart card), never in `environment.ts`, `assets/` or the bundle.
- A page served over `https://` cannot call an `http://` endpoint (mixed content); use plaintext only for local
  development with the page itself on `http://localhost`.

### TLS troubleshooting

The browser reports a failed handshake to gRPC-web as status `UNAVAILABLE` / `UNKNOWN` with little detail; the cause
is in the browser's developer tools (Network tab / console):

- **`net::ERR_CERT_AUTHORITY_INVALID`**: the server certificate is signed by a CA the browser does not trust. Import
  the CA into the OS / browser trust store, or serve a certificate from a public CA.
- **`net::ERR_CERT_COMMON_NAME_INVALID`**: the host in the URL is not in the certificate's SAN. Connect by the name in
  the SAN, or reissue the certificate with the host (`IP:` SAN for an address).
- **`net::ERR_BAD_SSL_CLIENT_AUTH_CERT`** / **`ERR_SSL_CLIENT_AUTH_CERT_NEEDED`**: the proxy requires a client
  certificate and the browser has none (or one the proxy's CA did not sign). Import the user's `.p12`, and check that
  the proxy trusts its CA.
- **Mixed content / blocked request**: the page is on `https://` and the endpoint on `http://`; use
  `useSecureChannel: true`.
- **CORS error**: not a TLS problem; the gRPC-web proxy must allow the page's origin and the `grpc-web` headers.

[comment]: <> (START OF GITHUB README)

## Build

The `make build` command is dependent on 2 `repositories` and their speciefied `version`:

- [ondewo-survey-api](https://github.com/ondewo/ondewo-survey-api) -- `SURVEY_API_GIT_BRANCH` in `Makefile`
- [ondewo-proto-compiler](https://github.com/ondewo/ondewo-proto-compiler) -- `ONDEWO_PROTO_COMPILER_GIT_BRANCH` in `Makefile`

Other than creating the proto-code, `build` also installs the `dev-dependencies` and changes the owner of the proto-files from `root` to the `current user`.

## GitHub Repository - Release Automation

The repository is published to GitHub and NPM by the Automated Release Process of ONDEWO.

TODO after PR merge:

- Checkout master

  ```shell
  git checkout master
  ```

- Pull newest state

  ```shell
  git pull
  ```

- Adjust `ONDEWO_SURVEY_VERSION` in the `Makefile` <br><br>
- Add new Release Notes to `src/RELEASE.md` in following format:

  ```
  ## Release ONDEWO Survey Angular Client X.X.X    <----- Beginning of Notes

  ...<NOTES>...

  *****************                             <----- End of Notes
  ```

- Release

  ```shell
  make ondewo_release
  ```

  <br>
  The release process can be divided into 6 Steps:

1. `build` specified version of the `ondewo-survey-api`
2. `commit and push` all changes in code resulting from the `build`
3. Publish the created `npm` folder to `npmjs.com`
4. Create and push the `release branch` e.g. `release/1.3.20`
5. Create and push the `release tag` e.g. `1.3.20`
6. Create a new `Release` on GitHub

> :warning: The Release Automation checks if the build has created all the proto-code files, but it does not check the code-integrity. Please build and test the generated code prior to starting the release process.

[comment]: <> (END OF GITHUB README)
