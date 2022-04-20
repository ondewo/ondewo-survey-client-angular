import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
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
export declare module CreateFHIRSurveyRequest {
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
        fhirQuestionnaire?: googleProtobuf006.Struct.AsProtobufJSON | null;
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
    private _surveyId?;
    private _fhirQuestionnaireResponses?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SurveyFHIRAnswersResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<SurveyFHIRAnswersResponse.AsObject>);
    get surveyId(): string | undefined;
    set surveyId(value: string | undefined);
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
export declare module SurveyFHIRAnswersResponse {
    /**
     * Standard JavaScript object representation for SurveyFHIRAnswersResponse
     */
    interface AsObject {
        surveyId?: string;
        fhirQuestionnaireResponses?: googleProtobuf006.Struct.AsObject[];
    }
    /**
     * Protobuf JSON representation for SurveyFHIRAnswersResponse
     */
    interface AsProtobufJSON {
        surveyId?: string;
        fhirQuestionnaireResponses?: googleProtobuf006.Struct.AsProtobufJSON[] | null;
    }
}
