import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Optional, Inject } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import * as i1 from '@ngx-grpc/core';
import { throwStatusErrors, takeMessages, GRPC_CLIENT_FACTORY } from '@ngx-grpc/core';

var SubFlow;
(function (SubFlow) {
    SubFlow[SubFlow["SUBFLOW_UNSPECIFIED"] = 0] = "SUBFLOW_UNSPECIFIED";
    SubFlow[SubFlow["BOT"] = 1] = "BOT";
    SubFlow[SubFlow["LEGAL_ENTITY"] = 2] = "LEGAL_ENTITY";
    SubFlow[SubFlow["POSTAL_ADDRESS"] = 3] = "POSTAL_ADDRESS";
    SubFlow[SubFlow["EMAIL_ADDRESS"] = 4] = "EMAIL_ADDRESS";
    SubFlow[SubFlow["PHONE_NUMBER"] = 5] = "PHONE_NUMBER";
    SubFlow[SubFlow["PHONE_HOURS"] = 6] = "PHONE_HOURS";
    SubFlow[SubFlow["EXPECTED_DURATION"] = 7] = "EXPECTED_DURATION";
    SubFlow[SubFlow["PURPOSE"] = 8] = "PURPOSE";
})(SubFlow || (SubFlow = {}));
/**
 * Message implementation for ondewo.survey.Survey
 */
