import { of } from "rxjs";
import type { ListSurveysResponse, Survey, SurveysClient } from "../public-api";
import { SurveyExampleService } from "./list-surveys.example";

/**
 * The runtime shape of the two request message classes the example constructs.
 * Only the fields the example sets are modelled; the full generated messages
 * carry serialization machinery this hermetic test never exercises.
 */
interface SurveyClientModuleMock {
  SurveysClient: new () => object;
  ListSurveysRequest: new (value?: { pageToken?: string }) => { pageToken: string };
  GetSurveyRequest: new (value?: { surveyId?: string }) => { surveyId: string };
}

/**
 * Replace the generated stubs the example imports with tiny runtime fakes. This
 * repository ships the generated classes as type declarations only (their
 * runtime lives in the published bundle), so the example's `new …Request(…)`
 * calls need a runtime constructor here. The fakes just capture the fields the
 * example sets so the assertions can read them back.
 */
jest.mock(
  "../public-api",
  (): SurveyClientModuleMock => ({
    SurveysClient: class {},
    ListSurveysRequest: class {
      public pageToken: string;

      public constructor(value?: { pageToken?: string }) {
        this.pageToken = value?.pageToken ?? "";
      }
    },
    GetSurveyRequest: class {
      public surveyId: string;

      public constructor(value?: { surveyId?: string }) {
        this.surveyId = value?.surveyId ?? "";
      }
    }
  }),
  { virtual: true }
);

/** A stand-in survey the fake client echoes back. */
const SURVEY: Survey = { surveyId: "survey-1", displayName: "NPS", languageCode: "en" } as unknown as Survey;

/** The paginated response the fake `listSurveys` emits. */
const LIST_RESPONSE: ListSurveysResponse = {
  surveys: [SURVEY],
  nextPageToken: ""
} as unknown as ListSurveysResponse;

/**
 * Build a {@link SurveyExampleService} backed by a fake `SurveysClient` whose
 * RPCs are jest mocks returning single-value observables.
 *
 * @returns the service under test plus the two RPC mocks so tests can assert on
 *   the request each one received.
 */
function buildService(): {
  service: SurveyExampleService;
  listSurveys: jest.Mock;
  getSurvey: jest.Mock;
} {
  const listSurveys: jest.Mock = jest.fn().mockReturnValue(of(LIST_RESPONSE));
  const getSurvey: jest.Mock = jest.fn().mockReturnValue(of(SURVEY));
  const client: SurveysClient = { listSurveys, getSurvey } as unknown as SurveysClient;
  return { service: new SurveyExampleService(client), listSurveys, getSurvey };
}

/**
 * Proves the example builds the correct request message for each RPC and unwraps
 * the client's `Observable` response, all without a live gRPC server.
 */
describe("SurveyExampleService", () => {
  /** `listAllSurveys` sends the page token and returns the surveys from the response. */
  it("builds a ListSurveysRequest with the page token and returns the surveys", async (): Promise<void> => {
    const pageToken: string = "page_size-10000";
    const { service, listSurveys } = buildService();

    const surveys: Survey[] = await service.listAllSurveys(pageToken);

    expect(listSurveys).toHaveBeenCalledTimes(1);
    expect(listSurveys).toHaveBeenCalledWith(expect.objectContaining({ pageToken }));
    expect(surveys).toEqual([SURVEY]);
  });

  /** With no argument, `listAllSurveys` requests the first page (empty token). */
  it("defaults to the first page when no page token is given", async (): Promise<void> => {
    const { service, listSurveys } = buildService();

    await service.listAllSurveys();

    expect(listSurveys).toHaveBeenCalledWith(expect.objectContaining({ pageToken: "" }));
  });

  /** An empty `surveys` field surfaces as an empty array, never `undefined`. */
  it("returns an empty array when the response carries no surveys", async (): Promise<void> => {
    const { service, listSurveys } = buildService();
    listSurveys.mockReturnValue(of({ surveys: undefined, nextPageToken: "" } as unknown as ListSurveysResponse));

    const surveys: Survey[] = await service.listAllSurveys();

    expect(surveys).toEqual([]);
  });

  /** `getSurveyById` sends the id and returns the single survey. */
  it("builds a GetSurveyRequest with the survey id and returns the survey", async (): Promise<void> => {
    const surveyId: string = "survey-1";
    const { service, getSurvey } = buildService();

    const survey: Survey = await service.getSurveyById(surveyId);

    expect(getSurvey).toHaveBeenCalledTimes(1);
    expect(getSurvey).toHaveBeenCalledWith(expect.objectContaining({ surveyId }));
    expect(survey).toBe(SURVEY);
  });
});
