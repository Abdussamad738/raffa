"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _productActions = _interopRequireDefault(require("./productActions"));
var _cartReducer = _interopRequireDefault(require("./cartReducer"));
var _userReducer = _interopRequireDefault(require("./userReducer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var rootReducer = (0, _redux.combineReducers)({
  products: _productActions.default,
  cart: _cartReducer.default,
  user: _userReducer.default
});
var _default = rootReducer;
exports.default = _default;