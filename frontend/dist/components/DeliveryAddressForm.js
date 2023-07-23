"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _formik = require("formik");
var yup = _interopRequireWildcard(require("yup"));
var _reactRedux = require("react-redux");
var _userActions = require("../utils/userActions");
var _productActions = require("../utils/productActions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function DeliveryAddressForm(_ref) {
  var setOrderDeliveryAddressInCart = _ref.setOrderDeliveryAddressInCart;
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.user.user;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSubmitted = _useState2[0],
    setIsSubmitted = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    submittedData = _useState4[0],
    setSubmittedData = _useState4[1];
  var checkoutSchema = yup.object().shape({
    name: yup.string().required('required'),
    buildingName: yup.string().required('required'),
    suiteNo: yup.string().required('required'),
    street: yup.string().required('required'),
    state: yup.string().required('required'),
    phoneNo: yup.string().required('required'),
    country: yup.string().required('required')
  });
  console.log("from DeliveryAddressForm:", isSubmitted);
  var deliveryAddressFormik = (0, _formik.useFormik)({
    initialValues: {
      name: '',
      phoneNo: '',
      buildingName: '',
      suiteNo: '',
      street: '',
      state: 'Dubai',
      country: 'UAE'
    },
    validationSchema: checkoutSchema,
    onSubmit: function onSubmit(values) {
      setSubmittedData(values);
      setIsSubmitted(true);
      console.log("isSubmitted:", isSubmitted);
      // Call the callback function to set the order.deliveryAddress in the parent component
      setOrderDeliveryAddressInCart(values);
      dispatch((0, _userActions.updateUser)(values));
      (0, _userActions.updateDeliveryAddress)(user.user._id, values);
      // Handle form submission for delivery address insertion
      console.log('Delivery address form submitted', values);

      // Call API or dispatch Redux action to insert delivery address
    }
  });

  return /*#__PURE__*/_react.default.createElement(_material.Box, null, isSubmitted ?
  /*#__PURE__*/
  // Display the submitted data if the form is submitted
  _react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement("p", null, "Name: ", submittedData.name), /*#__PURE__*/_react.default.createElement("p", null, "Phone No: ", submittedData.phoneNo), /*#__PURE__*/_react.default.createElement("p", null, "Apt/Suite No: ", submittedData.suiteNo), /*#__PURE__*/_react.default.createElement("p", null, "Apt/Bldg Name: ", submittedData.buildingName), /*#__PURE__*/_react.default.createElement("p", null, "Street: ", submittedData.street), /*#__PURE__*/_react.default.createElement("p", null, "Dubai, UAE"), /*#__PURE__*/_react.default.createElement(_material.Button // Add a button to reset the form and enter new data
  , {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      setIsSubmitted(false);
      setSubmittedData({});
      deliveryAddressFormik.resetForm();
    }
  }, "Edit Address"))) : /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: deliveryAddressFormik.handleSubmit
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    variant: "filled",
    type: "text",
    label: "Name",
    onBlur: deliveryAddressFormik.handleBlur,
    onChange: deliveryAddressFormik.handleChange,
    value: deliveryAddressFormik.values.name,
    name: "name",
    error: !!deliveryAddressFormik.touched.name && !!deliveryAddressFormik.errors.name,
    helperText: deliveryAddressFormik.touched.name && deliveryAddressFormik.errors.name
  })), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    variant: "filled",
    type: "text",
    label: "Phone Number",
    onBlur: deliveryAddressFormik.handleBlur,
    onChange: deliveryAddressFormik.handleChange,
    value: deliveryAddressFormik.values.phoneNo,
    name: "phoneNo",
    error: !!deliveryAddressFormik.touched.phoneNo && !!deliveryAddressFormik.errors.phoneNo,
    helperText: deliveryAddressFormik.touched.phoneNo && deliveryAddressFormik.errors.phoneNo
  })), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    variant: "filled",
    type: "text",
    label: "Apt/Suite No",
    onBlur: deliveryAddressFormik.handleBlur,
    onChange: deliveryAddressFormik.handleChange,
    value: deliveryAddressFormik.values.suiteNo,
    name: "suiteNo",
    error: !!deliveryAddressFormik.touched.suiteNo && !!deliveryAddressFormik.errors.suiteNo,
    helperText: deliveryAddressFormik.touched.suiteNo && deliveryAddressFormik.errors.suiteNo
  })), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    variant: "filled",
    type: "text",
    label: "Apt/Bldg Name",
    onBlur: deliveryAddressFormik.handleBlur,
    onChange: deliveryAddressFormik.handleChange,
    value: deliveryAddressFormik.values.buildingName,
    name: "buildingName",
    error: !!deliveryAddressFormik.touched.buildingName && !!deliveryAddressFormik.errors.buildingName,
    helperText: deliveryAddressFormik.touched.buildingName && deliveryAddressFormik.errors.buildingName
  })), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    variant: "filled",
    type: "text",
    label: "Street Name",
    onBlur: deliveryAddressFormik.handleBlur,
    onChange: deliveryAddressFormik.handleChange,
    value: deliveryAddressFormik.values.street,
    name: "street",
    error: !!deliveryAddressFormik.touched.street && !!deliveryAddressFormik.errors.street,
    helperText: deliveryAddressFormik.touched.street && deliveryAddressFormik.errors.street
  })), /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    variant: "filled",
    type: "text",
    label: "State",
    onBlur: deliveryAddressFormik.handleBlur,
    onChange: deliveryAddressFormik.handleChange,
    value: deliveryAddressFormik.values.state,
    name: "state",
    error: !!deliveryAddressFormik.touched.state && !!deliveryAddressFormik.errors.state,
    helperText: deliveryAddressFormik.touched.state && deliveryAddressFormik.errors.state,
    disabled: true // Disable the State field
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    variant: "filled",
    type: "text",
    label: "Country",
    onBlur: deliveryAddressFormik.handleBlur,
    onChange: deliveryAddressFormik.handleChange,
    value: deliveryAddressFormik.values.country,
    name: "country",
    error: !!deliveryAddressFormik.touched.country && !!deliveryAddressFormik.errors.country,
    helperText: deliveryAddressFormik.touched.country && deliveryAddressFormik.errors.country,
    disabled: true // Disable the Country field
  })), /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Add Delivery Address")));
}
;
var _default = DeliveryAddressForm;
exports.default = _default;