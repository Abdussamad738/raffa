"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _logo = _interopRequireDefault(require("./logo.svg"));
require("./App.css");
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Home = _interopRequireDefault(require("./components/Home"));
var _ShopByCategory = _interopRequireDefault(require("./components/ShopByCategory"));
var _CategoryProducts = _interopRequireDefault(require("./components/CategoryProducts"));
var _ProductDetails = _interopRequireDefault(require("./components/ProductDetails"));
var _OrderConfirmation = _interopRequireDefault(require("./components/OrderConfirmation"));
var _BulkOrderPage = _interopRequireDefault(require("./components/BulkOrderPage"));
var _BulkOrderDetails = _interopRequireDefault(require("./components/BulkOrderDetails"));
var _admin = _interopRequireDefault(require("./admin"));
var _Contact = _interopRequireDefault(require("./components/Contact"));
var _Deals = _interopRequireDefault(require("./components/Deals"));
var _Header = _interopRequireDefault(require("./components/Header"));
require("bootstrap/dist/css/bootstrap.min.css");
var _SearchResults = _interopRequireDefault(require("./components/SearchResults"));
var _Login = _interopRequireDefault(require("./components/Login"));
var _Register = _interopRequireDefault(require("./components/Register"));
var _reactAuthKit = require("react-auth-kit");
var _ProtectedRoute = _interopRequireDefault(require("./components/ProtectedRoute"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _styles = require("@mui/material/styles");
var _theme = _interopRequireWildcard(require("./theme"));
var _styletronReact = require("styletron-react");
var _material = require("@mui/material");
var _AdminAuthCheck = _interopRequireDefault(require("./components/AdminAuthCheck"));
var _index = _interopRequireDefault(require("./components/userDashboard/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// function AuthenticatedRoute({ element: Component, ...rest }) {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   if (!isAuthenticated()) {
//     // Redirect to login page if not authenticated
//     navigate("/login");
//     return null;
//   }

//   // Render the component if authenticated
//   return <Route {...rest} element={<Component />} />;
// }
function App() {
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchQuery = _useState2[0],
    setSearchQuery = _useState2[1];
  var isAuthenticated = (0, _reactAuthKit.useIsAuthenticated)();
  // const navigate = useNavigate();
  var handleSearch = function handleSearch(query) {
    setSearchQuery(query);
  };
  var _useMode = (0, _theme.useMode)(),
    _useMode2 = _slicedToArray(_useMode, 2),
    theme = _useMode2[0],
    colorMode = _useMode2[1];
  // const engine = new Styletron();
  // const ProtectedOrderHistory = () => {
  //   if (!isAuthenticated()) {
  //     navigate('/login');
  //     return null;
  //   }

  //   return <OrderHistory />;
  // };

  return /*#__PURE__*/_react.default.createElement(_theme.ColorModeContext.Provider, {
    value: colorMode
  }, /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(_material.CssBaseline, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_Header.default, {
    onSearch: handleSearch
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_Home.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/shop",
    element: /*#__PURE__*/_react.default.createElement(_ShopByCategory.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/search",
    element: /*#__PURE__*/_react.default.createElement(_SearchResults.default, {
      searchQuery: searchQuery
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/category/:categoryId",
    element: /*#__PURE__*/_react.default.createElement(_CategoryProducts.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/category",
    element: /*#__PURE__*/_react.default.createElement(_CategoryProducts.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/product/:productId",
    element: /*#__PURE__*/_react.default.createElement(_ProductDetails.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/confirmation",
    element: /*#__PURE__*/_react.default.createElement(_OrderConfirmation.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/bulkorder",
    element: /*#__PURE__*/_react.default.createElement(_BulkOrderPage.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/bulkorder/:orderId",
    element: /*#__PURE__*/_react.default.createElement(_BulkOrderDetails.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/contact",
    element: /*#__PURE__*/_react.default.createElement(_Contact.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/deals",
    element: /*#__PURE__*/_react.default.createElement(_Deals.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/footer",
    element: /*#__PURE__*/_react.default.createElement(_Footer.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/login",
    element: /*#__PURE__*/_react.default.createElement(_Login.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/user/*",
    element: /*#__PURE__*/_react.default.createElement(_index.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/register",
    element: /*#__PURE__*/_react.default.createElement(_Register.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/admin/*",
    element: /*#__PURE__*/_react.default.createElement(_AdminAuthCheck.default, null)
  })))));
}
var _default = App;
exports.default = _default;