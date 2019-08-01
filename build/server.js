"use strict";

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server");

var _home = _interopRequireDefault(require("./app/home"));

var _server_template = _interopRequireDefault(require("./server_template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])();
server.get("/", function (req, res) {
  var app_string = (0, _server.renderToString)(React.createElement(_home["default"], null));
  res.send((0, _server_template["default"])(app_string));
});
server.listen(3001);
console.log("Server is running at 3001");