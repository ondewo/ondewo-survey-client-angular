# Examples — `@ondewo/survey-client-angular`

Minimal, idiomatic usage examples for the ONDEWO Survey Angular client. Each
example is exercised by a co-located `*.spec.ts` that mocks the generated gRPC
service, so the examples are verified without a live backend:

```shell
npm test
```

| Example                                                | Shows                                                                 |
| ------------------------------------------------------ | --------------------------------------------------------------------- |
| [`list-surveys.example.ts`](./list-surveys.example.ts) | Injecting `SurveysClient`, building a request, handling the response. |

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

// `config` carries the canonical env-var values (see environment.env).
bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
      useValue: {
        keycloakUrl: config.KEYCLOAK_URL,
        realm: config.KEYCLOAK_REALM,
        clientId: config.KEYCLOAK_CLIENT_ID,
        username: config.KEYCLOAK_USER_NAME,
        password: config.KEYCLOAK_PASSWORD
      } satisfies KeycloakTokenProviderConfig
    },
    provideOndewoSurveyAuth(KeycloakTokenProvider),
    provideHttpClient(withInterceptors([authHttpInterceptor]))
  ]
});
```

Once the providers are registered, injected clients such as `SurveysClient` are
authenticated automatically — no per-call token handling is required, as shown
in [`list-surveys.example.ts`](./list-surveys.example.ts).

## Configuration

Config values use the canonical ONDEWO env-var scheme — one name per concept,
shared across every ONDEWO client SDK. A non-secret template listing every
variable the examples reference lives in
[`environment.env`](./environment.env) (`ONDEWO_HOST`, `ONDEWO_PORT`,
`KEYCLOAK_URL`, `KEYCLOAK_REALM`, `KEYCLOAK_CLIENT_ID`, `KEYCLOAK_USER_NAME`,
`KEYCLOAK_PASSWORD`, `ONDEWO_SURVEY_ID`, …). Because the example is a browser
Angular service it consumes these through Angular DI rather than loading the
dotenv file directly; supply the values from your application's build/runtime
configuration and keep the names identical.

> The examples import the generated stubs from the library's own public barrel
> (`../public-api`) so they compile and are tested against the freshly generated
> code in this repository. In your application, import the same symbols from the
> package name `@ondewo/survey-client-angular`.
