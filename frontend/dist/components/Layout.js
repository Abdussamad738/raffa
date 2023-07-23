"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;
var _material = require("@mui/material");
var _react = _interopRequireWildcard(require("react"));
var _activewear = _interopRequireDefault(require("../assets/activewear.png"));
var _badminton = _interopRequireDefault(require("../assets/badminton.png"));
var _billiards = _interopRequireDefault(require("../assets/billiards.png"));
var _cards = _interopRequireDefault(require("../assets/cards.png"));
var _carroms = _interopRequireDefault(require("../assets/carroms.png"));
var _clothing = _interopRequireDefault(require("../assets/clothing.png"));
var _combat = _interopRequireDefault(require("../assets/combat.jpg"));
var _cricket = _interopRequireDefault(require("../assets/cricket.png"));
var _fitness = _interopRequireDefault(require("../assets/fitness.png"));
var _football = _interopRequireDefault(require("../assets/football.png"));
var _footwear = _interopRequireDefault(require("../assets/footwear.png"));
var _games = _interopRequireDefault(require("../assets/games.png"));
var _others = _interopRequireDefault(require("../assets/others.png"));
var _racket = _interopRequireDefault(require("../assets/racket.png"));
var _roller = _interopRequireDefault(require("../assets/roller.png"));
var _skateboards = _interopRequireDefault(require("../assets/skateboards.jpg"));
var _skating = _interopRequireDefault(require("../assets/skating.png"));
var _squash = _interopRequireDefault(require("../assets/squash.jpg"));
var _tabletennis = _interopRequireDefault(require("../assets/tabletennis.png"));
var _teamsports = _interopRequireDefault(require("../assets/teamsports.jpg"));
var _tennis = _interopRequireDefault(require("../assets/tennis.png"));
var _trophies = _interopRequireDefault(require("../assets/trophies.png"));
var _volleyball = _interopRequireDefault(require("../assets/volleyball.png"));
var _water = _interopRequireDefault(require("../assets/water.png"));
var _basketball = _interopRequireDefault(require("../assets/basketball.png"));
require("../styles/layout.css");
var _theme = require("./../theme");
var _reactRouterDom = require("react-router-dom");
var _CategoryProducts = _interopRequireDefault(require("./CategoryProducts"));
var _reactRedux = require("react-redux");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// const gridTemplateLargeScreens = `
//   "a a d d k k o p"
//   "a a e e k k q r"
//   "a a f f l l s t"
//   "a a g g l l u v"
//   "b b h h m m w w"
//   "b b i i m m x x"
//   "c c j j n n y y"
// `;
var gridTemplateLargeScreens = "\n  \"a b c d\"\n  \"a b c d\"\n  \"e f g h\"\n  \"e f g h\"\n  \"i j k l\"\n  \"i j k l\"\n";
var gridTemplateMediumScreens = "\n  \"a b c \"\n  \"a b c \"\n  \"d e f\"\n  \"d e f \"\n  \"g h i \"\n  \"g h i \"\n  \"j k l\"\n  \"j k l\"\n";

// const categories = [
//     { name: 'Team Sports', area: 'a' ,img:teamsports},
//     { name: 'Active wear', area: 'b' ,img:activewear},
//     { name: 'Exercise & Fitness', area: 'c',img:fitness },
//     { name: 'Football', area: 'd',img: football},
//     { name: 'Basketball', area: 'e' ,img:basketball},
//     { name: 'Volleyball', area: 'f' ,img:volleyball},
//     { name: 'Cricket', area: 'g' ,img:cricket},
//     { name: 'Clothing', area: 'h' ,img:clothing},
//     { name: 'Footwears', area: 'i',img:footwear },
//     { name: 'Water Sports', area: 'j',img:water },
//     { name: 'Games', area: 'k' ,img:games},
//     { name: 'Racket ', area: 'l' ,img:racket},
//     { name: 'Skating', area: 'm' ,img:skating},
//     { name: 'Combat', area: 'n' ,img:combat},
//     { name: 'Billiards', area: 'o' ,img:billiards},
//     { name: 'Carroms', area: 'p' ,img:carroms},
//     { name: 'Cards', area: 'q',img:cards },
//     { name: 'Others', area: 'r',img:others },
//     { name: 'Badminton', area: 's' ,img:badminton},
//     { name: 'Tennis', area: 't',img:tennis },
//     { name: 'Ping Pong', area: 'u',img:tabletennis },
//     { name: 'Squash', area: 'v' ,img:squash},
//     { name: 'Rollers', area: 'w',img:roller},
//     { name: 'Skateboarding', area: 'x' ,img:skateboards},
//     { name: 'Trophies', area: 'y' ,img:trophies},
//     // Add more categories as needed
//   ];

