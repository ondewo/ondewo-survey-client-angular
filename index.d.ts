import {
	GrpcMessage,
	RecursivePartial,
	ToProtobufJSONOptions,
	GrpcMetadata,
	GrpcEvent,
	GrpcClientFactory,
	GrpcRequest
} from '@ngx-grpc/common';
import { ByteSource, BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as i0 from '@angular/core';
import { InjectionToken, OnDestroy, Type, EnvironmentProviders } from '@angular/core';
import { GrpcHandler, GrpcInterceptor } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';

/**
 * Message implementation for google.api.Http
 */
declare class Http implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): Http;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: Http): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: Http, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: Http, _writer: BinaryWriter): void;
	private _rules?;
	private _fullyDecodeReservedExpansion;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Http to deeply clone from
	 */
	constructor(_value?: RecursivePartial<Http.AsObject>);
	get rules(): HttpRule[] | undefined;
	set rules(value: HttpRule[] | undefined);
	get fullyDecodeReservedExpansion(): boolean;
	set fullyDecodeReservedExpansion(value: boolean);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): Http.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): Http.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): Http.AsProtobufJSON;
}
declare namespace Http {
	/**
	 * Standard JavaScript object representation for Http
	 */
	interface AsObject {
		rules?: HttpRule.AsObject[];
		fullyDecodeReservedExpansion: boolean;
	}
	/**
	 * Protobuf JSON representation for Http
	 */
	interface AsProtobufJSON {
		rules: HttpRule.AsProtobufJSON[] | null;
		fullyDecodeReservedExpansion: boolean;
	}
}
/**
 * Message implementation for google.api.HttpRule
 */
declare class HttpRule implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): HttpRule;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: HttpRule): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: HttpRule, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: HttpRule, _writer: BinaryWriter): void;
	private _selector;
	private _get;
	private _put;
	private _post;
	private _delete;
	private _patch;
	private _custom?;
	private _body;
	private _responseBody;
	private _additionalBindings?;
	private _pattern;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of HttpRule to deeply clone from
	 */
	constructor(_value?: RecursivePartial<HttpRule.AsObject>);
	get selector(): string;
	set selector(value: string);
	get get(): string;
	set get(value: string);
	get put(): string;
	set put(value: string);
	get post(): string;
	set post(value: string);
	get delete(): string;
	set delete(value: string);
	get patch(): string;
	set patch(value: string);
	get custom(): CustomHttpPattern | undefined;
	set custom(value: CustomHttpPattern | undefined);
	get body(): string;
	set body(value: string);
	get responseBody(): string;
	set responseBody(value: string);
	get additionalBindings(): HttpRule[] | undefined;
	set additionalBindings(value: HttpRule[] | undefined);
	get pattern(): HttpRule.PatternCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): HttpRule.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): HttpRule.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): HttpRule.AsProtobufJSON;
}
declare namespace HttpRule {
	/**
	 * Standard JavaScript object representation for HttpRule
	 */
	interface AsObject {
		selector: string;
		get: string;
		put: string;
		post: string;
		delete: string;
		patch: string;
		custom?: CustomHttpPattern.AsObject;
		body: string;
		responseBody: string;
		additionalBindings?: HttpRule.AsObject[];
	}
	/**
	 * Protobuf JSON representation for HttpRule
	 */
	interface AsProtobufJSON {
		selector: string;
		get: string | null;
		put: string | null;
		post: string | null;
		delete: string | null;
		patch: string | null;
		custom: CustomHttpPattern.AsProtobufJSON | null;
		body: string;
		responseBody: string;
		additionalBindings: HttpRule.AsProtobufJSON[] | null;
	}
	enum PatternCase {
		none = 0,
		get = 1,
		put = 2,
		post = 3,
		delete = 4,
		patch = 5,
		custom = 6
	}
}
/**
 * Message implementation for google.api.CustomHttpPattern
 */
declare class CustomHttpPattern implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CustomHttpPattern;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CustomHttpPattern): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CustomHttpPattern, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CustomHttpPattern, _writer: BinaryWriter): void;
	private _kind;
	private _path;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CustomHttpPattern to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CustomHttpPattern.AsObject>);
	get kind(): string;
	set kind(value: string);
	get path(): string;
	set path(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): CustomHttpPattern.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CustomHttpPattern.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CustomHttpPattern.AsProtobufJSON;
}
declare namespace CustomHttpPattern {
	/**
	 * Standard JavaScript object representation for CustomHttpPattern
	 */
	interface AsObject {
		kind: string;
		path: string;
	}
	/**
	 * Protobuf JSON representation for CustomHttpPattern
	 */
	interface AsProtobufJSON {
		kind: string;
		path: string;
	}
}

/**
 * Message implementation for ondewo.survey.CreateFHIRSurveyRequest
 */
declare class CreateFHIRSurveyRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CreateFHIRSurveyRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CreateFHIRSurveyRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CreateFHIRSurveyRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CreateFHIRSurveyRequest, _writer: BinaryWriter): void;
	private _fhirQuestionnaire?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateFHIRSurveyRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateFHIRSurveyRequest.AsObject>);
	get fhirQuestionnaire(): googleProtobuf006.Struct | undefined;
	set fhirQuestionnaire(value: googleProtobuf006.Struct | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): CreateFHIRSurveyRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CreateFHIRSurveyRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CreateFHIRSurveyRequest.AsProtobufJSON;
}
declare namespace CreateFHIRSurveyRequest {
	/**
	 * Standard JavaScript object representation for CreateFHIRSurveyRequest
	 */
	interface AsObject {
		fhirQuestionnaire?: googleProtobuf006.Struct.AsObject;
	}
	/**
	 * Protobuf JSON representation for CreateFHIRSurveyRequest
	 */
	interface AsProtobufJSON {
		fhirQuestionnaire: googleProtobuf006.Struct.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.survey.SurveyFHIRAnswersResponse
 */
declare class SurveyFHIRAnswersResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SurveyFHIRAnswersResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SurveyFHIRAnswersResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SurveyFHIRAnswersResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SurveyFHIRAnswersResponse, _writer: BinaryWriter): void;
	private _surveyId;
	private _fhirQuestionnaireResponses?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SurveyFHIRAnswersResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SurveyFHIRAnswersResponse.AsObject>);
	get surveyId(): string;
	set surveyId(value: string);
	get fhirQuestionnaireResponses(): googleProtobuf006.Struct[] | undefined;
	set fhirQuestionnaireResponses(value: googleProtobuf006.Struct[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SurveyFHIRAnswersResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SurveyFHIRAnswersResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SurveyFHIRAnswersResponse.AsProtobufJSON;
}
declare namespace SurveyFHIRAnswersResponse {
	/**
	 * Standard JavaScript object representation for SurveyFHIRAnswersResponse
	 */
	interface AsObject {
		surveyId: string;
		fhirQuestionnaireResponses?: googleProtobuf006.Struct.AsObject[];
	}
	/**
	 * Protobuf JSON representation for SurveyFHIRAnswersResponse
	 */
	interface AsProtobufJSON {
		surveyId: string;
		fhirQuestionnaireResponses: googleProtobuf006.Struct.AsProtobufJSON[] | null;
	}
}

/**
 * Specific GrpcClientSettings for Fhir.
 * Use it only if your default settings are not set or the service requires other settings.
 */
declare const GRPC_FHIR_CLIENT_SETTINGS: InjectionToken<any>;

declare enum SubFlow {
	SUBFLOW_UNSPECIFIED = 0,
	BOT = 1,
	LEGAL_ENTITY = 2,
	POSTAL_ADDRESS = 3,
	EMAIL_ADDRESS = 4,
	PHONE_NUMBER = 5,
	PHONE_HOURS = 6,
	EXPECTED_DURATION = 7,
	PURPOSE = 8
}
/**
 * Message implementation for ondewo.survey.Survey
 */
declare class Survey implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): Survey;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: Survey): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: Survey, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: Survey, _writer: BinaryWriter): void;
	private _surveyId;
	private _displayName;
	private _languageCode;
	private _questions?;
	private _surveyInfo?;
	private _excludeSubflows;
	private _status;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Survey to deeply clone from
	 */
	constructor(_value?: RecursivePartial<Survey.AsObject>);
	get surveyId(): string;
	set surveyId(value: string);
	get displayName(): string;
	set displayName(value: string);
	get languageCode(): string;
	set languageCode(value: string);
	get questions(): Question[] | undefined;
	set questions(value: Question[] | undefined);
	get surveyInfo(): SurveyInfo | undefined;
	set surveyInfo(value: SurveyInfo | undefined);
	get excludeSubflows(): SubFlow[];
	set excludeSubflows(value: SubFlow[]);
	get status(): Survey.AgentStatus;
	set status(value: Survey.AgentStatus);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): Survey.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): Survey.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): Survey.AsProtobufJSON;
}
declare namespace Survey {
	/**
	 * Standard JavaScript object representation for Survey
	 */
	interface AsObject {
		surveyId: string;
		displayName: string;
		languageCode: string;
		questions?: Question.AsObject[];
		surveyInfo?: SurveyInfo.AsObject;
		excludeSubflows: SubFlow[];
		status: Survey.AgentStatus;
	}
	/**
	 * Protobuf JSON representation for Survey
	 */
	interface AsProtobufJSON {
		surveyId: string;
		displayName: string;
		languageCode: string;
		questions: Question.AsProtobufJSON[] | null;
		surveyInfo: SurveyInfo.AsProtobufJSON | null;
		excludeSubflows: string[];
		status: string;
	}
	enum AgentStatus {
		TO_BE_INITIALIZED = 0,
		UPDATED = 1,
		UPDATING = 2,
		OUTDATED = 3
	}
}
/**
 * Message implementation for ondewo.survey.SurveyInfo
 */
