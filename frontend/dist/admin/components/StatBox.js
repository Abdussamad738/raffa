"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _theme = require("../../theme");
var _ProgressCircle = _interopRequireDefault(require("./ProgressCircle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var StatBox = function StatBox(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    icon = _ref.icon,
    progress = _ref.progress,
    increase = _ref.increase;
  var theme = (0, _material.useTheme)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    width: "100%",
    m: "0 30px"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, null, icon, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h4",
    fontWeight: "bold",
    sx: {
      color: colors.grey[100]
    }
  }, title)), /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_ProgressCircle.default, {
    progress: progress
  }))), /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    mt: "2px"
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h5",
    sx: {
      color: colors.greenAccent[500]
    }
  }, subtitle), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h5",
    fontStyle: "italic",
    sx: {
      color: colors.greenAccent[600]
    }
  }, increase)));
};
var _default = StatBox;
exports.default = _default;