class Survey {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Survey to deeply clone from
     */
    constructor(_value) {
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
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Survey();
        Survey.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
                    _reader.readMessage(messageInitializer7, Question.deserializeBinaryFromReader);
                    (_instance.questions = _instance.questions || []).push(messageInitializer7);
                    break;
                case 8:
                    _instance.surveyInfo = new SurveyInfo();
                    _reader.readMessage(_instance.surveyInfo, SurveyInfo.deserializeBinaryFromReader);
                    break;
                case 9:
                    (_instance.excludeSubflows = _instance.excludeSubflows || []).push(...(_reader.readPackedEnum() || []));
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
    static serializeBinaryToWriter(_instance, _writer) {
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
            _writer.writeRepeatedMessage(7, _instance.questions, Question.serializeBinaryToWriter);
        }
        if (_instance.surveyInfo) {
            _writer.writeMessage(8, _instance.surveyInfo, SurveyInfo.serializeBinaryToWriter);
        }
        if (_instance.excludeSubflows && _instance.excludeSubflows.length) {
            _writer.writePackedEnum(9, _instance.excludeSubflows);
        }
        if (_instance.status) {
            _writer.writeEnum(10, _instance.status);
        }
    }
    get surveyId() {
        return this._surveyId;
    }
    set surveyId(value) {
        this._surveyId = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get questions() {
        return this._questions;
    }
    set questions(value) {
        this._questions = value;
    }
    get surveyInfo() {
        return this._surveyInfo;
    }
    set surveyInfo(value) {
        this._surveyInfo = value;
    }
    get excludeSubflows() {
        return this._excludeSubflows;
    }
    set excludeSubflows(value) {
        this._excludeSubflows = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
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
    toObject() {
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
    options) {
        return {
            surveyId: this.surveyId,
            displayName: this.displayName,
            languageCode: this.languageCode,
            questions: (this.questions || []).map(m => m.toProtobufJSON(options)),
            surveyInfo: this.surveyInfo
                ? this.surveyInfo.toProtobufJSON(options)
                : null,
            excludeSubflows: (this.excludeSubflows || []).map(v => SubFlow[v]),
            status: Survey.AgentStatus[this.status === null || this.status === undefined ? 0 : this.status]
        };
    }
}
Survey.id = 'ondewo.survey.Survey';
(function (Survey) {
    let AgentStatus;
    (function (AgentStatus) {
        AgentStatus[AgentStatus["TO_BE_INITIALIZED"] = 0] = "TO_BE_INITIALIZED";
        AgentStatus[AgentStatus["UPDATED"] = 1] = "UPDATED";
        AgentStatus[AgentStatus["UPDATING"] = 2] = "UPDATING";
        AgentStatus[AgentStatus["OUTDATED"] = 3] = "OUTDATED";
    })(AgentStatus = Survey.AgentStatus || (Survey.AgentStatus = {}));
})(Survey || (Survey = {}));
/**
 * Message implementation for ondewo.survey.SurveyInfo
 */
class SurveyInfo {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SurveyInfo to deeply clone from
     */
    constructor(_value) {
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
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SurveyInfo();
        SurveyInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    get legalEntity() {
        return this._legalEntity;
    }
    set legalEntity(value) {
        this._legalEntity = value;
    }
    get postalAddress() {
        return this._postalAddress;
    }
    set postalAddress(value) {
        this._postalAddress = value;
    }
    get emailAddress() {
        return this._emailAddress;
    }
    set emailAddress(value) {
        this._emailAddress = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get phoneHours() {
        return this._phoneHours;
    }
    set phoneHours(value) {
        this._phoneHours = value;
    }
    get expectedDuration() {
        return this._expectedDuration;
    }
    set expectedDuration(value) {
        this._expectedDuration = value;
    }
    get purpose() {
        return this._purpose;
    }
    set purpose(value) {
        this._purpose = value;
    }
    get topic() {
        return this._topic;
    }
    set topic(value) {
        this._topic = value;
    }
    get legalDisclaimer() {
        return this._legalDisclaimer;
    }
    set legalDisclaimer(value) {
        this._legalDisclaimer = value;
    }
    get anonymous() {
        return this._anonymous;
    }
    set anonymous(value) {
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
    toObject() {
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
    options) {
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
SurveyInfo.id = 'ondewo.survey.SurveyInfo';
/**
 * Message implementation for ondewo.survey.Question
 */
class Question {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Question to deeply clone from
     */
    constructor(_value) {
        this._question = Question.QuestionCase.none;
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
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Question();
        Question.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) { }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.openQuestion = new OpenQuestion();
                    _reader.readMessage(_instance.openQuestion, OpenQuestion.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.singleChoiceQuestion = new SingleChoiceQuestion();
                    _reader.readMessage(_instance.singleChoiceQuestion, SingleChoiceQuestion.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.multipleChoiceQuestion = new MultipleChoiceQuestion();
                    _reader.readMessage(_instance.multipleChoiceQuestion, MultipleChoiceQuestion.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.scaleQuestion = new ScaleQuestion();
                    _reader.readMessage(_instance.scaleQuestion, ScaleQuestion.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.singleParameterQuestion = new SingleParameterQuestion();
                    _reader.readMessage(_instance.singleParameterQuestion, SingleParameterQuestion.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.multipleParameterQuestion = new MultipleParameterQuestion();
                    _reader.readMessage(_instance.multipleParameterQuestion, MultipleParameterQuestion.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.openQuestion) {
            _writer.writeMessage(1, _instance.openQuestion, OpenQuestion.serializeBinaryToWriter);
        }
        if (_instance.singleChoiceQuestion) {
            _writer.writeMessage(2, _instance.singleChoiceQuestion, SingleChoiceQuestion.serializeBinaryToWriter);
        }
        if (_instance.multipleChoiceQuestion) {
            _writer.writeMessage(3, _instance.multipleChoiceQuestion, MultipleChoiceQuestion.serializeBinaryToWriter);
        }
        if (_instance.scaleQuestion) {
            _writer.writeMessage(4, _instance.scaleQuestion, ScaleQuestion.serializeBinaryToWriter);
        }
        if (_instance.singleParameterQuestion) {
            _writer.writeMessage(5, _instance.singleParameterQuestion, SingleParameterQuestion.serializeBinaryToWriter);
        }
        if (_instance.multipleParameterQuestion) {
            _writer.writeMessage(6, _instance.multipleParameterQuestion, MultipleParameterQuestion.serializeBinaryToWriter);
        }
    }
    get openQuestion() {
        return this._openQuestion;
    }
    set openQuestion(value) {
        if (value !== undefined && value !== null) {
            this._singleChoiceQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = undefined;
            this._question = Question.QuestionCase.openQuestion;
        }
        this._openQuestion = value;
    }
    get singleChoiceQuestion() {
        return this._singleChoiceQuestion;
    }
    set singleChoiceQuestion(value) {
        if (value !== undefined && value !== null) {
            this._openQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = undefined;
            this._question = Question.QuestionCase.singleChoiceQuestion;
        }
        this._singleChoiceQuestion = value;
    }
    get multipleChoiceQuestion() {
        return this._multipleChoiceQuestion;
    }
    set multipleChoiceQuestion(value) {
        if (value !== undefined && value !== null) {
            this._openQuestion = this._singleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = undefined;
            this._question = Question.QuestionCase.multipleChoiceQuestion;
        }
        this._multipleChoiceQuestion = value;
    }
    get scaleQuestion() {
        return this._scaleQuestion;
    }
    set scaleQuestion(value) {
        if (value !== undefined && value !== null) {
            this._openQuestion = this._singleChoiceQuestion = this._multipleChoiceQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = undefined;
            this._question = Question.QuestionCase.scaleQuestion;
        }
        this._scaleQuestion = value;
    }
    get singleParameterQuestion() {
        return this._singleParameterQuestion;
    }
    set singleParameterQuestion(value) {
        if (value !== undefined && value !== null) {
            this._openQuestion = this._singleChoiceQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._multipleParameterQuestion = undefined;
            this._question = Question.QuestionCase.singleParameterQuestion;
        }
        this._singleParameterQuestion = value;
    }
    get multipleParameterQuestion() {
        return this._multipleParameterQuestion;
    }
    set multipleParameterQuestion(value) {
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
    toObject() {
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
    options) {
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
Question.id = 'ondewo.survey.Question';
(function (Question) {
    let QuestionCase;
    (function (QuestionCase) {
        QuestionCase[QuestionCase["none"] = 0] = "none";
        QuestionCase[QuestionCase["openQuestion"] = 1] = "openQuestion";
        QuestionCase[QuestionCase["singleChoiceQuestion"] = 2] = "singleChoiceQuestion";
        QuestionCase[QuestionCase["multipleChoiceQuestion"] = 3] = "multipleChoiceQuestion";
        QuestionCase[QuestionCase["scaleQuestion"] = 4] = "scaleQuestion";
        QuestionCase[QuestionCase["singleParameterQuestion"] = 5] = "singleParameterQuestion";
        QuestionCase[QuestionCase["multipleParameterQuestion"] = 6] = "multipleParameterQuestion";
    })(QuestionCase = Question.QuestionCase || (Question.QuestionCase = {}));
})(Question || (Question = {}));
/**
 * Message implementation for ondewo.survey.OpenQuestion
 */
class OpenQuestion {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of OpenQuestion to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.questionText = _value.questionText;
        OpenQuestion.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new OpenQuestion();
        OpenQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.questionText = _instance.questionText || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.questionText) {
            _writer.writeString(1, _instance.questionText);
        }
    }
    get questionText() {
        return this._questionText;
    }
    set questionText(value) {
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
    toObject() {
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
    options) {
        return {
            questionText: this.questionText
        };
    }
}
OpenQuestion.id = 'ondewo.survey.OpenQuestion';
/**
 * Message implementation for ondewo.survey.SingleChoiceQuestion
 */
class SingleChoiceQuestion {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SingleChoiceQuestion to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.questionText = _value.questionText;
        this.choices = (_value.choices || []).map(m => new Choice(m));
        SingleChoiceQuestion.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SingleChoiceQuestion();
        SingleChoiceQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.questionText = _instance.questionText || '';
        _instance.choices = _instance.choices || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.questionText = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new Choice();
                    _reader.readMessage(messageInitializer2, Choice.deserializeBinaryFromReader);
                    (_instance.choices = _instance.choices || []).push(messageInitializer2);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.questionText) {
            _writer.writeString(1, _instance.questionText);
        }
        if (_instance.choices && _instance.choices.length) {
            _writer.writeRepeatedMessage(2, _instance.choices, Choice.serializeBinaryToWriter);
        }
    }
    get questionText() {
        return this._questionText;
    }
    set questionText(value) {
        this._questionText = value;
    }
    get choices() {
        return this._choices;
    }
    set choices(value) {
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
    toObject() {
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
    options) {
        return {
            questionText: this.questionText,
            choices: (this.choices || []).map(m => m.toProtobufJSON(options))
        };
    }
}
SingleChoiceQuestion.id = 'ondewo.survey.SingleChoiceQuestion';
/**
 * Message implementation for ondewo.survey.MultipleChoiceQuestion
 */
class MultipleChoiceQuestion {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MultipleChoiceQuestion to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.questionText = _value.questionText;
        this.choices = (_value.choices || []).map(m => new Choice(m));
        MultipleChoiceQuestion.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new MultipleChoiceQuestion();
        MultipleChoiceQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.questionText = _instance.questionText || '';
        _instance.choices = _instance.choices || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.questionText = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new Choice();
                    _reader.readMessage(messageInitializer2, Choice.deserializeBinaryFromReader);
                    (_instance.choices = _instance.choices || []).push(messageInitializer2);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.questionText) {
            _writer.writeString(1, _instance.questionText);
        }
        if (_instance.choices && _instance.choices.length) {
            _writer.writeRepeatedMessage(2, _instance.choices, Choice.serializeBinaryToWriter);
        }
    }
    get questionText() {
        return this._questionText;
    }
    set questionText(value) {
        this._questionText = value;
    }
    get choices() {
        return this._choices;
    }
    set choices(value) {
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
    toObject() {
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
    options) {
        return {
            questionText: this.questionText,
            choices: (this.choices || []).map(m => m.toProtobufJSON(options))
        };
    }
}
MultipleChoiceQuestion.id = 'ondewo.survey.MultipleChoiceQuestion';
/**
 * Message implementation for ondewo.survey.ScaleQuestion
 */
class ScaleQuestion {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ScaleQuestion to deeply clone from
     */
    constructor(_value) {
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
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ScaleQuestion();
        ScaleQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.questionText = _instance.questionText || '';
        _instance.minValue = _instance.minValue || undefined;
        _instance.maxValue = _instance.maxValue || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.questionText = _reader.readString();
                    break;
                case 2:
                    _instance.minValue = new ScaleQuestion.ScaleValue();
                    _reader.readMessage(_instance.minValue, ScaleQuestion.ScaleValue.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.maxValue = new ScaleQuestion.ScaleValue();
                    _reader.readMessage(_instance.maxValue, ScaleQuestion.ScaleValue.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.questionText) {
            _writer.writeString(1, _instance.questionText);
        }
        if (_instance.minValue) {
            _writer.writeMessage(2, _instance.minValue, ScaleQuestion.ScaleValue.serializeBinaryToWriter);
        }
        if (_instance.maxValue) {
            _writer.writeMessage(3, _instance.maxValue, ScaleQuestion.ScaleValue.serializeBinaryToWriter);
        }
    }
    get questionText() {
        return this._questionText;
    }
    set questionText(value) {
        this._questionText = value;
    }
    get minValue() {
        return this._minValue;
    }
    set minValue(value) {
        this._minValue = value;
    }
    get maxValue() {
        return this._maxValue;
    }
    set maxValue(value) {
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
    toObject() {
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
    options) {
        return {
            questionText: this.questionText,
            minValue: this.minValue ? this.minValue.toProtobufJSON(options) : null,
            maxValue: this.maxValue ? this.maxValue.toProtobufJSON(options) : null
        };
    }
}
ScaleQuestion.id = 'ondewo.survey.ScaleQuestion';
(function (ScaleQuestion) {
    /**
     * Message implementation for ondewo.survey.ScaleValue
     */
    class ScaleValue {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ScaleValue to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.value = _value.value;
            this.label = _value.label;
            ScaleValue.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new ScaleValue();
            ScaleValue.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.value = _instance.value || 0;
            _instance.label = _instance.label || '';
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
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
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.value) {
                _writer.writeInt32(1, _instance.value);
            }
            if (_instance.label) {
                _writer.writeString(2, _instance.label);
            }
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        get label() {
            return this._label;
        }
        set label(value) {
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
        toObject() {
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
        options) {
            return {
                value: this.value,
                label: this.label
            };
        }
    }
    ScaleValue.id = 'ondewo.survey.ScaleValue';
    ScaleQuestion.ScaleValue = ScaleValue;
})(ScaleQuestion || (ScaleQuestion = {}));
/**
 * Message implementation for ondewo.survey.SingleParameterQuestion
 */
class SingleParameterQuestion {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SingleParameterQuestion to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.questionText = _value.questionText;
        this.parameterType = _value.parameterType;
        SingleParameterQuestion.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SingleParameterQuestion();
        SingleParameterQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.questionText = _instance.questionText || '';
        _instance.parameterType = _instance.parameterType || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.questionText) {
            _writer.writeString(1, _instance.questionText);
        }
        if (_instance.parameterType) {
            _writer.writeString(2, _instance.parameterType);
        }
    }
    get questionText() {
        return this._questionText;
    }
    set questionText(value) {
        this._questionText = value;
    }
    get parameterType() {
        return this._parameterType;
    }
    set parameterType(value) {
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
    toObject() {
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
    options) {
        return {
            questionText: this.questionText,
            parameterType: this.parameterType
        };
    }
}
SingleParameterQuestion.id = 'ondewo.survey.SingleParameterQuestion';
/**
 * Message implementation for ondewo.survey.MultipleParameterQuestion
 */
class MultipleParameterQuestion {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MultipleParameterQuestion to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.questionText = _value.questionText;
        this.parameterType = _value.parameterType;
        MultipleParameterQuestion.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new MultipleParameterQuestion();
        MultipleParameterQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.questionText = _instance.questionText || '';
        _instance.parameterType = _instance.parameterType || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.questionText) {
            _writer.writeString(1, _instance.questionText);
        }
        if (_instance.parameterType) {
            _writer.writeString(2, _instance.parameterType);
        }
    }
    get questionText() {
        return this._questionText;
    }
    set questionText(value) {
        this._questionText = value;
    }
    get parameterType() {
        return this._parameterType;
    }
    set parameterType(value) {
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
    toObject() {
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
    options) {
        return {
            questionText: this.questionText,
            parameterType: this.parameterType
        };
    }
}
MultipleParameterQuestion.id = 'ondewo.survey.MultipleParameterQuestion';
/**
 * Message implementation for ondewo.survey.Choice
 */
class Choice {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Choice to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.synonyms = (_value.synonyms || []).slice();
        this.followUpQuestion = _value.followUpQuestion
            ? new Question(_value.followUpQuestion)
            : undefined;
        this.value = _value.value;
        Choice.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Choice();
        Choice.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.synonyms = _instance.synonyms || [];
        _instance.followUpQuestion = _instance.followUpQuestion || undefined;
        _instance.value = _instance.value || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.synonyms = _instance.synonyms || []).push(_reader.readString());
                    break;
                case 2:
                    _instance.followUpQuestion = new Question();
                    _reader.readMessage(_instance.followUpQuestion, Question.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.synonyms && _instance.synonyms.length) {
            _writer.writeRepeatedString(1, _instance.synonyms);
        }
        if (_instance.followUpQuestion) {
            _writer.writeMessage(2, _instance.followUpQuestion, Question.serializeBinaryToWriter);
        }
        if (_instance.value) {
            _writer.writeString(3, _instance.value);
        }
    }
    get synonyms() {
        return this._synonyms;
    }
    set synonyms(value) {
        this._synonyms = value;
    }
    get followUpQuestion() {
        return this._followUpQuestion;
    }
    set followUpQuestion(value) {
        this._followUpQuestion = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
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
    toObject() {
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
    options) {
        return {
            synonyms: (this.synonyms || []).slice(),
            followUpQuestion: this.followUpQuestion
                ? this.followUpQuestion.toProtobufJSON(options)
                : null,
            value: this.value
        };
    }
}
Choice.id = 'ondewo.survey.Choice';
/**
 * Message implementation for ondewo.survey.Answer
 */
class Answer {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Answer to deeply clone from
     */
    constructor(_value) {
        this._isAnonymous = Answer.IsAnonymousCase.none;
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
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Answer();
        Answer.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
                    _reader.readMessage(_instance.userInformation, Answer.UserInfo.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
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
            _writer.writeMessage(6, _instance.userInformation, Answer.UserInfo.serializeBinaryToWriter);
        }
    }
    get questionNr() {
        return this._questionNr;
    }
    set questionNr(value) {
        this._questionNr = value;
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get answerText() {
        return this._answerText;
    }
    set answerText(value) {
        this._answerText = value;
    }
    get answerParameter() {
        return this._answerParameter;
    }
    set answerParameter(value) {
        this._answerParameter = value;
    }
    get answerParameterOriginal() {
        return this._answerParameterOriginal;
    }
    set answerParameterOriginal(value) {
        this._answerParameterOriginal = value;
    }
    get anonymous() {
        return this._anonymous;
    }
    set anonymous(value) {
        if (value !== undefined && value !== null) {
            this._userInformation = undefined;
            this._isAnonymous = Answer.IsAnonymousCase.anonymous;
        }
        this._anonymous = value;
    }
    get userInformation() {
        return this._userInformation;
    }
    set userInformation(value) {
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
    toObject() {
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
    options) {
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
Answer.id = 'ondewo.survey.Answer';
(function (Answer) {
    let IsAnonymousCase;
    (function (IsAnonymousCase) {
        IsAnonymousCase[IsAnonymousCase["none"] = 0] = "none";
        IsAnonymousCase[IsAnonymousCase["anonymous"] = 1] = "anonymous";
        IsAnonymousCase[IsAnonymousCase["userInformation"] = 2] = "userInformation";
    })(IsAnonymousCase = Answer.IsAnonymousCase || (Answer.IsAnonymousCase = {}));
    /**
     * Message implementation for ondewo.survey.UserInfo
     */
    class UserInfo {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of UserInfo to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.firstName = _value.firstName;
            this.lastName = _value.lastName;
            this.phoneNumber = _value.phoneNumber;
            this.sessionId = _value.sessionId;
            this.userId = _value.userId;
            UserInfo.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new UserInfo();
            UserInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
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
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
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
        static serializeBinaryToWriter(_instance, _writer) {
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
        get firstName() {
            return this._firstName;
        }
        set firstName(value) {
            this._firstName = value;
        }
        get lastName() {
            return this._lastName;
        }
        set lastName(value) {
            this._lastName = value;
        }
        get phoneNumber() {
            return this._phoneNumber;
        }
        set phoneNumber(value) {
            this._phoneNumber = value;
        }
        get sessionId() {
            return this._sessionId;
        }
        set sessionId(value) {
            this._sessionId = value;
        }
        get userId() {
            return this._userId;
        }
        set userId(value) {
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
        toObject() {
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
        options) {
            return {
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber,
                sessionId: this.sessionId,
                userId: this.userId
            };
        }
    }
    UserInfo.id = 'ondewo.survey.UserInfo';
    Answer.UserInfo = UserInfo;
})(Answer || (Answer = {}));
/**
 * Message implementation for ondewo.survey.CreateSurveyRequest
 */
class CreateSurveyRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateSurveyRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.survey = _value.survey ? new Survey(_value.survey) : undefined;
        CreateSurveyRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateSurveyRequest();
        CreateSurveyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.survey = _instance.survey || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.survey = new Survey();
                    _reader.readMessage(_instance.survey, Survey.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.survey) {
            _writer.writeMessage(1, _instance.survey, Survey.serializeBinaryToWriter);
        }
    }
    get survey() {
        return this._survey;
    }
    set survey(value) {
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
    toObject() {
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
    options) {
        return {
            survey: this.survey ? this.survey.toProtobufJSON(options) : null
        };
    }
}
CreateSurveyRequest.id = 'ondewo.survey.CreateSurveyRequest';
/**
 * Message implementation for ondewo.survey.GetSurveyRequest
 */
class GetSurveyRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSurveyRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.surveyId = _value.surveyId;
        GetSurveyRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetSurveyRequest();
        GetSurveyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.surveyId = _instance.surveyId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.surveyId) {
            _writer.writeString(1, _instance.surveyId);
        }
    }
    get surveyId() {
        return this._surveyId;
    }
    set surveyId(value) {
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
    toObject() {
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
    options) {
        return {
            surveyId: this.surveyId
        };
    }
}
GetSurveyRequest.id = 'ondewo.survey.GetSurveyRequest';
/**
 * Message implementation for ondewo.survey.UpdateSurveyRequest
 */
class UpdateSurveyRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateSurveyRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.survey = _value.survey ? new Survey(_value.survey) : undefined;
        this.updateMask = _value.updateMask
            ? new googleProtobuf006.FieldMask(_value.updateMask)
            : undefined;
        UpdateSurveyRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UpdateSurveyRequest();
        UpdateSurveyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.survey = _instance.survey || undefined;
        _instance.updateMask = _instance.updateMask || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.survey = new Survey();
                    _reader.readMessage(_instance.survey, Survey.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.updateMask = new googleProtobuf006.FieldMask();
                    _reader.readMessage(_instance.updateMask, googleProtobuf006.FieldMask.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.survey) {
            _writer.writeMessage(1, _instance.survey, Survey.serializeBinaryToWriter);
        }
        if (_instance.updateMask) {
            _writer.writeMessage(2, _instance.updateMask, googleProtobuf006.FieldMask.serializeBinaryToWriter);
        }
    }
    get survey() {
        return this._survey;
    }
    set survey(value) {
        this._survey = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
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
    toObject() {
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
    options) {
        return {
            survey: this.survey ? this.survey.toProtobufJSON(options) : null,
            updateMask: this.updateMask
                ? this.updateMask.toProtobufJSON(options)
                : null
        };
    }
}
UpdateSurveyRequest.id = 'ondewo.survey.UpdateSurveyRequest';
/**
 * Message implementation for ondewo.survey.DeleteSurveyRequest
 */
class DeleteSurveyRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteSurveyRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.surveyId = _value.surveyId;
        DeleteSurveyRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeleteSurveyRequest();
        DeleteSurveyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.surveyId = _instance.surveyId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.surveyId) {
            _writer.writeString(1, _instance.surveyId);
        }
    }
    get surveyId() {
        return this._surveyId;
    }
    set surveyId(value) {
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
    toObject() {
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
    options) {
        return {
            surveyId: this.surveyId
        };
    }
}
DeleteSurveyRequest.id = 'ondewo.survey.DeleteSurveyRequest';
/**
 * Message implementation for ondewo.survey.GetSurveyAnswersRequest
 */
class GetSurveyAnswersRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSurveyAnswersRequest to deeply clone from
     */
    constructor(_value) {
        this._identifier = GetSurveyAnswersRequest.IdentifierCase.none;
        _value = _value || {};
        this.surveyId = _value.surveyId;
        this.sessionId = _value.sessionId;
        this.userId = _value.userId;
        this.userPhoneNumber = _value.userPhoneNumber;
        GetSurveyAnswersRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetSurveyAnswersRequest();
        GetSurveyAnswersRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.surveyId = _instance.surveyId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    get surveyId() {
        return this._surveyId;
    }
    set surveyId(value) {
        this._surveyId = value;
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        if (value !== undefined && value !== null) {
            this._userId = this._userPhoneNumber = undefined;
            this._identifier = GetSurveyAnswersRequest.IdentifierCase.sessionId;
        }
        this._sessionId = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        if (value !== undefined && value !== null) {
            this._sessionId = this._userPhoneNumber = undefined;
            this._identifier = GetSurveyAnswersRequest.IdentifierCase.userId;
        }
        this._userId = value;
    }
    get userPhoneNumber() {
        return this._userPhoneNumber;
    }
    set userPhoneNumber(value) {
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
    toObject() {
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
    options) {
        return {
            surveyId: this.surveyId,
            sessionId: this.sessionId === null || this.sessionId === undefined
                ? null
                : this.sessionId,
            userId: this.userId === null || this.userId === undefined ? null : this.userId,
            userPhoneNumber: this.userPhoneNumber === null || this.userPhoneNumber === undefined
                ? null
                : this.userPhoneNumber
        };
    }
}
GetSurveyAnswersRequest.id = 'ondewo.survey.GetSurveyAnswersRequest';
(function (GetSurveyAnswersRequest) {
    let IdentifierCase;
    (function (IdentifierCase) {
        IdentifierCase[IdentifierCase["none"] = 0] = "none";
        IdentifierCase[IdentifierCase["sessionId"] = 1] = "sessionId";
        IdentifierCase[IdentifierCase["userId"] = 2] = "userId";
        IdentifierCase[IdentifierCase["userPhoneNumber"] = 3] = "userPhoneNumber";
    })(IdentifierCase = GetSurveyAnswersRequest.IdentifierCase || (GetSurveyAnswersRequest.IdentifierCase = {}));
})(GetSurveyAnswersRequest || (GetSurveyAnswersRequest = {}));
/**
 * Message implementation for ondewo.survey.GetAllSurveyAnswersRequest
 */
class GetAllSurveyAnswersRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAllSurveyAnswersRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.surveyId = _value.surveyId;
        GetAllSurveyAnswersRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetAllSurveyAnswersRequest();
        GetAllSurveyAnswersRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.surveyId = _instance.surveyId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.surveyId) {
            _writer.writeString(1, _instance.surveyId);
        }
    }
    get surveyId() {
        return this._surveyId;
    }
    set surveyId(value) {
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
    toObject() {
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
    options) {
        return {
            surveyId: this.surveyId
        };
    }
}
GetAllSurveyAnswersRequest.id = 'ondewo.survey.GetAllSurveyAnswersRequest';
/**
 * Message implementation for ondewo.survey.SurveyAnswersResponse
 */
class SurveyAnswersResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SurveyAnswersResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.surveyId = _value.surveyId;
        this.answers = (_value.answers || []).map(m => new Answer(m));
        SurveyAnswersResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SurveyAnswersResponse();
        SurveyAnswersResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.surveyId = _instance.surveyId || '';
        _instance.answers = _instance.answers || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.surveyId = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new Answer();
                    _reader.readMessage(messageInitializer2, Answer.deserializeBinaryFromReader);
                    (_instance.answers = _instance.answers || []).push(messageInitializer2);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.surveyId) {
            _writer.writeString(1, _instance.surveyId);
        }
        if (_instance.answers && _instance.answers.length) {
            _writer.writeRepeatedMessage(2, _instance.answers, Answer.serializeBinaryToWriter);
        }
    }
    get surveyId() {
        return this._surveyId;
    }
    set surveyId(value) {
        this._surveyId = value;
    }
    get answers() {
        return this._answers;
    }
    set answers(value) {
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
    toObject() {
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
    options) {
        return {
            surveyId: this.surveyId,
            answers: (this.answers || []).map(m => m.toProtobufJSON(options))
        };
    }
}
SurveyAnswersResponse.id = 'ondewo.survey.SurveyAnswersResponse';
/**
 * Message implementation for ondewo.survey.ListSurveysRequest
 */
class ListSurveysRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListSurveysRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.pageToken = _value.pageToken;
        ListSurveysRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListSurveysRequest();
        ListSurveysRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.pageToken = _instance.pageToken || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.pageToken) {
            _writer.writeString(1, _instance.pageToken);
        }
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
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
    toObject() {
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
    options) {
        return {
            pageToken: this.pageToken
        };
    }
}
ListSurveysRequest.id = 'ondewo.survey.ListSurveysRequest';
/**
 * Message implementation for ondewo.survey.ListSurveysResponse
 */
class ListSurveysResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListSurveysResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.surveys = (_value.surveys || []).map(m => new Survey(m));
        this.nextPageToken = _value.nextPageToken;
        ListSurveysResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListSurveysResponse();
        ListSurveysResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.surveys = _instance.surveys || [];
        _instance.nextPageToken = _instance.nextPageToken || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Survey();
                    _reader.readMessage(messageInitializer1, Survey.deserializeBinaryFromReader);
                    (_instance.surveys = _instance.surveys || []).push(messageInitializer1);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.surveys && _instance.surveys.length) {
            _writer.writeRepeatedMessage(1, _instance.surveys, Survey.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    get surveys() {
        return this._surveys;
    }
    set surveys(value) {
        this._surveys = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
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
    toObject() {
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
    options) {
        return {
            surveys: (this.surveys || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken
        };
    }
}
ListSurveysResponse.id = 'ondewo.survey.ListSurveysResponse';
/**
 * Message implementation for ondewo.survey.AgentSurveyRequest
 */
class AgentSurveyRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AgentSurveyRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.surveyId = _value.surveyId;
        AgentSurveyRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AgentSurveyRequest();
        AgentSurveyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.surveyId = _instance.surveyId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.surveyId) {
            _writer.writeString(1, _instance.surveyId);
        }
    }
    get surveyId() {
        return this._surveyId;
    }
    set surveyId(value) {
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
    toObject() {
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
    options) {
        return {
            surveyId: this.surveyId
        };
    }
}
AgentSurveyRequest.id = 'ondewo.survey.AgentSurveyRequest';
/**
 * Message implementation for ondewo.survey.AgentSurveyResponse
 */
class AgentSurveyResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AgentSurveyResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        AgentSurveyResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AgentSurveyResponse();
        AgentSurveyResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
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
    toObject() {
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
    options) {
        return {
            parent: this.parent
        };
    }
}
AgentSurveyResponse.id = 'ondewo.survey.AgentSurveyResponse';

/* tslint:disable */
/**
 * Specific GrpcClientSettings for Surveys.
 * Use it only if your default settings are not set or the service requires other settings.
 */
const GRPC_SURVEYS_CLIENT_SETTINGS = new InjectionToken('GRPC_SURVEYS_CLIENT_SETTINGS');

/* tslint:disable */
/**
 * Service client implementation for ondewo.survey.Surveys
 */
class SurveysClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /ondewo.survey.Surveys/CreateSurvey
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.Survey>>
             */
            createSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.Surveys/CreateSurvey',
                    requestData,
                    requestMetadata,
                    requestClass: CreateSurveyRequest,
                    responseClass: Survey
                });
            },
            /**
             * Unary call: /ondewo.survey.Surveys/GetSurvey
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.Survey>>
             */
            getSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.Surveys/GetSurvey',
                    requestData,
                    requestMetadata,
                    requestClass: GetSurveyRequest,
                    responseClass: Survey
                });
            },
            /**
             * Unary call: /ondewo.survey.Surveys/UpdateSurvey
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.Survey>>
             */
            updateSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.Surveys/UpdateSurvey',
                    requestData,
                    requestMetadata,
                    requestClass: UpdateSurveyRequest,
                    responseClass: Survey
                });
            },
            /**
             * Unary call: /ondewo.survey.Surveys/DeleteSurvey
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
             */
            deleteSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.Surveys/DeleteSurvey',
                    requestData,
                    requestMetadata,
                    requestClass: DeleteSurveyRequest,
                    responseClass: googleProtobuf006.Empty
                });
            },
            /**
             * Unary call: /ondewo.survey.Surveys/ListSurveys
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListSurveysResponse>>
             */
            listSurveys: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.Surveys/ListSurveys',
                    requestData,
                    requestMetadata,
                    requestClass: ListSurveysRequest,
                    responseClass: ListSurveysResponse
                });
            },
            /**
             * Unary call: /ondewo.survey.Surveys/GetSurveyAnswers
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>
             */
            getSurveyAnswers: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.Surveys/GetSurveyAnswers',
                    requestData,
                    requestMetadata,
                    requestClass: GetSurveyAnswersRequest,
                    responseClass: SurveyAnswersResponse
                });
            },
            /**
             * Unary call: /ondewo.survey.Surveys/GetAllSurveyAnswers
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>
             */
            getAllSurveyAnswers: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.Surveys/GetAllSurveyAnswers',
                    requestData,
                    requestMetadata,
                    requestClass: GetAllSurveyAnswersRequest,
                    responseClass: SurveyAnswersResponse
                });
            },
            /**
             * Unary call: /ondewo.survey.Surveys/CreateAgentSurvey
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.AgentSurveyResponse>>
             */
            createAgentSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.Surveys/CreateAgentSurvey',
                    requestData,
                    requestMetadata,
                    requestClass: AgentSurveyRequest,
                    responseClass: AgentSurveyResponse
                });
            },
            /**
             * Unary call: /ondewo.survey.Surveys/UpdateAgentSurvey
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.AgentSurveyResponse>>
             */
            updateAgentSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.Surveys/UpdateAgentSurvey',
                    requestData,
                    requestMetadata,
                    requestClass: AgentSurveyRequest,
                    responseClass: AgentSurveyResponse
                });
            },
            /**
             * Unary call: /ondewo.survey.Surveys/DeleteAgentSurvey
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
             */
            deleteAgentSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.Surveys/DeleteAgentSurvey',
                    requestData,
                    requestMetadata,
                    requestClass: AgentSurveyRequest,
                    responseClass: googleProtobuf006.Empty
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.survey.Surveys', settings);
    }
    /**
     * Unary call @/ondewo.survey.Surveys/CreateSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Survey>
     */
    createSurvey(requestData, requestMetadata = new GrpcMetadata()) {
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
    getSurvey(requestData, requestMetadata = new GrpcMetadata()) {
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
    updateSurvey(requestData, requestMetadata = new GrpcMetadata()) {
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
    deleteSurvey(requestData, requestMetadata = new GrpcMetadata()) {
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
    listSurveys(requestData, requestMetadata = new GrpcMetadata()) {
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
    getSurveyAnswers(requestData, requestMetadata = new GrpcMetadata()) {
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
    getAllSurveyAnswers(requestData, requestMetadata = new GrpcMetadata()) {
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
    createAgentSurvey(requestData, requestMetadata = new GrpcMetadata()) {
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
    updateAgentSurvey(requestData, requestMetadata = new GrpcMetadata()) {
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
    deleteAgentSurvey(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteAgentSurvey(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
SurveysClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: SurveysClient, deps: [{ token: GRPC_SURVEYS_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
SurveysClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: SurveysClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: SurveysClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_SURVEYS_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });

/**
 * Message implementation for ondewo.survey.CreateFHIRSurveyRequest
 */
class CreateFHIRSurveyRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateFHIRSurveyRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.fhirQuestionnaire = _value.fhirQuestionnaire
            ? new googleProtobuf006.Struct(_value.fhirQuestionnaire)
            : undefined;
        CreateFHIRSurveyRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateFHIRSurveyRequest();
        CreateFHIRSurveyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.fhirQuestionnaire = _instance.fhirQuestionnaire || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.fhirQuestionnaire = new googleProtobuf006.Struct();
                    _reader.readMessage(_instance.fhirQuestionnaire, googleProtobuf006.Struct.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.fhirQuestionnaire) {
            _writer.writeMessage(1, _instance.fhirQuestionnaire, googleProtobuf006.Struct.serializeBinaryToWriter);
        }
    }
    get fhirQuestionnaire() {
        return this._fhirQuestionnaire;
    }
    set fhirQuestionnaire(value) {
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
    toObject() {
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
    options) {
        return {
            fhirQuestionnaire: this.fhirQuestionnaire
                ? this.fhirQuestionnaire.toProtobufJSON(options)
                : null
        };
    }
}
CreateFHIRSurveyRequest.id = 'ondewo.survey.CreateFHIRSurveyRequest';
/**
 * Message implementation for ondewo.survey.SurveyFHIRAnswersResponse
 */
class SurveyFHIRAnswersResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SurveyFHIRAnswersResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.surveyId = _value.surveyId;
        this.fhirQuestionnaireResponses = (_value.fhirQuestionnaireResponses || []).map(m => new googleProtobuf006.Struct(m));
        SurveyFHIRAnswersResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SurveyFHIRAnswersResponse();
        SurveyFHIRAnswersResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.surveyId = _instance.surveyId || '';
        _instance.fhirQuestionnaireResponses =
            _instance.fhirQuestionnaireResponses || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.surveyId = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new googleProtobuf006.Struct();
                    _reader.readMessage(messageInitializer2, googleProtobuf006.Struct.deserializeBinaryFromReader);
                    (_instance.fhirQuestionnaireResponses =
                        _instance.fhirQuestionnaireResponses || []).push(messageInitializer2);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.surveyId) {
            _writer.writeString(1, _instance.surveyId);
        }
        if (_instance.fhirQuestionnaireResponses &&
            _instance.fhirQuestionnaireResponses.length) {
            _writer.writeRepeatedMessage(2, _instance.fhirQuestionnaireResponses, googleProtobuf006.Struct.serializeBinaryToWriter);
        }
    }
    get surveyId() {
        return this._surveyId;
    }
    set surveyId(value) {
        this._surveyId = value;
    }
    get fhirQuestionnaireResponses() {
        return this._fhirQuestionnaireResponses;
    }
    set fhirQuestionnaireResponses(value) {
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
    toObject() {
        return {
            surveyId: this.surveyId,
            fhirQuestionnaireResponses: (this.fhirQuestionnaireResponses || []).map(m => m.toObject())
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
    options) {
        return {
            surveyId: this.surveyId,
            fhirQuestionnaireResponses: (this.fhirQuestionnaireResponses || []).map(m => m.toProtobufJSON(options))
        };
    }
}
SurveyFHIRAnswersResponse.id = 'ondewo.survey.SurveyFHIRAnswersResponse';

/* tslint:disable */
/**
 * Specific GrpcClientSettings for Fhir.
 * Use it only if your default settings are not set or the service requires other settings.
 */
const GRPC_FHIR_CLIENT_SETTINGS = new InjectionToken('GRPC_FHIR_CLIENT_SETTINGS');

/* tslint:disable */
/**
 * Service client implementation for ondewo.survey.FHIR
 */
class FHIRClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /ondewo.survey.FHIR/CreateFHIRSurvey
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<ondewoSurvey005.Survey>>
             */
            createFHIRSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.FHIR/CreateFHIRSurvey',
                    requestData,
                    requestMetadata,
                    requestClass: CreateFHIRSurveyRequest,
                    responseClass: Survey
                });
            },
            /**
             * Unary call: /ondewo.survey.FHIR/GetFHIRSurveyAnswers
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>>
             */
            getFHIRSurveyAnswers: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.FHIR/GetFHIRSurveyAnswers',
                    requestData,
                    requestMetadata,
                    requestClass: GetSurveyAnswersRequest,
                    responseClass: SurveyFHIRAnswersResponse
                });
            },
            /**
             * Unary call: /ondewo.survey.FHIR/GetAllFHIRSurveyAnswers
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SurveyFHIRAnswersResponse>>
             */
            getAllFHIRSurveyAnswers: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.survey.FHIR/GetAllFHIRSurveyAnswers',
                    requestData,
                    requestMetadata,
                    requestClass: GetAllSurveyAnswersRequest,
                    responseClass: SurveyFHIRAnswersResponse
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.survey.FHIR', settings);
    }
    /**
     * Unary call @/ondewo.survey.FHIR/CreateFHIRSurvey
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoSurvey005.Survey>
     */
    createFHIRSurvey(requestData, requestMetadata = new GrpcMetadata()) {
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
    getFHIRSurveyAnswers(requestData, requestMetadata = new GrpcMetadata()) {
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
    getAllFHIRSurveyAnswers(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getAllFHIRSurveyAnswers(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
FHIRClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: FHIRClient, deps: [{ token: GRPC_FHIR_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
FHIRClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: FHIRClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: FHIRClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_FHIR_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });

/**
 * Message implementation for google.api.Http
 */
class Http {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Http to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.rules = (_value.rules || []).map(m => new HttpRule(m));
        this.fullyDecodeReservedExpansion = _value.fullyDecodeReservedExpansion;
        Http.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Http();
        Http.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.rules = _instance.rules || [];
        _instance.fullyDecodeReservedExpansion =
            _instance.fullyDecodeReservedExpansion || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new HttpRule();
                    _reader.readMessage(messageInitializer1, HttpRule.deserializeBinaryFromReader);
                    (_instance.rules = _instance.rules || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.fullyDecodeReservedExpansion = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Http.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.rules && _instance.rules.length) {
            _writer.writeRepeatedMessage(1, _instance.rules, HttpRule.serializeBinaryToWriter);
        }
        if (_instance.fullyDecodeReservedExpansion) {
            _writer.writeBool(2, _instance.fullyDecodeReservedExpansion);
        }
    }
    get rules() {
        return this._rules;
    }
    set rules(value) {
        this._rules = value;
    }
    get fullyDecodeReservedExpansion() {
        return this._fullyDecodeReservedExpansion;
    }
    set fullyDecodeReservedExpansion(value) {
        this._fullyDecodeReservedExpansion = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Http.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            rules: (this.rules || []).map(m => m.toObject()),
            fullyDecodeReservedExpansion: this.fullyDecodeReservedExpansion
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
    options) {
        return {
            rules: (this.rules || []).map(m => m.toProtobufJSON(options)),
            fullyDecodeReservedExpansion: this.fullyDecodeReservedExpansion
        };
    }
}
Http.id = 'google.api.Http';
/**
 * Message implementation for google.api.HttpRule
 */
class HttpRule {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of HttpRule to deeply clone from
     */
    constructor(_value) {
        this._pattern = HttpRule.PatternCase.none;
        _value = _value || {};
        this.selector = _value.selector;
        this.get = _value.get;
        this.put = _value.put;
        this.post = _value.post;
        this.delete = _value.delete;
        this.patch = _value.patch;
        this.custom = _value.custom
            ? new CustomHttpPattern(_value.custom)
            : undefined;
        this.body = _value.body;
        this.responseBody = _value.responseBody;
        this.additionalBindings = (_value.additionalBindings || []).map(m => new HttpRule(m));
        HttpRule.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new HttpRule();
        HttpRule.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.selector = _instance.selector || '';
        _instance.body = _instance.body || '';
        _instance.responseBody = _instance.responseBody || '';
        _instance.additionalBindings = _instance.additionalBindings || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.selector = _reader.readString();
                    break;
                case 2:
                    _instance.get = _reader.readString();
                    break;
                case 3:
                    _instance.put = _reader.readString();
                    break;
                case 4:
                    _instance.post = _reader.readString();
                    break;
                case 5:
                    _instance.delete = _reader.readString();
                    break;
                case 6:
                    _instance.patch = _reader.readString();
                    break;
                case 8:
                    _instance.custom = new CustomHttpPattern();
                    _reader.readMessage(_instance.custom, CustomHttpPattern.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.body = _reader.readString();
                    break;
                case 12:
                    _instance.responseBody = _reader.readString();
                    break;
                case 11:
                    const messageInitializer11 = new HttpRule();
                    _reader.readMessage(messageInitializer11, HttpRule.deserializeBinaryFromReader);
                    (_instance.additionalBindings =
                        _instance.additionalBindings || []).push(messageInitializer11);
                    break;
                default:
                    _reader.skipField();
            }
        }
        HttpRule.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.selector) {
            _writer.writeString(1, _instance.selector);
        }
        if (_instance.get || _instance.get === '') {
            _writer.writeString(2, _instance.get);
        }
        if (_instance.put || _instance.put === '') {
            _writer.writeString(3, _instance.put);
        }
        if (_instance.post || _instance.post === '') {
            _writer.writeString(4, _instance.post);
        }
        if (_instance.delete || _instance.delete === '') {
            _writer.writeString(5, _instance.delete);
        }
        if (_instance.patch || _instance.patch === '') {
            _writer.writeString(6, _instance.patch);
        }
        if (_instance.custom) {
            _writer.writeMessage(8, _instance.custom, CustomHttpPattern.serializeBinaryToWriter);
        }
        if (_instance.body) {
            _writer.writeString(7, _instance.body);
        }
        if (_instance.responseBody) {
            _writer.writeString(12, _instance.responseBody);
        }
        if (_instance.additionalBindings && _instance.additionalBindings.length) {
            _writer.writeRepeatedMessage(11, _instance.additionalBindings, HttpRule.serializeBinaryToWriter);
        }
    }
    get selector() {
        return this._selector;
    }
    set selector(value) {
        this._selector = value;
    }
    get get() {
        return this._get;
    }
    set get(value) {
        if (value !== undefined && value !== null) {
            this._put = this._post = this._delete = this._patch = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.get;
        }
        this._get = value;
    }
    get put() {
        return this._put;
    }
    set put(value) {
        if (value !== undefined && value !== null) {
            this._get = this._post = this._delete = this._patch = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.put;
        }
        this._put = value;
    }
    get post() {
        return this._post;
    }
    set post(value) {
        if (value !== undefined && value !== null) {
            this._get = this._put = this._delete = this._patch = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.post;
        }
        this._post = value;
    }
    get delete() {
        return this._delete;
    }
    set delete(value) {
        if (value !== undefined && value !== null) {
            this._get = this._put = this._post = this._patch = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.delete;
        }
        this._delete = value;
    }
    get patch() {
        return this._patch;
    }
    set patch(value) {
        if (value !== undefined && value !== null) {
            this._get = this._put = this._post = this._delete = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.patch;
        }
        this._patch = value;
    }
    get custom() {
        return this._custom;
    }
    set custom(value) {
        if (value !== undefined && value !== null) {
            this._get = this._put = this._post = this._delete = this._patch = undefined;
            this._pattern = HttpRule.PatternCase.custom;
        }
        this._custom = value;
    }
    get body() {
        return this._body;
    }
    set body(value) {
        this._body = value;
    }
    get responseBody() {
        return this._responseBody;
    }
    set responseBody(value) {
        this._responseBody = value;
    }
    get additionalBindings() {
        return this._additionalBindings;
    }
    set additionalBindings(value) {
        this._additionalBindings = value;
    }
    get pattern() {
        return this._pattern;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        HttpRule.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            selector: this.selector,
            get: this.get,
            put: this.put,
            post: this.post,
            delete: this.delete,
            patch: this.patch,
            custom: this.custom ? this.custom.toObject() : undefined,
            body: this.body,
            responseBody: this.responseBody,
            additionalBindings: (this.additionalBindings || []).map(m => m.toObject())
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
    options) {
        return {
            selector: this.selector,
            get: this.get === null || this.get === undefined ? null : this.get,
            put: this.put === null || this.put === undefined ? null : this.put,
            post: this.post === null || this.post === undefined ? null : this.post,
            delete: this.delete === null || this.delete === undefined ? null : this.delete,
            patch: this.patch === null || this.patch === undefined ? null : this.patch,
            custom: this.custom ? this.custom.toProtobufJSON(options) : null,
            body: this.body,
            responseBody: this.responseBody,
            additionalBindings: (this.additionalBindings || []).map(m => m.toProtobufJSON(options))
        };
    }
}
HttpRule.id = 'google.api.HttpRule';
(function (HttpRule) {
    let PatternCase;
    (function (PatternCase) {
        PatternCase[PatternCase["none"] = 0] = "none";
        PatternCase[PatternCase["get"] = 1] = "get";
        PatternCase[PatternCase["put"] = 2] = "put";
        PatternCase[PatternCase["post"] = 3] = "post";
        PatternCase[PatternCase["delete"] = 4] = "delete";
        PatternCase[PatternCase["patch"] = 5] = "patch";
        PatternCase[PatternCase["custom"] = 6] = "custom";
    })(PatternCase = HttpRule.PatternCase || (HttpRule.PatternCase = {}));
})(HttpRule || (HttpRule = {}));
/**
 * Message implementation for google.api.CustomHttpPattern
 */
class CustomHttpPattern {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CustomHttpPattern to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.kind = _value.kind;
        this.path = _value.path;
        CustomHttpPattern.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CustomHttpPattern();
        CustomHttpPattern.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.kind = _instance.kind || '';
        _instance.path = _instance.path || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.kind = _reader.readString();
                    break;
                case 2:
                    _instance.path = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CustomHttpPattern.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.kind) {
            _writer.writeString(1, _instance.kind);
        }
        if (_instance.path) {
            _writer.writeString(2, _instance.path);
        }
    }
    get kind() {
        return this._kind;
    }
    set kind(value) {
        this._kind = value;
    }
    get path() {
        return this._path;
    }
    set path(value) {
        this._path = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CustomHttpPattern.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            kind: this.kind,
            path: this.path
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
    options) {
        return {
            kind: this.kind,
            path: this.path
        };
    }
}
CustomHttpPattern.id = 'google.api.CustomHttpPattern';

/**
 * Generated bundle index. Do not edit.
 */

export { AgentSurveyRequest, AgentSurveyResponse, Answer, Choice, CreateFHIRSurveyRequest, CreateSurveyRequest, CustomHttpPattern, DeleteSurveyRequest, FHIRClient, GRPC_FHIR_CLIENT_SETTINGS, GRPC_SURVEYS_CLIENT_SETTINGS, GetAllSurveyAnswersRequest, GetSurveyAnswersRequest, GetSurveyRequest, Http, HttpRule, ListSurveysRequest, ListSurveysResponse, MultipleChoiceQuestion, MultipleParameterQuestion, OpenQuestion, Question, ScaleQuestion, SingleChoiceQuestion, SingleParameterQuestion, SubFlow, Survey, SurveyAnswersResponse, SurveyFHIRAnswersResponse, SurveyInfo, SurveysClient, UpdateSurveyRequest };
//# sourceMappingURL=ondewo-survey-client-angular.mjs.map
