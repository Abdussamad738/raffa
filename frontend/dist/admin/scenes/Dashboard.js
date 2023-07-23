"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dashboard;
var _material = require("@mui/material");
var _theme = require("../../theme");
var _DownloadOutlined = _interopRequireDefault(require("@mui/icons-material/DownloadOutlined"));
var _Email = _interopRequireDefault(require("@mui/icons-material/Email"));
var _PointOfSale = _interopRequireDefault(require("@mui/icons-material/PointOfSale"));
var _PersonAdd = _interopRequireDefault(require("@mui/icons-material/PersonAdd"));
var _Traffic = _interopRequireDefault(require("@mui/icons-material/Traffic"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _LineChart = _interopRequireDefault(require("../components/LineChart"));
var _BarChart = _interopRequireDefault(require("../components/BarChart"));
var _StatBox = _interopRequireDefault(require("../components/StatBox"));
var _ProgressCircle = _interopRequireDefault(require("../components/ProgressCircle"));
var _reactRedux = require("react-redux");
var _productActions = require("../../utils/productActions");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { mockTransactions } from "../data/mockData.js";

// import GeographyChart from "../components/GeographyChart";

function Dashboard() {
  var theme = (0, _material.useTheme)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    dispatch((0, _productActions.fetchProducts)());
  }, [dispatch]);
  var products = (0, _reactRedux.useSelector)(function (state) {
    return state.products.products;
  });
  var data = [{
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95"
  }, {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45"
  }, {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95"
  }, {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95"
  }, {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55"
  }, {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95"
  }, {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20"
  }, {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45"
  }];
  console.log("from dashboard");
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    m: "20px"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    title: "DASHBOARD",
    subtitle: "Welcome to your dashboard"
  }), /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    sx: {
      backgroundColor: colors.blueAccent[700],
      color: colors.grey[100],
      fontSize: "14px",
      fontWeight: "bold",
      padding: "10px 20px"
    }
  }, /*#__PURE__*/_react.default.createElement(_DownloadOutlined.default, {
    sx: {
      mr: "10px"
    }
  }), "Download Reports"))), /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridAutoRows: "140px",
    gap: "20px"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    gridColumn: "span 3",
    backgroundColor: colors.primary[400],
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react.default.createElement(_StatBox.default, {
    title: "2,361",
    subtitle: "Emails Sent",
    progress: "0.75",
    increase: "+14%",
    icon: /*#__PURE__*/_react.default.createElement(_Email.default, {
      sx: {
        color: colors.greenAccent[600],
        fontSize: "26px"
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_material.Box, {
    gridColumn: "span 3",
    backgroundColor: colors.primary[400],
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react.default.createElement(_StatBox.default, {
    title: "1,225",
    subtitle: "Sales Obtained",
    progress: "0.50",
    increase: "+21%",
    icon: /*#__PURE__*/_react.default.createElement(_PointOfSale.default, {
      sx: {
        color: colors.greenAccent[600],
        fontSize: "26px"
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_material.Box, {
    gridColumn: "span 3",
    backgroundColor: colors.primary[400],
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react.default.createElement(_StatBox.default, {
    title: "1,441",
    subtitle: "New Clients",
    progress: "0.30",
    increase: "+5%",
    icon: /*#__PURE__*/_react.default.createElement(_PersonAdd.default, {
      sx: {
        color: colors.greenAccent[600],
        fontSize: "26px"
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_material.Box, {
    gridColumn: "span 3",
    backgroundColor: colors.primary[400],
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react.default.createElement(_StatBox.default, {
    title: "15,134",
    subtitle: "Traffic Received",
    progress: "0.80",
    increase: "+43%",
    icon: /*#__PURE__*/_react.default.createElement(_Traffic.default, {
      sx: {
        color: colors.greenAccent[600],
        fontSize: "26px"
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_material.Box, {
    gridColumn: "span 8",
    gridRow: "span 2",
    backgroundColor: colors.primary[400]
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    mt: "25px",
    p: "0 30px",
    display: "flex ",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h5",
    fontWeight: "600",
    color: colors.grey[100]
  }, "Revenue Generated"), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h3",
    fontWeight: "bold",
    color: colors.greenAccent[500]
  }, "AED 49,342.32")), /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.IconButton, null, /*#__PURE__*/_react.default.createElement(_DownloadOutlined.default, {
    sx: {
      fontSize: "26px",
      color: colors.greenAccent[500]
    }
  })))), /*#__PURE__*/_react.default.createElement(_material.Box, {
    height: "250px",
    m: "-20px 0 0 0"
  }, /*#__PURE__*/_react.default.createElement(_LineChart.default, {
    isDashboard: true
  }))), /*#__PURE__*/_react.default.createElement(_material.Box, {
    gridColumn: "span 4",
    gridRow: "span 2",
    backgroundColor: colors.primary[400],
    overflow: "auto"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "4px solid ".concat(colors.primary[500]),
    colors: colors.grey[100],
    p: "15px"
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    color: colors.grey[100],
    variant: "h5",
    fontWeight: "600"
  }, "Recent Transactions")), data.map(function (transaction, i) {
    return /*#__PURE__*/_react.default.createElement(_material.Box, {
      key: "".concat(transaction.txId, "-").concat(i),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "4px solid ".concat(colors.primary[500]),
      p: "15px"
    }, /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
      color: colors.greenAccent[500],
      variant: "h5",
      fontWeight: "600"
    }, transaction.txId), /*#__PURE__*/_react.default.createElement(_material.Typography, {
      color: colors.grey[100]
    }, transaction.user)), /*#__PURE__*/_react.default.createElement(_material.Box, {
      color: colors.grey[100]
    }, transaction.date), /*#__PURE__*/_react.default.createElement(_material.Box, {
      backgroundColor: colors.greenAccent[500],
      p: "5px 10px",
      borderRadius: "4px"
    }, "AED", transaction.cost));
  })), /*#__PURE__*/_react.default.createElement(_material.Box, {
    gridColumn: "span 4",
    gridRow: "span 2",
    backgroundColor: colors.primary[400],
    p: "30px"
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h5",
    fontWeight: "600"
  }, "Campaign"), /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "25px"
  }, /*#__PURE__*/_react.default.createElement(_ProgressCircle.default, {
    size: "125"
  }), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h5",
    color: colors.greenAccent[500],
    sx: {
      mt: "15px"
    }
  }, "AED 48,352 revenue generated"), /*#__PURE__*/_react.default.createElement(_material.Typography, null, "Includes extra misc expenditures and costs"))), /*#__PURE__*/_react.default.createElement(_material.Box, {
    gridColumn: "span 4",
    gridRow: "span 2",
    backgroundColor: colors.primary[400]
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h5",
    fontWeight: "600",
    sx: {
      padding: "30px 30px 0 30px"
    }
  }, "Sales Quantity"), /*#__PURE__*/_react.default.createElement(_material.Box, {
    height: "250px",
    mt: "-20px"
  }, /*#__PURE__*/_react.default.createElement(_BarChart.default, {
    isDashboard: true
  }))), /*#__PURE__*/_react.default.createElement(_material.Box, {
    gridColumn: "span 4",
    gridRow: "span 2",
    backgroundColor: colors.primary[400],
    padding: "30px"
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h5",
    fontWeight: "600",
    sx: {
      marginBottom: "15px"
    }
  }, "Geography Based Traffic"), /*#__PURE__*/_react.default.createElement(_material.Box, {
    height: "200px"
  }))));
}
;