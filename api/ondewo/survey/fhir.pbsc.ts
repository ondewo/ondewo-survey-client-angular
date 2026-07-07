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
import * as thisProto from './fhir.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as ondewoSurvey005 from '../../ondewo/survey/survey.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import { GRPC_FHIR_CLIENT_SETTINGS } from './fhir.pbconf';
/**
 * Service client implementation for ondewo.survey.FHIR
 */
@Injectable({ providedIn: 'any' })
export class FHIRClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.survey.FHIR/CreateFHIRSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoSurvey005.Survey>>
     */
    createFHIRSurvey: (
      requestData: thisProto.CreateFHIRSurveyRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoSurvey005.Survey>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.FHIR/CreateFHIRSurvey',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateFHIRSurveyRequest,
        responseClass: ondewoSurvey005.Survey
      });
    },
    /**
     * Unary call: /ondewo.survey.FHIR/GetFHIRSurveyAnswers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>>
     */
    getFHIRSurveyAnswers: (
      requestData: ondewoSurvey005.GetSurveyAnswersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.FHIR/GetFHIRSurveyAnswers',
        requestData,
        requestMetadata,
        requestClass: ondewoSurvey005.GetSurveyAnswersRequest,
        responseClass: thisProto.SurveyFHIRAnswersResponse
      });
    },
    /**
     * Unary call: /ondewo.survey.FHIR/GetAllFHIRSurveyAnswers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>>
     */
    getAllFHIRSurveyAnswers: (
      requestData: ondewoSurvey005.GetAllSurveyAnswersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.survey.FHIR/GetAllFHIRSurveyAnswers',
        requestData,
        requestMetadata,
        requestClass: ondewoSurvey005.GetAllSurveyAnswersRequest,
        responseClass: thisProto.SurveyFHIRAnswersResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_FHIR_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.survey.FHIR', settings);
  }

  /**
   * Unary call @/ondewo.survey.FHIR/CreateFHIRSurvey
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoSurvey005.Survey>
   */
  createFHIRSurvey(
    requestData: thisProto.CreateFHIRSurveyRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoSurvey005.Survey> {
    return this.$raw
      .createFHIRSurvey(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.survey.FHIR/GetFHIRSurveyAnswers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SurveyFHIRAnswersResponse>
   */
  getFHIRSurveyAnswers(
    requestData: ondewoSurvey005.GetSurveyAnswersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SurveyFHIRAnswersResponse> {
    return this.$raw
      .getFHIRSurveyAnswers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.survey.FHIR/GetAllFHIRSurveyAnswers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SurveyFHIRAnswersResponse>
   */
  getAllFHIRSurveyAnswers(
    requestData: ondewoSurvey005.GetAllSurveyAnswersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SurveyFHIRAnswersResponse> {
    return this.$raw
      .getAllFHIRSurveyAnswers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
