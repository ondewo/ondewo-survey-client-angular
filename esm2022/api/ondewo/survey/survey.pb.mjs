import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
export var SubFlow;
(function (SubFlow) {
	SubFlow[(SubFlow['SUBFLOW_UNSPECIFIED'] = 0)] = 'SUBFLOW_UNSPECIFIED';
	SubFlow[(SubFlow['BOT'] = 1)] = 'BOT';
	SubFlow[(SubFlow['LEGAL_ENTITY'] = 2)] = 'LEGAL_ENTITY';
	SubFlow[(SubFlow['POSTAL_ADDRESS'] = 3)] = 'POSTAL_ADDRESS';
	SubFlow[(SubFlow['EMAIL_ADDRESS'] = 4)] = 'EMAIL_ADDRESS';
	SubFlow[(SubFlow['PHONE_NUMBER'] = 5)] = 'PHONE_NUMBER';
	SubFlow[(SubFlow['PHONE_HOURS'] = 6)] = 'PHONE_HOURS';
	SubFlow[(SubFlow['EXPECTED_DURATION'] = 7)] = 'EXPECTED_DURATION';
	SubFlow[(SubFlow['PURPOSE'] = 8)] = 'PURPOSE';
})(SubFlow || (SubFlow = {}));
/**
 * Message implementation for ondewo.survey.Survey
 */
export class Survey {
	static {
		this.id = 'ondewo.survey.Survey';
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
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Survey to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.surveyId = _value.surveyId;
		this.displayName = _value.displayName;
		this.languageCode = _value.languageCode;
		this.questions = (_value.questions || []).map((m) => new Question(m));
		this.surveyInfo = _value.surveyInfo ? new SurveyInfo(_value.surveyInfo) : undefined;
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
			questions: (this.questions || []).map((m) => m.toObject()),
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
		options
	) {
		return {
			surveyId: this.surveyId,
			displayName: this.displayName,
			languageCode: this.languageCode,
			questions: (this.questions || []).map((m) => m.toProtobufJSON(options)),
			surveyInfo: this.surveyInfo ? this.surveyInfo.toProtobufJSON(options) : null,
			excludeSubflows: (this.excludeSubflows || []).map((v) => SubFlow[v]),
			status: Survey.AgentStatus[this.status === null || this.status === undefined ? 0 : this.status]
		};
	}
}
(function (Survey) {
	let AgentStatus;
	(function (AgentStatus) {
		AgentStatus[(AgentStatus['TO_BE_INITIALIZED'] = 0)] = 'TO_BE_INITIALIZED';
		AgentStatus[(AgentStatus['UPDATED'] = 1)] = 'UPDATED';
		AgentStatus[(AgentStatus['UPDATING'] = 2)] = 'UPDATING';
		AgentStatus[(AgentStatus['OUTDATED'] = 3)] = 'OUTDATED';
	})((AgentStatus = Survey.AgentStatus || (Survey.AgentStatus = {})));
})(Survey || (Survey = {}));
/**
 * Message implementation for ondewo.survey.SurveyInfo
 */
