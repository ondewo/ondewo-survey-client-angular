import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './survey.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.survey.Surveys
 */
export declare class SurveysClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.survey.Surveys/CreateSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Survey>>
         */
        createSurvey: (requestData: thisProto.CreateSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Survey>>;
        /**
         * Unary call: /ondewo.survey.Surveys/GetSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Survey>>
         */
        getSurvey: (requestData: thisProto.GetSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Survey>>;
        /**
         * Unary call: /ondewo.survey.Surveys/UpdateSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Survey>>
         */
        updateSurvey: (requestData: thisProto.UpdateSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Survey>>;
        /**
         * Unary call: /ondewo.survey.Surveys/DeleteSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
         */
        deleteSurvey: (requestData: thisProto.DeleteSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
        /**
         * Unary call: /ondewo.survey.Surveys/ListSurveys
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListSurveysResponse>>
         */
        listSurveys: (requestData: thisProto.ListSurveysRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListSurveysResponse>>;
        /**
         * Unary call: /ondewo.survey.Surveys/GetSurveyAnswers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>
         */
        getSurveyAnswers: (requestData: thisProto.GetSurveyAnswersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>;
        /**
         * Unary call: /ondewo.survey.Surveys/GetAllSurveyAnswers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>
         */
        getAllSurveyAnswers: (requestData: thisProto.GetAllSurveyAnswersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>;
        /**
         * Unary call: /ondewo.survey.Surveys/CreateAgentSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AgentSurveyResponse>>
         */
        createAgentSurvey: (requestData: thisProto.AgentSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AgentSurveyResponse>>;
        /**
         * Unary call: /ondewo.survey.Surveys/UpdateAgentSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AgentSurveyResponse>>
         */
        updateAgentSurvey: (requestData: thisProto.AgentSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AgentSurveyResponse>>;
        /**
         * Unary call: /ondewo.survey.Surveys/DeleteAgentSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
         */
        deleteAgentSurvey: (requestData: thisProto.AgentSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.survey.Surveys/CreateSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Survey>
     */
    createSurvey(requestData: thisProto.CreateSurveyRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Survey>;
    /**
     * Unary call @/ondewo.survey.Surveys/GetSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Survey>
     */
    getSurvey(requestData: thisProto.GetSurveyRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Survey>;
    /**
     * Unary call @/ondewo.survey.Surveys/UpdateSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Survey>
     */
    updateSurvey(requestData: thisProto.UpdateSurveyRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Survey>;
    /**
     * Unary call @/ondewo.survey.Surveys/DeleteSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf003.Empty>
     */
    deleteSurvey(requestData: thisProto.DeleteSurveyRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf003.Empty>;
    /**
     * Unary call @/ondewo.survey.Surveys/ListSurveys
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListSurveysResponse>
     */
    listSurveys(requestData: thisProto.ListSurveysRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListSurveysResponse>;
    /**
     * Unary call @/ondewo.survey.Surveys/GetSurveyAnswers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SurveyAnswersResponse>
     */
    getSurveyAnswers(requestData: thisProto.GetSurveyAnswersRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.SurveyAnswersResponse>;
    /**
     * Unary call @/ondewo.survey.Surveys/GetAllSurveyAnswers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SurveyAnswersResponse>
     */
    getAllSurveyAnswers(requestData: thisProto.GetAllSurveyAnswersRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.SurveyAnswersResponse>;
    /**
     * Unary call @/ondewo.survey.Surveys/CreateAgentSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AgentSurveyResponse>
     */
    createAgentSurvey(requestData: thisProto.AgentSurveyRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.AgentSurveyResponse>;
    /**
     * Unary call @/ondewo.survey.Surveys/UpdateAgentSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AgentSurveyResponse>
     */
    updateAgentSurvey(requestData: thisProto.AgentSurveyRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.AgentSurveyResponse>;
    /**
     * Unary call @/ondewo.survey.Surveys/DeleteAgentSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf003.Empty>
     */
    deleteAgentSurvey(requestData: thisProto.AgentSurveyRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf003.Empty>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SurveysClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SurveysClient>;
}
