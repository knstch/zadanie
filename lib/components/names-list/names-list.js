"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _namesListItems = _interopRequireDefault(require("../names-list-items"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NamesList = function NamesList() {
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Table, {
    striped: true,
    bordered: true,
    hover: true,
    variant: "dark"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "\u0418\u043C\u044F"), /*#__PURE__*/_react.default.createElement("th", null, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement(_namesListItems.default, null)));
};

var _default = NamesList;
exports.default = _default;