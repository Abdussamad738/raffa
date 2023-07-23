"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _theme = require("../../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ProgressCircle = function ProgressCircle(_ref) {
  var _ref$progress = _ref.progress,
    progress = _ref$progress === void 0 ? "0.75" : _ref$progress,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "40" : _ref$size;
  var theme = (0, _material.useTheme)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  var angle = progress * 360;
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      background: "radial-gradient(".concat(colors.primary[400], " 55%, transparent 56%),\n            conic-gradient(transparent 0deg ").concat(angle, "deg, ").concat(colors.blueAccent[500], " ").concat(angle, "deg 360deg),\n            ").concat(colors.greenAccent[500]),
      borderRadius: "50%",
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  });
};
var _default = ProgressCircle;
exports.default = _default;