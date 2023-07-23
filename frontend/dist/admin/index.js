"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Topbar = _interopRequireDefault(require("./scenes/global/Topbar"));
var _Sidebar = _interopRequireDefault(require("./scenes/global/Sidebar"));
var _Dashboard = _interopRequireDefault(require("./scenes/Dashboard"));
var _Team = _interopRequireDefault(require("./scenes/Team"));
var _Invoices = _interopRequireDefault(require("./scenes/Invoices"));
var _Contacts = _interopRequireDefault(require("./scenes/Contacts"));
var _Bar = _interopRequireDefault(require("./scenes/Bar"));
var _Form = _interopRequireDefault(require("./scenes/Form"));
var _Line = _interopRequireDefault(require("./scenes/Line"));
var _Pie = _interopRequireDefault(require("./scenes/Pie"));
var _Faq = _interopRequireDefault(require("./scenes/Faq"));
var _Calendar = _interopRequireDefault(require("./scenes/Calendar"));
var _Users = _interopRequireDefault(require("./scenes/Users"));
require("./index.css");
var _reactRedux = require("react-redux");
var _Orders = _interopRequireDefault(require("./scenes/Orders"));
var _ProductInventory = _interopRequireDefault(require("./scenes/ProductInventory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // ... other route components
function AdminRoutes() {
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isSidebar = _useState2[0],
    setIsSidebar = _useState2[1];
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.user;
  });
  var token = sessionStorage.getItem("token");
  console.log("user from index.js:", JSON.stringify(user, token));
  if (!user || !token) {
    // If user or token is missing, redirect to login page or desired route
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
      to: "/login"
    });
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_Sidebar.default, {
    isSidebar: isSidebar
  }), /*#__PURE__*/_react.default.createElement("main", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement(_Topbar.default, {
    setIsSidebar: setIsSidebar
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_Dashboard.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/team",
    element: /*#__PURE__*/_react.default.createElement(_Team.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/contacts",
    element: /*#__PURE__*/_react.default.createElement(_Contacts.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/invoices",
    element: /*#__PURE__*/_react.default.createElement(_Invoices.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/form",
    element: /*#__PURE__*/_react.default.createElement(_Form.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/bar",
    element: /*#__PURE__*/_react.default.createElement(_Bar.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/pie",
    element: /*#__PURE__*/_react.default.createElement(_Pie.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/line",
    element: /*#__PURE__*/_react.default.createElement(_Line.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/faq",
    element: /*#__PURE__*/_react.default.createElement(_Faq.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/calendar",
    element: /*#__PURE__*/_react.default.createElement(_Calendar.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/users",
    element: /*#__PURE__*/_react.default.createElement(_Users.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/orders",
    element: /*#__PURE__*/_react.default.createElement(_Orders.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/products",
    element: /*#__PURE__*/_react.default.createElement(_ProductInventory.default, null)
  }))));
}
;
var _default = AdminRoutes;
exports.default = _default;