declare class SurveyInfo implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SurveyInfo;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SurveyInfo): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SurveyInfo, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SurveyInfo, _writer: BinaryWriter): void;
	private _legalEntity;
	private _postalAddress;
	private _emailAddress;
	private _phoneNumber;
	private _phoneHours;
	private _expectedDuration;
	private _purpose;
	private _topic;
	private _legalDisclaimer;
	private _anonymous;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SurveyInfo to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SurveyInfo.AsObject>);
	get legalEntity(): string;
	set legalEntity(value: string);
	get postalAddress(): string;
	set postalAddress(value: string);
	get emailAddress(): string;
	set emailAddress(value: string);
	get phoneNumber(): string;
	set phoneNumber(value: string);
	get phoneHours(): string;
	set phoneHours(value: string);
	get expectedDuration(): string;
	set expectedDuration(value: string);
	get purpose(): string;
	set purpose(value: string);
	get topic(): string;
	set topic(value: string);
	get legalDisclaimer(): string;
	set legalDisclaimer(value: string);
	get anonymous(): boolean;
	set anonymous(value: boolean);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SurveyInfo.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SurveyInfo.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SurveyInfo.AsProtobufJSON;
}
declare namespace SurveyInfo {
	/**
	 * Standard JavaScript object representation for SurveyInfo
	 */
	interface AsObject {
		legalEntity: string;
		postalAddress: string;
		emailAddress: string;
		phoneNumber: string;
		phoneHours: string;
		expectedDuration: string;
		purpose: string;
		topic: string;
		legalDisclaimer: string;
		anonymous: boolean;
	}
	/**
	 * Protobuf JSON representation for SurveyInfo
	 */
	interface AsProtobufJSON {
		legalEntity: string;
		postalAddress: string;
		emailAddress: string;
		phoneNumber: string;
		phoneHours: string;
		expectedDuration: string;
		purpose: string;
		topic: string;
		legalDisclaimer: string;
		anonymous: boolean;
	}
}
/**
 * Message implementation for ondewo.survey.Question
 */
declare class Question implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): Question;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: Question): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: Question, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: Question, _writer: BinaryWriter): void;
	private _openQuestion?;
	private _singleChoiceQuestion?;
	private _multipleChoiceQuestion?;
	private _scaleQuestion?;
	private _singleParameterQuestion?;
	private _multipleParameterQuestion?;
	private _question;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Question to deeply clone from
	 */
	constructor(_value?: RecursivePartial<Question.AsObject>);
	get openQuestion(): OpenQuestion | undefined;
	set openQuestion(value: OpenQuestion | undefined);
	get singleChoiceQuestion(): SingleChoiceQuestion | undefined;
	set singleChoiceQuestion(value: SingleChoiceQuestion | undefined);
	get multipleChoiceQuestion(): MultipleChoiceQuestion | undefined;
	set multipleChoiceQuestion(value: MultipleChoiceQuestion | undefined);
	get scaleQuestion(): ScaleQuestion | undefined;
	set scaleQuestion(value: ScaleQuestion | undefined);
	get singleParameterQuestion(): SingleParameterQuestion | undefined;
	set singleParameterQuestion(value: SingleParameterQuestion | undefined);
	get multipleParameterQuestion(): MultipleParameterQuestion | undefined;
	set multipleParameterQuestion(value: MultipleParameterQuestion | undefined);
	get question(): Question.QuestionCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): Question.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): Question.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): Question.AsProtobufJSON;
}
declare namespace Question {
	/**
	 * Standard JavaScript object representation for Question
	 */
	interface AsObject {
		openQuestion?: OpenQuestion.AsObject;
		singleChoiceQuestion?: SingleChoiceQuestion.AsObject;
		multipleChoiceQuestion?: MultipleChoiceQuestion.AsObject;
		scaleQuestion?: ScaleQuestion.AsObject;
		singleParameterQuestion?: SingleParameterQuestion.AsObject;
		multipleParameterQuestion?: MultipleParameterQuestion.AsObject;
	}
	/**
	 * Protobuf JSON representation for Question
	 */
	interface AsProtobufJSON {
		openQuestion: OpenQuestion.AsProtobufJSON | null;
		singleChoiceQuestion: SingleChoiceQuestion.AsProtobufJSON | null;
		multipleChoiceQuestion: MultipleChoiceQuestion.AsProtobufJSON | null;
		scaleQuestion: ScaleQuestion.AsProtobufJSON | null;
		singleParameterQuestion: SingleParameterQuestion.AsProtobufJSON | null;
		multipleParameterQuestion: MultipleParameterQuestion.AsProtobufJSON | null;
	}
	enum QuestionCase {
		none = 0,
		openQuestion = 1,
		singleChoiceQuestion = 2,
		multipleChoiceQuestion = 3,
		scaleQuestion = 4,
		singleParameterQuestion = 5,
		multipleParameterQuestion = 6
	}
}
/**
 * Message implementation for ondewo.survey.OpenQuestion
 */
declare class OpenQuestion implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): OpenQuestion;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: OpenQuestion): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: OpenQuestion, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: OpenQuestion, _writer: BinaryWriter): void;
	private _questionText;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of OpenQuestion to deeply clone from
	 */
	constructor(_value?: RecursivePartial<OpenQuestion.AsObject>);
	get questionText(): string;
	set questionText(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): OpenQuestion.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): OpenQuestion.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): OpenQuestion.AsProtobufJSON;
}
declare namespace OpenQuestion {
	/**
	 * Standard JavaScript object representation for OpenQuestion
	 */
	interface AsObject {
		questionText: string;
	}
	/**
	 * Protobuf JSON representation for OpenQuestion
	 */
	interface AsProtobufJSON {
		questionText: string;
	}
}
/**
 * Message implementation for ondewo.survey.SingleChoiceQuestion
 */
