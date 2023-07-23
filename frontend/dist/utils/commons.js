"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInput = exports.InputWrapper = exports.InnerContainer = exports.ErrorText = exports.Container = void 0;
var _input = require("baseui/input");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top:5%;\n"])));
exports.Container = Container;
var InnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 6rem 4rem;\n  border-radius: 1rem;\n  margin-down:4%;\n  box-shadow: 0 2px 8px rgba(15, 15, 15, 0.6);\n  background-color: rgb(219 218 218);\n"])));
exports.InnerContainer = InnerContainer;
var InputWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: 1rem 0;\n"])));
exports.InputWrapper = InputWrapper;
var StyledInput = (0, _styledComponents.default)(_input.Input)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 20em !important;\n"])));
exports.StyledInput = StyledInput;
var ErrorText = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: #eb5d5d;\n  font-size: 18px;\n  margin: 7px 0;\n"])));
exports.ErrorText = ErrorText;