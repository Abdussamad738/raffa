"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopByCategory;
var _react = _interopRequireWildcard(require("react"));
require("../styles/shop.css");
var _material = require("@mui/material");
var _theme = require("./../theme");
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _CategoryFilter = _interopRequireDefault(require("./CategoryFilter"));
var _Layout = _interopRequireDefault(require("./Layout"));
var _fitness = _interopRequireDefault(require("../assets/fitness.png"));
var _CategoryProducts = _interopRequireDefault(require("./CategoryProducts"));
var _productActions = require("../utils/productActions");
var _NavigationBreadcrumbs = require("./NavigationBreadcrumbs");
var _Footer = _interopRequireDefault(require("./Footer"));
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
function ShopByCategory(_ref) {
  var filteredItems = _ref.filteredItems;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    filterOptions = _useState2[0],
    setFilterOptions = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedFilter = _useState4[0],
    setSelectedFilter = _useState4[1];
  var theme = (0, _material.useTheme)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedCategories = _useState6[0],
    setSelectedCategories = _useState6[1];
  var location = (0, _reactRouterDom.useLocation)();
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedCheckboxes = _useState8[0],
    setSelectedCheckboxes = _useState8[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  var products = (0, _reactRedux.useSelector)(function (state) {
    return state.products.products;
  });
  // Check if filteredItems is undefined, and if so, set it to an empty array
  console.log("from shop filteredItems:", JSON.stringify(filteredItems));
  var _useState9 = (0, _react.useState)(filteredItems ? filteredItems : []),
    _useState10 = _slicedToArray(_useState9, 2),
    items = _useState10[0],
    setItems = _useState10[1];
  console.log("from shop items:", JSON.stringify(items));

  // Rest of your component code...

  (0, _react.useEffect)(function () {
    // If filteredItems prop changes, update the items state accordingly
    if (filteredItems !== undefined) {
      setItems(filteredItems);
    }
  }, [filteredItems]);
  var handleFilterChange = function handleFilterChange(event) {
    setSelectedFilter(event.target.value);
  };
  var handleCheckboxChange = function handleCheckboxChange(event, updatedCheckboxes) {
    console.log(JSON.stringify(selectedCheckboxes));
    // setSelectedCheckboxes(updatedCheckboxes);
    var value = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes(function (prevSelectedCheckboxes) {
        return [].concat(_toConsumableArray(prevSelectedCheckboxes), [value]);
      });
    } else {
      setSelectedCheckboxes(function (prevSelectedCheckboxes) {
        return prevSelectedCheckboxes.filter(function (checkbox) {
          return checkbox !== value;
        });
      });
    }
  };
  var handleCategoryClick = function handleCategoryClick(category) {
    var updatedCheckboxes = [].concat(_toConsumableArray(selectedCheckboxes), [category]);
    setSelectedCheckboxes(updatedCheckboxes);
    console.log("handlCategory click in shop by category :", JSON.stringify(category));
    var matchedItems = products.filter(function (item) {
      return item.category.includes(category);
    });
    var updatedFilteredItems = matchedItems.length > 0 ? matchedItems : [];
    setItems(updatedFilteredItems);
    // setSearchQuery('');
  };

  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    data = _useState12[0],
    setData = _useState12[1];
  (0, _react.useEffect)(function () {
    var filteredItems = products.filter(function (item) {
      return selectedCheckboxes.some(function (checkbox) {
        return item.category.includes(checkbox);
      });
    });
    setItems(filteredItems);
    console.log("filtered item from useeffect:", JSON.stringify(filteredItems));
  }, [selectedCheckboxes]);

  // useEffect(()=>{
  //   return(
  //     <CategoryProducts filteredItems={filteredItems} />
  //   )

  // },[filteredItems])

  // const handleSearch = () => {
  //   console.log(JSON.stringify(products))
  //   const filtered = products.filter(
  //     (product) =>
  //       product.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       product.Description.toLowerCase().includes(searchQuery.toLowerCase())
  //   );

  //   console.log("filtered :",JSON.stringify(filtered))
  //   setFilteredItems(filtered);
  //   console.log(JSON.stringify(filteredItems))
  // };

  // useEffect(() => {
  //   // Filter products based on the search query when searchQuery prop changes
  //   handleSearch();
  // }, [searchQuery]);

  (0, _react.useEffect)(function () {
    dispatch((0, _productActions.fetchProducts)());
  }, [dispatch]);
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    className: "main",
    sx: {
      backgroundColor: colors.primary[400]
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h3"
  }, "Shop By Category"), /*#__PURE__*/_react.default.createElement(_material.Box, {
    className: "container sub",
    display: "flex"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    className: "filter scrollbar"
  }, /*#__PURE__*/_react.default.createElement(_CategoryFilter.default, {
    onFilterChange: handleFilterChange,
    selectedCheckboxes: selectedCheckboxes,
    onCheckboxChange: handleCheckboxChange,
    backgroundColor: colors.primary[400]
  })), /*#__PURE__*/_react.default.createElement(_material.Box, {
    className: "items scrollbar"
  }, items.length > 0 ? /*#__PURE__*/_react.default.createElement(_CategoryProducts.default, {
    filteredItems: items
  }) : /*#__PURE__*/_react.default.createElement(_Layout.default, {
    onCategoryClick: handleCategoryClick
  }))));
}
;