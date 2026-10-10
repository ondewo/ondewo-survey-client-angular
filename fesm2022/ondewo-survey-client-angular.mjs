import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as i0 from '@angular/core';
import { InjectionToken, Optional, Inject, Injectable, inject, makeEnvironmentProviders } from '@angular/core';
import { GrpcMetadata, GrpcCallType } from '@ngx-grpc/common';
import * as i1 from '@ngx-grpc/core';
import { throwStatusErrors, takeMessages, GRPC_CLIENT_FACTORY, GRPC_INTERCEPTORS } from '@ngx-grpc/core';
import { firstValueFrom, isObservable, from, Observable, of, switchMap } from 'rxjs';
import * as i1$1 from '@angular/common/http';

/**
 * Message implementation for google.api.Http
 */
class Http {
    static { this.id = 'google.api.Http'; }
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
/**
 * Message implementation for google.api.HttpRule
 */
class HttpRule {
    static { this.id = 'google.api.HttpRule'; }
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
    static { this.id = 'google.api.CustomHttpPattern'; }
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

/**
 * Message implementation for ondewo.survey.CreateFHIRSurveyRequest
 */
class CreateFHIRSurveyRequest {
    static { this.id = 'ondewo.survey.CreateFHIRSurveyRequest'; }
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
/**
 * Message implementation for ondewo.survey.SurveyFHIRAnswersResponse
 */
class SurveyFHIRAnswersResponse {
    static { this.id = 'ondewo.survey.SurveyFHIRAnswersResponse'; }
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

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
/**
 * Specific GrpcClientSettings for Fhir.
 * Use it only if your default settings are not set or the service requires other settings.
 */
const GRPC_FHIR_CLIENT_SETTINGS = new InjectionToken('GRPC_FHIR_CLIENT_SETTINGS');

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
    static { this.id = 'ondewo.survey.Survey'; }
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
                    _reader.readPackableEnumInto((_instance.excludeSubflows = _instance.excludeSubflows || []));
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
    static { this.id = 'ondewo.survey.SurveyInfo'; }
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
/**
 * Message implementation for ondewo.survey.Question
 */
class Question {
    static { this.id = 'ondewo.survey.Question'; }
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
    static { this.id = 'ondewo.survey.OpenQuestion'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of OpenQuestion to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.questionText = _value.questionText;
        OpenQuestion.refineValues(this);
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
/**
 * Message implementation for ondewo.survey.SingleChoiceQuestion
 */
class SingleChoiceQuestion {
    static { this.id = 'ondewo.survey.SingleChoiceQuestion'; }
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
/**
 * Message implementation for ondewo.survey.MultipleChoiceQuestion
 */
class MultipleChoiceQuestion {
    static { this.id = 'ondewo.survey.MultipleChoiceQuestion'; }
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
/**
 * Message implementation for ondewo.survey.ScaleQuestion
 */
class ScaleQuestion {
    static { this.id = 'ondewo.survey.ScaleQuestion'; }
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
(function (ScaleQuestion) {
    /**
     * Message implementation for ondewo.survey.ScaleQuestion.ScaleValue
     */
    class ScaleValue {
        static { this.id = 'ondewo.survey.ScaleQuestion.ScaleValue'; }
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
    ScaleQuestion.ScaleValue = ScaleValue;
})(ScaleQuestion || (ScaleQuestion = {}));
/**
 * Message implementation for ondewo.survey.SingleParameterQuestion
 */
class SingleParameterQuestion {
    static { this.id = 'ondewo.survey.SingleParameterQuestion'; }
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
/**
 * Message implementation for ondewo.survey.MultipleParameterQuestion
 */
class MultipleParameterQuestion {
    static { this.id = 'ondewo.survey.MultipleParameterQuestion'; }
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
/**
 * Message implementation for ondewo.survey.Choice
 */
class Choice {
    static { this.id = 'ondewo.survey.Choice'; }
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
/**
 * Message implementation for ondewo.survey.Answer
 */
class Answer {
    static { this.id = 'ondewo.survey.Answer'; }
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
(function (Answer) {
    let IsAnonymousCase;
    (function (IsAnonymousCase) {
        IsAnonymousCase[IsAnonymousCase["none"] = 0] = "none";
        IsAnonymousCase[IsAnonymousCase["anonymous"] = 1] = "anonymous";
        IsAnonymousCase[IsAnonymousCase["userInformation"] = 2] = "userInformation";
    })(IsAnonymousCase = Answer.IsAnonymousCase || (Answer.IsAnonymousCase = {}));
    /**
     * Message implementation for ondewo.survey.Answer.UserInfo
     */
    class UserInfo {
        static { this.id = 'ondewo.survey.Answer.UserInfo'; }
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
    Answer.UserInfo = UserInfo;
})(Answer || (Answer = {}));
/**
 * Message implementation for ondewo.survey.CreateSurveyRequest
 */
class CreateSurveyRequest {
    static { this.id = 'ondewo.survey.CreateSurveyRequest'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateSurveyRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.survey = _value.survey ? new Survey(_value.survey) : undefined;
        CreateSurveyRequest.refineValues(this);
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
/**
 * Message implementation for ondewo.survey.GetSurveyRequest
 */
class GetSurveyRequest {
    static { this.id = 'ondewo.survey.GetSurveyRequest'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSurveyRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.surveyId = _value.surveyId;
        GetSurveyRequest.refineValues(this);
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
/**
 * Message implementation for ondewo.survey.UpdateSurveyRequest
 */
class UpdateSurveyRequest {
    static { this.id = 'ondewo.survey.UpdateSurveyRequest'; }
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
/**
 * Message implementation for ondewo.survey.DeleteSurveyRequest
 */
class DeleteSurveyRequest {
    static { this.id = 'ondewo.survey.DeleteSurveyRequest'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteSurveyRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.surveyId = _value.surveyId;
        DeleteSurveyRequest.refineValues(this);
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
/**
 * Message implementation for ondewo.survey.GetSurveyAnswersRequest
 */
class GetSurveyAnswersRequest {
    static { this.id = 'ondewo.survey.GetSurveyAnswersRequest'; }
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
    static { this.id = 'ondewo.survey.GetAllSurveyAnswersRequest'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAllSurveyAnswersRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.surveyId = _value.surveyId;
        GetAllSurveyAnswersRequest.refineValues(this);
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
/**
 * Message implementation for ondewo.survey.SurveyAnswersResponse
 */
class SurveyAnswersResponse {
    static { this.id = 'ondewo.survey.SurveyAnswersResponse'; }
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
/**
 * Message implementation for ondewo.survey.ListSurveysRequest
 */
class ListSurveysRequest {
    static { this.id = 'ondewo.survey.ListSurveysRequest'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListSurveysRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.pageToken = _value.pageToken;
        ListSurveysRequest.refineValues(this);
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
/**
 * Message implementation for ondewo.survey.ListSurveysResponse
 */
class ListSurveysResponse {
    static { this.id = 'ondewo.survey.ListSurveysResponse'; }
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
/**
 * Message implementation for ondewo.survey.AgentSurveyRequest
 */
class AgentSurveyRequest {
    static { this.id = 'ondewo.survey.AgentSurveyRequest'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AgentSurveyRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.surveyId = _value.surveyId;
        AgentSurveyRequest.refineValues(this);
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
/**
 * Message implementation for ondewo.survey.AgentSurveyResponse
 */
class AgentSurveyResponse {
    static { this.id = 'ondewo.survey.AgentSurveyResponse'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AgentSurveyResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        AgentSurveyResponse.refineValues(this);
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

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.33", ngImport: i0, type: FHIRClient, deps: [{ token: GRPC_FHIR_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.33", ngImport: i0, type: FHIRClient, providedIn: 'any' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.33", ngImport: i0, type: FHIRClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_FHIR_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }] });

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
/**
 * Specific GrpcClientSettings for Surveys.
 * Use it only if your default settings are not set or the service requires other settings.
 */
const GRPC_SURVEYS_CLIENT_SETTINGS = new InjectionToken('GRPC_SURVEYS_CLIENT_SETTINGS');

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.33", ngImport: i0, type: SurveysClient, deps: [{ token: GRPC_SURVEYS_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.33", ngImport: i0, type: SurveysClient, providedIn: 'any' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.33", ngImport: i0, type: SurveysClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_SURVEYS_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }] });

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
const TOKEN_PROVIDER = new InjectionToken("ONDEWO_SURVEY_TOKEN_PROVIDER");

/**
 * Seconds of head-room subtracted from a token's `expires_in` so the background
 * refresh fires *before* the access token actually lapses (covers clock skew and
 * the round-trip to Keycloak). Mirrors the nodejs SDK's `REFRESH_SKEW_IN_S` and the
 * python SDK's `_EXPIRY_LEEWAY_S`.
 */
const REFRESH_SKEW_IN_S = 30;
/**
 * Lower bound (in seconds) for the scheduled refresh delay so a tiny / zero
 * `expires_in` cannot spin a hot refresh loop.
 */
const MIN_REFRESH_DELAY_IN_S = 1;
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
const KEYCLOAK_TOKEN_PROVIDER_CONFIG = new InjectionToken("ONDEWO_SURVEY_KEYCLOAK_TOKEN_PROVIDER_CONFIG");
/** Raised on any token-endpoint failure or unusable token response. */
class KeycloakTokenError extends Error {
    /**
     * @param message a human-readable description of the token failure.
     */
    constructor(message) {
        super(message);
        this.name = "KeycloakTokenError";
    }
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
class KeycloakTokenProvider {
    /**
     * Construct the provider and start the one-time login + background refresh loop.
     *
     * @param http the Angular {@link HttpClient} used for the token-endpoint calls.
     * @param config the {@link KeycloakTokenProviderConfig}, injected under
     *   {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}.
     * @throws KeycloakTokenError synchronously when no config is provided or the
     *   credential fields are missing / inconsistent.
     */
    constructor(http, config) {
        this.http = http;
        /** The current access token, or `null` before the first login completes. */
        this.accessToken = null;
        /** The current (rotating) offline refresh token, or `null` before login. */
        this.refreshToken = null;
        /** Handle of the armed refresh timer, or `null` when none is scheduled. */
        this.timer = null;
        /** Whether {@link ngOnDestroy} ran; suppresses any further (re-)scheduling. */
        this.destroyed = false;
        if (config === null) {
            throw new KeycloakTokenError("KeycloakTokenProvider requires a KeycloakTokenProviderConfig provided under KEYCLOAK_TOKEN_PROVIDER_CONFIG");
        }
        this.clientId = config.clientId;
        // Stored for cross-SDK config parity; a no-op on the browser transport (see field doc).
        this.verifySsl = config.keycloakVerifySsl ?? true;
        this.loginParams = KeycloakTokenProvider.buildLoginParams(config);
        this.tokenEndpoint = KeycloakTokenProvider.buildTokenEndpoint(config.keycloakUrl, config.realm);
        this.ready = this.login();
    }
    /**
     * Return the current access token.
     *
     * @returns the current valid access token, or `null` before the first login
     *   completes (the interceptors then forward the request unchanged).
     */
    getToken() {
        return this.accessToken;
    }
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
    get keycloakVerifySsl() {
        return this.verifySsl;
    }
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
    whenReady() {
        return this.ready;
    }
    /** Stop the background refresh loop. Idempotent; safe to call from any state. */
    ngOnDestroy() {
        this.destroyed = true;
        if (this.timer !== null) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
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
    static buildLoginParams(config) {
        for (const key of ["keycloakUrl", "realm", "clientId"]) {
            const value = config[key];
            if (typeof value !== "string" || value.trim().length === 0) {
                throw new KeycloakTokenError(`KeycloakTokenProviderConfig.${key} is required and must be a non-empty string`);
            }
        }
        if (typeof config.offlineToken === "string" && config.offlineToken.length > 0) {
            return { grant_type: "refresh_token", client_id: config.clientId, refresh_token: config.offlineToken };
        }
        const username = config.username;
        const password = config.password;
        if (typeof username !== "string" || username.length === 0 || typeof password !== "string" || password.length === 0) {
            throw new KeycloakTokenError("KeycloakTokenProviderConfig must supply either an offlineToken or a username + password pair");
        }
        return { grant_type: "password", client_id: config.clientId, username, password, scope: "offline_access" };
    }
    /**
     * Perform the one-time login (using the pre-built {@link loginParams}) and arm the
     * first refresh.
     *
     * @returns a promise that resolves once the first token is stored and the refresh
     *   is armed.
     * @throws KeycloakTokenError when the token endpoint fails or the response carries
     *   no usable `access_token`.
     */
    async login() {
        const response = await this.postTokenRequest(this.loginParams);
        this.store(response);
        this.scheduleRefresh(response.expires_in);
    }
    /**
     * Exchange the current refresh token for a fresh access token and re-arm the
     * next refresh. No-ops once {@link ngOnDestroy} has run.
     *
     * @returns a promise that resolves once the token is refreshed and the next
     *   refresh is armed.
     * @throws KeycloakTokenError when there is no refresh token or the endpoint call
     *   returns an unusable body.
     */
    async refresh() {
        if (this.destroyed) {
            return;
        }
        if (this.refreshToken === null) {
            throw new KeycloakTokenError("Cannot refresh: no refresh_token was issued by Keycloak");
        }
        const response = await this.postTokenRequest({
            grant_type: "refresh_token",
            client_id: this.clientId,
            refresh_token: this.refreshToken
        });
        this.store(response);
        this.scheduleRefresh(response.expires_in);
    }
    /**
     * Store the access token and (rotated) refresh token from a token response.
     *
     * Keycloak may omit the refresh token on a refresh; the previous one is kept in
     * that case so a same-token refresh does not blank out the offline token.
     *
     * @param response the parsed token-endpoint response.
     * @throws KeycloakTokenError when the response carries no `access_token`.
     */
    store(response) {
        if (typeof response.access_token !== "string" || response.access_token.length === 0) {
            throw new KeycloakTokenError("Keycloak token response did not contain an access_token");
        }
        this.accessToken = response.access_token;
        if (typeof response.refresh_token === "string" && response.refresh_token.length > 0) {
            this.refreshToken = response.refresh_token;
        }
    }
    /**
     * Arm a single timer for the next refresh.
     *
     * The delay is `expires_in` minus {@link REFRESH_SKEW_IN_S}, floored at
     * {@link MIN_REFRESH_DELAY_IN_S}; a missing / non-positive `expires_in` falls
     * back to {@link MIN_REFRESH_DELAY_IN_S}.
     *
     * @param expiresInRaw the `expires_in` (seconds) from the latest token response.
     */
    scheduleRefresh(expiresInRaw) {
        if (this.destroyed) {
            return;
        }
        const expiresInS = typeof expiresInRaw === "number" && expiresInRaw > 0 ? expiresInRaw : MIN_REFRESH_DELAY_IN_S;
        const delayInS = Math.max(expiresInS - REFRESH_SKEW_IN_S, MIN_REFRESH_DELAY_IN_S);
        this.timer = setTimeout(() => {
            void this.refresh().catch(() => {
                // Swallow a transient background-refresh failure: the next interceptor read
                // gets the stale (possibly expired) token and the server replies
                // UNAUTHENTICATED, prompting the consumer to re-login.
            });
        }, delayInS * 1000);
    }
    /**
     * POST a form-encoded body to the token endpoint and return the parsed JSON.
     *
     * @param params the form fields (grant type, client id, credentials).
     * @returns the parsed {@link KeycloakTokenResponse}.
     * @throws KeycloakTokenError when the request fails (the {@link HttpClient}
     *   error is wrapped).
     */
    async postTokenRequest(params) {
        const body = new URLSearchParams(params).toString();
        try {
            return await firstValueFrom(this.http.post(this.tokenEndpoint, body, {
                headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" }
            }));
        }
        catch (error) {
            throw new KeycloakTokenError(`Keycloak token endpoint request failed: ${KeycloakTokenProvider.describe(error)}`);
        }
    }
    /**
     * Build the realm's OIDC token endpoint URL, tolerating a trailing slash on the
     * base URL.
     *
     * @param keycloakUrl the base Keycloak URL (trailing slashes are stripped).
     * @param realm the realm name; URL-encoded into the path.
     * @returns the fully-qualified `.../protocol/openid-connect/token` URL.
     */
    static buildTokenEndpoint(keycloakUrl, realm) {
        const base = keycloakUrl.replace(/\/+$/, "");
        return `${base}/realms/${encodeURIComponent(realm)}/protocol/openid-connect/token`;
    }
    /**
     * Render an unknown caught value as a short string for error messages.
     *
     * @param error the caught value.
     * @returns the `message` of an `Error`, the value itself when it is already a
     *   string, otherwise a JSON rendering (falling back to a fixed label for
     *   values that cannot be stringified).
     */
    static describe(error) {
        if (error instanceof Error) {
            return error.message;
        }
        if (typeof error === "string") {
            return error;
        }
        try {
            return JSON.stringify(error);
        }
        catch {
            return "unstringifiable error";
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.33", ngImport: i0, type: KeycloakTokenProvider, deps: [{ token: i1$1.HttpClient }, { token: KEYCLOAK_TOKEN_PROVIDER_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.33", ngImport: i0, type: KeycloakTokenProvider }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.33", ngImport: i0, type: KeycloakTokenProvider, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.HttpClient }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [KEYCLOAK_TOKEN_PROVIDER_CONFIG]
                }] }] });

/**
 * The HTTP / gRPC header under which the bearer credential is attached.
 *
 * Canonical `Authorization` casing: gRPC-web metadata keys and Angular
 * `HttpHeaders` are case-insensitive, so the capitalized form is safe on the
 * wire and matches the platform-wide convention.
 */
const AUTHORIZATION_HEADER = "Authorization";
/** The credential scheme prefix prepended to the raw access token. */
const BEARER_PREFIX = "Bearer ";
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
function resolveToken(result) {
    const source = isObservable(result)
        ? result
        : from(Promise.resolve(result));
    return new Observable((subscriber) => {
        const subscription = source.subscribe({
            next: (token) => subscriber.next(normalizeToken(token)),
            error: (caughtError) => subscriber.error(caughtError),
            complete: () => subscriber.complete()
        });
        return () => subscription.unsubscribe();
    });
}
/**
 * Build the `Authorization` header value for a resolved token, or `null` when
 * the token is absent.
 *
 * @param token a usable token, or `null`.
 * @returns the `"Bearer <token>"` string, or `null` when there is no token.
 */
function buildBearerValue(token) {
    return token === null ? null : `${BEARER_PREFIX}${token}`;
}
/**
 * Convenience wrapper: emit the ready-to-use `Authorization` header value, or
 * `null` when no token is available.
 *
 * @param result the raw value returned by `TokenProvider.getToken()`.
 * @returns an observable emitting the bearer header value, or `null`.
 */
function resolveBearerValue(result) {
    return new Observable((subscriber) => {
        const subscription = resolveToken(result).subscribe({
            next: (token) => subscriber.next(buildBearerValue(token)),
            error: (caughtError) => subscriber.error(caughtError),
            complete: () => subscriber.complete()
        });
        return () => subscription.unsubscribe();
    });
}
/**
 * Collapse every "no usable token" value to `null` and trim a real token.
 *
 * @param token the raw token emitted by the source.
 * @returns the trimmed token, or `null` when empty / whitespace-only / absent.
 */
function normalizeToken(token) {
    if (token === null || token === undefined) {
        return null;
    }
    const trimmed = token.trim();
    return trimmed.length === 0 ? null : trimmed;
}
/**
 * Wrap a synchronous value as a single-emission observable. Used by callers that
 * want to stay in the observable world without importing `rxjs` `of` directly.
 *
 * @param value the value to emit.
 * @returns an observable emitting `value` once and completing.
 */
function once(value) {
    return of(value);
}

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
function authHttpInterceptor(req, next) {
    if (req.headers.has(AUTHORIZATION_HEADER)) {
        return next(req);
    }
    const tokenProvider = inject(TOKEN_PROVIDER);
    return resolveBearerValue(tokenProvider.getToken()).pipe(switchMap((bearerValue) => {
        if (bearerValue === null) {
            return next(req);
        }
        const authorizedRequest = req.clone({
            setHeaders: { [AUTHORIZATION_HEADER]: bearerValue }
        });
        return next(authorizedRequest);
    }));
}

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
class AuthGrpcInterceptor {
    /**
     * @param tokenProvider the consuming application's {@link TokenProvider},
     *   injected under the {@link TOKEN_PROVIDER} DI token.
     */
    constructor(tokenProvider) {
        this.tokenProvider = tokenProvider;
    }
    /**
     * Attach the bearer credential (when available) to the request metadata, then
     * delegate to the next handler in the chain.
     *
     * @param request the intercepted gRPC request.
     * @param next the next handler to pass the request through.
     * @returns the stream of gRPC events for the (possibly authorized) request.
     */
    intercept(request, next) {
        if (request.requestMetadata.has(AUTHORIZATION_HEADER)) {
            return next.handle(request);
        }
        return resolveBearerValue(this.tokenProvider.getToken()).pipe(switchMap((bearerValue) => {
            if (bearerValue !== null) {
                request.requestMetadata.set(AUTHORIZATION_HEADER, bearerValue);
            }
            return next.handle(request);
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.33", ngImport: i0, type: AuthGrpcInterceptor, deps: [{ token: TOKEN_PROVIDER }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.33", ngImport: i0, type: AuthGrpcInterceptor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.33", ngImport: i0, type: AuthGrpcInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [TOKEN_PROVIDER]
                }] }] });

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
function provideOndewoSurveyAuth(tokenProvider) {
    const providers = [
        tokenProvider,
        { provide: TOKEN_PROVIDER, useExisting: tokenProvider },
        { provide: GRPC_INTERCEPTORS, useClass: AuthGrpcInterceptor, multi: true }
    ];
    return makeEnvironmentProviders(providers);
}

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
/**
 * Certificate / key fields of the other ONDEWO SDKs' configs (camelCase and snake_case) that a
 * browser cannot use. A non-empty value in any of them makes {@link buildGrpcWebHost} throw.
 */
const BROWSER_UNSUPPORTED_TLS_FIELDS = [
    "grpcCert",
    "grpcClientCert",
    "grpcClientKey",
    "grpc_cert",
    "grpc_client_cert",
    "grpc_client_key"
];
/** Raised for an unusable {@link GrpcWebEndpointConfig}. The message names fields, never their values. */
class GrpcWebEndpointError extends Error {
    /**
     * @param message a description of the problem that names the offending field.
     */
    constructor(message) {
        super(message);
        this.name = "GrpcWebEndpointError";
    }
}
/** A URL scheme at the start of `host` (`https://…`). */
const SCHEME_PATTERN = /^[a-z][a-z0-9+.-]*:\/\//i;
/** A bare IPv6 literal: hex digits, dots (embedded IPv4) and at least two colons. */
const BARE_IPV6_PATTERN = /^(?=(?:[^:]*:){2})[0-9a-f:.]+$/i;
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
function buildGrpcWebHost(config) {
    const fields = config;
    for (const field of BROWSER_UNSUPPORTED_TLS_FIELDS) {
        const value = fields[field];
        if (value !== undefined && value !== null && value !== "") {
            throw new GrpcWebEndpointError(`GrpcWebEndpointConfig.${field} is not supported by a browser gRPC-web client: the browser owns the TLS ` +
                "handshake, trusts its own certificate store and presents a client certificate only from the browser/OS " +
                "store. Remove the field (never ship a private key to a browser); see the README section " +
                "'TLS, mutual TLS and certificates'.");
        }
    }
    const host = config.host;
    if (typeof host !== "string" || host.trim() === "") {
        throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host must be a non-empty string");
    }
    const secure = config.useSecureChannel !== false;
    if (SCHEME_PATTERN.test(host)) {
        if (config.port !== undefined) {
            throw new GrpcWebEndpointError("GrpcWebEndpointConfig.port must be omitted when GrpcWebEndpointConfig.host is a URL; put the port in the URL");
        }
        let url;
        try {
            url = new URL(host);
        }
        catch {
            throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host is not a valid URL");
        }
        if (url.protocol !== "https:" && url.protocol !== "http:") {
            throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host must use the http:// or https:// scheme");
        }
        if (url.protocol === "http:") {
            if (secure) {
                throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host uses http:// but useSecureChannel is true; use an https:// URL " +
                    "or set useSecureChannel: false");
            }
            // URL.host leaves out any user:password@ part, so the warning cannot leak credentials
            warnInsecure(url.host);
        }
        return host;
    }
    let bareHost = host;
    if (!host.startsWith("[") && host.includes(":")) {
        if (!BARE_IPV6_PATTERN.test(host)) {
            throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host must not contain a port; set GrpcWebEndpointConfig.port instead");
        }
        bareHost = `[${host}]`;
    }
    let authority = bareHost;
    if (config.port !== undefined) {
        const port = Number(config.port);
        if (String(config.port).trim() === "" || !Number.isInteger(port) || port < 1 || port > 65535) {
            throw new GrpcWebEndpointError("GrpcWebEndpointConfig.port must be an integer between 1 and 65535");
        }
        authority = `${bareHost}:${port}`;
    }
    if (secure) {
        return `https://${authority}`;
    }
    warnInsecure(authority);
    return `http://${authority}`;
}
/**
 * Warn, through the console the host application already uses, that requests (and bearer
 * tokens) to `authority` travel unencrypted.
 *
 * @param authority the `host:port` the insecure channel targets.
 */
function warnInsecure(authority) {
    console.warn(`ONDEWO gRPC-web: insecure http:// endpoint ${authority}; requests and bearer tokens are sent unencrypted. ` +
        "Use useSecureChannel: true (https://) outside local development.");
}

/**
 * Public auth surface for `@ondewo/survey-client-angular`.
 *
 * The consuming application supplies the current Keycloak access token through a
 * {@link TokenProvider} (fed from `keycloak-js` / `keycloak-angular`); this
 * library attaches it as an `Authorization: Bearer <token>` credential to
 * outgoing gRPC-web and HTTP requests. No OAuth/OIDC flow is performed here.
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AUTHORIZATION_HEADER, AgentSurveyRequest, AgentSurveyResponse, Answer, AuthGrpcInterceptor, BEARER_PREFIX, BROWSER_UNSUPPORTED_TLS_FIELDS, Choice, CreateFHIRSurveyRequest, CreateSurveyRequest, CustomHttpPattern, DeleteSurveyRequest, FHIRClient, GRPC_FHIR_CLIENT_SETTINGS, GRPC_SURVEYS_CLIENT_SETTINGS, GetAllSurveyAnswersRequest, GetSurveyAnswersRequest, GetSurveyRequest, GrpcWebEndpointError, Http, HttpRule, KEYCLOAK_TOKEN_PROVIDER_CONFIG, KeycloakTokenError, KeycloakTokenProvider, ListSurveysRequest, ListSurveysResponse, MIN_REFRESH_DELAY_IN_S, MultipleChoiceQuestion, MultipleParameterQuestion, OpenQuestion, Question, REFRESH_SKEW_IN_S, ScaleQuestion, SingleChoiceQuestion, SingleParameterQuestion, SubFlow, Survey, SurveyAnswersResponse, SurveyFHIRAnswersResponse, SurveyInfo, SurveysClient, TOKEN_PROVIDER, UpdateSurveyRequest, authHttpInterceptor, buildBearerValue, buildGrpcWebHost, provideOndewoSurveyAuth, resolveBearerValue, resolveToken };
//# sourceMappingURL=ondewo-survey-client-angular.mjs.map
