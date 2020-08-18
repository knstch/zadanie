"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _app = _interopRequireDefault(require("./components/app"));

require("bootstrap/dist/css/bootstrap.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_app.default, null), document.getElementById('root'));