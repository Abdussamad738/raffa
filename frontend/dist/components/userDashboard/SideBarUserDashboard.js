"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SideBarUserDashboard;
var _react = _interopRequireWildcard(require("react"));
var _reactProSidebar = require("react-pro-sidebar");
var _material = require("@mui/material");
var _reactRouterDom = require("react-router-dom");
require("react-pro-sidebar/dist/css/styles.css");
var _theme = require("../../theme");
var _reactBootstrap = require("react-bootstrap");
var _reactRedux = require("react-redux");
var _userActions = require("../../utils/userActions");
var _productActions = require("../../utils/productActions");
var _AssistantDirection = _interopRequireDefault(require("@mui/icons-material/AssistantDirection"));
var _Favorite = _interopRequireDefault(require("@mui/icons-material/Favorite"));
var _ShoppingCart = _interopRequireDefault(require("@mui/icons-material/ShoppingCart"));
var _HomeOutlined = _interopRequireDefault(require("@mui/icons-material/HomeOutlined"));
var _PeopleOutlined = _interopRequireDefault(require("@mui/icons-material/PeopleOutlined"));
var _ContactsOutlined = _interopRequireDefault(require("@mui/icons-material/ContactsOutlined"));
var _ReceiptOutlined = _interopRequireDefault(require("@mui/icons-material/ReceiptOutlined"));
var _PersonOutlined = _interopRequireDefault(require("@mui/icons-material/PersonOutlined"));
var _CalendarTodayOutlined = _interopRequireDefault(require("@mui/icons-material/CalendarTodayOutlined"));
var _HelpOutlineOutlined = _interopRequireDefault(require("@mui/icons-material/HelpOutlineOutlined"));
var _BarChartOutlined = _interopRequireDefault(require("@mui/icons-material/BarChartOutlined"));
var _PieChartOutlineOutlined = _interopRequireDefault(require("@mui/icons-material/PieChartOutlineOutlined"));
var _TimelineOutlined = _interopRequireDefault(require("@mui/icons-material/TimelineOutlined"));
var _MenuOutlined = _interopRequireDefault(require("@mui/icons-material/MenuOutlined"));
var _MapOutlined = _interopRequireDefault(require("@mui/icons-material/MapOutlined"));
var _Person = _interopRequireDefault(require("@mui/icons-material/Person"));
var _ShoppingBag = _interopRequireDefault(require("@mui/icons-material/ShoppingBag"));
var _Inventory = _interopRequireDefault(require("@mui/icons-material/Inventory"));
var _NavigationBreadcrumbs = require("../NavigationBreadcrumbs");
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Item = function Item(_ref) {
  var title = _ref.title,
    to = _ref.to,
    icon = _ref.icon,
    selected = _ref.selected,
    setSelected = _ref.setSelected;
  var theme = (0, _material.useTheme)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  return /*#__PURE__*/_react.default.createElement(_reactProSidebar.MenuItem, {
    active: selected === title,
    style: {
      color: colors.grey[100]
    },
    onClick: function onClick() {
      return setSelected(title);
    },
    icon: icon
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, null, title), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: to
  }));
};
function SideBarUserDashboard() {
  var theme = (0, _material.useTheme)();
  var dispatch = (0, _reactRedux.useDispatch)();
  var cartItems = (0, _reactRedux.useSelector)(function (state) {
    return state.cart.cart;
  });
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.user.user;
  }); // Assuming user data is stored in Redux state
  var navigate = (0, _reactRouterDom.useNavigate)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapsed = _useState2[0],
    setIsCollapsed = _useState2[1];
  var _useState3 = (0, _react.useState)("Dashboard"),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var userName = (user === null || user === void 0 ? void 0 : user.name) || 'Guest';
  var initials = userName.split(' ').map(function (name) {
    return name[0].toUpperCase();
  }).join('');
  var handleItemClick = function handleItemClick() {
    console.log("from HAndleitemclick");
    if (user === null) {
      navigate('/login');
    } else {
      navigate('/user');
    }
  };
  var handleLogout = function handleLogout() {
    var cart = [];
    var carts = cartItems.map(function (item) {
      return cart.push(item);
    });
    console.log("from handlelogout:", JSON.stringify(user._id, cart));
    // Dispatch the removeUser action to clear user data from the store
    dispatch((0, _userActions.insertCartItems)(user._id, cart));
    dispatch((0, _userActions.removeUser)());
    dispatch((0, _productActions.clearCart)());
    // Get the cart items from the Redux store

    // Update the user's cart in the database

    // Clear the cart in the Redux store

    // Redirect to the login page
    navigate('/login');
  };
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      "& .pro-sidebar-inner": {
        background: "".concat(colors.primary[400], " !important")
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important"
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important"
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important"
      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important"
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_reactProSidebar.ProSidebar, {
    collapsed: isCollapsed
  }, !isCollapsed && /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ml: "15px",
    paddingTop: "8%"
  }, /*#__PURE__*/_react.default.createElement(_NavigationBreadcrumbs.NavigationBreadcrumbs, null)), /*#__PURE__*/_react.default.createElement(_reactProSidebar.Menu, {
    iconShape: "square"
  }, /*#__PURE__*/_react.default.createElement(_reactProSidebar.MenuItem, {
    onClick: function onClick() {
      return setIsCollapsed(!isCollapsed);
    },
    icon: isCollapsed ? /*#__PURE__*/_react.default.createElement(_AssistantDirection.default, null) : undefined,
    style: {
      margin: "10px 0 20px 0",
      color: colors.grey[100]
    }
  }, !isCollapsed && /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ml: "15px"
  })), /*#__PURE__*/_react.default.createElement(_reactProSidebar.MenuItem, {
    onClick: function onClick() {
      return setIsCollapsed(!isCollapsed);
    },
    icon: isCollapsed ? /*#__PURE__*/_react.default.createElement(_MenuOutlined.default, null) : undefined,
    style: {
      margin: "10px 0 20px 0",
      color: colors.grey[100]
    }
  }, !isCollapsed && /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ml: "15px"
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h3",
    color: colors.grey[100]
  }, "My Dashboard"), /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    onClick: function onClick() {
      return setIsCollapsed(!isCollapsed);
    }
  }, /*#__PURE__*/_react.default.createElement(_MenuOutlined.default, null)))), !isCollapsed && /*#__PURE__*/_react.default.createElement(_material.Box, {
    mb: "25px"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    sx: {
      bgcolor: "#958c8c"
    }
  }, initials)), /*#__PURE__*/_react.default.createElement(_material.Box, {
    textAlign: "center"
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h2",
    color: colors.grey[100],
    fontWeight: "bold",
    sx: {
      m: "10px 0 0 0"
    }
  }, user ? user.name : userName))), /*#__PURE__*/_react.default.createElement(_material.Box, {
    paddingLeft: isCollapsed ? undefined : "10%"
  }, /*#__PURE__*/_react.default.createElement(Item, {
    title: "Dashboard",
    to: "/user",
    icon: /*#__PURE__*/_react.default.createElement(_HomeOutlined.default, null),
    selected: selected,
    setSelected: setSelected
  }), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h6",
    color: colors.grey[300],
    sx: {
      m: "15px 0 5px 20px"
    }
  }, "Data"), /*#__PURE__*/_react.default.createElement(Item, {
    title: "Orders",
    to: "/user/orders",
    icon: /*#__PURE__*/_react.default.createElement(_ShoppingBag.default, null),
    selected: selected,
    setSelected: setSelected
  }), /*#__PURE__*/_react.default.createElement(Item, {
    title: "Wishlists",
    to: "/user/wishlist",
    icon: /*#__PURE__*/_react.default.createElement(_Favorite.default, null),
    selected: selected,
    setSelected: setSelected
  }), /*#__PURE__*/_react.default.createElement(Item, {
    title: "Cart",
    to: "/user/cart",
    icon: /*#__PURE__*/_react.default.createElement(_ShoppingCart.default, null),
    selected: selected,
    setSelected: setSelected
  }), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h6",
    color: colors.grey[300],
    sx: {
      m: "15px 0 5px 20px"
    }
  }, "Pages"), /*#__PURE__*/_react.default.createElement(Item, {
    title: "Contact Us",
    to: "/footer",
    icon: /*#__PURE__*/_react.default.createElement(_HelpOutlineOutlined.default, null),
    selected: selected,
    setSelected: setSelected
  }), /*#__PURE__*/_react.default.createElement(Item, {
    title: "FAQ Page",
    to: "/admin/faq",
    icon: /*#__PURE__*/_react.default.createElement(_HelpOutlineOutlined.default, null),
    selected: selected,
    setSelected: setSelected
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "secondary",
    onClick: handleLogout,
    className: "logout-sidebar"
  }, "Logout")))));
}
;