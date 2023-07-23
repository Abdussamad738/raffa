"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _CardContent = _interopRequireDefault(require("@mui/material/CardContent"));
var _CardMedia = _interopRequireDefault(require("@mui/material/CardMedia"));
var _material = require("@mui/material");
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _handleLike = _interopRequireDefault(require("../utils/handleLike"));
var _renderStars = require("../utils/renderStars");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Recommendation(_ref) {
  var handleThumbnailClick = _ref.handleThumbnailClick;
  var products = (0, _reactRedux.useSelector)(function (state) {
    return state.products.products;
  });
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    recommendations = _useState2[0],
    setRecommendations = _useState2[1];
  (0, _react.useEffect)(function () {
    // Select a random subset of 4 or 5 products
    var randomProducts = products.sort(function () {
      return 0.5 - Math.random();
    }).slice(0, 5);
    setRecommendations(randomProducts.map(function (product, index) {
      return _objectSpread(_objectSpread({}, product), {}, {
        index: index
      });
    }));
  }, [products]);
  var handleDelete = function handleDelete(productId) {
    var updatedRecommendations = recommendations.filter(function (product) {
      return product._id !== productId;
    });
    setRecommendations(updatedRecommendations);
  };
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    style: styles.cardRec
  }, recommendations.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_Card.default, {
      key: product._id,
      style: styles.card
    }, /*#__PURE__*/_react.default.createElement(_material.Box, {
      style: styles.imageContainer
    }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      color: "secondary",
      onClick: function onClick() {
        return handleDelete(product._id);
      },
      style: styles.closeButton
    }, /*#__PURE__*/_react.default.createElement(_Close.default, null)), /*#__PURE__*/_react.default.createElement(_handleLike.default, {
      product: product,
      className: "handle-like"
    })), /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/product/".concat(product._id),
      onClick: function onClick() {
        return handleThumbnailClick(product.index);
      }
    }, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
      component: "img",
      alt: product.Name,
      src: "https://raffasports.s3.ca-central-1.amazonaws.com/".concat(product.image[0]),
      style: styles.image
    }))), /*#__PURE__*/_react.default.createElement(_CardContent.default, {
      style: styles.content
    }, /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
      variant: "h6"
    }, product.Name), /*#__PURE__*/_react.default.createElement(_material.Typography, {
      variant: "subtitle1"
    }, "Price: AED ", product.offerPrice || product.actualPrice), /*#__PURE__*/_react.default.createElement("div", {
      className: "ratings"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "stars"
    }, (0, _renderStars.renderStars)(product.ratings[0])), /*#__PURE__*/_react.default.createElement("span", {
      className: "rating-text"
    }, "(", product.ratings[1], " )")))));
  }));
}
;
var _default = Recommendation;
exports.default = _default;
var styles = {
  cardRec: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '16px'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '16px',
    flex: 1
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    // top: '8px',
    right: '8px',
    zIndex: 1
  },
  image: {
    width: '100%',
    height: '180px'
    // marginRight: '16px',
  },

  content: {
    flex: 1
  }
};