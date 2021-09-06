(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('google-protobuf'), require('@ngx-grpc/well-known-types'), require('@angular/core'), require('@ngx-grpc/common'), require('@ngx-grpc/core')) :
    typeof define === 'function' && define.amd ? define('@ondewo/survey-client-angular', ['exports', 'google-protobuf', '@ngx-grpc/well-known-types', '@angular/core', '@ngx-grpc/common', '@ngx-grpc/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ondewo = global.ondewo || {}, global.ondewo['survey-client-angular'] = {}), global.googleProtobuf, global.googleProtobuf004, global.ng.core, global.common, global.i2));
}(this, (function (exports, googleProtobuf, googleProtobuf004, i0, common, i2) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

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
    })(exports.SubFlow || (exports.SubFlow = {}));
    /**
     * Message implementation for ondewo.survey.Survey
     */
    var Survey = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Survey to deeply clone from
         */
        function Survey(_value) {
            _value = _value || {};
            this.surveyId = _value.surveyId;
            this.displayName = _value.displayName;
            this.languageCode = _value.languageCode;
            this.questions = (_value.questions || []).map(function (m) { return new exports.Question(m); });
            this.surveyInfo = _value.surveyInfo
                ? new SurveyInfo(_value.surveyInfo)
                : undefined;
            this.excludeSubflows = (_value.excludeSubflows || []).slice();
            Survey.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Survey.deserializeBinary = function (bytes) {
            var instance = new Survey();
            Survey.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Survey.refineValues = function (_instance) {
            _instance.surveyId = _instance.surveyId || '';
            _instance.displayName = _instance.displayName || '';
            _instance.languageCode = _instance.languageCode || '';
            _instance.questions = _instance.questions || [];
            _instance.surveyInfo = _instance.surveyInfo || undefined;
            _instance.excludeSubflows = _instance.excludeSubflows || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Survey.deserializeBinaryFromReader = function (_instance, _reader) {
            var _a;
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
                        var messageInitializer7 = new exports.Question();
                        _reader.readMessage(messageInitializer7, exports.Question.deserializeBinaryFromReader);
                        (_instance.questions = _instance.questions || []).push(messageInitializer7);
                        break;
                    case 8:
                        _instance.surveyInfo = new SurveyInfo();
                        _reader.readMessage(_instance.surveyInfo, SurveyInfo.deserializeBinaryFromReader);
                        break;
                    case 9:
                        (_a = (_instance.excludeSubflows = _instance.excludeSubflows || [])).push.apply(_a, __spread((_reader.readPackedEnum() || [])));
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Survey.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Survey.serializeBinaryToWriter = function (_instance, _writer) {
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
                _writer.writeRepeatedMessage(7, _instance.questions, exports.Question.serializeBinaryToWriter);
            }
            if (_instance.surveyInfo) {
                _writer.writeMessage(8, _instance.surveyInfo, SurveyInfo.serializeBinaryToWriter);
            }
            if (_instance.excludeSubflows && _instance.excludeSubflows.length) {
                _writer.writePackedEnum(9, _instance.excludeSubflows);
            }
        };
        Object.defineProperty(Survey.prototype, "surveyId", {
            get: function () {
                return this._surveyId;
            },
            set: function (value) {
                this._surveyId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Survey.prototype, "displayName", {
            get: function () {
                return this._displayName;
            },
            set: function (value) {
                this._displayName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Survey.prototype, "languageCode", {
            get: function () {
                return this._languageCode;
            },
            set: function (value) {
                this._languageCode = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Survey.prototype, "questions", {
            get: function () {
                return this._questions;
            },
            set: function (value) {
                this._questions = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Survey.prototype, "surveyInfo", {
            get: function () {
                return this._surveyInfo;
            },
            set: function (value) {
                this._surveyInfo = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Survey.prototype, "excludeSubflows", {
            get: function () {
                return this._excludeSubflows;
            },
            set: function (value) {
                this._excludeSubflows = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Survey.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Survey.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Survey.prototype.toObject = function () {
            return {
                surveyId: this.surveyId,
                displayName: this.displayName,
                languageCode: this.languageCode,
                questions: (this.questions || []).map(function (m) { return m.toObject(); }),
                surveyInfo: this.surveyInfo ? this.surveyInfo.toObject() : undefined,
                excludeSubflows: (this.excludeSubflows || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Survey.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Survey.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                surveyId: this.surveyId,
                displayName: this.displayName,
                languageCode: this.languageCode,
                questions: (this.questions || []).map(function (m) { return m.toProtobufJSON(options); }),
                surveyInfo: this.surveyInfo
                    ? this.surveyInfo.toProtobufJSON(options)
                    : null,
                excludeSubflows: (this.excludeSubflows || []).map(function (v) { return exports.SubFlow[v]; })
            };
        };
        return Survey;
    }());
    Survey.id = 'ondewo.survey.Survey';
    /**
     * Message implementation for ondewo.survey.SurveyInfo
     */
    var SurveyInfo = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SurveyInfo to deeply clone from
         */
        function SurveyInfo(_value) {
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
            SurveyInfo.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        SurveyInfo.deserializeBinary = function (bytes) {
            var instance = new SurveyInfo();
            SurveyInfo.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        SurveyInfo.refineValues = function (_instance) {
            _instance.legalEntity = _instance.legalEntity || '';
            _instance.postalAddress = _instance.postalAddress || '';
            _instance.emailAddress = _instance.emailAddress || '';
            _instance.phoneNumber = _instance.phoneNumber || '';
            _instance.phoneHours = _instance.phoneHours || '';
            _instance.expectedDuration = _instance.expectedDuration || '';
            _instance.purpose = _instance.purpose || '';
            _instance.topic = _instance.topic || '';
            _instance.legalDisclaimer = _instance.legalDisclaimer || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        SurveyInfo.deserializeBinaryFromReader = function (_instance, _reader) {
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
                    default:
                        _reader.skipField();
                }
            }
            SurveyInfo.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        SurveyInfo.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(SurveyInfo.prototype, "legalEntity", {
            get: function () {
                return this._legalEntity;
            },
            set: function (value) {
                this._legalEntity = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SurveyInfo.prototype, "postalAddress", {
            get: function () {
                return this._postalAddress;
            },
            set: function (value) {
                this._postalAddress = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SurveyInfo.prototype, "emailAddress", {
            get: function () {
                return this._emailAddress;
            },
            set: function (value) {
                this._emailAddress = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SurveyInfo.prototype, "phoneNumber", {
            get: function () {
                return this._phoneNumber;
            },
            set: function (value) {
                this._phoneNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SurveyInfo.prototype, "phoneHours", {
            get: function () {
                return this._phoneHours;
            },
            set: function (value) {
                this._phoneHours = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SurveyInfo.prototype, "expectedDuration", {
            get: function () {
                return this._expectedDuration;
            },
            set: function (value) {
                this._expectedDuration = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SurveyInfo.prototype, "purpose", {
            get: function () {
                return this._purpose;
            },
            set: function (value) {
                this._purpose = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SurveyInfo.prototype, "topic", {
            get: function () {
                return this._topic;
            },
            set: function (value) {
                this._topic = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SurveyInfo.prototype, "legalDisclaimer", {
            get: function () {
                return this._legalDisclaimer;
            },
            set: function (value) {
                this._legalDisclaimer = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        SurveyInfo.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            SurveyInfo.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        SurveyInfo.prototype.toObject = function () {
            return {
                legalEntity: this.legalEntity,
                postalAddress: this.postalAddress,
                emailAddress: this.emailAddress,
                phoneNumber: this.phoneNumber,
                phoneHours: this.phoneHours,
                expectedDuration: this.expectedDuration,
                purpose: this.purpose,
                topic: this.topic,
                legalDisclaimer: this.legalDisclaimer
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        SurveyInfo.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        SurveyInfo.prototype.toProtobufJSON = function (
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
                legalDisclaimer: this.legalDisclaimer
            };
        };
        return SurveyInfo;
    }());
    SurveyInfo.id = 'ondewo.survey.SurveyInfo';
    /**
     * Message implementation for ondewo.survey.Question
     */
    exports.Question = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Question to deeply clone from
         */
        function Question(_value) {
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
                ? new exports.ScaleQuestion(_value.scaleQuestion)
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
        Question.deserializeBinary = function (bytes) {
            var instance = new Question();
            Question.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Question.refineValues = function (_instance) { };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Question.deserializeBinaryFromReader = function (_instance, _reader) {
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
                        _instance.scaleQuestion = new exports.ScaleQuestion();
                        _reader.readMessage(_instance.scaleQuestion, exports.ScaleQuestion.deserializeBinaryFromReader);
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Question.serializeBinaryToWriter = function (_instance, _writer) {
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
                _writer.writeMessage(4, _instance.scaleQuestion, exports.ScaleQuestion.serializeBinaryToWriter);
            }
            if (_instance.singleParameterQuestion) {
                _writer.writeMessage(5, _instance.singleParameterQuestion, SingleParameterQuestion.serializeBinaryToWriter);
            }
            if (_instance.multipleParameterQuestion) {
                _writer.writeMessage(6, _instance.multipleParameterQuestion, MultipleParameterQuestion.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(Question.prototype, "openQuestion", {
            get: function () {
                return this._openQuestion;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._singleChoiceQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = undefined;
                    this._question = Question.QuestionCase.openQuestion;
                }
                this._openQuestion = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Question.prototype, "singleChoiceQuestion", {
            get: function () {
                return this._singleChoiceQuestion;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._openQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = undefined;
                    this._question = Question.QuestionCase.singleChoiceQuestion;
                }
                this._singleChoiceQuestion = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Question.prototype, "multipleChoiceQuestion", {
            get: function () {
                return this._multipleChoiceQuestion;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._openQuestion = this._singleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = undefined;
                    this._question = Question.QuestionCase.multipleChoiceQuestion;
                }
                this._multipleChoiceQuestion = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Question.prototype, "scaleQuestion", {
            get: function () {
                return this._scaleQuestion;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._openQuestion = this._singleChoiceQuestion = this._multipleChoiceQuestion = this._singleParameterQuestion = this._multipleParameterQuestion = undefined;
                    this._question = Question.QuestionCase.scaleQuestion;
                }
                this._scaleQuestion = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Question.prototype, "singleParameterQuestion", {
            get: function () {
                return this._singleParameterQuestion;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._openQuestion = this._singleChoiceQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._multipleParameterQuestion = undefined;
                    this._question = Question.QuestionCase.singleParameterQuestion;
                }
                this._singleParameterQuestion = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Question.prototype, "multipleParameterQuestion", {
            get: function () {
                return this._multipleParameterQuestion;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._openQuestion = this._singleChoiceQuestion = this._multipleChoiceQuestion = this._scaleQuestion = this._singleParameterQuestion = undefined;
                    this._question = Question.QuestionCase.multipleParameterQuestion;
                }
                this._multipleParameterQuestion = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Question.prototype, "question", {
            get: function () {
                return this._question;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Question.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Question.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Question.prototype.toObject = function () {
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
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Question.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Question.prototype.toProtobufJSON = function (
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
        };
        return Question;
    }());
    exports.Question.id = 'ondewo.survey.Question';
    (function (Question) {
        var QuestionCase;
        (function (QuestionCase) {
            QuestionCase[QuestionCase["none"] = 0] = "none";
            QuestionCase[QuestionCase["openQuestion"] = 1] = "openQuestion";
            QuestionCase[QuestionCase["singleChoiceQuestion"] = 2] = "singleChoiceQuestion";
            QuestionCase[QuestionCase["multipleChoiceQuestion"] = 3] = "multipleChoiceQuestion";
            QuestionCase[QuestionCase["scaleQuestion"] = 4] = "scaleQuestion";
            QuestionCase[QuestionCase["singleParameterQuestion"] = 5] = "singleParameterQuestion";
            QuestionCase[QuestionCase["multipleParameterQuestion"] = 6] = "multipleParameterQuestion";
        })(QuestionCase = Question.QuestionCase || (Question.QuestionCase = {}));
    })(exports.Question || (exports.Question = {}));
    /**
     * Message implementation for ondewo.survey.OpenQuestion
     */
    var OpenQuestion = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of OpenQuestion to deeply clone from
         */
        function OpenQuestion(_value) {
            _value = _value || {};
            this.questionText = _value.questionText;
            OpenQuestion.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        OpenQuestion.deserializeBinary = function (bytes) {
            var instance = new OpenQuestion();
            OpenQuestion.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        OpenQuestion.refineValues = function (_instance) {
            _instance.questionText = _instance.questionText || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        OpenQuestion.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        OpenQuestion.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.questionText) {
                _writer.writeString(1, _instance.questionText);
            }
        };
        Object.defineProperty(OpenQuestion.prototype, "questionText", {
            get: function () {
                return this._questionText;
            },
            set: function (value) {
                this._questionText = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        OpenQuestion.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            OpenQuestion.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        OpenQuestion.prototype.toObject = function () {
            return {
                questionText: this.questionText
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        OpenQuestion.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        OpenQuestion.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                questionText: this.questionText
            };
        };
        return OpenQuestion;
    }());
    OpenQuestion.id = 'ondewo.survey.OpenQuestion';
    /**
     * Message implementation for ondewo.survey.SingleChoiceQuestion
     */
    var SingleChoiceQuestion = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SingleChoiceQuestion to deeply clone from
         */
        function SingleChoiceQuestion(_value) {
            _value = _value || {};
            this.questionText = _value.questionText;
            this.choices = (_value.choices || []).map(function (m) { return new Choice(m); });
            SingleChoiceQuestion.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        SingleChoiceQuestion.deserializeBinary = function (bytes) {
            var instance = new SingleChoiceQuestion();
            SingleChoiceQuestion.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        SingleChoiceQuestion.refineValues = function (_instance) {
            _instance.questionText = _instance.questionText || '';
            _instance.choices = _instance.choices || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        SingleChoiceQuestion.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.questionText = _reader.readString();
                        break;
                    case 2:
                        var messageInitializer2 = new Choice();
                        _reader.readMessage(messageInitializer2, Choice.deserializeBinaryFromReader);
                        (_instance.choices = _instance.choices || []).push(messageInitializer2);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            SingleChoiceQuestion.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        SingleChoiceQuestion.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.questionText) {
                _writer.writeString(1, _instance.questionText);
            }
            if (_instance.choices && _instance.choices.length) {
                _writer.writeRepeatedMessage(2, _instance.choices, Choice.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(SingleChoiceQuestion.prototype, "questionText", {
            get: function () {
                return this._questionText;
            },
            set: function (value) {
                this._questionText = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SingleChoiceQuestion.prototype, "choices", {
            get: function () {
                return this._choices;
            },
            set: function (value) {
                this._choices = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        SingleChoiceQuestion.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            SingleChoiceQuestion.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        SingleChoiceQuestion.prototype.toObject = function () {
            return {
                questionText: this.questionText,
                choices: (this.choices || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        SingleChoiceQuestion.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        SingleChoiceQuestion.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                questionText: this.questionText,
                choices: (this.choices || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return SingleChoiceQuestion;
    }());
    SingleChoiceQuestion.id = 'ondewo.survey.SingleChoiceQuestion';
    /**
     * Message implementation for ondewo.survey.MultipleChoiceQuestion
     */
    var MultipleChoiceQuestion = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of MultipleChoiceQuestion to deeply clone from
         */
        function MultipleChoiceQuestion(_value) {
            _value = _value || {};
            this.questionText = _value.questionText;
            this.choices = (_value.choices || []).map(function (m) { return new Choice(m); });
            MultipleChoiceQuestion.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        MultipleChoiceQuestion.deserializeBinary = function (bytes) {
            var instance = new MultipleChoiceQuestion();
            MultipleChoiceQuestion.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        MultipleChoiceQuestion.refineValues = function (_instance) {
            _instance.questionText = _instance.questionText || '';
            _instance.choices = _instance.choices || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        MultipleChoiceQuestion.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.questionText = _reader.readString();
                        break;
                    case 2:
                        var messageInitializer2 = new Choice();
                        _reader.readMessage(messageInitializer2, Choice.deserializeBinaryFromReader);
                        (_instance.choices = _instance.choices || []).push(messageInitializer2);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            MultipleChoiceQuestion.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        MultipleChoiceQuestion.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.questionText) {
                _writer.writeString(1, _instance.questionText);
            }
            if (_instance.choices && _instance.choices.length) {
                _writer.writeRepeatedMessage(2, _instance.choices, Choice.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(MultipleChoiceQuestion.prototype, "questionText", {
            get: function () {
                return this._questionText;
            },
            set: function (value) {
                this._questionText = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MultipleChoiceQuestion.prototype, "choices", {
            get: function () {
                return this._choices;
            },
            set: function (value) {
                this._choices = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        MultipleChoiceQuestion.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            MultipleChoiceQuestion.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        MultipleChoiceQuestion.prototype.toObject = function () {
            return {
                questionText: this.questionText,
                choices: (this.choices || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        MultipleChoiceQuestion.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        MultipleChoiceQuestion.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                questionText: this.questionText,
                choices: (this.choices || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return MultipleChoiceQuestion;
    }());
    MultipleChoiceQuestion.id = 'ondewo.survey.MultipleChoiceQuestion';
    /**
     * Message implementation for ondewo.survey.ScaleQuestion
     */
    exports.ScaleQuestion = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ScaleQuestion to deeply clone from
         */
        function ScaleQuestion(_value) {
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
        ScaleQuestion.deserializeBinary = function (bytes) {
            var instance = new ScaleQuestion();
            ScaleQuestion.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ScaleQuestion.refineValues = function (_instance) {
            _instance.questionText = _instance.questionText || '';
            _instance.minValue = _instance.minValue || undefined;
            _instance.maxValue = _instance.maxValue || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ScaleQuestion.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ScaleQuestion.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.questionText) {
                _writer.writeString(1, _instance.questionText);
            }
            if (_instance.minValue) {
                _writer.writeMessage(2, _instance.minValue, ScaleQuestion.ScaleValue.serializeBinaryToWriter);
            }
            if (_instance.maxValue) {
                _writer.writeMessage(3, _instance.maxValue, ScaleQuestion.ScaleValue.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(ScaleQuestion.prototype, "questionText", {
            get: function () {
                return this._questionText;
            },
            set: function (value) {
                this._questionText = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ScaleQuestion.prototype, "minValue", {
            get: function () {
                return this._minValue;
            },
            set: function (value) {
                this._minValue = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ScaleQuestion.prototype, "maxValue", {
            get: function () {
                return this._maxValue;
            },
            set: function (value) {
                this._maxValue = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ScaleQuestion.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ScaleQuestion.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ScaleQuestion.prototype.toObject = function () {
            return {
                questionText: this.questionText,
                minValue: this.minValue ? this.minValue.toObject() : undefined,
                maxValue: this.maxValue ? this.maxValue.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ScaleQuestion.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ScaleQuestion.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                questionText: this.questionText,
                minValue: this.minValue ? this.minValue.toProtobufJSON(options) : null,
                maxValue: this.maxValue ? this.maxValue.toProtobufJSON(options) : null
            };
        };
        return ScaleQuestion;
    }());
    exports.ScaleQuestion.id = 'ondewo.survey.ScaleQuestion';
    (function (ScaleQuestion) {
        /**
         * Message implementation for ondewo.survey.ScaleValue
         */
        var ScaleValue = /** @class */ (function () {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of ScaleValue to deeply clone from
             */
            function ScaleValue(_value) {
                _value = _value || {};
                this.value = _value.value;
                this.label = _value.label;
                ScaleValue.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            ScaleValue.deserializeBinary = function (bytes) {
                var instance = new ScaleValue();
                ScaleValue.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
                return instance;
            };
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            ScaleValue.refineValues = function (_instance) {
                _instance.value = _instance.value || 0;
                _instance.label = _instance.label || '';
            };
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            ScaleValue.deserializeBinaryFromReader = function (_instance, _reader) {
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
            };
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            ScaleValue.serializeBinaryToWriter = function (_instance, _writer) {
                if (_instance.value) {
                    _writer.writeInt32(1, _instance.value);
                }
                if (_instance.label) {
                    _writer.writeString(2, _instance.label);
                }
            };
            Object.defineProperty(ScaleValue.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ScaleValue.prototype, "label", {
                get: function () {
                    return this._label;
                },
                set: function (value) {
                    this._label = value;
                },
                enumerable: false,
                configurable: true
            });
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            ScaleValue.prototype.serializeBinary = function () {
                var writer = new googleProtobuf.BinaryWriter();
                ScaleValue.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            };
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            ScaleValue.prototype.toObject = function () {
                return {
                    value: this.value,
                    label: this.label
                };
            };
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            ScaleValue.prototype.toJSON = function () {
                return this.toObject();
            };
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            ScaleValue.prototype.toProtobufJSON = function (
            // @ts-ignore
            options) {
                return {
                    value: this.value,
                    label: this.label
                };
            };
            return ScaleValue;
        }());
        ScaleValue.id = 'ondewo.survey.ScaleValue';
        ScaleQuestion.ScaleValue = ScaleValue;
    })(exports.ScaleQuestion || (exports.ScaleQuestion = {}));
    /**
     * Message implementation for ondewo.survey.SingleParameterQuestion
     */
    var SingleParameterQuestion = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SingleParameterQuestion to deeply clone from
         */
        function SingleParameterQuestion(_value) {
            _value = _value || {};
            this.questionText = _value.questionText;
            this.parameterType = _value.parameterType;
            SingleParameterQuestion.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        SingleParameterQuestion.deserializeBinary = function (bytes) {
            var instance = new SingleParameterQuestion();
            SingleParameterQuestion.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        SingleParameterQuestion.refineValues = function (_instance) {
            _instance.questionText = _instance.questionText || '';
            _instance.parameterType = _instance.parameterType || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        SingleParameterQuestion.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        SingleParameterQuestion.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.questionText) {
                _writer.writeString(1, _instance.questionText);
            }
            if (_instance.parameterType) {
                _writer.writeString(2, _instance.parameterType);
            }
        };
        Object.defineProperty(SingleParameterQuestion.prototype, "questionText", {
            get: function () {
                return this._questionText;
            },
            set: function (value) {
                this._questionText = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SingleParameterQuestion.prototype, "parameterType", {
            get: function () {
                return this._parameterType;
            },
            set: function (value) {
                this._parameterType = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        SingleParameterQuestion.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            SingleParameterQuestion.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        SingleParameterQuestion.prototype.toObject = function () {
            return {
                questionText: this.questionText,
                parameterType: this.parameterType
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        SingleParameterQuestion.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        SingleParameterQuestion.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                questionText: this.questionText,
                parameterType: this.parameterType
            };
        };
        return SingleParameterQuestion;
    }());
    SingleParameterQuestion.id = 'ondewo.survey.SingleParameterQuestion';
    /**
     * Message implementation for ondewo.survey.MultipleParameterQuestion
     */
    var MultipleParameterQuestion = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of MultipleParameterQuestion to deeply clone from
         */
        function MultipleParameterQuestion(_value) {
            _value = _value || {};
            this.questionText = _value.questionText;
            this.parameterType = _value.parameterType;
            MultipleParameterQuestion.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        MultipleParameterQuestion.deserializeBinary = function (bytes) {
            var instance = new MultipleParameterQuestion();
            MultipleParameterQuestion.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        MultipleParameterQuestion.refineValues = function (_instance) {
            _instance.questionText = _instance.questionText || '';
            _instance.parameterType = _instance.parameterType || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        MultipleParameterQuestion.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        MultipleParameterQuestion.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.questionText) {
                _writer.writeString(1, _instance.questionText);
            }
            if (_instance.parameterType) {
                _writer.writeString(2, _instance.parameterType);
            }
        };
        Object.defineProperty(MultipleParameterQuestion.prototype, "questionText", {
            get: function () {
                return this._questionText;
            },
            set: function (value) {
                this._questionText = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MultipleParameterQuestion.prototype, "parameterType", {
            get: function () {
                return this._parameterType;
            },
            set: function (value) {
                this._parameterType = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        MultipleParameterQuestion.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            MultipleParameterQuestion.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        MultipleParameterQuestion.prototype.toObject = function () {
            return {
                questionText: this.questionText,
                parameterType: this.parameterType
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        MultipleParameterQuestion.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        MultipleParameterQuestion.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                questionText: this.questionText,
                parameterType: this.parameterType
            };
        };
        return MultipleParameterQuestion;
    }());
    MultipleParameterQuestion.id = 'ondewo.survey.MultipleParameterQuestion';
    /**
     * Message implementation for ondewo.survey.Choice
     */
    var Choice = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Choice to deeply clone from
         */
        function Choice(_value) {
            _value = _value || {};
            this.synonyms = (_value.synonyms || []).slice();
            this.followUpQuestion = _value.followUpQuestion
                ? new exports.Question(_value.followUpQuestion)
                : undefined;
            this.value = _value.value;
            Choice.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Choice.deserializeBinary = function (bytes) {
            var instance = new Choice();
            Choice.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Choice.refineValues = function (_instance) {
            _instance.synonyms = _instance.synonyms || [];
            _instance.followUpQuestion = _instance.followUpQuestion || undefined;
            _instance.value = _instance.value || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Choice.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        (_instance.synonyms = _instance.synonyms || []).push(_reader.readString());
                        break;
                    case 2:
                        _instance.followUpQuestion = new exports.Question();
                        _reader.readMessage(_instance.followUpQuestion, exports.Question.deserializeBinaryFromReader);
                        break;
                    case 3:
                        _instance.value = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Choice.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Choice.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.synonyms && _instance.synonyms.length) {
                _writer.writeRepeatedString(1, _instance.synonyms);
            }
            if (_instance.followUpQuestion) {
                _writer.writeMessage(2, _instance.followUpQuestion, exports.Question.serializeBinaryToWriter);
            }
            if (_instance.value) {
                _writer.writeString(3, _instance.value);
            }
        };
        Object.defineProperty(Choice.prototype, "synonyms", {
            get: function () {
                return this._synonyms;
            },
            set: function (value) {
                this._synonyms = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Choice.prototype, "followUpQuestion", {
            get: function () {
                return this._followUpQuestion;
            },
            set: function (value) {
                this._followUpQuestion = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Choice.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Choice.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Choice.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Choice.prototype.toObject = function () {
            return {
                synonyms: (this.synonyms || []).slice(),
                followUpQuestion: this.followUpQuestion
                    ? this.followUpQuestion.toObject()
                    : undefined,
                value: this.value
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Choice.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Choice.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                synonyms: (this.synonyms || []).slice(),
                followUpQuestion: this.followUpQuestion
                    ? this.followUpQuestion.toProtobufJSON(options)
                    : null,
                value: this.value
            };
        };
        return Choice;
    }());
    Choice.id = 'ondewo.survey.Choice';
    /**
     * Message implementation for ondewo.survey.Answer
     */
    var Answer = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Answer to deeply clone from
         */
        function Answer(_value) {
            _value = _value || {};
            this.questionNr = _value.questionNr;
            this.sessionId = _value.sessionId;
            this.answerText = _value.answerText;
            this.answerParameter = _value.answerParameter;
            this.answerParameterOriginal = _value.answerParameterOriginal;
            Answer.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Answer.deserializeBinary = function (bytes) {
            var instance = new Answer();
            Answer.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Answer.refineValues = function (_instance) {
            _instance.questionNr = _instance.questionNr || '0';
            _instance.sessionId = _instance.sessionId || '';
            _instance.answerText = _instance.answerText || '';
            _instance.answerParameter = _instance.answerParameter || '';
            _instance.answerParameterOriginal = _instance.answerParameterOriginal || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Answer.deserializeBinaryFromReader = function (_instance, _reader) {
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
                    default:
                        _reader.skipField();
                }
            }
            Answer.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Answer.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(Answer.prototype, "questionNr", {
            get: function () {
                return this._questionNr;
            },
            set: function (value) {
                this._questionNr = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Answer.prototype, "sessionId", {
            get: function () {
                return this._sessionId;
            },
            set: function (value) {
                this._sessionId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Answer.prototype, "answerText", {
            get: function () {
                return this._answerText;
            },
            set: function (value) {
                this._answerText = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Answer.prototype, "answerParameter", {
            get: function () {
                return this._answerParameter;
            },
            set: function (value) {
                this._answerParameter = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Answer.prototype, "answerParameterOriginal", {
            get: function () {
                return this._answerParameterOriginal;
            },
            set: function (value) {
                this._answerParameterOriginal = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Answer.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Answer.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Answer.prototype.toObject = function () {
            return {
                questionNr: this.questionNr,
                sessionId: this.sessionId,
                answerText: this.answerText,
                answerParameter: this.answerParameter,
                answerParameterOriginal: this.answerParameterOriginal
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Answer.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Answer.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                questionNr: this.questionNr,
                sessionId: this.sessionId,
                answerText: this.answerText,
                answerParameter: this.answerParameter,
                answerParameterOriginal: this.answerParameterOriginal
            };
        };
        return Answer;
    }());
    Answer.id = 'ondewo.survey.Answer';
    /**
     * Message implementation for ondewo.survey.CreateSurveyRequest
     */
    var CreateSurveyRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CreateSurveyRequest to deeply clone from
         */
        function CreateSurveyRequest(_value) {
            _value = _value || {};
            this.survey = _value.survey ? new Survey(_value.survey) : undefined;
            CreateSurveyRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        CreateSurveyRequest.deserializeBinary = function (bytes) {
            var instance = new CreateSurveyRequest();
            CreateSurveyRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        CreateSurveyRequest.refineValues = function (_instance) {
            _instance.survey = _instance.survey || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        CreateSurveyRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        CreateSurveyRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.survey) {
                _writer.writeMessage(1, _instance.survey, Survey.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(CreateSurveyRequest.prototype, "survey", {
            get: function () {
                return this._survey;
            },
            set: function (value) {
                this._survey = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        CreateSurveyRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            CreateSurveyRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        CreateSurveyRequest.prototype.toObject = function () {
            return {
                survey: this.survey ? this.survey.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        CreateSurveyRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        CreateSurveyRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                survey: this.survey ? this.survey.toProtobufJSON(options) : null
            };
        };
        return CreateSurveyRequest;
    }());
    CreateSurveyRequest.id = 'ondewo.survey.CreateSurveyRequest';
    /**
     * Message implementation for ondewo.survey.GetSurveyRequest
     */
    var GetSurveyRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetSurveyRequest to deeply clone from
         */
        function GetSurveyRequest(_value) {
            _value = _value || {};
            this.surveyId = _value.surveyId;
            GetSurveyRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetSurveyRequest.deserializeBinary = function (bytes) {
            var instance = new GetSurveyRequest();
            GetSurveyRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetSurveyRequest.refineValues = function (_instance) {
            _instance.surveyId = _instance.surveyId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetSurveyRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetSurveyRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.surveyId) {
                _writer.writeString(1, _instance.surveyId);
            }
        };
        Object.defineProperty(GetSurveyRequest.prototype, "surveyId", {
            get: function () {
                return this._surveyId;
            },
            set: function (value) {
                this._surveyId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetSurveyRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetSurveyRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetSurveyRequest.prototype.toObject = function () {
            return {
                surveyId: this.surveyId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetSurveyRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetSurveyRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                surveyId: this.surveyId
            };
        };
        return GetSurveyRequest;
    }());
    GetSurveyRequest.id = 'ondewo.survey.GetSurveyRequest';
    /**
     * Message implementation for ondewo.survey.UpdateSurveyRequest
     */
    var UpdateSurveyRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of UpdateSurveyRequest to deeply clone from
         */
        function UpdateSurveyRequest(_value) {
            _value = _value || {};
            this.survey = _value.survey ? new Survey(_value.survey) : undefined;
            this.updateMask = _value.updateMask
                ? new googleProtobuf004.FieldMask(_value.updateMask)
                : undefined;
            UpdateSurveyRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        UpdateSurveyRequest.deserializeBinary = function (bytes) {
            var instance = new UpdateSurveyRequest();
            UpdateSurveyRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        UpdateSurveyRequest.refineValues = function (_instance) {
            _instance.survey = _instance.survey || undefined;
            _instance.updateMask = _instance.updateMask || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        UpdateSurveyRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        UpdateSurveyRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.survey) {
                _writer.writeMessage(1, _instance.survey, Survey.serializeBinaryToWriter);
            }
            if (_instance.updateMask) {
                _writer.writeMessage(2, _instance.updateMask, googleProtobuf004.FieldMask.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(UpdateSurveyRequest.prototype, "survey", {
            get: function () {
                return this._survey;
            },
            set: function (value) {
                this._survey = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UpdateSurveyRequest.prototype, "updateMask", {
            get: function () {
                return this._updateMask;
            },
            set: function (value) {
                this._updateMask = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        UpdateSurveyRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            UpdateSurveyRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        UpdateSurveyRequest.prototype.toObject = function () {
            return {
                survey: this.survey ? this.survey.toObject() : undefined,
                updateMask: this.updateMask ? this.updateMask.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        UpdateSurveyRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        UpdateSurveyRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                survey: this.survey ? this.survey.toProtobufJSON(options) : null,
                updateMask: this.updateMask
                    ? this.updateMask.toProtobufJSON(options)
                    : null
            };
        };
        return UpdateSurveyRequest;
    }());
    UpdateSurveyRequest.id = 'ondewo.survey.UpdateSurveyRequest';
    /**
     * Message implementation for ondewo.survey.DeleteSurveyRequest
     */
    var DeleteSurveyRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DeleteSurveyRequest to deeply clone from
         */
        function DeleteSurveyRequest(_value) {
            _value = _value || {};
            this.surveyId = _value.surveyId;
            DeleteSurveyRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        DeleteSurveyRequest.deserializeBinary = function (bytes) {
            var instance = new DeleteSurveyRequest();
            DeleteSurveyRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        DeleteSurveyRequest.refineValues = function (_instance) {
            _instance.surveyId = _instance.surveyId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        DeleteSurveyRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        DeleteSurveyRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.surveyId) {
                _writer.writeString(1, _instance.surveyId);
            }
        };
        Object.defineProperty(DeleteSurveyRequest.prototype, "surveyId", {
            get: function () {
                return this._surveyId;
            },
            set: function (value) {
                this._surveyId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        DeleteSurveyRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            DeleteSurveyRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        DeleteSurveyRequest.prototype.toObject = function () {
            return {
                surveyId: this.surveyId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        DeleteSurveyRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        DeleteSurveyRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                surveyId: this.surveyId
            };
        };
        return DeleteSurveyRequest;
    }());
    DeleteSurveyRequest.id = 'ondewo.survey.DeleteSurveyRequest';
    /**
     * Message implementation for ondewo.survey.GetSurveyAnswersRequest
     */
    var GetSurveyAnswersRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetSurveyAnswersRequest to deeply clone from
         */
        function GetSurveyAnswersRequest(_value) {
            _value = _value || {};
            this.sessionId = _value.sessionId;
            GetSurveyAnswersRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetSurveyAnswersRequest.deserializeBinary = function (bytes) {
            var instance = new GetSurveyAnswersRequest();
            GetSurveyAnswersRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetSurveyAnswersRequest.refineValues = function (_instance) {
            _instance.sessionId = _instance.sessionId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetSurveyAnswersRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.sessionId = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            GetSurveyAnswersRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetSurveyAnswersRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.sessionId) {
                _writer.writeString(1, _instance.sessionId);
            }
        };
        Object.defineProperty(GetSurveyAnswersRequest.prototype, "sessionId", {
            get: function () {
                return this._sessionId;
            },
            set: function (value) {
                this._sessionId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetSurveyAnswersRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetSurveyAnswersRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetSurveyAnswersRequest.prototype.toObject = function () {
            return {
                sessionId: this.sessionId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetSurveyAnswersRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetSurveyAnswersRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                sessionId: this.sessionId
            };
        };
        return GetSurveyAnswersRequest;
    }());
    GetSurveyAnswersRequest.id = 'ondewo.survey.GetSurveyAnswersRequest';
    /**
     * Message implementation for ondewo.survey.GetAllSurveyAnswersRequest
     */
    var GetAllSurveyAnswersRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetAllSurveyAnswersRequest to deeply clone from
         */
        function GetAllSurveyAnswersRequest(_value) {
            _value = _value || {};
            this.surveyId = _value.surveyId;
            GetAllSurveyAnswersRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetAllSurveyAnswersRequest.deserializeBinary = function (bytes) {
            var instance = new GetAllSurveyAnswersRequest();
            GetAllSurveyAnswersRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetAllSurveyAnswersRequest.refineValues = function (_instance) {
            _instance.surveyId = _instance.surveyId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetAllSurveyAnswersRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetAllSurveyAnswersRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.surveyId) {
                _writer.writeString(1, _instance.surveyId);
            }
        };
        Object.defineProperty(GetAllSurveyAnswersRequest.prototype, "surveyId", {
            get: function () {
                return this._surveyId;
            },
            set: function (value) {
                this._surveyId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetAllSurveyAnswersRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetAllSurveyAnswersRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetAllSurveyAnswersRequest.prototype.toObject = function () {
            return {
                surveyId: this.surveyId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetAllSurveyAnswersRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetAllSurveyAnswersRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                surveyId: this.surveyId
            };
        };
        return GetAllSurveyAnswersRequest;
    }());
    GetAllSurveyAnswersRequest.id = 'ondewo.survey.GetAllSurveyAnswersRequest';
    /**
     * Message implementation for ondewo.survey.SurveyAnswersResponse
     */
    var SurveyAnswersResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SurveyAnswersResponse to deeply clone from
         */
        function SurveyAnswersResponse(_value) {
            _value = _value || {};
            this.surveyId = _value.surveyId;
            this.answers = (_value.answers || []).map(function (m) { return new Answer(m); });
            SurveyAnswersResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        SurveyAnswersResponse.deserializeBinary = function (bytes) {
            var instance = new SurveyAnswersResponse();
            SurveyAnswersResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        SurveyAnswersResponse.refineValues = function (_instance) {
            _instance.surveyId = _instance.surveyId || '';
            _instance.answers = _instance.answers || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        SurveyAnswersResponse.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.surveyId = _reader.readString();
                        break;
                    case 2:
                        var messageInitializer2 = new Answer();
                        _reader.readMessage(messageInitializer2, Answer.deserializeBinaryFromReader);
                        (_instance.answers = _instance.answers || []).push(messageInitializer2);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            SurveyAnswersResponse.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        SurveyAnswersResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.surveyId) {
                _writer.writeString(1, _instance.surveyId);
            }
            if (_instance.answers && _instance.answers.length) {
                _writer.writeRepeatedMessage(2, _instance.answers, Answer.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(SurveyAnswersResponse.prototype, "surveyId", {
            get: function () {
                return this._surveyId;
            },
            set: function (value) {
                this._surveyId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SurveyAnswersResponse.prototype, "answers", {
            get: function () {
                return this._answers;
            },
            set: function (value) {
                this._answers = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        SurveyAnswersResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            SurveyAnswersResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        SurveyAnswersResponse.prototype.toObject = function () {
            return {
                surveyId: this.surveyId,
                answers: (this.answers || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        SurveyAnswersResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        SurveyAnswersResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                surveyId: this.surveyId,
                answers: (this.answers || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return SurveyAnswersResponse;
    }());
    SurveyAnswersResponse.id = 'ondewo.survey.SurveyAnswersResponse';
    /**
     * Message implementation for ondewo.survey.ListSurveysRequest
     */
    var ListSurveysRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListSurveysRequest to deeply clone from
         */
        function ListSurveysRequest(_value) {
            _value = _value || {};
            this.pageToken = _value.pageToken;
            ListSurveysRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListSurveysRequest.deserializeBinary = function (bytes) {
            var instance = new ListSurveysRequest();
            ListSurveysRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListSurveysRequest.refineValues = function (_instance) {
            _instance.pageToken = _instance.pageToken || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListSurveysRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListSurveysRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.pageToken) {
                _writer.writeString(1, _instance.pageToken);
            }
        };
        Object.defineProperty(ListSurveysRequest.prototype, "pageToken", {
            get: function () {
                return this._pageToken;
            },
            set: function (value) {
                this._pageToken = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListSurveysRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListSurveysRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListSurveysRequest.prototype.toObject = function () {
            return {
                pageToken: this.pageToken
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListSurveysRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListSurveysRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                pageToken: this.pageToken
            };
        };
        return ListSurveysRequest;
    }());
    ListSurveysRequest.id = 'ondewo.survey.ListSurveysRequest';
    /**
     * Message implementation for ondewo.survey.ListSurveysResponse
     */
    var ListSurveysResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListSurveysResponse to deeply clone from
         */
        function ListSurveysResponse(_value) {
            _value = _value || {};
            this.surveys = (_value.surveys || []).map(function (m) { return new Survey(m); });
            this.nextPageToken = _value.nextPageToken;
            ListSurveysResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListSurveysResponse.deserializeBinary = function (bytes) {
            var instance = new ListSurveysResponse();
            ListSurveysResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListSurveysResponse.refineValues = function (_instance) {
            _instance.surveys = _instance.surveys || [];
            _instance.nextPageToken = _instance.nextPageToken || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListSurveysResponse.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        var messageInitializer1 = new Survey();
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListSurveysResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.surveys && _instance.surveys.length) {
                _writer.writeRepeatedMessage(1, _instance.surveys, Survey.serializeBinaryToWriter);
            }
            if (_instance.nextPageToken) {
                _writer.writeString(2, _instance.nextPageToken);
            }
        };
        Object.defineProperty(ListSurveysResponse.prototype, "surveys", {
            get: function () {
                return this._surveys;
            },
            set: function (value) {
                this._surveys = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListSurveysResponse.prototype, "nextPageToken", {
            get: function () {
                return this._nextPageToken;
            },
            set: function (value) {
                this._nextPageToken = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListSurveysResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListSurveysResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListSurveysResponse.prototype.toObject = function () {
            return {
                surveys: (this.surveys || []).map(function (m) { return m.toObject(); }),
                nextPageToken: this.nextPageToken
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListSurveysResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListSurveysResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                surveys: (this.surveys || []).map(function (m) { return m.toProtobufJSON(options); }),
                nextPageToken: this.nextPageToken
            };
        };
        return ListSurveysResponse;
    }());
    ListSurveysResponse.id = 'ondewo.survey.ListSurveysResponse';
    /**
     * Message implementation for ondewo.survey.AgentSurveyRequest
     */
    var AgentSurveyRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of AgentSurveyRequest to deeply clone from
         */
        function AgentSurveyRequest(_value) {
            _value = _value || {};
            this.surveyId = _value.surveyId;
            AgentSurveyRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        AgentSurveyRequest.deserializeBinary = function (bytes) {
            var instance = new AgentSurveyRequest();
            AgentSurveyRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        AgentSurveyRequest.refineValues = function (_instance) {
            _instance.surveyId = _instance.surveyId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        AgentSurveyRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        AgentSurveyRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.surveyId) {
                _writer.writeString(1, _instance.surveyId);
            }
        };
        Object.defineProperty(AgentSurveyRequest.prototype, "surveyId", {
            get: function () {
                return this._surveyId;
            },
            set: function (value) {
                this._surveyId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        AgentSurveyRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            AgentSurveyRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        AgentSurveyRequest.prototype.toObject = function () {
            return {
                surveyId: this.surveyId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        AgentSurveyRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        AgentSurveyRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                surveyId: this.surveyId
            };
        };
        return AgentSurveyRequest;
    }());
    AgentSurveyRequest.id = 'ondewo.survey.AgentSurveyRequest';
    /**
     * Message implementation for ondewo.survey.AgentSurveyResponse
     */
    var AgentSurveyResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of AgentSurveyResponse to deeply clone from
         */
        function AgentSurveyResponse(_value) {
            _value = _value || {};
            this.parent = _value.parent;
            AgentSurveyResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        AgentSurveyResponse.deserializeBinary = function (bytes) {
            var instance = new AgentSurveyResponse();
            AgentSurveyResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        AgentSurveyResponse.refineValues = function (_instance) {
            _instance.parent = _instance.parent || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        AgentSurveyResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        AgentSurveyResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.parent) {
                _writer.writeString(1, _instance.parent);
            }
        };
        Object.defineProperty(AgentSurveyResponse.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            set: function (value) {
                this._parent = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        AgentSurveyResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            AgentSurveyResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        AgentSurveyResponse.prototype.toObject = function () {
            return {
                parent: this.parent
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        AgentSurveyResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        AgentSurveyResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                parent: this.parent
            };
        };
        return AgentSurveyResponse;
    }());
    AgentSurveyResponse.id = 'ondewo.survey.AgentSurveyResponse';

    /* tslint:disable */
    /**
     * Specific GrpcClientSettings for Surveys.
     * Use it only if your default settings are not set or the service requires other settings.
     */
    var GRPC_SURVEYS_CLIENT_SETTINGS = new i0.InjectionToken('GRPC_SURVEYS_CLIENT_SETTINGS');

    /* tslint:disable */
    /**
     * Service client implementation for ondewo.survey.Surveys
     */
    var SurveysClient = /** @class */ (function () {
        function SurveysClient(settings, clientFactory, handler) {
            var _this = this;
            this.handler = handler;
            /**
             * Raw RPC implementation for each service client method.
             * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
             * Attention: these methods do not throw errors when non-zero status codes are received.
             */
            this.$raw = {
                /**
                 * Unary RPC for /ondewo.survey.Surveys/CreateSurvey
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.Survey>>
                 */
                createSurvey: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.survey.Surveys/CreateSurvey',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: CreateSurveyRequest,
                        responseClass: Survey
                    });
                },
                /**
                 * Unary RPC for /ondewo.survey.Surveys/GetSurvey
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.Survey>>
                 */
                getSurvey: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.survey.Surveys/GetSurvey',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: GetSurveyRequest,
                        responseClass: Survey
                    });
                },
                /**
                 * Unary RPC for /ondewo.survey.Surveys/UpdateSurvey
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.Survey>>
                 */
                updateSurvey: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.survey.Surveys/UpdateSurvey',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: UpdateSurveyRequest,
                        responseClass: Survey
                    });
                },
                /**
                 * Unary RPC for /ondewo.survey.Surveys/DeleteSurvey
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
                 */
                deleteSurvey: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.survey.Surveys/DeleteSurvey',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: DeleteSurveyRequest,
                        responseClass: googleProtobuf004.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.survey.Surveys/ListSurveys
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.ListSurveysResponse>>
                 */
                listSurveys: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.survey.Surveys/ListSurveys',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: ListSurveysRequest,
                        responseClass: ListSurveysResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.survey.Surveys/GetSurveyAnswers
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>
                 */
                getSurveyAnswers: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.survey.Surveys/GetSurveyAnswers',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: GetSurveyAnswersRequest,
                        responseClass: SurveyAnswersResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.survey.Surveys/GetAllSurveyAnswers
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.SurveyAnswersResponse>>
                 */
                getAllSurveyAnswers: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.survey.Surveys/GetAllSurveyAnswers',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: GetAllSurveyAnswersRequest,
                        responseClass: SurveyAnswersResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.survey.Surveys/CreateAgentSurvey
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.AgentSurveyResponse>>
                 */
                createAgentSurvey: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.survey.Surveys/CreateAgentSurvey',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: AgentSurveyRequest,
                        responseClass: AgentSurveyResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.survey.Surveys/UpdateAgentSurvey
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.AgentSurveyResponse>>
                 */
                updateAgentSurvey: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.survey.Surveys/UpdateAgentSurvey',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: AgentSurveyRequest,
                        responseClass: AgentSurveyResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.survey.Surveys/DeleteAgentSurvey
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
                 */
                deleteAgentSurvey: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.survey.Surveys/DeleteAgentSurvey',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: AgentSurveyRequest,
                        responseClass: googleProtobuf004.Empty
                    });
                }
            };
            this.client = clientFactory.createClient('ondewo.survey.Surveys', settings);
        }
        /**
         * Unary RPC for /ondewo.survey.Surveys/CreateSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.Survey>
         */
        SurveysClient.prototype.createSurvey = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .createSurvey(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.survey.Surveys/GetSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.Survey>
         */
        SurveysClient.prototype.getSurvey = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getSurvey(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.survey.Surveys/UpdateSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.Survey>
         */
        SurveysClient.prototype.updateSurvey = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .updateSurvey(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.survey.Surveys/DeleteSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf003.Empty>
         */
        SurveysClient.prototype.deleteSurvey = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .deleteSurvey(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.survey.Surveys/ListSurveys
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.ListSurveysResponse>
         */
        SurveysClient.prototype.listSurveys = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .listSurveys(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.survey.Surveys/GetSurveyAnswers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.SurveyAnswersResponse>
         */
        SurveysClient.prototype.getSurveyAnswers = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getSurveyAnswers(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.survey.Surveys/GetAllSurveyAnswers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.SurveyAnswersResponse>
         */
        SurveysClient.prototype.getAllSurveyAnswers = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getAllSurveyAnswers(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.survey.Surveys/CreateAgentSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.AgentSurveyResponse>
         */
        SurveysClient.prototype.createAgentSurvey = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .createAgentSurvey(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.survey.Surveys/UpdateAgentSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.AgentSurveyResponse>
         */
        SurveysClient.prototype.updateAgentSurvey = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .updateAgentSurvey(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.survey.Surveys/DeleteAgentSurvey
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf003.Empty>
         */
        SurveysClient.prototype.deleteAgentSurvey = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .deleteAgentSurvey(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        return SurveysClient;
    }());
    SurveysClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function SurveysClient_Factory() { return new SurveysClient(i0.ɵɵinject(GRPC_SURVEYS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: SurveysClient, providedIn: "any" });
    SurveysClient.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'any' },] }
    ];
    SurveysClient.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [GRPC_SURVEYS_CLIENT_SETTINGS,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i2.GRPC_CLIENT_FACTORY,] }] },
        { type: i2.GrpcHandler }
    ]; };

    /**
     * Message implementation for google.api.Http
     */
    var Http = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Http to deeply clone from
         */
        function Http(_value) {
            _value = _value || {};
            this.rules = (_value.rules || []).map(function (m) { return new exports.HttpRule(m); });
            this.fullyDecodeReservedExpansion = _value.fullyDecodeReservedExpansion;
            Http.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Http.deserializeBinary = function (bytes) {
            var instance = new Http();
            Http.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Http.refineValues = function (_instance) {
            _instance.rules = _instance.rules || [];
            _instance.fullyDecodeReservedExpansion =
                _instance.fullyDecodeReservedExpansion || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Http.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        var messageInitializer1 = new exports.HttpRule();
                        _reader.readMessage(messageInitializer1, exports.HttpRule.deserializeBinaryFromReader);
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Http.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.rules && _instance.rules.length) {
                _writer.writeRepeatedMessage(1, _instance.rules, exports.HttpRule.serializeBinaryToWriter);
            }
            if (_instance.fullyDecodeReservedExpansion) {
                _writer.writeBool(2, _instance.fullyDecodeReservedExpansion);
            }
        };
        Object.defineProperty(Http.prototype, "rules", {
            get: function () {
                return this._rules;
            },
            set: function (value) {
                this._rules = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Http.prototype, "fullyDecodeReservedExpansion", {
            get: function () {
                return this._fullyDecodeReservedExpansion;
            },
            set: function (value) {
                this._fullyDecodeReservedExpansion = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Http.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Http.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Http.prototype.toObject = function () {
            return {
                rules: (this.rules || []).map(function (m) { return m.toObject(); }),
                fullyDecodeReservedExpansion: this.fullyDecodeReservedExpansion
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Http.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Http.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                rules: (this.rules || []).map(function (m) { return m.toProtobufJSON(options); }),
                fullyDecodeReservedExpansion: this.fullyDecodeReservedExpansion
            };
        };
        return Http;
    }());
    Http.id = 'google.api.Http';
    /**
     * Message implementation for google.api.HttpRule
     */
    exports.HttpRule = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of HttpRule to deeply clone from
         */
        function HttpRule(_value) {
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
            this.additionalBindings = (_value.additionalBindings || []).map(function (m) { return new HttpRule(m); });
            HttpRule.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        HttpRule.deserializeBinary = function (bytes) {
            var instance = new HttpRule();
            HttpRule.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        HttpRule.refineValues = function (_instance) {
            _instance.selector = _instance.selector || '';
            _instance.body = _instance.body || '';
            _instance.responseBody = _instance.responseBody || '';
            _instance.additionalBindings = _instance.additionalBindings || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        HttpRule.deserializeBinaryFromReader = function (_instance, _reader) {
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
                        var messageInitializer11 = new HttpRule();
                        _reader.readMessage(messageInitializer11, HttpRule.deserializeBinaryFromReader);
                        (_instance.additionalBindings =
                            _instance.additionalBindings || []).push(messageInitializer11);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            HttpRule.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        HttpRule.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(HttpRule.prototype, "selector", {
            get: function () {
                return this._selector;
            },
            set: function (value) {
                this._selector = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "get", {
            get: function () {
                return this._get;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._put = this._post = this._delete = this._patch = this._custom = undefined;
                    this._pattern = HttpRule.PatternCase.get;
                }
                this._get = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "put", {
            get: function () {
                return this._put;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._get = this._post = this._delete = this._patch = this._custom = undefined;
                    this._pattern = HttpRule.PatternCase.put;
                }
                this._put = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "post", {
            get: function () {
                return this._post;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._get = this._put = this._delete = this._patch = this._custom = undefined;
                    this._pattern = HttpRule.PatternCase.post;
                }
                this._post = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "delete", {
            get: function () {
                return this._delete;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._get = this._put = this._post = this._patch = this._custom = undefined;
                    this._pattern = HttpRule.PatternCase.delete;
                }
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "patch", {
            get: function () {
                return this._patch;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._get = this._put = this._post = this._delete = this._custom = undefined;
                    this._pattern = HttpRule.PatternCase.patch;
                }
                this._patch = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "custom", {
            get: function () {
                return this._custom;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._get = this._put = this._post = this._delete = this._patch = undefined;
                    this._pattern = HttpRule.PatternCase.custom;
                }
                this._custom = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "body", {
            get: function () {
                return this._body;
            },
            set: function (value) {
                this._body = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "responseBody", {
            get: function () {
                return this._responseBody;
            },
            set: function (value) {
                this._responseBody = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "additionalBindings", {
            get: function () {
                return this._additionalBindings;
            },
            set: function (value) {
                this._additionalBindings = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "pattern", {
            get: function () {
                return this._pattern;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        HttpRule.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            HttpRule.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        HttpRule.prototype.toObject = function () {
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
                additionalBindings: (this.additionalBindings || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        HttpRule.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        HttpRule.prototype.toProtobufJSON = function (
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
                additionalBindings: (this.additionalBindings || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return HttpRule;
    }());
    exports.HttpRule.id = 'google.api.HttpRule';
    (function (HttpRule) {
        var PatternCase;
        (function (PatternCase) {
            PatternCase[PatternCase["none"] = 0] = "none";
            PatternCase[PatternCase["get"] = 1] = "get";
            PatternCase[PatternCase["put"] = 2] = "put";
            PatternCase[PatternCase["post"] = 3] = "post";
            PatternCase[PatternCase["delete"] = 4] = "delete";
            PatternCase[PatternCase["patch"] = 5] = "patch";
            PatternCase[PatternCase["custom"] = 6] = "custom";
        })(PatternCase = HttpRule.PatternCase || (HttpRule.PatternCase = {}));
    })(exports.HttpRule || (exports.HttpRule = {}));
    /**
     * Message implementation for google.api.CustomHttpPattern
     */
    var CustomHttpPattern = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CustomHttpPattern to deeply clone from
         */
        function CustomHttpPattern(_value) {
            _value = _value || {};
            this.kind = _value.kind;
            this.path = _value.path;
            CustomHttpPattern.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        CustomHttpPattern.deserializeBinary = function (bytes) {
            var instance = new CustomHttpPattern();
            CustomHttpPattern.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        CustomHttpPattern.refineValues = function (_instance) {
            _instance.kind = _instance.kind || '';
            _instance.path = _instance.path || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        CustomHttpPattern.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        CustomHttpPattern.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.kind) {
                _writer.writeString(1, _instance.kind);
            }
            if (_instance.path) {
                _writer.writeString(2, _instance.path);
            }
        };
        Object.defineProperty(CustomHttpPattern.prototype, "kind", {
            get: function () {
                return this._kind;
            },
            set: function (value) {
                this._kind = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomHttpPattern.prototype, "path", {
            get: function () {
                return this._path;
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        CustomHttpPattern.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            CustomHttpPattern.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        CustomHttpPattern.prototype.toObject = function () {
            return {
                kind: this.kind,
                path: this.path
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        CustomHttpPattern.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        CustomHttpPattern.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                kind: this.kind,
                path: this.path
            };
        };
        return CustomHttpPattern;
    }());
    CustomHttpPattern.id = 'google.api.CustomHttpPattern';

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AgentSurveyRequest = AgentSurveyRequest;
    exports.AgentSurveyResponse = AgentSurveyResponse;
    exports.Answer = Answer;
    exports.Choice = Choice;
    exports.CreateSurveyRequest = CreateSurveyRequest;
    exports.CustomHttpPattern = CustomHttpPattern;
    exports.DeleteSurveyRequest = DeleteSurveyRequest;
    exports.GRPC_SURVEYS_CLIENT_SETTINGS = GRPC_SURVEYS_CLIENT_SETTINGS;
    exports.GetAllSurveyAnswersRequest = GetAllSurveyAnswersRequest;
    exports.GetSurveyAnswersRequest = GetSurveyAnswersRequest;
    exports.GetSurveyRequest = GetSurveyRequest;
    exports.Http = Http;
    exports.ListSurveysRequest = ListSurveysRequest;
    exports.ListSurveysResponse = ListSurveysResponse;
    exports.MultipleChoiceQuestion = MultipleChoiceQuestion;
    exports.MultipleParameterQuestion = MultipleParameterQuestion;
    exports.OpenQuestion = OpenQuestion;
    exports.SingleChoiceQuestion = SingleChoiceQuestion;
    exports.SingleParameterQuestion = SingleParameterQuestion;
    exports.Survey = Survey;
    exports.SurveyAnswersResponse = SurveyAnswersResponse;
    exports.SurveyInfo = SurveyInfo;
    exports.SurveysClient = SurveysClient;
    exports.UpdateSurveyRequest = UpdateSurveyRequest;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ondewo-survey-client-angular.umd.js.map
