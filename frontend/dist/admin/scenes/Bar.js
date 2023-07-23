"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _Header = _interopRequireDefault(require("../components/Header"));
var _BarChart = _interopRequireDefault(require("../components/BarChart"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Bar = function Bar() {
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    m: "20px"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    title: "Bar Chart",
    subtitle: "Simple Bar Chart"
  }), /*#__PURE__*/_react.default.createElement(_material.Box, {
    height: "75vh"
  }, /*#__PURE__*/_react.default.createElement(_BarChart.default, null)));
};
var _default = Bar;
exports.default = _default;