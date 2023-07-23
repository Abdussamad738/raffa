"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cart;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
require("../../styles/cart.css");
var _reactRouterDom = require("react-router-dom");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _productActions = require("../../utils/productActions");
var _fa = require("react-icons/fa");
var _reactBootstrap = require("react-bootstrap");
var _formik = require("formik");
var _material = require("@mui/material");
var _userActions = require("../../utils/userActions");
var _axios = _interopRequireWildcard(require("axios"));
var _DeliveryAddressForm = _interopRequireDefault(require("../DeliveryAddressForm"));
var _cartReducer = require("../../utils/cartReducer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
function Cart() {
  var cartItems = (0, _reactRedux.useSelector)(function (state) {
    var _state$cart$cart;
    return (_state$cart$cart = state.cart.cart) !== null && _state$cart$cart !== void 0 ? _state$cart$cart : [];
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showWarning = _useState2[0],
    setShowWarning = _useState2[1];
  console.log("cart :", JSON.stringify(cartItems));
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    shippingMethod = _useState4[0],
    setShippingMethod = _useState4[1];
  var handleShippingMethodChange = function handleShippingMethodChange(event) {
    var selectedMethod = event.target.value;
    console.log("from handleShipping:", selectedMethod);
    if (selectedMethod === 'deliverToHome' && subtotal < 100) {
      setShowWarning(true);
      console.log("from handleShipping if :", selectedMethod);
    } else if (selectedMethod === 'deliverToHome' && subtotal > 100) {
      setShippingMethod(selectedMethod);
      setShowWarning(false);
      console.log("from handleShipping if else:", shippingMethod, selectedMethod);
    } else {
      setShippingMethod(selectedMethod);
    }
  };
  var handleDeleteItem = function handleDeleteItem(productId) {
    // Filter out the item with the given productId and update the cartItems state
    // const updatedCartItems = cartItems.filter((item) => item.productDetails.productId !== productId);
    dispatch((0, _cartReducer.deleteFromCart)(productId));
  };
  var handleDecreaseQuantity = function handleDecreaseQuantity(productId) {
    var item = cartItems.find(function (item) {
      return item.productDetails.productId === productId;
    });
    if (item.productDetails.quantity > 1) {
      dispatch((0, _productActions.decreaseQuantity)(productId));
    }
  };
  (0, _react.useEffect)(function () {
    setOrder(function (prevOrder) {
      return _objectSpread(_objectSpread({}, prevOrder), {}, {
        shippingMethod: shippingMethod // Update the 'shippingMethod' property in the 'order' state
      });
    });

    console.log('Shipping method updated:', shippingMethod);
  }, [shippingMethod]);
  var handleIncreaseQuantity = function handleIncreaseQuantity(productId) {
    var product = cartItems.find(function (item) {
      return item.productDetails.productId === productId;
    });
    if (product) {
      // Check if the current quantity is less than productDetails.quantityInStock
      if (product.productDetails.quantity < product.productDetails.quantityInStock) {
        dispatch((0, _productActions.increaseQuantity)(productId));
      } else {
        // Show a warning or notification that the quantity cannot be increased further
        console.log("Cannot increase quantity further. Quantity in stock reached.");
      }
    }
  };

  // Calculate the total price for each item (price * quantity)
  var calculateTotalPrice = function calculateTotalPrice(item) {
    return item.productDetails.quantity * item.productDetails.price;
  };

  // Calculate the overall total price (sum of all items)
  var calculateOverallTotalPrice = function calculateOverallTotalPrice() {
    return cartItems.reduce(function (total, item) {
      return total + calculateTotalPrice(item);
    }, 0);
  };

  // Calculate the subtotal
  var subtotal = cartItems.reduce(function (total, item) {
    return total + item.productDetails.price * item.productDetails.quantity;
  }, 0);

  // Calculate the shipping charge
  var shippingCharge = shippingMethod === 'deliverToHome' ? 25 : 0;
  // const imageUrls = cartItems.Image.map((imageName) => require(`../assets/${imageName}`));

  //delivery Address submit
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.user.user;
  });
  console.log("user from cart ", JSON.stringify(user));

  // Find the maximum Delivery_Time from the cart
  var findMaxDeliveryTime = function findMaxDeliveryTime() {
    var maxDeliveryTime = 0;
    cartItems.forEach(function (item) {
      if (item.productDetails.Delivery_Time > maxDeliveryTime) {
        maxDeliveryTime = item.productDetails.Delivery_Time;
      }
    });
    // Calculate the expected delivery time by adding the maxDeliveryTime to the current timestamp
    var currentTime = new Date();
    var expectedDeliveryTime = new Date(currentTime.getTime() + maxDeliveryTime * 60 * 60 * 1000);
    return expectedDeliveryTime;
  };
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showForm = _useState6[0],
    setShowForm = _useState6[1];
  var handleClick = function handleClick() {
    setShowForm(true);
    // return(
    //   <DeliveryAddressForm/>
    // )
  };

  var delivery_time = findMaxDeliveryTime();
  var userDeliveryAddress = user ? user.deliveryAddress : null;
  var _useState7 = (0, _react.useState)({
      deliveryDate: delivery_time,
      // Logic to set the delivery date goes here
      status: 'Pending',
      // Value passed from cart component
      price: subtotal.toFixed(2),
      shippingMethod: shippingMethod,
      productRating: 0,
      // Value passed from cart component
      shippingRating: 0,
      // Value passed from cart component
      products: cartItems.map(function (item) {
        return {
          productId: item.productDetails.productId,
          quantity: item.productDetails.quantity,
          image: item.productDetails.imageUrl[0],
          productName: item.productDetails.name || null,
          productDescription: item.productDetails.description || null
        };
      }),
      // Other order properties
      deliveryAddress: userDeliveryAddress || null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    order = _useState8[0],
    setOrder = _useState8[1];
  var backendUrl = process.env.REACT_APP_BACKEND_URL;
  var handleCheckout = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(orderDeliveryAddress) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(user === null)) {
              _context.next = 3;
              break;
            }
            // User is not logged in, navigate to sign-in page
            navigate('/login');
            return _context.abrupt("return");
          case 3:
            console.log("order from handlecheckout", order);
            _context.prev = 4;
            _context.next = 7;
            return _axios.default.post("".concat(backendUrl, "/users/updateOrderHistory"), {
              userId: user._id,
              order: order
            });
          case 7:
            response = _context.sent;
            if (response.status === 200) {
              console.log("order updated successfully");
              dispatch((0, _productActions.clearCart)());
              // Order history updated successfully
              // You can redirect or show a success message here
            } else {
              console.log("failed to update order");
              // Failed to update order history
              // You can handle the error here
            }
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            console.error('Failed to update order history', _context.t0);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 11]]);
    }));
    return function handleCheckout(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var setOrderDeliveryAddress = function setOrderDeliveryAddress(address) {
    setOrder(function (prevOrder) {
      return _objectSpread(_objectSpread({}, prevOrder), {}, {
        deliveryAddress: address
      });
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container cart-page"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 col-lg-8"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Shipping method"), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "me-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    name: "shippingMethod",
    value: "deliverToHome",
    checked: subtotal >= 100 && shippingMethod === 'deliverToHome',
    onChange: handleShippingMethodChange
    // disabled={subtotal.toFixed(2) < 100}
  }), "Deliver to Home"), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    name: "shippingMethod",
    value: "instorePickup",
    checked: shippingMethod === 'instorePickup',
    onChange: handleShippingMethodChange
  }), "In-store Pickup")), showWarning && /*#__PURE__*/_react.default.createElement("h6", {
    style: {
      color: 'rgb(64, 13, 13)'
    }
  }, "Delivery is only available for orders above 100 AED.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "total-price"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Overall Total Price: ", (subtotal + shippingCharge).toFixed(2), " AED")), cartItems.length === 0 ? /*#__PURE__*/_react.default.createElement("p", null, "Your cart is empty.") : /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Items details"), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, cartItems.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.id,
      className: "col-12  mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "cart-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "item-image"
    }, console.log(JSON.stringify(item.productDetails.imageUrl[0])), /*#__PURE__*/_react.default.createElement("img", {
      src: "https://raffasports.s3.ca-central-1.amazonaws.com/".concat(item.productDetails.imageUrl[0])
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "item-info"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "item-header"
    }, /*#__PURE__*/_react.default.createElement("h5", null, item.productDetails.name), /*#__PURE__*/_react.default.createElement("p", null, item.productDetails.description), /*#__PURE__*/_react.default.createElement("p", null, "Color: ", item.productDetails.color), /*#__PURE__*/_react.default.createElement("p", null, "Size: ", item.productDetails.size)), /*#__PURE__*/_react.default.createElement("div", {
      className: "item-quantity"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-sm btn-primary",
      onClick: function onClick() {
        return handleDecreaseQuantity(item.productDetails.productId);
      }
    }, "-"), /*#__PURE__*/_react.default.createElement("span", null, item.productDetails.quantity), /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-sm btn-primary",
      onClick: function onClick() {
        return handleIncreaseQuantity(item.productDetails.productId);
      }
    }, "+"), /*#__PURE__*/_react.default.createElement("div", {
      className: "price"
    }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", {
      className: "label"
    }, "Price:"), " ", item.productDetails.price), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", {
      className: "label"
    }, "Total Price:"), " ", (item.productDetails.quantity * item.productDetails.price).toFixed(2)))))), /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-sm",
      onClick: function onClick() {
        return handleDeleteItem(item.productDetails.productId);
      }
    }, /*#__PURE__*/_react.default.createElement(_fa.FaTrash, null)));
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 col-lg-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Order summary"), /*#__PURE__*/_react.default.createElement("div", {
    className: "order-summary"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Subtotal:"), " ", subtotal.toFixed(2), " AED"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Shipping Charge:"), " ", shippingCharge.toFixed(2), " AED"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Total:"), " ", (subtotal + shippingCharge).toFixed(2), " AED"))), /*#__PURE__*/_react.default.createElement("div", null, shippingMethod === 'deliverToHome' ? /*#__PURE__*/_react.default.createElement("div", {
    className: "delivery"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Delivery Address"), user !== null && user !== void 0 && user.deliveryAddress && !showForm ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, "Existing Address:"), Object.entries(user.deliveryAddress).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];
    return /*#__PURE__*/_react.default.createElement("p", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("strong", null, capitalizeFirstLetter(key), ":"), " ", value);
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "primary",
    onClick: handleClick
  }, "Edit Delivery Address")) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DeliveryAddressForm.default, {
    setOrderDeliveryAddressInCart: setOrderDeliveryAddress
    // Pass the orderHistory.deliveryAddress as a prop
  })))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "store-pickup"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h5",
    sx: {
      color: 'primary.main'
    }
  }, "Store Pickup Location"), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      color: 'text.primary',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Box, null, "Bur Dubai, Al Raffa Road,"), /*#__PURE__*/_react.default.createElement(_material.Box, null, " Gateway Hotel Building, Shop No:121"), /*#__PURE__*/_react.default.createElement(_material.Box, null, "Dubai - United Arab Emirates"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return handleCheckout();
    }
  }, "Checkout")))));
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}