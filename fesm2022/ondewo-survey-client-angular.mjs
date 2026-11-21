import { BinaryReader, BinaryWriter } from "google-protobuf";
import * as googleProtobuf006 from "@ngx-grpc/well-known-types";
import * as i0 from "@angular/core";
import { Inject, Injectable, InjectionToken, Optional, inject, makeEnvironmentProviders } from "@angular/core";
import { GrpcCallType, GrpcMetadata } from "@ngx-grpc/common";
import * as i1 from "@ngx-grpc/core";
import { GRPC_CLIENT_FACTORY, GRPC_INTERCEPTORS, takeMessages, throwStatusErrors } from "@ngx-grpc/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, firstValueFrom, from, isObservable, map, of, switchMap, throwError, timeout } from "rxjs";
var Http = class Http {
	static {
		this.id = "google.api.Http";
	}
	static deserializeBinary(bytes) {
		const instance = new Http();
		Http.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.rules = _instance.rules || [];
		_instance.fullyDecodeReservedExpansion = _instance.fullyDecodeReservedExpansion || false;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new HttpRule();
					_reader.readMessage(messageInitializer1, HttpRule.deserializeBinaryFromReader);
					(_instance.rules = _instance.rules || []).push(messageInitializer1);
					break;
				case 2:
					_instance.fullyDecodeReservedExpansion = _reader.readBool();
					break;
				default: _reader.skipField();
			}
		}
		Http.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.rules && _instance.rules.length) _writer.writeRepeatedMessage(1, _instance.rules, HttpRule.serializeBinaryToWriter);
		if (_instance.fullyDecodeReservedExpansion) _writer.writeBool(2, _instance.fullyDecodeReservedExpansion);
	}
	constructor(_value) {
		_value = _value || {};
		this.rules = (_value.rules || []).map((m) => new HttpRule(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Http.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			rules: (this.rules || []).map((m) => m.toObject()),
			fullyDecodeReservedExpansion: this.fullyDecodeReservedExpansion
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			rules: (this.rules || []).map((m) => m.toProtobufJSON(options)),
			fullyDecodeReservedExpansion: this.fullyDecodeReservedExpansion
		};
	}
};
var HttpRule = class HttpRule {
	static {
		this.id = "google.api.HttpRule";
	}
	static deserializeBinary(bytes) {
		const instance = new HttpRule();
		HttpRule.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.selector = _instance.selector || "";
		_instance.body = _instance.body || "";
		_instance.responseBody = _instance.responseBody || "";
		_instance.additionalBindings = _instance.additionalBindings || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
					(_instance.additionalBindings = _instance.additionalBindings || []).push(messageInitializer11);
					break;
				default: _reader.skipField();
			}
		}
		HttpRule.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.selector) _writer.writeString(1, _instance.selector);
		if (_instance.get || _instance.get === "") _writer.writeString(2, _instance.get);
		if (_instance.put || _instance.put === "") _writer.writeString(3, _instance.put);
		if (_instance.post || _instance.post === "") _writer.writeString(4, _instance.post);
		if (_instance.delete || _instance.delete === "") _writer.writeString(5, _instance.delete);
		if (_instance.patch || _instance.patch === "") _writer.writeString(6, _instance.patch);
		if (_instance.custom) _writer.writeMessage(8, _instance.custom, CustomHttpPattern.serializeBinaryToWriter);
		if (_instance.body) _writer.writeString(7, _instance.body);
		if (_instance.responseBody) _writer.writeString(12, _instance.responseBody);
		if (_instance.additionalBindings && _instance.additionalBindings.length) _writer.writeRepeatedMessage(11, _instance.additionalBindings, HttpRule.serializeBinaryToWriter);
	}
	constructor(_value) {
		this._pattern = HttpRule.PatternCase.none;
		_value = _value || {};
		this.selector = _value.selector;
		this.get = _value.get;
		this.put = _value.put;
		this.post = _value.post;
		this.delete = _value.delete;
		this.patch = _value.patch;
		this.custom = _value.custom ? new CustomHttpPattern(_value.custom) : void 0;
		this.body = _value.body;
		this.responseBody = _value.responseBody;
		this.additionalBindings = (_value.additionalBindings || []).map((m) => new HttpRule(m));
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
		if (value !== void 0 && value !== null) {
			this._put = this._post = this._delete = this._patch = this._custom = void 0;
			this._pattern = HttpRule.PatternCase.get;
		}
		this._get = value;
	}
	get put() {
		return this._put;
	}
	set put(value) {
		if (value !== void 0 && value !== null) {
			this._get = this._post = this._delete = this._patch = this._custom = void 0;
			this._pattern = HttpRule.PatternCase.put;
		}
		this._put = value;
	}
	get post() {
		return this._post;
	}
	set post(value) {
		if (value !== void 0 && value !== null) {
			this._get = this._put = this._delete = this._patch = this._custom = void 0;
			this._pattern = HttpRule.PatternCase.post;
		}
		this._post = value;
	}
	get delete() {
		return this._delete;
	}
	set delete(value) {
		if (value !== void 0 && value !== null) {
			this._get = this._put = this._post = this._patch = this._custom = void 0;
			this._pattern = HttpRule.PatternCase.delete;
		}
		this._delete = value;
	}
	get patch() {
		return this._patch;
	}
	set patch(value) {
		if (value !== void 0 && value !== null) {
			this._get = this._put = this._post = this._delete = this._custom = void 0;
			this._pattern = HttpRule.PatternCase.patch;
		}
		this._patch = value;
	}
	get custom() {
		return this._custom;
	}
	set custom(value) {
		if (value !== void 0 && value !== null) {
			this._get = this._put = this._post = this._delete = this._patch = void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		HttpRule.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			selector: this.selector,
			get: this.get,
			put: this.put,
			post: this.post,
			delete: this.delete,
			patch: this.patch,
			custom: this.custom ? this.custom.toObject() : void 0,
			body: this.body,
			responseBody: this.responseBody,
			additionalBindings: (this.additionalBindings || []).map((m) => m.toObject())
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			selector: this.selector,
			get: this.get === null || this.get === void 0 ? null : this.get,
			put: this.put === null || this.put === void 0 ? null : this.put,
			post: this.post === null || this.post === void 0 ? null : this.post,
			delete: this.delete === null || this.delete === void 0 ? null : this.delete,
			patch: this.patch === null || this.patch === void 0 ? null : this.patch,
			custom: this.custom ? this.custom.toProtobufJSON(options) : null,
			body: this.body,
			responseBody: this.responseBody,
			additionalBindings: (this.additionalBindings || []).map((m) => m.toProtobufJSON(options))
		};
	}
};
(function(HttpRule) {
	(function(PatternCase) {
		PatternCase[PatternCase["none"] = 0] = "none";
		PatternCase[PatternCase["get"] = 1] = "get";
		PatternCase[PatternCase["put"] = 2] = "put";
		PatternCase[PatternCase["post"] = 3] = "post";
		PatternCase[PatternCase["delete"] = 4] = "delete";
		PatternCase[PatternCase["patch"] = 5] = "patch";
		PatternCase[PatternCase["custom"] = 6] = "custom";
	})(HttpRule.PatternCase || (HttpRule.PatternCase = {}));
})(HttpRule || (HttpRule = {}));
var CustomHttpPattern = class CustomHttpPattern {
	static {
		this.id = "google.api.CustomHttpPattern";
	}
	static deserializeBinary(bytes) {
		const instance = new CustomHttpPattern();
		CustomHttpPattern.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.kind = _instance.kind || "";
		_instance.path = _instance.path || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.kind = _reader.readString();
					break;
				case 2:
					_instance.path = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		CustomHttpPattern.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.kind) _writer.writeString(1, _instance.kind);
		if (_instance.path) _writer.writeString(2, _instance.path);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		CustomHttpPattern.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			kind: this.kind,
			path: this.path
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			kind: this.kind,
			path: this.path
		};
	}
};
var CreateFHIRSurveyRequest = class CreateFHIRSurveyRequest {
	static {
		this.id = "ondewo.survey.CreateFHIRSurveyRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new CreateFHIRSurveyRequest();
		CreateFHIRSurveyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.fhirQuestionnaire = _instance.fhirQuestionnaire || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.fhirQuestionnaire = new googleProtobuf006.Struct();
					_reader.readMessage(_instance.fhirQuestionnaire, googleProtobuf006.Struct.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		CreateFHIRSurveyRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.fhirQuestionnaire) _writer.writeMessage(1, _instance.fhirQuestionnaire, googleProtobuf006.Struct.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.fhirQuestionnaire = _value.fhirQuestionnaire ? new googleProtobuf006.Struct(_value.fhirQuestionnaire) : void 0;
		CreateFHIRSurveyRequest.refineValues(this);
	}
	get fhirQuestionnaire() {
		return this._fhirQuestionnaire;
	}
	set fhirQuestionnaire(value) {
		this._fhirQuestionnaire = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		CreateFHIRSurveyRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { fhirQuestionnaire: this.fhirQuestionnaire ? this.fhirQuestionnaire.toObject() : void 0 };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { fhirQuestionnaire: this.fhirQuestionnaire ? this.fhirQuestionnaire.toProtobufJSON(options) : null };
	}
};
var SurveyFHIRAnswersResponse = class SurveyFHIRAnswersResponse {
	static {
		this.id = "ondewo.survey.SurveyFHIRAnswersResponse";
	}
	static deserializeBinary(bytes) {
		const instance = new SurveyFHIRAnswersResponse();
		SurveyFHIRAnswersResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.surveyId = _instance.surveyId || "";
		_instance.fhirQuestionnaireResponses = _instance.fhirQuestionnaireResponses || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.surveyId = _reader.readString();
					break;
				case 2:
					const messageInitializer2 = new googleProtobuf006.Struct();
					_reader.readMessage(messageInitializer2, googleProtobuf006.Struct.deserializeBinaryFromReader);
					(_instance.fhirQuestionnaireResponses = _instance.fhirQuestionnaireResponses || []).push(messageInitializer2);
					break;
				default: _reader.skipField();
			}
		}
		SurveyFHIRAnswersResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.surveyId) _writer.writeString(1, _instance.surveyId);
		if (_instance.fhirQuestionnaireResponses && _instance.fhirQuestionnaireResponses.length) _writer.writeRepeatedMessage(2, _instance.fhirQuestionnaireResponses, googleProtobuf006.Struct.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.surveyId = _value.surveyId;
		this.fhirQuestionnaireResponses = (_value.fhirQuestionnaireResponses || []).map((m) => new googleProtobuf006.Struct(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		SurveyFHIRAnswersResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			surveyId: this.surveyId,
			fhirQuestionnaireResponses: (this.fhirQuestionnaireResponses || []).map((m) => m.toObject())
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			surveyId: this.surveyId,
			fhirQuestionnaireResponses: (this.fhirQuestionnaireResponses || []).map((m) => m.toProtobufJSON(options))
		};
	}
};
const GRPC_FHIR_CLIENT_SETTINGS = new InjectionToken("GRPC_FHIR_CLIENT_SETTINGS");
var SubFlow;
(function(SubFlow) {
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
var Survey = class Survey {
	static {
		this.id = "ondewo.survey.Survey";
	}
	static deserializeBinary(bytes) {
		const instance = new Survey();
		Survey.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.surveyId = _instance.surveyId || "";
		_instance.displayName = _instance.displayName || "";
		_instance.languageCode = _instance.languageCode || "";
		_instance.questions = _instance.questions || [];
		_instance.surveyInfo = _instance.surveyInfo || void 0;
		_instance.excludeSubflows = _instance.excludeSubflows || [];
		_instance.status = _instance.status || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
					_reader.readMessage(messageInitializer7, Question.deserializeBinaryFromReader);
					(_instance.questions = _instance.questions || []).push(messageInitializer7);
					break;
				case 8:
					_instance.surveyInfo = new SurveyInfo();
					_reader.readMessage(_instance.surveyInfo, SurveyInfo.deserializeBinaryFromReader);
					break;
				case 9:
					(_instance.excludeSubflows = _instance.excludeSubflows || []).push(..._reader.readPackedEnum() || []);
					break;
				case 10:
					_instance.status = _reader.readEnum();
					break;
				default: _reader.skipField();
			}
		}
		Survey.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.surveyId) _writer.writeString(1, _instance.surveyId);
		if (_instance.displayName) _writer.writeString(2, _instance.displayName);
		if (_instance.languageCode) _writer.writeString(3, _instance.languageCode);
		if (_instance.questions && _instance.questions.length) _writer.writeRepeatedMessage(7, _instance.questions, Question.serializeBinaryToWriter);
		if (_instance.surveyInfo) _writer.writeMessage(8, _instance.surveyInfo, SurveyInfo.serializeBinaryToWriter);
		if (_instance.excludeSubflows && _instance.excludeSubflows.length) _writer.writePackedEnum(9, _instance.excludeSubflows);
		if (_instance.status) _writer.writeEnum(10, _instance.status);
	}
	constructor(_value) {
		_value = _value || {};
		this.surveyId = _value.surveyId;
		this.displayName = _value.displayName;
		this.languageCode = _value.languageCode;
		this.questions = (_value.questions || []).map((m) => new Question(m));
		this.surveyInfo = _value.surveyInfo ? new SurveyInfo(_value.surveyInfo) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Survey.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			surveyId: this.surveyId,
			displayName: this.displayName,
			languageCode: this.languageCode,
			questions: (this.questions || []).map((m) => m.toObject()),
			surveyInfo: this.surveyInfo ? this.surveyInfo.toObject() : void 0,
			excludeSubflows: (this.excludeSubflows || []).slice(),
			status: this.status
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			surveyId: this.surveyId,
			displayName: this.displayName,
			languageCode: this.languageCode,
			questions: (this.questions || []).map((m) => m.toProtobufJSON(options)),
			surveyInfo: this.surveyInfo ? this.surveyInfo.toProtobufJSON(options) : null,
			excludeSubflows: (this.excludeSubflows || []).map((v) => SubFlow[v]),
			status: Survey.AgentStatus[this.status === null || this.status === void 0 ? 0 : this.status]
		};
	}
};
(function(Survey) {
	(function(AgentStatus) {
		AgentStatus[AgentStatus["TO_BE_INITIALIZED"] = 0] = "TO_BE_INITIALIZED";
		AgentStatus[AgentStatus["UPDATED"] = 1] = "UPDATED";
		AgentStatus[AgentStatus["UPDATING"] = 2] = "UPDATING";
		AgentStatus[AgentStatus["OUTDATED"] = 3] = "OUTDATED";
	})(Survey.AgentStatus || (Survey.AgentStatus = {}));
})(Survey || (Survey = {}));
var SurveyInfo = class SurveyInfo {
	static {
		this.id = "ondewo.survey.SurveyInfo";
	}
	static deserializeBinary(bytes) {
		const instance = new SurveyInfo();
		SurveyInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.legalEntity = _instance.legalEntity || "";
		_instance.postalAddress = _instance.postalAddress || "";
		_instance.emailAddress = _instance.emailAddress || "";
		_instance.phoneNumber = _instance.phoneNumber || "";
		_instance.phoneHours = _instance.phoneHours || "";
		_instance.expectedDuration = _instance.expectedDuration || "";
		_instance.purpose = _instance.purpose || "";
		_instance.topic = _instance.topic || "";
		_instance.legalDisclaimer = _instance.legalDisclaimer || "";
		_instance.anonymous = _instance.anonymous || false;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		SurveyInfo.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.legalEntity) _writer.writeString(1, _instance.legalEntity);
		if (_instance.postalAddress) _writer.writeString(2, _instance.postalAddress);
		if (_instance.emailAddress) _writer.writeString(3, _instance.emailAddress);
		if (_instance.phoneNumber) _writer.writeString(4, _instance.phoneNumber);
		if (_instance.phoneHours) _writer.writeString(5, _instance.phoneHours);
		if (_instance.expectedDuration) _writer.writeString(6, _instance.expectedDuration);
		if (_instance.purpose) _writer.writeString(7, _instance.purpose);
		if (_instance.topic) _writer.writeString(8, _instance.topic);
		if (_instance.legalDisclaimer) _writer.writeString(9, _instance.legalDisclaimer);
		if (_instance.anonymous) _writer.writeBool(10, _instance.anonymous);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		SurveyInfo.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
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
};
var Question = class Question {
	static {
		this.id = "ondewo.survey.Question";
	}
	static deserializeBinary(bytes) {
		const instance = new Question();
		Question.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		Question.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.openQuestion) _writer.writeMessage(1, _instance.openQuestion, OpenQuestion.serializeBinaryToWriter);
		if (_instance.singleChoiceQuestion) _writer.writeMessage(2, _instance.singleChoiceQuestion, SingleChoiceQuestion.serializeBinaryToWriter);
		if (_instance.multipleChoiceQuestion) _writer.writeMessage(3, _instance.multipleChoiceQuestion, MultipleChoiceQuestion.serializeBinaryToWriter);
		if (_instance.scaleQuestion) _writer.writeMessage(4, _instance.scaleQuestion, ScaleQuestion.serializeBinaryToWriter);
		if (_instance.singleParameterQuestion) _writer.writeMessage(5, _instance.singleParameterQuestion, SingleParameterQuestion.serializeBinaryToWriter);
		if (_instance.multipleParameterQuestion) _writer.writeMessage(6, _instance.multipleParameterQuestion, MultipleParameterQuestion.serializeBinaryToWriter);
	}
	constructor(_value) {
		this._question = Question.QuestionCase.none;
		_value = _value || {};
		this.openQuestion = _value.openQuestion ? new OpenQuestion(_value.openQuestion) : void 0;
		this.singleChoiceQuestion = _value.singleChoiceQuestion ? new SingleChoiceQuestion(_value.singleChoiceQuestion) : void 0;
		this.multipleChoiceQuestion = _value.multipleChoiceQuestion ? new MultipleChoiceQuestion(_value.multipleChoiceQuestion) : void 0;
		this.scaleQuestion = _value.scaleQuestion ? new ScaleQuestion(_value.scaleQuestion) : void 0;
		this.singleParameterQuestion = _value.singleParameterQuestion ? new SingleParameterQuestion(_value.singleParameterQuestion) : void 0;
		this.multipleParameterQuestion = _value.multipleParameterQuestion ? new MultipleParameterQuestion(_value.multipleParameterQuestion) : void 0;
		Question.refineValues(this);
	}
	get openQuestion() {
		return this._openQuestion;
	}
	set openQuestion(value) {
		if (value !== void 0 && value !== null) {
			this._singleChoiceQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = void 0;
			this._question = Question.QuestionCase.openQuestion;
		}
		this._openQuestion = value;
	}
	get singleChoiceQuestion() {
		return this._singleChoiceQuestion;
	}
	set singleChoiceQuestion(value) {
		if (value !== void 0 && value !== null) {
			this._openQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = void 0;
			this._question = Question.QuestionCase.singleChoiceQuestion;
		}
		this._singleChoiceQuestion = value;
	}
	get multipleChoiceQuestion() {
		return this._multipleChoiceQuestion;
	}
	set multipleChoiceQuestion(value) {
		if (value !== void 0 && value !== null) {
			this._openQuestion = this._singleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = void 0;
			this._question = Question.QuestionCase.multipleChoiceQuestion;
		}
		this._multipleChoiceQuestion = value;
	}
	get scaleQuestion() {
		return this._scaleQuestion;
	}
	set scaleQuestion(value) {
		if (value !== void 0 && value !== null) {
			this._openQuestion = this._singleChoiceQuestion = this._multipleChoiceQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = void 0;
			this._question = Question.QuestionCase.scaleQuestion;
		}
		this._scaleQuestion = value;
	}
	get singleParameterQuestion() {
		return this._singleParameterQuestion;
	}
	set singleParameterQuestion(value) {
		if (value !== void 0 && value !== null) {
			this._openQuestion = this._singleChoiceQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._multipleParameterQuestion = void 0;
			this._question = Question.QuestionCase.singleParameterQuestion;
		}
		this._singleParameterQuestion = value;
	}
	get multipleParameterQuestion() {
		return this._multipleParameterQuestion;
	}
	set multipleParameterQuestion(value) {
		if (value !== void 0 && value !== null) {
			this._openQuestion = this._singleChoiceQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = void 0;
			this._question = Question.QuestionCase.multipleParameterQuestion;
		}
		this._multipleParameterQuestion = value;
	}
	get question() {
		return this._question;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		Question.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			openQuestion: this.openQuestion ? this.openQuestion.toObject() : void 0,
			singleChoiceQuestion: this.singleChoiceQuestion ? this.singleChoiceQuestion.toObject() : void 0,
			multipleChoiceQuestion: this.multipleChoiceQuestion ? this.multipleChoiceQuestion.toObject() : void 0,
			scaleQuestion: this.scaleQuestion ? this.scaleQuestion.toObject() : void 0,
			singleParameterQuestion: this.singleParameterQuestion ? this.singleParameterQuestion.toObject() : void 0,
			multipleParameterQuestion: this.multipleParameterQuestion ? this.multipleParameterQuestion.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			openQuestion: this.openQuestion ? this.openQuestion.toProtobufJSON(options) : null,
			singleChoiceQuestion: this.singleChoiceQuestion ? this.singleChoiceQuestion.toProtobufJSON(options) : null,
			multipleChoiceQuestion: this.multipleChoiceQuestion ? this.multipleChoiceQuestion.toProtobufJSON(options) : null,
			scaleQuestion: this.scaleQuestion ? this.scaleQuestion.toProtobufJSON(options) : null,
			singleParameterQuestion: this.singleParameterQuestion ? this.singleParameterQuestion.toProtobufJSON(options) : null,
			multipleParameterQuestion: this.multipleParameterQuestion ? this.multipleParameterQuestion.toProtobufJSON(options) : null
		};
	}
};
(function(Question) {
	(function(QuestionCase) {
		QuestionCase[QuestionCase["none"] = 0] = "none";
		QuestionCase[QuestionCase["openQuestion"] = 1] = "openQuestion";
		QuestionCase[QuestionCase["singleChoiceQuestion"] = 2] = "singleChoiceQuestion";
		QuestionCase[QuestionCase["multipleChoiceQuestion"] = 3] = "multipleChoiceQuestion";
		QuestionCase[QuestionCase["scaleQuestion"] = 4] = "scaleQuestion";
		QuestionCase[QuestionCase["singleParameterQuestion"] = 5] = "singleParameterQuestion";
		QuestionCase[QuestionCase["multipleParameterQuestion"] = 6] = "multipleParameterQuestion";
	})(Question.QuestionCase || (Question.QuestionCase = {}));
})(Question || (Question = {}));
var OpenQuestion = class OpenQuestion {
	static {
		this.id = "ondewo.survey.OpenQuestion";
	}
	static deserializeBinary(bytes) {
		const instance = new OpenQuestion();
		OpenQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.questionText = _instance.questionText || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.questionText = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		OpenQuestion.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.questionText) _writer.writeString(1, _instance.questionText);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		OpenQuestion.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { questionText: this.questionText };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { questionText: this.questionText };
	}
};
var SingleChoiceQuestion = class SingleChoiceQuestion {
	static {
		this.id = "ondewo.survey.SingleChoiceQuestion";
	}
	static deserializeBinary(bytes) {
		const instance = new SingleChoiceQuestion();
		SingleChoiceQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.questionText = _instance.questionText || "";
		_instance.choices = _instance.choices || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.questionText = _reader.readString();
					break;
				case 2:
					const messageInitializer2 = new Choice();
					_reader.readMessage(messageInitializer2, Choice.deserializeBinaryFromReader);
					(_instance.choices = _instance.choices || []).push(messageInitializer2);
					break;
				default: _reader.skipField();
			}
		}
		SingleChoiceQuestion.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.questionText) _writer.writeString(1, _instance.questionText);
		if (_instance.choices && _instance.choices.length) _writer.writeRepeatedMessage(2, _instance.choices, Choice.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.questionText = _value.questionText;
		this.choices = (_value.choices || []).map((m) => new Choice(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		SingleChoiceQuestion.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			questionText: this.questionText,
			choices: (this.choices || []).map((m) => m.toObject())
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			questionText: this.questionText,
			choices: (this.choices || []).map((m) => m.toProtobufJSON(options))
		};
	}
};
var MultipleChoiceQuestion = class MultipleChoiceQuestion {
	static {
		this.id = "ondewo.survey.MultipleChoiceQuestion";
	}
	static deserializeBinary(bytes) {
		const instance = new MultipleChoiceQuestion();
		MultipleChoiceQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.questionText = _instance.questionText || "";
		_instance.choices = _instance.choices || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.questionText = _reader.readString();
					break;
				case 2:
					const messageInitializer2 = new Choice();
					_reader.readMessage(messageInitializer2, Choice.deserializeBinaryFromReader);
					(_instance.choices = _instance.choices || []).push(messageInitializer2);
					break;
				default: _reader.skipField();
			}
		}
		MultipleChoiceQuestion.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.questionText) _writer.writeString(1, _instance.questionText);
		if (_instance.choices && _instance.choices.length) _writer.writeRepeatedMessage(2, _instance.choices, Choice.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.questionText = _value.questionText;
		this.choices = (_value.choices || []).map((m) => new Choice(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		MultipleChoiceQuestion.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			questionText: this.questionText,
			choices: (this.choices || []).map((m) => m.toObject())
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			questionText: this.questionText,
			choices: (this.choices || []).map((m) => m.toProtobufJSON(options))
		};
	}
};
var ScaleQuestion = class ScaleQuestion {
	static {
		this.id = "ondewo.survey.ScaleQuestion";
	}
	static deserializeBinary(bytes) {
		const instance = new ScaleQuestion();
		ScaleQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.questionText = _instance.questionText || "";
		_instance.minValue = _instance.minValue || void 0;
		_instance.maxValue = _instance.maxValue || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		ScaleQuestion.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.questionText) _writer.writeString(1, _instance.questionText);
		if (_instance.minValue) _writer.writeMessage(2, _instance.minValue, ScaleQuestion.ScaleValue.serializeBinaryToWriter);
		if (_instance.maxValue) _writer.writeMessage(3, _instance.maxValue, ScaleQuestion.ScaleValue.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.questionText = _value.questionText;
		this.minValue = _value.minValue ? new ScaleQuestion.ScaleValue(_value.minValue) : void 0;
		this.maxValue = _value.maxValue ? new ScaleQuestion.ScaleValue(_value.maxValue) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ScaleQuestion.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			questionText: this.questionText,
			minValue: this.minValue ? this.minValue.toObject() : void 0,
			maxValue: this.maxValue ? this.maxValue.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			questionText: this.questionText,
			minValue: this.minValue ? this.minValue.toProtobufJSON(options) : null,
			maxValue: this.maxValue ? this.maxValue.toProtobufJSON(options) : null
		};
	}
};
(function(ScaleQuestion) {
	class ScaleValue {
		static {
			this.id = "ondewo.survey.ScaleQuestion.ScaleValue";
		}
		static deserializeBinary(bytes) {
			const instance = new ScaleValue();
			ScaleValue.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
			return instance;
		}
		static refineValues(_instance) {
			_instance.value = _instance.value || 0;
			_instance.label = _instance.label || "";
		}
		static deserializeBinaryFromReader(_instance, _reader) {
			while (_reader.nextField()) {
				if (_reader.isEndGroup()) break;
				switch (_reader.getFieldNumber()) {
					case 1:
						_instance.value = _reader.readInt32();
						break;
					case 2:
						_instance.label = _reader.readString();
						break;
					default: _reader.skipField();
				}
			}
			ScaleValue.refineValues(_instance);
		}
		static serializeBinaryToWriter(_instance, _writer) {
			if (_instance.value) _writer.writeInt32(1, _instance.value);
			if (_instance.label) _writer.writeString(2, _instance.label);
		}
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
		serializeBinary() {
			const writer = new BinaryWriter();
			ScaleValue.serializeBinaryToWriter(this, writer);
			return writer.getResultBuffer();
		}
		toObject() {
			return {
				value: this.value,
				label: this.label
			};
		}
		toJSON() {
			return this.toObject();
		}
		toProtobufJSON(options) {
			return {
				value: this.value,
				label: this.label
			};
		}
	}
	ScaleQuestion.ScaleValue = ScaleValue;
})(ScaleQuestion || (ScaleQuestion = {}));
var SingleParameterQuestion = class SingleParameterQuestion {
	static {
		this.id = "ondewo.survey.SingleParameterQuestion";
	}
	static deserializeBinary(bytes) {
		const instance = new SingleParameterQuestion();
		SingleParameterQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.questionText = _instance.questionText || "";
		_instance.parameterType = _instance.parameterType || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.questionText = _reader.readString();
					break;
				case 2:
					_instance.parameterType = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		SingleParameterQuestion.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.questionText) _writer.writeString(1, _instance.questionText);
		if (_instance.parameterType) _writer.writeString(2, _instance.parameterType);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		SingleParameterQuestion.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			questionText: this.questionText,
			parameterType: this.parameterType
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			questionText: this.questionText,
			parameterType: this.parameterType
		};
	}
};
var MultipleParameterQuestion = class MultipleParameterQuestion {
	static {
		this.id = "ondewo.survey.MultipleParameterQuestion";
	}
	static deserializeBinary(bytes) {
		const instance = new MultipleParameterQuestion();
		MultipleParameterQuestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.questionText = _instance.questionText || "";
		_instance.parameterType = _instance.parameterType || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.questionText = _reader.readString();
					break;
				case 2:
					_instance.parameterType = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		MultipleParameterQuestion.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.questionText) _writer.writeString(1, _instance.questionText);
		if (_instance.parameterType) _writer.writeString(2, _instance.parameterType);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		MultipleParameterQuestion.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			questionText: this.questionText,
			parameterType: this.parameterType
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			questionText: this.questionText,
			parameterType: this.parameterType
		};
	}
};
var Choice = class Choice {
	static {
		this.id = "ondewo.survey.Choice";
	}
	static deserializeBinary(bytes) {
		const instance = new Choice();
		Choice.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.synonyms = _instance.synonyms || [];
		_instance.followUpQuestion = _instance.followUpQuestion || void 0;
		_instance.value = _instance.value || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		Choice.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.synonyms && _instance.synonyms.length) _writer.writeRepeatedString(1, _instance.synonyms);
		if (_instance.followUpQuestion) _writer.writeMessage(2, _instance.followUpQuestion, Question.serializeBinaryToWriter);
		if (_instance.value) _writer.writeString(3, _instance.value);
	}
	constructor(_value) {
		_value = _value || {};
		this.synonyms = (_value.synonyms || []).slice();
		this.followUpQuestion = _value.followUpQuestion ? new Question(_value.followUpQuestion) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Choice.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			synonyms: (this.synonyms || []).slice(),
			followUpQuestion: this.followUpQuestion ? this.followUpQuestion.toObject() : void 0,
			value: this.value
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			synonyms: (this.synonyms || []).slice(),
			followUpQuestion: this.followUpQuestion ? this.followUpQuestion.toProtobufJSON(options) : null,
			value: this.value
		};
	}
};
var Answer = class Answer {
	static {
		this.id = "ondewo.survey.Answer";
	}
	static deserializeBinary(bytes) {
		const instance = new Answer();
		Answer.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.questionNr = _instance.questionNr || "0";
		_instance.sessionId = _instance.sessionId || "";
		_instance.answerText = _instance.answerText || "";
		_instance.answerParameter = _instance.answerParameter || "";
		_instance.answerParameterOriginal = _instance.answerParameterOriginal || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
					_reader.readMessage(_instance.userInformation, Answer.UserInfo.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		Answer.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.questionNr) _writer.writeInt64String(1, _instance.questionNr);
		if (_instance.sessionId) _writer.writeString(2, _instance.sessionId);
		if (_instance.answerText) _writer.writeString(3, _instance.answerText);
		if (_instance.answerParameter) _writer.writeString(4, _instance.answerParameter);
		if (_instance.answerParameterOriginal) _writer.writeString(5, _instance.answerParameterOriginal);
		if (_instance.anonymous || _instance.anonymous === false) _writer.writeBool(7, _instance.anonymous);
		if (_instance.userInformation) _writer.writeMessage(6, _instance.userInformation, Answer.UserInfo.serializeBinaryToWriter);
	}
	constructor(_value) {
		this._isAnonymous = Answer.IsAnonymousCase.none;
		_value = _value || {};
		this.questionNr = _value.questionNr;
		this.sessionId = _value.sessionId;
		this.answerText = _value.answerText;
		this.answerParameter = _value.answerParameter;
		this.answerParameterOriginal = _value.answerParameterOriginal;
		this.anonymous = _value.anonymous;
		this.userInformation = _value.userInformation ? new Answer.UserInfo(_value.userInformation) : void 0;
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
		if (value !== void 0 && value !== null) {
			this._userInformation = void 0;
			this._isAnonymous = Answer.IsAnonymousCase.anonymous;
		}
		this._anonymous = value;
	}
	get userInformation() {
		return this._userInformation;
	}
	set userInformation(value) {
		if (value !== void 0 && value !== null) {
			this._anonymous = void 0;
			this._isAnonymous = Answer.IsAnonymousCase.userInformation;
		}
		this._userInformation = value;
	}
	get isAnonymous() {
		return this._isAnonymous;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		Answer.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			questionNr: this.questionNr,
			sessionId: this.sessionId,
			answerText: this.answerText,
			answerParameter: this.answerParameter,
			answerParameterOriginal: this.answerParameterOriginal,
			anonymous: this.anonymous,
			userInformation: this.userInformation ? this.userInformation.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			questionNr: this.questionNr,
			sessionId: this.sessionId,
			answerText: this.answerText,
			answerParameter: this.answerParameter,
			answerParameterOriginal: this.answerParameterOriginal,
			anonymous: this.anonymous,
			userInformation: this.userInformation ? this.userInformation.toProtobufJSON(options) : null
		};
	}
};
(function(Answer) {
	(function(IsAnonymousCase) {
		IsAnonymousCase[IsAnonymousCase["none"] = 0] = "none";
		IsAnonymousCase[IsAnonymousCase["anonymous"] = 1] = "anonymous";
		IsAnonymousCase[IsAnonymousCase["userInformation"] = 2] = "userInformation";
	})(Answer.IsAnonymousCase || (Answer.IsAnonymousCase = {}));
	class UserInfo {
		static {
			this.id = "ondewo.survey.Answer.UserInfo";
		}
		static deserializeBinary(bytes) {
			const instance = new UserInfo();
			UserInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
			return instance;
		}
		static refineValues(_instance) {
			_instance.firstName = _instance.firstName || "";
			_instance.lastName = _instance.lastName || "";
			_instance.phoneNumber = _instance.phoneNumber || "";
			_instance.sessionId = _instance.sessionId || "";
			_instance.userId = _instance.userId || "";
		}
		static deserializeBinaryFromReader(_instance, _reader) {
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
					default: _reader.skipField();
				}
			}
			UserInfo.refineValues(_instance);
		}
		static serializeBinaryToWriter(_instance, _writer) {
			if (_instance.firstName) _writer.writeString(1, _instance.firstName);
			if (_instance.lastName) _writer.writeString(2, _instance.lastName);
			if (_instance.phoneNumber) _writer.writeString(3, _instance.phoneNumber);
			if (_instance.sessionId) _writer.writeString(4, _instance.sessionId);
			if (_instance.userId) _writer.writeString(5, _instance.userId);
		}
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
		serializeBinary() {
			const writer = new BinaryWriter();
			UserInfo.serializeBinaryToWriter(this, writer);
			return writer.getResultBuffer();
		}
		toObject() {
			return {
				firstName: this.firstName,
				lastName: this.lastName,
				phoneNumber: this.phoneNumber,
				sessionId: this.sessionId,
				userId: this.userId
			};
		}
		toJSON() {
			return this.toObject();
		}
		toProtobufJSON(options) {
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
var CreateSurveyRequest = class CreateSurveyRequest {
	static {
		this.id = "ondewo.survey.CreateSurveyRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new CreateSurveyRequest();
		CreateSurveyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.survey = _instance.survey || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.survey = new Survey();
					_reader.readMessage(_instance.survey, Survey.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		CreateSurveyRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.survey) _writer.writeMessage(1, _instance.survey, Survey.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.survey = _value.survey ? new Survey(_value.survey) : void 0;
		CreateSurveyRequest.refineValues(this);
	}
	get survey() {
		return this._survey;
	}
	set survey(value) {
		this._survey = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		CreateSurveyRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { survey: this.survey ? this.survey.toObject() : void 0 };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { survey: this.survey ? this.survey.toProtobufJSON(options) : null };
	}
};
var GetSurveyRequest = class GetSurveyRequest {
	static {
		this.id = "ondewo.survey.GetSurveyRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new GetSurveyRequest();
		GetSurveyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.surveyId = _instance.surveyId || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.surveyId = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		GetSurveyRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.surveyId) _writer.writeString(1, _instance.surveyId);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		GetSurveyRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { surveyId: this.surveyId };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { surveyId: this.surveyId };
	}
};
var UpdateSurveyRequest = class UpdateSurveyRequest {
	static {
		this.id = "ondewo.survey.UpdateSurveyRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new UpdateSurveyRequest();
		UpdateSurveyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.survey = _instance.survey || void 0;
		_instance.updateMask = _instance.updateMask || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.survey = new Survey();
					_reader.readMessage(_instance.survey, Survey.deserializeBinaryFromReader);
					break;
				case 2:
					_instance.updateMask = new googleProtobuf006.FieldMask();
					_reader.readMessage(_instance.updateMask, googleProtobuf006.FieldMask.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		UpdateSurveyRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.survey) _writer.writeMessage(1, _instance.survey, Survey.serializeBinaryToWriter);
		if (_instance.updateMask) _writer.writeMessage(2, _instance.updateMask, googleProtobuf006.FieldMask.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.survey = _value.survey ? new Survey(_value.survey) : void 0;
		this.updateMask = _value.updateMask ? new googleProtobuf006.FieldMask(_value.updateMask) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		UpdateSurveyRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			survey: this.survey ? this.survey.toObject() : void 0,
			updateMask: this.updateMask ? this.updateMask.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			survey: this.survey ? this.survey.toProtobufJSON(options) : null,
			updateMask: this.updateMask ? this.updateMask.toProtobufJSON(options) : null
		};
	}
};
var DeleteSurveyRequest = class DeleteSurveyRequest {
	static {
		this.id = "ondewo.survey.DeleteSurveyRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new DeleteSurveyRequest();
		DeleteSurveyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.surveyId = _instance.surveyId || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.surveyId = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		DeleteSurveyRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.surveyId) _writer.writeString(1, _instance.surveyId);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		DeleteSurveyRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { surveyId: this.surveyId };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { surveyId: this.surveyId };
	}
};
var GetSurveyAnswersRequest = class GetSurveyAnswersRequest {
	static {
		this.id = "ondewo.survey.GetSurveyAnswersRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new GetSurveyAnswersRequest();
		GetSurveyAnswersRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.surveyId = _instance.surveyId || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		GetSurveyAnswersRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.surveyId) _writer.writeString(1, _instance.surveyId);
		if (_instance.sessionId || _instance.sessionId === "") _writer.writeString(2, _instance.sessionId);
		if (_instance.userId || _instance.userId === "") _writer.writeString(3, _instance.userId);
		if (_instance.userPhoneNumber || _instance.userPhoneNumber === "") _writer.writeString(4, _instance.userPhoneNumber);
	}
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
		if (value !== void 0 && value !== null) {
			this._userId = this._userPhoneNumber = void 0;
			this._identifier = GetSurveyAnswersRequest.IdentifierCase.sessionId;
		}
		this._sessionId = value;
	}
	get userId() {
		return this._userId;
	}
	set userId(value) {
		if (value !== void 0 && value !== null) {
			this._sessionId = this._userPhoneNumber = void 0;
			this._identifier = GetSurveyAnswersRequest.IdentifierCase.userId;
		}
		this._userId = value;
	}
	get userPhoneNumber() {
		return this._userPhoneNumber;
	}
	set userPhoneNumber(value) {
		if (value !== void 0 && value !== null) {
			this._sessionId = this._userId = void 0;
			this._identifier = GetSurveyAnswersRequest.IdentifierCase.userPhoneNumber;
		}
		this._userPhoneNumber = value;
	}
	get identifier() {
		return this._identifier;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		GetSurveyAnswersRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			surveyId: this.surveyId,
			sessionId: this.sessionId,
			userId: this.userId,
			userPhoneNumber: this.userPhoneNumber
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			surveyId: this.surveyId,
			sessionId: this.sessionId === null || this.sessionId === void 0 ? null : this.sessionId,
			userId: this.userId === null || this.userId === void 0 ? null : this.userId,
			userPhoneNumber: this.userPhoneNumber === null || this.userPhoneNumber === void 0 ? null : this.userPhoneNumber
		};
	}
};
(function(GetSurveyAnswersRequest) {
	(function(IdentifierCase) {
		IdentifierCase[IdentifierCase["none"] = 0] = "none";
		IdentifierCase[IdentifierCase["sessionId"] = 1] = "sessionId";
		IdentifierCase[IdentifierCase["userId"] = 2] = "userId";
		IdentifierCase[IdentifierCase["userPhoneNumber"] = 3] = "userPhoneNumber";
	})(GetSurveyAnswersRequest.IdentifierCase || (GetSurveyAnswersRequest.IdentifierCase = {}));
})(GetSurveyAnswersRequest || (GetSurveyAnswersRequest = {}));
var GetAllSurveyAnswersRequest = class GetAllSurveyAnswersRequest {
	static {
		this.id = "ondewo.survey.GetAllSurveyAnswersRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new GetAllSurveyAnswersRequest();
		GetAllSurveyAnswersRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.surveyId = _instance.surveyId || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.surveyId = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		GetAllSurveyAnswersRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.surveyId) _writer.writeString(1, _instance.surveyId);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		GetAllSurveyAnswersRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { surveyId: this.surveyId };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { surveyId: this.surveyId };
	}
};
var SurveyAnswersResponse = class SurveyAnswersResponse {
	static {
		this.id = "ondewo.survey.SurveyAnswersResponse";
	}
	static deserializeBinary(bytes) {
		const instance = new SurveyAnswersResponse();
		SurveyAnswersResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.surveyId = _instance.surveyId || "";
		_instance.answers = _instance.answers || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.surveyId = _reader.readString();
					break;
				case 2:
					const messageInitializer2 = new Answer();
					_reader.readMessage(messageInitializer2, Answer.deserializeBinaryFromReader);
					(_instance.answers = _instance.answers || []).push(messageInitializer2);
					break;
				default: _reader.skipField();
			}
		}
		SurveyAnswersResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.surveyId) _writer.writeString(1, _instance.surveyId);
		if (_instance.answers && _instance.answers.length) _writer.writeRepeatedMessage(2, _instance.answers, Answer.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.surveyId = _value.surveyId;
		this.answers = (_value.answers || []).map((m) => new Answer(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		SurveyAnswersResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			surveyId: this.surveyId,
			answers: (this.answers || []).map((m) => m.toObject())
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			surveyId: this.surveyId,
			answers: (this.answers || []).map((m) => m.toProtobufJSON(options))
		};
	}
};
var ListSurveysRequest = class ListSurveysRequest {
	static {
		this.id = "ondewo.survey.ListSurveysRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new ListSurveysRequest();
		ListSurveysRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.pageToken = _instance.pageToken || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.pageToken = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		ListSurveysRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.pageToken) _writer.writeString(1, _instance.pageToken);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListSurveysRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { pageToken: this.pageToken };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { pageToken: this.pageToken };
	}
};
var ListSurveysResponse = class ListSurveysResponse {
	static {
		this.id = "ondewo.survey.ListSurveysResponse";
	}
	static deserializeBinary(bytes) {
		const instance = new ListSurveysResponse();
		ListSurveysResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.surveys = _instance.surveys || [];
		_instance.nextPageToken = _instance.nextPageToken || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new Survey();
					_reader.readMessage(messageInitializer1, Survey.deserializeBinaryFromReader);
					(_instance.surveys = _instance.surveys || []).push(messageInitializer1);
					break;
				case 2:
					_instance.nextPageToken = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		ListSurveysResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.surveys && _instance.surveys.length) _writer.writeRepeatedMessage(1, _instance.surveys, Survey.serializeBinaryToWriter);
		if (_instance.nextPageToken) _writer.writeString(2, _instance.nextPageToken);
	}
	constructor(_value) {
		_value = _value || {};
		this.surveys = (_value.surveys || []).map((m) => new Survey(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListSurveysResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			surveys: (this.surveys || []).map((m) => m.toObject()),
			nextPageToken: this.nextPageToken
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			surveys: (this.surveys || []).map((m) => m.toProtobufJSON(options)),
			nextPageToken: this.nextPageToken
		};
	}
};
var AgentSurveyRequest = class AgentSurveyRequest {
	static {
		this.id = "ondewo.survey.AgentSurveyRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new AgentSurveyRequest();
		AgentSurveyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.surveyId = _instance.surveyId || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.surveyId = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		AgentSurveyRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.surveyId) _writer.writeString(1, _instance.surveyId);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		AgentSurveyRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { surveyId: this.surveyId };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { surveyId: this.surveyId };
	}
};
var AgentSurveyResponse = class AgentSurveyResponse {
	static {
		this.id = "ondewo.survey.AgentSurveyResponse";
	}
	static deserializeBinary(bytes) {
		const instance = new AgentSurveyResponse();
		AgentSurveyResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.parent = _instance.parent || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		AgentSurveyResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) _writer.writeString(1, _instance.parent);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		AgentSurveyResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { parent: this.parent };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { parent: this.parent };
	}
};
var FHIRClient = class FHIRClient {
	constructor(settings, clientFactory, handler) {
		this.handler = handler;
		this.$raw = {
			createFHIRSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.FHIR/CreateFHIRSurvey",
					requestData,
					requestMetadata,
					requestClass: CreateFHIRSurveyRequest,
					responseClass: Survey
				});
			},
			getFHIRSurveyAnswers: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.FHIR/GetFHIRSurveyAnswers",
					requestData,
					requestMetadata,
					requestClass: GetSurveyAnswersRequest,
					responseClass: SurveyFHIRAnswersResponse
				});
			},
			getAllFHIRSurveyAnswers: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.FHIR/GetAllFHIRSurveyAnswers",
					requestData,
					requestMetadata,
					requestClass: GetAllSurveyAnswersRequest,
					responseClass: SurveyFHIRAnswersResponse
				});
			}
		};
		this.client = clientFactory.createClient("ondewo.survey.FHIR", settings);
	}
	createFHIRSurvey(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createFHIRSurvey(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	getFHIRSurveyAnswers(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getFHIRSurveyAnswers(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	getAllFHIRSurveyAnswers(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getAllFHIRSurveyAnswers(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.3.0",
			ngImport: i0,
			type: FHIRClient,
			deps: [
				{
					token: GRPC_FHIR_CLIENT_SETTINGS,
					optional: true
				},
				{ token: GRPC_CLIENT_FACTORY },
				{ token: i1.GrpcHandler }
			],
			target: i0.ɵɵFactoryTarget.Injectable
		});
	}
	static {
		this.ɵprov = i0.ɵɵngDeclareInjectable({
			minVersion: "12.0.0",
			version: "22.3.0",
			ngImport: i0,
			type: FHIRClient,
			providedIn: "any"
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.3.0",
	ngImport: i0,
	type: FHIRClient,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "any" }]
	}],
	ctorParameters: () => [
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [GRPC_FHIR_CLIENT_SETTINGS]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [GRPC_CLIENT_FACTORY]
			}]
		},
		{ type: i1.GrpcHandler }
	]
});
const GRPC_SURVEYS_CLIENT_SETTINGS = new InjectionToken("GRPC_SURVEYS_CLIENT_SETTINGS");
var SurveysClient = class SurveysClient {
	constructor(settings, clientFactory, handler) {
		this.handler = handler;
		this.$raw = {
			createSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.Surveys/CreateSurvey",
					requestData,
					requestMetadata,
					requestClass: CreateSurveyRequest,
					responseClass: Survey
				});
			},
			getSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.Surveys/GetSurvey",
					requestData,
					requestMetadata,
					requestClass: GetSurveyRequest,
					responseClass: Survey
				});
			},
			updateSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.Surveys/UpdateSurvey",
					requestData,
					requestMetadata,
					requestClass: UpdateSurveyRequest,
					responseClass: Survey
				});
			},
			deleteSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.Surveys/DeleteSurvey",
					requestData,
					requestMetadata,
					requestClass: DeleteSurveyRequest,
					responseClass: googleProtobuf006.Empty
				});
			},
			listSurveys: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.Surveys/ListSurveys",
					requestData,
					requestMetadata,
					requestClass: ListSurveysRequest,
					responseClass: ListSurveysResponse
				});
			},
			getSurveyAnswers: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.Surveys/GetSurveyAnswers",
					requestData,
					requestMetadata,
					requestClass: GetSurveyAnswersRequest,
					responseClass: SurveyAnswersResponse
				});
			},
			getAllSurveyAnswers: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.Surveys/GetAllSurveyAnswers",
					requestData,
					requestMetadata,
					requestClass: GetAllSurveyAnswersRequest,
					responseClass: SurveyAnswersResponse
				});
			},
			createAgentSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.Surveys/CreateAgentSurvey",
					requestData,
					requestMetadata,
					requestClass: AgentSurveyRequest,
					responseClass: AgentSurveyResponse
				});
			},
			updateAgentSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.Surveys/UpdateAgentSurvey",
					requestData,
					requestMetadata,
					requestClass: AgentSurveyRequest,
					responseClass: AgentSurveyResponse
				});
			},
			deleteAgentSurvey: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.survey.Surveys/DeleteAgentSurvey",
					requestData,
					requestMetadata,
					requestClass: AgentSurveyRequest,
					responseClass: googleProtobuf006.Empty
				});
			}
		};
		this.client = clientFactory.createClient("ondewo.survey.Surveys", settings);
	}
	createSurvey(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createSurvey(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	getSurvey(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getSurvey(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	updateSurvey(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.updateSurvey(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	deleteSurvey(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteSurvey(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	listSurveys(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listSurveys(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	getSurveyAnswers(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getSurveyAnswers(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	getAllSurveyAnswers(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getAllSurveyAnswers(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	createAgentSurvey(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createAgentSurvey(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	updateAgentSurvey(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.updateAgentSurvey(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	deleteAgentSurvey(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteAgentSurvey(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.3.0",
			ngImport: i0,
			type: SurveysClient,
			deps: [
				{
					token: GRPC_SURVEYS_CLIENT_SETTINGS,
					optional: true
				},
				{ token: GRPC_CLIENT_FACTORY },
				{ token: i1.GrpcHandler }
			],
			target: i0.ɵɵFactoryTarget.Injectable
		});
	}
	static {
		this.ɵprov = i0.ɵɵngDeclareInjectable({
			minVersion: "12.0.0",
			version: "22.3.0",
			ngImport: i0,
			type: SurveysClient,
			providedIn: "any"
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.3.0",
	ngImport: i0,
	type: SurveysClient,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "any" }]
	}],
	ctorParameters: () => [
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [GRPC_SURVEYS_CLIENT_SETTINGS]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [GRPC_CLIENT_FACTORY]
			}]
		},
		{ type: i1.GrpcHandler }
	]
});
const TOKEN_PROVIDER = new InjectionToken("ONDEWO_SURVEY_TOKEN_PROVIDER");
const ROUND_CONSTANTS = [
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
];
const INITIAL_HASH = [
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
];
function rotateRight(word, bits) {
	return word >>> bits | word << 32 - bits;
}
function utf8Bytes(text) {
	const bytes = [];
	for (const character of text) {
		let codePoint = Number(character.codePointAt(0));
		if (codePoint >= 55296 && codePoint <= 57343) codePoint = 65533;
		if (codePoint < 128) bytes.push(codePoint);
		else if (codePoint < 2048) bytes.push(192 | codePoint >> 6, 128 | codePoint & 63);
		else if (codePoint < 65536) bytes.push(224 | codePoint >> 12, 128 | codePoint >> 6 & 63, 128 | codePoint & 63);
		else bytes.push(240 | codePoint >> 18, 128 | codePoint >> 12 & 63, 128 | codePoint >> 6 & 63, 128 | codePoint & 63);
	}
	return bytes;
}
function sha256Hex(text) {
	const bytes = utf8Bytes(text);
	const bitLength = bytes.length * 8;
	bytes.push(128);
	while (bytes.length % 64 !== 56) bytes.push(0);
	const highBits = Math.floor(bitLength / 4294967296);
	for (const word of [highBits, bitLength >>> 0]) bytes.push(word >>> 24 & 255, word >>> 16 & 255, word >>> 8 & 255, word & 255);
	const hash = INITIAL_HASH.slice();
	const schedule = new Array(64);
	for (let offset = 0; offset < bytes.length; offset += 64) {
		for (let index = 0; index < 16; index++) {
			const at = offset + index * 4;
			schedule[index] = bytes[at] << 24 | bytes[at + 1] << 16 | bytes[at + 2] << 8 | bytes[at + 3];
		}
		for (let index = 16; index < 64; index++) {
			const before15 = schedule[index - 15];
			const before2 = schedule[index - 2];
			const sigma0 = rotateRight(before15, 7) ^ rotateRight(before15, 18) ^ before15 >>> 3;
			const sigma1 = rotateRight(before2, 17) ^ rotateRight(before2, 19) ^ before2 >>> 10;
			schedule[index] = schedule[index - 16] + sigma0 + schedule[index - 7] + sigma1 | 0;
		}
		let [a, b, c, d, e, f, g, h] = hash;
		for (let index = 0; index < 64; index++) {
			const sum1 = rotateRight(e, 6) ^ rotateRight(e, 11) ^ rotateRight(e, 25);
			const choice = e & f ^ ~e & g;
			const temp1 = h + sum1 + choice + ROUND_CONSTANTS[index] + schedule[index] | 0;
			const temp2 = (rotateRight(a, 2) ^ rotateRight(a, 13) ^ rotateRight(a, 22)) + (a & b ^ a & c ^ b & c) | 0;
			h = g;
			g = f;
			f = e;
			e = d + temp1 | 0;
			d = c;
			c = b;
			b = a;
			a = temp1 + temp2 | 0;
		}
		const working = [
			a,
			b,
			c,
			d,
			e,
			f,
			g,
			h
		];
		for (let index = 0; index < 8; index++) hash[index] = hash[index] + working[index] | 0;
	}
	return hash.map((word) => (word >>> 0).toString(16).padStart(8, "0")).join("");
}
const REFRESH_SKEW_IN_S = 30;
const MIN_REFRESH_DELAY_IN_S = 1;
const REFRESH_RETRY_BASE_DELAY_IN_S = 5;
const REFRESH_RETRY_MAX_DELAY_IN_S = 300;
const MAX_REFRESH_RETRY_EXPONENT = 6;
const HTTP_TIMEOUT_IN_S = 10;
const MAX_ERROR_BODY_CHARS = 500;
const REDACTED = "***REDACTED***";
const DEFAULT_KEYCLOAK_TIMINGS = Object.freeze({
	expiryLeewayInS: 30,
	minRefreshDelayInS: 1,
	retryBaseDelayInS: 5,
	retryMaxDelayInS: 300,
	maxRetryExponent: 6,
	httpTimeoutInS: 10,
	maxErrorBodyChars: 500
});
var KeycloakAuthenticationError = class extends Error {
	constructor(message, options = {}) {
		super(message, options);
		this.name = "KeycloakAuthenticationError";
	}
};
var KeycloakTransportError = class extends Error {
	constructor(message, options = {}) {
		super(message, options);
		this.name = "KeycloakTransportError";
	}
};
const CONSOLE_KEYCLOAK_LOGGER = {
	warn: (message) => console.warn(message),
	info: (message) => console.info(message),
	debug: (message) => console.debug(message)
};
const GLOBAL_KEYCLOAK_SCHEDULER = {
	setTimeout: (fn, delayInMs) => setTimeout(fn, delayInMs),
	clearTimeout: (handle) => clearTimeout(handle)
};
function backoffDelayInS(consecutiveFailures, randomFn, timings = DEFAULT_KEYCLOAK_TIMINGS) {
	const exponent = Math.min(Math.max(consecutiveFailures, 1) - 1, timings.maxRetryExponent);
	const ceilingInS = Math.min(timings.retryBaseDelayInS * 2 ** exponent, timings.retryMaxDelayInS);
	const fraction = Math.min(Math.max(randomFn(), 0), 1);
	return timings.retryBaseDelayInS + fraction * (ceilingInS - timings.retryBaseDelayInS);
}
function describeError(error) {
	if (typeof error === "object" && error !== null && typeof error.message === "string") {
		const errorLike = error;
		return `${errorLike.name ?? "Error"}: ${errorLike.message}`;
	}
	return `${typeof error}: ${String(error)}`;
}
function jsonTypeName(value) {
	if (Array.isArray(value)) return "array";
	if (value === null) return "null";
	return typeof value;
}
function asAuthenticationError(error, action) {
	if (error instanceof KeycloakAuthenticationError) return error;
	return new KeycloakAuthenticationError(`Keycloak token ${action} failed (${describeError(error)})`, { cause: error });
}
function redactSecret(value) {
	if (value === void 0 || value === null || value.length === 0) return "";
	return REDACTED;
}
function keycloakSessionRegistryKey(fields) {
	let tokenExpiration = "";
	if (fields.tokenExpirationInS !== void 0 && fields.tokenExpirationInS !== null) tokenExpiration = String(fields.tokenExpirationInS);
	let verifySsl = "True";
	if (fields.verifySsl === false) verifySsl = "False";
	return sha256Hex([
		fields.keycloakUrl,
		fields.realm,
		fields.clientId,
		fields.username ?? "",
		fields.password ?? "",
		tokenExpiration,
		verifySsl,
		fields.refreshToken ?? ""
	].join("\0"));
}
var KeycloakTokenSession = class KeycloakTokenSession {
	constructor(options) {
		this.currentAccessToken = "";
		this.expiresAt = 0;
		this.loginDeadline = null;
		this.failures = 0;
		this.nextAttemptAt = 0;
		this.inFlight = null;
		this.timer = null;
		this.timerArmed = false;
		this.backgroundStopped = true;
		this.stopCalled = false;
		this.keycloakUrl = options.keycloakUrl.replace(/\/+$/, "");
		this.realm = options.realm;
		this.clientId = options.clientId;
		this.username = options.username ?? "";
		this.password = options.password ?? "";
		this.tokenExpirationInS = options.tokenExpirationInS ?? null;
		this.verifySsl = options.verifySsl ?? true;
		this.transport = options.transport;
		this.timeFn = options.timeFn ?? (() => performance.now() / 1e3);
		this.randomFn = options.randomFn ?? Math.random;
		this.scheduler = options.scheduler ?? GLOBAL_KEYCLOAK_SCHEDULER;
		this.logger = options.logger ?? CONSOLE_KEYCLOAK_LOGGER;
		this.timings = {
			...DEFAULT_KEYCLOAK_TIMINGS,
			...options.timings ?? {}
		};
		this.configuredRefreshToken = options.refreshToken ?? "";
		this.currentRefreshToken = this.configuredRefreshToken;
		this.tokenEndpoint = `${this.keycloakUrl}/realms/${encodeURIComponent(this.realm)}/protocol/openid-connect/token`;
	}
	static async create(options) {
		const session = new KeycloakTokenSession(options);
		await session.acquireInitialToken();
		if (options.startBackgroundRefresh ?? true) {
			session.backgroundStopped = false;
			session.scheduleNextBackgroundRefresh();
		}
		return session;
	}
	get accessToken() {
		return this.currentAccessToken;
	}
	get accessTokenExpiresAt() {
		return this.expiresAt;
	}
	get autoRefreshDeadline() {
		return this.loginDeadline;
	}
	get consecutiveFailures() {
		return this.failures;
	}
	get nextRefreshAttemptAt() {
		return this.nextAttemptAt;
	}
	get backgroundRefreshActive() {
		return !this.backgroundStopped;
	}
	get closed() {
		return this.stopCalled;
	}
	peekAccessToken() {
		const now = this.timeFn();
		if (this.loginDeadline !== null && now >= this.loginDeadline) return this.currentAccessToken;
		if (now < this.expiresAt - this.timings.expiryLeewayInS) return this.currentAccessToken;
		return null;
	}
	async getAccessToken(options = {}) {
		await this.refreshIfWithinWindow(options.force ?? false);
		return this.currentAccessToken;
	}
	async authorizationMetadata() {
		return ["authorization", `Bearer ${await this.getAccessToken()}`];
	}
	stop() {
		this.stopCalled = true;
		this.backgroundStopped = true;
		this.disarmTimer();
	}
	close() {
		this.stop();
	}
	toJSON() {
		return {
			keycloakUrl: this.keycloakUrl,
			realm: this.realm,
			clientId: this.clientId,
			username: this.username,
			password: redactSecret(this.password),
			tokenExpirationInS: this.tokenExpirationInS,
			verifySsl: this.verifySsl,
			refreshToken: redactSecret(this.configuredRefreshToken)
		};
	}
	toString() {
		return `KeycloakTokenSession(${JSON.stringify(this.toJSON())})`;
	}
	async acquireInitialToken() {
		const useRefreshToken = this.configuredRefreshToken.length > 0;
		let action = "login";
		if (useRefreshToken) action = "refresh";
		try {
			if (useRefreshToken) await this.refreshGrant();
			else await this.passwordGrant();
		} catch (error) {
			throw asAuthenticationError(error, action);
		}
		if (this.tokenExpirationInS !== null) this.loginDeadline = this.timeFn() + this.tokenExpirationInS;
	}
	async refreshIfWithinWindow(force) {
		let skipValidityShortcut = force;
		for (;;) {
			if (this.inFlight !== null) {
				await this.inFlight;
				skipValidityShortcut = false;
				continue;
			}
			const now = this.timeFn();
			if (this.loginDeadline !== null && now >= this.loginDeadline) return;
			if (!skipValidityShortcut && now < this.expiresAt - this.timings.expiryLeewayInS) return;
			if (now < this.nextAttemptAt) {
				if (now < this.expiresAt) return;
				throw new KeycloakAuthenticationError(`The Keycloak access token has expired and the refresh is backing off after ${this.failures} consecutive failure(s); the next attempt is due in ${(this.nextAttemptAt - now).toFixed(1)}s`);
			}
			const attempt = this.refreshGrant().then(() => {
				this.recordSuccess();
				return {
					failed: false,
					error: null
				};
			}, (error) => {
				this.recordFailure(error);
				return {
					failed: true,
					error
				};
			});
			this.inFlight = attempt;
			let outcome;
			try {
				outcome = await attempt;
			} finally {
				this.inFlight = null;
			}
			if (!outcome.failed) return;
			if (this.timeFn() < this.expiresAt) return;
			throw asAuthenticationError(outcome.error, "refresh");
		}
	}
	recordFailure(error) {
		const now = this.timeFn();
		this.failures += 1;
		const delayInS = backoffDelayInS(this.failures, this.randomFn, this.timings);
		this.nextAttemptAt = now + delayInS;
		const remainingInS = this.expiresAt - now;
		let validity = "the current access token has expired";
		if (remainingInS > 0) validity = `the current access token stays valid for ${remainingInS.toFixed(1)}s`;
		this.logger.warn(`Keycloak token refresh failed (attempt ${this.failures}); retrying in ${delayInS.toFixed(1)}s, ${validity} (${describeError(error)})`);
	}
	recordSuccess() {
		if (this.failures > 0) this.logger.info(`Keycloak token refresh recovered after ${this.failures} failed attempt(s)`);
		this.failures = 0;
		this.nextAttemptAt = 0;
	}
	scheduleNextBackgroundRefresh() {
		if (this.backgroundStopped) return;
		const now = this.timeFn();
		const deadline = this.loginDeadline;
		if (deadline !== null && now >= deadline) {
			this.backgroundStopped = true;
			return;
		}
		let delayInS = this.expiresAt - this.timings.expiryLeewayInS - now;
		if (this.failures > 0) delayInS = this.nextAttemptAt - now;
		delayInS = Math.max(delayInS, this.timings.minRefreshDelayInS);
		if (deadline !== null) delayInS = Math.min(delayInS, deadline - now);
		this.timerArmed = true;
		this.timer = this.scheduler.setTimeout(() => {
			this.timerArmed = false;
			this.timer = null;
			if (this.backgroundStopped) return;
			this.refreshIfWithinWindow(false).catch((error) => {
				this.logger.debug(`Keycloak background refresh will be retried (${describeError(error)})`);
			}).finally(() => this.scheduleNextBackgroundRefresh());
		}, delayInS * 1e3);
	}
	disarmTimer() {
		if (this.timerArmed) {
			this.scheduler.clearTimeout(this.timer);
			this.timerArmed = false;
			this.timer = null;
		}
	}
	async passwordGrant() {
		const payload = await this.postTokenRequest({
			grant_type: "password",
			client_id: this.clientId,
			username: this.username,
			password: this.password,
			scope: "offline_access"
		}, "login");
		this.storeTokens(payload);
	}
	async refreshGrant() {
		const payload = await this.postTokenRequest({
			grant_type: "refresh_token",
			client_id: this.clientId,
			refresh_token: this.currentRefreshToken
		}, "refresh");
		this.storeTokens(payload);
	}
	async postTokenRequest(form, action) {
		let response;
		try {
			response = await this.transport({
				url: this.tokenEndpoint,
				form,
				timeoutInS: this.timings.httpTimeoutInS,
				verifySsl: this.verifySsl
			});
		} catch (error) {
			if (error instanceof KeycloakTransportError) {
				let reason = error;
				if (error.cause !== void 0) reason = error.cause;
				throw new KeycloakAuthenticationError(`Keycloak token ${action} could not reach the token endpoint (${describeError(reason)})`, { cause: error });
			}
			throw error;
		}
		if (response.status < 200 || response.status >= 300) throw new KeycloakAuthenticationError(`Keycloak token ${action} failed with status ${response.status}: ${response.body.slice(0, this.timings.maxErrorBodyChars)}`);
		let body;
		try {
			body = JSON.parse(response.body);
		} catch (error) {
			throw new KeycloakAuthenticationError(`Keycloak token ${action} returned status ${response.status} with a body that is not JSON`, { cause: error });
		}
		if (typeof body !== "object" || body === null || Array.isArray(body)) throw new KeycloakAuthenticationError(`Keycloak token ${action} returned a JSON ${jsonTypeName(body)} instead of an object`);
		return body;
	}
	storeTokens(payload) {
		const accessToken = payload["access_token"];
		if (typeof accessToken !== "string" || accessToken.length === 0) throw new KeycloakAuthenticationError(`Keycloak token response did not contain an access_token; the response carried the fields [${Object.keys(payload).sort().map((name) => `'${name}'`).join(", ")}] (values withheld: a token response is credential material)`);
		let expiresInRaw = 0;
		if ("expires_in" in payload) expiresInRaw = payload["expires_in"];
		let expiresIn = NaN;
		if (typeof expiresInRaw === "number") expiresIn = expiresInRaw;
		else if (typeof expiresInRaw === "string" && expiresInRaw.trim().length > 0) expiresIn = Number(expiresInRaw);
		if (Number.isNaN(expiresIn)) throw new KeycloakAuthenticationError("Keycloak token response carried a non-numeric expires_in (value withheld)");
		this.currentAccessToken = accessToken;
		const refreshToken = payload["refresh_token"];
		if (typeof refreshToken === "string" && refreshToken.length > 0) this.currentRefreshToken = refreshToken;
		this.expiresAt = this.timeFn() + Math.max(expiresIn, 0);
	}
};
const SESSION_REGISTRY = /* @__PURE__ */ new WeakMap();
async function acquireKeycloakTokenSession(options, scope = options.transport) {
	const key = keycloakSessionRegistryKey(options);
	let sessions = SESSION_REGISTRY.get(scope);
	if (sessions === void 0) {
		sessions = /* @__PURE__ */ new Map();
		SESSION_REGISTRY.set(scope, sessions);
	}
	const scoped = sessions;
	let entry = scoped.get(key);
	if (entry === void 0 || entry.session !== null && entry.session.closed) {
		const created = {
			promise: KeycloakTokenSession.create(options),
			session: null,
			holders: 0
		};
		created.promise.then((started) => {
			created.session = started;
		}, () => {
			scoped.delete(key);
		});
		scoped.set(key, created);
		entry = created;
	}
	const held = entry;
	held.holders += 1;
	let session;
	try {
		session = await held.promise;
	} catch (error) {
		held.holders -= 1;
		throw error;
	}
	let released = false;
	return {
		session,
		release: () => {
			if (released) return;
			released = true;
			held.holders -= 1;
			if (held.holders === 0) {
				session.stop();
				if (scoped.get(key) === held) scoped.delete(key);
			}
		}
	};
}
const KeycloakTokenError = KeycloakAuthenticationError;
const KEYCLOAK_TOKEN_PROVIDER_CONFIG = new InjectionToken("ONDEWO_SURVEY_KEYCLOAK_TOKEN_PROVIDER_CONFIG");
function resolveCredentials(config) {
	const keycloakUrl = config.keycloakUrl ?? "";
	const realm = config.realm ?? "";
	const clientId = config.clientId ?? "";
	const configured = [
		keycloakUrl,
		realm,
		clientId
	].filter((value) => value.length > 0).length;
	if (configured === 0) return null;
	if (configured < 3) throw new KeycloakAuthenticationError("The Keycloak fields `keycloakUrl`, `realm`, and `clientId` must be provided together in KeycloakTokenProviderConfig.");
	const refreshToken = config.refreshToken || config.offlineToken || "";
	const password = config.password ?? "";
	const username = config.username ?? "";
	if (refreshToken.length === 0 && password.length === 0) throw new KeycloakAuthenticationError("Either the field `password` or the field `refreshToken` (refresh_token; deprecated alias `offlineToken`) is mandatory in KeycloakTokenProviderConfig.");
	if (refreshToken.length === 0 && username.length === 0) throw new KeycloakAuthenticationError("KeycloakTokenProvider requires either an offlineToken or a username + password pair");
	return {
		keycloakUrl,
		realm,
		clientId,
		username,
		password,
		tokenExpirationInS: config.tokenExpirationInS ?? null,
		verifySsl: config.keycloakVerifySsl ?? true,
		refreshToken
	};
}
var KeycloakTokenProvider = class KeycloakTokenProvider {
	constructor() {
		this.http = inject(HttpClient);
		this.config = inject(KEYCLOAK_TOKEN_PROVIDER_CONFIG, { optional: true });
		this.verifySsl = true;
		this.session = null;
		this.lease = null;
		this.starting = null;
		this.generation = 0;
		this.destroyed = false;
		this.transport = (request) => {
			const headers = new HttpHeaders({
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "application/json"
			});
			const response$ = this.http.post(request.url, new URLSearchParams(request.form).toString(), {
				headers,
				observe: "response",
				responseType: "text"
			}).pipe(timeout({ first: request.timeoutInS * 1e3 }), map((response) => ({
				status: response.status,
				body: response.body ?? ""
			})), catchError((error) => {
				if (error instanceof HttpErrorResponse && error.status !== 0) {
					let body = "";
					if (typeof error.error === "string") body = error.error;
					return of({
						status: error.status,
						body
					});
				}
				return throwError(() => new KeycloakTransportError("the token endpoint gave no HTTP answer", { cause: error }));
			}));
			return firstValueFrom(response$);
		};
		this.ready = new Promise((resolve, reject) => {
			this.resolveReady = resolve;
			this.rejectReady = reject;
		});
		this.ready.catch(() => void 0);
		if (this.config === null) return;
		this.start(this.config).then(() => this.resolveReady(), (error) => this.rejectReady(error));
	}
	async configure(config) {
		this.destroyed = false;
		try {
			await this.start(config);
		} catch (error) {
			this.rejectReady(error);
			throw error;
		}
		this.resolveReady();
	}
	async ensureFreshToken(options = {}) {
		if (this.config === null) return null;
		if (this.session === null) await (this.starting ?? this.start(this.config));
		if (this.session === null) return null;
		return this.session.getAccessToken({ force: options.force ?? false });
	}
	getToken() {
		if (this.session === null) {
			if (this.starting === null) return null;
			return this.starting.then(() => {
				if (this.session === null) return null;
				return this.session.getAccessToken();
			}, () => null);
		}
		const token = this.session.peekAccessToken();
		if (token !== null) return token;
		return this.session.getAccessToken();
	}
	get keycloakVerifySsl() {
		return this.verifySsl;
	}
	whenReady() {
		return this.ready;
	}
	ngOnDestroy() {
		this.destroyed = true;
		this.releaseLease();
	}
	toJSON() {
		if (this.config === null) return {};
		return {
			...this.config,
			password: redactSecret(this.config.password),
			offlineToken: redactSecret(this.config.offlineToken),
			refreshToken: redactSecret(this.config.refreshToken)
		};
	}
	toString() {
		return `KeycloakTokenProvider(${JSON.stringify(this.toJSON())})`;
	}
	releaseLease() {
		if (this.lease !== null) {
			this.lease.release();
			this.lease = null;
		}
	}
	start(config) {
		this.generation += 1;
		const generation = this.generation;
		this.releaseLease();
		this.session = null;
		this.config = config;
		this.verifySsl = config.keycloakVerifySsl ?? true;
		const starting = this.startSession(config, generation).finally(() => {
			if (this.starting === starting) this.starting = null;
		});
		this.starting = starting;
		return starting;
	}
	async startSession(config, generation) {
		const credentials = resolveCredentials(config);
		if (credentials === null) return;
		const lease = await acquireKeycloakTokenSession({
			...credentials,
			transport: this.transport,
			randomFn: config.randomFraction,
			logger: config.logger
		}, this.http);
		if (generation !== this.generation) {
			lease.release();
			return;
		}
		this.session = lease.session;
		if (this.destroyed) {
			lease.release();
			return;
		}
		this.lease = lease;
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.3.0",
			ngImport: i0,
			type: KeycloakTokenProvider,
			deps: [],
			target: i0.ɵɵFactoryTarget.Injectable
		});
	}
	static {
		this.ɵprov = i0.ɵɵngDeclareInjectable({
			minVersion: "12.0.0",
			version: "22.3.0",
			ngImport: i0,
			type: KeycloakTokenProvider,
			providedIn: "root"
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.3.0",
	ngImport: i0,
	type: KeycloakTokenProvider,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}],
	ctorParameters: () => []
});
const AUTHORIZATION_HEADER = "Authorization";
const BEARER_PREFIX = "Bearer ";
function resolveToken(result) {
	const source = isObservable(result) ? result : from(Promise.resolve(result));
	return new Observable((subscriber) => {
		const subscription = source.subscribe({
			next: (token) => subscriber.next(normalizeToken(token)),
			error: (caughtError) => subscriber.error(caughtError),
			complete: () => subscriber.complete()
		});
		return () => subscription.unsubscribe();
	});
}
function buildBearerValue(token) {
	return token === null ? null : `${BEARER_PREFIX}${token}`;
}
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
function normalizeToken(token) {
	if (token === null || token === void 0) return null;
	const trimmed = token.trim();
	return trimmed.length === 0 ? null : trimmed;
}
function authHttpInterceptor(req, next) {
	if (req.headers.has("Authorization")) return next(req);
	return resolveBearerValue(inject(TOKEN_PROVIDER).getToken()).pipe(switchMap((bearerValue) => {
		if (bearerValue === null) return next(req);
		return next(req.clone({ setHeaders: { [AUTHORIZATION_HEADER]: bearerValue } }));
	}));
}
var AuthGrpcInterceptor = class AuthGrpcInterceptor {
	constructor(tokenProvider) {
		this.tokenProvider = tokenProvider;
	}
	intercept(request, next) {
		if (request.requestMetadata.has("Authorization")) return next.handle(request);
		return resolveBearerValue(this.tokenProvider.getToken()).pipe(switchMap((bearerValue) => {
			if (bearerValue !== null) request.requestMetadata.set(AUTHORIZATION_HEADER, bearerValue);
			return next.handle(request);
		}));
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.3.0",
			ngImport: i0,
			type: AuthGrpcInterceptor,
			deps: [{ token: TOKEN_PROVIDER }],
			target: i0.ɵɵFactoryTarget.Injectable
		});
	}
	static {
		this.ɵprov = i0.ɵɵngDeclareInjectable({
			minVersion: "12.0.0",
			version: "22.3.0",
			ngImport: i0,
			type: AuthGrpcInterceptor
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.3.0",
	ngImport: i0,
	type: AuthGrpcInterceptor,
	decorators: [{ type: Injectable }],
	ctorParameters: () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [TOKEN_PROVIDER]
		}]
	}]
});
function provideOndewoSurveyAuth(tokenProvider) {
	return makeEnvironmentProviders([
		tokenProvider,
		{
			provide: TOKEN_PROVIDER,
			useExisting: tokenProvider
		},
		{
			provide: GRPC_INTERCEPTORS,
			useClass: AuthGrpcInterceptor,
			multi: true
		}
	]);
}
const BROWSER_UNSUPPORTED_TLS_FIELDS = [
	"grpcCert",
	"grpcClientCert",
	"grpcClientKey",
	"grpc_cert",
	"grpc_client_cert",
	"grpc_client_key"
];
var GrpcWebEndpointError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "GrpcWebEndpointError";
	}
};
const SCHEME_PATTERN = /^[a-z][a-z0-9+.-]*:\/\//i;
const BARE_IPV6_PATTERN = /^(?=(?:[^:]*:){2})[0-9a-f:.]+$/i;
function buildGrpcWebHost(config) {
	const fields = config;
	for (const field of BROWSER_UNSUPPORTED_TLS_FIELDS) {
		const value = fields[field];
		if (value !== void 0 && value !== null && value !== "") throw new GrpcWebEndpointError(`GrpcWebEndpointConfig.${field} is not supported by a browser gRPC-web client: the browser owns the TLS handshake, trusts its own certificate store and presents a client certificate only from the browser/OS store. Remove the field (never ship a private key to a browser); see the README section 'TLS, mutual TLS and certificates'.`);
	}
	const host = config.host;
	if (typeof host !== "string" || host.trim() === "") throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host must be a non-empty string");
	const secure = config.useSecureChannel !== false;
	if (SCHEME_PATTERN.test(host)) {
		if (config.port !== void 0) throw new GrpcWebEndpointError("GrpcWebEndpointConfig.port must be omitted when GrpcWebEndpointConfig.host is a URL; put the port in the URL");
		let url;
		try {
			url = new URL(host);
		} catch {
			throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host is not a valid URL");
		}
		if (url.protocol !== "https:" && url.protocol !== "http:") throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host must use the http:// or https:// scheme");
		if (url.protocol === "http:") {
			if (secure) throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host uses http:// but useSecureChannel is true; use an https:// URL or set useSecureChannel: false");
			warnInsecure(url.host);
		}
		return host;
	}
	let bareHost = host;
	if (!host.startsWith("[") && host.includes(":")) {
		if (!BARE_IPV6_PATTERN.test(host)) throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host must not contain a port; set GrpcWebEndpointConfig.port instead");
		bareHost = `[${host}]`;
	}
	let authority = bareHost;
	if (config.port !== void 0) {
		const port = Number(config.port);
		if (String(config.port).trim() === "" || !Number.isInteger(port) || port < 1 || port > 65535) throw new GrpcWebEndpointError("GrpcWebEndpointConfig.port must be an integer between 1 and 65535");
		authority = `${bareHost}:${port}`;
	}
	if (secure) return `https://${authority}`;
	warnInsecure(authority);
	return `http://${authority}`;
}
function warnInsecure(authority) {
	console.warn(`ONDEWO gRPC-web: insecure http:// endpoint ${authority}; requests and bearer tokens are sent unencrypted. Use useSecureChannel: true (https://) outside local development.`);
}
export { AUTHORIZATION_HEADER, AgentSurveyRequest, AgentSurveyResponse, Answer, AuthGrpcInterceptor, BEARER_PREFIX, BROWSER_UNSUPPORTED_TLS_FIELDS, CONSOLE_KEYCLOAK_LOGGER, Choice, CreateFHIRSurveyRequest, CreateSurveyRequest, CustomHttpPattern, DEFAULT_KEYCLOAK_TIMINGS, DeleteSurveyRequest, FHIRClient, GLOBAL_KEYCLOAK_SCHEDULER, GRPC_FHIR_CLIENT_SETTINGS, GRPC_SURVEYS_CLIENT_SETTINGS, GetAllSurveyAnswersRequest, GetSurveyAnswersRequest, GetSurveyRequest, GrpcWebEndpointError, HTTP_TIMEOUT_IN_S, Http, HttpRule, KEYCLOAK_TOKEN_PROVIDER_CONFIG, KeycloakAuthenticationError, KeycloakTokenError, KeycloakTokenProvider, KeycloakTokenSession, KeycloakTransportError, ListSurveysRequest, ListSurveysResponse, MAX_ERROR_BODY_CHARS, MAX_REFRESH_RETRY_EXPONENT, MIN_REFRESH_DELAY_IN_S, MultipleChoiceQuestion, MultipleParameterQuestion, OpenQuestion, Question, REDACTED, REFRESH_RETRY_BASE_DELAY_IN_S, REFRESH_RETRY_MAX_DELAY_IN_S, REFRESH_SKEW_IN_S, ScaleQuestion, SingleChoiceQuestion, SingleParameterQuestion, SubFlow, Survey, SurveyAnswersResponse, SurveyFHIRAnswersResponse, SurveyInfo, SurveysClient, TOKEN_PROVIDER, UpdateSurveyRequest, acquireKeycloakTokenSession, authHttpInterceptor, backoffDelayInS, buildBearerValue, buildGrpcWebHost, keycloakSessionRegistryKey, provideOndewoSurveyAuth, redactSecret, resolveBearerValue, resolveToken };

//# sourceMappingURL=ondewo-survey-client-angular.mjs.map