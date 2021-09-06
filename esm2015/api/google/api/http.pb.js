import { BinaryReader, BinaryWriter } from 'google-protobuf';
/**
 * Message implementation for google.api.Http
 */
export class Http {
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
export class HttpRule {
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
        var _a, _b, _c, _d, _e;
        return {
            selector: this.selector,
            get: (_a = this.get) !== null && _a !== void 0 ? _a : null,
            put: (_b = this.put) !== null && _b !== void 0 ? _b : null,
            post: (_c = this.post) !== null && _c !== void 0 ? _c : null,
            delete: (_d = this.delete) !== null && _d !== void 0 ? _d : null,
            patch: (_e = this.patch) !== null && _e !== void 0 ? _e : null,
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
export class CustomHttpPattern {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9nb29nbGUvYXBpL2h0dHAucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RTs7R0FFRztBQUNILE1BQU0sT0FBTyxJQUFJO0lBeUVmOzs7T0FHRztJQUNILFlBQVksTUFBd0M7UUFDbEQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLDRCQUE0QixDQUFDO1FBQ3hFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQS9FRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBZTtRQUNqQyxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3hDLFNBQVMsQ0FBQyw0QkFBNEI7WUFDcEMsU0FBUyxDQUFDLDRCQUE0QixJQUFJLEtBQUssQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywy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QUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQzs7QUF0SU0sb0JBQUUsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBnb29nbGUuYXBpLkh0dHBcbiAqL1xuZXhwb3J0IGNsYXNzIEh0dHAgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdnb29nbGUuYXBpLkh0dHAnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBIdHRwKCk7XG4gICAgSHR0cC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEh0dHApIHtcbiAgICBfaW5zdGFuY2UucnVsZXMgPSBfaW5zdGFuY2UucnVsZXMgfHwgW107XG4gICAgX2luc3RhbmNlLmZ1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb24gPVxuICAgICAgX2luc3RhbmNlLmZ1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb24gfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoX2luc3RhbmNlOiBIdHRwLCBfcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgSHR0cFJ1bGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIEh0dHBSdWxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5ydWxlcyA9IF9pbnN0YW5jZS5ydWxlcyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5mdWxseURlY29kZVJlc2VydmVkRXhwYW5zaW9uID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgSHR0cC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IEh0dHAsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UucnVsZXMgJiYgX2luc3RhbmNlLnJ1bGVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnJ1bGVzIGFzIGFueSxcbiAgICAgICAgSHR0cFJ1bGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvbikge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMiwgX2luc3RhbmNlLmZ1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb24pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3J1bGVzPzogSHR0cFJ1bGVbXTtcbiAgcHJpdmF0ZSBfZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBIdHRwIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEh0dHAuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucnVsZXMgPSAoX3ZhbHVlLnJ1bGVzIHx8IFtdKS5tYXAobSA9PiBuZXcgSHR0cFJ1bGUobSkpO1xuICAgIHRoaXMuZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvbiA9IF92YWx1ZS5mdWxseURlY29kZVJlc2VydmVkRXhwYW5zaW9uO1xuICAgIEh0dHAucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBydWxlcygpOiBIdHRwUnVsZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZXM7XG4gIH1cbiAgc2V0IHJ1bGVzKHZhbHVlOiBIdHRwUnVsZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcnVsZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvbjtcbiAgfVxuICBzZXQgZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvbih2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Z1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBIdHRwLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEh0dHAuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBydWxlczogKHRoaXMucnVsZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBmdWxseURlY29kZVJlc2VydmVkRXhwYW5zaW9uOiB0aGlzLmZ1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb25cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBIdHRwLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcnVsZXM6ICh0aGlzLnJ1bGVzIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKSxcbiAgICAgIGZ1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb246IHRoaXMuZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgSHR0cCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgSHR0cFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcnVsZXM/OiBIdHRwUnVsZS5Bc09iamVjdFtdO1xuICAgIGZ1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb24/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEh0dHBcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHJ1bGVzPzogSHR0cFJ1bGUuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvbj86IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBnb29nbGUuYXBpLkh0dHBSdWxlXG4gKi9cbmV4cG9ydCBjbGFzcyBIdHRwUnVsZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ2dvb2dsZS5hcGkuSHR0cFJ1bGUnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBIdHRwUnVsZSgpO1xuICAgIEh0dHBSdWxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogSHR0cFJ1bGUpIHtcbiAgICBfaW5zdGFuY2Uuc2VsZWN0b3IgPSBfaW5zdGFuY2Uuc2VsZWN0b3IgfHwgJyc7XG5cbiAgICBfaW5zdGFuY2UuYm9keSA9IF9pbnN0YW5jZS5ib2R5IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5yZXNwb25zZUJvZHkgPSBfaW5zdGFuY2UucmVzcG9uc2VCb2R5IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5hZGRpdGlvbmFsQmluZGluZ3MgPSBfaW5zdGFuY2UuYWRkaXRpb25hbEJpbmRpbmdzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogSHR0cFJ1bGUsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnNlbGVjdG9yID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZ2V0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UucHV0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UucG9zdCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLmRlbGV0ZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnBhdGNoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UuY3VzdG9tID0gbmV3IEN1c3RvbUh0dHBQYXR0ZXJuKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jdXN0b20sXG4gICAgICAgICAgICBDdXN0b21IdHRwUGF0dGVybi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLmJvZHkgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBfaW5zdGFuY2UucmVzcG9uc2VCb2R5ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMTEgPSBuZXcgSHR0cFJ1bGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMTEsXG4gICAgICAgICAgICBIdHRwUnVsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UuYWRkaXRpb25hbEJpbmRpbmdzID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5hZGRpdGlvbmFsQmluZGluZ3MgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMTEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgSHR0cFJ1bGUucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBIdHRwUnVsZSwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zZWxlY3Rvcikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2Uuc2VsZWN0b3IpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmdldCB8fCBfaW5zdGFuY2UuZ2V0ID09PSAnJykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuZ2V0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wdXQgfHwgX2luc3RhbmNlLnB1dCA9PT0gJycpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnB1dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucG9zdCB8fCBfaW5zdGFuY2UucG9zdCA9PT0gJycpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLnBvc3QpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRlbGV0ZSB8fCBfaW5zdGFuY2UuZGVsZXRlID09PSAnJykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg1LCBfaW5zdGFuY2UuZGVsZXRlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYXRjaCB8fCBfaW5zdGFuY2UucGF0Y2ggPT09ICcnKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDYsIF9pbnN0YW5jZS5wYXRjaCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3VzdG9tKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLmN1c3RvbSBhcyBhbnksXG4gICAgICAgIEN1c3RvbUh0dHBQYXR0ZXJuLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJvZHkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNywgX2luc3RhbmNlLmJvZHkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJlc3BvbnNlQm9keSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxMiwgX2luc3RhbmNlLnJlc3BvbnNlQm9keSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYWRkaXRpb25hbEJpbmRpbmdzICYmIF9pbnN0YW5jZS5hZGRpdGlvbmFsQmluZGluZ3MubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxMSxcbiAgICAgICAgX2luc3RhbmNlLmFkZGl0aW9uYWxCaW5kaW5ncyBhcyBhbnksXG4gICAgICAgIEh0dHBSdWxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdG9yPzogc3RyaW5nO1xuICBwcml2YXRlIF9nZXQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3B1dD86IHN0cmluZztcbiAgcHJpdmF0ZSBfcG9zdD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVsZXRlPzogc3RyaW5nO1xuICBwcml2YXRlIF9wYXRjaD86IHN0cmluZztcbiAgcHJpdmF0ZSBfY3VzdG9tPzogQ3VzdG9tSHR0cFBhdHRlcm47XG4gIHByaXZhdGUgX2JvZHk/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Jlc3BvbnNlQm9keT86IHN0cmluZztcbiAgcHJpdmF0ZSBfYWRkaXRpb25hbEJpbmRpbmdzPzogSHR0cFJ1bGVbXTtcblxuICBwcml2YXRlIF9wYXR0ZXJuOiBIdHRwUnVsZS5QYXR0ZXJuQ2FzZSA9IEh0dHBSdWxlLlBhdHRlcm5DYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBIdHRwUnVsZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxIdHRwUnVsZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zZWxlY3RvciA9IF92YWx1ZS5zZWxlY3RvcjtcbiAgICB0aGlzLmdldCA9IF92YWx1ZS5nZXQ7XG4gICAgdGhpcy5wdXQgPSBfdmFsdWUucHV0O1xuICAgIHRoaXMucG9zdCA9IF92YWx1ZS5wb3N0O1xuICAgIHRoaXMuZGVsZXRlID0gX3ZhbHVlLmRlbGV0ZTtcbiAgICB0aGlzLnBhdGNoID0gX3ZhbHVlLnBhdGNoO1xuICAgIHRoaXMuY3VzdG9tID0gX3ZhbHVlLmN1c3RvbVxuICAgICAgPyBuZXcgQ3VzdG9tSHR0cFBhdHRlcm4oX3ZhbHVlLmN1c3RvbSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYm9keSA9IF92YWx1ZS5ib2R5O1xuICAgIHRoaXMucmVzcG9uc2VCb2R5ID0gX3ZhbHVlLnJlc3BvbnNlQm9keTtcbiAgICB0aGlzLmFkZGl0aW9uYWxCaW5kaW5ncyA9IChfdmFsdWUuYWRkaXRpb25hbEJpbmRpbmdzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBIdHRwUnVsZShtKVxuICAgICk7XG4gICAgSHR0cFJ1bGUucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZWxlY3RvcigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RvcjtcbiAgfVxuICBzZXQgc2VsZWN0b3IodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NlbGVjdG9yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdldCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9nZXQ7XG4gIH1cbiAgc2V0IGdldCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3B1dCA9IHRoaXMuX3Bvc3QgPSB0aGlzLl9kZWxldGUgPSB0aGlzLl9wYXRjaCA9IHRoaXMuX2N1c3RvbSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhdHRlcm4gPSBIdHRwUnVsZS5QYXR0ZXJuQ2FzZS5nZXQ7XG4gICAgfVxuICAgIHRoaXMuX2dldCA9IHZhbHVlO1xuICB9XG4gIGdldCBwdXQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcHV0O1xuICB9XG4gIHNldCBwdXQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9nZXQgPSB0aGlzLl9wb3N0ID0gdGhpcy5fZGVsZXRlID0gdGhpcy5fcGF0Y2ggPSB0aGlzLl9jdXN0b20gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXR0ZXJuID0gSHR0cFJ1bGUuUGF0dGVybkNhc2UucHV0O1xuICAgIH1cbiAgICB0aGlzLl9wdXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcG9zdCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wb3N0O1xuICB9XG4gIHNldCBwb3N0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZ2V0ID0gdGhpcy5fcHV0ID0gdGhpcy5fZGVsZXRlID0gdGhpcy5fcGF0Y2ggPSB0aGlzLl9jdXN0b20gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXR0ZXJuID0gSHR0cFJ1bGUuUGF0dGVybkNhc2UucG9zdDtcbiAgICB9XG4gICAgdGhpcy5fcG9zdCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWxldGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG4gIHNldCBkZWxldGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9nZXQgPSB0aGlzLl9wdXQgPSB0aGlzLl9wb3N0ID0gdGhpcy5fcGF0Y2ggPSB0aGlzLl9jdXN0b20gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXR0ZXJuID0gSHR0cFJ1bGUuUGF0dGVybkNhc2UuZGVsZXRlO1xuICAgIH1cbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGF0Y2goKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0Y2g7XG4gIH1cbiAgc2V0IHBhdGNoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZ2V0ID0gdGhpcy5fcHV0ID0gdGhpcy5fcG9zdCA9IHRoaXMuX2RlbGV0ZSA9IHRoaXMuX2N1c3RvbSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhdHRlcm4gPSBIdHRwUnVsZS5QYXR0ZXJuQ2FzZS5wYXRjaDtcbiAgICB9XG4gICAgdGhpcy5fcGF0Y2ggPSB2YWx1ZTtcbiAgfVxuICBnZXQgY3VzdG9tKCk6IEN1c3RvbUh0dHBQYXR0ZXJuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tO1xuICB9XG4gIHNldCBjdXN0b20odmFsdWU6IEN1c3RvbUh0dHBQYXR0ZXJuIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2dldCA9IHRoaXMuX3B1dCA9IHRoaXMuX3Bvc3QgPSB0aGlzLl9kZWxldGUgPSB0aGlzLl9wYXRjaCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhdHRlcm4gPSBIdHRwUnVsZS5QYXR0ZXJuQ2FzZS5jdXN0b207XG4gICAgfVxuICAgIHRoaXMuX2N1c3RvbSA9IHZhbHVlO1xuICB9XG4gIGdldCBib2R5KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JvZHk7XG4gIH1cbiAgc2V0IGJvZHkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2JvZHkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVzcG9uc2VCb2R5KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlQm9keTtcbiAgfVxuICBzZXQgcmVzcG9uc2VCb2R5KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXNwb25zZUJvZHkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWRkaXRpb25hbEJpbmRpbmdzKCk6IEh0dHBSdWxlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hZGRpdGlvbmFsQmluZGluZ3M7XG4gIH1cbiAgc2V0IGFkZGl0aW9uYWxCaW5kaW5ncyh2YWx1ZTogSHR0cFJ1bGVbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FkZGl0aW9uYWxCaW5kaW5ncyA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXR0ZXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEh0dHBSdWxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEh0dHBSdWxlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0b3I6IHRoaXMuc2VsZWN0b3IsXG4gICAgICBnZXQ6IHRoaXMuZ2V0LFxuICAgICAgcHV0OiB0aGlzLnB1dCxcbiAgICAgIHBvc3Q6IHRoaXMucG9zdCxcbiAgICAgIGRlbGV0ZTogdGhpcy5kZWxldGUsXG4gICAgICBwYXRjaDogdGhpcy5wYXRjaCxcbiAgICAgIGN1c3RvbTogdGhpcy5jdXN0b20gPyB0aGlzLmN1c3RvbS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYm9keTogdGhpcy5ib2R5LFxuICAgICAgcmVzcG9uc2VCb2R5OiB0aGlzLnJlc3BvbnNlQm9keSxcbiAgICAgIGFkZGl0aW9uYWxCaW5kaW5nczogKHRoaXMuYWRkaXRpb25hbEJpbmRpbmdzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogSHR0cFJ1bGUuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RvcjogdGhpcy5zZWxlY3RvcixcbiAgICAgIGdldDogdGhpcy5nZXQgPz8gbnVsbCxcbiAgICAgIHB1dDogdGhpcy5wdXQgPz8gbnVsbCxcbiAgICAgIHBvc3Q6IHRoaXMucG9zdCA/PyBudWxsLFxuICAgICAgZGVsZXRlOiB0aGlzLmRlbGV0ZSA/PyBudWxsLFxuICAgICAgcGF0Y2g6IHRoaXMucGF0Y2ggPz8gbnVsbCxcbiAgICAgIGN1c3RvbTogdGhpcy5jdXN0b20gPyB0aGlzLmN1c3RvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBib2R5OiB0aGlzLmJvZHksXG4gICAgICByZXNwb25zZUJvZHk6IHRoaXMucmVzcG9uc2VCb2R5LFxuICAgICAgYWRkaXRpb25hbEJpbmRpbmdzOiAodGhpcy5hZGRpdGlvbmFsQmluZGluZ3MgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgIClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEh0dHBSdWxlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBIdHRwUnVsZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc2VsZWN0b3I/OiBzdHJpbmc7XG4gICAgZ2V0Pzogc3RyaW5nO1xuICAgIHB1dD86IHN0cmluZztcbiAgICBwb3N0Pzogc3RyaW5nO1xuICAgIGRlbGV0ZT86IHN0cmluZztcbiAgICBwYXRjaD86IHN0cmluZztcbiAgICBjdXN0b20/OiBDdXN0b21IdHRwUGF0dGVybi5Bc09iamVjdDtcbiAgICBib2R5Pzogc3RyaW5nO1xuICAgIHJlc3BvbnNlQm9keT86IHN0cmluZztcbiAgICBhZGRpdGlvbmFsQmluZGluZ3M/OiBIdHRwUnVsZS5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEh0dHBSdWxlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzZWxlY3Rvcj86IHN0cmluZztcbiAgICBnZXQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIHB1dD86IHN0cmluZyB8IG51bGw7XG4gICAgcG9zdD86IHN0cmluZyB8IG51bGw7XG4gICAgZGVsZXRlPzogc3RyaW5nIHwgbnVsbDtcbiAgICBwYXRjaD86IHN0cmluZyB8IG51bGw7XG4gICAgY3VzdG9tPzogQ3VzdG9tSHR0cFBhdHRlcm4uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGJvZHk/OiBzdHJpbmc7XG4gICAgcmVzcG9uc2VCb2R5Pzogc3RyaW5nO1xuICAgIGFkZGl0aW9uYWxCaW5kaW5ncz86IEh0dHBSdWxlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG4gIGV4cG9ydCBlbnVtIFBhdHRlcm5DYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBnZXQgPSAxLFxuICAgIHB1dCA9IDIsXG4gICAgcG9zdCA9IDMsXG4gICAgZGVsZXRlID0gNCxcbiAgICBwYXRjaCA9IDUsXG4gICAgY3VzdG9tID0gNlxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgZ29vZ2xlLmFwaS5DdXN0b21IdHRwUGF0dGVyblxuICovXG5leHBvcnQgY2xhc3MgQ3VzdG9tSHR0cFBhdHRlcm4gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdnb29nbGUuYXBpLkN1c3RvbUh0dHBQYXR0ZXJuJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ3VzdG9tSHR0cFBhdHRlcm4oKTtcbiAgICBDdXN0b21IdHRwUGF0dGVybi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEN1c3RvbUh0dHBQYXR0ZXJuKSB7XG4gICAgX2luc3RhbmNlLmtpbmQgPSBfaW5zdGFuY2Uua2luZCB8fCAnJztcbiAgICBfaW5zdGFuY2UucGF0aCA9IF9pbnN0YW5jZS5wYXRoIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ3VzdG9tSHR0cFBhdHRlcm4sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmtpbmQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDdXN0b21IdHRwUGF0dGVybi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEN1c3RvbUh0dHBQYXR0ZXJuLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmtpbmQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmtpbmQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2tpbmQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhdGg/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDdXN0b21IdHRwUGF0dGVybiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDdXN0b21IdHRwUGF0dGVybi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5raW5kID0gX3ZhbHVlLmtpbmQ7XG4gICAgdGhpcy5wYXRoID0gX3ZhbHVlLnBhdGg7XG4gICAgQ3VzdG9tSHR0cFBhdHRlcm4ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBraW5kKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gIH1cbiAgc2V0IGtpbmQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2tpbmQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICB9XG4gIHNldCBwYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ3VzdG9tSHR0cFBhdHRlcm4uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ3VzdG9tSHR0cFBhdHRlcm4uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiB0aGlzLmtpbmQsXG4gICAgICBwYXRoOiB0aGlzLnBhdGhcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDdXN0b21IdHRwUGF0dGVybi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IHRoaXMua2luZCxcbiAgICAgIHBhdGg6IHRoaXMucGF0aFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ3VzdG9tSHR0cFBhdHRlcm4ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEN1c3RvbUh0dHBQYXR0ZXJuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBraW5kPzogc3RyaW5nO1xuICAgIHBhdGg/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ3VzdG9tSHR0cFBhdHRlcm5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGtpbmQ/OiBzdHJpbmc7XG4gICAgcGF0aD86IHN0cmluZztcbiAgfVxufVxuIl19