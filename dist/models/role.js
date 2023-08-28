"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var roleschema = new _mongoose.Schema({
  name: String
}, {
  versionKey: false
});
var _default = (0, _mongoose.model)('Role', roleschema);
exports["default"] = _default;