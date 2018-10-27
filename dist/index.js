"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var fak = new Proxy(function () {}, {
  get: function get(target, prop) {
    if (prop === Symbol.toPrimitive) return function () {
      return '__fak-mock__';
    };
    return fak;
  },
  apply: function apply() {
    return fak;
  },
  construct: function construct() {
    return fak;
  }
});
var _default = fak;
exports.default = _default;