declare class SingleChoiceQuestion implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SingleChoiceQuestion;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SingleChoiceQuestion): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SingleChoiceQuestion, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SingleChoiceQuestion, _writer: BinaryWriter): void;
	private _questionText;
	private _choices?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SingleChoiceQuestion to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SingleChoiceQuestion.AsObject>);
	get questionText(): string;
	set questionText(value: string);
	get choices(): Choice[] | undefined;
	set choices(value: Choice[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SingleChoiceQuestion.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SingleChoiceQuestion.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SingleChoiceQuestion.AsProtobufJSON;
}
declare namespace SingleChoiceQuestion {
	/**
	 * Standard JavaScript object representation for SingleChoiceQuestion
	 */
	interface AsObject {
		questionText: string;
		choices?: Choice.AsObject[];
	}
	/**
	 * Protobuf JSON representation for SingleChoiceQuestion
	 */
	interface AsProtobufJSON {
		questionText: string;
		choices: Choice.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.survey.MultipleChoiceQuestion
 */
declare class MultipleChoiceQuestion implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): MultipleChoiceQuestion;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: MultipleChoiceQuestion): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: MultipleChoiceQuestion, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: MultipleChoiceQuestion, _writer: BinaryWriter): void;
	private _questionText;
	private _choices?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of MultipleChoiceQuestion to deeply clone from
	 */
	constructor(_value?: RecursivePartial<MultipleChoiceQuestion.AsObject>);
	get questionText(): string;
	set questionText(value: string);
	get choices(): Choice[] | undefined;
	set choices(value: Choice[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): MultipleChoiceQuestion.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): MultipleChoiceQuestion.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): MultipleChoiceQuestion.AsProtobufJSON;
}
declare namespace MultipleChoiceQuestion {
	/**
	 * Standard JavaScript object representation for MultipleChoiceQuestion
	 */
	interface AsObject {
		questionText: string;
		choices?: Choice.AsObject[];
	}
	/**
	 * Protobuf JSON representation for MultipleChoiceQuestion
	 */
	interface AsProtobufJSON {
		questionText: string;
		choices: Choice.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.survey.ScaleQuestion
 */
declare class ScaleQuestion implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ScaleQuestion;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ScaleQuestion): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ScaleQuestion, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ScaleQuestion, _writer: BinaryWriter): void;
	private _questionText;
	private _minValue?;
	private _maxValue?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ScaleQuestion to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ScaleQuestion.AsObject>);
	get questionText(): string;
	set questionText(value: string);
	get minValue(): ScaleQuestion.ScaleValue | undefined;
	set minValue(value: ScaleQuestion.ScaleValue | undefined);
	get maxValue(): ScaleQuestion.ScaleValue | undefined;
	set maxValue(value: ScaleQuestion.ScaleValue | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ScaleQuestion.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ScaleQuestion.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ScaleQuestion.AsProtobufJSON;
}
declare namespace ScaleQuestion {
	/**
	 * Standard JavaScript object representation for ScaleQuestion
	 */
	interface AsObject {
		questionText: string;
		minValue?: ScaleQuestion.ScaleValue.AsObject;
		maxValue?: ScaleQuestion.ScaleValue.AsObject;
	}
	/**
	 * Protobuf JSON representation for ScaleQuestion
	 */
	interface AsProtobufJSON {
		questionText: string;
		minValue: ScaleQuestion.ScaleValue.AsProtobufJSON | null;
		maxValue: ScaleQuestion.ScaleValue.AsProtobufJSON | null;
	}
	/**
	 * Message implementation for ondewo.survey.ScaleQuestion.ScaleValue
	 */
	class ScaleValue implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): ScaleValue;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: ScaleValue): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: ScaleValue, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: ScaleValue, _writer: BinaryWriter): void;
		private _value;
		private _label;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of ScaleValue to deeply clone from
		 */
		constructor(_value?: RecursivePartial<ScaleValue.AsObject>);
		get value(): number;
		set value(value: number);
		get label(): string;
		set label(value: string);
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): ScaleValue.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): ScaleValue.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): ScaleValue.AsProtobufJSON;
	}
	namespace ScaleValue {
		/**
		 * Standard JavaScript object representation for ScaleValue
		 */
		interface AsObject {
			value: number;
			label: string;
		}
		/**
		 * Protobuf JSON representation for ScaleValue
		 */
		interface AsProtobufJSON {
			value: number;
			label: string;
		}
	}
}
/**
 * Message implementation for ondewo.survey.SingleParameterQuestion
 */
declare class SingleParameterQuestion implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SingleParameterQuestion;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SingleParameterQuestion): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SingleParameterQuestion, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SingleParameterQuestion, _writer: BinaryWriter): void;
	private _questionText;
	private _parameterType;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SingleParameterQuestion to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SingleParameterQuestion.AsObject>);
	get questionText(): string;
	set questionText(value: string);
	get parameterType(): string;
	set parameterType(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SingleParameterQuestion.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SingleParameterQuestion.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SingleParameterQuestion.AsProtobufJSON;
}
declare namespace SingleParameterQuestion {
	/**
	 * Standard JavaScript object representation for SingleParameterQuestion
	 */
	interface AsObject {
		questionText: string;
		parameterType: string;
	}
	/**
	 * Protobuf JSON representation for SingleParameterQuestion
	 */
	interface AsProtobufJSON {
		questionText: string;
		parameterType: string;
	}
}
/**
 * Message implementation for ondewo.survey.MultipleParameterQuestion
 */
declare class MultipleParameterQuestion implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): MultipleParameterQuestion;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: MultipleParameterQuestion): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: MultipleParameterQuestion, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: MultipleParameterQuestion, _writer: BinaryWriter): void;
	private _questionText;
	private _parameterType;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of MultipleParameterQuestion to deeply clone from
	 */
	constructor(_value?: RecursivePartial<MultipleParameterQuestion.AsObject>);
	get questionText(): string;
	set questionText(value: string);
	get parameterType(): string;
	set parameterType(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): MultipleParameterQuestion.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): MultipleParameterQuestion.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): MultipleParameterQuestion.AsProtobufJSON;
}
declare namespace MultipleParameterQuestion {
	/**
	 * Standard JavaScript object representation for MultipleParameterQuestion
	 */
	interface AsObject {
		questionText: string;
		parameterType: string;
	}
	/**
	 * Protobuf JSON representation for MultipleParameterQuestion
	 */
	interface AsProtobufJSON {
		questionText: string;
		parameterType: string;
	}
}
/**
 * Message implementation for ondewo.survey.Choice
 */
declare class Choice implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): Choice;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: Choice): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: Choice, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: Choice, _writer: BinaryWriter): void;
	private _synonyms;
	private _followUpQuestion?;
	private _value;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Choice to deeply clone from
	 */
	constructor(_value?: RecursivePartial<Choice.AsObject>);
	get synonyms(): string[];
	set synonyms(value: string[]);
	get followUpQuestion(): Question | undefined;
	set followUpQuestion(value: Question | undefined);
	get value(): string;
	set value(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): Choice.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): Choice.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): Choice.AsProtobufJSON;
}
declare namespace Choice {
	/**
	 * Standard JavaScript object representation for Choice
	 */
	interface AsObject {
		synonyms: string[];
		followUpQuestion?: Question.AsObject;
		value: string;
	}
	/**
	 * Protobuf JSON representation for Choice
	 */
	interface AsProtobufJSON {
		synonyms: string[];
		followUpQuestion: Question.AsProtobufJSON | null;
		value: string;
	}
}
/**
 * Message implementation for ondewo.survey.Answer
 */
declare class Answer implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): Answer;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: Answer): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: Answer, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: Answer, _writer: BinaryWriter): void;
	private _questionNr;
	private _sessionId;
	private _answerText;
	private _answerParameter;
	private _answerParameterOriginal;
	private _anonymous;
	private _userInformation?;
	private _isAnonymous;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Answer to deeply clone from
	 */
	constructor(_value?: RecursivePartial<Answer.AsObject>);
	get questionNr(): string;
	set questionNr(value: string);
	get sessionId(): string;
	set sessionId(value: string);
	get answerText(): string;
	set answerText(value: string);
	get answerParameter(): string;
	set answerParameter(value: string);
	get answerParameterOriginal(): string;
	set answerParameterOriginal(value: string);
	get anonymous(): boolean;
	set anonymous(value: boolean);
	get userInformation(): Answer.UserInfo | undefined;
	set userInformation(value: Answer.UserInfo | undefined);
	get isAnonymous(): Answer.IsAnonymousCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): Answer.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): Answer.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): Answer.AsProtobufJSON;
}
declare namespace Answer {
	/**
	 * Standard JavaScript object representation for Answer
	 */
	interface AsObject {
		questionNr: string;
		sessionId: string;
		answerText: string;
		answerParameter: string;
		answerParameterOriginal: string;
		anonymous: boolean;
		userInformation?: Answer.UserInfo.AsObject;
	}
	/**
	 * Protobuf JSON representation for Answer
	 */
	interface AsProtobufJSON {
		questionNr: string;
		sessionId: string;
		answerText: string;
		answerParameter: string;
		answerParameterOriginal: string;
		anonymous: boolean;
		userInformation: Answer.UserInfo.AsProtobufJSON | null;
	}
	enum IsAnonymousCase {
		none = 0,
		anonymous = 1,
		userInformation = 2
	}
	/**
	 * Message implementation for ondewo.survey.Answer.UserInfo
	 */
	class UserInfo implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): UserInfo;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: UserInfo): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: UserInfo, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: UserInfo, _writer: BinaryWriter): void;
		private _firstName;
		private _lastName;
		private _phoneNumber;
		private _sessionId;
		private _userId;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of UserInfo to deeply clone from
		 */
		constructor(_value?: RecursivePartial<UserInfo.AsObject>);
		get firstName(): string;
		set firstName(value: string);
		get lastName(): string;
		set lastName(value: string);
		get phoneNumber(): string;
		set phoneNumber(value: string);
		get sessionId(): string;
		set sessionId(value: string);
		get userId(): string;
		set userId(value: string);
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): UserInfo.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): UserInfo.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): UserInfo.AsProtobufJSON;
	}
	namespace UserInfo {
		/**
		 * Standard JavaScript object representation for UserInfo
		 */
		interface AsObject {
			firstName: string;
			lastName: string;
			phoneNumber: string;
			sessionId: string;
			userId: string;
		}
		/**
		 * Protobuf JSON representation for UserInfo
		 */
		interface AsProtobufJSON {
			firstName: string;
			lastName: string;
			phoneNumber: string;
			sessionId: string;
			userId: string;
		}
	}
}
/**
 * Message implementation for ondewo.survey.CreateSurveyRequest
 */
