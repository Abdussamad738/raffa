"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HandleLike;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactRedux = require("react-redux");
var _productActions = require("../utils/productActions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function HandleLike(_ref) {
  var product = _ref.product;
  var likedItems = (0, _reactRedux.useSelector)(function (state) {
    return state.products.likedItems;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var handleLike = function handleLike() {
    console.log("liked items from handlelike:", product);
    var isLiked = likedItems.some(function (likedItem) {
      return likedItem._id === product._id;
    });
    if (isLiked) {
      var updatedLikedItems = likedItems.filter(function (likedItem) {
        return likedItem._id !== product._id;
      });
      console.log("from isLiked,", JSON.stringify(updatedLikedItems));
      dispatch((0, _productActions.updateLikedItems)(updatedLikedItems));
    } else {
      var _updatedLikedItems = [].concat(_toConsumableArray(likedItems), [product]);
      dispatch((0, _productActions.updateLikedItems)(_updatedLikedItems));
    }
  };

  // Store likedItems in local storage
  // useEffect(() => {
  //   console.log("likeditems useEffect",JSON.stringify(likedItems.includes(product)));
  // }, [likedItems,product]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "like"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-link float-right",
    onClick: handleLike
  }, likedItems.some(function (likedItem) {
    return likedItem._id === product._id;
  }) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, {
    className: "text-danger"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, {
    className: "text-danger"
  })));
}