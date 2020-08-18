"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _namesList = _interopRequireDefault(require("../names-list"));

var _namesListAddModal = _interopRequireDefault(require("../names-list-add-modal"));

require("./app.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_namesList.default, null), /*#__PURE__*/_react.default.createElement(_namesListAddModal.default, null));
};

var _default = App;
exports.default = _default;