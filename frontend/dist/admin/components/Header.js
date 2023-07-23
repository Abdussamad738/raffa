"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _theme = require("../../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Header = function Header(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle;
  var theme = (0, _material.useTheme)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    mb: "30px"
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h2",
    color: colors.grey[100],
    fontWeight: "bold",
    sx: {
      m: "0 0 5px 0"
    }
  }, title), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h5",
    color: colors.greenAccent[400]
  }, subtitle));
};
var _default = Header;
exports.default = _default;