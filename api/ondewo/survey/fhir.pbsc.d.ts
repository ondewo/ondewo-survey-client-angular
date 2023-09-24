import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './fhir.pb';
import * as ondewoSurvey005 from '../../ondewo/survey/survey.pb';
import * as i0 from '@angular/core';
/**
 * Service client implementation for ondewo.survey.FHIR
 */
export declare class FHIRClient {
	private handler;
	private client;
	/**
	 * Raw RPC implementation for each service client method.
	 * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
	 * Attention: these methods do not throw errors when non-zero status codes are received.
	 */
	$raw: {
		/**
		 * Unary call: /ondewo.survey.FHIR/CreateFHIRSurvey
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<ondewoSurvey005.Survey>>
		 */
		createFHIRSurvey: (
			requestData: thisProto.CreateFHIRSurveyRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<ondewoSurvey005.Survey>>;
		/**
		 * Unary call: /ondewo.survey.FHIR/GetFHIRSurveyAnswers
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>>
		 */
		getFHIRSurveyAnswers: (
			requestData: ondewoSurvey005.GetSurveyAnswersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>>;
		/**
		 * Unary call: /ondewo.survey.FHIR/GetAllFHIRSurveyAnswers
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>>
		 */
		getAllFHIRSurveyAnswers: (
			requestData: ondewoSurvey005.GetAllSurveyAnswersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>>;
	};
	constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
	/**
	 * Unary call @/ondewo.survey.FHIR/CreateFHIRSurvey
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<ondewoSurvey005.Survey>
	 */
	createFHIRSurvey(
		requestData: thisProto.CreateFHIRSurveyRequest,
		requestMetadata?: GrpcMetadata
	): Observable<ondewoSurvey005.Survey>;
	/**
	 * Unary call @/ondewo.survey.FHIR/GetFHIRSurveyAnswers
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SurveyFHIRAnswersResponse>
	 */
	getFHIRSurveyAnswers(
		requestData: ondewoSurvey005.GetSurveyAnswersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.SurveyFHIRAnswersResponse>;
	/**
	 * Unary call @/ondewo.survey.FHIR/GetAllFHIRSurveyAnswers
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SurveyFHIRAnswersResponse>
	 */
	getAllFHIRSurveyAnswers(
		requestData: ondewoSurvey005.GetAllSurveyAnswersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.SurveyFHIRAnswersResponse>;
	static ɵfac: i0.ɵɵFactoryDeclaration<FHIRClient, [{ optional: true }, null, null]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<FHIRClient>;
}