declare class CreateSurveyRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CreateSurveyRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CreateSurveyRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CreateSurveyRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CreateSurveyRequest, _writer: BinaryWriter): void;
	private _survey?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateSurveyRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateSurveyRequest.AsObject>);
	get survey(): Survey | undefined;
	set survey(value: Survey | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): CreateSurveyRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CreateSurveyRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CreateSurveyRequest.AsProtobufJSON;
}
declare namespace CreateSurveyRequest {
	/**
	 * Standard JavaScript object representation for CreateSurveyRequest
	 */
	interface AsObject {
		survey?: Survey.AsObject;
	}
	/**
	 * Protobuf JSON representation for CreateSurveyRequest
	 */
	interface AsProtobufJSON {
		survey: Survey.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.survey.GetSurveyRequest
 */
declare class GetSurveyRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetSurveyRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetSurveyRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetSurveyRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetSurveyRequest, _writer: BinaryWriter): void;
	private _surveyId;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetSurveyRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetSurveyRequest.AsObject>);
	get surveyId(): string;
	set surveyId(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetSurveyRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetSurveyRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetSurveyRequest.AsProtobufJSON;
}
declare namespace GetSurveyRequest {
	/**
	 * Standard JavaScript object representation for GetSurveyRequest
	 */
	interface AsObject {
		surveyId: string;
	}
	/**
	 * Protobuf JSON representation for GetSurveyRequest
	 */
	interface AsProtobufJSON {
		surveyId: string;
	}
}
/**
 * Message implementation for ondewo.survey.UpdateSurveyRequest
 */
declare class UpdateSurveyRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UpdateSurveyRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UpdateSurveyRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UpdateSurveyRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UpdateSurveyRequest, _writer: BinaryWriter): void;
	private _survey?;
	private _updateMask?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UpdateSurveyRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UpdateSurveyRequest.AsObject>);
	get survey(): Survey | undefined;
	set survey(value: Survey | undefined);
	get updateMask(): googleProtobuf006.FieldMask | undefined;
	set updateMask(value: googleProtobuf006.FieldMask | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): UpdateSurveyRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UpdateSurveyRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UpdateSurveyRequest.AsProtobufJSON;
}
declare namespace UpdateSurveyRequest {
	/**
	 * Standard JavaScript object representation for UpdateSurveyRequest
	 */
	interface AsObject {
		survey?: Survey.AsObject;
		updateMask?: googleProtobuf006.FieldMask.AsObject;
	}
	/**
	 * Protobuf JSON representation for UpdateSurveyRequest
	 */
	interface AsProtobufJSON {
		survey: Survey.AsProtobufJSON | null;
		updateMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.survey.DeleteSurveyRequest
 */
declare class DeleteSurveyRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteSurveyRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteSurveyRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteSurveyRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteSurveyRequest, _writer: BinaryWriter): void;
	private _surveyId;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteSurveyRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteSurveyRequest.AsObject>);
	get surveyId(): string;
	set surveyId(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DeleteSurveyRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteSurveyRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteSurveyRequest.AsProtobufJSON;
}
declare namespace DeleteSurveyRequest {
	/**
	 * Standard JavaScript object representation for DeleteSurveyRequest
	 */
	interface AsObject {
		surveyId: string;
	}
	/**
	 * Protobuf JSON representation for DeleteSurveyRequest
	 */
	interface AsProtobufJSON {
		surveyId: string;
	}
}
/**
 * Message implementation for ondewo.survey.GetSurveyAnswersRequest
 */
declare class GetSurveyAnswersRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetSurveyAnswersRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetSurveyAnswersRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetSurveyAnswersRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetSurveyAnswersRequest, _writer: BinaryWriter): void;
	private _surveyId;
	private _sessionId;
	private _userId;
	private _userPhoneNumber;
	private _identifier;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetSurveyAnswersRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetSurveyAnswersRequest.AsObject>);
	get surveyId(): string;
	set surveyId(value: string);
	get sessionId(): string;
	set sessionId(value: string);
	get userId(): string;
	set userId(value: string);
	get userPhoneNumber(): string;
	set userPhoneNumber(value: string);
	get identifier(): GetSurveyAnswersRequest.IdentifierCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetSurveyAnswersRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetSurveyAnswersRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetSurveyAnswersRequest.AsProtobufJSON;
}
declare namespace GetSurveyAnswersRequest {
	/**
	 * Standard JavaScript object representation for GetSurveyAnswersRequest
	 */
	interface AsObject {
		surveyId: string;
		sessionId: string;
		userId: string;
		userPhoneNumber: string;
	}
	/**
	 * Protobuf JSON representation for GetSurveyAnswersRequest
	 */
	interface AsProtobufJSON {
		surveyId: string;
		sessionId: string | null;
		userId: string | null;
		userPhoneNumber: string | null;
	}
	enum IdentifierCase {
		none = 0,
		sessionId = 1,
		userId = 2,
		userPhoneNumber = 3
	}
}
/**
 * Message implementation for ondewo.survey.GetAllSurveyAnswersRequest
 */
declare class GetAllSurveyAnswersRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetAllSurveyAnswersRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetAllSurveyAnswersRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetAllSurveyAnswersRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetAllSurveyAnswersRequest, _writer: BinaryWriter): void;
	private _surveyId;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetAllSurveyAnswersRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetAllSurveyAnswersRequest.AsObject>);
	get surveyId(): string;
	set surveyId(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetAllSurveyAnswersRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetAllSurveyAnswersRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetAllSurveyAnswersRequest.AsProtobufJSON;
}
declare namespace GetAllSurveyAnswersRequest {
	/**
	 * Standard JavaScript object representation for GetAllSurveyAnswersRequest
	 */
	interface AsObject {
		surveyId: string;
	}
	/**
	 * Protobuf JSON representation for GetAllSurveyAnswersRequest
	 */
	interface AsProtobufJSON {
		surveyId: string;
	}
}
/**
 * Message implementation for ondewo.survey.SurveyAnswersResponse
 */
