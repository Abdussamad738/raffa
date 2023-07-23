"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;
var _react = _interopRequireWildcard(require("react"));
var _Header = _interopRequireDefault(require("./Header"));
require("../styles/home.css");
var _reactMovingText = _interopRequireDefault(require("react-moving-text"));
var _logo = _interopRequireDefault(require("../assets/logo.png"));
var _BulkOrderPage = _interopRequireDefault(require("./BulkOrderPage"));
var _reactRouterDom = require("react-router-dom");
var _firsttab = _interopRequireDefault(require("../assets/firsttab.jpg"));
var _secondtab = _interopRequireDefault(require("../assets/secondtab.jpg"));
var _fa = require("react-icons/fa");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _ShopByCategory = _interopRequireDefault(require("./ShopByCategory"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Home(_ref) {
  var onSearch = _ref.onSearch;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchQuery = _useState2[0],
    setSearchQuery = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showShopByCategory = _useState4[0],
    setShowShopByCategory = _useState4[1];
  var handleSearch = function handleSearch(query) {
    setSearchQuery(query);
  };
  // const handleSearchIconClick = () => {
  //   setShowShopByCategory(!showShopByCategory);
  // };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "home-page"
  }, /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "wave"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "wave"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "wave"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "moving-component-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "moving-component-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_reactMovingText.default, {
    type: "fadeInFromLeft",
    duration: "1000ms",
    delay: "0s",
    direction: "normal",
    timing: "ease",
    iteration: "1",
    fillMode: "none",
    className: "left"
  }, "Raffa"), /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "Logo",
    style: {
      width: '25%',
      height: '80%'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactMovingText.default, {
    type: "fadeInFromRight",
    duration: "1000ms",
    delay: "0s",
    direction: "normal",
    timing: "ease",
    iteration: "1",
    fillMode: "none",
    className: "right"
  }, "Sports"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "arabic"
  }, "\u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u0645\u0639\u062F\u0627\u062A \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u0631\u0627\u0641"), /*#__PURE__*/_react.default.createElement("div", {
    className: "search-input"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Find your winning gear!",
    value: searchQuery,
    onChange: function onChange(e) {
      return handleSearch(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/search?query=".concat(searchQuery)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "search-icon",
    onClick: handleSearch
  }, /*#__PURE__*/_react.default.createElement(_Search.default, null))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "first-tab"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/bulkorder"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _firsttab.default,
    alt: "firsttab"
  }), /*#__PURE__*/_react.default.createElement("p", null, " Shop for your team"), /*#__PURE__*/_react.default.createElement(_fa.FaAngleDown, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "second-tab"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: {
      pathname: "/shop"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _secondtab.default,
    alt: "secondtab"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Shop by category"), /*#__PURE__*/_react.default.createElement(_fa.FaAngleDown, {
    className: "down"
  })))));
}