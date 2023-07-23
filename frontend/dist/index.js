"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _App = _interopRequireDefault(require("./App"));
var _reactRedux = require("react-redux");
var _store = _interopRequireDefault(require("../src/utils/store"));
var _styletronReact = require("styletron-react");
var _styletronEngineAtomic = require("styletron-engine-atomic");
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
var _styles = require("@mui/material/styles");
var _theme = _interopRequireDefault(require("./theme"));
var _reactAuthKit = require("react-auth-kit");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var root = _client.default.createRoot(document.getElementById('root'));
var engine = new _styletronEngineAtomic.Client();
root.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_styletronReact.Provider, {
  value: engine
}, /*#__PURE__*/_react.default.createElement(_reactAuthKit.AuthProvider, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: _store.default
}, /*#__PURE__*/_react.default.createElement(_App.default, null))))));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, _reportWebVitals.default)();