declare class SurveyAnswersResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SurveyAnswersResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SurveyAnswersResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SurveyAnswersResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SurveyAnswersResponse, _writer: BinaryWriter): void;
	private _surveyId;
	private _answers?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SurveyAnswersResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SurveyAnswersResponse.AsObject>);
	get surveyId(): string;
	set surveyId(value: string);
	get answers(): Answer[] | undefined;
	set answers(value: Answer[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SurveyAnswersResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SurveyAnswersResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SurveyAnswersResponse.AsProtobufJSON;
}
declare namespace SurveyAnswersResponse {
	/**
	 * Standard JavaScript object representation for SurveyAnswersResponse
	 */
	interface AsObject {
		surveyId: string;
		answers?: Answer.AsObject[];
	}
	/**
	 * Protobuf JSON representation for SurveyAnswersResponse
	 */
	interface AsProtobufJSON {
		surveyId: string;
		answers: Answer.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.survey.ListSurveysRequest
 */
declare class ListSurveysRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSurveysRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSurveysRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSurveysRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSurveysRequest, _writer: BinaryWriter): void;
	private _pageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSurveysRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSurveysRequest.AsObject>);
	get pageToken(): string;
	set pageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListSurveysRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSurveysRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSurveysRequest.AsProtobufJSON;
}
declare namespace ListSurveysRequest {
	/**
	 * Standard JavaScript object representation for ListSurveysRequest
	 */
	interface AsObject {
		pageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListSurveysRequest
	 */
	interface AsProtobufJSON {
		pageToken: string;
	}
}
/**
 * Message implementation for ondewo.survey.ListSurveysResponse
 */
declare class ListSurveysResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListSurveysResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListSurveysResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListSurveysResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListSurveysResponse, _writer: BinaryWriter): void;
	private _surveys?;
	private _nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSurveysResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListSurveysResponse.AsObject>);
	get surveys(): Survey[] | undefined;
	set surveys(value: Survey[] | undefined);
	get nextPageToken(): string;
	set nextPageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListSurveysResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListSurveysResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListSurveysResponse.AsProtobufJSON;
}
declare namespace ListSurveysResponse {
	/**
	 * Standard JavaScript object representation for ListSurveysResponse
	 */
	interface AsObject {
		surveys?: Survey.AsObject[];
		nextPageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListSurveysResponse
	 */
	interface AsProtobufJSON {
		surveys: Survey.AsProtobufJSON[] | null;
		nextPageToken: string;
	}
}
/**
 * Message implementation for ondewo.survey.AgentSurveyRequest
 */
declare class AgentSurveyRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): AgentSurveyRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: AgentSurveyRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: AgentSurveyRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AgentSurveyRequest, _writer: BinaryWriter): void;
	private _surveyId;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AgentSurveyRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AgentSurveyRequest.AsObject>);
	get surveyId(): string;
	set surveyId(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): AgentSurveyRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): AgentSurveyRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): AgentSurveyRequest.AsProtobufJSON;
}
declare namespace AgentSurveyRequest {
	/**
	 * Standard JavaScript object representation for AgentSurveyRequest
	 */
	interface AsObject {
		surveyId: string;
	}
	/**
	 * Protobuf JSON representation for AgentSurveyRequest
	 */
	interface AsProtobufJSON {
		surveyId: string;
	}
}
/**
 * Message implementation for ondewo.survey.AgentSurveyResponse
 */
declare class AgentSurveyResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): AgentSurveyResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: AgentSurveyResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: AgentSurveyResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AgentSurveyResponse, _writer: BinaryWriter): void;
	private _parent;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AgentSurveyResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AgentSurveyResponse.AsObject>);
	get parent(): string;
	set parent(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): AgentSurveyResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): AgentSurveyResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): AgentSurveyResponse.AsProtobufJSON;
}
declare namespace AgentSurveyResponse {
	/**
	 * Standard JavaScript object representation for AgentSurveyResponse
	 */
	interface AsObject {
		parent: string;
	}
	/**
	 * Protobuf JSON representation for AgentSurveyResponse
	 */
	interface AsProtobufJSON {
		parent: string;
	}
}

/**
 * Service client implementation for ondewo.survey.FHIR
 */
