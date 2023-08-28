"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var productschema = new _mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  imgURL: String
}, {
  timesstamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)('Product', productschema);
exports["default"] = _default;