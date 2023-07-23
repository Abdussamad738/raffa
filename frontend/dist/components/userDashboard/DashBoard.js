"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserDashboard;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactBootstrap = require("react-bootstrap");
var _formik = require("formik");
var _reactRouterDom = require("react-router-dom");
var _reactAuthKit = require("react-auth-kit");
var _userActions = require("../../utils/userActions");
var _productActions = require("../../utils/productActions");
var _material = require("@mui/material");
require("../../styles/userdashboard.css");
var _DeliveryAddressForm = _interopRequireDefault(require("../DeliveryAddressForm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // import { updateUserPhoneNumber } from '../utils/userActions';
function UserDashboard() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.user.user;
  }); // Assuming user data is stored in Redux state
  console.log("from user-dashboard,", JSON.stringify(user));
  var navigate = (0, _reactRouterDom.useNavigate)();
  var signIn = (0, _reactAuthKit.useSignIn)();
  // const orders = user.orderHistory;
  var cartItems = (0, _reactRedux.useSelector)(function (state) {
    return state.cart.cart;
  });
  var token = sessionStorage.getItem("token");
  console.log("token", token);
  // useEffect(() => {

  //   if (!user) {
  //     // Redirect to login page if user is not signed in
  //     navigate('/login');
  //     return null;
  //   }
  // }, []);

  // Formik form values and handlers for the delivery address section
  // const deliveryAddressFormik = useFormik({
  //   initialValues: {
  //     name: '',
  //     street: '',
  //     city:'',
  //     state: '',
  //     phoneNumber: '',
  //     postalCode: '',
  //   },
  //   onSubmit: (values) => {

  //   dispatch(updateUser(values));
  //   updateDeliveryAddress(user._id, values);
  //     // Handle form submission for delivery address insertion
  //     console.log('Delivery address form submitted', values);
  //     // Call API or dispatch Redux action to insert delivery address
  //   },
  // });

  // Mocked order history data
  var orderHistory = [{
    id: 1,
    productName: 'Product 1',
    quantity: 2,
    totalPrice: 100
  }, {
    id: 2,
    productName: 'Product 2',
    quantity: 1,
    totalPrice: 50
  }
  // Add more order history data here...
  ];
  // if (!user) {
  //   return null;
  // }

  console.log("user is:", JSON.stringify(user));
  var handleSetUser = function handleSetUser(user) {
    dispatch((0, _userActions.setUser)(user));
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

  // Update user
  var handleUpdateUser = function handleUpdateUser(updatedUser) {
    dispatch((0, _userActions.updateUser)(updatedUser));
  };

  // Remove user
  var handleRemoveUser = function handleRemoveUser() {
    dispatch((0, _userActions.removeUser)());
  };
  var _useState = (0, _react.useState)((user === null || user === void 0 ? void 0 : user.phone) || ''),
    _useState2 = _slicedToArray(_useState, 2),
    phone = _useState2[0],
    setPhone = _useState2[1];
  var _useState3 = (0, _react.useState)((user === null || user === void 0 ? void 0 : user.deliveryAddress) || ''),
    _useState4 = _slicedToArray(_useState3, 2),
    deliveryAddress = _useState4[0],
    setDeliveryAddress = _useState4[1];
  var handlePhoneChange = function handlePhoneChange(e) {
    setPhone(e.target.value);
  };
  var handleAddressChange = function handleAddressChange(e) {
    setDeliveryAddress(e.target.value);
  };
  var handleUpdateDetails = function handleUpdateDetails() {
    // Handle update details logic here
    console.log('Phone:', phone);
    console.log('Delivery Address:', deliveryAddress);
  };
  (0, _react.useEffect)(function () {
    if (!user) {
      // Redirect to login page if user is null
      navigate('/login');
    }
  }, [user, navigate]);
  if (!user) {
    // Show a loading spinner or message if user is null
    return /*#__PURE__*/_react.default.createElement("div", null, "Loading...");
  }
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    className: "dashboard-container"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Welcome, ", user.name), /*#__PURE__*/_react.default.createElement("h3", null, "Personal Details"), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      color: "##fff4f4"
    }
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Name:")), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      color: '#ffc8c8'
    }
  }, user.name)), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      color: "##fff4f4"
    }
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Email:")), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      color: '#ffc8c8'
    }
  }, user.email)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Phone:"), user.phone ? /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      color: '#ffc8c8'
    }
  }, user.phone) : /*#__PURE__*/_react.default.createElement(_material.TextField, {
    value: phone,
    onChange: handlePhoneChange,
    label: "Phone",
    variant: "outlined",
    fullWidth: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "delivery-address"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Delivery Address:"), /*#__PURE__*/_react.default.createElement(_DeliveryAddressForm.default, null)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "contained",
    color: "secondary",
    onClick: handleUpdateDetails
  }, "Update Details"));
}
;