"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _Header = _interopRequireDefault(require("../components/Header"));
var _PieChart = _interopRequireDefault(require("../components/PieChart"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Pie = function Pie() {
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    m: "20px"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    title: "Pie Chart",
    subtitle: "Simple Pie Chart"
  }), /*#__PURE__*/_react.default.createElement(_material.Box, {
    height: "75vh"
  }, /*#__PURE__*/_react.default.createElement(_PieChart.default, null)));
};
var _default = Pie;
exports.default = _default;