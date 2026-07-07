/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './survey.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import { GRPC_SURVEYS_CLIENT_SETTINGS } from './survey.pbconf';
/**
 * Service client implementation for ondewo.survey.Surveys
 */
@Injectable({ providedIn: 'any' })
export class SurveysClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.survey.Surveys/CreateSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Survey>>
     */
    createSurvey: (
      requestData: thisProto.CreateSurveyRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Survey>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.Surveys/CreateSurvey',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateSurveyRequest,
        responseClass: thisProto.Survey
      });
    },
    /**
     * Unary call: /ondewo.survey.Surveys/GetSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Survey>>
     */
    getSurvey: (
      requestData: thisProto.GetSurveyRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Survey>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.Surveys/GetSurvey',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetSurveyRequest,
        responseClass: thisProto.Survey
      });
    },
    /**
     * Unary call: /ondewo.survey.Surveys/UpdateSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Survey>>
     */
    updateSurvey: (
      requestData: thisProto.UpdateSurveyRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Survey>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.Surveys/UpdateSurvey',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateSurveyRequest,
        responseClass: thisProto.Survey
      });
    },
    /**
     * Unary call: /ondewo.survey.Surveys/DeleteSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteSurvey: (
      requestData: thisProto.DeleteSurveyRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.Surveys/DeleteSurvey',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteSurveyRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.survey.Surveys/ListSurveys
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListSurveysResponse>>
     */
    listSurveys: (
      requestData: thisProto.ListSurveysRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListSurveysResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.Surveys/ListSurveys',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListSurveysRequest,
        responseClass: thisProto.ListSurveysResponse
      });
    },
    /**
     * Unary call: /ondewo.survey.Surveys/GetSurveyAnswers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>
     */
    getSurveyAnswers: (
      requestData: thisProto.GetSurveyAnswersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SurveyAnswersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.Surveys/GetSurveyAnswers',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetSurveyAnswersRequest,
        responseClass: thisProto.SurveyAnswersResponse
      });
    },
    /**
     * Unary call: /ondewo.survey.Surveys/GetAllSurveyAnswers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>
     */
    getAllSurveyAnswers: (
      requestData: thisProto.GetAllSurveyAnswersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SurveyAnswersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.Surveys/GetAllSurveyAnswers',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetAllSurveyAnswersRequest,
        responseClass: thisProto.SurveyAnswersResponse
      });
    },
    /**
     * Unary call: /ondewo.survey.Surveys/CreateAgentSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AgentSurveyResponse>>
     */
    createAgentSurvey: (
      requestData: thisProto.AgentSurveyRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AgentSurveyResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.Surveys/CreateAgentSurvey',
        requestData,
        requestMetadata,
        requestClass: thisProto.AgentSurveyRequest,
        responseClass: thisProto.AgentSurveyResponse
      });
    },
    /**
     * Unary call: /ondewo.survey.Surveys/UpdateAgentSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AgentSurveyResponse>>
     */
    updateAgentSurvey: (
      requestData: thisProto.AgentSurveyRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AgentSurveyResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.Surveys/UpdateAgentSurvey',
        requestData,
        requestMetadata,
        requestClass: thisProto.AgentSurveyRequest,
        responseClass: thisProto.AgentSurveyResponse
      });
    },
    /**
     * Unary call: /ondewo.survey.Surveys/DeleteAgentSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteAgentSurvey: (
      requestData: thisProto.AgentSurveyRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.Surveys/DeleteAgentSurvey',
        requestData,
        requestMetadata,
        requestClass: thisProto.AgentSurveyRequest,
        responseClass: googleProtobuf003.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_SURVEYS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.survey.Surveys', settings);
  }

  /**
   * Unary call @/ondewo.survey.Surveys/CreateSurvey
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Survey>
   */
  createSurvey(
    requestData: thisProto.CreateSurveyRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Survey> {
    return this.$raw
      .createSurvey(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.survey.Surveys/GetSurvey
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Survey>
   */
  getSurvey(
    requestData: thisProto.GetSurveyRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Survey> {
    return this.$raw
      .getSurvey(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.survey.Surveys/UpdateSurvey
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Survey>
   */
  updateSurvey(
    requestData: thisProto.UpdateSurveyRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Survey> {
    return this.$raw
      .updateSurvey(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.survey.Surveys/DeleteSurvey
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  deleteSurvey(
    requestData: thisProto.DeleteSurveyRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .deleteSurvey(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.survey.Surveys/ListSurveys
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListSurveysResponse>
   */
  listSurveys(
    requestData: thisProto.ListSurveysRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListSurveysResponse> {
    return this.$raw
      .listSurveys(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.survey.Surveys/GetSurveyAnswers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SurveyAnswersResponse>
   */
  getSurveyAnswers(
    requestData: thisProto.GetSurveyAnswersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SurveyAnswersResponse> {
    return this.$raw
      .getSurveyAnswers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.survey.Surveys/GetAllSurveyAnswers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SurveyAnswersResponse>
   */
  getAllSurveyAnswers(
    requestData: thisProto.GetAllSurveyAnswersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SurveyAnswersResponse> {
    return this.$raw
      .getAllSurveyAnswers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.survey.Surveys/CreateAgentSurvey
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AgentSurveyResponse>
   */
  createAgentSurvey(
    requestData: thisProto.AgentSurveyRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AgentSurveyResponse> {
    return this.$raw
      .createAgentSurvey(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.survey.Surveys/UpdateAgentSurvey
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AgentSurveyResponse>
   */
  updateAgentSurvey(
    requestData: thisProto.AgentSurveyRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AgentSurveyResponse> {
    return this.$raw
      .updateAgentSurvey(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.survey.Surveys/DeleteAgentSurvey
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  deleteAgentSurvey(
    requestData: thisProto.AgentSurveyRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .deleteAgentSurvey(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
