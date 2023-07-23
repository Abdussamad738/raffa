"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Order;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _material = require("@mui/material");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Order() {
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.user.user;
  }); // Assuming user data is stored in Redux state
  var navigate = (0, _reactRouterDom.useNavigate)();
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
  var orders = user.orderHistory;
  console.log("orders from user/order.jsx", JSON.stringify(orders));
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h3"
  }, "Order History"), orders.length > 0 ? /*#__PURE__*/_react.default.createElement("ul", null, orders.map(function (order, index) {
    var _order$deliveryAddres;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: "order-item"
    }, /*#__PURE__*/_react.default.createElement(_material.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      sx: {
        backgroundColor: "#594747a3",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "5px"
      }
    }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
      sx: {
        color: "#fffffff0"
      }
    }, /*#__PURE__*/_react.default.createElement("strong", null, "Order placed:"), " ", new Date(order.deliveryDate).toLocaleString(undefined, {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    })), /*#__PURE__*/_react.default.createElement(_material.Typography, {
      sx: {
        color: "#fffffff0"
      }
    }, /*#__PURE__*/_react.default.createElement("strong", null, "Customer Name:"), " ", (_order$deliveryAddres = order.deliveryAddress) === null || _order$deliveryAddres === void 0 ? void 0 : _order$deliveryAddres.name), /*#__PURE__*/_react.default.createElement(_material.Typography, {
      sx: {
        color: "#fffffff0"
      }
    }, /*#__PURE__*/_react.default.createElement("strong", null, "Order Number:"), " ", order.orderNumber)), /*#__PURE__*/_react.default.createElement(_material.Box, {
      display: "flex",
      flexDirection: "row"
    }, order.products.map(function (product, index) {
      return /*#__PURE__*/_react.default.createElement(_material.Box, {
        display: "flex",
        flexDirection: "column",
        mb: 2
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "https://raffasports.s3.ca-central-1.amazonaws.com/".concat(product.image),
        alt: product.productName,
        style: {
          width: "100px",
          height: "100px",
          marginRight: "10px"
        }
      }), /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
        variant: "h6",
        component: "h3"
      }, product.productName), /*#__PURE__*/_react.default.createElement(_material.Typography, null, product.productDescription), /*#__PURE__*/_react.default.createElement(_material.Typography, null, /*#__PURE__*/_react.default.createElement("strong", null, "Quantity:"), " ", product.quantity)));
    }), /*#__PURE__*/_react.default.createElement(_material.Box, {
      pl: 2,
      className: "delivery-address"
    }, /*#__PURE__*/_react.default.createElement(_material.Typography, null, /*#__PURE__*/_react.default.createElement("strong", null, "Delivery Status:"), " ", order.status), /*#__PURE__*/_react.default.createElement(_material.Typography, null, /*#__PURE__*/_react.default.createElement("strong", null, "Delivery Address:"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, order.shippingMethod === 'instorePickup' ? /*#__PURE__*/_react.default.createElement("p", null, "Shipping method: In-store Pickup") : /*#__PURE__*/_react.default.createElement("p", null, Object.values(order.deliveryAddress).join(", "))))), /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Typography, null, /*#__PURE__*/_react.default.createElement("strong", null, "Order Total:"), " AED ", order.price))));
  })) : /*#__PURE__*/_react.default.createElement(_material.Typography, null, "No order history found.")));
}