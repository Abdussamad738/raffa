"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _Header = _interopRequireDefault(require("../components/Header"));
var _LineChart = _interopRequireDefault(require("../components/LineChart"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Line = function Line() {
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    m: "20px"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    title: "Line Chart",
    subtitle: "Simple Line Chart"
  }), /*#__PURE__*/_react.default.createElement(_material.Box, {
    height: "75vh"
  }, /*#__PURE__*/_react.default.createElement(_LineChart.default, null)));
};
var _default = Line;
exports.default = _default;