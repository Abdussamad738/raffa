"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _fa = require("react-icons/fa");
var _logo = _interopRequireDefault(require("../assets/logo.png"));
require("../styles/header.css");
var _Badge = _interopRequireDefault(require("@mui/material/Badge"));
var _styles = require("@mui/material/styles");
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _ShoppingCart = _interopRequireDefault(require("@mui/icons-material/ShoppingCart"));
var _productActions = require("../utils/productActions");
var _SearchTwoTone = _interopRequireDefault(require("@mui/icons-material/SearchTwoTone"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Header(_ref) {
  var onSearch = _ref.onSearch;
  var location = (0, _reactRouterDom.useLocation)();
  var isHomePage = location.pathname === '/';
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchQuery = _useState2[0],
    setSearchQuery = _useState2[1];
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.user.user;
  });
  var handleSearchInputChange = function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  };
  var dispatch = (0, _reactRedux.useDispatch)();
  var handleSearch = function handleSearch() {
    onSearch(searchQuery);
  };
  (0, _react.useEffect)(function () {
    dispatch((0, _productActions.fetchProducts)());
  }, [dispatch]);

  // const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  //   '& .MuiBadge-badge': {
  //     right: -3,
  //     top: 13,
  //     border: `2px solid ${theme.palette.background.paper}`,
  //     padding: '0 4px',
  //   },
  // }));
  var cartItems = (0, _reactRedux.useSelector)(function (state) {
    var _state$cart$cart;
    return (_state$cart$cart = state.cart.cart) !== null && _state$cart$cart !== void 0 ? _state$cart$cart : [];
  });
  var cartItemCount = cartItems.length;
  var isSmallScreen = window.innerWidth <= 500; // Adjust the breakpoint as needed
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "fixed-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    className: "header-logo"
  }))), isSmallScreen ? /*#__PURE__*/_react.default.createElement("div", {
    className: "expand-button"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaBars, null)) : /*#__PURE__*/_react.default.createElement("div", {
    className: "header-links category-selector"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-item home-header"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/shop"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-item categories-header"
  }, "Categories")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/deals"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-item deals-header"
  }, "Deals")), user ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/user/orders"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-item orders-header"
  }, "My Orders")) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/login"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-item orders-header"
  }, "My Orders"))), !isHomePage && /*#__PURE__*/_react.default.createElement("div", {
    className: "search-input"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Search",
    value: searchQuery,
    onChange: handleSearchInputChange
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/search?query=".concat(searchQuery)
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleSearch
  }, "\uD83D\uDD0D"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "header-icons"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "user/wishlist"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, {
    className: "text-danger"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "user-icon"
  }, user ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/user"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaUser, null)) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/login"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaUser, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-icon"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "cart"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "user/cart"
  }, /*#__PURE__*/_react.default.createElement(_Badge.default, {
    badgeContent: cartItemCount,
    color: "secondary"
  }, /*#__PURE__*/_react.default.createElement(_ShoppingCart.default, null))))))));
}
;