export class SurveyInfo {
	static {
		this.id = 'ondewo.survey.SurveyInfo';
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
		options
	) {
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
export class Question {
	static {
		this.id = 'ondewo.survey.Question';
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
	static refineValues(_instance) {}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
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
		this.openQuestion = _value.openQuestion ? new OpenQuestion(_value.openQuestion) : undefined;
		this.singleChoiceQuestion = _value.singleChoiceQuestion
			? new SingleChoiceQuestion(_value.singleChoiceQuestion)
			: undefined;
		this.multipleChoiceQuestion = _value.multipleChoiceQuestion
			? new MultipleChoiceQuestion(_value.multipleChoiceQuestion)
			: undefined;
		this.scaleQuestion = _value.scaleQuestion ? new ScaleQuestion(_value.scaleQuestion) : undefined;
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
			this._singleChoiceQuestion =
				this._multipleChoiceQuestion =
				this._scaleQuestion =
				this._singleParameterQuestion =
				this._multipleParameterQuestion =
					undefined;
			this._question = Question.QuestionCase.openQuestion;
		}
		this._openQuestion = value;
	}
	get singleChoiceQuestion() {
		return this._singleChoiceQuestion;
	}
	set singleChoiceQuestion(value) {
		if (value !== undefined && value !== null) {
			this._openQuestion =
				this._multipleChoiceQuestion =
				this._scaleQuestion =
				this._singleParameterQuestion =
				this._multipleParameterQuestion =
					undefined;
			this._question = Question.QuestionCase.singleChoiceQuestion;
		}
		this._singleChoiceQuestion = value;
	}
	get multipleChoiceQuestion() {
		return this._multipleChoiceQuestion;
	}
	set multipleChoiceQuestion(value) {
		if (value !== undefined && value !== null) {
			this._openQuestion =
				this._singleChoiceQuestion =
				this._scaleQuestion =
				this._singleParameterQuestion =
				this._multipleParameterQuestion =
					undefined;
			this._question = Question.QuestionCase.multipleChoiceQuestion;
		}
		this._multipleChoiceQuestion = value;
	}
	get scaleQuestion() {
		return this._scaleQuestion;
	}
	set scaleQuestion(value) {
		if (value !== undefined && value !== null) {
			this._openQuestion =
				this._singleChoiceQuestion =
				this._multipleChoiceQuestion =
				this._singleParameterQuestion =
				this._multipleParameterQuestion =
					undefined;
			this._question = Question.QuestionCase.scaleQuestion;
		}
		this._scaleQuestion = value;
	}
	get singleParameterQuestion() {
		return this._singleParameterQuestion;
	}
	set singleParameterQuestion(value) {
		if (value !== undefined && value !== null) {
			this._openQuestion =
				this._singleChoiceQuestion =
				this._multipleChoiceQuestion =
				this._scaleQuestion =
				this._multipleParameterQuestion =
					undefined;
			this._question = Question.QuestionCase.singleParameterQuestion;
		}
		this._singleParameterQuestion = value;
	}
	get multipleParameterQuestion() {
		return this._multipleParameterQuestion;
	}
	set multipleParameterQuestion(value) {
		if (value !== undefined && value !== null) {
			this._openQuestion =
				this._singleChoiceQuestion =
				this._multipleChoiceQuestion =
				this._scaleQuestion =
				this._singleParameterQuestion =
					undefined;
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
			openQuestion: this.openQuestion ? this.openQuestion.toObject() : undefined,
			singleChoiceQuestion: this.singleChoiceQuestion ? this.singleChoiceQuestion.toObject() : undefined,
			multipleChoiceQuestion: this.multipleChoiceQuestion ? this.multipleChoiceQuestion.toObject() : undefined,
			scaleQuestion: this.scaleQuestion ? this.scaleQuestion.toObject() : undefined,
			singleParameterQuestion: this.singleParameterQuestion ? this.singleParameterQuestion.toObject() : undefined,
			multipleParameterQuestion: this.multipleParameterQuestion ? this.multipleParameterQuestion.toObject() : undefined
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
		options
	) {
		return {
			openQuestion: this.openQuestion ? this.openQuestion.toProtobufJSON(options) : null,
			singleChoiceQuestion: this.singleChoiceQuestion ? this.singleChoiceQuestion.toProtobufJSON(options) : null,
			multipleChoiceQuestion: this.multipleChoiceQuestion ? this.multipleChoiceQuestion.toProtobufJSON(options) : null,
			scaleQuestion: this.scaleQuestion ? this.scaleQuestion.toProtobufJSON(options) : null,
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
		QuestionCase[(QuestionCase['none'] = 0)] = 'none';
		QuestionCase[(QuestionCase['openQuestion'] = 1)] = 'openQuestion';
		QuestionCase[(QuestionCase['singleChoiceQuestion'] = 2)] = 'singleChoiceQuestion';
		QuestionCase[(QuestionCase['multipleChoiceQuestion'] = 3)] = 'multipleChoiceQuestion';
		QuestionCase[(QuestionCase['scaleQuestion'] = 4)] = 'scaleQuestion';
		QuestionCase[(QuestionCase['singleParameterQuestion'] = 5)] = 'singleParameterQuestion';
		QuestionCase[(QuestionCase['multipleParameterQuestion'] = 6)] = 'multipleParameterQuestion';
	})((QuestionCase = Question.QuestionCase || (Question.QuestionCase = {})));
})(Question || (Question = {}));
/**
 * Message implementation for ondewo.survey.OpenQuestion
 */
export class OpenQuestion {
	static {
		this.id = 'ondewo.survey.OpenQuestion';
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
		options
	) {
		return {
			questionText: this.questionText
		};
	}
}
/**
 * Message implementation for ondewo.survey.SingleChoiceQuestion
 */
export class SingleChoiceQuestion {
	static {
		this.id = 'ondewo.survey.SingleChoiceQuestion';
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
			choices: (this.choices || []).map((m) => m.toObject())
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
		options
	) {
		return {
			questionText: this.questionText,
			choices: (this.choices || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
/**
 * Message implementation for ondewo.survey.MultipleChoiceQuestion
 */
export class MultipleChoiceQuestion {
	static {
		this.id = 'ondewo.survey.MultipleChoiceQuestion';
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
			choices: (this.choices || []).map((m) => m.toObject())
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
		options
	) {
		return {
			questionText: this.questionText,
			choices: (this.choices || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
/**
 * Message implementation for ondewo.survey.ScaleQuestion
 */
export class ScaleQuestion {
	static {
		this.id = 'ondewo.survey.ScaleQuestion';
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
		this.minValue = _value.minValue ? new ScaleQuestion.ScaleValue(_value.minValue) : undefined;
		this.maxValue = _value.maxValue ? new ScaleQuestion.ScaleValue(_value.maxValue) : undefined;
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
		options
	) {
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
		static {
			this.id = 'ondewo.survey.ScaleQuestion.ScaleValue';
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
			options
		) {
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
export class SingleParameterQuestion {
	static {
		this.id = 'ondewo.survey.SingleParameterQuestion';
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
		options
	) {
		return {
			questionText: this.questionText,
			parameterType: this.parameterType
		};
	}
}
/**
 * Message implementation for ondewo.survey.MultipleParameterQuestion
 */
export class MultipleParameterQuestion {
	static {
		this.id = 'ondewo.survey.MultipleParameterQuestion';
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
		options
	) {
		return {
			questionText: this.questionText,
			parameterType: this.parameterType
		};
	}
}
/**
 * Message implementation for ondewo.survey.Choice
 */
export class Choice {
	static {
		this.id = 'ondewo.survey.Choice';
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
		this.followUpQuestion = _value.followUpQuestion ? new Question(_value.followUpQuestion) : undefined;
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
			followUpQuestion: this.followUpQuestion ? this.followUpQuestion.toObject() : undefined,
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
		options
	) {
		return {
			synonyms: (this.synonyms || []).slice(),
			followUpQuestion: this.followUpQuestion ? this.followUpQuestion.toProtobufJSON(options) : null,
			value: this.value
		};
	}
}
/**
 * Message implementation for ondewo.survey.Answer
 */
export class Answer {
	static {
		this.id = 'ondewo.survey.Answer';
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
		this.userInformation = _value.userInformation ? new Answer.UserInfo(_value.userInformation) : undefined;
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
			userInformation: this.userInformation ? this.userInformation.toObject() : undefined
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
		options
	) {
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
}
(function (Answer) {
	let IsAnonymousCase;
	(function (IsAnonymousCase) {
		IsAnonymousCase[(IsAnonymousCase['none'] = 0)] = 'none';
		IsAnonymousCase[(IsAnonymousCase['anonymous'] = 1)] = 'anonymous';
		IsAnonymousCase[(IsAnonymousCase['userInformation'] = 2)] = 'userInformation';
	})((IsAnonymousCase = Answer.IsAnonymousCase || (Answer.IsAnonymousCase = {})));
	/**
	 * Message implementation for ondewo.survey.Answer.UserInfo
	 */
	class UserInfo {
		static {
			this.id = 'ondewo.survey.Answer.UserInfo';
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
			options
		) {
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
export class CreateSurveyRequest {
	static {
		this.id = 'ondewo.survey.CreateSurveyRequest';
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			survey: this.survey ? this.survey.toProtobufJSON(options) : null
		};
	}
}
/**
 * Message implementation for ondewo.survey.GetSurveyRequest
 */
export class GetSurveyRequest {
	static {
		this.id = 'ondewo.survey.GetSurveyRequest';
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
		options
	) {
		return {
			surveyId: this.surveyId
		};
	}
}
/**
 * Message implementation for ondewo.survey.UpdateSurveyRequest
 */
export class UpdateSurveyRequest {
	static {
		this.id = 'ondewo.survey.UpdateSurveyRequest';
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
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.survey = new Survey();
					_reader.readMessage(_instance.survey, Survey.deserializeBinaryFromReader);
					break;
				case 2:
					_instance.updateMask = new googleProtobuf004.FieldMask();
					_reader.readMessage(_instance.updateMask, googleProtobuf004.FieldMask.deserializeBinaryFromReader);
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
			_writer.writeMessage(2, _instance.updateMask, googleProtobuf004.FieldMask.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UpdateSurveyRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.survey = _value.survey ? new Survey(_value.survey) : undefined;
		this.updateMask = _value.updateMask ? new googleProtobuf004.FieldMask(_value.updateMask) : undefined;
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
		options
	) {
		return {
			survey: this.survey ? this.survey.toProtobufJSON(options) : null,
			updateMask: this.updateMask ? this.updateMask.toProtobufJSON(options) : null
		};
	}
}
/**
 * Message implementation for ondewo.survey.DeleteSurveyRequest
 */
export class DeleteSurveyRequest {
	static {
		this.id = 'ondewo.survey.DeleteSurveyRequest';
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
		options
	) {
		return {
			surveyId: this.surveyId
		};
	}
}
/**
 * Message implementation for ondewo.survey.GetSurveyAnswersRequest
 */
export class GetSurveyAnswersRequest {
	static {
		this.id = 'ondewo.survey.GetSurveyAnswersRequest';
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
		options
	) {
		return {
			surveyId: this.surveyId,
			sessionId: this.sessionId === null || this.sessionId === undefined ? null : this.sessionId,
			userId: this.userId === null || this.userId === undefined ? null : this.userId,
			userPhoneNumber: this.userPhoneNumber === null || this.userPhoneNumber === undefined ? null : this.userPhoneNumber
		};
	}
}
(function (GetSurveyAnswersRequest) {
	let IdentifierCase;
	(function (IdentifierCase) {
		IdentifierCase[(IdentifierCase['none'] = 0)] = 'none';
		IdentifierCase[(IdentifierCase['sessionId'] = 1)] = 'sessionId';
		IdentifierCase[(IdentifierCase['userId'] = 2)] = 'userId';
		IdentifierCase[(IdentifierCase['userPhoneNumber'] = 3)] = 'userPhoneNumber';
	})((IdentifierCase = GetSurveyAnswersRequest.IdentifierCase || (GetSurveyAnswersRequest.IdentifierCase = {})));
})(GetSurveyAnswersRequest || (GetSurveyAnswersRequest = {}));
/**
 * Message implementation for ondewo.survey.GetAllSurveyAnswersRequest
 */
export class GetAllSurveyAnswersRequest {
	static {
		this.id = 'ondewo.survey.GetAllSurveyAnswersRequest';
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
		options
	) {
		return {
			surveyId: this.surveyId
		};
	}
}
/**
 * Message implementation for ondewo.survey.SurveyAnswersResponse
 */
export class SurveyAnswersResponse {
	static {
		this.id = 'ondewo.survey.SurveyAnswersResponse';
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
			answers: (this.answers || []).map((m) => m.toObject())
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
		options
	) {
		return {
			surveyId: this.surveyId,
			answers: (this.answers || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
/**
 * Message implementation for ondewo.survey.ListSurveysRequest
 */
export class ListSurveysRequest {
	static {
		this.id = 'ondewo.survey.ListSurveysRequest';
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
		options
	) {
		return {
			pageToken: this.pageToken
		};
	}
}
/**
 * Message implementation for ondewo.survey.ListSurveysResponse
 */
export class ListSurveysResponse {
	static {
		this.id = 'ondewo.survey.ListSurveysResponse';
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
			surveys: (this.surveys || []).map((m) => m.toObject()),
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
		options
	) {
		return {
			surveys: (this.surveys || []).map((m) => m.toProtobufJSON(options)),
			nextPageToken: this.nextPageToken
		};
	}
}
/**
 * Message implementation for ondewo.survey.AgentSurveyRequest
 */
export class AgentSurveyRequest {
	static {
		this.id = 'ondewo.survey.AgentSurveyRequest';
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
		options
	) {
		return {
			surveyId: this.surveyId
		};
	}
}
/**
 * Message implementation for ondewo.survey.AgentSurveyResponse
 */
export class AgentSurveyResponse {
	static {
		this.id = 'ondewo.survey.AgentSurveyResponse';
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
		options
	) {
		return {
			parent: this.parent
		};
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VydmV5LnBiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9zdXJ2ZXkvc3VydmV5LnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFLekUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE1BQU0sQ0FBTixJQUFZLE9BVVg7QUFWRCxXQUFZLE9BQU87SUFDakIsbUVBQXVCLENBQUE7SUFDdkIsbUNBQU8sQ0FBQTtJQUNQLHFEQUFnQixDQUFBO0lBQ2hCLHlEQUFrQixDQUFBO0lBQ2xCLHVEQUFpQixDQUFBO0lBQ2pCLHFEQUFnQixDQUFBO0lBQ2hCLG1EQUFlLENBQUE7SUFDZiwrREFBcUIsQ0FBQTtJQUNyQiwyQ0FBVyxDQUFBO0FBQ2IsQ0FBQyxFQVZXLE9BQU8sS0FBUCxPQUFPLFFBVWxCO0FBQ0Q7O0dBRUc7QUFDSCxNQUFNLE9BQU8sTUFBTTthQUNWLE9BQUUsR0FBRyxzQkFBc0IsQ0FBQztJQUVuQzs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBaUI7UUFDbkMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM5QyxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1FBQ3BELFNBQVMsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFD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LElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQge1xuICBHcnBjTWVzc2FnZSxcbiAgUmVjdXJzaXZlUGFydGlhbCxcbiAgVG9Qcm90b2J1ZkpTT05PcHRpb25zXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIsIEJ5dGVTb3VyY2UgfSBmcm9tICdnb29nbGUtcHJvdG9idWYnO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAwIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvaHR0cC5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMSBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDIgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMyBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwNCBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5leHBvcnQgZW51bSBTdWJGbG93IHtcbiAgU1VCRkxPV19VTlNQRUNJRklFRCA9IDAsXG4gIEJPVCA9IDEsXG4gIExFR0FMX0VOVElUWSA9IDIsXG4gIFBPU1RBTF9BRERSRVNTID0gMyxcbiAgRU1BSUxfQUREUkVTUyA9IDQsXG4gIFBIT05FX05VTUJFUiA9IDUsXG4gIFBIT05FX0hPVVJTID0gNixcbiAgRVhQRUNURURfRFVSQVRJT04gPSA3LFxuICBQVVJQT1NFID0gOFxufVxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uc3VydmV5LlN1cnZleVxuICovXG5leHBvcnQgY2xhc3MgU3VydmV5IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnN1cnZleS5TdXJ2ZXknO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTdXJ2ZXkoKTtcbiAgICBTdXJ2ZXkuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTdXJ2ZXkpIHtcbiAgICBfaW5zdGFuY2Uuc3VydmV5SWQgPSBfaW5zdGFuY2Uuc3VydmV5SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmRpc3BsYXlOYW1lID0gX2luc3RhbmNlLmRpc3BsYXlOYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5xdWVzdGlvbnMgPSBfaW5zdGFuY2UucXVlc3Rpb25zIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5zdXJ2ZXlJbmZvID0gX2luc3RhbmNlLnN1cnZleUluZm8gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5leGNsdWRlU3ViZmxvd3MgPSBfaW5zdGFuY2UuZXhjbHVkZVN1YmZsb3dzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5zdGF0dXMgPSBfaW5zdGFuY2Uuc3RhdHVzIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoX2luc3RhbmNlOiBTdXJ2ZXksIF9yZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnN1cnZleUlkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZGlzcGxheU5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjcgPSBuZXcgUXVlc3Rpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNyxcbiAgICAgICAgICAgIFF1ZXN0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5xdWVzdGlvbnMgPSBfaW5zdGFuY2UucXVlc3Rpb25zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyN1xuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3VydmV5SW5mbyA9IG5ldyBTdXJ2ZXlJbmZvKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdXJ2ZXlJbmZvLFxuICAgICAgICAgICAgU3VydmV5SW5mby5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgKF9pbnN0YW5jZS5leGNsdWRlU3ViZmxvd3MgPSBfaW5zdGFuY2UuZXhjbHVkZVN1YmZsb3dzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgLi4uKF9yZWFkZXIucmVhZFBhY2tlZEVudW0oKSB8fCBbXSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGF0dXMgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTdXJ2ZXkucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBTdXJ2ZXksIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2Uuc3VydmV5SWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnN1cnZleUlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kaXNwbGF5TmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5xdWVzdGlvbnMgJiYgX2luc3RhbmNlLnF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDcsXG4gICAgICAgIF9pbnN0YW5jZS5xdWVzdGlvbnMgYXMgYW55LFxuICAgICAgICBRdWVzdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdXJ2ZXlJbmZvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLnN1cnZleUluZm8gYXMgYW55LFxuICAgICAgICBTdXJ2ZXlJbmZvLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmV4Y2x1ZGVTdWJmbG93cyAmJiBfaW5zdGFuY2UuZXhjbHVkZVN1YmZsb3dzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVBhY2tlZEVudW0oOSwgX2luc3RhbmNlLmV4Y2x1ZGVTdWJmbG93cyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RhdHVzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgxMCwgX2luc3RhbmNlLnN0YXR1cyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3VydmV5SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzcGxheU5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XG4gIHByaXZhdGUgX3F1ZXN0aW9ucz86IFF1ZXN0aW9uW107XG4gIHByaXZhdGUgX3N1cnZleUluZm8/OiBTdXJ2ZXlJbmZvO1xuICBwcml2YXRlIF9leGNsdWRlU3ViZmxvd3M6IFN1YkZsb3dbXTtcbiAgcHJpdmF0ZSBfc3RhdHVzOiBTdXJ2ZXkuQWdlbnRTdGF0dXM7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTdXJ2ZXkgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3VydmV5LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnN1cnZleUlkID0gX3ZhbHVlLnN1cnZleUlkO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSBfdmFsdWUuZGlzcGxheU5hbWU7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMucXVlc3Rpb25zID0gKF92YWx1ZS5xdWVzdGlvbnMgfHwgW10pLm1hcChtID0+IG5ldyBRdWVzdGlvbihtKSk7XG4gICAgdGhpcy5zdXJ2ZXlJbmZvID0gX3ZhbHVlLnN1cnZleUluZm9cbiAgICAgID8gbmV3IFN1cnZleUluZm8oX3ZhbHVlLnN1cnZleUluZm8pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmV4Y2x1ZGVTdWJmbG93cyA9IChfdmFsdWUuZXhjbHVkZVN1YmZsb3dzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuc3RhdHVzID0gX3ZhbHVlLnN0YXR1cztcbiAgICBTdXJ2ZXkucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzdXJ2ZXlJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdXJ2ZXlJZDtcbiAgfVxuICBzZXQgc3VydmV5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1cnZleUlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRpc3BsYXlOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlOYW1lO1xuICB9XG4gIHNldCBkaXNwbGF5TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlzcGxheU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcXVlc3Rpb25zKCk6IFF1ZXN0aW9uW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWVzdGlvbnM7XG4gIH1cbiAgc2V0IHF1ZXN0aW9ucyh2YWx1ZTogUXVlc3Rpb25bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3F1ZXN0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBzdXJ2ZXlJbmZvKCk6IFN1cnZleUluZm8gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdXJ2ZXlJbmZvO1xuICB9XG4gIHNldCBzdXJ2ZXlJbmZvKHZhbHVlOiBTdXJ2ZXlJbmZvIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3VydmV5SW5mbyA9IHZhbHVlO1xuICB9XG4gIGdldCBleGNsdWRlU3ViZmxvd3MoKTogU3ViRmxvd1tdIHtcbiAgICByZXR1cm4gdGhpcy5fZXhjbHVkZVN1YmZsb3dzO1xuICB9XG4gIHNldCBleGNsdWRlU3ViZmxvd3ModmFsdWU6IFN1YkZsb3dbXSkge1xuICAgIHRoaXMuX2V4Y2x1ZGVTdWJmbG93cyA9IHZhbHVlO1xuICB9XG4gIGdldCBzdGF0dXMoKTogU3VydmV5LkFnZW50U3RhdHVzIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG4gIHNldCBzdGF0dXModmFsdWU6IFN1cnZleS5BZ2VudFN0YXR1cykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN1cnZleS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTdXJ2ZXkuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzdXJ2ZXlJZDogdGhpcy5zdXJ2ZXlJZCxcbiAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHF1ZXN0aW9uczogKHRoaXMucXVlc3Rpb25zIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgc3VydmV5SW5mbzogdGhpcy5zdXJ2ZXlJbmZvID8gdGhpcy5zdXJ2ZXlJbmZvLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBleGNsdWRlU3ViZmxvd3M6ICh0aGlzLmV4Y2x1ZGVTdWJmbG93cyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTdXJ2ZXkuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzdXJ2ZXlJZDogdGhpcy5zdXJ2ZXlJZCxcbiAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHF1ZXN0aW9uczogKHRoaXMucXVlc3Rpb25zIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKSxcbiAgICAgIHN1cnZleUluZm86IHRoaXMuc3VydmV5SW5mb1xuICAgICAgICA/IHRoaXMuc3VydmV5SW5mby50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBleGNsdWRlU3ViZmxvd3M6ICh0aGlzLmV4Y2x1ZGVTdWJmbG93cyB8fCBbXSkubWFwKHYgPT4gU3ViRmxvd1t2XSksXG4gICAgICBzdGF0dXM6XG4gICAgICAgIFN1cnZleS5BZ2VudFN0YXR1c1tcbiAgICAgICAgICB0aGlzLnN0YXR1cyA9PT0gbnVsbCB8fCB0aGlzLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMCA6IHRoaXMuc3RhdHVzXG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFN1cnZleSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU3VydmV5XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzdXJ2ZXlJZDogc3RyaW5nO1xuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XG4gICAgcXVlc3Rpb25zPzogUXVlc3Rpb24uQXNPYmplY3RbXTtcbiAgICBzdXJ2ZXlJbmZvPzogU3VydmV5SW5mby5Bc09iamVjdDtcbiAgICBleGNsdWRlU3ViZmxvd3M6IFN1YkZsb3dbXTtcbiAgICBzdGF0dXM6IFN1cnZleS5BZ2VudFN0YXR1cztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTdXJ2ZXlcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHN1cnZleUlkOiBzdHJpbmc7XG4gICAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgICBxdWVzdGlvbnM6IFF1ZXN0aW9uLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIHN1cnZleUluZm86IFN1cnZleUluZm8uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGV4Y2x1ZGVTdWJmbG93czogc3RyaW5nW107XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGVudW0gQWdlbnRTdGF0dXMge1xuICAgIFRPX0JFX0lOSVRJQUxJWkVEID0gMCxcbiAgICBVUERBVEVEID0gMSxcbiAgICBVUERBVElORyA9IDIsXG4gICAgT1VUREFURUQgPSAzXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uc3VydmV5LlN1cnZleUluZm9cbiAqL1xuZXhwb3J0IGNsYXNzIFN1cnZleUluZm8gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uc3VydmV5LlN1cnZleUluZm8nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTdXJ2ZXlJbmZvKCk7XG4gICAgU3VydmV5SW5mby5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFN1cnZleUluZm8pIHtcbiAgICBfaW5zdGFuY2UubGVnYWxFbnRpdHkgPSBfaW5zdGFuY2UubGVnYWxFbnRpdHkgfHwgJyc7XG4gICAgX2luc3RhbmNlLnBvc3RhbEFkZHJlc3MgPSBfaW5zdGFuY2UucG9zdGFsQWRkcmVzcyB8fCAnJztcbiAgICBfaW5zdGFuY2UuZW1haWxBZGRyZXNzID0gX2luc3RhbmNlLmVtYWlsQWRkcmVzcyB8fCAnJztcbiAgICBfaW5zdGFuY2UucGhvbmVOdW1iZXIgPSBfaW5zdGFuY2UucGhvbmVOdW1iZXIgfHwgJyc7XG4gICAgX2luc3RhbmNlLnBob25lSG91cnMgPSBfaW5zdGFuY2UucGhvbmVIb3VycyB8fCAnJztcbiAgICBfaW5zdGFuY2UuZXhwZWN0ZWREdXJhdGlvbiA9IF9pbnN0YW5jZS5leHBlY3RlZER1cmF0aW9uIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wdXJwb3NlID0gX2luc3RhbmNlLnB1cnBvc2UgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRvcGljID0gX2luc3RhbmNlLnRvcGljIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5sZWdhbERpc2NsYWltZXIgPSBfaW5zdGFuY2UubGVnYWxEaXNjbGFpbWVyIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5hbm9ueW1vdXMgPSBfaW5zdGFuY2UuYW5vbnltb3VzIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU3VydmV5SW5mbyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubGVnYWxFbnRpdHkgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5wb3N0YWxBZGRyZXNzID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZW1haWxBZGRyZXNzID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UucGhvbmVOdW1iZXIgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5waG9uZUhvdXJzID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuZXhwZWN0ZWREdXJhdGlvbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnB1cnBvc2UgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS50b3BpYyA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgX2luc3RhbmNlLmxlZ2FsRGlzY2xhaW1lciA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS5hbm9ueW1vdXMgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTdXJ2ZXlJbmZvLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogU3VydmV5SW5mbywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sZWdhbEVudGl0eSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubGVnYWxFbnRpdHkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBvc3RhbEFkZHJlc3MpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnBvc3RhbEFkZHJlc3MpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVtYWlsQWRkcmVzcykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UuZW1haWxBZGRyZXNzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5waG9uZU51bWJlcikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UucGhvbmVOdW1iZXIpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBob25lSG91cnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnBob25lSG91cnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmV4cGVjdGVkRHVyYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNiwgX2luc3RhbmNlLmV4cGVjdGVkRHVyYXRpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnB1cnBvc2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNywgX2luc3RhbmNlLnB1cnBvc2UpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRvcGljKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDgsIF9pbnN0YW5jZS50b3BpYyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGVnYWxEaXNjbGFpbWVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDksIF9pbnN0YW5jZS5sZWdhbERpc2NsYWltZXIpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFub255bW91cykge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMTAsIF9pbnN0YW5jZS5hbm9ueW1vdXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xlZ2FsRW50aXR5OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Bvc3RhbEFkZHJlc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZW1haWxBZGRyZXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3Bob25lTnVtYmVyOiBzdHJpbmc7XG4gIHByaXZhdGUgX3Bob25lSG91cnM6IHN0cmluZztcbiAgcHJpdmF0ZSBfZXhwZWN0ZWREdXJhdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIF9wdXJwb3NlOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RvcGljOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xlZ2FsRGlzY2xhaW1lcjogc3RyaW5nO1xuICBwcml2YXRlIF9hbm9ueW1vdXM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTdXJ2ZXlJbmZvIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFN1cnZleUluZm8uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubGVnYWxFbnRpdHkgPSBfdmFsdWUubGVnYWxFbnRpdHk7XG4gICAgdGhpcy5wb3N0YWxBZGRyZXNzID0gX3ZhbHVlLnBvc3RhbEFkZHJlc3M7XG4gICAgdGhpcy5lbWFpbEFkZHJlc3MgPSBfdmFsdWUuZW1haWxBZGRyZXNzO1xuICAgIHRoaXMucGhvbmVOdW1iZXIgPSBfdmFsdWUucGhvbmVOdW1iZXI7XG4gICAgdGhpcy5waG9uZUhvdXJzID0gX3ZhbHVlLnBob25lSG91cnM7XG4gICAgdGhpcy5leHBlY3RlZER1cmF0aW9uID0gX3ZhbHVlLmV4cGVjdGVkRHVyYXRpb247XG4gICAgdGhpcy5wdXJwb3NlID0gX3ZhbHVlLnB1cnBvc2U7XG4gICAgdGhpcy50b3BpYyA9IF92YWx1ZS50b3BpYztcbiAgICB0aGlzLmxlZ2FsRGlzY2xhaW1lciA9IF92YWx1ZS5sZWdhbERpc2NsYWltZXI7XG4gICAgdGhpcy5hbm9ueW1vdXMgPSBfdmFsdWUuYW5vbnltb3VzO1xuICAgIFN1cnZleUluZm8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsZWdhbEVudGl0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sZWdhbEVudGl0eTtcbiAgfVxuICBzZXQgbGVnYWxFbnRpdHkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xlZ2FsRW50aXR5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvc3RhbEFkZHJlc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zdGFsQWRkcmVzcztcbiAgfVxuICBzZXQgcG9zdGFsQWRkcmVzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9zdGFsQWRkcmVzcyA9IHZhbHVlO1xuICB9XG4gIGdldCBlbWFpbEFkZHJlc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxBZGRyZXNzO1xuICB9XG4gIHNldCBlbWFpbEFkZHJlc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VtYWlsQWRkcmVzcyA9IHZhbHVlO1xuICB9XG4gIGdldCBwaG9uZU51bWJlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9waG9uZU51bWJlcjtcbiAgfVxuICBzZXQgcGhvbmVOdW1iZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Bob25lTnVtYmVyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBob25lSG91cnMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGhvbmVIb3VycztcbiAgfVxuICBzZXQgcGhvbmVIb3Vycyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGhvbmVIb3VycyA9IHZhbHVlO1xuICB9XG4gIGdldCBleHBlY3RlZER1cmF0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGVjdGVkRHVyYXRpb247XG4gIH1cbiAgc2V0IGV4cGVjdGVkRHVyYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4cGVjdGVkRHVyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHVycG9zZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wdXJwb3NlO1xuICB9XG4gIHNldCBwdXJwb3NlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wdXJwb3NlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRvcGljKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RvcGljO1xuICB9XG4gIHNldCB0b3BpYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdG9waWMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGVnYWxEaXNjbGFpbWVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xlZ2FsRGlzY2xhaW1lcjtcbiAgfVxuICBzZXQgbGVnYWxEaXNjbGFpbWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sZWdhbERpc2NsYWltZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYW5vbnltb3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbm9ueW1vdXM7XG4gIH1cbiAgc2V0IGFub255bW91cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Fub255bW91cyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN1cnZleUluZm8uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU3VydmV5SW5mby5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZ2FsRW50aXR5OiB0aGlzLmxlZ2FsRW50aXR5LFxuICAgICAgcG9zdGFsQWRkcmVzczogdGhpcy5wb3N0YWxBZGRyZXNzLFxuICAgICAgZW1haWxBZGRyZXNzOiB0aGlzLmVtYWlsQWRkcmVzcyxcbiAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgcGhvbmVIb3VyczogdGhpcy5waG9uZUhvdXJzLFxuICAgICAgZXhwZWN0ZWREdXJhdGlvbjogdGhpcy5leHBlY3RlZER1cmF0aW9uLFxuICAgICAgcHVycG9zZTogdGhpcy5wdXJwb3NlLFxuICAgICAgdG9waWM6IHRoaXMudG9waWMsXG4gICAgICBsZWdhbERpc2NsYWltZXI6IHRoaXMubGVnYWxEaXNjbGFpbWVyLFxuICAgICAgYW5vbnltb3VzOiB0aGlzLmFub255bW91c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFN1cnZleUluZm8uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsZWdhbEVudGl0eTogdGhpcy5sZWdhbEVudGl0eSxcbiAgICAgIHBvc3RhbEFkZHJlc3M6IHRoaXMucG9zdGFsQWRkcmVzcyxcbiAgICAgIGVtYWlsQWRkcmVzczogdGhpcy5lbWFpbEFkZHJlc3MsXG4gICAgICBwaG9uZU51bWJlcjogdGhpcy5waG9uZU51bWJlcixcbiAgICAgIHBob25lSG91cnM6IHRoaXMucGhvbmVIb3VycyxcbiAgICAgIGV4cGVjdGVkRHVyYXRpb246IHRoaXMuZXhwZWN0ZWREdXJhdGlvbixcbiAgICAgIHB1cnBvc2U6IHRoaXMucHVycG9zZSxcbiAgICAgIHRvcGljOiB0aGlzLnRvcGljLFxuICAgICAgbGVnYWxEaXNjbGFpbWVyOiB0aGlzLmxlZ2FsRGlzY2xhaW1lcixcbiAgICAgIGFub255bW91czogdGhpcy5hbm9ueW1vdXNcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFN1cnZleUluZm8ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFN1cnZleUluZm9cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxlZ2FsRW50aXR5OiBzdHJpbmc7XG4gICAgcG9zdGFsQWRkcmVzczogc3RyaW5nO1xuICAgIGVtYWlsQWRkcmVzczogc3RyaW5nO1xuICAgIHBob25lTnVtYmVyOiBzdHJpbmc7XG4gICAgcGhvbmVIb3Vyczogc3RyaW5nO1xuICAgIGV4cGVjdGVkRHVyYXRpb246IHN0cmluZztcbiAgICBwdXJwb3NlOiBzdHJpbmc7XG4gICAgdG9waWM6IHN0cmluZztcbiAgICBsZWdhbERpc2NsYWltZXI6IHN0cmluZztcbiAgICBhbm9ueW1vdXM6IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3VydmV5SW5mb1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGVnYWxFbnRpdHk6IHN0cmluZztcbiAgICBwb3N0YWxBZGRyZXNzOiBzdHJpbmc7XG4gICAgZW1haWxBZGRyZXNzOiBzdHJpbmc7XG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZztcbiAgICBwaG9uZUhvdXJzOiBzdHJpbmc7XG4gICAgZXhwZWN0ZWREdXJhdGlvbjogc3RyaW5nO1xuICAgIHB1cnBvc2U6IHN0cmluZztcbiAgICB0b3BpYzogc3RyaW5nO1xuICAgIGxlZ2FsRGlzY2xhaW1lcjogc3RyaW5nO1xuICAgIGFub255bW91czogYm9vbGVhbjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zdXJ2ZXkuUXVlc3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnN1cnZleS5RdWVzdGlvbic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFF1ZXN0aW9uKCk7XG4gICAgUXVlc3Rpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBRdWVzdGlvbikge31cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBRdWVzdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uub3BlblF1ZXN0aW9uID0gbmV3IE9wZW5RdWVzdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uub3BlblF1ZXN0aW9uLFxuICAgICAgICAgICAgT3BlblF1ZXN0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2luZ2xlQ2hvaWNlUXVlc3Rpb24gPSBuZXcgU2luZ2xlQ2hvaWNlUXVlc3Rpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNpbmdsZUNob2ljZVF1ZXN0aW9uLFxuICAgICAgICAgICAgU2luZ2xlQ2hvaWNlUXVlc3Rpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5tdWx0aXBsZUNob2ljZVF1ZXN0aW9uID0gbmV3IE11bHRpcGxlQ2hvaWNlUXVlc3Rpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm11bHRpcGxlQ2hvaWNlUXVlc3Rpb24sXG4gICAgICAgICAgICBNdWx0aXBsZUNob2ljZVF1ZXN0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2NhbGVRdWVzdGlvbiA9IG5ldyBTY2FsZVF1ZXN0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zY2FsZVF1ZXN0aW9uLFxuICAgICAgICAgICAgU2NhbGVRdWVzdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uID0gbmV3IFNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbixcbiAgICAgICAgICAgIFNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UubXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbiA9IG5ldyBNdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uLFxuICAgICAgICAgICAgTXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUXVlc3Rpb24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBRdWVzdGlvbiwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5vcGVuUXVlc3Rpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2Uub3BlblF1ZXN0aW9uIGFzIGFueSxcbiAgICAgICAgT3BlblF1ZXN0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNpbmdsZUNob2ljZVF1ZXN0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLnNpbmdsZUNob2ljZVF1ZXN0aW9uIGFzIGFueSxcbiAgICAgICAgU2luZ2xlQ2hvaWNlUXVlc3Rpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubXVsdGlwbGVDaG9pY2VRdWVzdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5tdWx0aXBsZUNob2ljZVF1ZXN0aW9uIGFzIGFueSxcbiAgICAgICAgTXVsdGlwbGVDaG9pY2VRdWVzdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zY2FsZVF1ZXN0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLnNjYWxlUXVlc3Rpb24gYXMgYW55LFxuICAgICAgICBTY2FsZVF1ZXN0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLnNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uIGFzIGFueSxcbiAgICAgICAgU2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS5tdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uIGFzIGFueSxcbiAgICAgICAgTXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vcGVuUXVlc3Rpb24/OiBPcGVuUXVlc3Rpb247XG4gIHByaXZhdGUgX3NpbmdsZUNob2ljZVF1ZXN0aW9uPzogU2luZ2xlQ2hvaWNlUXVlc3Rpb247XG4gIHByaXZhdGUgX211bHRpcGxlQ2hvaWNlUXVlc3Rpb24/OiBNdWx0aXBsZUNob2ljZVF1ZXN0aW9uO1xuICBwcml2YXRlIF9zY2FsZVF1ZXN0aW9uPzogU2NhbGVRdWVzdGlvbjtcbiAgcHJpdmF0ZSBfc2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24/OiBTaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbjtcbiAgcHJpdmF0ZSBfbXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbj86IE11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb247XG5cbiAgcHJpdmF0ZSBfcXVlc3Rpb246IFF1ZXN0aW9uLlF1ZXN0aW9uQ2FzZSA9IFF1ZXN0aW9uLlF1ZXN0aW9uQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUXVlc3Rpb24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UXVlc3Rpb24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMub3BlblF1ZXN0aW9uID0gX3ZhbHVlLm9wZW5RdWVzdGlvblxuICAgICAgPyBuZXcgT3BlblF1ZXN0aW9uKF92YWx1ZS5vcGVuUXVlc3Rpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNpbmdsZUNob2ljZVF1ZXN0aW9uID0gX3ZhbHVlLnNpbmdsZUNob2ljZVF1ZXN0aW9uXG4gICAgICA/IG5ldyBTaW5nbGVDaG9pY2VRdWVzdGlvbihfdmFsdWUuc2luZ2xlQ2hvaWNlUXVlc3Rpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm11bHRpcGxlQ2hvaWNlUXVlc3Rpb24gPSBfdmFsdWUubXVsdGlwbGVDaG9pY2VRdWVzdGlvblxuICAgICAgPyBuZXcgTXVsdGlwbGVDaG9pY2VRdWVzdGlvbihfdmFsdWUubXVsdGlwbGVDaG9pY2VRdWVzdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGVRdWVzdGlvbiA9IF92YWx1ZS5zY2FsZVF1ZXN0aW9uXG4gICAgICA/IG5ldyBTY2FsZVF1ZXN0aW9uKF92YWx1ZS5zY2FsZVF1ZXN0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbiA9IF92YWx1ZS5zaW5nbGVQYXJhbWV0ZXJRdWVzdGlvblxuICAgICAgPyBuZXcgU2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24oX3ZhbHVlLnNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5tdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uID0gX3ZhbHVlLm11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb25cbiAgICAgID8gbmV3IE11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24oX3ZhbHVlLm11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBRdWVzdGlvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG9wZW5RdWVzdGlvbigpOiBPcGVuUXVlc3Rpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vcGVuUXVlc3Rpb247XG4gIH1cbiAgc2V0IG9wZW5RdWVzdGlvbih2YWx1ZTogT3BlblF1ZXN0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3NpbmdsZUNob2ljZVF1ZXN0aW9uID0gdGhpcy5fbXVsdGlwbGVDaG9pY2VRdWVzdGlvbiA9IHRoaXMuX3NjYWxlUXVlc3Rpb24gPSB0aGlzLl9zaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbiA9IHRoaXMuX211bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdWVzdGlvbiA9IFF1ZXN0aW9uLlF1ZXN0aW9uQ2FzZS5vcGVuUXVlc3Rpb247XG4gICAgfVxuICAgIHRoaXMuX29wZW5RdWVzdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBzaW5nbGVDaG9pY2VRdWVzdGlvbigpOiBTaW5nbGVDaG9pY2VRdWVzdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbmdsZUNob2ljZVF1ZXN0aW9uO1xuICB9XG4gIHNldCBzaW5nbGVDaG9pY2VRdWVzdGlvbih2YWx1ZTogU2luZ2xlQ2hvaWNlUXVlc3Rpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fb3BlblF1ZXN0aW9uID0gdGhpcy5fbXVsdGlwbGVDaG9pY2VRdWVzdGlvbiA9IHRoaXMuX3NjYWxlUXVlc3Rpb24gPSB0aGlzLl9zaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbiA9IHRoaXMuX211bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdWVzdGlvbiA9IFF1ZXN0aW9uLlF1ZXN0aW9uQ2FzZS5zaW5nbGVDaG9pY2VRdWVzdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fc2luZ2xlQ2hvaWNlUXVlc3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgbXVsdGlwbGVDaG9pY2VRdWVzdGlvbigpOiBNdWx0aXBsZUNob2ljZVF1ZXN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGVDaG9pY2VRdWVzdGlvbjtcbiAgfVxuICBzZXQgbXVsdGlwbGVDaG9pY2VRdWVzdGlvbih2YWx1ZTogTXVsdGlwbGVDaG9pY2VRdWVzdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vcGVuUXVlc3Rpb24gPSB0aGlzLl9zaW5nbGVDaG9pY2VRdWVzdGlvbiA9IHRoaXMuX3NjYWxlUXVlc3Rpb24gPSB0aGlzLl9zaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbiA9IHRoaXMuX211bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdWVzdGlvbiA9IFF1ZXN0aW9uLlF1ZXN0aW9uQ2FzZS5tdWx0aXBsZUNob2ljZVF1ZXN0aW9uO1xuICAgIH1cbiAgICB0aGlzLl9tdWx0aXBsZUNob2ljZVF1ZXN0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNjYWxlUXVlc3Rpb24oKTogU2NhbGVRdWVzdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlUXVlc3Rpb247XG4gIH1cbiAgc2V0IHNjYWxlUXVlc3Rpb24odmFsdWU6IFNjYWxlUXVlc3Rpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fb3BlblF1ZXN0aW9uID0gdGhpcy5fc2luZ2xlQ2hvaWNlUXVlc3Rpb24gPSB0aGlzLl9tdWx0aXBsZUNob2ljZVF1ZXN0aW9uID0gdGhpcy5fc2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24gPSB0aGlzLl9tdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcXVlc3Rpb24gPSBRdWVzdGlvbi5RdWVzdGlvbkNhc2Uuc2NhbGVRdWVzdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fc2NhbGVRdWVzdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBzaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbigpOiBTaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbmdsZVBhcmFtZXRlclF1ZXN0aW9uO1xuICB9XG4gIHNldCBzaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbih2YWx1ZTogU2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fb3BlblF1ZXN0aW9uID0gdGhpcy5fc2luZ2xlQ2hvaWNlUXVlc3Rpb24gPSB0aGlzLl9tdWx0aXBsZUNob2ljZVF1ZXN0aW9uID0gdGhpcy5fc2NhbGVRdWVzdGlvbiA9IHRoaXMuX211bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdWVzdGlvbiA9IFF1ZXN0aW9uLlF1ZXN0aW9uQ2FzZS5zaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fc2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgbXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbigpOiBNdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbjtcbiAgfVxuICBzZXQgbXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbih2YWx1ZTogTXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vcGVuUXVlc3Rpb24gPSB0aGlzLl9zaW5nbGVDaG9pY2VRdWVzdGlvbiA9IHRoaXMuX211bHRpcGxlQ2hvaWNlUXVlc3Rpb24gPSB0aGlzLl9zY2FsZVF1ZXN0aW9uID0gdGhpcy5fc2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdWVzdGlvbiA9IFF1ZXN0aW9uLlF1ZXN0aW9uQ2FzZS5tdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uO1xuICAgIH1cbiAgICB0aGlzLl9tdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHF1ZXN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVzdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBRdWVzdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBRdWVzdGlvbi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW5RdWVzdGlvbjogdGhpcy5vcGVuUXVlc3Rpb25cbiAgICAgICAgPyB0aGlzLm9wZW5RdWVzdGlvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgc2luZ2xlQ2hvaWNlUXVlc3Rpb246IHRoaXMuc2luZ2xlQ2hvaWNlUXVlc3Rpb25cbiAgICAgICAgPyB0aGlzLnNpbmdsZUNob2ljZVF1ZXN0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBtdWx0aXBsZUNob2ljZVF1ZXN0aW9uOiB0aGlzLm11bHRpcGxlQ2hvaWNlUXVlc3Rpb25cbiAgICAgICAgPyB0aGlzLm11bHRpcGxlQ2hvaWNlUXVlc3Rpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHNjYWxlUXVlc3Rpb246IHRoaXMuc2NhbGVRdWVzdGlvblxuICAgICAgICA/IHRoaXMuc2NhbGVRdWVzdGlvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgc2luZ2xlUGFyYW1ldGVyUXVlc3Rpb246IHRoaXMuc2luZ2xlUGFyYW1ldGVyUXVlc3Rpb25cbiAgICAgICAgPyB0aGlzLnNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBtdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uOiB0aGlzLm11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb25cbiAgICAgICAgPyB0aGlzLm11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFF1ZXN0aW9uLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlblF1ZXN0aW9uOiB0aGlzLm9wZW5RdWVzdGlvblxuICAgICAgICA/IHRoaXMub3BlblF1ZXN0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHNpbmdsZUNob2ljZVF1ZXN0aW9uOiB0aGlzLnNpbmdsZUNob2ljZVF1ZXN0aW9uXG4gICAgICAgID8gdGhpcy5zaW5nbGVDaG9pY2VRdWVzdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBtdWx0aXBsZUNob2ljZVF1ZXN0aW9uOiB0aGlzLm11bHRpcGxlQ2hvaWNlUXVlc3Rpb25cbiAgICAgICAgPyB0aGlzLm11bHRpcGxlQ2hvaWNlUXVlc3Rpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgc2NhbGVRdWVzdGlvbjogdGhpcy5zY2FsZVF1ZXN0aW9uXG4gICAgICAgID8gdGhpcy5zY2FsZVF1ZXN0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uOiB0aGlzLnNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uXG4gICAgICAgID8gdGhpcy5zaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBtdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uOiB0aGlzLm11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb25cbiAgICAgICAgPyB0aGlzLm11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBRdWVzdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUXVlc3Rpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG9wZW5RdWVzdGlvbj86IE9wZW5RdWVzdGlvbi5Bc09iamVjdDtcbiAgICBzaW5nbGVDaG9pY2VRdWVzdGlvbj86IFNpbmdsZUNob2ljZVF1ZXN0aW9uLkFzT2JqZWN0O1xuICAgIG11bHRpcGxlQ2hvaWNlUXVlc3Rpb24/OiBNdWx0aXBsZUNob2ljZVF1ZXN0aW9uLkFzT2JqZWN0O1xuICAgIHNjYWxlUXVlc3Rpb24/OiBTY2FsZVF1ZXN0aW9uLkFzT2JqZWN0O1xuICAgIHNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uPzogU2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24uQXNPYmplY3Q7XG4gICAgbXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbj86IE11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24uQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUXVlc3Rpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG9wZW5RdWVzdGlvbjogT3BlblF1ZXN0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzaW5nbGVDaG9pY2VRdWVzdGlvbjogU2luZ2xlQ2hvaWNlUXVlc3Rpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG11bHRpcGxlQ2hvaWNlUXVlc3Rpb246IE11bHRpcGxlQ2hvaWNlUXVlc3Rpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNjYWxlUXVlc3Rpb246IFNjYWxlUXVlc3Rpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uOiBTaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbjogTXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gUXVlc3Rpb25DYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBvcGVuUXVlc3Rpb24gPSAxLFxuICAgIHNpbmdsZUNob2ljZVF1ZXN0aW9uID0gMixcbiAgICBtdWx0aXBsZUNob2ljZVF1ZXN0aW9uID0gMyxcbiAgICBzY2FsZVF1ZXN0aW9uID0gNCxcbiAgICBzaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbiA9IDUsXG4gICAgbXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbiA9IDZcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zdXJ2ZXkuT3BlblF1ZXN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBPcGVuUXVlc3Rpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uc3VydmV5Lk9wZW5RdWVzdGlvbic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE9wZW5RdWVzdGlvbigpO1xuICAgIE9wZW5RdWVzdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IE9wZW5RdWVzdGlvbikge1xuICAgIF9pbnN0YW5jZS5xdWVzdGlvblRleHQgPSBfaW5zdGFuY2UucXVlc3Rpb25UZXh0IHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogT3BlblF1ZXN0aW9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5xdWVzdGlvblRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE9wZW5RdWVzdGlvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE9wZW5RdWVzdGlvbixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5xdWVzdGlvblRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnF1ZXN0aW9uVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcXVlc3Rpb25UZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBPcGVuUXVlc3Rpb24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8T3BlblF1ZXN0aW9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnF1ZXN0aW9uVGV4dCA9IF92YWx1ZS5xdWVzdGlvblRleHQ7XG4gICAgT3BlblF1ZXN0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcXVlc3Rpb25UZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXN0aW9uVGV4dDtcbiAgfVxuICBzZXQgcXVlc3Rpb25UZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdWVzdGlvblRleHQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBPcGVuUXVlc3Rpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogT3BlblF1ZXN0aW9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb25UZXh0OiB0aGlzLnF1ZXN0aW9uVGV4dFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE9wZW5RdWVzdGlvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0aW9uVGV4dDogdGhpcy5xdWVzdGlvblRleHRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE9wZW5RdWVzdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgT3BlblF1ZXN0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBxdWVzdGlvblRleHQ6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBPcGVuUXVlc3Rpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHF1ZXN0aW9uVGV4dDogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnN1cnZleS5TaW5nbGVDaG9pY2VRdWVzdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2luZ2xlQ2hvaWNlUXVlc3Rpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uc3VydmV5LlNpbmdsZUNob2ljZVF1ZXN0aW9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2luZ2xlQ2hvaWNlUXVlc3Rpb24oKTtcbiAgICBTaW5nbGVDaG9pY2VRdWVzdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFNpbmdsZUNob2ljZVF1ZXN0aW9uKSB7XG4gICAgX2luc3RhbmNlLnF1ZXN0aW9uVGV4dCA9IF9pbnN0YW5jZS5xdWVzdGlvblRleHQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmNob2ljZXMgPSBfaW5zdGFuY2UuY2hvaWNlcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFNpbmdsZUNob2ljZVF1ZXN0aW9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5xdWVzdGlvblRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjIgPSBuZXcgQ2hvaWNlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjIsXG4gICAgICAgICAgICBDaG9pY2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmNob2ljZXMgPSBfaW5zdGFuY2UuY2hvaWNlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2luZ2xlQ2hvaWNlUXVlc3Rpb24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTaW5nbGVDaG9pY2VRdWVzdGlvbixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5xdWVzdGlvblRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnF1ZXN0aW9uVGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2hvaWNlcyAmJiBfaW5zdGFuY2UuY2hvaWNlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5jaG9pY2VzIGFzIGFueSxcbiAgICAgICAgQ2hvaWNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3F1ZXN0aW9uVGV4dDogc3RyaW5nO1xuICBwcml2YXRlIF9jaG9pY2VzPzogQ2hvaWNlW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTaW5nbGVDaG9pY2VRdWVzdGlvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTaW5nbGVDaG9pY2VRdWVzdGlvbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5xdWVzdGlvblRleHQgPSBfdmFsdWUucXVlc3Rpb25UZXh0O1xuICAgIHRoaXMuY2hvaWNlcyA9IChfdmFsdWUuY2hvaWNlcyB8fCBbXSkubWFwKG0gPT4gbmV3IENob2ljZShtKSk7XG4gICAgU2luZ2xlQ2hvaWNlUXVlc3Rpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBxdWVzdGlvblRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlc3Rpb25UZXh0O1xuICB9XG4gIHNldCBxdWVzdGlvblRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3F1ZXN0aW9uVGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBjaG9pY2VzKCk6IENob2ljZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2hvaWNlcztcbiAgfVxuICBzZXQgY2hvaWNlcyh2YWx1ZTogQ2hvaWNlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jaG9pY2VzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2luZ2xlQ2hvaWNlUXVlc3Rpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU2luZ2xlQ2hvaWNlUXVlc3Rpb24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVzdGlvblRleHQ6IHRoaXMucXVlc3Rpb25UZXh0LFxuICAgICAgY2hvaWNlczogKHRoaXMuY2hvaWNlcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNpbmdsZUNob2ljZVF1ZXN0aW9uLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb25UZXh0OiB0aGlzLnF1ZXN0aW9uVGV4dCxcbiAgICAgIGNob2ljZXM6ICh0aGlzLmNob2ljZXMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTaW5nbGVDaG9pY2VRdWVzdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU2luZ2xlQ2hvaWNlUXVlc3Rpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHF1ZXN0aW9uVGV4dDogc3RyaW5nO1xuICAgIGNob2ljZXM/OiBDaG9pY2UuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTaW5nbGVDaG9pY2VRdWVzdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcXVlc3Rpb25UZXh0OiBzdHJpbmc7XG4gICAgY2hvaWNlczogQ2hvaWNlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnN1cnZleS5NdWx0aXBsZUNob2ljZVF1ZXN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNdWx0aXBsZUNob2ljZVF1ZXN0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnN1cnZleS5NdWx0aXBsZUNob2ljZVF1ZXN0aW9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTXVsdGlwbGVDaG9pY2VRdWVzdGlvbigpO1xuICAgIE11bHRpcGxlQ2hvaWNlUXVlc3Rpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNdWx0aXBsZUNob2ljZVF1ZXN0aW9uKSB7XG4gICAgX2luc3RhbmNlLnF1ZXN0aW9uVGV4dCA9IF9pbnN0YW5jZS5xdWVzdGlvblRleHQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmNob2ljZXMgPSBfaW5zdGFuY2UuY2hvaWNlcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IE11bHRpcGxlQ2hvaWNlUXVlc3Rpb24sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnF1ZXN0aW9uVGV4dCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBDaG9pY2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgIENob2ljZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UuY2hvaWNlcyA9IF9pbnN0YW5jZS5jaG9pY2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNdWx0aXBsZUNob2ljZVF1ZXN0aW9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTXVsdGlwbGVDaG9pY2VRdWVzdGlvbixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5xdWVzdGlvblRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnF1ZXN0aW9uVGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2hvaWNlcyAmJiBfaW5zdGFuY2UuY2hvaWNlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5jaG9pY2VzIGFzIGFueSxcbiAgICAgICAgQ2hvaWNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3F1ZXN0aW9uVGV4dDogc3RyaW5nO1xuICBwcml2YXRlIF9jaG9pY2VzPzogQ2hvaWNlW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBNdWx0aXBsZUNob2ljZVF1ZXN0aW9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE11bHRpcGxlQ2hvaWNlUXVlc3Rpb24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucXVlc3Rpb25UZXh0ID0gX3ZhbHVlLnF1ZXN0aW9uVGV4dDtcbiAgICB0aGlzLmNob2ljZXMgPSAoX3ZhbHVlLmNob2ljZXMgfHwgW10pLm1hcChtID0+IG5ldyBDaG9pY2UobSkpO1xuICAgIE11bHRpcGxlQ2hvaWNlUXVlc3Rpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBxdWVzdGlvblRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlc3Rpb25UZXh0O1xuICB9XG4gIHNldCBxdWVzdGlvblRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3F1ZXN0aW9uVGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBjaG9pY2VzKCk6IENob2ljZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2hvaWNlcztcbiAgfVxuICBzZXQgY2hvaWNlcyh2YWx1ZTogQ2hvaWNlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jaG9pY2VzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTXVsdGlwbGVDaG9pY2VRdWVzdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBNdWx0aXBsZUNob2ljZVF1ZXN0aW9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb25UZXh0OiB0aGlzLnF1ZXN0aW9uVGV4dCxcbiAgICAgIGNob2ljZXM6ICh0aGlzLmNob2ljZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBNdWx0aXBsZUNob2ljZVF1ZXN0aW9uLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb25UZXh0OiB0aGlzLnF1ZXN0aW9uVGV4dCxcbiAgICAgIGNob2ljZXM6ICh0aGlzLmNob2ljZXMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNdWx0aXBsZUNob2ljZVF1ZXN0aW9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNdWx0aXBsZUNob2ljZVF1ZXN0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBxdWVzdGlvblRleHQ6IHN0cmluZztcbiAgICBjaG9pY2VzPzogQ2hvaWNlLkFzT2JqZWN0W107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTXVsdGlwbGVDaG9pY2VRdWVzdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcXVlc3Rpb25UZXh0OiBzdHJpbmc7XG4gICAgY2hvaWNlczogQ2hvaWNlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnN1cnZleS5TY2FsZVF1ZXN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2FsZVF1ZXN0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnN1cnZleS5TY2FsZVF1ZXN0aW9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2NhbGVRdWVzdGlvbigpO1xuICAgIFNjYWxlUXVlc3Rpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTY2FsZVF1ZXN0aW9uKSB7XG4gICAgX2luc3RhbmNlLnF1ZXN0aW9uVGV4dCA9IF9pbnN0YW5jZS5xdWVzdGlvblRleHQgfHwgJyc7XG4gICAgX2luc3RhbmNlLm1pblZhbHVlID0gX2luc3RhbmNlLm1pblZhbHVlIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UubWF4VmFsdWUgPSBfaW5zdGFuY2UubWF4VmFsdWUgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU2NhbGVRdWVzdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucXVlc3Rpb25UZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWluVmFsdWUgPSBuZXcgU2NhbGVRdWVzdGlvbi5TY2FsZVZhbHVlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5taW5WYWx1ZSxcbiAgICAgICAgICAgIFNjYWxlUXVlc3Rpb24uU2NhbGVWYWx1ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLm1heFZhbHVlID0gbmV3IFNjYWxlUXVlc3Rpb24uU2NhbGVWYWx1ZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubWF4VmFsdWUsXG4gICAgICAgICAgICBTY2FsZVF1ZXN0aW9uLlNjYWxlVmFsdWUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFNjYWxlUXVlc3Rpb24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTY2FsZVF1ZXN0aW9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnF1ZXN0aW9uVGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucXVlc3Rpb25UZXh0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5taW5WYWx1ZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5taW5WYWx1ZSBhcyBhbnksXG4gICAgICAgIFNjYWxlUXVlc3Rpb24uU2NhbGVWYWx1ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tYXhWYWx1ZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5tYXhWYWx1ZSBhcyBhbnksXG4gICAgICAgIFNjYWxlUXVlc3Rpb24uU2NhbGVWYWx1ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9xdWVzdGlvblRleHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfbWluVmFsdWU/OiBTY2FsZVF1ZXN0aW9uLlNjYWxlVmFsdWU7XG4gIHByaXZhdGUgX21heFZhbHVlPzogU2NhbGVRdWVzdGlvbi5TY2FsZVZhbHVlO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU2NhbGVRdWVzdGlvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTY2FsZVF1ZXN0aW9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnF1ZXN0aW9uVGV4dCA9IF92YWx1ZS5xdWVzdGlvblRleHQ7XG4gICAgdGhpcy5taW5WYWx1ZSA9IF92YWx1ZS5taW5WYWx1ZVxuICAgICAgPyBuZXcgU2NhbGVRdWVzdGlvbi5TY2FsZVZhbHVlKF92YWx1ZS5taW5WYWx1ZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4VmFsdWUgPSBfdmFsdWUubWF4VmFsdWVcbiAgICAgID8gbmV3IFNjYWxlUXVlc3Rpb24uU2NhbGVWYWx1ZShfdmFsdWUubWF4VmFsdWUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBTY2FsZVF1ZXN0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcXVlc3Rpb25UZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXN0aW9uVGV4dDtcbiAgfVxuICBzZXQgcXVlc3Rpb25UZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdWVzdGlvblRleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWluVmFsdWUoKTogU2NhbGVRdWVzdGlvbi5TY2FsZVZhbHVlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWluVmFsdWU7XG4gIH1cbiAgc2V0IG1pblZhbHVlKHZhbHVlOiBTY2FsZVF1ZXN0aW9uLlNjYWxlVmFsdWUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9taW5WYWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtYXhWYWx1ZSgpOiBTY2FsZVF1ZXN0aW9uLlNjYWxlVmFsdWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYXhWYWx1ZTtcbiAgfVxuICBzZXQgbWF4VmFsdWUodmFsdWU6IFNjYWxlUXVlc3Rpb24uU2NhbGVWYWx1ZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21heFZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2NhbGVRdWVzdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTY2FsZVF1ZXN0aW9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb25UZXh0OiB0aGlzLnF1ZXN0aW9uVGV4dCxcbiAgICAgIG1pblZhbHVlOiB0aGlzLm1pblZhbHVlID8gdGhpcy5taW5WYWx1ZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWF4VmFsdWU6IHRoaXMubWF4VmFsdWUgPyB0aGlzLm1heFZhbHVlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTY2FsZVF1ZXN0aW9uLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb25UZXh0OiB0aGlzLnF1ZXN0aW9uVGV4dCxcbiAgICAgIG1pblZhbHVlOiB0aGlzLm1pblZhbHVlID8gdGhpcy5taW5WYWx1ZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBtYXhWYWx1ZTogdGhpcy5tYXhWYWx1ZSA/IHRoaXMubWF4VmFsdWUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTY2FsZVF1ZXN0aW9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTY2FsZVF1ZXN0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBxdWVzdGlvblRleHQ6IHN0cmluZztcbiAgICBtaW5WYWx1ZT86IFNjYWxlUXVlc3Rpb24uU2NhbGVWYWx1ZS5Bc09iamVjdDtcbiAgICBtYXhWYWx1ZT86IFNjYWxlUXVlc3Rpb24uU2NhbGVWYWx1ZS5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTY2FsZVF1ZXN0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBxdWVzdGlvblRleHQ6IHN0cmluZztcbiAgICBtaW5WYWx1ZTogU2NhbGVRdWVzdGlvbi5TY2FsZVZhbHVlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBtYXhWYWx1ZTogU2NhbGVRdWVzdGlvbi5TY2FsZVZhbHVlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uc3VydmV5LlNjYWxlUXVlc3Rpb24uU2NhbGVWYWx1ZVxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIFNjYWxlVmFsdWUgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIGlkID0gJ29uZGV3by5zdXJ2ZXkuU2NhbGVRdWVzdGlvbi5TY2FsZVZhbHVlJztcblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2NhbGVWYWx1ZSgpO1xuICAgICAgU2NhbGVWYWx1ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU2NhbGVWYWx1ZSkge1xuICAgICAgX2luc3RhbmNlLnZhbHVlID0gX2luc3RhbmNlLnZhbHVlIHx8IDA7XG4gICAgICBfaW5zdGFuY2UubGFiZWwgPSBfaW5zdGFuY2UubGFiZWwgfHwgJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIF9pbnN0YW5jZTogU2NhbGVWYWx1ZSxcbiAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICkge1xuICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIF9pbnN0YW5jZS52YWx1ZSA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBfaW5zdGFuY2UubGFiZWwgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFNjYWxlVmFsdWUucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICAgIF9pbnN0YW5jZTogU2NhbGVWYWx1ZSxcbiAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICkge1xuICAgICAgaWYgKF9pbnN0YW5jZS52YWx1ZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlSW50MzIoMSwgX2luc3RhbmNlLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UubGFiZWwpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UubGFiZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbGFiZWw6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFNjYWxlVmFsdWUgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNjYWxlVmFsdWUuQXNPYmplY3Q+KSB7XG4gICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICB0aGlzLnZhbHVlID0gX3ZhbHVlLnZhbHVlO1xuICAgICAgdGhpcy5sYWJlbCA9IF92YWx1ZS5sYWJlbDtcbiAgICAgIFNjYWxlVmFsdWUucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgIH1cbiAgICBzZXQgbGFiZWwodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgU2NhbGVWYWx1ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgKi9cbiAgICB0b09iamVjdCgpOiBTY2FsZVZhbHVlLkFzT2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBsYWJlbDogdGhpcy5sYWJlbFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgKi9cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgKi9cbiAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICApOiBTY2FsZVZhbHVlLkFzUHJvdG9idWZKU09OIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBsYWJlbDogdGhpcy5sYWJlbFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0IG1vZHVsZSBTY2FsZVZhbHVlIHtcbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU2NhbGVWYWx1ZVxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgICAgdmFsdWU6IG51bWJlcjtcbiAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU2NhbGVWYWx1ZVxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgdmFsdWU6IG51bWJlcjtcbiAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnN1cnZleS5TaW5nbGVQYXJhbWV0ZXJRdWVzdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uc3VydmV5LlNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24oKTtcbiAgICBTaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uKSB7XG4gICAgX2luc3RhbmNlLnF1ZXN0aW9uVGV4dCA9IF9pbnN0YW5jZS5xdWVzdGlvblRleHQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnBhcmFtZXRlclR5cGUgPSBfaW5zdGFuY2UucGFyYW1ldGVyVHlwZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5xdWVzdGlvblRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJhbWV0ZXJUeXBlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnF1ZXN0aW9uVGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucXVlc3Rpb25UZXh0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJhbWV0ZXJUeXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5wYXJhbWV0ZXJUeXBlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9xdWVzdGlvblRleHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyYW1ldGVyVHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucXVlc3Rpb25UZXh0ID0gX3ZhbHVlLnF1ZXN0aW9uVGV4dDtcbiAgICB0aGlzLnBhcmFtZXRlclR5cGUgPSBfdmFsdWUucGFyYW1ldGVyVHlwZTtcbiAgICBTaW5nbGVQYXJhbWV0ZXJRdWVzdGlvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHF1ZXN0aW9uVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9xdWVzdGlvblRleHQ7XG4gIH1cbiAgc2V0IHF1ZXN0aW9uVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcXVlc3Rpb25UZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmFtZXRlclR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVyVHlwZTtcbiAgfVxuICBzZXQgcGFyYW1ldGVyVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVyVHlwZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb25UZXh0OiB0aGlzLnF1ZXN0aW9uVGV4dCxcbiAgICAgIHBhcmFtZXRlclR5cGU6IHRoaXMucGFyYW1ldGVyVHlwZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb25UZXh0OiB0aGlzLnF1ZXN0aW9uVGV4dCxcbiAgICAgIHBhcmFtZXRlclR5cGU6IHRoaXMucGFyYW1ldGVyVHlwZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2luZ2xlUGFyYW1ldGVyUXVlc3Rpb24ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNpbmdsZVBhcmFtZXRlclF1ZXN0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBxdWVzdGlvblRleHQ6IHN0cmluZztcbiAgICBwYXJhbWV0ZXJUeXBlOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU2luZ2xlUGFyYW1ldGVyUXVlc3Rpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHF1ZXN0aW9uVGV4dDogc3RyaW5nO1xuICAgIHBhcmFtZXRlclR5cGU6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zdXJ2ZXkuTXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvblxuICovXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zdXJ2ZXkuTXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24oKTtcbiAgICBNdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbikge1xuICAgIF9pbnN0YW5jZS5xdWVzdGlvblRleHQgPSBfaW5zdGFuY2UucXVlc3Rpb25UZXh0IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wYXJhbWV0ZXJUeXBlID0gX2luc3RhbmNlLnBhcmFtZXRlclR5cGUgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBNdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5xdWVzdGlvblRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJhbWV0ZXJUeXBlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5xdWVzdGlvblRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnF1ZXN0aW9uVGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGFyYW1ldGVyVHlwZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UucGFyYW1ldGVyVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcXVlc3Rpb25UZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmFtZXRlclR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5xdWVzdGlvblRleHQgPSBfdmFsdWUucXVlc3Rpb25UZXh0O1xuICAgIHRoaXMucGFyYW1ldGVyVHlwZSA9IF92YWx1ZS5wYXJhbWV0ZXJUeXBlO1xuICAgIE11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBxdWVzdGlvblRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlc3Rpb25UZXh0O1xuICB9XG4gIHNldCBxdWVzdGlvblRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3F1ZXN0aW9uVGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXJhbWV0ZXJUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtZXRlclR5cGU7XG4gIH1cbiAgc2V0IHBhcmFtZXRlclR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcmFtZXRlclR5cGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBNdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVzdGlvblRleHQ6IHRoaXMucXVlc3Rpb25UZXh0LFxuICAgICAgcGFyYW1ldGVyVHlwZTogdGhpcy5wYXJhbWV0ZXJUeXBlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTXVsdGlwbGVQYXJhbWV0ZXJRdWVzdGlvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0aW9uVGV4dDogdGhpcy5xdWVzdGlvblRleHQsXG4gICAgICBwYXJhbWV0ZXJUeXBlOiB0aGlzLnBhcmFtZXRlclR5cGVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb24ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE11bHRpcGxlUGFyYW1ldGVyUXVlc3Rpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHF1ZXN0aW9uVGV4dDogc3RyaW5nO1xuICAgIHBhcmFtZXRlclR5cGU6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBNdWx0aXBsZVBhcmFtZXRlclF1ZXN0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBxdWVzdGlvblRleHQ6IHN0cmluZztcbiAgICBwYXJhbWV0ZXJUeXBlOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uc3VydmV5LkNob2ljZVxuICovXG5leHBvcnQgY2xhc3MgQ2hvaWNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnN1cnZleS5DaG9pY2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDaG9pY2UoKTtcbiAgICBDaG9pY2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDaG9pY2UpIHtcbiAgICBfaW5zdGFuY2Uuc3lub255bXMgPSBfaW5zdGFuY2Uuc3lub255bXMgfHwgW107XG4gICAgX2luc3RhbmNlLmZvbGxvd1VwUXVlc3Rpb24gPSBfaW5zdGFuY2UuZm9sbG93VXBRdWVzdGlvbiB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnZhbHVlID0gX2luc3RhbmNlLnZhbHVlIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKF9pbnN0YW5jZTogQ2hvaWNlLCBfcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2Uuc3lub255bXMgPSBfaW5zdGFuY2Uuc3lub255bXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9sbG93VXBRdWVzdGlvbiA9IG5ldyBRdWVzdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZm9sbG93VXBRdWVzdGlvbixcbiAgICAgICAgICAgIFF1ZXN0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UudmFsdWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENob2ljZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IENob2ljZSwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zeW5vbnltcyAmJiBfaW5zdGFuY2Uuc3lub255bXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLnN5bm9ueW1zKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb2xsb3dVcFF1ZXN0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmZvbGxvd1VwUXVlc3Rpb24gYXMgYW55LFxuICAgICAgICBRdWVzdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS52YWx1ZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N5bm9ueW1zOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfZm9sbG93VXBRdWVzdGlvbj86IFF1ZXN0aW9uO1xuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ2hvaWNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENob2ljZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zeW5vbnltcyA9IChfdmFsdWUuc3lub255bXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5mb2xsb3dVcFF1ZXN0aW9uID0gX3ZhbHVlLmZvbGxvd1VwUXVlc3Rpb25cbiAgICAgID8gbmV3IFF1ZXN0aW9uKF92YWx1ZS5mb2xsb3dVcFF1ZXN0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IF92YWx1ZS52YWx1ZTtcbiAgICBDaG9pY2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzeW5vbnltcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3N5bm9ueW1zO1xuICB9XG4gIHNldCBzeW5vbnltcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zeW5vbnltcyA9IHZhbHVlO1xuICB9XG4gIGdldCBmb2xsb3dVcFF1ZXN0aW9uKCk6IFF1ZXN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9sbG93VXBRdWVzdGlvbjtcbiAgfVxuICBzZXQgZm9sbG93VXBRdWVzdGlvbih2YWx1ZTogUXVlc3Rpb24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mb2xsb3dVcFF1ZXN0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDaG9pY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2hvaWNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3lub255bXM6ICh0aGlzLnN5bm9ueW1zIHx8IFtdKS5zbGljZSgpLFxuICAgICAgZm9sbG93VXBRdWVzdGlvbjogdGhpcy5mb2xsb3dVcFF1ZXN0aW9uXG4gICAgICAgID8gdGhpcy5mb2xsb3dVcFF1ZXN0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENob2ljZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN5bm9ueW1zOiAodGhpcy5zeW5vbnltcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGZvbGxvd1VwUXVlc3Rpb246IHRoaXMuZm9sbG93VXBRdWVzdGlvblxuICAgICAgICA/IHRoaXMuZm9sbG93VXBRdWVzdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2hvaWNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDaG9pY2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHN5bm9ueW1zOiBzdHJpbmdbXTtcbiAgICBmb2xsb3dVcFF1ZXN0aW9uPzogUXVlc3Rpb24uQXNPYmplY3Q7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDaG9pY2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHN5bm9ueW1zOiBzdHJpbmdbXTtcbiAgICBmb2xsb3dVcFF1ZXN0aW9uOiBRdWVzdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zdXJ2ZXkuQW5zd2VyXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXIgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uc3VydmV5LkFuc3dlcic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFuc3dlcigpO1xuICAgIEFuc3dlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFuc3dlcikge1xuICAgIF9pbnN0YW5jZS5xdWVzdGlvbk5yID0gX2luc3RhbmNlLnF1ZXN0aW9uTnIgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5zZXNzaW9uSWQgPSBfaW5zdGFuY2Uuc2Vzc2lvbklkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5hbnN3ZXJUZXh0ID0gX2luc3RhbmNlLmFuc3dlclRleHQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmFuc3dlclBhcmFtZXRlciA9IF9pbnN0YW5jZS5hbnN3ZXJQYXJhbWV0ZXIgfHwgJyc7XG4gICAgX2luc3RhbmNlLmFuc3dlclBhcmFtZXRlck9yaWdpbmFsID0gX2luc3RhbmNlLmFuc3dlclBhcmFtZXRlck9yaWdpbmFsIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKF9pbnN0YW5jZTogQW5zd2VyLCBfcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5xdWVzdGlvbk5yID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uSWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5hbnN3ZXJUZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuYW5zd2VyUGFyYW1ldGVyID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuYW5zd2VyUGFyYW1ldGVyT3JpZ2luYWwgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5hbm9ueW1vdXMgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UudXNlckluZm9ybWF0aW9uID0gbmV3IEFuc3dlci5Vc2VySW5mbygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudXNlckluZm9ybWF0aW9uLFxuICAgICAgICAgICAgQW5zd2VyLlVzZXJJbmZvLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBbnN3ZXIucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBBbnN3ZXIsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UucXVlc3Rpb25Ocikge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDEsIF9pbnN0YW5jZS5xdWVzdGlvbk5yKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zZXNzaW9uSWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnNlc3Npb25JZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYW5zd2VyVGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UuYW5zd2VyVGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYW5zd2VyUGFyYW1ldGVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS5hbnN3ZXJQYXJhbWV0ZXIpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFuc3dlclBhcmFtZXRlck9yaWdpbmFsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS5hbnN3ZXJQYXJhbWV0ZXJPcmlnaW5hbCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYW5vbnltb3VzIHx8IF9pbnN0YW5jZS5hbm9ueW1vdXMgPT09IGZhbHNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg3LCBfaW5zdGFuY2UuYW5vbnltb3VzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VySW5mb3JtYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UudXNlckluZm9ybWF0aW9uIGFzIGFueSxcbiAgICAgICAgQW5zd2VyLlVzZXJJbmZvLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3F1ZXN0aW9uTnI6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Fuc3dlclRleHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfYW5zd2VyUGFyYW1ldGVyOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Fuc3dlclBhcmFtZXRlck9yaWdpbmFsOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Fub255bW91czogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdXNlckluZm9ybWF0aW9uPzogQW5zd2VyLlVzZXJJbmZvO1xuXG4gIHByaXZhdGUgX2lzQW5vbnltb3VzOiBBbnN3ZXIuSXNBbm9ueW1vdXNDYXNlID0gQW5zd2VyLklzQW5vbnltb3VzQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQW5zd2VyIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFuc3dlci5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5xdWVzdGlvbk5yID0gX3ZhbHVlLnF1ZXN0aW9uTnI7XG4gICAgdGhpcy5zZXNzaW9uSWQgPSBfdmFsdWUuc2Vzc2lvbklkO1xuICAgIHRoaXMuYW5zd2VyVGV4dCA9IF92YWx1ZS5hbnN3ZXJUZXh0O1xuICAgIHRoaXMuYW5zd2VyUGFyYW1ldGVyID0gX3ZhbHVlLmFuc3dlclBhcmFtZXRlcjtcbiAgICB0aGlzLmFuc3dlclBhcmFtZXRlck9yaWdpbmFsID0gX3ZhbHVlLmFuc3dlclBhcmFtZXRlck9yaWdpbmFsO1xuICAgIHRoaXMuYW5vbnltb3VzID0gX3ZhbHVlLmFub255bW91cztcbiAgICB0aGlzLnVzZXJJbmZvcm1hdGlvbiA9IF92YWx1ZS51c2VySW5mb3JtYXRpb25cbiAgICAgID8gbmV3IEFuc3dlci5Vc2VySW5mbyhfdmFsdWUudXNlckluZm9ybWF0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgQW5zd2VyLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcXVlc3Rpb25OcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9xdWVzdGlvbk5yO1xuICB9XG4gIHNldCBxdWVzdGlvbk5yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdWVzdGlvbk5yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlc3Npb25JZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uSWQ7XG4gIH1cbiAgc2V0IHNlc3Npb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFuc3dlclRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYW5zd2VyVGV4dDtcbiAgfVxuICBzZXQgYW5zd2VyVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYW5zd2VyVGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBhbnN3ZXJQYXJhbWV0ZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYW5zd2VyUGFyYW1ldGVyO1xuICB9XG4gIHNldCBhbnN3ZXJQYXJhbWV0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Fuc3dlclBhcmFtZXRlciA9IHZhbHVlO1xuICB9XG4gIGdldCBhbnN3ZXJQYXJhbWV0ZXJPcmlnaW5hbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hbnN3ZXJQYXJhbWV0ZXJPcmlnaW5hbDtcbiAgfVxuICBzZXQgYW5zd2VyUGFyYW1ldGVyT3JpZ2luYWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Fuc3dlclBhcmFtZXRlck9yaWdpbmFsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFub255bW91cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYW5vbnltb3VzO1xuICB9XG4gIHNldCBhbm9ueW1vdXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdXNlckluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faXNBbm9ueW1vdXMgPSBBbnN3ZXIuSXNBbm9ueW1vdXNDYXNlLmFub255bW91cztcbiAgICB9XG4gICAgdGhpcy5fYW5vbnltb3VzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZXJJbmZvcm1hdGlvbigpOiBBbnN3ZXIuVXNlckluZm8gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91c2VySW5mb3JtYXRpb247XG4gIH1cbiAgc2V0IHVzZXJJbmZvcm1hdGlvbih2YWx1ZTogQW5zd2VyLlVzZXJJbmZvIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Fub255bW91cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lzQW5vbnltb3VzID0gQW5zd2VyLklzQW5vbnltb3VzQ2FzZS51c2VySW5mb3JtYXRpb247XG4gICAgfVxuICAgIHRoaXMuX3VzZXJJbmZvcm1hdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBpc0Fub255bW91cygpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBbm9ueW1vdXM7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQW5zd2VyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEFuc3dlci5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0aW9uTnI6IHRoaXMucXVlc3Rpb25OcixcbiAgICAgIHNlc3Npb25JZDogdGhpcy5zZXNzaW9uSWQsXG4gICAgICBhbnN3ZXJUZXh0OiB0aGlzLmFuc3dlclRleHQsXG4gICAgICBhbnN3ZXJQYXJhbWV0ZXI6IHRoaXMuYW5zd2VyUGFyYW1ldGVyLFxuICAgICAgYW5zd2VyUGFyYW1ldGVyT3JpZ2luYWw6IHRoaXMuYW5zd2VyUGFyYW1ldGVyT3JpZ2luYWwsXG4gICAgICBhbm9ueW1vdXM6IHRoaXMuYW5vbnltb3VzLFxuICAgICAgdXNlckluZm9ybWF0aW9uOiB0aGlzLnVzZXJJbmZvcm1hdGlvblxuICAgICAgICA/IHRoaXMudXNlckluZm9ybWF0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBbnN3ZXIuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVzdGlvbk5yOiB0aGlzLnF1ZXN0aW9uTnIsXG4gICAgICBzZXNzaW9uSWQ6IHRoaXMuc2Vzc2lvbklkLFxuICAgICAgYW5zd2VyVGV4dDogdGhpcy5hbnN3ZXJUZXh0LFxuICAgICAgYW5zd2VyUGFyYW1ldGVyOiB0aGlzLmFuc3dlclBhcmFtZXRlcixcbiAgICAgIGFuc3dlclBhcmFtZXRlck9yaWdpbmFsOiB0aGlzLmFuc3dlclBhcmFtZXRlck9yaWdpbmFsLFxuICAgICAgYW5vbnltb3VzOiB0aGlzLmFub255bW91cyxcbiAgICAgIHVzZXJJbmZvcm1hdGlvbjogdGhpcy51c2VySW5mb3JtYXRpb25cbiAgICAgICAgPyB0aGlzLnVzZXJJbmZvcm1hdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFuc3dlciB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQW5zd2VyXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBxdWVzdGlvbk5yOiBzdHJpbmc7XG4gICAgc2Vzc2lvbklkOiBzdHJpbmc7XG4gICAgYW5zd2VyVGV4dDogc3RyaW5nO1xuICAgIGFuc3dlclBhcmFtZXRlcjogc3RyaW5nO1xuICAgIGFuc3dlclBhcmFtZXRlck9yaWdpbmFsOiBzdHJpbmc7XG4gICAgYW5vbnltb3VzOiBib29sZWFuO1xuICAgIHVzZXJJbmZvcm1hdGlvbj86IEFuc3dlci5Vc2VySW5mby5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBbnN3ZXJcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHF1ZXN0aW9uTnI6IHN0cmluZztcbiAgICBzZXNzaW9uSWQ6IHN0cmluZztcbiAgICBhbnN3ZXJUZXh0OiBzdHJpbmc7XG4gICAgYW5zd2VyUGFyYW1ldGVyOiBzdHJpbmc7XG4gICAgYW5zd2VyUGFyYW1ldGVyT3JpZ2luYWw6IHN0cmluZztcbiAgICBhbm9ueW1vdXM6IGJvb2xlYW47XG4gICAgdXNlckluZm9ybWF0aW9uOiBBbnN3ZXIuVXNlckluZm8uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG4gIGV4cG9ydCBlbnVtIElzQW5vbnltb3VzQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgYW5vbnltb3VzID0gMSxcbiAgICB1c2VySW5mb3JtYXRpb24gPSAyXG4gIH1cbiAgLyoqXG4gICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zdXJ2ZXkuQW5zd2VyLlVzZXJJbmZvXG4gICAqL1xuICBleHBvcnQgY2xhc3MgVXNlckluZm8gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIGlkID0gJ29uZGV3by5zdXJ2ZXkuQW5zd2VyLlVzZXJJbmZvJztcblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVXNlckluZm8oKTtcbiAgICAgIFVzZXJJbmZvLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBVc2VySW5mbykge1xuICAgICAgX2luc3RhbmNlLmZpcnN0TmFtZSA9IF9pbnN0YW5jZS5maXJzdE5hbWUgfHwgJyc7XG4gICAgICBfaW5zdGFuY2UubGFzdE5hbWUgPSBfaW5zdGFuY2UubGFzdE5hbWUgfHwgJyc7XG4gICAgICBfaW5zdGFuY2UucGhvbmVOdW1iZXIgPSBfaW5zdGFuY2UucGhvbmVOdW1iZXIgfHwgJyc7XG4gICAgICBfaW5zdGFuY2Uuc2Vzc2lvbklkID0gX2luc3RhbmNlLnNlc3Npb25JZCB8fCAnJztcbiAgICAgIF9pbnN0YW5jZS51c2VySWQgPSBfaW5zdGFuY2UudXNlcklkIHx8ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IFVzZXJJbmZvLFxuICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgX2luc3RhbmNlLmZpcnN0TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgX2luc3RhbmNlLmxhc3ROYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBfaW5zdGFuY2UucGhvbmVOdW1iZXIgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uSWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIF9pbnN0YW5jZS51c2VySWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFVzZXJJbmZvLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBVc2VySW5mbywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICBpZiAoX2luc3RhbmNlLmZpcnN0TmFtZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5maXJzdE5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5sYXN0TmFtZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5sYXN0TmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLnBob25lTnVtYmVyKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnBob25lTnVtYmVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvbklkKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLnNlc3Npb25JZCk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLnVzZXJJZCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS51c2VySWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2ZpcnN0TmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2xhc3ROYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGhvbmVOdW1iZXI6IHN0cmluZztcbiAgICBwcml2YXRlIF9zZXNzaW9uSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIF91c2VySWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFVzZXJJbmZvIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxVc2VySW5mby5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMuZmlyc3ROYW1lID0gX3ZhbHVlLmZpcnN0TmFtZTtcbiAgICAgIHRoaXMubGFzdE5hbWUgPSBfdmFsdWUubGFzdE5hbWU7XG4gICAgICB0aGlzLnBob25lTnVtYmVyID0gX3ZhbHVlLnBob25lTnVtYmVyO1xuICAgICAgdGhpcy5zZXNzaW9uSWQgPSBfdmFsdWUuc2Vzc2lvbklkO1xuICAgICAgdGhpcy51c2VySWQgPSBfdmFsdWUudXNlcklkO1xuICAgICAgVXNlckluZm8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgZmlyc3ROYW1lKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5fZmlyc3ROYW1lO1xuICAgIH1cbiAgICBzZXQgZmlyc3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2ZpcnN0TmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbGFzdE5hbWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl9sYXN0TmFtZTtcbiAgICB9XG4gICAgc2V0IGxhc3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2xhc3ROYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBwaG9uZU51bWJlcigpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX3Bob25lTnVtYmVyO1xuICAgIH1cbiAgICBzZXQgcGhvbmVOdW1iZXIodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5fcGhvbmVOdW1iZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHNlc3Npb25JZCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25JZDtcbiAgICB9XG4gICAgc2V0IHNlc3Npb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLl9zZXNzaW9uSWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHVzZXJJZCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgICB9XG4gICAgc2V0IHVzZXJJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLl91c2VySWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgVXNlckluZm8uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAgICovXG4gICAgdG9PYmplY3QoKTogVXNlckluZm8uQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlyc3ROYW1lOiB0aGlzLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IHRoaXMubGFzdE5hbWUsXG4gICAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgICBzZXNzaW9uSWQ6IHRoaXMuc2Vzc2lvbklkLFxuICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAqL1xuICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICk6IFVzZXJJbmZvLkFzUHJvdG9idWZKU09OIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpcnN0TmFtZTogdGhpcy5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiB0aGlzLmxhc3ROYW1lLFxuICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5waG9uZU51bWJlcixcbiAgICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0IG1vZHVsZSBVc2VySW5mbyB7XG4gICAgLyoqXG4gICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFVzZXJJbmZvXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgICBwaG9uZU51bWJlcjogc3RyaW5nO1xuICAgICAgc2Vzc2lvbklkOiBzdHJpbmc7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBVc2VySW5mb1xuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgICAgcGhvbmVOdW1iZXI6IHN0cmluZztcbiAgICAgIHNlc3Npb25JZDogc3RyaW5nO1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnN1cnZleS5DcmVhdGVTdXJ2ZXlSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDcmVhdGVTdXJ2ZXlSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnN1cnZleS5DcmVhdGVTdXJ2ZXlSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ3JlYXRlU3VydmV5UmVxdWVzdCgpO1xuICAgIENyZWF0ZVN1cnZleVJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDcmVhdGVTdXJ2ZXlSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnN1cnZleSA9IF9pbnN0YW5jZS5zdXJ2ZXkgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ3JlYXRlU3VydmV5UmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3VydmV5ID0gbmV3IFN1cnZleSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3VydmV5LFxuICAgICAgICAgICAgU3VydmV5LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDcmVhdGVTdXJ2ZXlSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ3JlYXRlU3VydmV5UmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zdXJ2ZXkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2Uuc3VydmV5IGFzIGFueSxcbiAgICAgICAgU3VydmV5LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N1cnZleT86IFN1cnZleTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENyZWF0ZVN1cnZleVJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q3JlYXRlU3VydmV5UmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zdXJ2ZXkgPSBfdmFsdWUuc3VydmV5ID8gbmV3IFN1cnZleShfdmFsdWUuc3VydmV5KSA6IHVuZGVmaW5lZDtcbiAgICBDcmVhdGVTdXJ2ZXlSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc3VydmV5KCk6IFN1cnZleSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cnZleTtcbiAgfVxuICBzZXQgc3VydmV5KHZhbHVlOiBTdXJ2ZXkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdXJ2ZXkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDcmVhdGVTdXJ2ZXlSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENyZWF0ZVN1cnZleVJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzdXJ2ZXk6IHRoaXMuc3VydmV5ID8gdGhpcy5zdXJ2ZXkudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENyZWF0ZVN1cnZleVJlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzdXJ2ZXk6IHRoaXMuc3VydmV5ID8gdGhpcy5zdXJ2ZXkudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDcmVhdGVTdXJ2ZXlSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDcmVhdGVTdXJ2ZXlSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzdXJ2ZXk/OiBTdXJ2ZXkuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ3JlYXRlU3VydmV5UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3VydmV5OiBTdXJ2ZXkuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnN1cnZleS5HZXRTdXJ2ZXlSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBHZXRTdXJ2ZXlSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnN1cnZleS5HZXRTdXJ2ZXlSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0U3VydmV5UmVxdWVzdCgpO1xuICAgIEdldFN1cnZleVJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBHZXRTdXJ2ZXlSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnN1cnZleUlkID0gX2luc3RhbmNlLnN1cnZleUlkIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogR2V0U3VydmV5UmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3VydmV5SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldFN1cnZleVJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBHZXRTdXJ2ZXlSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnN1cnZleUlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5zdXJ2ZXlJZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3VydmV5SWQ6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdldFN1cnZleVJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0U3VydmV5UmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zdXJ2ZXlJZCA9IF92YWx1ZS5zdXJ2ZXlJZDtcbiAgICBHZXRTdXJ2ZXlSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc3VydmV5SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3VydmV5SWQ7XG4gIH1cbiAgc2V0IHN1cnZleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdXJ2ZXlJZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdldFN1cnZleVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogR2V0U3VydmV5UmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1cnZleUlkOiB0aGlzLnN1cnZleUlkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogR2V0U3VydmV5UmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1cnZleUlkOiB0aGlzLnN1cnZleUlkXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRTdXJ2ZXlSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHZXRTdXJ2ZXlSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzdXJ2ZXlJZDogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEdldFN1cnZleVJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHN1cnZleUlkOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uc3VydmV5LlVwZGF0ZVN1cnZleVJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIFVwZGF0ZVN1cnZleVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uc3VydmV5LlVwZGF0ZVN1cnZleVJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBVcGRhdGVTdXJ2ZXlSZXF1ZXN0KCk7XG4gICAgVXBkYXRlU3VydmV5UmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFVwZGF0ZVN1cnZleVJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uuc3VydmV5ID0gX2luc3RhbmNlLnN1cnZleSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnVwZGF0ZU1hc2sgPSBfaW5zdGFuY2UudXBkYXRlTWFzayB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBVcGRhdGVTdXJ2ZXlSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdXJ2ZXkgPSBuZXcgU3VydmV5KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdXJ2ZXksXG4gICAgICAgICAgICBTdXJ2ZXkuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS51cGRhdGVNYXNrID0gbmV3IGdvb2dsZVByb3RvYnVmMDA0LkZpZWxkTWFzaygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudXBkYXRlTWFzayxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDA0LkZpZWxkTWFzay5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVXBkYXRlU3VydmV5UmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFVwZGF0ZVN1cnZleVJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc3VydmV5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnN1cnZleSBhcyBhbnksXG4gICAgICAgIFN1cnZleS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51cGRhdGVNYXNrKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLnVwZGF0ZU1hc2sgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwNC5GaWVsZE1hc2suc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3VydmV5PzogU3VydmV5O1xuICBwcml2YXRlIF91cGRhdGVNYXNrPzogZ29vZ2xlUHJvdG9idWYwMDQuRmllbGRNYXNrO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVXBkYXRlU3VydmV5UmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxVcGRhdGVTdXJ2ZXlSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnN1cnZleSA9IF92YWx1ZS5zdXJ2ZXkgPyBuZXcgU3VydmV5KF92YWx1ZS5zdXJ2ZXkpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudXBkYXRlTWFzayA9IF92YWx1ZS51cGRhdGVNYXNrXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwNC5GaWVsZE1hc2soX3ZhbHVlLnVwZGF0ZU1hc2spXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBVcGRhdGVTdXJ2ZXlSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc3VydmV5KCk6IFN1cnZleSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cnZleTtcbiAgfVxuICBzZXQgc3VydmV5KHZhbHVlOiBTdXJ2ZXkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdXJ2ZXkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXBkYXRlTWFzaygpOiBnb29nbGVQcm90b2J1ZjAwNC5GaWVsZE1hc2sgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVNYXNrO1xuICB9XG4gIHNldCB1cGRhdGVNYXNrKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwNC5GaWVsZE1hc2sgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91cGRhdGVNYXNrID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVXBkYXRlU3VydmV5UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBVcGRhdGVTdXJ2ZXlSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VydmV5OiB0aGlzLnN1cnZleSA/IHRoaXMuc3VydmV5LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB1cGRhdGVNYXNrOiB0aGlzLnVwZGF0ZU1hc2sgPyB0aGlzLnVwZGF0ZU1hc2sudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFVwZGF0ZVN1cnZleVJlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzdXJ2ZXk6IHRoaXMuc3VydmV5ID8gdGhpcy5zdXJ2ZXkudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgdXBkYXRlTWFzazogdGhpcy51cGRhdGVNYXNrXG4gICAgICAgID8gdGhpcy51cGRhdGVNYXNrLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVXBkYXRlU3VydmV5UmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVXBkYXRlU3VydmV5UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc3VydmV5PzogU3VydmV5LkFzT2JqZWN0O1xuICAgIHVwZGF0ZU1hc2s/OiBnb29nbGVQcm90b2J1ZjAwNC5GaWVsZE1hc2suQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVXBkYXRlU3VydmV5UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3VydmV5OiBTdXJ2ZXkuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHVwZGF0ZU1hc2s6IGdvb2dsZVByb3RvYnVmMDA0LkZpZWxkTWFzay5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uc3VydmV5LkRlbGV0ZVN1cnZleVJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIERlbGV0ZVN1cnZleVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uc3VydmV5LkRlbGV0ZVN1cnZleVJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBEZWxldGVTdXJ2ZXlSZXF1ZXN0KCk7XG4gICAgRGVsZXRlU3VydmV5UmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IERlbGV0ZVN1cnZleVJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uuc3VydmV5SWQgPSBfaW5zdGFuY2Uuc3VydmV5SWQgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBEZWxldGVTdXJ2ZXlSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdXJ2ZXlJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGVsZXRlU3VydmV5UmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IERlbGV0ZVN1cnZleVJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc3VydmV5SWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnN1cnZleUlkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdXJ2ZXlJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRGVsZXRlU3VydmV5UmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxEZWxldGVTdXJ2ZXlSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnN1cnZleUlkID0gX3ZhbHVlLnN1cnZleUlkO1xuICAgIERlbGV0ZVN1cnZleVJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzdXJ2ZXlJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdXJ2ZXlJZDtcbiAgfVxuICBzZXQgc3VydmV5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1cnZleUlkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGVsZXRlU3VydmV5UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBEZWxldGVTdXJ2ZXlSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VydmV5SWQ6IHRoaXMuc3VydmV5SWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBEZWxldGVTdXJ2ZXlSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VydmV5SWQ6IHRoaXMuc3VydmV5SWRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIERlbGV0ZVN1cnZleVJlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIERlbGV0ZVN1cnZleVJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHN1cnZleUlkOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRGVsZXRlU3VydmV5UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3VydmV5SWQ6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zdXJ2ZXkuR2V0U3VydmV5QW5zd2Vyc1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIEdldFN1cnZleUFuc3dlcnNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnN1cnZleS5HZXRTdXJ2ZXlBbnN3ZXJzUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldFN1cnZleUFuc3dlcnNSZXF1ZXN0KCk7XG4gICAgR2V0U3VydmV5QW5zd2Vyc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBHZXRTdXJ2ZXlBbnN3ZXJzUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5zdXJ2ZXlJZCA9IF9pbnN0YW5jZS5zdXJ2ZXlJZCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdldFN1cnZleUFuc3dlcnNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdXJ2ZXlJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25JZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnVzZXJJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLnVzZXJQaG9uZU51bWJlciA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0U3VydmV5QW5zd2Vyc1JlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBHZXRTdXJ2ZXlBbnN3ZXJzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zdXJ2ZXlJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2Uuc3VydmV5SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25JZCB8fCBfaW5zdGFuY2Uuc2Vzc2lvbklkID09PSAnJykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2Uuc2Vzc2lvbklkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VySWQgfHwgX2luc3RhbmNlLnVzZXJJZCA9PT0gJycpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnVzZXJJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudXNlclBob25lTnVtYmVyIHx8IF9pbnN0YW5jZS51c2VyUGhvbmVOdW1iZXIgPT09ICcnKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS51c2VyUGhvbmVOdW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N1cnZleUlkOiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nlc3Npb25JZDogc3RyaW5nO1xuICBwcml2YXRlIF91c2VySWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfdXNlclBob25lTnVtYmVyOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfaWRlbnRpZmllcjogR2V0U3VydmV5QW5zd2Vyc1JlcXVlc3QuSWRlbnRpZmllckNhc2UgPVxuICAgIEdldFN1cnZleUFuc3dlcnNSZXF1ZXN0LklkZW50aWZpZXJDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBHZXRTdXJ2ZXlBbnN3ZXJzUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRTdXJ2ZXlBbnN3ZXJzUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zdXJ2ZXlJZCA9IF92YWx1ZS5zdXJ2ZXlJZDtcbiAgICB0aGlzLnNlc3Npb25JZCA9IF92YWx1ZS5zZXNzaW9uSWQ7XG4gICAgdGhpcy51c2VySWQgPSBfdmFsdWUudXNlcklkO1xuICAgIHRoaXMudXNlclBob25lTnVtYmVyID0gX3ZhbHVlLnVzZXJQaG9uZU51bWJlcjtcbiAgICBHZXRTdXJ2ZXlBbnN3ZXJzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHN1cnZleUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cnZleUlkO1xuICB9XG4gIHNldCBzdXJ2ZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3VydmV5SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvbklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25JZDtcbiAgfVxuICBzZXQgc2Vzc2lvbklkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdXNlcklkID0gdGhpcy5fdXNlclBob25lTnVtYmVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faWRlbnRpZmllciA9IEdldFN1cnZleUFuc3dlcnNSZXF1ZXN0LklkZW50aWZpZXJDYXNlLnNlc3Npb25JZDtcbiAgICB9XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZXJJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gIH1cbiAgc2V0IHVzZXJJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3Nlc3Npb25JZCA9IHRoaXMuX3VzZXJQaG9uZU51bWJlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lkZW50aWZpZXIgPSBHZXRTdXJ2ZXlBbnN3ZXJzUmVxdWVzdC5JZGVudGlmaWVyQ2FzZS51c2VySWQ7XG4gICAgfVxuICAgIHRoaXMuX3VzZXJJZCA9IHZhbHVlO1xuICB9XG4gIGdldCB1c2VyUGhvbmVOdW1iZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclBob25lTnVtYmVyO1xuICB9XG4gIHNldCB1c2VyUGhvbmVOdW1iZXIodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9zZXNzaW9uSWQgPSB0aGlzLl91c2VySWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pZGVudGlmaWVyID0gR2V0U3VydmV5QW5zd2Vyc1JlcXVlc3QuSWRlbnRpZmllckNhc2UudXNlclBob25lTnVtYmVyO1xuICAgIH1cbiAgICB0aGlzLl91c2VyUGhvbmVOdW1iZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5faWRlbnRpZmllcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRTdXJ2ZXlBbnN3ZXJzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHZXRTdXJ2ZXlBbnN3ZXJzUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1cnZleUlkOiB0aGlzLnN1cnZleUlkLFxuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICB1c2VyUGhvbmVOdW1iZXI6IHRoaXMudXNlclBob25lTnVtYmVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogR2V0U3VydmV5QW5zd2Vyc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzdXJ2ZXlJZDogdGhpcy5zdXJ2ZXlJZCxcbiAgICAgIHNlc3Npb25JZDpcbiAgICAgICAgdGhpcy5zZXNzaW9uSWQgPT09IG51bGwgfHwgdGhpcy5zZXNzaW9uSWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gbnVsbFxuICAgICAgICAgIDogdGhpcy5zZXNzaW9uSWQsXG4gICAgICB1c2VySWQ6XG4gICAgICAgIHRoaXMudXNlcklkID09PSBudWxsIHx8IHRoaXMudXNlcklkID09PSB1bmRlZmluZWQgPyBudWxsIDogdGhpcy51c2VySWQsXG4gICAgICB1c2VyUGhvbmVOdW1iZXI6XG4gICAgICAgIHRoaXMudXNlclBob25lTnVtYmVyID09PSBudWxsIHx8IHRoaXMudXNlclBob25lTnVtYmVyID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IHRoaXMudXNlclBob25lTnVtYmVyXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRTdXJ2ZXlBbnN3ZXJzUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgR2V0U3VydmV5QW5zd2Vyc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHN1cnZleUlkOiBzdHJpbmc7XG4gICAgc2Vzc2lvbklkOiBzdHJpbmc7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgdXNlclBob25lTnVtYmVyOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgR2V0U3VydmV5QW5zd2Vyc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHN1cnZleUlkOiBzdHJpbmc7XG4gICAgc2Vzc2lvbklkOiBzdHJpbmcgfCBudWxsO1xuICAgIHVzZXJJZDogc3RyaW5nIHwgbnVsbDtcbiAgICB1c2VyUGhvbmVOdW1iZXI6IHN0cmluZyB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gSWRlbnRpZmllckNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHNlc3Npb25JZCA9IDEsXG4gICAgdXNlcklkID0gMixcbiAgICB1c2VyUGhvbmVOdW1iZXIgPSAzXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uc3VydmV5LkdldEFsbFN1cnZleUFuc3dlcnNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBHZXRBbGxTdXJ2ZXlBbnN3ZXJzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zdXJ2ZXkuR2V0QWxsU3VydmV5QW5zd2Vyc1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRBbGxTdXJ2ZXlBbnN3ZXJzUmVxdWVzdCgpO1xuICAgIEdldEFsbFN1cnZleUFuc3dlcnNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogR2V0QWxsU3VydmV5QW5zd2Vyc1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uuc3VydmV5SWQgPSBfaW5zdGFuY2Uuc3VydmV5SWQgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBHZXRBbGxTdXJ2ZXlBbnN3ZXJzUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3VydmV5SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldEFsbFN1cnZleUFuc3dlcnNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR2V0QWxsU3VydmV5QW5zd2Vyc1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc3VydmV5SWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnN1cnZleUlkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdXJ2ZXlJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgR2V0QWxsU3VydmV5QW5zd2Vyc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0QWxsU3VydmV5QW5zd2Vyc1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc3VydmV5SWQgPSBfdmFsdWUuc3VydmV5SWQ7XG4gICAgR2V0QWxsU3VydmV5QW5zd2Vyc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzdXJ2ZXlJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdXJ2ZXlJZDtcbiAgfVxuICBzZXQgc3VydmV5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1cnZleUlkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0QWxsU3VydmV5QW5zd2Vyc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogR2V0QWxsU3VydmV5QW5zd2Vyc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzdXJ2ZXlJZDogdGhpcy5zdXJ2ZXlJZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdldEFsbFN1cnZleUFuc3dlcnNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VydmV5SWQ6IHRoaXMuc3VydmV5SWRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldEFsbFN1cnZleUFuc3dlcnNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHZXRBbGxTdXJ2ZXlBbnN3ZXJzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc3VydmV5SWQ6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHZXRBbGxTdXJ2ZXlBbnN3ZXJzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3VydmV5SWQ6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zdXJ2ZXkuU3VydmV5QW5zd2Vyc1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlBbnN3ZXJzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uc3VydmV5LlN1cnZleUFuc3dlcnNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN1cnZleUFuc3dlcnNSZXNwb25zZSgpO1xuICAgIFN1cnZleUFuc3dlcnNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFN1cnZleUFuc3dlcnNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5zdXJ2ZXlJZCA9IF9pbnN0YW5jZS5zdXJ2ZXlJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuYW5zd2VycyA9IF9pbnN0YW5jZS5hbnN3ZXJzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU3VydmV5QW5zd2Vyc1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdXJ2ZXlJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBBbnN3ZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgIEFuc3dlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UuYW5zd2VycyA9IF9pbnN0YW5jZS5hbnN3ZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTdXJ2ZXlBbnN3ZXJzUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTdXJ2ZXlBbnN3ZXJzUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc3VydmV5SWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnN1cnZleUlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hbnN3ZXJzICYmIF9pbnN0YW5jZS5hbnN3ZXJzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmFuc3dlcnMgYXMgYW55LFxuICAgICAgICBBbnN3ZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3VydmV5SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfYW5zd2Vycz86IEFuc3dlcltdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU3VydmV5QW5zd2Vyc1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFN1cnZleUFuc3dlcnNSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zdXJ2ZXlJZCA9IF92YWx1ZS5zdXJ2ZXlJZDtcbiAgICB0aGlzLmFuc3dlcnMgPSAoX3ZhbHVlLmFuc3dlcnMgfHwgW10pLm1hcChtID0+IG5ldyBBbnN3ZXIobSkpO1xuICAgIFN1cnZleUFuc3dlcnNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHN1cnZleUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cnZleUlkO1xuICB9XG4gIHNldCBzdXJ2ZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3VydmV5SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYW5zd2VycygpOiBBbnN3ZXJbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Fuc3dlcnM7XG4gIH1cbiAgc2V0IGFuc3dlcnModmFsdWU6IEFuc3dlcltdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYW5zd2VycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN1cnZleUFuc3dlcnNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTdXJ2ZXlBbnN3ZXJzUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzdXJ2ZXlJZDogdGhpcy5zdXJ2ZXlJZCxcbiAgICAgIGFuc3dlcnM6ICh0aGlzLmFuc3dlcnMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTdXJ2ZXlBbnN3ZXJzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzdXJ2ZXlJZDogdGhpcy5zdXJ2ZXlJZCxcbiAgICAgIGFuc3dlcnM6ICh0aGlzLmFuc3dlcnMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTdXJ2ZXlBbnN3ZXJzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFN1cnZleUFuc3dlcnNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc3VydmV5SWQ6IHN0cmluZztcbiAgICBhbnN3ZXJzPzogQW5zd2VyLkFzT2JqZWN0W107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3VydmV5QW5zd2Vyc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzdXJ2ZXlJZDogc3RyaW5nO1xuICAgIGFuc3dlcnM6IEFuc3dlci5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zdXJ2ZXkuTGlzdFN1cnZleXNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0U3VydmV5c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uc3VydmV5Lkxpc3RTdXJ2ZXlzUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTdXJ2ZXlzUmVxdWVzdCgpO1xuICAgIExpc3RTdXJ2ZXlzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RTdXJ2ZXlzUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5wYWdlVG9rZW4gPSBfaW5zdGFuY2UucGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFN1cnZleXNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWdlVG9rZW4gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTdXJ2ZXlzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTdXJ2ZXlzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFnZVRva2VuOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0U3VydmV5c1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFN1cnZleXNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhZ2VUb2tlbiA9IF92YWx1ZS5wYWdlVG9rZW47XG4gICAgTGlzdFN1cnZleXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFnZVRva2VuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VUb2tlbjtcbiAgfVxuICBzZXQgcGFnZVRva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYWdlVG9rZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0U3VydmV5c1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFN1cnZleXNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZVRva2VuOiB0aGlzLnBhZ2VUb2tlblxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RTdXJ2ZXlzUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW5cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTdXJ2ZXlzUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFN1cnZleXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYWdlVG9rZW46IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0U3VydmV5c1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhZ2VUb2tlbjogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnN1cnZleS5MaXN0U3VydmV5c1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0U3VydmV5c1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnN1cnZleS5MaXN0U3VydmV5c1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFN1cnZleXNSZXNwb25zZSgpO1xuICAgIExpc3RTdXJ2ZXlzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0U3VydmV5c1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLnN1cnZleXMgPSBfaW5zdGFuY2Uuc3VydmV5cyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFN1cnZleXNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IFN1cnZleSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgU3VydmV5LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5zdXJ2ZXlzID0gX2luc3RhbmNlLnN1cnZleXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0U3VydmV5c1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFN1cnZleXNSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zdXJ2ZXlzICYmIF9pbnN0YW5jZS5zdXJ2ZXlzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnN1cnZleXMgYXMgYW55LFxuICAgICAgICBTdXJ2ZXkuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3VydmV5cz86IFN1cnZleVtdO1xuICBwcml2YXRlIF9uZXh0UGFnZVRva2VuOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0U3VydmV5c1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTdXJ2ZXlzUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc3VydmV5cyA9IChfdmFsdWUuc3VydmV5cyB8fCBbXSkubWFwKG0gPT4gbmV3IFN1cnZleShtKSk7XG4gICAgdGhpcy5uZXh0UGFnZVRva2VuID0gX3ZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgTGlzdFN1cnZleXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHN1cnZleXMoKTogU3VydmV5W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdXJ2ZXlzO1xuICB9XG4gIHNldCBzdXJ2ZXlzKHZhbHVlOiBTdXJ2ZXlbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N1cnZleXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmV4dFBhZ2VUb2tlbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uZXh0UGFnZVRva2VuO1xuICB9XG4gIHNldCBuZXh0UGFnZVRva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uZXh0UGFnZVRva2VuID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFN1cnZleXNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0U3VydmV5c1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VydmV5czogKHRoaXMuc3VydmV5cyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIG5leHRQYWdlVG9rZW46IHRoaXMubmV4dFBhZ2VUb2tlblxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RTdXJ2ZXlzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzdXJ2ZXlzOiAodGhpcy5zdXJ2ZXlzIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKSxcbiAgICAgIG5leHRQYWdlVG9rZW46IHRoaXMubmV4dFBhZ2VUb2tlblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFN1cnZleXNSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFN1cnZleXNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc3VydmV5cz86IFN1cnZleS5Bc09iamVjdFtdO1xuICAgIG5leHRQYWdlVG9rZW46IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0U3VydmV5c1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzdXJ2ZXlzOiBTdXJ2ZXkuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgbmV4dFBhZ2VUb2tlbjogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnN1cnZleS5BZ2VudFN1cnZleVJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIEFnZW50U3VydmV5UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zdXJ2ZXkuQWdlbnRTdXJ2ZXlSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQWdlbnRTdXJ2ZXlSZXF1ZXN0KCk7XG4gICAgQWdlbnRTdXJ2ZXlSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQWdlbnRTdXJ2ZXlSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnN1cnZleUlkID0gX2luc3RhbmNlLnN1cnZleUlkIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQWdlbnRTdXJ2ZXlSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdXJ2ZXlJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWdlbnRTdXJ2ZXlSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQWdlbnRTdXJ2ZXlSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnN1cnZleUlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5zdXJ2ZXlJZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3VydmV5SWQ6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEFnZW50U3VydmV5UmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBZ2VudFN1cnZleVJlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc3VydmV5SWQgPSBfdmFsdWUuc3VydmV5SWQ7XG4gICAgQWdlbnRTdXJ2ZXlSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc3VydmV5SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3VydmV5SWQ7XG4gIH1cbiAgc2V0IHN1cnZleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdXJ2ZXlJZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFnZW50U3VydmV5UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBZ2VudFN1cnZleVJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzdXJ2ZXlJZDogdGhpcy5zdXJ2ZXlJZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEFnZW50U3VydmV5UmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1cnZleUlkOiB0aGlzLnN1cnZleUlkXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBZ2VudFN1cnZleVJlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEFnZW50U3VydmV5UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc3VydmV5SWQ6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBZ2VudFN1cnZleVJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHN1cnZleUlkOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uc3VydmV5LkFnZW50U3VydmV5UmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEFnZW50U3VydmV5UmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uc3VydmV5LkFnZW50U3VydmV5UmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBZ2VudFN1cnZleVJlc3BvbnNlKCk7XG4gICAgQWdlbnRTdXJ2ZXlSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFnZW50U3VydmV5UmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEFnZW50U3VydmV5UmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhcmVudCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWdlbnRTdXJ2ZXlSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEFnZW50U3VydmV5UmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQWdlbnRTdXJ2ZXlSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBZ2VudFN1cnZleVJlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgQWdlbnRTdXJ2ZXlSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQWdlbnRTdXJ2ZXlSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBZ2VudFN1cnZleVJlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEFnZW50U3VydmV5UmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBZ2VudFN1cnZleVJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBBZ2VudFN1cnZleVJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXJlbnQ6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBZ2VudFN1cnZleVJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYXJlbnQ6IHN0cmluZztcbiAgfVxufVxuIl19