var categories = [{
  name: 'Apparels',
  area: 'i',
  img: _activewear.default
}, {
  name: 'Exercise & Fitness',
  area: 'j',
  img: _fitness.default
}, {
  name: 'Football',
  area: 'a',
  img: _football.default
}, {
  name: 'Basketball',
  area: 'd',
  img: _basketball.default
}, {
  name: 'Volleyball',
  area: 'c',
  img: _volleyball.default
}, {
  name: 'Cricket',
  area: 'b',
  img: _cricket.default
}, {
  name: 'Water & Combats',
  area: 'l',
  img: _water.default
}, {
  name: 'Game Room',
  area: 'e',
  img: _games.default
}, {
  name: 'Racket',
  area: 'k',
  img: _racket.default
}, {
  name: 'Skating',
  area: 'h',
  img: _skating.default
}, {
  name: 'Billiards',
  area: 'f',
  img: _billiards.default
}, {
  name: 'Trophies',
  area: 'g',
  img: _trophies.default
}
// Add more categories as needed
];

function Layout(_ref) {
  var onCategoryClick = _ref.onCategoryClick;
  var theme = (0, _material.useTheme)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  var isAboveMediumScreens = (0, _material.useMediaQuery)("(min-width: 1500px)");
  var navigate = (0, _reactRouterDom.useNavigate)();
  var data = (0, _reactRedux.useSelector)(function (state) {
    return state.products.products;
  });
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    filteredItems = _useState2[0],
    setFilteredItems = _useState2[1];
  var handleCategoryClick = function handleCategoryClick(category) {
    console.log("from handleCategoryClick", JSON.stringify(category));
    // const matchedItems = data.filter((item) => item.category === category.name);
    // const updatedFilteredItems = matchedItems.length > 0 ? matchedItems : [];

    onCategoryClick(category.name);
    // setFilteredItems(updatedFilteredItems);
    console.log("filtered item from layout :", JSON.stringify(category.name));

    // Redirect to the shop category page with the selected category and filtered items
    // navigate({
    //   pathname: '/category',
    //   state: {
    //     category: category.name,
    //     filteredItems: filteredItems.filter(item => item.category === category.name),
    //   },
    // });
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    width: "100%",
    height: "80%",
    display: "grid",
    gap: "1.5rem",
    marginTop: "5%",
    backgroundColor: colors.primary[400],
    sx: isAboveMediumScreens ? {
      gridTemplateColumns: "repeat(3, minmax(250px, 1fr))",
      gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
      gridTemplateAreas: gridTemplateLargeScreens
    } : {
      gridAutoColumns: "1fr",
      gridAutoRows: "80px",
      gridTemplateAreas: gridTemplateMediumScreens
    }
  }, categories.map(function (category) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: category.name,
      style: {
        gridArea: category.area,
        backgroundColor: 'rgb(229 234 243)'
      },
      className: "category",
      onClick: function onClick() {
        return handleCategoryClick(category);
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: category.img,
      alt: category.name
    }), /*#__PURE__*/_react.default.createElement("h6", null, category.name));
  })));
}