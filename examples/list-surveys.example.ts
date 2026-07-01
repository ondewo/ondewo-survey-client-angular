/**
 * Minimal, idiomatic usage example for `@ondewo/survey-client-angular`.
 *
 * It shows the representative flow a consuming Angular application follows:
 * inject the generated `SurveysClient`, build a request message, call a unary
 * RPC and handle the (Observable) response as a `Promise`.
 *
 * AUTH: this client attaches a Keycloak access token as an
 * `authorization: Bearer <token>` credential to every gRPC-web request. The
 * consuming application wires that up once at bootstrap — it does NOT belong in
 * a per-call service like the one below:
 *
 * ```ts
 * import {
 *   authHttpInterceptor,
 *   KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *   KeycloakTokenProvider,
 *   KeycloakTokenProviderConfig,
 *   provideOndewoSurveyAuth
 * } from "@ondewo/survey-client-angular";
 * import { provideHttpClient, withInterceptors } from "@angular/common/http";
 *
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     {
 *       provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *       useValue: {
 *         keycloakUrl: "https://auth.example.com/auth",
 *         realm: "ondewo-ccai-platform",
 *         clientId: "ondewo-nlu-cai-sdk-public",
 *         username: "svc-user@example.com",
 *         password: "…"
 *       } satisfies KeycloakTokenProviderConfig
 *     },
 *     provideOndewoSurveyAuth(KeycloakTokenProvider),
 *     provideHttpClient(withInterceptors([authHttpInterceptor]))
 *   ]
 * });
 * ```
 *
 * NOTE: A consuming application imports the symbols below from the package name
 * `@ondewo/survey-client-angular`. This in-repo example imports them from the
 * library's own public barrel (`../public-api`) so it compiles and is tested
 * against the freshly generated stubs in this repository.
 */
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { GetSurveyRequest, ListSurveysRequest, ListSurveysResponse, Survey, SurveysClient } from "../public-api";

/**
 * Example service that reads surveys through the generated {@link SurveysClient}.
 *
 * The generated client is injected by Angular DI (it declares its own
 * `providedIn: "root"` provider); each method builds the typed request message,
 * calls the unary RPC and unwraps the single-value `Observable` into a `Promise`.
 */
@Injectable({ providedIn: "root" })
export class SurveyExampleService {
  /**
   * @param surveysClient the generated `ondewo.survey.Surveys` gRPC-web client,
   *   supplied by Angular DI.
   */
  public constructor(private readonly surveysClient: SurveysClient) {}

  /**
   * List every survey on the current page.
   *
   * @param pageToken opaque pagination token; the empty string requests the
   *   first page (mirrors the `page_token` field of `ListSurveysRequest`).
   * @returns the surveys returned for the requested page (empty when none).
   */
  public async listAllSurveys(pageToken: string = ""): Promise<Survey[]> {
    const request: ListSurveysRequest = new ListSurveysRequest({ pageToken });
    const response: ListSurveysResponse = await firstValueFrom(this.surveysClient.listSurveys(request));
    return response.surveys ?? [];
  }

  /**
   * Fetch a single survey by id.
   *
   * @param surveyId the id of the survey to fetch.
   * @returns the requested {@link Survey}.
   */
  public async getSurveyById(surveyId: string): Promise<Survey> {
    const request: GetSurveyRequest = new GetSurveyRequest({ surveyId });
    const survey: Survey = await firstValueFrom(this.surveysClient.getSurvey(request));
    return survey;
  }
}
