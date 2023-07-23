"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductInventory;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _xDataGrid = require("@mui/x-data-grid");
var _material = require("@mui/material");
var _theme = require("../../theme");
var _axios = _interopRequireWildcard(require("axios"));
var _formik = require("formik");
var yup = _interopRequireWildcard(require("yup"));
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
require("../index.css");
var _productActions = require("../../utils/productActions");
var _Header = _interopRequireDefault(require("../components/Header"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
function ProductInventory() {
  //   const [products, setProducts] = useState([]);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openModal = _useState2[0],
    setOpenModal = _useState2[1];
  var theme = (0, _material.useTheme)();
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var colors = (0, _theme.tokens)(theme.palette.mode);
  var _useState5 = (0, _react.useState)({
      _id: '',
      name: '',
      actualPrice: '',
      offerPrice: '',
      sizes: '',
      color: '',
      description: '',
      dimension: '',
      features: '',
      image: '',
      category: '',
      ratings: '',
      specifications: '',
      quantityInStock: '',
      deliveryTime: ''
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    newProduct = _useState6[0],
    setNewProduct = _useState6[1];
  var isNonMobile = (0, _useMediaQuery.default)("(min-width:600px)");
  var columns = [{
    field: 'id',
    headerName: 'ID'
  }, {
    field: 'Name',
    headerName: 'Name'
  }, {
    field: 'actualPrice',
    headerName: 'Actual Price'
  }, {
    field: 'offerPrice',
    headerName: 'Offer Price'
  }, {
    field: 'sizes',
    headerName: 'Sizes'
  }, {
    field: 'color',
    headerName: 'Colour'
  }, {
    field: 'description',
    headerName: 'Description'
  }, {
    field: 'dimension',
    headerName: 'Dimension'
  }, {
    field: 'features',
    headerName: 'Features'
  }, {
    field: 'image',
    headerName: 'Image'
  }, {
    field: 'category',
    headerName: 'Category'
  }, {
    field: 'ratings',
    headerName: 'Ratings'
  }, {
    field: 'specifications',
    headerName: 'Specifications'
  }, {
    field: 'quantityInStock',
    headerName: 'Quantity In Stock'
  }, {
    field: 'deliveryTime',
    headerName: 'Delivery Time'
  }, {
    field: 'actions',
    headerName: 'Actions',
    renderCell: function renderCell(_ref) {
      var row = _ref.row;
      return /*#__PURE__*/_react.default.createElement(_material.Button, {
        variant: "contained",
        color: "primary",
        onClick: function onClick() {
          return handleEditProduct(row.id);
        }
      }, "Edit");
    }
  }];

  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchProducts());

  //   }, [dispatch]);

  var products = (0, _reactRedux.useSelector)(function (state) {
    return state.products.products;
  });
  var backendUrl = process.env.REACT_APP_BACKEND_URL;
  var formattedProducts = products.map(function (product) {
    return {
      id: product._id,
      Name: product.Name,
      actualPrice: product.actualPrice || null,
      offerPrice: product.offerPrice || null,
      sizes: product.sizes || null,
      color: product.colour || null,
      description: product.description || null,
      dimension: product.dimensions || null,
      features: product.features || null,
      image: product.image || null,
      category: product.category || null,
      ratings: product.ratings || null,
      specifications: product.specifications || null,
      quantityInStock: product.quantityInStock || null,
      deliveryTime: product.deliveryTime || null
    };
  });
  var _useState7 = (0, _react.useState)([{
      key: 'S',
      value: '100'
    }]),
    _useState8 = _slicedToArray(_useState7, 2),
    sizes = _useState8[0],
    setSizes = _useState8[1];
  var handleAddSize = function handleAddSize() {
    setSizes([].concat(_toConsumableArray(sizes), [{
      key: '',
      value: ''
    }]));
  };
  var handleRemoveSize = function handleRemoveSize(index) {
    var updatedSizes = _toConsumableArray(sizes);
    updatedSizes.splice(index, 1);
    setSizes(updatedSizes);
  };
  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var categoriesArray, coloursArray, featuresString, updatedValues, response, _err$response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log("from onSubmit", JSON.stringify(values));
            setError("");
            categoriesArray = values.category.split(',').map(function (category) {
              return category.trim();
            });
            coloursArray = values.colour.split(',').map(function (colour) {
              return colour.trim();
            }); // Handle features as an array of objects
            featuresString = values.features.split(',').map(function (feature) {
              return feature.trim();
            });
            updatedValues = _objectSpread(_objectSpread({}, values), {}, {
              features: featuresString,
              category: categoriesArray,
              colour: coloursArray
            });
            _context.prev = 6;
            _context.next = 9;
            return _axios.default.post("".concat(backendUrl, "/products/"), updatedValues);
          case 9:
            response = _context.sent;
            console.log(JSON.stringify(updatedValues));

            // Redirect the user after successful registration (optional)
            // Replace '/login' with the desired route for the login page
            _context.next = 17;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](6);
            if (_context.t0 && _context.t0 instanceof _axios.AxiosError) setError((_err$response = _context.t0.response) === null || _err$response === void 0 ? void 0 : _err$response.data.message);else if (_context.t0 && _context.t0 instanceof Error) setError(_context.t0.message);
            console.log("Error: ", _context.t0);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[6, 13]]);
    }));
    return function onSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var formik = (0, _formik.useFormik)({
    initialValues: {
      Name: '',
      actualPrice: '',
      offerPrice: '',
      sizes: [],
      colour: '',
      description: '',
      dimensions: '',
      features: '',
      image: '',
      category: '',
      ratings: '',
      specifications: '',
      quantityInStock: '',
      deliveryTime: '',
      instorePickupTime: ''
    },
    onSubmit: onSubmit
  });

  // console.log("products from productInventory:",formattedProducts)
  var handleEditProduct = function handleEditProduct(productId) {
    // Implement edit product logic here
    console.log('Editing product with ID:', productId);
  };
  var handleModalClose = function handleModalClose() {
    setOpenModal(false);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return setOpenModal(true);
    }
  }, "Add Product"), /*#__PURE__*/_react.default.createElement(_material.Box, {
    m: "20px"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    title: "Product Inventory",
    subtitle: "Managing the Products"
  }), /*#__PURE__*/_react.default.createElement(_material.Box, {
    m: "40px 0 0 0",
    height: "75vh",
    sx: {
      "& .MuiDataGrid-root": {
        border: "none"
      },
      "& .MuiDataGrid-cell": {
        borderBottom: "none"
      },
      "& .name-column--cell": {
        color: colors.greenAccent[300]
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: colors.blueAccent[700],
        borderBottom: "none"
      },
      "& .MuiDataGrid-virtualScroller": {
        backgroundColor: colors.primary[400]
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        backgroundColor: colors.blueAccent[700]
      },
      "& .MuiCheckbox-root": {
        color: "".concat(colors.greenAccent[200], " !important")
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_xDataGrid.DataGrid, {
    checkboxSelection: true,
    rows: formattedProducts,
    columns: columns
  }))), /*#__PURE__*/_react.default.createElement(_material.Modal, {
    open: openModal,
    onClose: handleModalClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-product"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    m: "20px"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    title: "Add Product",
    subtitle: "Add a New Product to the Inventory"
  }), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: formik.handleSubmit
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
    label: "Name",
    value: formik.values.Name,
    onChange: formik.handleChange,
    name: "Name"
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Actual Price",
    value: formik.values.actualPrice,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "actualPrice"
    // // error={touched.actualPrice && errors.actualPrice}
    // helperText={touched.actualPrice && errors.actualPrice}
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Offer Price",
    value: formik.values.offerPrice,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "offerPrice"
    // // error={touched.offerPrice && errors.offerPrice}
    // helperText={touched.offerPrice && errors.offerPrice}
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Colour",
    value: formik.values.colour,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "colour"
    // // error={touched.color && errors.color}
    // helperText={touched.color && errors.color}
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Description",
    value: formik.values.description,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "description"
    // // error={touched.description && errors.description}
    // helperText={touched.description && errors.description}
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Dimension",
    value: formik.values.dimensions,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "dimension"
    // // error={touched.dimension && errors.dimension}
    // helperText={touched.dimension && errors.dimension}
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Features",
    value: formik.values.features,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "features"
    // // error={touched.features && errors.features}
    // helperText={touched.features && errors.features}
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Image",
    value: formik.values.image,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "image"
    // // error={touched.image && errors.image}
    // helperText={touched.image && errors.image}
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Category",
    value: formik.values.category,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "category"
    // // error={touched.category && errors.category}
    // helperText={touched.category && errors.category}
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Ratings",
    value: formik.values.ratings,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "ratings"
    // // error={touched.ratings && errors.ratings}
    // helperText={touched.ratings && errors.ratings}
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Specifications",
    value: formik.values.specifications,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "specifications"
    // // error={touched.specifications && errors.specifications}
    // helperText={touched.specifications && errors.specifications}
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Quantity In Stock",
    value: formik.values.quantityInStock,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "quantityInStock"
    // // error={touched.quantityInStock && errors.quantityInStock}
    // helperText={touched.quantityInStock && errors.quantityInStock}
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Delivery Time",
    value: formik.values.deliveryTime,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "deliveryTime"
    // // error={touched.deliveryTime && errors.deliveryTime}
    // helperText={touched.deliveryTime && errors.deliveryTime}
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Instore Pick-up Time",
    value: formik.values.instorePickupTime,
    onChange: formik.handleChange
    // onBlur={handleBlur}
    ,
    name: "instorePickupTime"
    // // error={touched.deliveryTime && errors.deliveryTime}
    // helperText={touched.deliveryTime && errors.deliveryTime}
  }), sizes.map(function (size, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
      label: "Size ".concat(index + 1, " "),
      name: "sizes.".concat(index, ".key"),
      value: formik.values.sizes.key,
      onChange: formik.handleChange
      // onBlur={handleBlur}
      // // error={touched.sizes&& errors.sizes}
      // helperText={touched.sizes && errors.sizes}
    }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
      label: "Price ".concat(index + 1, " "),
      name: "sizes.".concat(index, ".value"),
      value: formik.values.sizes[index] === undefined ? '' : formik.values.sizes[index].value,
      onChange: formik.handleChange
      // onBlur={handleBlur}
    }), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return handleRemoveSize(index);
      }
    }, "Remove Size"));
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: handleAddSize
  }, "Add Size")), /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "end",
    mt: "20px"
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    type: "submit",
    color: "secondary",
    variant: "contained"
  }, "Add the product")))))));
}
;
var phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
var validationSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required")
});