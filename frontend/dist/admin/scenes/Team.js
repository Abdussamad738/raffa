"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _xDataGrid = require("@mui/x-data-grid");
var _theme = require("../../theme");
var _AdminPanelSettingsOutlined = _interopRequireDefault(require("@mui/icons-material/AdminPanelSettingsOutlined"));
var _LockOpenOutlined = _interopRequireDefault(require("@mui/icons-material/LockOpenOutlined"));
var _SecurityOutlined = _interopRequireDefault(require("@mui/icons-material/SecurityOutlined"));
var _Header = _interopRequireDefault(require("../components/Header"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { mockDataTeam } from '../data/mockData.js';

var Team = function Team() {
  var theme = (0, _material.useTheme)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  var mockDataTeam = [{
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin"
  }, {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager"
  }, {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user"
  }, {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin"
  }, {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user"
  }, {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager"
  }, {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user"
  }, {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user"
  }, {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin"
  }];
  var columns = [{
    field: "id",
    headerName: "ID"
  }, {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell"
  }, {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left"
  }, {
    field: "phone",
    headerName: "Phone Number",
    flex: 1
  }, {
    field: "email",
    headerName: "Email",
    flex: 1
  }, {
    field: "accessLevel",
    headerName: "Access Level",
    flex: 1,
    renderCell: function renderCell(_ref) {
      var access = _ref.row.access;
      return /*#__PURE__*/_react.default.createElement(_material.Box, {
        width: "60%",
        m: "0 auto",
        p: "5px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: access === "admin" ? colors.greenAccent[600] : access === "manager" ? colors.greenAccent[700] : colors.greenAccent[700],
        borderRadius: "4px"
      }, access === "admin" && /*#__PURE__*/_react.default.createElement(_AdminPanelSettingsOutlined.default, null), access === "manager" && /*#__PURE__*/_react.default.createElement(_SecurityOutlined.default, null), access === "user" && /*#__PURE__*/_react.default.createElement(_LockOpenOutlined.default, null), /*#__PURE__*/_react.default.createElement(_material.Typography, {
        color: colors.grey[100],
        sx: {
          ml: "5px"
        }
      }, access));
    }
  }];
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    m: "20px"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    title: "TEAM",
    subtitle: "Managing the Team Members"
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
    rows: mockDataTeam,
    columns: columns
  })));
};
var _default = Team;
exports.default = _default;