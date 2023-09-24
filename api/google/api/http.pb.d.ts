import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
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
export declare module Http {
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
export declare module HttpRule {
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
export declare module CustomHttpPattern {
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
