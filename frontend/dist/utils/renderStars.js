"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderStars = renderStars;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function renderStars(rating) {
  var fullStars = Math.floor(rating);
  var halfStar = rating - fullStars >= 0.5;
  var emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  var stars = [];
  for (var i = 0; i < fullStars; i++) {
    stars.push( /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarFill, {
      key: i,
      className: "text-warning"
    }));
  }
  if (halfStar) {
    stars.push( /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarHalf, {
      key: fullStars,
      className: "text-warning"
    }));
  }
  for (var _i = 0; _i < emptyStars; _i++) {
    stars.push( /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Star, {
      key: fullStars + _i + (halfStar ? 1 : 0),
      className: "text-warning"
    }));
  }
  return stars;
}