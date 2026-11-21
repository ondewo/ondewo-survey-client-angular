/**
 * Generated bundle index. Do not edit.
 */
import { GrpcClientFactory, GrpcEvent, GrpcMessage, GrpcMetadata, GrpcRequest, RecursivePartial, ToProtobufJSONOptions } from "@ngx-grpc/common";
import { BinaryReader, BinaryWriter, ByteSource } from "google-protobuf";
import * as googleProtobuf006 from "@ngx-grpc/well-known-types";
import * as i0 from "@angular/core";
import { EnvironmentProviders, InjectionToken, OnDestroy, Type } from "@angular/core";
import { GrpcHandler, GrpcInterceptor } from "@ngx-grpc/core";
import { Observable } from "rxjs";
import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
/**
 * Message implementation for google.api.Http
 */
export declare class Http implements GrpcMessage {
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
export declare namespace Http {
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
export declare class HttpRule implements GrpcMessage {
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
export declare namespace HttpRule {
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
export declare class CustomHttpPattern implements GrpcMessage {
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
export declare namespace CustomHttpPattern {
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
export declare class CreateFHIRSurveyRequest implements GrpcMessage {
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
export declare namespace CreateFHIRSurveyRequest {
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
export declare class SurveyFHIRAnswersResponse implements GrpcMessage {
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
export declare namespace SurveyFHIRAnswersResponse {
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
export declare const GRPC_FHIR_CLIENT_SETTINGS: InjectionToken<any>;
export declare enum SubFlow {
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
export declare class Survey implements GrpcMessage {
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
export declare namespace Survey {
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
export declare class SurveyInfo implements GrpcMessage {
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
export declare namespace SurveyInfo {
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
export declare class Question implements GrpcMessage {
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
export declare namespace Question {
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
export declare class OpenQuestion implements GrpcMessage {
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
export declare namespace OpenQuestion {
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
export declare class SingleChoiceQuestion implements GrpcMessage {
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
export declare namespace SingleChoiceQuestion {
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
export declare class MultipleChoiceQuestion implements GrpcMessage {
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
export declare namespace MultipleChoiceQuestion {
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
export declare class ScaleQuestion implements GrpcMessage {
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
export declare namespace ScaleQuestion {
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
export declare class SingleParameterQuestion implements GrpcMessage {
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
export declare namespace SingleParameterQuestion {
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
export declare class MultipleParameterQuestion implements GrpcMessage {
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
export declare namespace MultipleParameterQuestion {
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
export declare class Choice implements GrpcMessage {
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
export declare namespace Choice {
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
export declare class Answer implements GrpcMessage {
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
export declare namespace Answer {
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
export declare class CreateSurveyRequest implements GrpcMessage {
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
export declare namespace CreateSurveyRequest {
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
export declare class GetSurveyRequest implements GrpcMessage {
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
export declare namespace GetSurveyRequest {
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
export declare class UpdateSurveyRequest implements GrpcMessage {
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
export declare namespace UpdateSurveyRequest {
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
export declare class DeleteSurveyRequest implements GrpcMessage {
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
export declare namespace DeleteSurveyRequest {
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
export declare class GetSurveyAnswersRequest implements GrpcMessage {
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
export declare namespace GetSurveyAnswersRequest {
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
export declare class GetAllSurveyAnswersRequest implements GrpcMessage {
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
export declare namespace GetAllSurveyAnswersRequest {
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
export declare class SurveyAnswersResponse implements GrpcMessage {
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
export declare namespace SurveyAnswersResponse {
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
export declare class ListSurveysRequest implements GrpcMessage {
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
export declare namespace ListSurveysRequest {
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
export declare class ListSurveysResponse implements GrpcMessage {
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
export declare namespace ListSurveysResponse {
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
export declare class AgentSurveyRequest implements GrpcMessage {
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
export declare namespace AgentSurveyRequest {
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
export declare class AgentSurveyResponse implements GrpcMessage {
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
export declare namespace AgentSurveyResponse {
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
    createFHIRSurvey: (requestData: CreateFHIRSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<Survey>>;
    /**
     * Unary call: /ondewo.survey.FHIR/GetFHIRSurveyAnswers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>>
     */
    getFHIRSurveyAnswers: (requestData: GetSurveyAnswersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<SurveyFHIRAnswersResponse>>;
    /**
     * Unary call: /ondewo.survey.FHIR/GetAllFHIRSurveyAnswers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>>
     */
    getAllFHIRSurveyAnswers: (requestData: GetAllSurveyAnswersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<SurveyFHIRAnswersResponse>>;
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
  getFHIRSurveyAnswers(requestData: GetSurveyAnswersRequest, requestMetadata?: GrpcMetadata): Observable<SurveyFHIRAnswersResponse>;
  /**
   * Unary call @/ondewo.survey.FHIR/GetAllFHIRSurveyAnswers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SurveyFHIRAnswersResponse>
   */
  getAllFHIRSurveyAnswers(requestData: GetAllSurveyAnswersRequest, requestMetadata?: GrpcMetadata): Observable<SurveyFHIRAnswersResponse>;
  static ɵfac: i0.ɵɵFactoryDeclaration<FHIRClient, [{
    optional: true;
  }, null, null]>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
/**
 * Specific GrpcClientSettings for Surveys.
 * Use it only if your default settings are not set or the service requires other settings.
 */
export declare const GRPC_SURVEYS_CLIENT_SETTINGS: InjectionToken<any>;
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
    deleteSurvey: (requestData: DeleteSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf006.Empty>>;
    /**
     * Unary call: /ondewo.survey.Surveys/ListSurveys
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListSurveysResponse>>
     */
    listSurveys: (requestData: ListSurveysRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ListSurveysResponse>>;
    /**
     * Unary call: /ondewo.survey.Surveys/GetSurveyAnswers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>
     */
    getSurveyAnswers: (requestData: GetSurveyAnswersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<SurveyAnswersResponse>>;
    /**
     * Unary call: /ondewo.survey.Surveys/GetAllSurveyAnswers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>
     */
    getAllSurveyAnswers: (requestData: GetAllSurveyAnswersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<SurveyAnswersResponse>>;
    /**
     * Unary call: /ondewo.survey.Surveys/CreateAgentSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AgentSurveyResponse>>
     */
    createAgentSurvey: (requestData: AgentSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<AgentSurveyResponse>>;
    /**
     * Unary call: /ondewo.survey.Surveys/UpdateAgentSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AgentSurveyResponse>>
     */
    updateAgentSurvey: (requestData: AgentSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<AgentSurveyResponse>>;
    /**
     * Unary call: /ondewo.survey.Surveys/DeleteAgentSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteAgentSurvey: (requestData: AgentSurveyRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf006.Empty>>;
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
  getSurveyAnswers(requestData: GetSurveyAnswersRequest, requestMetadata?: GrpcMetadata): Observable<SurveyAnswersResponse>;
  /**
   * Unary call @/ondewo.survey.Surveys/GetAllSurveyAnswers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SurveyAnswersResponse>
   */
  getAllSurveyAnswers(requestData: GetAllSurveyAnswersRequest, requestMetadata?: GrpcMetadata): Observable<SurveyAnswersResponse>;
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
  deleteAgentSurvey(requestData: AgentSurveyRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf006.Empty>;
  static ɵfac: i0.ɵɵFactoryDeclaration<SurveysClient, [{
    optional: true;
  }, null, null]>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
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
export type TokenResult = string | null | Promise<string | null> | Observable<string | null>;
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
export interface TokenProvider {
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
export declare const TOKEN_PROVIDER: InjectionToken<TokenProvider>;
/**
 * Seconds before `expires_at` at which the access token is refreshed (spec `EXPIRY_LEEWAY`). Covers
 * clock skew and the round trip to Keycloak. Identical in every ONDEWO client SDK.
 */
export declare const REFRESH_SKEW_IN_S: number;
/** Floor (seconds) of any background wait, so an `expires_in` of 0 cannot spin a hot loop. */
export declare const MIN_REFRESH_DELAY_IN_S: number;
/**
 * First retry delay (seconds) after a FAILED refresh. Far above {@link MIN_REFRESH_DELAY_IN_S} on
 * purpose: ondewo runs one client per call container, so clients that fail together would otherwise
 * poll a shared realm at 1 Hz, together, for the whole outage.
 */
export declare const REFRESH_RETRY_BASE_DELAY_IN_S: number;
/** Ceiling (seconds) of the failure backoff: a persistent outage is retried at most this often. */
export declare const REFRESH_RETRY_MAX_DELAY_IN_S: number;
/** Exponent cap so `2 ** n` cannot grow without bound; `5 * 2^6 = 320` already exceeds the ceiling. */
export declare const MAX_REFRESH_RETRY_EXPONENT: number;
/** Timeout (seconds) of one whole token-endpoint call. Must stay below {@link REFRESH_SKEW_IN_S}. */
export declare const HTTP_TIMEOUT_IN_S: number;
/** An error body quoted into an error message is truncated to this many characters. */
export declare const MAX_ERROR_BODY_CHARS: number;
/** How a non-empty secret is rendered by every string rendering of a configuration. */
export declare const REDACTED: string;
/** The timing constants of the token session, overridable (shrinkable) by tests. */
export interface KeycloakTimings {
  /** See {@link REFRESH_SKEW_IN_S}. */
  expiryLeewayInS: number;
  /** See {@link MIN_REFRESH_DELAY_IN_S}. */
  minRefreshDelayInS: number;
  /** See {@link REFRESH_RETRY_BASE_DELAY_IN_S}. */
  retryBaseDelayInS: number;
  /** See {@link REFRESH_RETRY_MAX_DELAY_IN_S}. */
  retryMaxDelayInS: number;
  /** See {@link MAX_REFRESH_RETRY_EXPONENT}. */
  maxRetryExponent: number;
  /** See {@link HTTP_TIMEOUT_IN_S}. */
  httpTimeoutInS: number;
  /** See {@link MAX_ERROR_BODY_CHARS}. */
  maxErrorBodyChars: number;
}
/** The production timings: exactly the constants above. */
export declare const DEFAULT_KEYCLOAK_TIMINGS: Readonly<KeycloakTimings>;
/**
 * The one error type of every Keycloak failure: login, refresh, and the lazy read of an expired
 * token. The original error, when there is one, is kept as `cause`. Its message never carries a
 * credential.
 */
export declare class KeycloakAuthenticationError extends Error {
  /**
   * @param message a human-readable description of the authentication failure.
   * @param options `cause`: the underlying error, kept as the standard `Error.cause`.
   */
  constructor(message: string, options?: ErrorOptions);
}
/**
 * Raised by a {@link KeycloakTokenTransport} when the token endpoint could not be REACHED (connection
 * refused, DNS, TLS handshake, timeout). The session reports it as "could not reach the token
 * endpoint"; any other error a transport throws is treated as a defect of the transport.
 */
export declare class KeycloakTransportError extends Error {
  /**
   * @param message what failed.
   * @param options `cause`: the underlying network error, kept as the standard `Error.cause`.
   */
  constructor(message: string, options?: ErrorOptions);
}
/** One token-endpoint request handed to a {@link KeycloakTokenTransport}. */
export interface KeycloakTokenRequest {
  /** `<keycloakUrl>/realms/<realm>/protocol/openid-connect/token`. */
  url: string;
  /** The form fields, to be sent `application/x-www-form-urlencoded`. */
  form: Record<string, string>;
  /** Timeout of the whole call (seconds). */
  timeoutInS: number;
  /** Whether to verify the endpoint's TLS certificate (a browser transport cannot honour `false`). */
  verifySsl: boolean;
}
/** The raw HTTP answer of the token endpoint. */
export interface KeycloakTokenHttpResponse {
  /** HTTP status code. */
  status: number;
  /** The raw response body. */
  body: string;
}
/**
 * POST one form to the token endpoint. Resolves with ANY HTTP answer (the session judges the status),
 * rejects with a {@link KeycloakTransportError} when no answer could be obtained.
 */
export type KeycloakTokenTransport = (request: KeycloakTokenRequest) => Promise<KeycloakTokenHttpResponse>;
/** Log sink; levels as in every ONDEWO SDK (WARNING per failed refresh, INFO on recovery). */
export interface KeycloakLogger {
  /** One line per failed refresh. */
  warn(message: string): void;
  /** One line when refreshing recovers. */
  info(message: string): void;
  /** Diagnostic detail only. */
  debug(message: string): void;
}
/** The default {@link KeycloakLogger}: the browser console. */
export declare const CONSOLE_KEYCLOAK_LOGGER: KeycloakLogger;
/** Timer seam of the background refresher. */
export interface KeycloakScheduler {
  /** Arm `fn` to run in `delayInMs`; returns a handle for {@link clearTimeout}. */
  setTimeout(fn: () => void, delayInMs: number): unknown;
  /** Disarm a handle returned by {@link setTimeout}. */
  clearTimeout(handle: unknown): void;
}
/** The default {@link KeycloakScheduler}: the global timers (looked up per call, so fakes apply). */
export declare const GLOBAL_KEYCLOAK_SCHEDULER: KeycloakScheduler;
/** Options of {@link KeycloakTokenSession.create}. `refreshToken` is deliberately the last field. */
export interface KeycloakTokenSessionOptions {
  /** Keycloak base URL, the part before `/realms/<realm>`; trailing `/` characters are stripped. */
  keycloakUrl: string;
  /** Realm, e.g. `ondewo-ccai-platform`. */
  realm: string;
  /** PUBLIC SDK client id; no client secret exists and none is ever sent. */
  clientId: string;
  /** Technical user of the password grant. */
  username?: string;
  /** Technical-user password. SECRET. */
  password?: string;
  /** Bounds auto-refresh, measured from the initial token acquisition; absent = unbounded. */
  tokenExpirationInS?: number | null;
  /** TLS verification of the token-endpoint call only (default `true`). */
  verifySsl?: boolean;
  /** The HTTP exchange with the token endpoint. */
  transport: KeycloakTokenTransport;
  /** MONOTONIC clock in seconds; defaults to `performance.now() / 1000`. */
  timeFn?: () => number;
  /** [0,1] jitter source of the failure backoff; defaults to `Math.random`. */
  randomFn?: () => number;
  /** Timer seam of the background refresher. */
  scheduler?: KeycloakScheduler;
  /** Log sink; defaults to the console. */
  logger?: KeycloakLogger;
  /** `false` skips the background refresher (test seam); default `true`. */
  startBackgroundRefresh?: boolean;
  /** Overrides of {@link DEFAULT_KEYCLOAK_TIMINGS} (test seam). */
  timings?: Partial<KeycloakTimings>;
  /** A handed-off Keycloak OFFLINE refresh token used instead of the password. SECRET. */
  refreshToken?: string;
}
/** Options of {@link KeycloakTokenSession.getAccessToken}. */
export interface KeycloakAccessTokenOptions {
  /**
   * Refresh even when the token still looks comfortably valid (e.g. after the server answered
   * `UNAUTHENTICATED`). A running backoff and the `tokenExpirationInS` deadline still apply.
   */
  force?: boolean;
}
/**
 * Full-jitter backoff delay (seconds) after `consecutiveFailures` failed refreshes: uniform in
 * `[base, ceiling]`, the ceiling doubling per failure up to the maximum.
 *
 * @param consecutiveFailures how many refreshes failed in a row (values below 1 count as 1).
 * @param randomFn jitter source; its value is clamped to [0, 1].
 * @param timings the timing constants to use.
 * @returns the delay in seconds.
 */
export declare function backoffDelayInS(consecutiveFailures: number, randomFn: () => number, timings?: Readonly<KeycloakTimings>): number;
/**
 * @param value a secret, possibly empty.
 * @returns {@link REDACTED} for a non-empty secret, the empty string otherwise.
 */
export declare function redactSecret(value: string | undefined | null): string;
/**
 * The fields that identify one credential set, in the order the shared-session key hashes them.
 */
export interface KeycloakCredentialFields {
  /** Keycloak base URL. */
  keycloakUrl: string;
  /** Realm. */
  realm: string;
  /** Public client id. */
  clientId: string;
  /** Technical user. */
  username?: string;
  /** Password. */
  password?: string;
  /** Auto-refresh bound. */
  tokenExpirationInS?: number | null;
  /** TLS verification flag. */
  verifySsl?: boolean;
  /** Offline refresh token. */
  refreshToken?: string;
}
/**
 * Key of the shared-session registry: SHA-256 hex of the credential fields joined with NUL, in the
 * order of every ONDEWO SDK. Never an object identity, and it holds no secret substring.
 *
 * @param fields the credential set.
 * @returns 64 hex characters.
 */
export declare function keycloakSessionRegistryKey(fields: KeycloakCredentialFields): string;
/**
 * One Keycloak login and the access token it keeps fresh: the framework-free core of
 * `KeycloakTokenProvider`, behaving exactly like the token provider of every other ONDEWO SDK.
 *
 * - Start-up ({@link create}): ONE refresh grant with a handed-off offline token, or else ONE password
 *   grant. A refused offline token is never answered with a password login.
 * - Lazy path ({@link getAccessToken} / {@link authorizationMetadata}): inside {@link REFRESH_SKEW_IN_S}
 *   of expiry one refresh grant is sent, shared by every concurrent caller; while it fails, the
 *   still-valid token keeps being served and the jittered backoff decides when the next request may
 *   go out. Only an EXPIRED token whose refresh fails raises.
 * - Background: a timer refreshes ahead of expiry; no failure ever ends it, it backs off instead.
 *   It ends on {@link stop} or once `tokenExpirationInS` has elapsed.
 */
export declare class KeycloakTokenSession {
  /** Keycloak base URL without trailing `/`. */
  readonly keycloakUrl: string;
  /** Realm. */
  readonly realm: string;
  /** Public client id. */
  readonly clientId: string;
  /** Technical user. */
  readonly username: string;
  /** Auto-refresh bound in seconds, or `null`. */
  readonly tokenExpirationInS: number | null;
  /** TLS verification flag of the token-endpoint call. */
  readonly verifySsl: boolean;
  /** Password; never rendered. */
  private readonly password;
  /** The offline token handed in at start-up; never rendered. */
  private readonly configuredRefreshToken;
  /** Token endpoint URL. */
  private readonly tokenEndpoint;
  /** HTTP exchange. */
  private readonly transport;
  /** Monotonic clock (seconds). */
  private readonly timeFn;
  /** Backoff jitter. */
  private readonly randomFn;
  /** Timer seam. */
  private readonly scheduler;
  /** Log sink. */
  private readonly logger;
  /** Timing constants. */
  private readonly timings;
  /** The current access token. */
  private currentAccessToken;
  /** The current refresh token (rotated by Keycloak, kept when a response carries none). */
  private currentRefreshToken;
  /** Monotonic second at which the access token lapses. */
  private expiresAt;
  /** Monotonic second after which auto-refresh stops, or `null`. */
  private loginDeadline;
  /** Consecutive failed refreshes; shared by the lazy path and the background refresher. */
  private failures;
  /** No refresh request is sent before this monotonic second (0 = no backoff running). */
  private nextAttemptAt;
  /** The refresh attempt in flight, shared by every caller. */
  private inFlight;
  /** The armed background timer handle. */
  private timer;
  /** Whether a background timer is armed. */
  private timerArmed;
  /** Whether the background refresher has ended. */
  private backgroundStopped;
  /** Whether {@link stop} ran. */
  private stopCalled;
  /**
   * @param options the session options.
   */
  private constructor();
  /**
   * Acquire the first token and start the background refresher.
   *
   * @param options the session options.
   * @returns the started session.
   * @throws KeycloakAuthenticationError when the initial acquisition fails (nothing is retried and
   *   no refresher is started).
   */
  static create(options: KeycloakTokenSessionOptions): Promise<KeycloakTokenSession>;
  /** @returns the current access token as stored, without any refresh decision. */
  get accessToken(): string;
  /** @returns the monotonic second at which the current access token lapses. */
  get accessTokenExpiresAt(): number;
  /** @returns the monotonic second after which auto-refresh stops, or `null`. */
  get autoRefreshDeadline(): number | null;
  /** @returns how many refreshes have failed in a row. */
  get consecutiveFailures(): number;
  /** @returns the monotonic second before which no refresh request is sent (0 = none pending). */
  get nextRefreshAttemptAt(): number;
  /** @returns whether the background refresher is still running. */
  get backgroundRefreshActive(): boolean;
  /** @returns whether {@link stop} was called. */
  get closed(): boolean;
  /**
   * The access token if it may be served WITHOUT a refresh decision that could send a request:
   * comfortably valid, or past the auto-refresh deadline. Lets an interceptor stay synchronous.
   *
   * @returns the token, or `null` when the caller must go through {@link getAccessToken}.
   */
  peekAccessToken(): string | null;
  /**
   * The access token to send right now, refreshing first when it is inside the leeway.
   *
   * @param options `force`: refresh even when the token still looks comfortably valid.
   * @returns the access token.
   * @throws KeycloakAuthenticationError when the token has expired and cannot be refreshed.
   */
  getAccessToken(options?: KeycloakAccessTokenOptions): Promise<string>;
  /**
   * The gRPC metadata entry to attach to an RPC.
   *
   * @returns `["authorization", "Bearer <token>"]`.
   * @throws KeycloakAuthenticationError when the token has expired and cannot be refreshed.
   */
  authorizationMetadata(): Promise<[string, string]>;
  /**
   * Stop the background refresher, interrupting a pending wait (a backoff wait included) so no
   * further request is sent. Idempotent and safe from any state, also from inside a refresh. The lazy
   * path keeps working afterwards.
   */
  stop(): void;
  /** Alias of {@link stop}. */
  close(): void;
  /** @returns the configuration with every non-empty secret rendered as {@link REDACTED}. */
  toJSON(): Record<string, unknown>;
  /** @returns a redacted rendering of the configuration. */
  toString(): string;
  /** P1-P4: one refresh grant with a handed-off token, else one password grant; then the deadline. */
  private acquireInitialToken;
  /**
   * The refresh decision shared by the lazy path and the background refresher (R1-R6). Concurrent
   * callers share one in-flight attempt.
   *
   * @param force skip the "comfortably valid" short-cut.
   * @throws KeycloakAuthenticationError when the token has expired and cannot be refreshed.
   */
  private refreshIfWithinWindow;
  /**
   * Count a failed refresh, arm the backoff from NOW (the moment it is recorded) and warn once.
   *
   * @param error the failure.
   */
  private recordFailure;
  /** Reset the backoff after a successful refresh, with one INFO line if it had been failing. */
  private recordSuccess;
  /** Arm the next background refresh per the loop of every ONDEWO SDK. */
  private scheduleNextBackgroundRefresh;
  /** Disarm the background timer, if armed. */
  private disarmTimer;
  /** One password (ROPC) grant: exactly the five fields of every ONDEWO SDK. */
  private passwordGrant;
  /** One refresh grant: exactly the three fields of every ONDEWO SDK. Never a password. */
  private refreshGrant;
  /**
   * POST one form and return the JSON object it answered with (E1-E4).
   *
   * @param form the form fields.
   * @param action `login` or `refresh`, for the error messages.
   * @returns the parsed JSON object.
   * @throws KeycloakAuthenticationError on every failure; a non-transport error of the transport
   *   itself is passed through for the caller to wrap.
   */
  private postTokenRequest;
  /**
   * Validate a token response completely, then adopt it (S1-S4): a malformed response changes nothing.
   *
   * @param payload the parsed token response.
   * @throws KeycloakAuthenticationError on a missing access token or a non-numeric `expires_in`.
   */
  private storeTokens;
}
/** A counted hold on a shared {@link KeycloakTokenSession}. */
export interface KeycloakTokenSessionLease {
  /** The shared session. */
  readonly session: KeycloakTokenSession;
  /** Give the hold back; the last release stops the session. Idempotent. */
  release(): void;
}
/**
 * Hold the ONE session of a credential set, starting it when none is live: every caller with the
 * same credentials and scope shares one login and one refresher. Concurrent first callers share one
 * start-up; a failed start-up is not cached; a stopped session is never handed out again.
 *
 * @param options the session options.
 * @param scope what the session is shared within (default: the transport), e.g. one Angular
 *   `HttpClient`, so a session never sends through another application's HTTP stack.
 * @returns a lease on the session; release it when done.
 * @throws KeycloakAuthenticationError when the start-up fails.
 */
export declare function acquireKeycloakTokenSession(options: KeycloakTokenSessionOptions, scope?: object): Promise<KeycloakTokenSessionLease>;
/**
 * The error type earlier releases of this SDK raised for every Keycloak failure, now the same
 * class as {@link KeycloakAuthenticationError} (the name every ONDEWO SDK uses), so `instanceof`
 * checks written against either name keep matching.
 *
 * @deprecated use {@link KeycloakAuthenticationError}.
 */
export declare const KeycloakTokenError: typeof KeycloakAuthenticationError;
/** @deprecated use {@link KeycloakAuthenticationError}. */
export type KeycloakTokenError = KeycloakAuthenticationError;
/** Options accepted by {@link KeycloakTokenProvider.ensureFreshToken}. */
export interface EnsureFreshTokenOptions {
  /**
   * Renew even when the cached access token still looks valid.
   *
   * Set this after the server has rejected a request with `UNAUTHENTICATED`: the
   * token may have been revoked, or the local clock may be ahead of Keycloak's,
   * in which case the cached expiry cannot be trusted. A running failure backoff
   * still applies, so a forced renewal never hammers an unavailable Keycloak.
   */
  force?: boolean;
}
/**
 * Runtime configuration for {@link KeycloakTokenProvider}.
 *
 * Authentication is performed against the *public* SDK Keycloak client (no
 * `client_secret` is ever sent). Supply **either** a long-lived offline
 * refresh token (`refreshToken`) **or** a username + password pair for a
 * one-time Resource-Owner-Password-Credentials (ROPC) login — the technical
 * user must be 2FA-exempt for the ROPC grant to succeed.
 *
 * `keycloakUrl`, `realm` and `clientId` are all-or-nothing: all three empty
 * means "no Keycloak" (no login, no `authorization` metadata); setting only
 * some of them is rejected.
 */
export interface KeycloakTokenProviderConfig {
  /** Base Keycloak URL, e.g. `https://auth.example.com/auth` (trailing slash tolerated). */
  keycloakUrl: string;
  /** Realm name, e.g. `ondewo-ccai-platform`. */
  realm: string;
  /** Public SDK client id, e.g. `ondewo-nlu-cai-sdk-public` (no `client_secret`). */
  clientId: string;
  /**
   * Deprecated alias of {@link refreshToken}, used only when `refreshToken` is empty.
   *
   * @deprecated use `refreshToken`.
   */
  offlineToken?: string;
  /** Technical-user email / username for the ROPC grant (not needed with a refresh token). */
  username?: string;
  /** Technical-user password for the ROPC grant. Never sent when a refresh token is configured. */
  password?: string;
  /**
   * Optional cap (seconds) on how long the auto-refresh runs after the
   * first login. Once it elapses no refresh is sent any more and the access
   * token is allowed to lapse. Omit to keep refreshing until the offline
   * session itself expires.
   */
  tokenExpirationInS?: number;
  /**
   * Whether to verify the Keycloak server's TLS certificate on the
   * token-endpoint call. Defaults to `true` (secure).
   *
   * NO-OP IN THIS ANGULAR/BROWSER CLIENT. The token request is made with
   * Angular's `HttpClient` (an XHR/fetch call), and in a browser the TLS
   * handshake is owned by the user agent — there is no `https.Agent`, undici
   * dispatcher, or `rejectUnauthorized` hook that app code can reach. The value
   * is accepted for cross-SDK config parity (it is part of the shared-login key)
   * but has no effect on the outgoing request here. For a self-signed
   * Keycloak/Envoy endpoint, trust the certificate at the browser/OS level.
   */
  keycloakVerifySsl?: boolean;
  /**
   * Optional [0,1] random source for the failure-backoff jitter; defaults to
   * `Math.random`. Tests inject a constant to make the retry delay exact.
   */
  randomFraction?: () => number;
  /**
   * Optional log sink for the refresh WARNING / recovery INFO lines; defaults to
   * the console. No credential ever reaches it.
   */
  logger?: KeycloakLogger;
  /**
   * A handed-off Keycloak OFFLINE refresh token. When set, start-up is ONE
   * `refresh_token` grant with it and no password grant is ever sent, not even
   * as a fallback when the token is refused. Takes precedence over
   * `username` / `password`.
   */
  refreshToken?: string;
}
/**
 * DI token under which the consuming application supplies the
 * {@link KeycloakTokenProviderConfig} for {@link KeycloakTokenProvider}.
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
 *       refreshToken: "<offline token>", // or: username + password
 *     } satisfies KeycloakTokenProviderConfig,
 *   },
 *   provideOndewoSurveyAuth(KeycloakTokenProvider),
 * ]
 * ```
 */
export declare const KEYCLOAK_TOKEN_PROVIDER_CONFIG: InjectionToken<KeycloakTokenProviderConfig>;
/**
 * Concrete, ready-to-use {@link TokenProvider} that logs in once against the
 * public Keycloak SDK client and keeps the access token fresh, behaving exactly
 * like the token provider of every other ONDEWO SDK (see {@link KeycloakTokenSession}):
 *
 * 1. **Start-up once** — ONE `refresh_token` grant with a configured
 *    `refreshToken`, or else ONE `grant_type=password` login with
 *    `scope=offline_access`. A refused refresh token is never answered with a
 *    password login.
 * 2. **Refresh ahead of expiry** — a background timer refreshes
 *    {@link REFRESH_SKEW_IN_S} before the token lapses; a failed refresh is
 *    retried with a jittered backoff (5 s doubling to 300 s) and never ends the
 *    loop. The optional `tokenExpirationInS` bounds it.
 * 3. **Serve the current token** — {@link getToken} answers synchronously while
 *    the token is comfortably valid; inside the leeway it returns a promise that
 *    runs one shared refresh, and keeps serving the still-valid token while that
 *    refresh fails. Only an expired token that cannot be refreshed rejects, with
 *    a {@link KeycloakAuthenticationError}.
 *
 * Providers with the same credentials on the same `HttpClient` share one login.
 *
 * Register it through `provideOndewoSurveyAuth` after supplying a
 * {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}. The first login is kicked off on
 * construction; call {@link whenReady} to await it explicitly (e.g. in an
 * `APP_INITIALIZER`).
 */
export declare class KeycloakTokenProvider implements TokenProvider, OnDestroy {
  /** Angular HTTP client used for the token-endpoint calls (and the scope of the shared login). */
  private readonly http;
  /**
   * The resolved runtime configuration, or `null` until {@link configure} supplies
   * one. Injected optionally so an application that only learns its credentials at
   * runtime (e.g. an embedded widget reading them from its URL) can register the
   * provider at bootstrap and configure it later.
   */
  private config;
  /**
   * Whether TLS-certificate verification is requested for the token-endpoint
   * call. Defaults to `true`. A NO-OP in this browser client (the browser owns the
   * TLS handshake). See {@link KeycloakTokenProviderConfig.keycloakVerifySsl}.
   */
  private verifySsl;
  /** The started session, or `null` before the first login / without Keycloak. */
  private session;
  /** This provider's hold on the shared session, released on destroy / re-configure. */
  private lease;
  /** The start-up in flight, or `null`. */
  private starting;
  /** Bumped by every start-up, so a superseded start-up drops its session. */
  private generation;
  /** Whether {@link ngOnDestroy} has run. */
  private destroyed;
  /**
   * Promise settled by the *first* login attempt — the one started by the constructor when a
   * config was injected, otherwise the one started by the first {@link configure} call. It
   * resolves when that login succeeds and rejects when it fails; later attempts leave it as-is
   * (a settled promise cannot be re-settled), so callers tracking a re-{@link configure} must
   * await the promise `configure()` returns rather than {@link whenReady}.
   */
  private readonly ready;
  /** Settles {@link ready} on the first successful login. */
  private resolveReady;
  /** Settles {@link ready} when the first login fails. */
  private rejectReady;
  /**
   * The token-endpoint exchange over Angular's `HttpClient`: the raw body is kept as text so the
   * session can judge the status and parse the JSON itself; a status-0 answer, a timeout or any
   * other failure to get an answer becomes a {@link KeycloakTransportError}.
   *
   * @param request the token request.
   * @returns the HTTP answer.
   */
  private readonly transport;
  /**
   * Build the provider and kick off the first login in the background.
   *
   * No network call is awaited here; {@link getToken} returns `null` until the
   * login resolves. Await {@link whenReady} to block until the first token is
   * available.
   */
  constructor();
  /**
   * Supply (or replace) the runtime configuration and log in with it.
   *
   * This is the entry point for credentials that are only known after the
   * application has bootstrapped — an embedded widget that reads a technical
   * user and secret from its own URL, for example. The previous login is
   * released (and stopped when nothing else shares it) before the new one runs,
   * so a provider can be re-pointed at a different technical user without being
   * re-created.
   *
   * When this is the provider's first login attempt it also settles {@link whenReady}; a later
   * re-configure does not, so track those through the promise returned here.
   *
   * @param config the configuration to adopt, replacing any earlier one.
   * @returns a promise that resolves once the login with `config` has completed.
   * @throws KeycloakAuthenticationError when the configuration is invalid or the
   *   login fails (the provider is left unauthenticated; {@link getToken} returns `null`).
   */
  configure(config: KeycloakTokenProviderConfig): Promise<void>;
  /**
   * Return an access token that is safe to send right now, refreshing first when
   * the cached one is within {@link REFRESH_SKEW_IN_S} of lapsing.
   *
   * Concurrent calls share a single refresh, so a burst of requests arriving on
   * an expiring token issues one grant rather than one per request. When the
   * provider holds no session yet (the first login failed), the start-up is run
   * again — with the refresh token when one is configured.
   *
   * @param options renewal options; `force` renews even when the cached token
   *   still looks valid.
   * @returns the usable access token, or `null` when the provider has no
   *   Keycloak config (nothing to renew with).
   * @throws KeycloakAuthenticationError when the token has expired and cannot be
   *   refreshed, or the repeated start-up fails.
   */
  ensureFreshToken(options?: EnsureFreshTokenOptions): Promise<string | null>;
  /**
   * Return the current access token for the auth interceptors.
   *
   * @returns the access token synchronously while it is comfortably valid; a
   *   promise running the shared refresh when it is inside the leeway (rejecting
   *   with a {@link KeycloakAuthenticationError} only when the token has expired
   *   and cannot be refreshed); while the first login is still in flight, a
   *   promise that waits for it and yields its token (`null` when it fails), so
   *   a request issued right after bootstrap is not sent unauthenticated; `null`
   *   without a Keycloak config or after a failed first login.
   */
  getToken(): TokenResult;
  /**
   * The resolved TLS-verification setting from
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl} (defaults to `true`).
   * A NO-OP in this browser client.
   *
   * @returns `true` when TLS verification is requested (the default), `false`
   *   when the config explicitly opted out (still inert here).
   */
  get keycloakVerifySsl(): boolean;
  /**
   * Await the first login so callers can guarantee a token is present before
   * issuing requests (e.g. from an `APP_INITIALIZER`).
   *
   * @returns a promise that resolves once the first access token is stored, or
   *   rejects with the {@link KeycloakAuthenticationError} from a failed login.
   */
  whenReady(): Promise<void>;
  /**
   * Release this provider's hold on the shared login; the background refresh stops once nothing
   * else shares it. Invoked automatically when the root injector is destroyed. The token stays
   * readable (and is still refreshed on demand) afterwards.
   */
  ngOnDestroy(): void;
  /** @returns the configuration with every non-empty secret rendered as `***REDACTED***`. */
  toJSON(): Record<string, unknown>;
  /** @returns a redacted rendering of the configuration. */
  toString(): string;
  /** Give the shared session back, if held. */
  private releaseLease;
  /**
   * Adopt `config`, drop the previous session and start (or join) the session of `config`.
   *
   * @param config the configuration to adopt.
   * @returns a promise that resolves once the session is started (immediately without Keycloak).
   */
  private start;
  /**
   * Validate `config` and hold the shared session of its credentials.
   *
   * @param config the configuration.
   * @param generation the start-up generation this call belongs to.
   * @returns a promise that resolves once the session is held (or no Keycloak is configured).
   */
  private startSession;
  static ɵfac: i0.ɵɵFactoryDeclaration<KeycloakTokenProvider, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
/**
 * The HTTP / gRPC header under which the bearer credential is attached.
 *
 * Canonical `Authorization` casing: gRPC-web metadata keys and Angular
 * `HttpHeaders` are case-insensitive, so the capitalized form is safe on the
 * wire and matches the platform-wide convention.
 */
export declare const AUTHORIZATION_HEADER: string;
/** The credential scheme prefix prepended to the raw access token. */
export declare const BEARER_PREFIX: string;
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
export declare function resolveToken(result: TokenResult): Observable<string | null>;
/**
 * Build the `Authorization` header value for a resolved token, or `null` when
 * the token is absent.
 *
 * @param token a usable token, or `null`.
 * @returns the `"Bearer <token>"` string, or `null` when there is no token.
 */
export declare function buildBearerValue(token: string | null): string | null;
/**
 * Convenience wrapper: emit the ready-to-use `Authorization` header value, or
 * `null` when no token is available.
 *
 * @param result the raw value returned by `TokenProvider.getToken()`.
 * @returns an observable emitting the bearer header value, or `null`.
 */
export declare function resolveBearerValue(result: TokenResult): Observable<string | null>;
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
export declare function authHttpInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>;
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
export declare class AuthGrpcInterceptor implements GrpcInterceptor {
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
  intercept<Q extends GrpcMessage, S extends GrpcMessage>(request: GrpcRequest<Q, S>, next: GrpcHandler): Observable<GrpcEvent<S>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<AuthGrpcInterceptor, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
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
export declare function provideOndewoSurveyAuth(tokenProvider: Type<TokenProvider>): EnvironmentProviders;
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
export interface GrpcWebEndpointConfig {
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
export declare const BROWSER_UNSUPPORTED_TLS_FIELDS: readonly string[];
/** Raised for an unusable {@link GrpcWebEndpointConfig}. The message names fields, never their values. */
export declare class GrpcWebEndpointError extends Error {
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
export declare function buildGrpcWebHost(config: GrpcWebEndpointConfig): string;