# Examples — `@ondewo/survey-client-angular`

Minimal, idiomatic usage examples for the ONDEWO Survey Angular client. Each
example is exercised by a co-located `*.spec.ts` that mocks the generated gRPC
service, so the examples are verified without a live backend:

```shell
npm test
```

| Example                                              | Shows                                                                 |
| ---------------------------------------------------- | --------------------------------------------------------------------- |
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
authenticated automatically — no per-call token handling is required, as shown
in [`list-surveys.example.ts`](./list-surveys.example.ts).

> The examples import the generated stubs from the library's own public barrel
> (`../public-api`) so they compile and are tested against the freshly generated
> code in this repository. In your application, import the same symbols from the
> package name `@ondewo/survey-client-angular`.
