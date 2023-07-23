"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationBreadcrumbs = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NavigationBreadcrumbs = function NavigationBreadcrumbs() {
  return /*#__PURE__*/_react.default.createElement(_material.Breadcrumbs, {
    separator: "|",
    "aria-label": "breadcrumb"
  }, /*#__PURE__*/_react.default.createElement(_material.Link, {
    underline: "hover",
    color: "inherit",
    component: _reactRouterDom.NavLink,
    to: "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_material.Link, {
    underline: "hover",
    color: "inherit",
    component: _reactRouterDom.NavLink,
    to: "/shop"
  }, "Shop"), /*#__PURE__*/_react.default.createElement(_material.Link, {
    underline: "hover",
    color: "inherit",
    component: _reactRouterDom.NavLink,
    to: "/user"
  }, "User"));
};
exports.NavigationBreadcrumbs = NavigationBreadcrumbs;