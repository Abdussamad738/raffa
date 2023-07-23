"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _formik = require("formik");
var yup = _interopRequireWildcard(require("yup"));
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
var _Header = _interopRequireDefault(require("../components/Header"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Form = function Form() {
  var isNonMobile = (0, _useMediaQuery.default)("(min-width:600px)");
  var handleFormSubmit = function handleFormSubmit(values) {
    console.log(values);
  };
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    m: "20px"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    title: "CREATE USER",
    subtitle: "Create a New User Profile"
  }), /*#__PURE__*/_react.default.createElement(_formik.Formik, {
    onSubmit: handleFormSubmit,
    initialValues: initialValues,
    validationSchema: checkoutSchema
  }, function (_ref) {
    var values = _ref.values,
      errors = _ref.errors,
      touched = _ref.touched,
      handleBlur = _ref.handleBlur,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit;
    return /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/_react.default.createElement(_material.Box, {
      display: "grid",
      gap: "30px",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      sx: {
        "& > div": {
          gridColumn: isNonMobile ? undefined : "span 4"
        }
      }
    }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
      fullWidth: true,
      variant: "filled",
      type: "text",
      label: "First Name",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.firstName,
      name: "firstName",
      error: !!touched.firstName && !!errors.firstName,
      helperText: touched.firstName && errors.firstName,
      sx: {
        gridColumn: "span 2"
      }
    }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
      fullWidth: true,
      variant: "filled",
      type: "text",
      label: "Last Name",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.lastName,
      name: "lastName",
      error: !!touched.lastName && !!errors.lastName,
      helperText: touched.lastName && errors.lastName,
      sx: {
        gridColumn: "span 2"
      }
    }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
      fullWidth: true,
      variant: "filled",
      type: "text",
      label: "Email",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.email,
      name: "email",
      error: !!touched.email && !!errors.email,
      helperText: touched.email && errors.email,
      sx: {
        gridColumn: "span 4"
      }
    }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
      fullWidth: true,
      variant: "filled",
      type: "text",
      label: "Contact Number",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.contact,
      name: "contact",
      error: !!touched.contact && !!errors.contact,
      helperText: touched.contact && errors.contact,
      sx: {
        gridColumn: "span 4"
      }
    }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
      fullWidth: true,
      variant: "filled",
      type: "text",
      label: "Address 1",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.address1,
      name: "address1",
      error: !!touched.address1 && !!errors.address1,
      helperText: touched.address1 && errors.address1,
      sx: {
        gridColumn: "span 4"
      }
    }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
      fullWidth: true,
      variant: "filled",
      type: "text",
      label: "Address 2",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.address2,
      name: "address2",
      error: !!touched.address2 && !!errors.address2,
      helperText: touched.address2 && errors.address2,
      sx: {
        gridColumn: "span 4"
      }
    })), /*#__PURE__*/_react.default.createElement(_material.Box, {
      display: "flex",
      justifyContent: "end",
      mt: "20px"
    }, /*#__PURE__*/_react.default.createElement(_material.Button, {
      type: "submit",
      color: "secondary",
      variant: "contained"
    }, "Create New User")));
  }));
};
var phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
var checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required")
});
var initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: ""
};
var _default = Form;
exports.default = _default;