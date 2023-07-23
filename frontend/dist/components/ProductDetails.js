"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductDetails;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _bs = require("react-icons/bs");
var _reactRedux = require("react-redux");
var _productActions = require("../utils/productActions");
require("../styles/productdetails.css");
var _renderStars = require("../utils/renderStars");
var _material = require("@mui/material");
var _handleLike = _interopRequireDefault(require("../utils/handleLike"));
var _reactImageZooom = _interopRequireDefault(require("react-image-zooom"));
var _history = require("history");
var _reactBootstrap = require("react-bootstrap");
var _formik = require("formik");
var _Recommendation = _interopRequireDefault(require("./Recommendation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ProductDetails() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var history = (0, _history.createBrowserHistory)();
  var _useParams = (0, _reactRouterDom.useParams)(),
    productId = _useParams.productId;
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    quantity = _useState2[0],
    setQuantity = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showModal = _useState4[0],
    setShowModal = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedSize = _useState6[0],
    setSelectedSize = _useState6[1];
  var formik = (0, _formik.useFormik)({
    initialValues: {
      size: '',
      colour: ''
      // Other initial values...
    }
    // Other formik configurations...
  });

  var handleModalHide = function handleModalHide() {
    setShowModal(false);
  };
  (0, _react.useEffect)(function () {
    dispatch((0, _productActions.fetchProduct)(productId));
  }, [dispatch, productId]);
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showZoom = _useState8[0],
    setShowZoom = _useState8[1];
  var product = (0, _reactRedux.useSelector)(function (state) {
    return state.products.products.find(function (p) {
      return p._id === productId;
    });
  });
  var _useState9 = (0, _react.useState)(product.offerPrice || product.actualPrice),
    _useState10 = _slicedToArray(_useState9, 2),
    price = _useState10[0],
    setPrice = _useState10[1];
  console.log("from product details:", JSON.stringify(product));
  var likedItems = (0, _reactRedux.useSelector)(function (state) {
    return state.products.likedItems;
  });
  var _useState11 = (0, _react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    currentImage = _useState12[0],
    setCurrentImage = _useState12[1];
  var imageUrls = product.image.map(function (imageName) {
    return "https://raffasports.s3.ca-central-1.amazonaws.com/".concat(imageName);
  });

  // console.log("imageUrls :",JSON.stringify(imageUrls))

  // Store likedItems in local storage
  (0, _react.useEffect)(function () {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);
  if (!product) {
    return /*#__PURE__*/_react.default.createElement("div", null, "Loading...");
  }
  var handleDecreaseQuantity = function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  var handleIncreaseQuantity = function handleIncreaseQuantity() {
    if (quantity < product.quantityInStock) {
      setQuantity(quantity + 1);
    }
  };
  var handleAddToCart = function handleAddToCart() {
    // Logic to add product to cart with quantity

    var productDetails = {
      productId: productId,
      name: product.Name,
      description: product.description,
      color: formik.values.colour,
      size: formik.values.size,
      sizes: product.sizes || null,
      imageUrl: product.image,
      quantity: quantity,
      // You can set the initial quantity here, and later increase/decrease it if needed.
      price: price,
      quantityInStock: product.quantityInStock
    };
    dispatch((0, _productActions.addToCart)(productDetails));
    setShowModal(true);
    console.log("Added product ".concat(productId, " to cart with quantity ").concat(quantity));
  };
  var handleThumbnailClick = function handleThumbnailClick(index) {
    setCurrentImage(index);
    console.log("from handleThumbnailClick:", JSON.stringify(currentImage));
  };

  //   const { Images, Name, Ratings, actualPrice, offerPrice, colour, Description, Dimensions, Features } = product;

  return /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "thumbnail"
  }, product.image && /*#__PURE__*/_react.default.createElement("div", {
    className: "other-images"
  }, imageUrls.map(function (image, index) {
    return /*#__PURE__*/_react.default.createElement("img", {
      key: index,
      src: imageUrls[index],
      alt: "Image ".concat(index + 1),
      className: "thumbnail-image",
      onClick: function onClick() {
        return handleThumbnailClick(index);
      }
    });
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "main-image-container"
  }, /*#__PURE__*/_react.default.createElement(_reactImageZooom.default, {
    src: imageUrls[currentImage],
    alt: product.Name,
    key: currentImage,
    className: "main-image",
    zoom: "300"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-title"
  }, /*#__PURE__*/_react.default.createElement("h3", null, product.Name), /*#__PURE__*/_react.default.createElement(_handleLike.default, {
    product: product,
    className: "handle-like"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ratings"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "stars"
  }, (0, _renderStars.renderStars)(product.ratings[0])), /*#__PURE__*/_react.default.createElement("span", {
    className: "rating-text"
  }, "(", product.ratings[1], " ratings)")), /*#__PURE__*/_react.default.createElement(_formik.Formik, {
    initialValues: {
      // Other initial values...
      colour: '',
      size: ''
    },
    onSubmit: handleAddToCart // The function to handle form submission
  }, function (_ref) {
    var values = _ref.values,
      handleChange = _ref.handleChange;
    return /*#__PURE__*/_react.default.createElement(_formik.Form, null, /*#__PURE__*/_react.default.createElement(_material.Box, {
      sx: {
        marginBottom: '20px'
      }
    }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
      select: true,
      label: "Select Colour",
      name: "colour",
      value: formik.values.colour,
      onChange: formik.handleChange,
      variant: "filled",
      sx: {
        width: '50%'
      }
    }, product.colour.map(function (colourOption) {
      return /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
        key: colourOption,
        value: colourOption
      }, colourOption);
    }))), product.sizes && product.sizes.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_formik.Field, {
      as: _material.TextField,
      select: true,
      label: "Select Size",
      name: "size",
      value: formik.values.size,
      onChange: function onChange(e) {
        var selectedSize = e.target.value;
        formik.setFieldValue("size", selectedSize);
        var selectedSizeObject = product.sizes.find(function (size) {
          return size.key === selectedSize;
        });
        if (selectedSizeObject) {
          setPrice(selectedSizeObject.value);
        } else {
          setPrice(0);
        }
      },
      variant: "filled",
      sx: {
        width: '50%'
      }
    }, /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
      value: ""
    }, "Select Size"), product.sizes.map(function (size) {
      return /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
        key: size._id,
        value: size.key
      }, size.key);
    })), formik.values.size && price > 0 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Selected Size: ", formik.values.size), /*#__PURE__*/_react.default.createElement("p", null, "Price: AED ", price))) : /*#__PURE__*/_react.default.createElement("p", null, "Price: AED ", price), /*#__PURE__*/_react.default.createElement("div", {
      className: "detail-item"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Description:"), /*#__PURE__*/_react.default.createElement("p", null, product.description)), /*#__PURE__*/_react.default.createElement("div", {
      className: "detail-item"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Features:"), /*#__PURE__*/_react.default.createElement("ul", null, product.features.map(function (feature, index) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: index
      }, feature);
    }))), /*#__PURE__*/_react.default.createElement(_material.Box, {
      className: "quantity"
    }, /*#__PURE__*/_react.default.createElement(_material.Button, {
      className: "btn btn-primary quantity-btn",
      onClick: handleDecreaseQuantity
    }, "-"), /*#__PURE__*/_react.default.createElement("span", {
      className: "quantity-value"
    }, quantity), /*#__PURE__*/_react.default.createElement(_material.Button, {
      className: "btn btn-primary quantity-btn",
      onClick: handleIncreaseQuantity
    }, "+")), /*#__PURE__*/_react.default.createElement(_material.Box, {
      className: "action-buttons"
    }, /*#__PURE__*/_react.default.createElement(_material.Button, {
      type: "submit",
      variant: "contained",
      color: "primary"
    }, "Add to Cart")));
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
    show: showModal,
    onHide: handleModalHide,
    centered: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Title, null, "Cart")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body1"
  }, "Item added to cart successfully!"), /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center",
    mb: 2
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imageUrls[currentImage],
    alt: product.Name
  }), /*#__PURE__*/_react.default.createElement(_material.Box, {
    ml: 2
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body1",
    className: "item-name"
  }, product.Name))), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/user/cart"
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    color: "primary"
  }, "Go to Cart")))))));
}