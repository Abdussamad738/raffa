"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _xDataGrid = require("@mui/x-data-grid");
var _theme = require("../../theme");
var _Header = _interopRequireDefault(require("../components/Header"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { mockDataInvoices } from "../data/mockData";

var Invoices = function Invoices() {
  var theme = (0, _material.useTheme)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  var columns = [{
    field: "id",
    headerName: "ID"
  }, {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell"
  }, {
    field: "phone",
    headerName: "Phone Number",
    flex: 1
  }, {
    field: "email",
    headerName: "Email",
    flex: 1
  }, {
    field: "cost",
    headerName: "Cost",
    flex: 1,
    renderCell: function renderCell(params) {
      return /*#__PURE__*/_react.default.createElement(_material.Typography, {
        color: colors.greenAccent[500]
      }, "$", params.row.cost);
    }
  }, {
    field: "date",
    headerName: "Date",
    flex: 1
  }];
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    m: "20px"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    title: "INVOICES",
    subtitle: "List of Invoice Balances"
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
  }));
};
var _default = Invoices;
exports.default = _default;