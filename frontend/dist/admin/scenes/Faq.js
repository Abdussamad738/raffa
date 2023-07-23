"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _Header = _interopRequireDefault(require("../../components/Header"));
var _Accordion = _interopRequireDefault(require("@mui/material/Accordion"));
var _AccordionSummary = _interopRequireDefault(require("@mui/material/AccordionSummary"));
var _AccordionDetails = _interopRequireDefault(require("@mui/material/AccordionDetails"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));
var _theme = require("../../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var FAQ = function FAQ() {
  var theme = (0, _material.useTheme)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    m: "20px"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    title: "FAQ",
    subtitle: "Frequently Asked Questions Page"
  }), /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    defaultExpanded: true
  }, /*#__PURE__*/_react.default.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null)
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: colors.greenAccent[500],
    variant: "h5"
  }, "An Important Question")), /*#__PURE__*/_react.default.createElement(_AccordionDetails.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))), /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    defaultExpanded: true
  }, /*#__PURE__*/_react.default.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null)
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: colors.greenAccent[500],
    variant: "h5"
  }, "Another Important Question")), /*#__PURE__*/_react.default.createElement(_AccordionDetails.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))), /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    defaultExpanded: true
  }, /*#__PURE__*/_react.default.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null)
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: colors.greenAccent[500],
    variant: "h5"
  }, "Your Favorite Question")), /*#__PURE__*/_react.default.createElement(_AccordionDetails.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))), /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    defaultExpanded: true
  }, /*#__PURE__*/_react.default.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null)
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: colors.greenAccent[500],
    variant: "h5"
  }, "Some Random Question")), /*#__PURE__*/_react.default.createElement(_AccordionDetails.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))), /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    defaultExpanded: true
  }, /*#__PURE__*/_react.default.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null)
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: colors.greenAccent[500],
    variant: "h5"
  }, "The Final Question")), /*#__PURE__*/_react.default.createElement(_AccordionDetails.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))));
};
var _default = FAQ;
exports.default = _default;