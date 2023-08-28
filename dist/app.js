"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _package = _interopRequireDefault(require("../package.json"));
var _productsRoutes = _interopRequireDefault(require("./routes/products.routes.js"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Create a new instance of express
var app = (0, _express["default"])();
app.set('pkg', _package["default"]);
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.get('/', function (req, res) {
  res.json({
    name: app.get('pkg').name,
    aouthor: app.get('pkg').author,
    descripcion: app.get('pkg').description,
    version: app.get('pkg').version
  });
});

// Define our routes
app.use('/api/products', _productsRoutes["default"]);
app.use('/api/auth', _authRoutes["default"]);
var _default = app;
exports["default"] = _default;