declare class FHIRClient {
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
			requestData: CreateFHIRSurveyRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<Survey>>;
		/**
		 * Unary call: /ondewo.survey.FHIR/GetFHIRSurveyAnswers
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>>
		 */
		getFHIRSurveyAnswers: (
			requestData: GetSurveyAnswersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<SurveyFHIRAnswersResponse>>;
		/**
		 * Unary call: /ondewo.survey.FHIR/GetAllFHIRSurveyAnswers
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>>
		 */
		getAllFHIRSurveyAnswers: (
			requestData: GetAllSurveyAnswersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<SurveyFHIRAnswersResponse>>;
	};
	constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
	/**
	 * Unary call @/ondewo.survey.FHIR/CreateFHIRSurvey
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<ondewoSurvey005.Survey>
	 */
	createFHIRSurvey(requestData: CreateFHIRSurveyRequest, requestMetadata?: GrpcMetadata): Observable<Survey>;
	/**
	 * Unary call @/ondewo.survey.FHIR/GetFHIRSurveyAnswers
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SurveyFHIRAnswersResponse>
	 */
	getFHIRSurveyAnswers(
		requestData: GetSurveyAnswersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<SurveyFHIRAnswersResponse>;
	/**
	 * Unary call @/ondewo.survey.FHIR/GetAllFHIRSurveyAnswers
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SurveyFHIRAnswersResponse>
	 */
	getAllFHIRSurveyAnswers(
		requestData: GetAllSurveyAnswersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<SurveyFHIRAnswersResponse>;
	static ɵfac: i0.ɵɵFactoryDeclaration<FHIRClient, [{ optional: true }, null, null]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<FHIRClient>;
}

/**
 * Specific GrpcClientSettings for Surveys.
 * Use it only if your default settings are not set or the service requires other settings.
 */
declare const GRPC_SURVEYS_CLIENT_SETTINGS: InjectionToken<any>;

/**
 * Service client implementation for ondewo.survey.Surveys
 */
declare class SurveysClient {
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
		createSurvey: (requestData: CreateSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<Survey>>;
		/**
		 * Unary call: /ondewo.survey.Surveys/GetSurvey
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Survey>>
		 */
		getSurvey: (requestData: GetSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<Survey>>;
		/**
		 * Unary call: /ondewo.survey.Surveys/UpdateSurvey
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Survey>>
		 */
		updateSurvey: (requestData: UpdateSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<Survey>>;
		/**
		 * Unary call: /ondewo.survey.Surveys/DeleteSurvey
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		deleteSurvey: (
			requestData: DeleteSurveyRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf006.Empty>>;
		/**
		 * Unary call: /ondewo.survey.Surveys/ListSurveys
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListSurveysResponse>>
		 */
		listSurveys: (
			requestData: ListSurveysRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<ListSurveysResponse>>;
		/**
		 * Unary call: /ondewo.survey.Surveys/GetSurveyAnswers
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>
		 */
		getSurveyAnswers: (
			requestData: GetSurveyAnswersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<SurveyAnswersResponse>>;
		/**
		 * Unary call: /ondewo.survey.Surveys/GetAllSurveyAnswers
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>
		 */
		getAllSurveyAnswers: (
			requestData: GetAllSurveyAnswersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<SurveyAnswersResponse>>;
		/**
		 * Unary call: /ondewo.survey.Surveys/CreateAgentSurvey
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.AgentSurveyResponse>>
		 */
		createAgentSurvey: (
			requestData: AgentSurveyRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<AgentSurveyResponse>>;
		/**
		 * Unary call: /ondewo.survey.Surveys/UpdateAgentSurvey
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.AgentSurveyResponse>>
		 */
		updateAgentSurvey: (
			requestData: AgentSurveyRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<AgentSurveyResponse>>;
		/**
		 * Unary call: /ondewo.survey.Surveys/DeleteAgentSurvey
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		deleteAgentSurvey: (
			requestData: AgentSurveyRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf006.Empty>>;
	};
	constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
	/**
	 * Unary call @/ondewo.survey.Surveys/CreateSurvey
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Survey>
	 */
	createSurvey(requestData: CreateSurveyRequest, requestMetadata?: GrpcMetadata): Observable<Survey>;
	/**
	 * Unary call @/ondewo.survey.Surveys/GetSurvey
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Survey>
	 */
	getSurvey(requestData: GetSurveyRequest, requestMetadata?: GrpcMetadata): Observable<Survey>;
	/**
	 * Unary call @/ondewo.survey.Surveys/UpdateSurvey
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Survey>
	 */
	updateSurvey(requestData: UpdateSurveyRequest, requestMetadata?: GrpcMetadata): Observable<Survey>;
	/**
	 * Unary call @/ondewo.survey.Surveys/DeleteSurvey
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deleteSurvey(requestData: DeleteSurveyRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf006.Empty>;
	/**
	 * Unary call @/ondewo.survey.Surveys/ListSurveys
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListSurveysResponse>
	 */
	listSurveys(requestData: ListSurveysRequest, requestMetadata?: GrpcMetadata): Observable<ListSurveysResponse>;
	/**
	 * Unary call @/ondewo.survey.Surveys/GetSurveyAnswers
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SurveyAnswersResponse>
	 */
	getSurveyAnswers(
		requestData: GetSurveyAnswersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<SurveyAnswersResponse>;
	/**
	 * Unary call @/ondewo.survey.Surveys/GetAllSurveyAnswers
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SurveyAnswersResponse>
	 */
	getAllSurveyAnswers(
		requestData: GetAllSurveyAnswersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<SurveyAnswersResponse>;
	/**
	 * Unary call @/ondewo.survey.Surveys/CreateAgentSurvey
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.AgentSurveyResponse>
	 */
	createAgentSurvey(requestData: AgentSurveyRequest, requestMetadata?: GrpcMetadata): Observable<AgentSurveyResponse>;
	/**
	 * Unary call @/ondewo.survey.Surveys/UpdateAgentSurvey
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.AgentSurveyResponse>
	 */
	updateAgentSurvey(requestData: AgentSurveyRequest, requestMetadata?: GrpcMetadata): Observable<AgentSurveyResponse>;
	/**
	 * Unary call @/ondewo.survey.Surveys/DeleteAgentSurvey
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deleteAgentSurvey(
		requestData: AgentSurveyRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf006.Empty>;
	static ɵfac: i0.ɵɵFactoryDeclaration<SurveysClient, [{ optional: true }, null, null]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<SurveysClient>;
}

/**
 * The set of shapes a {@link TokenProvider} is allowed to return for the current
 * access token.
 *
 * - `string` — a ready, synchronous token.
 * - `null` — there is no token right now (the user is unauthenticated). The
 *   request must be sent unchanged, never with an empty `Bearer` header.
 * - `Promise<...>` / `Observable<...>` — an asynchronous source (e.g.
 *   `keycloak.updateToken()` from `keycloak-js`, or `KeycloakService` from
 *   `keycloak-angular`) that resolves to a token or `null`.
 */
type TokenResult = string | null | Promise<string | null> | Observable<string | null>;
/**
 * Contract the consuming application implements to feed the current Keycloak
 * access token into this library's auth interceptors.
 *
 * SECURITY: this client deliberately does NOT perform any OAuth/OIDC flow
 * itself — no Resource Owner Password Credentials grant, no client secret, no
 * token storage. Acquiring, refreshing and storing the token is the
 * responsibility of a dedicated, browser-safe library (`keycloak-js` /
 * `keycloak-angular`) in the host application. This client only reads the
 * current token and attaches it as a bearer credential to outgoing requests.
 *
 * Implementations should return the freshest token they have. Returning a
 * `Promise`/`Observable` lets the implementation refresh a soon-to-expire token
 * before the request is sent (e.g. `keycloak.updateToken(30)`).
 */
interface TokenProvider {
	/**
	 * Return the current access token, or `null` when the user is not
	 * authenticated. May be synchronous or asynchronous.
	 */
	getToken(): TokenResult;
}
/**
 * DI token under which the consuming application registers its
 * {@link TokenProvider} implementation.
 *
 * Example:
 *
 * ```ts
 * providers: [
 *   { provide: TOKEN_PROVIDER, useExisting: KeycloakTokenProvider },
 * ]
 * ```
 */
declare const TOKEN_PROVIDER: InjectionToken<TokenProvider>;

/**
 * Seconds of head-room subtracted from a token's `expires_in` so the background
 * refresh fires *before* the access token actually lapses (covers clock skew and
 * the round-trip to Keycloak). Mirrors the nodejs SDK's `REFRESH_SKEW_IN_S` and the
 * python SDK's `_EXPIRY_LEEWAY_S`.
 */
declare const REFRESH_SKEW_IN_S: number;
/**
 * Lower bound (in seconds) for the scheduled refresh delay so a tiny / zero
 * `expires_in` cannot spin a hot refresh loop.
 */
declare const MIN_REFRESH_DELAY_IN_S: number;
/**
 * Configuration for the {@link KeycloakTokenProvider}.
 *
 * Exactly one credential mode must be supplied:
 *
 * - an `offlineToken` (a previously-obtained offline / refresh token), or
 * - a `username` + `password` pair (Resource Owner Password Credentials grant
 *   against a *public* SDK client with the `offline_access` scope).
 *
 * The provider performs a one-time login, then keeps the short-lived access token
 * fresh in the background from the (rotating) refresh token.
 */
interface KeycloakTokenProviderConfig {
	/**
	 * Base Keycloak URL, e.g. `"https://auth.example.com/auth"` or
	 * `"https://auth.example.com"`. A trailing slash is tolerated.
	 */
	keycloakUrl: string;
	/** Realm name, e.g. `"ondewo-ccai-platform"`. */
	realm: string;
	/**
	 * Public SDK client id, e.g. `"ondewo-nlu-cai-sdk-public"`. No `client_secret`
	 * is ever sent (the client is public).
	 */
	clientId: string;
	/**
	 * A previously-obtained offline / refresh token. When set, the provider seeds
	 * its first access token via a `refresh_token` grant instead of a password
	 * login. Mutually exclusive with {@link username} / {@link password}.
	 */
	offlineToken?: string;
	/**
	 * 2FA-exempt technical-user email / username for the password grant. Required
	 * (with {@link password}) when no {@link offlineToken} is supplied.
	 */
	username?: string;
	/**
	 * Technical-user password for the password grant. Required (with
	 * {@link username}) when no {@link offlineToken} is supplied.
	 */
	password?: string;
	/**
	 * Whether to verify the Keycloak server's TLS certificate on the
	 * token-endpoint call. Defaults to `true` (secure).
	 *
	 * NO-OP IN THIS ANGULAR/BROWSER CLIENT. The token request is made with
	 * Angular's `HttpClient` (an XHR/fetch call), and in a browser the TLS
	 * handshake is owned by the user agent — there is no `https.Agent`, undici
	 * dispatcher, or `rejectUnauthorized` hook that app code can reach, and
	 * `HttpClient`'s request options expose no certificate-verification slot. The
	 * value is therefore stored on the provider for cross-SDK config parity with
	 * the Python/Node.js clients (where it does disable TLS verification) but has
	 * no effect on the outgoing request here. For a self-signed local Envoy at
	 * `https://localhost:12001/auth`, the certificate must be trusted at the
	 * browser/OS level instead.
	 */
	keycloakVerifySsl?: boolean;
}
/**
 * DI token under which the consuming application supplies the
 * {@link KeycloakTokenProviderConfig} consumed by {@link KeycloakTokenProvider}.
 *
 * Example:
 *
 * ```ts
 * providers: [
 *   {
 *     provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *     useValue: {
 *       keycloakUrl: "https://auth.example.com/auth",
 *       realm: "ondewo-ccai-platform",
 *       clientId: "ondewo-nlu-cai-sdk-public",
 *       username: "svc-user@example.com",
 *       password: "…",
 *     } satisfies KeycloakTokenProviderConfig,
 *   },
 *   provideOndewoSurveyAuth(KeycloakTokenProvider),
 * ]
 * ```
 */
declare const KEYCLOAK_TOKEN_PROVIDER_CONFIG: InjectionToken<KeycloakTokenProviderConfig>;
/** Raised on any token-endpoint failure or unusable token response. */
declare class KeycloakTokenError extends Error {
	/**
	 * @param message a human-readable description of the token failure.
	 */
	constructor(message: string);
}
/**
 * Concrete, ready-to-use {@link TokenProvider} that performs the Keycloak headless
 * offline-token flow itself so a consuming application gets background access-token
 * refresh without implementing {@link TokenProvider}.
 *
 * On construction it logs in once against the realm's OIDC token endpoint — either
 * with a supplied offline / refresh token (`grant_type=refresh_token`) or a
 * username + password (`grant_type=password`, `scope=offline_access`) against a
 * *public* SDK client (no `client_secret`). It then arms a background timer that
 * refreshes the access token shortly *before* it expires (skew + deadline clamp,
 * mirroring the nodejs `OfflineTokenProvider` and the python `KeycloakTokenProvider`).
 *
 * {@link getToken} returns the current valid access token synchronously, or `null`
 * before the first login completes (so the interceptors send the request unchanged
 * rather than with an empty `Bearer` header). Register it with
 * `provideOndewoSurveyAuth(KeycloakTokenProvider)` and supply a
 * {@link KeycloakTokenProviderConfig} under {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}.
 */
declare class KeycloakTokenProvider implements TokenProvider, OnDestroy {
	private readonly http;
	/** Pre-computed OIDC token endpoint URL for the configured realm. */
	private readonly tokenEndpoint;
	/** Public SDK client id sent on every token request (no `client_secret`). */
	private readonly clientId;
	/**
	 * Whether TLS-certificate verification is requested for the token-endpoint
	 * call. Defaults to `true`. Stored for cross-SDK config parity only — it is a
	 * NO-OP in this browser client (the browser owns the TLS handshake), so the
	 * outgoing {@link postTokenRequest} call is unaffected by its value. See
	 * {@link KeycloakTokenProviderConfig.keycloakVerifySsl}.
	 */
	private readonly verifySsl;
	/** Pre-validated form params for the one-time login grant (password or refresh). */
	private readonly loginParams;
	/** The current access token, or `null` before the first login completes. */
	private accessToken;
	/** The current (rotating) offline refresh token, or `null` before login. */
	private refreshToken;
	/** Handle of the armed refresh timer, or `null` when none is scheduled. */
	private timer;
	/** Whether {@link ngOnDestroy} ran; suppresses any further (re-)scheduling. */
	private destroyed;
	/** Resolves once the first login completes; lets callers await readiness. */
	private readonly ready;
	/**
	 * Construct the provider and start the one-time login + background refresh loop.
	 *
	 * @param http the Angular {@link HttpClient} used for the token-endpoint calls.
	 * @param config the {@link KeycloakTokenProviderConfig}, injected under
	 *   {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}.
	 * @throws KeycloakTokenError synchronously when no config is provided or the
	 *   credential fields are missing / inconsistent.
	 */
	constructor(http: HttpClient, config: KeycloakTokenProviderConfig | null);
	/**
	 * Return the current access token.
	 *
	 * @returns the current valid access token, or `null` before the first login
	 *   completes (the interceptors then forward the request unchanged).
	 */
	getToken(): TokenResult;
	/**
	 * The resolved TLS-verification setting from
	 * {@link KeycloakTokenProviderConfig.keycloakVerifySsl} (defaults to `true`).
	 *
	 * Exposed for cross-SDK config parity and introspection only. It is a NO-OP in
	 * this browser client — the browser owns the TLS handshake, so the value never
	 * reaches {@link postTokenRequest} and does not change the outgoing request.
	 *
	 * @returns `true` when TLS verification is requested (the default), `false`
	 *   when the config explicitly opted out (still inert here).
	 */
	get keycloakVerifySsl(): boolean;
	/**
	 * Await the one-time login that seeds the first access token.
	 *
	 * Awaiting is optional — {@link getToken} simply returns `null` until login
	 * completes — but a consumer can `await provider.whenReady()` at bootstrap to
	 * fail fast on bad credentials.
	 *
	 * @returns a promise that resolves once the first token is stored, or rejects
	 *   with the {@link KeycloakTokenError} from a failed login.
	 */
	whenReady(): Promise<void>;
	/** Stop the background refresh loop. Idempotent; safe to call from any state. */
	ngOnDestroy(): void;
	/**
	 * Validate a config and build the one-time login grant params from it.
	 *
	 * Prefers a `refresh_token` grant when an `offlineToken` is supplied, otherwise a
	 * `password` grant with `scope=offline_access`. This is the single point where the
	 * credential fields are validated and narrowed to `string`.
	 *
	 * @param config the config to validate.
	 * @returns the form params for the login grant.
	 * @throws KeycloakTokenError when a required base field is absent / empty, or when
	 *   neither an offline token nor a username + password pair is supplied.
	 */
	private static buildLoginParams;
	/**
	 * Perform the one-time login (using the pre-built {@link loginParams}) and arm the
	 * first refresh.
	 *
	 * @returns a promise that resolves once the first token is stored and the refresh
	 *   is armed.
	 * @throws KeycloakTokenError when the token endpoint fails or the response carries
	 *   no usable `access_token`.
	 */
	private login;
	/**
	 * Exchange the current refresh token for a fresh access token and re-arm the
	 * next refresh. No-ops once {@link ngOnDestroy} has run.
	 *
	 * @returns a promise that resolves once the token is refreshed and the next
	 *   refresh is armed.
	 * @throws KeycloakTokenError when there is no refresh token or the endpoint call
	 *   returns an unusable body.
	 */
	private refresh;
	/**
	 * Store the access token and (rotated) refresh token from a token response.
	 *
	 * Keycloak may omit the refresh token on a refresh; the previous one is kept in
	 * that case so a same-token refresh does not blank out the offline token.
	 *
	 * @param response the parsed token-endpoint response.
	 * @throws KeycloakTokenError when the response carries no `access_token`.
	 */
	private store;
	/**
	 * Arm a single timer for the next refresh.
	 *
	 * The delay is `expires_in` minus {@link REFRESH_SKEW_IN_S}, floored at
	 * {@link MIN_REFRESH_DELAY_IN_S}; a missing / non-positive `expires_in` falls
	 * back to {@link MIN_REFRESH_DELAY_IN_S}.
	 *
	 * @param expiresInRaw the `expires_in` (seconds) from the latest token response.
	 */
	private scheduleRefresh;
	/**
	 * POST a form-encoded body to the token endpoint and return the parsed JSON.
	 *
	 * @param params the form fields (grant type, client id, credentials).
	 * @returns the parsed {@link KeycloakTokenResponse}.
	 * @throws KeycloakTokenError when the request fails (the {@link HttpClient}
	 *   error is wrapped).
	 */
	private postTokenRequest;
	/**
	 * Build the realm's OIDC token endpoint URL, tolerating a trailing slash on the
	 * base URL.
	 *
	 * @param keycloakUrl the base Keycloak URL (trailing slashes are stripped).
	 * @param realm the realm name; URL-encoded into the path.
	 * @returns the fully-qualified `.../protocol/openid-connect/token` URL.
	 */
	private static buildTokenEndpoint;
	/**
	 * Render an unknown caught value as a short string for error messages.
	 *
	 * @param error the caught value.
	 * @returns the `message` of an `Error`, the value itself when it is already a
	 *   string, otherwise a JSON rendering (falling back to a fixed label for
	 *   values that cannot be stringified).
	 */
	private static describe;
	static ɵfac: i0.ɵɵFactoryDeclaration<KeycloakTokenProvider, [null, { optional: true }]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<KeycloakTokenProvider>;
}

/**
 * The HTTP / gRPC header under which the bearer credential is attached.
 *
 * Canonical `Authorization` casing: gRPC-web metadata keys and Angular
 * `HttpHeaders` are case-insensitive, so the capitalized form is safe on the
 * wire and matches the platform-wide convention.
 */
declare const AUTHORIZATION_HEADER: string;
/** The credential scheme prefix prepended to the raw access token. */
declare const BEARER_PREFIX: string;
/**
 * Normalize the value returned by a `TokenProvider.getToken()` call — which may
 * be a `string`, `null`, a `Promise` or an `Observable` — into a single
 * `Observable<string | null>` that emits exactly once.
 *
 * A non-empty token is returned trimmed; `null`, `undefined`, an empty string
 * and a whitespace-only string are all collapsed to `null` so callers have a
 * single "no usable token" signal and never build an empty `Bearer` header.
 *
 * @param result the raw value returned by `TokenProvider.getToken()`.
 * @returns an observable emitting the usable token, or `null` when absent.
 */
declare function resolveToken(result: TokenResult): Observable<string | null>;
/**
 * Build the `Authorization` header value for a resolved token, or `null` when
 * the token is absent.
 *
 * @param token a usable token, or `null`.
 * @returns the `"Bearer <token>"` string, or `null` when there is no token.
 */
declare function buildBearerValue(token: string | null): string | null;
/**
 * Convenience wrapper: emit the ready-to-use `Authorization` header value, or
 * `null` when no token is available.
 *
 * @param result the raw value returned by `TokenProvider.getToken()`.
 * @returns an observable emitting the bearer header value, or `null`.
 */
declare function resolveBearerValue(result: TokenResult): Observable<string | null>;

/**
 * Functional Angular `HttpInterceptor` that attaches the current Keycloak access
 * token as an `Authorization: Bearer <token>` header to outgoing HTTP requests.
 *
 * Behaviour:
 * - token present  → a cloned request carrying the bearer header is forwarded.
 * - token absent / empty → the original request is forwarded untouched (no empty
 *   `Bearer` header is ever sent).
 * - token source is async (Promise/Observable) → resolved before the request is
 *   sent.
 * - an existing `Authorization` header on the request is left untouched, so a
 *   caller that already set credentials explicitly wins.
 *
 * Register it in the application's HTTP pipeline:
 *
 * ```ts
 * provideHttpClient(withInterceptors([authHttpInterceptor]))
 * ```
 *
 * Errors raised by the `TokenProvider` propagate to the caller (the request is
 * not sent) so an authentication failure surfaces rather than silently issuing
 * an unauthenticated request.
 *
 * @param req the outgoing HTTP request.
 * @param next the next handler in the interceptor chain.
 * @returns the stream of HTTP events for the (possibly authorized) request.
 */
declare function authHttpInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>;

/**
 * `@ngx-grpc` interceptor that attaches the current Keycloak access token as an
 * `authorization: Bearer <token>` entry on the gRPC-web request metadata. This
 * is the gRPC-web counterpart of {@link authHttpInterceptor} and matches the
 * `@ngx-grpc` client style used by every generated `*.pbsc.ts` service client in
 * this library (e.g. `SurveysClient` and `FHIRClient` for the
 * `ondewo.survey.Surveys` / `ondewo.survey.FHIR` services).
 *
 * Behaviour mirrors the HTTP interceptor:
 * - token present → the bearer credential is set on `requestMetadata`.
 * - token absent / empty → the request metadata is left untouched (no empty
 *   `Bearer` value is ever attached).
 * - token source is async (Promise/Observable) → resolved before the request is
 *   handed to the next handler.
 * - an `authorization` entry already present on the request metadata is left
 *   untouched, so an explicitly-set credential wins.
 *
 * Register it via the standard `@ngx-grpc` multi-provider:
 *
 * ```ts
 * providers: [
 *   { provide: GRPC_INTERCEPTORS, useClass: AuthGrpcInterceptor, multi: true },
 * ]
 * ```
 */
declare class AuthGrpcInterceptor implements GrpcInterceptor {
	private readonly tokenProvider;
	/**
	 * @param tokenProvider the consuming application's {@link TokenProvider},
	 *   injected under the {@link TOKEN_PROVIDER} DI token.
	 */
	constructor(tokenProvider: TokenProvider);
	/**
	 * Attach the bearer credential (when available) to the request metadata, then
	 * delegate to the next handler in the chain.
	 *
	 * @param request the intercepted gRPC request.
	 * @param next the next handler to pass the request through.
	 * @returns the stream of gRPC events for the (possibly authorized) request.
	 */
	intercept<Q extends GrpcMessage, S extends GrpcMessage>(
		request: GrpcRequest<Q, S>,
		next: GrpcHandler
	): Observable<GrpcEvent<S>>;
	static ɵfac: i0.ɵɵFactoryDeclaration<AuthGrpcInterceptor, never>;
	static ɵprov: i0.ɵɵInjectableDeclaration<AuthGrpcInterceptor>;
}

/**
 * Wire a consuming application's {@link TokenProvider} implementation into this
 * library and register the `@ngx-grpc` {@link AuthGrpcInterceptor} that uses it.
 *
 * This covers the gRPC-web side. For HTTP requests, additionally register the
 * functional `authHttpInterceptor`:
 *
 * ```ts
 * provideHttpClient(withInterceptors([authHttpInterceptor]))
 * ```
 *
 * Usage in an application's `providers` (standalone bootstrap or `AppModule`):
 *
 * ```ts
 * import { provideOndewoSurveyAuth } from "@ondewo/survey-client-angular";
 *
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideOndewoSurveyAuth(KeycloakTokenProvider),
 *     provideHttpClient(withInterceptors([authHttpInterceptor])),
 *   ],
 * });
 * ```
 *
 * @param tokenProvider the application's `TokenProvider` class (e.g. one that
 *   wraps `keycloak-js` / `keycloak-angular`).
 * @returns environment providers binding the token provider and the gRPC
 *   interceptor.
 */
declare function provideOndewoSurveyAuth(tokenProvider: Type<TokenProvider>): EnvironmentProviders;

/**
 * Builds the gRPC-web endpoint URL (`host` setting of `@ngx-grpc/grpc-web-client`) from the
 * same `host` / `port` / `useSecureChannel` fields every ONDEWO SDK takes.
 *
 * In a browser the TLS handshake belongs to the user agent: it verifies the server against
 * its own (OS / browser) trust store and presents a client certificate only from the
 * browser's certificate store. Application code can neither add a CA nor attach a client
 * identity, and a private key must never be shipped to a browser. The certificate fields the
 * other SDKs accept (`grpcCert`, `grpcClientCert`, `grpcClientKey`) are therefore refused
 * here instead of being silently dropped.
 */
/** Connection settings for a gRPC-web endpoint (an Envoy / gRPC-web proxy in front of the ONDEWO server). */
interface GrpcWebEndpointConfig {
	/**
	 * Host name or IP address (`nlu.example.com`, `10.0.0.5`, `::1`, `[::1]`), or a complete base
	 * URL with scheme (`https://nlu.example.com:8443/grpc`), which is then used as given.
	 */
	host: string;
	/** Port; omit it for the scheme's default port. Must be omitted when `host` is a URL. */
	port?: number | string;
	/** `true` (default): `https://`. `false`: plain `http://`, logged as a warning -- never in production. */
	useSecureChannel?: boolean;
}
/**
 * Certificate / key fields of the other ONDEWO SDKs' configs (camelCase and snake_case) that a
 * browser cannot use. A non-empty value in any of them makes {@link buildGrpcWebHost} throw.
 */
declare const BROWSER_UNSUPPORTED_TLS_FIELDS: readonly string[];
/** Raised for an unusable {@link GrpcWebEndpointConfig}. The message names fields, never their values. */
declare class GrpcWebEndpointError extends Error {
	/**
	 * @param message a description of the problem that names the offending field.
	 */
	constructor(message: string);
}
/**
 * Return the gRPC-web base URL for `config`: `https://host:port` by default, `http://host:port`
 * when `useSecureChannel` is `false` (with a warning naming `host:port`). A bare IPv6 literal is
 * bracketed (`https://[::1]:8443`); a bracketed host or a host that already carries a scheme is
 * left alone.
 *
 * ```ts
 * GrpcWebClientModule.forRoot({ settings: { host: buildGrpcWebHost({ host: "nlu.example.com", port: 443 }) } })
 * ```
 *
 * @param config the endpoint settings.
 * @returns the base URL to pass as the gRPC-web client's `host` setting.
 * @throws GrpcWebEndpointError when a certificate / key field is set, the host is empty or
 *   carries a port, the port is invalid, or an `http://` URL is combined with
 *   `useSecureChannel: true`.
 */
declare function buildGrpcWebHost(config: GrpcWebEndpointConfig): string;

export {
	AUTHORIZATION_HEADER,
	AgentSurveyRequest,
	AgentSurveyResponse,
	Answer,
	AuthGrpcInterceptor,
	BEARER_PREFIX,
	BROWSER_UNSUPPORTED_TLS_FIELDS,
	Choice,
	CreateFHIRSurveyRequest,
	CreateSurveyRequest,
	CustomHttpPattern,
	DeleteSurveyRequest,
	FHIRClient,
	GRPC_FHIR_CLIENT_SETTINGS,
	GRPC_SURVEYS_CLIENT_SETTINGS,
	GetAllSurveyAnswersRequest,
	GetSurveyAnswersRequest,
	GetSurveyRequest,
	GrpcWebEndpointError,
	Http,
	HttpRule,
	KEYCLOAK_TOKEN_PROVIDER_CONFIG,
	KeycloakTokenError,
	KeycloakTokenProvider,
	ListSurveysRequest,
	ListSurveysResponse,
	MIN_REFRESH_DELAY_IN_S,
	MultipleChoiceQuestion,
	MultipleParameterQuestion,
	OpenQuestion,
	Question,
	REFRESH_SKEW_IN_S,
	ScaleQuestion,
	SingleChoiceQuestion,
	SingleParameterQuestion,
	SubFlow,
	Survey,
	SurveyAnswersResponse,
	SurveyFHIRAnswersResponse,
	SurveyInfo,
	SurveysClient,
	TOKEN_PROVIDER,
	UpdateSurveyRequest,
	authHttpInterceptor,
	buildBearerValue,
	buildGrpcWebHost,
	provideOndewoSurveyAuth,
	resolveBearerValue,
	resolveToken
};
export type { GrpcWebEndpointConfig, KeycloakTokenProviderConfig, TokenProvider, TokenResult };
