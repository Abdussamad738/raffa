"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _theme = require("../theme");
var _NavigationBreadcrumbs = require("./NavigationBreadcrumbs");
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
require("../styles/shop.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function CategoryFilter(_ref) {
  var onFilterChange = _ref.onFilterChange,
    selectedCheckboxes = _ref.selectedCheckboxes,
    onCheckboxChange = _ref.onCheckboxChange;
  var theme = (0, _material.useTheme)();
  var colors = (0, _theme.tokens)(theme.palette.mode);
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "filters",
    backgroundColor: colors.primary[100],
    "aria-labelledby": "filters-header"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_NavigationBreadcrumbs.NavigationBreadcrumbs, null)), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    component: "header",
    id: "filters-header"
  }, "Filters"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Exercise & Fitness",
    checked: selectedCheckboxes.includes('Exercise & Fitness'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Exercise & Fitness")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Team Sports",
    checked: selectedCheckboxes.includes('Team Sports'),
    color: "primary",
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Team Sports"))), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Football",
    checked: selectedCheckboxes.includes('Football'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Football")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Basketball",
    checked: selectedCheckboxes.includes('Basketball'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Basketball")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Volleyball",
    checked: selectedCheckboxes.includes('Volleyball'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Volleyball")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Cricket",
    checked: selectedCheckboxes.includes('Cricket'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Cricket")))))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Racket",
    checked: selectedCheckboxes.includes('Racket'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Racket Sports"))), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Badminton",
    checked: selectedCheckboxes.includes('Badminton'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Badminton")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Tennis",
    checked: selectedCheckboxes.includes('Tennis'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Tennis")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Table Tennis",
    checked: selectedCheckboxes.includes('Table Tennis'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Table Tennis")))))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Water",
    checked: selectedCheckboxes.includes('Water'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Water Sports")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Skating",
    checked: selectedCheckboxes.includes('Skating'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Skating"))), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Roller",
    checked: selectedCheckboxes.includes('Roller'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Roller Skating")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Inline",
    checked: selectedCheckboxes.includes('Inline'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Inline Skating")))))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Combat",
    checked: selectedCheckboxes.includes('Combat'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Combat")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Games",
    checked: selectedCheckboxes.includes('Games'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Games"))), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Billiards",
    checked: selectedCheckboxes.includes('Billiards'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Billiards")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Carrom",
    checked: selectedCheckboxes.includes('Carrom'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Carrom")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Darts",
    checked: selectedCheckboxes.includes('Darts'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Darts")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Cards",
    checked: selectedCheckboxes.includes('Cards'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Cards")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Others",
    checked: selectedCheckboxes.includes('Others'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Others")))))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Apparels",
    checked: selectedCheckboxes.includes('Apparels'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Apparels"))), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Clothing",
    checked: selectedCheckboxes.includes('Clothing'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Clothing")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Footwear",
    checked: selectedCheckboxes.includes('Footwear'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Footwear")))))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: onCheckboxChange,
    value: "Trophies",
    checked: selectedCheckboxes.includes('Trophies'),
    sx: {
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "#fff"
  }, "Trophies"))))));
}
;
var _default = CategoryFilter;
exports.default = _default;