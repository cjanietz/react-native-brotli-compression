"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var ReactNativeBrotliCompression = react_native_1.NativeModules.ReactNativeBrotliCompression;
var _BrotliModule = /** @class */ (function () {
    function _BrotliModule() {
        this._moduleInstance = ReactNativeBrotliCompression;
    }
    return _BrotliModule;
}());
exports._BrotliModule = _BrotliModule;
exports.BrotliModule = new _BrotliModule();
