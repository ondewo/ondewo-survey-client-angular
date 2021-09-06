import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
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
    private _surveyId?;
    private _displayName?;
    private _languageCode?;
    private _questions?;
    private _surveyInfo?;
    private _excludeSubflows?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Survey to deeply clone from
     */
    constructor(_value?: RecursivePartial<Survey.AsObject>);
    get surveyId(): string | undefined;
    set surveyId(value: string | undefined);
    get displayName(): string | undefined;
    set displayName(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get questions(): Question[] | undefined;
    set questions(value: Question[] | undefined);
    get surveyInfo(): SurveyInfo | undefined;
    set surveyInfo(value: SurveyInfo | undefined);
    get excludeSubflows(): SubFlow[] | undefined;
    set excludeSubflows(value: SubFlow[] | undefined);
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
export declare module Survey {
    /**
     * Standard JavaScript object representation for Survey
     */
    interface AsObject {
        surveyId?: string;
        displayName?: string;
        languageCode?: string;
        questions?: Question.AsObject[];
        surveyInfo?: SurveyInfo.AsObject;
        excludeSubflows?: SubFlow[];
    }
    /**
     * Protobuf JSON representation for Survey
     */
    interface AsProtobufJSON {
        surveyId?: string;
        displayName?: string;
        languageCode?: string;
        questions?: Question.AsProtobufJSON[] | null;
        surveyInfo?: SurveyInfo.AsProtobufJSON | null;
        excludeSubflows?: string[];
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
    private _legalEntity?;
    private _postalAddress?;
    private _emailAddress?;
    private _phoneNumber?;
    private _phoneHours?;
    private _expectedDuration?;
    private _purpose?;
    private _topic?;
    private _legalDisclaimer?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SurveyInfo to deeply clone from
     */
    constructor(_value?: RecursivePartial<SurveyInfo.AsObject>);
    get legalEntity(): string | undefined;
    set legalEntity(value: string | undefined);
    get postalAddress(): string | undefined;
    set postalAddress(value: string | undefined);
    get emailAddress(): string | undefined;
    set emailAddress(value: string | undefined);
    get phoneNumber(): string | undefined;
    set phoneNumber(value: string | undefined);
    get phoneHours(): string | undefined;
    set phoneHours(value: string | undefined);
    get expectedDuration(): string | undefined;
    set expectedDuration(value: string | undefined);
    get purpose(): string | undefined;
    set purpose(value: string | undefined);
    get topic(): string | undefined;
    set topic(value: string | undefined);
    get legalDisclaimer(): string | undefined;
    set legalDisclaimer(value: string | undefined);
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
export declare module SurveyInfo {
    /**
     * Standard JavaScript object representation for SurveyInfo
     */
    interface AsObject {
        legalEntity?: string;
        postalAddress?: string;
        emailAddress?: string;
        phoneNumber?: string;
        phoneHours?: string;
        expectedDuration?: string;
        purpose?: string;
        topic?: string;
        legalDisclaimer?: string;
    }
    /**
     * Protobuf JSON representation for SurveyInfo
     */
    interface AsProtobufJSON {
        legalEntity?: string;
        postalAddress?: string;
        emailAddress?: string;
        phoneNumber?: string;
        phoneHours?: string;
        expectedDuration?: string;
        purpose?: string;
        topic?: string;
        legalDisclaimer?: string;
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
export declare module Question {
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
        openQuestion?: OpenQuestion.AsProtobufJSON | null;
        singleChoiceQuestion?: SingleChoiceQuestion.AsProtobufJSON | null;
        multipleChoiceQuestion?: MultipleChoiceQuestion.AsProtobufJSON | null;
        scaleQuestion?: ScaleQuestion.AsProtobufJSON | null;
        singleParameterQuestion?: SingleParameterQuestion.AsProtobufJSON | null;
        multipleParameterQuestion?: MultipleParameterQuestion.AsProtobufJSON | null;
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
    private _questionText?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of OpenQuestion to deeply clone from
     */
    constructor(_value?: RecursivePartial<OpenQuestion.AsObject>);
    get questionText(): string | undefined;
    set questionText(value: string | undefined);
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
export declare module OpenQuestion {
    /**
     * Standard JavaScript object representation for OpenQuestion
     */
    interface AsObject {
        questionText?: string;
    }
    /**
     * Protobuf JSON representation for OpenQuestion
     */
    interface AsProtobufJSON {
        questionText?: string;
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
    private _questionText?;
    private _choices?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SingleChoiceQuestion to deeply clone from
     */
    constructor(_value?: RecursivePartial<SingleChoiceQuestion.AsObject>);
    get questionText(): string | undefined;
    set questionText(value: string | undefined);
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
export declare module SingleChoiceQuestion {
    /**
     * Standard JavaScript object representation for SingleChoiceQuestion
     */
    interface AsObject {
        questionText?: string;
        choices?: Choice.AsObject[];
    }
    /**
     * Protobuf JSON representation for SingleChoiceQuestion
     */
    interface AsProtobufJSON {
        questionText?: string;
        choices?: Choice.AsProtobufJSON[] | null;
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
    private _questionText?;
    private _choices?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MultipleChoiceQuestion to deeply clone from
     */
    constructor(_value?: RecursivePartial<MultipleChoiceQuestion.AsObject>);
    get questionText(): string | undefined;
    set questionText(value: string | undefined);
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
export declare module MultipleChoiceQuestion {
    /**
     * Standard JavaScript object representation for MultipleChoiceQuestion
     */
    interface AsObject {
        questionText?: string;
        choices?: Choice.AsObject[];
    }
    /**
     * Protobuf JSON representation for MultipleChoiceQuestion
     */
    interface AsProtobufJSON {
        questionText?: string;
        choices?: Choice.AsProtobufJSON[] | null;
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
    private _questionText?;
    private _minValue?;
    private _maxValue?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ScaleQuestion to deeply clone from
     */
    constructor(_value?: RecursivePartial<ScaleQuestion.AsObject>);
    get questionText(): string | undefined;
    set questionText(value: string | undefined);
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
export declare module ScaleQuestion {
    /**
     * Standard JavaScript object representation for ScaleQuestion
     */
    interface AsObject {
        questionText?: string;
        minValue?: ScaleQuestion.ScaleValue.AsObject;
        maxValue?: ScaleQuestion.ScaleValue.AsObject;
    }
    /**
     * Protobuf JSON representation for ScaleQuestion
     */
    interface AsProtobufJSON {
        questionText?: string;
        minValue?: ScaleQuestion.ScaleValue.AsProtobufJSON | null;
        maxValue?: ScaleQuestion.ScaleValue.AsProtobufJSON | null;
    }
    /**
     * Message implementation for ondewo.survey.ScaleValue
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
        private _value?;
        private _label?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ScaleValue to deeply clone from
         */
        constructor(_value?: RecursivePartial<ScaleValue.AsObject>);
        get value(): number | undefined;
        set value(value: number | undefined);
        get label(): string | undefined;
        set label(value: string | undefined);
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
    module ScaleValue {
        /**
         * Standard JavaScript object representation for ScaleValue
         */
        interface AsObject {
            value?: number;
            label?: string;
        }
        /**
         * Protobuf JSON representation for ScaleValue
         */
        interface AsProtobufJSON {
            value?: number;
            label?: string;
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
    private _questionText?;
    private _parameterType?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SingleParameterQuestion to deeply clone from
     */
    constructor(_value?: RecursivePartial<SingleParameterQuestion.AsObject>);
    get questionText(): string | undefined;
    set questionText(value: string | undefined);
    get parameterType(): string | undefined;
    set parameterType(value: string | undefined);
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
export declare module SingleParameterQuestion {
    /**
     * Standard JavaScript object representation for SingleParameterQuestion
     */
    interface AsObject {
        questionText?: string;
        parameterType?: string;
    }
    /**
     * Protobuf JSON representation for SingleParameterQuestion
     */
    interface AsProtobufJSON {
        questionText?: string;
        parameterType?: string;
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
    private _questionText?;
    private _parameterType?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MultipleParameterQuestion to deeply clone from
     */
    constructor(_value?: RecursivePartial<MultipleParameterQuestion.AsObject>);
    get questionText(): string | undefined;
    set questionText(value: string | undefined);
    get parameterType(): string | undefined;
    set parameterType(value: string | undefined);
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
export declare module MultipleParameterQuestion {
    /**
     * Standard JavaScript object representation for MultipleParameterQuestion
     */
    interface AsObject {
        questionText?: string;
        parameterType?: string;
    }
    /**
     * Protobuf JSON representation for MultipleParameterQuestion
     */
    interface AsProtobufJSON {
        questionText?: string;
        parameterType?: string;
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
    private _synonyms?;
    private _followUpQuestion?;
    private _value?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Choice to deeply clone from
     */
    constructor(_value?: RecursivePartial<Choice.AsObject>);
    get synonyms(): string[] | undefined;
    set synonyms(value: string[] | undefined);
    get followUpQuestion(): Question | undefined;
    set followUpQuestion(value: Question | undefined);
    get value(): string | undefined;
    set value(value: string | undefined);
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
export declare module Choice {
    /**
     * Standard JavaScript object representation for Choice
     */
    interface AsObject {
        synonyms?: string[];
        followUpQuestion?: Question.AsObject;
        value?: string;
    }
    /**
     * Protobuf JSON representation for Choice
     */
    interface AsProtobufJSON {
        synonyms?: string[];
        followUpQuestion?: Question.AsProtobufJSON | null;
        value?: string;
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
    private _questionNr?;
    private _sessionId?;
    private _answerText?;
    private _answerParameter?;
    private _answerParameterOriginal?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Answer to deeply clone from
     */
    constructor(_value?: RecursivePartial<Answer.AsObject>);
    get questionNr(): string | undefined;
    set questionNr(value: string | undefined);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    get answerText(): string | undefined;
    set answerText(value: string | undefined);
    get answerParameter(): string | undefined;
    set answerParameter(value: string | undefined);
    get answerParameterOriginal(): string | undefined;
    set answerParameterOriginal(value: string | undefined);
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
export declare module Answer {
    /**
     * Standard JavaScript object representation for Answer
     */
    interface AsObject {
        questionNr?: string;
        sessionId?: string;
        answerText?: string;
        answerParameter?: string;
        answerParameterOriginal?: string;
    }
    /**
     * Protobuf JSON representation for Answer
     */
    interface AsProtobufJSON {
        questionNr?: string;
        sessionId?: string;
        answerText?: string;
        answerParameter?: string;
        answerParameterOriginal?: string;
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
export declare module CreateSurveyRequest {
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
        survey?: Survey.AsProtobufJSON | null;
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
    private _surveyId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSurveyRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetSurveyRequest.AsObject>);
    get surveyId(): string | undefined;
    set surveyId(value: string | undefined);
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
export declare module GetSurveyRequest {
    /**
     * Standard JavaScript object representation for GetSurveyRequest
     */
    interface AsObject {
        surveyId?: string;
    }
    /**
     * Protobuf JSON representation for GetSurveyRequest
     */
    interface AsProtobufJSON {
        surveyId?: string;
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
    get updateMask(): googleProtobuf004.FieldMask | undefined;
    set updateMask(value: googleProtobuf004.FieldMask | undefined);
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
export declare module UpdateSurveyRequest {
    /**
     * Standard JavaScript object representation for UpdateSurveyRequest
     */
    interface AsObject {
        survey?: Survey.AsObject;
        updateMask?: googleProtobuf004.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdateSurveyRequest
     */
    interface AsProtobufJSON {
        survey?: Survey.AsProtobufJSON | null;
        updateMask?: googleProtobuf004.FieldMask.AsProtobufJSON | null;
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
    private _surveyId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteSurveyRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteSurveyRequest.AsObject>);
    get surveyId(): string | undefined;
    set surveyId(value: string | undefined);
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
export declare module DeleteSurveyRequest {
    /**
     * Standard JavaScript object representation for DeleteSurveyRequest
     */
    interface AsObject {
        surveyId?: string;
    }
    /**
     * Protobuf JSON representation for DeleteSurveyRequest
     */
    interface AsProtobufJSON {
        surveyId?: string;
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
    private _sessionId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSurveyAnswersRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetSurveyAnswersRequest.AsObject>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
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
export declare module GetSurveyAnswersRequest {
    /**
     * Standard JavaScript object representation for GetSurveyAnswersRequest
     */
    interface AsObject {
        sessionId?: string;
    }
    /**
     * Protobuf JSON representation for GetSurveyAnswersRequest
     */
    interface AsProtobufJSON {
        sessionId?: string;
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
    private _surveyId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAllSurveyAnswersRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAllSurveyAnswersRequest.AsObject>);
    get surveyId(): string | undefined;
    set surveyId(value: string | undefined);
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
export declare module GetAllSurveyAnswersRequest {
    /**
     * Standard JavaScript object representation for GetAllSurveyAnswersRequest
     */
    interface AsObject {
        surveyId?: string;
    }
    /**
     * Protobuf JSON representation for GetAllSurveyAnswersRequest
     */
    interface AsProtobufJSON {
        surveyId?: string;
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
    private _surveyId?;
    private _answers?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SurveyAnswersResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<SurveyAnswersResponse.AsObject>);
    get surveyId(): string | undefined;
    set surveyId(value: string | undefined);
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
export declare module SurveyAnswersResponse {
    /**
     * Standard JavaScript object representation for SurveyAnswersResponse
     */
    interface AsObject {
        surveyId?: string;
        answers?: Answer.AsObject[];
    }
    /**
     * Protobuf JSON representation for SurveyAnswersResponse
     */
    interface AsProtobufJSON {
        surveyId?: string;
        answers?: Answer.AsProtobufJSON[] | null;
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
    private _pageToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListSurveysRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListSurveysRequest.AsObject>);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
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
export declare module ListSurveysRequest {
    /**
     * Standard JavaScript object representation for ListSurveysRequest
     */
    interface AsObject {
        pageToken?: string;
    }
    /**
     * Protobuf JSON representation for ListSurveysRequest
     */
    interface AsProtobufJSON {
        pageToken?: string;
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
    private _nextPageToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListSurveysResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListSurveysResponse.AsObject>);
    get surveys(): Survey[] | undefined;
    set surveys(value: Survey[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
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
export declare module ListSurveysResponse {
    /**
     * Standard JavaScript object representation for ListSurveysResponse
     */
    interface AsObject {
        surveys?: Survey.AsObject[];
        nextPageToken?: string;
    }
    /**
     * Protobuf JSON representation for ListSurveysResponse
     */
    interface AsProtobufJSON {
        surveys?: Survey.AsProtobufJSON[] | null;
        nextPageToken?: string;
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
    private _surveyId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AgentSurveyRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<AgentSurveyRequest.AsObject>);
    get surveyId(): string | undefined;
    set surveyId(value: string | undefined);
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
export declare module AgentSurveyRequest {
    /**
     * Standard JavaScript object representation for AgentSurveyRequest
     */
    interface AsObject {
        surveyId?: string;
    }
    /**
     * Protobuf JSON representation for AgentSurveyRequest
     */
    interface AsProtobufJSON {
        surveyId?: string;
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
    private _parent?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AgentSurveyResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<AgentSurveyResponse.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
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
export declare module AgentSurveyResponse {
    /**
     * Standard JavaScript object representation for AgentSurveyResponse
     */
    interface AsObject {
        parent?: string;
    }
    /**
     * Protobuf JSON representation for AgentSurveyResponse
     */
    interface AsProtobufJSON {
        parent?: string;
    }
}