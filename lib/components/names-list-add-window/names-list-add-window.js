"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactToastify = require("react-toastify");

require("react-toastify/dist/ReactToastify.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var axios = require('axios');

_reactToastify.toast.configure();

var AddWindow = /*#__PURE__*/function (_Component) {
  _inherits(AddWindow, _Component);

  var _super = _createSuper(AddWindow);

  function AddWindow() {
    var _this;

    _classCallCheck(this, AddWindow);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "state", {
      firstName: '',
      lastName: ''
    });

    _defineProperty(_assertThisInitialized(_this), "Time", function () {
      window.location.reload(false);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeName", function (e) {
      _this.setState({
        firstName: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeSurname", function (e) {
      _this.setState({
        lastName: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();

      if (_this.state.firstName.length > 15 || _this.state.lastName.length > 15) {
        alert('Введите нормальное имя или фамилию');
        e.preventDefault();
      } else if (_this.state.firstName === '' || _this.state.lastName === '') {
        alert('Введите нормальное имя или фамилию');
        e.preventDefault();
      } else {
        axios.post('http://localhost:3004/names', {
          firstName: _this.state.firstName,
          lastName: _this.state.lastName
        }).then(function (response) {
          if (response.status === 201) {
            (0, _reactToastify.toast)("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E! \u0421\u0442\u0430\u0442\u0443\u0441: ".concat(response.status));
          } else {
            (0, _reactToastify.toast)("\u0423\u043F\u0441! \u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A :( \u0421\u0442\u0430\u0442\u0443\u0441 \u043E\u0442\u0432\u0435\u0442\u0430: ".concat(response.status));
          }
        }).then(setTimeout(_this.Time, 1700));
      }
    });

    _this.Time = _this.Time.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddWindow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
        controlId: "formBasicFirstName"
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, "\u0418\u043C\u044F:", /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
        type: "text",
        onChange: this.handleChangeName
      }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
        controlId: "formBasicLastName"
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F:", /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
        type: "text",
        onChange: this.handleChangeSurname
      }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
        variant: "primary",
        type: "submit"
      }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"));
    }
  }]);

  return AddWindow;
}(_react.Component);

exports.default = AddWindow;
;