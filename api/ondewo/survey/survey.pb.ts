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
export enum SubFlow {
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
export class Survey implements GrpcMessage {
  static id = 'ondewo.survey.Survey';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Survey();
    Survey.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Survey) {
    _instance.surveyId = _instance.surveyId || '';
    _instance.displayName = _instance.displayName || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.questions = _instance.questions || [];
    _instance.surveyInfo = _instance.surveyInfo || undefined;
    _instance.excludeSubflows = _instance.excludeSubflows || [];
    _instance.status = _instance.status || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Survey, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.surveyId = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        case 7:
          const messageInitializer7 = new Question();
          _reader.readMessage(
            messageInitializer7,
            Question.deserializeBinaryFromReader
          );
          (_instance.questions = _instance.questions || []).push(
            messageInitializer7
          );
          break;
        case 8:
          _instance.surveyInfo = new SurveyInfo();
          _reader.readMessage(
            _instance.surveyInfo,
            SurveyInfo.deserializeBinaryFromReader
          );
          break;
        case 9:
          _reader.readPackableEnumInto(
            (_instance.excludeSubflows = _instance.excludeSubflows || [])
          );
          break;
        case 10:
          _instance.status = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    Survey.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Survey, _writer: BinaryWriter) {
    if (_instance.surveyId) {
      _writer.writeString(1, _instance.surveyId);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
    if (_instance.questions && _instance.questions.length) {
      _writer.writeRepeatedMessage(
        7,
        _instance.questions as any,
        Question.serializeBinaryToWriter
      );
    }
    if (_instance.surveyInfo) {
      _writer.writeMessage(
        8,
        _instance.surveyInfo as any,
        SurveyInfo.serializeBinaryToWriter
      );
    }
    if (_instance.excludeSubflows && _instance.excludeSubflows.length) {
      _writer.writePackedEnum(9, _instance.excludeSubflows);
    }
    if (_instance.status) {
      _writer.writeEnum(10, _instance.status);
    }
  }

  private _surveyId: string;
  private _displayName: string;
  private _languageCode: string;
  private _questions?: Question[];
  private _surveyInfo?: SurveyInfo;
  private _excludeSubflows: SubFlow[];
  private _status: Survey.AgentStatus;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Survey to deeply clone from
   */
  constructor(_value?: RecursivePartial<Survey.AsObject>) {
    _value = _value || {};
    this.surveyId = _value.surveyId;
    this.displayName = _value.displayName;
    this.languageCode = _value.languageCode;
    this.questions = (_value.questions || []).map(m => new Question(m));
    this.surveyInfo = _value.surveyInfo
      ? new SurveyInfo(_value.surveyInfo)
      : undefined;
    this.excludeSubflows = (_value.excludeSubflows || []).slice();
    this.status = _value.status;
    Survey.refineValues(this);
  }
  get surveyId(): string {
    return this._surveyId;
  }
  set surveyId(value: string) {
    this._surveyId = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get questions(): Question[] | undefined {
    return this._questions;
  }
  set questions(value: Question[] | undefined) {
    this._questions = value;
  }
  get surveyInfo(): SurveyInfo | undefined {
    return this._surveyInfo;
  }
  set surveyInfo(value: SurveyInfo | undefined) {
    this._surveyInfo = value;
  }
  get excludeSubflows(): SubFlow[] {
    return this._excludeSubflows;
  }
  set excludeSubflows(value: SubFlow[]) {
    this._excludeSubflows = value;
  }
  get status(): Survey.AgentStatus {
    return this._status;
  }
  set status(value: Survey.AgentStatus) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Survey.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Survey.AsObject {
    return {
      surveyId: this.surveyId,
      displayName: this.displayName,
      languageCode: this.languageCode,
      questions: (this.questions || []).map(m => m.toObject()),
      surveyInfo: this.surveyInfo ? this.surveyInfo.toObject() : undefined,
      excludeSubflows: (this.excludeSubflows || []).slice(),
      status: this.status
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
  ): Survey.AsProtobufJSON {
    return {
      surveyId: this.surveyId,
      displayName: this.displayName,
      languageCode: this.languageCode,
      questions: (this.questions || []).map(m => m.toProtobufJSON(options)),
      surveyInfo: this.surveyInfo
        ? this.surveyInfo.toProtobufJSON(options)
        : null,
      excludeSubflows: (this.excludeSubflows || []).map(v => SubFlow[v]),
      status:
        Survey.AgentStatus[
          this.status === null || this.status === undefined ? 0 : this.status
        ]
    };
  }
}
export module Survey {
  /**
   * Standard JavaScript object representation for Survey
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    surveyId: string;
    displayName: string;
    languageCode: string;
    questions: Question.AsProtobufJSON[] | null;
    surveyInfo: SurveyInfo.AsProtobufJSON | null;
    excludeSubflows: string[];
    status: string;
  }
  export enum AgentStatus {
    TO_BE_INITIALIZED = 0,
    UPDATED = 1,
    UPDATING = 2,
    OUTDATED = 3
  }
}

/**
 * Message implementation for ondewo.survey.SurveyInfo
 */
export class SurveyInfo implements GrpcMessage {
  static id = 'ondewo.survey.SurveyInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SurveyInfo();
    SurveyInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SurveyInfo) {
    _instance.legalEntity = _instance.legalEntity || '';
    _instance.postalAddress = _instance.postalAddress || '';
    _instance.emailAddress = _instance.emailAddress || '';
    _instance.phoneNumber = _instance.phoneNumber || '';
    _instance.phoneHours = _instance.phoneHours || '';
    _instance.expectedDuration = _instance.expectedDuration || '';
    _instance.purpose = _instance.purpose || '';
    _instance.topic = _instance.topic || '';
    _instance.legalDisclaimer = _instance.legalDisclaimer || '';
    _instance.anonymous = _instance.anonymous || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SurveyInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.legalEntity = _reader.readString();
          break;
        case 2:
          _instance.postalAddress = _reader.readString();
          break;
        case 3:
          _instance.emailAddress = _reader.readString();
          break;
        case 4:
          _instance.phoneNumber = _reader.readString();
          break;
        case 5:
          _instance.phoneHours = _reader.readString();
          break;
        case 6:
          _instance.expectedDuration = _reader.readString();
          break;
        case 7:
          _instance.purpose = _reader.readString();
          break;
        case 8:
          _instance.topic = _reader.readString();
          break;
        case 9:
          _instance.legalDisclaimer = _reader.readString();
          break;
        case 10:
          _instance.anonymous = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    SurveyInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: SurveyInfo, _writer: BinaryWriter) {
    if (_instance.legalEntity) {
      _writer.writeString(1, _instance.legalEntity);
    }
    if (_instance.postalAddress) {
      _writer.writeString(2, _instance.postalAddress);
    }
    if (_instance.emailAddress) {
      _writer.writeString(3, _instance.emailAddress);
    }
    if (_instance.phoneNumber) {
      _writer.writeString(4, _instance.phoneNumber);
    }
    if (_instance.phoneHours) {
      _writer.writeString(5, _instance.phoneHours);
    }
    if (_instance.expectedDuration) {
      _writer.writeString(6, _instance.expectedDuration);
    }
    if (_instance.purpose) {
      _writer.writeString(7, _instance.purpose);
    }
    if (_instance.topic) {
      _writer.writeString(8, _instance.topic);
    }
    if (_instance.legalDisclaimer) {
      _writer.writeString(9, _instance.legalDisclaimer);
    }
    if (_instance.anonymous) {
      _writer.writeBool(10, _instance.anonymous);
    }
  }

  private _legalEntity: string;
  private _postalAddress: string;
  private _emailAddress: string;
  private _phoneNumber: string;
  private _phoneHours: string;
  private _expectedDuration: string;
  private _purpose: string;
  private _topic: string;
  private _legalDisclaimer: string;
  private _anonymous: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SurveyInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<SurveyInfo.AsObject>) {
    _value = _value || {};
    this.legalEntity = _value.legalEntity;
    this.postalAddress = _value.postalAddress;
    this.emailAddress = _value.emailAddress;
    this.phoneNumber = _value.phoneNumber;
    this.phoneHours = _value.phoneHours;
    this.expectedDuration = _value.expectedDuration;
    this.purpose = _value.purpose;
    this.topic = _value.topic;
    this.legalDisclaimer = _value.legalDisclaimer;
    this.anonymous = _value.anonymous;
    SurveyInfo.refineValues(this);
  }
  get legalEntity(): string {
    return this._legalEntity;
  }
  set legalEntity(value: string) {
    this._legalEntity = value;
  }
  get postalAddress(): string {
    return this._postalAddress;
  }
  set postalAddress(value: string) {
    this._postalAddress = value;
  }
  get emailAddress(): string {
    return this._emailAddress;
  }
  set emailAddress(value: string) {
    this._emailAddress = value;
  }
  get phoneNumber(): string {
    return this._phoneNumber;
  }
  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  get phoneHours(): string {
    return this._phoneHours;
  }
  set phoneHours(value: string) {
    this._phoneHours = value;
  }
  get expectedDuration(): string {
    return this._expectedDuration;
  }
  set expectedDuration(value: string) {
    this._expectedDuration = value;
  }
  get purpose(): string {
    return this._purpose;
  }
  set purpose(value: string) {
    this._purpose = value;
  }
  get topic(): string {
    return this._topic;
  }
  set topic(value: string) {
    this._topic = value;
  }
  get legalDisclaimer(): string {
    return this._legalDisclaimer;
  }
  set legalDisclaimer(value: string) {
    this._legalDisclaimer = value;
  }
  get anonymous(): boolean {
    return this._anonymous;
  }
  set anonymous(value: boolean) {
    this._anonymous = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SurveyInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SurveyInfo.AsObject {
    return {
      legalEntity: this.legalEntity,
      postalAddress: this.postalAddress,
      emailAddress: this.emailAddress,
      phoneNumber: this.phoneNumber,
      phoneHours: this.phoneHours,
      expectedDuration: this.expectedDuration,
      purpose: this.purpose,
      topic: this.topic,
      legalDisclaimer: this.legalDisclaimer,
      anonymous: this.anonymous
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
  ): SurveyInfo.AsProtobufJSON {
    return {
      legalEntity: this.legalEntity,
      postalAddress: this.postalAddress,
      emailAddress: this.emailAddress,
      phoneNumber: this.phoneNumber,
      phoneHours: this.phoneHours,
      expectedDuration: this.expectedDuration,
      purpose: this.purpose,
      topic: this.topic,
      legalDisclaimer: this.legalDisclaimer,
      anonymous: this.anonymous
    };
  }
}
export module SurveyInfo {
  /**
   * Standard JavaScript object representation for SurveyInfo
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class Question implements GrpcMessage {
  static id = 'ondewo.survey.Question';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Question();
    Question.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Question) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Question,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.openQuestion = new OpenQuestion();
          _reader.readMessage(
            _instance.openQuestion,
            OpenQuestion.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.singleChoiceQuestion = new SingleChoiceQuestion();
          _reader.readMessage(
            _instance.singleChoiceQuestion,
            SingleChoiceQuestion.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.multipleChoiceQuestion = new MultipleChoiceQuestion();
          _reader.readMessage(
            _instance.multipleChoiceQuestion,
            MultipleChoiceQuestion.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.scaleQuestion = new ScaleQuestion();
          _reader.readMessage(
            _instance.scaleQuestion,
            ScaleQuestion.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.singleParameterQuestion = new SingleParameterQuestion();
          _reader.readMessage(
            _instance.singleParameterQuestion,
            SingleParameterQuestion.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.multipleParameterQuestion = new MultipleParameterQuestion();
          _reader.readMessage(
            _instance.multipleParameterQuestion,
            MultipleParameterQuestion.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Question.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Question, _writer: BinaryWriter) {
    if (_instance.openQuestion) {
      _writer.writeMessage(
        1,
        _instance.openQuestion as any,
        OpenQuestion.serializeBinaryToWriter
      );
    }
    if (_instance.singleChoiceQuestion) {
      _writer.writeMessage(
        2,
        _instance.singleChoiceQuestion as any,
        SingleChoiceQuestion.serializeBinaryToWriter
      );
    }
    if (_instance.multipleChoiceQuestion) {
      _writer.writeMessage(
        3,
        _instance.multipleChoiceQuestion as any,
        MultipleChoiceQuestion.serializeBinaryToWriter
      );
    }
    if (_instance.scaleQuestion) {
      _writer.writeMessage(
        4,
        _instance.scaleQuestion as any,
        ScaleQuestion.serializeBinaryToWriter
      );
    }
    if (_instance.singleParameterQuestion) {
      _writer.writeMessage(
        5,
        _instance.singleParameterQuestion as any,
        SingleParameterQuestion.serializeBinaryToWriter
      );
    }
    if (_instance.multipleParameterQuestion) {
      _writer.writeMessage(
        6,
        _instance.multipleParameterQuestion as any,
        MultipleParameterQuestion.serializeBinaryToWriter
      );
    }
  }

  private _openQuestion?: OpenQuestion;
  private _singleChoiceQuestion?: SingleChoiceQuestion;
  private _multipleChoiceQuestion?: MultipleChoiceQuestion;
  private _scaleQuestion?: ScaleQuestion;
  private _singleParameterQuestion?: SingleParameterQuestion;
  private _multipleParameterQuestion?: MultipleParameterQuestion;

  private _question: Question.QuestionCase = Question.QuestionCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Question to deeply clone from
   */
  constructor(_value?: RecursivePartial<Question.AsObject>) {
    _value = _value || {};
    this.openQuestion = _value.openQuestion
      ? new OpenQuestion(_value.openQuestion)
      : undefined;
    this.singleChoiceQuestion = _value.singleChoiceQuestion
      ? new SingleChoiceQuestion(_value.singleChoiceQuestion)
      : undefined;
    this.multipleChoiceQuestion = _value.multipleChoiceQuestion
      ? new MultipleChoiceQuestion(_value.multipleChoiceQuestion)
      : undefined;
    this.scaleQuestion = _value.scaleQuestion
      ? new ScaleQuestion(_value.scaleQuestion)
      : undefined;
    this.singleParameterQuestion = _value.singleParameterQuestion
      ? new SingleParameterQuestion(_value.singleParameterQuestion)
      : undefined;
    this.multipleParameterQuestion = _value.multipleParameterQuestion
      ? new MultipleParameterQuestion(_value.multipleParameterQuestion)
      : undefined;
    Question.refineValues(this);
  }
  get openQuestion(): OpenQuestion | undefined {
    return this._openQuestion;
  }
  set openQuestion(value: OpenQuestion | undefined) {
    if (value !== undefined && value !== null) {
      this._singleChoiceQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = undefined;
      this._question = Question.QuestionCase.openQuestion;
    }
    this._openQuestion = value;
  }
  get singleChoiceQuestion(): SingleChoiceQuestion | undefined {
    return this._singleChoiceQuestion;
  }
  set singleChoiceQuestion(value: SingleChoiceQuestion | undefined) {
    if (value !== undefined && value !== null) {
      this._openQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = undefined;
      this._question = Question.QuestionCase.singleChoiceQuestion;
    }
    this._singleChoiceQuestion = value;
  }
  get multipleChoiceQuestion(): MultipleChoiceQuestion | undefined {
    return this._multipleChoiceQuestion;
  }
  set multipleChoiceQuestion(value: MultipleChoiceQuestion | undefined) {
    if (value !== undefined && value !== null) {
      this._openQuestion = this._singleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = undefined;
      this._question = Question.QuestionCase.multipleChoiceQuestion;
    }
    this._multipleChoiceQuestion = value;
  }
  get scaleQuestion(): ScaleQuestion | undefined {
    return this._scaleQuestion;
  }
  set scaleQuestion(value: ScaleQuestion | undefined) {
    if (value !== undefined && value !== null) {
      this._openQuestion = this._singleChoiceQuestion = this._multipleChoiceQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = undefined;
      this._question = Question.QuestionCase.scaleQuestion;
    }
    this._scaleQuestion = value;
  }
  get singleParameterQuestion(): SingleParameterQuestion | undefined {
    return this._singleParameterQuestion;
  }
  set singleParameterQuestion(value: SingleParameterQuestion | undefined) {
    if (value !== undefined && value !== null) {
      this._openQuestion = this._singleChoiceQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._multipleParameterQuestion = undefined;
      this._question = Question.QuestionCase.singleParameterQuestion;
    }
    this._singleParameterQuestion = value;
  }
  get multipleParameterQuestion(): MultipleParameterQuestion | undefined {
    return this._multipleParameterQuestion;
  }
  set multipleParameterQuestion(value: MultipleParameterQuestion | undefined) {
    if (value !== undefined && value !== null) {
      this._openQuestion = this._singleChoiceQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = undefined;
      this._question = Question.QuestionCase.multipleParameterQuestion;
    }
    this._multipleParameterQuestion = value;
  }
  get question() {
    return this._question;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Question.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Question.AsObject {
    return {
      openQuestion: this.openQuestion
        ? this.openQuestion.toObject()
        : undefined,
      singleChoiceQuestion: this.singleChoiceQuestion
        ? this.singleChoiceQuestion.toObject()
        : undefined,
      multipleChoiceQuestion: this.multipleChoiceQuestion
        ? this.multipleChoiceQuestion.toObject()
        : undefined,
      scaleQuestion: this.scaleQuestion
        ? this.scaleQuestion.toObject()
        : undefined,
      singleParameterQuestion: this.singleParameterQuestion
        ? this.singleParameterQuestion.toObject()
        : undefined,
      multipleParameterQuestion: this.multipleParameterQuestion
        ? this.multipleParameterQuestion.toObject()
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
  ): Question.AsProtobufJSON {
    return {
      openQuestion: this.openQuestion
        ? this.openQuestion.toProtobufJSON(options)
        : null,
      singleChoiceQuestion: this.singleChoiceQuestion
        ? this.singleChoiceQuestion.toProtobufJSON(options)
        : null,
      multipleChoiceQuestion: this.multipleChoiceQuestion
        ? this.multipleChoiceQuestion.toProtobufJSON(options)
        : null,
      scaleQuestion: this.scaleQuestion
        ? this.scaleQuestion.toProtobufJSON(options)
        : null,
      singleParameterQuestion: this.singleParameterQuestion
        ? this.singleParameterQuestion.toProtobufJSON(options)
        : null,
      multipleParameterQuestion: this.multipleParameterQuestion
        ? this.multipleParameterQuestion.toProtobufJSON(options)
        : null
    };
  }
}
export module Question {
  /**
   * Standard JavaScript object representation for Question
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    openQuestion: OpenQuestion.AsProtobufJSON | null;
    singleChoiceQuestion: SingleChoiceQuestion.AsProtobufJSON | null;
    multipleChoiceQuestion: MultipleChoiceQuestion.AsProtobufJSON | null;
    scaleQuestion: ScaleQuestion.AsProtobufJSON | null;
    singleParameterQuestion: SingleParameterQuestion.AsProtobufJSON | null;
    multipleParameterQuestion: MultipleParameterQuestion.AsProtobufJSON | null;
  }
  export enum QuestionCase {
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
export class OpenQuestion implements GrpcMessage {
  static id = 'ondewo.survey.OpenQuestion';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OpenQuestion();
    OpenQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OpenQuestion) {
    _instance.questionText = _instance.questionText || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OpenQuestion,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.questionText = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    OpenQuestion.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OpenQuestion,
    _writer: BinaryWriter
  ) {
    if (_instance.questionText) {
      _writer.writeString(1, _instance.questionText);
    }
  }

  private _questionText: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OpenQuestion to deeply clone from
   */
  constructor(_value?: RecursivePartial<OpenQuestion.AsObject>) {
    _value = _value || {};
    this.questionText = _value.questionText;
    OpenQuestion.refineValues(this);
  }
  get questionText(): string {
    return this._questionText;
  }
  set questionText(value: string) {
    this._questionText = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OpenQuestion.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OpenQuestion.AsObject {
    return {
      questionText: this.questionText
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
  ): OpenQuestion.AsProtobufJSON {
    return {
      questionText: this.questionText
    };
  }
}
export module OpenQuestion {
  /**
   * Standard JavaScript object representation for OpenQuestion
   */
  export interface AsObject {
    questionText: string;
  }

  /**
   * Protobuf JSON representation for OpenQuestion
   */
  export interface AsProtobufJSON {
    questionText: string;
  }
}

/**
 * Message implementation for ondewo.survey.SingleChoiceQuestion
 */
export class SingleChoiceQuestion implements GrpcMessage {
  static id = 'ondewo.survey.SingleChoiceQuestion';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SingleChoiceQuestion();
    SingleChoiceQuestion.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SingleChoiceQuestion) {
    _instance.questionText = _instance.questionText || '';
    _instance.choices = _instance.choices || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SingleChoiceQuestion,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.questionText = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new Choice();
          _reader.readMessage(
            messageInitializer2,
            Choice.deserializeBinaryFromReader
          );
          (_instance.choices = _instance.choices || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SingleChoiceQuestion.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SingleChoiceQuestion,
    _writer: BinaryWriter
  ) {
    if (_instance.questionText) {
      _writer.writeString(1, _instance.questionText);
    }
    if (_instance.choices && _instance.choices.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.choices as any,
        Choice.serializeBinaryToWriter
      );
    }
  }

  private _questionText: string;
  private _choices?: Choice[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SingleChoiceQuestion to deeply clone from
   */
  constructor(_value?: RecursivePartial<SingleChoiceQuestion.AsObject>) {
    _value = _value || {};
    this.questionText = _value.questionText;
    this.choices = (_value.choices || []).map(m => new Choice(m));
    SingleChoiceQuestion.refineValues(this);
  }
  get questionText(): string {
    return this._questionText;
  }
  set questionText(value: string) {
    this._questionText = value;
  }
  get choices(): Choice[] | undefined {
    return this._choices;
  }
  set choices(value: Choice[] | undefined) {
    this._choices = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SingleChoiceQuestion.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SingleChoiceQuestion.AsObject {
    return {
      questionText: this.questionText,
      choices: (this.choices || []).map(m => m.toObject())
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
  ): SingleChoiceQuestion.AsProtobufJSON {
    return {
      questionText: this.questionText,
      choices: (this.choices || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module SingleChoiceQuestion {
  /**
   * Standard JavaScript object representation for SingleChoiceQuestion
   */
  export interface AsObject {
    questionText: string;
    choices?: Choice.AsObject[];
  }

  /**
   * Protobuf JSON representation for SingleChoiceQuestion
   */
  export interface AsProtobufJSON {
    questionText: string;
    choices: Choice.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.survey.MultipleChoiceQuestion
 */
export class MultipleChoiceQuestion implements GrpcMessage {
  static id = 'ondewo.survey.MultipleChoiceQuestion';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MultipleChoiceQuestion();
    MultipleChoiceQuestion.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MultipleChoiceQuestion) {
    _instance.questionText = _instance.questionText || '';
    _instance.choices = _instance.choices || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MultipleChoiceQuestion,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.questionText = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new Choice();
          _reader.readMessage(
            messageInitializer2,
            Choice.deserializeBinaryFromReader
          );
          (_instance.choices = _instance.choices || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    MultipleChoiceQuestion.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MultipleChoiceQuestion,
    _writer: BinaryWriter
  ) {
    if (_instance.questionText) {
      _writer.writeString(1, _instance.questionText);
    }
    if (_instance.choices && _instance.choices.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.choices as any,
        Choice.serializeBinaryToWriter
      );
    }
  }

  private _questionText: string;
  private _choices?: Choice[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MultipleChoiceQuestion to deeply clone from
   */
  constructor(_value?: RecursivePartial<MultipleChoiceQuestion.AsObject>) {
    _value = _value || {};
    this.questionText = _value.questionText;
    this.choices = (_value.choices || []).map(m => new Choice(m));
    MultipleChoiceQuestion.refineValues(this);
  }
  get questionText(): string {
    return this._questionText;
  }
  set questionText(value: string) {
    this._questionText = value;
  }
  get choices(): Choice[] | undefined {
    return this._choices;
  }
  set choices(value: Choice[] | undefined) {
    this._choices = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MultipleChoiceQuestion.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MultipleChoiceQuestion.AsObject {
    return {
      questionText: this.questionText,
      choices: (this.choices || []).map(m => m.toObject())
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
  ): MultipleChoiceQuestion.AsProtobufJSON {
    return {
      questionText: this.questionText,
      choices: (this.choices || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module MultipleChoiceQuestion {
  /**
   * Standard JavaScript object representation for MultipleChoiceQuestion
   */
  export interface AsObject {
    questionText: string;
    choices?: Choice.AsObject[];
  }

  /**
   * Protobuf JSON representation for MultipleChoiceQuestion
   */
  export interface AsProtobufJSON {
    questionText: string;
    choices: Choice.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.survey.ScaleQuestion
 */
export class ScaleQuestion implements GrpcMessage {
  static id = 'ondewo.survey.ScaleQuestion';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ScaleQuestion();
    ScaleQuestion.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ScaleQuestion) {
    _instance.questionText = _instance.questionText || '';
    _instance.minValue = _instance.minValue || undefined;
    _instance.maxValue = _instance.maxValue || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ScaleQuestion,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.questionText = _reader.readString();
          break;
        case 2:
          _instance.minValue = new ScaleQuestion.ScaleValue();
          _reader.readMessage(
            _instance.minValue,
            ScaleQuestion.ScaleValue.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.maxValue = new ScaleQuestion.ScaleValue();
          _reader.readMessage(
            _instance.maxValue,
            ScaleQuestion.ScaleValue.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ScaleQuestion.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ScaleQuestion,
    _writer: BinaryWriter
  ) {
    if (_instance.questionText) {
      _writer.writeString(1, _instance.questionText);
    }
    if (_instance.minValue) {
      _writer.writeMessage(
        2,
        _instance.minValue as any,
        ScaleQuestion.ScaleValue.serializeBinaryToWriter
      );
    }
    if (_instance.maxValue) {
      _writer.writeMessage(
        3,
        _instance.maxValue as any,
        ScaleQuestion.ScaleValue.serializeBinaryToWriter
      );
    }
  }

  private _questionText: string;
  private _minValue?: ScaleQuestion.ScaleValue;
  private _maxValue?: ScaleQuestion.ScaleValue;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ScaleQuestion to deeply clone from
   */
  constructor(_value?: RecursivePartial<ScaleQuestion.AsObject>) {
    _value = _value || {};
    this.questionText = _value.questionText;
    this.minValue = _value.minValue
      ? new ScaleQuestion.ScaleValue(_value.minValue)
      : undefined;
    this.maxValue = _value.maxValue
      ? new ScaleQuestion.ScaleValue(_value.maxValue)
      : undefined;
    ScaleQuestion.refineValues(this);
  }
  get questionText(): string {
    return this._questionText;
  }
  set questionText(value: string) {
    this._questionText = value;
  }
  get minValue(): ScaleQuestion.ScaleValue | undefined {
    return this._minValue;
  }
  set minValue(value: ScaleQuestion.ScaleValue | undefined) {
    this._minValue = value;
  }
  get maxValue(): ScaleQuestion.ScaleValue | undefined {
    return this._maxValue;
  }
  set maxValue(value: ScaleQuestion.ScaleValue | undefined) {
    this._maxValue = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ScaleQuestion.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ScaleQuestion.AsObject {
    return {
      questionText: this.questionText,
      minValue: this.minValue ? this.minValue.toObject() : undefined,
      maxValue: this.maxValue ? this.maxValue.toObject() : undefined
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
  ): ScaleQuestion.AsProtobufJSON {
    return {
      questionText: this.questionText,
      minValue: this.minValue ? this.minValue.toProtobufJSON(options) : null,
      maxValue: this.maxValue ? this.maxValue.toProtobufJSON(options) : null
    };
  }
}
export module ScaleQuestion {
  /**
   * Standard JavaScript object representation for ScaleQuestion
   */
  export interface AsObject {
    questionText: string;
    minValue?: ScaleQuestion.ScaleValue.AsObject;
    maxValue?: ScaleQuestion.ScaleValue.AsObject;
  }

  /**
   * Protobuf JSON representation for ScaleQuestion
   */
  export interface AsProtobufJSON {
    questionText: string;
    minValue: ScaleQuestion.ScaleValue.AsProtobufJSON | null;
    maxValue: ScaleQuestion.ScaleValue.AsProtobufJSON | null;
  }

  /**
   * Message implementation for ondewo.survey.ScaleQuestion.ScaleValue
   */
  export class ScaleValue implements GrpcMessage {
    static id = 'ondewo.survey.ScaleQuestion.ScaleValue';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new ScaleValue();
      ScaleValue.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ScaleValue) {
      _instance.value = _instance.value || 0;
      _instance.label = _instance.label || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: ScaleValue,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.value = _reader.readInt32();
            break;
          case 2:
            _instance.label = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      ScaleValue.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: ScaleValue,
      _writer: BinaryWriter
    ) {
      if (_instance.value) {
        _writer.writeInt32(1, _instance.value);
      }
      if (_instance.label) {
        _writer.writeString(2, _instance.label);
      }
    }

    private _value: number;
    private _label: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ScaleValue to deeply clone from
     */
    constructor(_value?: RecursivePartial<ScaleValue.AsObject>) {
      _value = _value || {};
      this.value = _value.value;
      this.label = _value.label;
      ScaleValue.refineValues(this);
    }
    get value(): number {
      return this._value;
    }
    set value(value: number) {
      this._value = value;
    }
    get label(): string {
      return this._label;
    }
    set label(value: string) {
      this._label = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      ScaleValue.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ScaleValue.AsObject {
      return {
        value: this.value,
        label: this.label
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
    ): ScaleValue.AsProtobufJSON {
      return {
        value: this.value,
        label: this.label
      };
    }
  }
  export module ScaleValue {
    /**
     * Standard JavaScript object representation for ScaleValue
     */
    export interface AsObject {
      value: number;
      label: string;
    }

    /**
     * Protobuf JSON representation for ScaleValue
     */
    export interface AsProtobufJSON {
      value: number;
      label: string;
    }
  }
}

/**
 * Message implementation for ondewo.survey.SingleParameterQuestion
 */
export class SingleParameterQuestion implements GrpcMessage {
  static id = 'ondewo.survey.SingleParameterQuestion';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SingleParameterQuestion();
    SingleParameterQuestion.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SingleParameterQuestion) {
    _instance.questionText = _instance.questionText || '';
    _instance.parameterType = _instance.parameterType || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SingleParameterQuestion,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.questionText = _reader.readString();
          break;
        case 2:
          _instance.parameterType = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SingleParameterQuestion.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SingleParameterQuestion,
    _writer: BinaryWriter
  ) {
    if (_instance.questionText) {
      _writer.writeString(1, _instance.questionText);
    }
    if (_instance.parameterType) {
      _writer.writeString(2, _instance.parameterType);
    }
  }

  private _questionText: string;
  private _parameterType: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SingleParameterQuestion to deeply clone from
   */
  constructor(_value?: RecursivePartial<SingleParameterQuestion.AsObject>) {
    _value = _value || {};
    this.questionText = _value.questionText;
    this.parameterType = _value.parameterType;
    SingleParameterQuestion.refineValues(this);
  }
  get questionText(): string {
    return this._questionText;
  }
  set questionText(value: string) {
    this._questionText = value;
  }
  get parameterType(): string {
    return this._parameterType;
  }
  set parameterType(value: string) {
    this._parameterType = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SingleParameterQuestion.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SingleParameterQuestion.AsObject {
    return {
      questionText: this.questionText,
      parameterType: this.parameterType
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
  ): SingleParameterQuestion.AsProtobufJSON {
    return {
      questionText: this.questionText,
      parameterType: this.parameterType
    };
  }
}
export module SingleParameterQuestion {
  /**
   * Standard JavaScript object representation for SingleParameterQuestion
   */
  export interface AsObject {
    questionText: string;
    parameterType: string;
  }

  /**
   * Protobuf JSON representation for SingleParameterQuestion
   */
  export interface AsProtobufJSON {
    questionText: string;
    parameterType: string;
  }
}

/**
 * Message implementation for ondewo.survey.MultipleParameterQuestion
 */
export class MultipleParameterQuestion implements GrpcMessage {
  static id = 'ondewo.survey.MultipleParameterQuestion';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MultipleParameterQuestion();
    MultipleParameterQuestion.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MultipleParameterQuestion) {
    _instance.questionText = _instance.questionText || '';
    _instance.parameterType = _instance.parameterType || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MultipleParameterQuestion,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.questionText = _reader.readString();
          break;
        case 2:
          _instance.parameterType = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    MultipleParameterQuestion.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MultipleParameterQuestion,
    _writer: BinaryWriter
  ) {
    if (_instance.questionText) {
      _writer.writeString(1, _instance.questionText);
    }
    if (_instance.parameterType) {
      _writer.writeString(2, _instance.parameterType);
    }
  }

  private _questionText: string;
  private _parameterType: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MultipleParameterQuestion to deeply clone from
   */
  constructor(_value?: RecursivePartial<MultipleParameterQuestion.AsObject>) {
    _value = _value || {};
    this.questionText = _value.questionText;
    this.parameterType = _value.parameterType;
    MultipleParameterQuestion.refineValues(this);
  }
  get questionText(): string {
    return this._questionText;
  }
  set questionText(value: string) {
    this._questionText = value;
  }
  get parameterType(): string {
    return this._parameterType;
  }
  set parameterType(value: string) {
    this._parameterType = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MultipleParameterQuestion.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MultipleParameterQuestion.AsObject {
    return {
      questionText: this.questionText,
      parameterType: this.parameterType
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
  ): MultipleParameterQuestion.AsProtobufJSON {
    return {
      questionText: this.questionText,
      parameterType: this.parameterType
    };
  }
}
export module MultipleParameterQuestion {
  /**
   * Standard JavaScript object representation for MultipleParameterQuestion
   */
  export interface AsObject {
    questionText: string;
    parameterType: string;
  }

  /**
   * Protobuf JSON representation for MultipleParameterQuestion
   */
  export interface AsProtobufJSON {
    questionText: string;
    parameterType: string;
  }
}

/**
 * Message implementation for ondewo.survey.Choice
 */
export class Choice implements GrpcMessage {
  static id = 'ondewo.survey.Choice';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Choice();
    Choice.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Choice) {
    _instance.synonyms = _instance.synonyms || [];
    _instance.followUpQuestion = _instance.followUpQuestion || undefined;
    _instance.value = _instance.value || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Choice, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.synonyms = _instance.synonyms || []).push(
            _reader.readString()
          );
          break;
        case 2:
          _instance.followUpQuestion = new Question();
          _reader.readMessage(
            _instance.followUpQuestion,
            Question.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.value = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Choice.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Choice, _writer: BinaryWriter) {
    if (_instance.synonyms && _instance.synonyms.length) {
      _writer.writeRepeatedString(1, _instance.synonyms);
    }
    if (_instance.followUpQuestion) {
      _writer.writeMessage(
        2,
        _instance.followUpQuestion as any,
        Question.serializeBinaryToWriter
      );
    }
    if (_instance.value) {
      _writer.writeString(3, _instance.value);
    }
  }

  private _synonyms: string[];
  private _followUpQuestion?: Question;
  private _value: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Choice to deeply clone from
   */
  constructor(_value?: RecursivePartial<Choice.AsObject>) {
    _value = _value || {};
    this.synonyms = (_value.synonyms || []).slice();
    this.followUpQuestion = _value.followUpQuestion
      ? new Question(_value.followUpQuestion)
      : undefined;
    this.value = _value.value;
    Choice.refineValues(this);
  }
  get synonyms(): string[] {
    return this._synonyms;
  }
  set synonyms(value: string[]) {
    this._synonyms = value;
  }
  get followUpQuestion(): Question | undefined {
    return this._followUpQuestion;
  }
  set followUpQuestion(value: Question | undefined) {
    this._followUpQuestion = value;
  }
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Choice.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Choice.AsObject {
    return {
      synonyms: (this.synonyms || []).slice(),
      followUpQuestion: this.followUpQuestion
        ? this.followUpQuestion.toObject()
        : undefined,
      value: this.value
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
  ): Choice.AsProtobufJSON {
    return {
      synonyms: (this.synonyms || []).slice(),
      followUpQuestion: this.followUpQuestion
        ? this.followUpQuestion.toProtobufJSON(options)
        : null,
      value: this.value
    };
  }
}
export module Choice {
  /**
   * Standard JavaScript object representation for Choice
   */
  export interface AsObject {
    synonyms: string[];
    followUpQuestion?: Question.AsObject;
    value: string;
  }

  /**
   * Protobuf JSON representation for Choice
   */
  export interface AsProtobufJSON {
    synonyms: string[];
    followUpQuestion: Question.AsProtobufJSON | null;
    value: string;
  }
}

/**
 * Message implementation for ondewo.survey.Answer
 */
export class Answer implements GrpcMessage {
  static id = 'ondewo.survey.Answer';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Answer();
    Answer.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Answer) {
    _instance.questionNr = _instance.questionNr || '0';
    _instance.sessionId = _instance.sessionId || '';
    _instance.answerText = _instance.answerText || '';
    _instance.answerParameter = _instance.answerParameter || '';
    _instance.answerParameterOriginal = _instance.answerParameterOriginal || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Answer, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.questionNr = _reader.readInt64String();
          break;
        case 2:
          _instance.sessionId = _reader.readString();
          break;
        case 3:
          _instance.answerText = _reader.readString();
          break;
        case 4:
          _instance.answerParameter = _reader.readString();
          break;
        case 5:
          _instance.answerParameterOriginal = _reader.readString();
          break;
        case 7:
          _instance.anonymous = _reader.readBool();
          break;
        case 6:
          _instance.userInformation = new Answer.UserInfo();
          _reader.readMessage(
            _instance.userInformation,
            Answer.UserInfo.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Answer.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Answer, _writer: BinaryWriter) {
    if (_instance.questionNr) {
      _writer.writeInt64String(1, _instance.questionNr);
    }
    if (_instance.sessionId) {
      _writer.writeString(2, _instance.sessionId);
    }
    if (_instance.answerText) {
      _writer.writeString(3, _instance.answerText);
    }
    if (_instance.answerParameter) {
      _writer.writeString(4, _instance.answerParameter);
    }
    if (_instance.answerParameterOriginal) {
      _writer.writeString(5, _instance.answerParameterOriginal);
    }
    if (_instance.anonymous || _instance.anonymous === false) {
      _writer.writeBool(7, _instance.anonymous);
    }
    if (_instance.userInformation) {
      _writer.writeMessage(
        6,
        _instance.userInformation as any,
        Answer.UserInfo.serializeBinaryToWriter
      );
    }
  }

  private _questionNr: string;
  private _sessionId: string;
  private _answerText: string;
  private _answerParameter: string;
  private _answerParameterOriginal: string;
  private _anonymous: boolean;
  private _userInformation?: Answer.UserInfo;

  private _isAnonymous: Answer.IsAnonymousCase = Answer.IsAnonymousCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Answer to deeply clone from
   */
  constructor(_value?: RecursivePartial<Answer.AsObject>) {
    _value = _value || {};
    this.questionNr = _value.questionNr;
    this.sessionId = _value.sessionId;
    this.answerText = _value.answerText;
    this.answerParameter = _value.answerParameter;
    this.answerParameterOriginal = _value.answerParameterOriginal;
    this.anonymous = _value.anonymous;
    this.userInformation = _value.userInformation
      ? new Answer.UserInfo(_value.userInformation)
      : undefined;
    Answer.refineValues(this);
  }
  get questionNr(): string {
    return this._questionNr;
  }
  set questionNr(value: string) {
    this._questionNr = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get answerText(): string {
    return this._answerText;
  }
  set answerText(value: string) {
    this._answerText = value;
  }
  get answerParameter(): string {
    return this._answerParameter;
  }
  set answerParameter(value: string) {
    this._answerParameter = value;
  }
  get answerParameterOriginal(): string {
    return this._answerParameterOriginal;
  }
  set answerParameterOriginal(value: string) {
    this._answerParameterOriginal = value;
  }
  get anonymous(): boolean {
    return this._anonymous;
  }
  set anonymous(value: boolean) {
    if (value !== undefined && value !== null) {
      this._userInformation = undefined;
      this._isAnonymous = Answer.IsAnonymousCase.anonymous;
    }
    this._anonymous = value;
  }
  get userInformation(): Answer.UserInfo | undefined {
    return this._userInformation;
  }
  set userInformation(value: Answer.UserInfo | undefined) {
    if (value !== undefined && value !== null) {
      this._anonymous = undefined;
      this._isAnonymous = Answer.IsAnonymousCase.userInformation;
    }
    this._userInformation = value;
  }
  get isAnonymous() {
    return this._isAnonymous;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Answer.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Answer.AsObject {
    return {
      questionNr: this.questionNr,
      sessionId: this.sessionId,
      answerText: this.answerText,
      answerParameter: this.answerParameter,
      answerParameterOriginal: this.answerParameterOriginal,
      anonymous: this.anonymous,
      userInformation: this.userInformation
        ? this.userInformation.toObject()
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
  ): Answer.AsProtobufJSON {
    return {
      questionNr: this.questionNr,
      sessionId: this.sessionId,
      answerText: this.answerText,
      answerParameter: this.answerParameter,
      answerParameterOriginal: this.answerParameterOriginal,
      anonymous: this.anonymous,
      userInformation: this.userInformation
        ? this.userInformation.toProtobufJSON(options)
        : null
    };
  }
}
export module Answer {
  /**
   * Standard JavaScript object representation for Answer
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
    questionNr: string;
    sessionId: string;
    answerText: string;
    answerParameter: string;
    answerParameterOriginal: string;
    anonymous: boolean;
    userInformation: Answer.UserInfo.AsProtobufJSON | null;
  }
  export enum IsAnonymousCase {
    none = 0,
    anonymous = 1,
    userInformation = 2
  }
  /**
   * Message implementation for ondewo.survey.Answer.UserInfo
   */
  export class UserInfo implements GrpcMessage {
    static id = 'ondewo.survey.Answer.UserInfo';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new UserInfo();
      UserInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UserInfo) {
      _instance.firstName = _instance.firstName || '';
      _instance.lastName = _instance.lastName || '';
      _instance.phoneNumber = _instance.phoneNumber || '';
      _instance.sessionId = _instance.sessionId || '';
      _instance.userId = _instance.userId || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: UserInfo,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.firstName = _reader.readString();
            break;
          case 2:
            _instance.lastName = _reader.readString();
            break;
          case 3:
            _instance.phoneNumber = _reader.readString();
            break;
          case 4:
            _instance.sessionId = _reader.readString();
            break;
          case 5:
            _instance.userId = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      UserInfo.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UserInfo, _writer: BinaryWriter) {
      if (_instance.firstName) {
        _writer.writeString(1, _instance.firstName);
      }
      if (_instance.lastName) {
        _writer.writeString(2, _instance.lastName);
      }
      if (_instance.phoneNumber) {
        _writer.writeString(3, _instance.phoneNumber);
      }
      if (_instance.sessionId) {
        _writer.writeString(4, _instance.sessionId);
      }
      if (_instance.userId) {
        _writer.writeString(5, _instance.userId);
      }
    }

    private _firstName: string;
    private _lastName: string;
    private _phoneNumber: string;
    private _sessionId: string;
    private _userId: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UserInfo to deeply clone from
     */
    constructor(_value?: RecursivePartial<UserInfo.AsObject>) {
      _value = _value || {};
      this.firstName = _value.firstName;
      this.lastName = _value.lastName;
      this.phoneNumber = _value.phoneNumber;
      this.sessionId = _value.sessionId;
      this.userId = _value.userId;
      UserInfo.refineValues(this);
    }
    get firstName(): string {
      return this._firstName;
    }
    set firstName(value: string) {
      this._firstName = value;
    }
    get lastName(): string {
      return this._lastName;
    }
    set lastName(value: string) {
      this._lastName = value;
    }
    get phoneNumber(): string {
      return this._phoneNumber;
    }
    set phoneNumber(value: string) {
      this._phoneNumber = value;
    }
    get sessionId(): string {
      return this._sessionId;
    }
    set sessionId(value: string) {
      this._sessionId = value;
    }
    get userId(): string {
      return this._userId;
    }
    set userId(value: string) {
      this._userId = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      UserInfo.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UserInfo.AsObject {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        sessionId: this.sessionId,
        userId: this.userId
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
    ): UserInfo.AsProtobufJSON {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        sessionId: this.sessionId,
        userId: this.userId
      };
    }
  }
  export module UserInfo {
    /**
     * Standard JavaScript object representation for UserInfo
     */
    export interface AsObject {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      sessionId: string;
      userId: string;
    }

    /**
     * Protobuf JSON representation for UserInfo
     */
    export interface AsProtobufJSON {
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
export class CreateSurveyRequest implements GrpcMessage {
  static id = 'ondewo.survey.CreateSurveyRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateSurveyRequest();
    CreateSurveyRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateSurveyRequest) {
    _instance.survey = _instance.survey || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateSurveyRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.survey = new Survey();
          _reader.readMessage(
            _instance.survey,
            Survey.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateSurveyRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateSurveyRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.survey) {
      _writer.writeMessage(
        1,
        _instance.survey as any,
        Survey.serializeBinaryToWriter
      );
    }
  }

  private _survey?: Survey;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateSurveyRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateSurveyRequest.AsObject>) {
    _value = _value || {};
    this.survey = _value.survey ? new Survey(_value.survey) : undefined;
    CreateSurveyRequest.refineValues(this);
  }
  get survey(): Survey | undefined {
    return this._survey;
  }
  set survey(value: Survey | undefined) {
    this._survey = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateSurveyRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateSurveyRequest.AsObject {
    return {
      survey: this.survey ? this.survey.toObject() : undefined
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
  ): CreateSurveyRequest.AsProtobufJSON {
    return {
      survey: this.survey ? this.survey.toProtobufJSON(options) : null
    };
  }
}
export module CreateSurveyRequest {
  /**
   * Standard JavaScript object representation for CreateSurveyRequest
   */
  export interface AsObject {
    survey?: Survey.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateSurveyRequest
   */
  export interface AsProtobufJSON {
    survey: Survey.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.survey.GetSurveyRequest
 */
export class GetSurveyRequest implements GrpcMessage {
  static id = 'ondewo.survey.GetSurveyRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSurveyRequest();
    GetSurveyRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSurveyRequest) {
    _instance.surveyId = _instance.surveyId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSurveyRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.surveyId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetSurveyRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSurveyRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.surveyId) {
      _writer.writeString(1, _instance.surveyId);
    }
  }

  private _surveyId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSurveyRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetSurveyRequest.AsObject>) {
    _value = _value || {};
    this.surveyId = _value.surveyId;
    GetSurveyRequest.refineValues(this);
  }
  get surveyId(): string {
    return this._surveyId;
  }
  set surveyId(value: string) {
    this._surveyId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetSurveyRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSurveyRequest.AsObject {
    return {
      surveyId: this.surveyId
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
  ): GetSurveyRequest.AsProtobufJSON {
    return {
      surveyId: this.surveyId
    };
  }
}
export module GetSurveyRequest {
  /**
   * Standard JavaScript object representation for GetSurveyRequest
   */
  export interface AsObject {
    surveyId: string;
  }

  /**
   * Protobuf JSON representation for GetSurveyRequest
   */
  export interface AsProtobufJSON {
    surveyId: string;
  }
}

/**
 * Message implementation for ondewo.survey.UpdateSurveyRequest
 */
export class UpdateSurveyRequest implements GrpcMessage {
  static id = 'ondewo.survey.UpdateSurveyRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateSurveyRequest();
    UpdateSurveyRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateSurveyRequest) {
    _instance.survey = _instance.survey || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateSurveyRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.survey = new Survey();
          _reader.readMessage(
            _instance.survey,
            Survey.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf004.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf004.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateSurveyRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateSurveyRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.survey) {
      _writer.writeMessage(
        1,
        _instance.survey as any,
        Survey.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf004.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _survey?: Survey;
  private _updateMask?: googleProtobuf004.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateSurveyRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateSurveyRequest.AsObject>) {
    _value = _value || {};
    this.survey = _value.survey ? new Survey(_value.survey) : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf004.FieldMask(_value.updateMask)
      : undefined;
    UpdateSurveyRequest.refineValues(this);
  }
  get survey(): Survey | undefined {
    return this._survey;
  }
  set survey(value: Survey | undefined) {
    this._survey = value;
  }
  get updateMask(): googleProtobuf004.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf004.FieldMask | undefined) {
    this._updateMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateSurveyRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateSurveyRequest.AsObject {
    return {
      survey: this.survey ? this.survey.toObject() : undefined,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined
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
  ): UpdateSurveyRequest.AsProtobufJSON {
    return {
      survey: this.survey ? this.survey.toProtobufJSON(options) : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null
    };
  }
}
export module UpdateSurveyRequest {
  /**
   * Standard JavaScript object representation for UpdateSurveyRequest
   */
  export interface AsObject {
    survey?: Survey.AsObject;
    updateMask?: googleProtobuf004.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateSurveyRequest
   */
  export interface AsProtobufJSON {
    survey: Survey.AsProtobufJSON | null;
    updateMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.survey.DeleteSurveyRequest
 */
export class DeleteSurveyRequest implements GrpcMessage {
  static id = 'ondewo.survey.DeleteSurveyRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteSurveyRequest();
    DeleteSurveyRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteSurveyRequest) {
    _instance.surveyId = _instance.surveyId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteSurveyRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.surveyId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteSurveyRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteSurveyRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.surveyId) {
      _writer.writeString(1, _instance.surveyId);
    }
  }

  private _surveyId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteSurveyRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteSurveyRequest.AsObject>) {
    _value = _value || {};
    this.surveyId = _value.surveyId;
    DeleteSurveyRequest.refineValues(this);
  }
  get surveyId(): string {
    return this._surveyId;
  }
  set surveyId(value: string) {
    this._surveyId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteSurveyRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteSurveyRequest.AsObject {
    return {
      surveyId: this.surveyId
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
  ): DeleteSurveyRequest.AsProtobufJSON {
    return {
      surveyId: this.surveyId
    };
  }
}
export module DeleteSurveyRequest {
  /**
   * Standard JavaScript object representation for DeleteSurveyRequest
   */
  export interface AsObject {
    surveyId: string;
  }

  /**
   * Protobuf JSON representation for DeleteSurveyRequest
   */
  export interface AsProtobufJSON {
    surveyId: string;
  }
}

/**
 * Message implementation for ondewo.survey.GetSurveyAnswersRequest
 */
export class GetSurveyAnswersRequest implements GrpcMessage {
  static id = 'ondewo.survey.GetSurveyAnswersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSurveyAnswersRequest();
    GetSurveyAnswersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSurveyAnswersRequest) {
    _instance.surveyId = _instance.surveyId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSurveyAnswersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.surveyId = _reader.readString();
          break;
        case 2:
          _instance.sessionId = _reader.readString();
          break;
        case 3:
          _instance.userId = _reader.readString();
          break;
        case 4:
          _instance.userPhoneNumber = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetSurveyAnswersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSurveyAnswersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.surveyId) {
      _writer.writeString(1, _instance.surveyId);
    }
    if (_instance.sessionId || _instance.sessionId === '') {
      _writer.writeString(2, _instance.sessionId);
    }
    if (_instance.userId || _instance.userId === '') {
      _writer.writeString(3, _instance.userId);
    }
    if (_instance.userPhoneNumber || _instance.userPhoneNumber === '') {
      _writer.writeString(4, _instance.userPhoneNumber);
    }
  }

  private _surveyId: string;
  private _sessionId: string;
  private _userId: string;
  private _userPhoneNumber: string;

  private _identifier: GetSurveyAnswersRequest.IdentifierCase =
    GetSurveyAnswersRequest.IdentifierCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSurveyAnswersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetSurveyAnswersRequest.AsObject>) {
    _value = _value || {};
    this.surveyId = _value.surveyId;
    this.sessionId = _value.sessionId;
    this.userId = _value.userId;
    this.userPhoneNumber = _value.userPhoneNumber;
    GetSurveyAnswersRequest.refineValues(this);
  }
  get surveyId(): string {
    return this._surveyId;
  }
  set surveyId(value: string) {
    this._surveyId = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    if (value !== undefined && value !== null) {
      this._userId = this._userPhoneNumber = undefined;
      this._identifier = GetSurveyAnswersRequest.IdentifierCase.sessionId;
    }
    this._sessionId = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    if (value !== undefined && value !== null) {
      this._sessionId = this._userPhoneNumber = undefined;
      this._identifier = GetSurveyAnswersRequest.IdentifierCase.userId;
    }
    this._userId = value;
  }
  get userPhoneNumber(): string {
    return this._userPhoneNumber;
  }
  set userPhoneNumber(value: string) {
    if (value !== undefined && value !== null) {
      this._sessionId = this._userId = undefined;
      this._identifier = GetSurveyAnswersRequest.IdentifierCase.userPhoneNumber;
    }
    this._userPhoneNumber = value;
  }
  get identifier() {
    return this._identifier;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetSurveyAnswersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSurveyAnswersRequest.AsObject {
    return {
      surveyId: this.surveyId,
      sessionId: this.sessionId,
      userId: this.userId,
      userPhoneNumber: this.userPhoneNumber
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
  ): GetSurveyAnswersRequest.AsProtobufJSON {
    return {
      surveyId: this.surveyId,
      sessionId:
        this.sessionId === null || this.sessionId === undefined
          ? null
          : this.sessionId,
      userId:
        this.userId === null || this.userId === undefined ? null : this.userId,
      userPhoneNumber:
        this.userPhoneNumber === null || this.userPhoneNumber === undefined
          ? null
          : this.userPhoneNumber
    };
  }
}
export module GetSurveyAnswersRequest {
  /**
   * Standard JavaScript object representation for GetSurveyAnswersRequest
   */
  export interface AsObject {
    surveyId: string;
    sessionId: string;
    userId: string;
    userPhoneNumber: string;
  }

  /**
   * Protobuf JSON representation for GetSurveyAnswersRequest
   */
  export interface AsProtobufJSON {
    surveyId: string;
    sessionId: string | null;
    userId: string | null;
    userPhoneNumber: string | null;
  }
  export enum IdentifierCase {
    none = 0,
    sessionId = 1,
    userId = 2,
    userPhoneNumber = 3
  }
}

/**
 * Message implementation for ondewo.survey.GetAllSurveyAnswersRequest
 */
export class GetAllSurveyAnswersRequest implements GrpcMessage {
  static id = 'ondewo.survey.GetAllSurveyAnswersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAllSurveyAnswersRequest();
    GetAllSurveyAnswersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAllSurveyAnswersRequest) {
    _instance.surveyId = _instance.surveyId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAllSurveyAnswersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.surveyId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetAllSurveyAnswersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAllSurveyAnswersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.surveyId) {
      _writer.writeString(1, _instance.surveyId);
    }
  }

  private _surveyId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAllSurveyAnswersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAllSurveyAnswersRequest.AsObject>) {
    _value = _value || {};
    this.surveyId = _value.surveyId;
    GetAllSurveyAnswersRequest.refineValues(this);
  }
  get surveyId(): string {
    return this._surveyId;
  }
  set surveyId(value: string) {
    this._surveyId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAllSurveyAnswersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAllSurveyAnswersRequest.AsObject {
    return {
      surveyId: this.surveyId
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
  ): GetAllSurveyAnswersRequest.AsProtobufJSON {
    return {
      surveyId: this.surveyId
    };
  }
}
export module GetAllSurveyAnswersRequest {
  /**
   * Standard JavaScript object representation for GetAllSurveyAnswersRequest
   */
  export interface AsObject {
    surveyId: string;
  }

  /**
   * Protobuf JSON representation for GetAllSurveyAnswersRequest
   */
  export interface AsProtobufJSON {
    surveyId: string;
  }
}

/**
 * Message implementation for ondewo.survey.SurveyAnswersResponse
 */
export class SurveyAnswersResponse implements GrpcMessage {
  static id = 'ondewo.survey.SurveyAnswersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SurveyAnswersResponse();
    SurveyAnswersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SurveyAnswersResponse) {
    _instance.surveyId = _instance.surveyId || '';
    _instance.answers = _instance.answers || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SurveyAnswersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.surveyId = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new Answer();
          _reader.readMessage(
            messageInitializer2,
            Answer.deserializeBinaryFromReader
          );
          (_instance.answers = _instance.answers || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SurveyAnswersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SurveyAnswersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.surveyId) {
      _writer.writeString(1, _instance.surveyId);
    }
    if (_instance.answers && _instance.answers.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.answers as any,
        Answer.serializeBinaryToWriter
      );
    }
  }

  private _surveyId: string;
  private _answers?: Answer[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SurveyAnswersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SurveyAnswersResponse.AsObject>) {
    _value = _value || {};
    this.surveyId = _value.surveyId;
    this.answers = (_value.answers || []).map(m => new Answer(m));
    SurveyAnswersResponse.refineValues(this);
  }
  get surveyId(): string {
    return this._surveyId;
  }
  set surveyId(value: string) {
    this._surveyId = value;
  }
  get answers(): Answer[] | undefined {
    return this._answers;
  }
  set answers(value: Answer[] | undefined) {
    this._answers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SurveyAnswersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SurveyAnswersResponse.AsObject {
    return {
      surveyId: this.surveyId,
      answers: (this.answers || []).map(m => m.toObject())
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
  ): SurveyAnswersResponse.AsProtobufJSON {
    return {
      surveyId: this.surveyId,
      answers: (this.answers || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module SurveyAnswersResponse {
  /**
   * Standard JavaScript object representation for SurveyAnswersResponse
   */
  export interface AsObject {
    surveyId: string;
    answers?: Answer.AsObject[];
  }

  /**
   * Protobuf JSON representation for SurveyAnswersResponse
   */
  export interface AsProtobufJSON {
    surveyId: string;
    answers: Answer.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.survey.ListSurveysRequest
 */
export class ListSurveysRequest implements GrpcMessage {
  static id = 'ondewo.survey.ListSurveysRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSurveysRequest();
    ListSurveysRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSurveysRequest) {
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSurveysRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListSurveysRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSurveysRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.pageToken) {
      _writer.writeString(1, _instance.pageToken);
    }
  }

  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSurveysRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListSurveysRequest.AsObject>) {
    _value = _value || {};
    this.pageToken = _value.pageToken;
    ListSurveysRequest.refineValues(this);
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListSurveysRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSurveysRequest.AsObject {
    return {
      pageToken: this.pageToken
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
  ): ListSurveysRequest.AsProtobufJSON {
    return {
      pageToken: this.pageToken
    };
  }
}
export module ListSurveysRequest {
  /**
   * Standard JavaScript object representation for ListSurveysRequest
   */
  export interface AsObject {
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListSurveysRequest
   */
  export interface AsProtobufJSON {
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.survey.ListSurveysResponse
 */
export class ListSurveysResponse implements GrpcMessage {
  static id = 'ondewo.survey.ListSurveysResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSurveysResponse();
    ListSurveysResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSurveysResponse) {
    _instance.surveys = _instance.surveys || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSurveysResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Survey();
          _reader.readMessage(
            messageInitializer1,
            Survey.deserializeBinaryFromReader
          );
          (_instance.surveys = _instance.surveys || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListSurveysResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSurveysResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.surveys && _instance.surveys.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.surveys as any,
        Survey.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _surveys?: Survey[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSurveysResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListSurveysResponse.AsObject>) {
    _value = _value || {};
    this.surveys = (_value.surveys || []).map(m => new Survey(m));
    this.nextPageToken = _value.nextPageToken;
    ListSurveysResponse.refineValues(this);
  }
  get surveys(): Survey[] | undefined {
    return this._surveys;
  }
  set surveys(value: Survey[] | undefined) {
    this._surveys = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListSurveysResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSurveysResponse.AsObject {
    return {
      surveys: (this.surveys || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken
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
  ): ListSurveysResponse.AsProtobufJSON {
    return {
      surveys: (this.surveys || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListSurveysResponse {
  /**
   * Standard JavaScript object representation for ListSurveysResponse
   */
  export interface AsObject {
    surveys?: Survey.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListSurveysResponse
   */
  export interface AsProtobufJSON {
    surveys: Survey.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.survey.AgentSurveyRequest
 */
export class AgentSurveyRequest implements GrpcMessage {
  static id = 'ondewo.survey.AgentSurveyRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AgentSurveyRequest();
    AgentSurveyRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AgentSurveyRequest) {
    _instance.surveyId = _instance.surveyId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AgentSurveyRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.surveyId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AgentSurveyRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AgentSurveyRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.surveyId) {
      _writer.writeString(1, _instance.surveyId);
    }
  }

  private _surveyId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AgentSurveyRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AgentSurveyRequest.AsObject>) {
    _value = _value || {};
    this.surveyId = _value.surveyId;
    AgentSurveyRequest.refineValues(this);
  }
  get surveyId(): string {
    return this._surveyId;
  }
  set surveyId(value: string) {
    this._surveyId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AgentSurveyRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AgentSurveyRequest.AsObject {
    return {
      surveyId: this.surveyId
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
  ): AgentSurveyRequest.AsProtobufJSON {
    return {
      surveyId: this.surveyId
    };
  }
}
export module AgentSurveyRequest {
  /**
   * Standard JavaScript object representation for AgentSurveyRequest
   */
  export interface AsObject {
    surveyId: string;
  }

  /**
   * Protobuf JSON representation for AgentSurveyRequest
   */
  export interface AsProtobufJSON {
    surveyId: string;
  }
}

/**
 * Message implementation for ondewo.survey.AgentSurveyResponse
 */
export class AgentSurveyResponse implements GrpcMessage {
  static id = 'ondewo.survey.AgentSurveyResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AgentSurveyResponse();
    AgentSurveyResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AgentSurveyResponse) {
    _instance.parent = _instance.parent || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AgentSurveyResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AgentSurveyResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AgentSurveyResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
  }

  private _parent: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AgentSurveyResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<AgentSurveyResponse.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    AgentSurveyResponse.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AgentSurveyResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AgentSurveyResponse.AsObject {
    return {
      parent: this.parent
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
  ): AgentSurveyResponse.AsProtobufJSON {
    return {
      parent: this.parent
    };
  }
}
export module AgentSurveyResponse {
  /**
   * Standard JavaScript object representation for AgentSurveyResponse
   */
  export interface AsObject {
    parent: string;
  }

  /**
   * Protobuf JSON representation for AgentSurveyResponse
   */
  export interface AsProtobufJSON {
    parent: string;
  }
}
