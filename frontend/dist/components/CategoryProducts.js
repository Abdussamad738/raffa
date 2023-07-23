"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CategoryProducts;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _renderStars = require("../utils/renderStars");
var _productActions = require("../utils/productActions");
var _handleLike = _interopRequireDefault(require("../utils/handleLike"));
var _Recommendation = _interopRequireDefault(require("./Recommendation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function CategoryProducts(_ref) {
  var filteredItems = _ref.filteredItems;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    likedItems = _useState2[0],
    setLikedItems = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    quantity = _useState4[0],
    setQuantity = _useState4[1];
  var dispatch = (0, _reactRedux.useDispatch)();

  //   const handleLikeItem = (item) => {
  //     // Get the current likedItems state from the Redux store

  //     if (likedItems.includes(item)) {
  //       const updatedLikedItems = likedItems.filter(
  //         (likedItem) => likedItem !== item
  //       );
  //       dispatch(updateLikedItems(updatedLikedItems)); // Dispatch the updateLikedItems action
  //     } else {
  //       const updatedLikedItems = [...likedItems, item];
  //       dispatch(updateLikedItems(updatedLikedItems)); // Dispatch the updateLikedItems action
  //     }
  //   };

  var handleQuantityChange = function handleQuantityChange(item, increment) {
    var newQuantity = quantity + increment;
    if (newQuantity >= 0 && newQuantity <= item.Quantity_in_Stock) {
      setQuantity(newQuantity);
    }
  };

  // Retrieve likedItems from local storage
  (0, _react.useEffect)(function () {
    var storedLikedItems = localStorage.getItem('likedItems');
    if (storedLikedItems) {
      setLikedItems(JSON.parse(storedLikedItems));
    }
  }, []);
  var handleLikeItem = function handleLikeItem(item) {
    if (likedItems.includes(item)) {
      setLikedItems(likedItems.filter(function (likedItem) {
        return likedItem !== item;
      }));
    } else {
      setLikedItems([].concat(_toConsumableArray(likedItems), [item]));
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "products row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"
  }, filteredItems.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "col mb-4 product-items",
      key: item._id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: {
        pathname: "/product/".concat(item._id),
        state: {
          likedItems: likedItems
        }
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "https://raffasports.s3.ca-central-1.amazonaws.com/".concat(item.image[0]),
      className: "card-img-top",
      alt: item.Name
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "card-title"
    }, item.Name, /*#__PURE__*/_react.default.createElement(_handleLike.default, {
      product: item,
      className: "handle-like"
    })), item.offerPrice ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
      className: "text-muted"
    }, "AED ", item.offerPrice), ' ', /*#__PURE__*/_react.default.createElement("del", null, "AED ", item.actualPrice)) : /*#__PURE__*/_react.default.createElement("div", null, "AED ", item.actualPrice), /*#__PURE__*/_react.default.createElement("div", {
      className: "rating"
    }, (0, _renderStars.renderStars)(item.ratings[0]), /*#__PURE__*/_react.default.createElement("span", {
      className: "text-muted"
    }, "(", item.ratings[1], " ratings)")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/product/".concat(item._id),
      className: "btn btn-primary btn-block mt-3"
    }, "Add to Cart"))));
  })));
}