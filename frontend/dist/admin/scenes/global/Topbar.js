"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _theme = require("../../../theme");
var _InputBase = _interopRequireDefault(require("@mui/material/InputBase"));
var _LightModeOutlined = _interopRequireDefault(require("@mui/icons-material/LightModeOutlined"));
var _DarkModeOutlined = _interopRequireDefault(require("@mui/icons-material/DarkModeOutlined"));
var _NotificationsOutlined = _interopRequireDefault(require("@mui/icons-material/NotificationsOutlined"));
var _SettingsOutlined = _interopRequireDefault(require("@mui/icons-material/SettingsOutlined"));
var _PersonOutlined = _interopRequireDefault(require("@mui/icons-material/PersonOutlined"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Topbar = function Topbar() {
  var theme = (0, _material.useTheme)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  var colorMode = (0, _react.useContext)(_theme.ColorModeContext);
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    p: 2
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    backgroundColor: colors.primary[400],
    borderRadius: "3px"
  }, /*#__PURE__*/_react.default.createElement(_InputBase.default, {
    sx: {
      ml: 2,
      flex: 1
    },
    placeholder: "Search"
  }), /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    type: "button",
    sx: {
      p: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_Search.default, null))), /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex"
  }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    onClick: colorMode.toggleColorMode
  }, theme.palette.mode === "dark" ? /*#__PURE__*/_react.default.createElement(_DarkModeOutlined.default, null) : /*#__PURE__*/_react.default.createElement(_LightModeOutlined.default, null)), /*#__PURE__*/_react.default.createElement(_material.IconButton, null, /*#__PURE__*/_react.default.createElement(_NotificationsOutlined.default, null)), /*#__PURE__*/_react.default.createElement(_material.IconButton, null, /*#__PURE__*/_react.default.createElement(_SettingsOutlined.default, null)), /*#__PURE__*/_react.default.createElement(_material.IconButton, null, /*#__PURE__*/_react.default.createElement(_PersonOutlined.default, null))));
};
var _default = Topbar;
exports.default = _default;