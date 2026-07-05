/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as ondewoSurvey005 from '../../ondewo/survey/survey.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for ondewo.survey.CreateFHIRSurveyRequest
 */
export class CreateFHIRSurveyRequest implements GrpcMessage {
  static id = 'ondewo.survey.CreateFHIRSurveyRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateFHIRSurveyRequest();
    CreateFHIRSurveyRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateFHIRSurveyRequest) {
    _instance.fhirQuestionnaire = _instance.fhirQuestionnaire || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateFHIRSurveyRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.fhirQuestionnaire = new googleProtobuf006.Struct();
          _reader.readMessage(
            _instance.fhirQuestionnaire,
            googleProtobuf006.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateFHIRSurveyRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateFHIRSurveyRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.fhirQuestionnaire) {
      _writer.writeMessage(
        1,
        _instance.fhirQuestionnaire as any,
        googleProtobuf006.Struct.serializeBinaryToWriter
      );
    }
  }

  private _fhirQuestionnaire?: googleProtobuf006.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateFHIRSurveyRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateFHIRSurveyRequest.AsObject>) {
    _value = _value || {};
    this.fhirQuestionnaire = _value.fhirQuestionnaire
      ? new googleProtobuf006.Struct(_value.fhirQuestionnaire)
      : undefined;
    CreateFHIRSurveyRequest.refineValues(this);
  }
  get fhirQuestionnaire(): googleProtobuf006.Struct | undefined {
    return this._fhirQuestionnaire;
  }
  set fhirQuestionnaire(value: googleProtobuf006.Struct | undefined) {
    this._fhirQuestionnaire = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateFHIRSurveyRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateFHIRSurveyRequest.AsObject {
    return {
      fhirQuestionnaire: this.fhirQuestionnaire
        ? this.fhirQuestionnaire.toObject()
        : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateFHIRSurveyRequest.AsProtobufJSON {
    return {
      fhirQuestionnaire: this.fhirQuestionnaire
        ? this.fhirQuestionnaire.toProtobufJSON(options)
        : null
    };
  }
}
export module CreateFHIRSurveyRequest {
  /**
   * Standard JavaScript object representation for CreateFHIRSurveyRequest
   */
  export interface AsObject {
    fhirQuestionnaire?: googleProtobuf006.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateFHIRSurveyRequest
   */
  export interface AsProtobufJSON {
    fhirQuestionnaire: googleProtobuf006.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.survey.SurveyFHIRAnswersResponse
 */
export class SurveyFHIRAnswersResponse implements GrpcMessage {
  static id = 'ondewo.survey.SurveyFHIRAnswersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SurveyFHIRAnswersResponse();
    SurveyFHIRAnswersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SurveyFHIRAnswersResponse) {
    _instance.surveyId = _instance.surveyId || '';
    _instance.fhirQuestionnaireResponses =
      _instance.fhirQuestionnaireResponses || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SurveyFHIRAnswersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.surveyId = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new googleProtobuf006.Struct();
          _reader.readMessage(
            messageInitializer2,
            googleProtobuf006.Struct.deserializeBinaryFromReader
          );
          (_instance.fhirQuestionnaireResponses =
            _instance.fhirQuestionnaireResponses || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SurveyFHIRAnswersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SurveyFHIRAnswersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.surveyId) {
      _writer.writeString(1, _instance.surveyId);
    }
    if (
      _instance.fhirQuestionnaireResponses &&
      _instance.fhirQuestionnaireResponses.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.fhirQuestionnaireResponses as any,
        googleProtobuf006.Struct.serializeBinaryToWriter
      );
    }
  }

  private _surveyId: string;
  private _fhirQuestionnaireResponses?: googleProtobuf006.Struct[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SurveyFHIRAnswersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SurveyFHIRAnswersResponse.AsObject>) {
    _value = _value || {};
    this.surveyId = _value.surveyId;
    this.fhirQuestionnaireResponses = (
      _value.fhirQuestionnaireResponses || []
    ).map(m => new googleProtobuf006.Struct(m));
    SurveyFHIRAnswersResponse.refineValues(this);
  }
  get surveyId(): string {
    return this._surveyId;
  }
  set surveyId(value: string) {
    this._surveyId = value;
  }
  get fhirQuestionnaireResponses(): googleProtobuf006.Struct[] | undefined {
    return this._fhirQuestionnaireResponses;
  }
  set fhirQuestionnaireResponses(
    value: googleProtobuf006.Struct[] | undefined
  ) {
    this._fhirQuestionnaireResponses = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SurveyFHIRAnswersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SurveyFHIRAnswersResponse.AsObject {
    return {
      surveyId: this.surveyId,
      fhirQuestionnaireResponses: (
        this.fhirQuestionnaireResponses || []
      ).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SurveyFHIRAnswersResponse.AsProtobufJSON {
    return {
      surveyId: this.surveyId,
      fhirQuestionnaireResponses: (
        this.fhirQuestionnaireResponses || []
      ).map(m => m.toProtobufJSON(options))
    };
  }
}
export module SurveyFHIRAnswersResponse {
  /**
   * Standard JavaScript object representation for SurveyFHIRAnswersResponse
   */
  export interface AsObject {
    surveyId: string;
    fhirQuestionnaireResponses?: googleProtobuf006.Struct.AsObject[];
  }

  /**
   * Protobuf JSON representation for SurveyFHIRAnswersResponse
   */
  export interface AsProtobufJSON {
    surveyId: string;
    fhirQuestionnaireResponses:
      | googleProtobuf006.Struct.AsProtobufJSON[]
      | null;
  }
}
