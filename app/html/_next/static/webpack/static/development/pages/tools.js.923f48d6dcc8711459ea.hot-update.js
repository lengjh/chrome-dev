webpackHotUpdate("static\\development\\pages\\tools.js",{

/***/ "./components/Code/index.js":
/*!**********************************!*\
  !*** ./components/Code/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var antd_lib_radio_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/radio/style/css */ "./node_modules/antd/lib/radio/style/css.js");
/* harmony import */ var antd_lib_radio_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var Base64__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Base64 */ "./node_modules/Base64/base64.js");
/* harmony import */ var Base64__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(Base64__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.less */ "./components/Code/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_14__);












var _jsxFileName = "E:\\github\\chrome-plugins\\src\\components\\Code\\index.js";



var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a.TextArea;
var unicode = {
  encode: function encode(str) {
    return escape(str).toLocaleLowerCase().replace(/%u/gi, "\\u");
  },
  decode: function decode(str) {
    return unescape(str.replace(/\\u/gi, "%u"));
  }
};

function strimHtml(str) {
  var reg = /<(?:.|\s)*?>/gi;
  return str.replace(reg, "");
}

var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(_default, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref) {
        var req, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
                return _context.abrupt("return", {
                  userAgent: userAgent
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(_default).call(this, props));
    _this.state = {
      visible: false,
      codeType: 1,
      beforeValue: "",
      afterValue: ""
    };
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.textChange = _this.textChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(_default, [{
    key: "onChange",
    value: function onChange(ev) {
      this.setState({
        codeType: ev.target.value
      });
      this.run(ev.target.value);
    }
  }, {
    key: "run",
    value: function run(type) {
      var beforeValue = this.state.beforeValue;
      var afterValue;

      switch (type) {
        case 1:
          try {
            afterValue = Base64__WEBPACK_IMPORTED_MODULE_13___default.a.btoa(window.unescape(window.encodeURIComponent(beforeValue)));
          } catch (error) {}

          break;

        case 2:
          try {
            afterValue = window.decodeURIComponent(window.escape(Base64__WEBPACK_IMPORTED_MODULE_13___default.a.atob(beforeValue)));
          } catch (error) {}

          break;

        case 3:
          try {
            afterValue = window.encodeURIComponent(beforeValue);
          } catch (error) {}

          break;

        case 4:
          try {
            afterValue = window.decodeURIComponent(beforeValue);
          } catch (error) {}

          break;

        case 5:
          try {
            afterValue = unicode.encode(beforeValue);
          } catch (error) {}

          break;

        case 6:
          try {
            afterValue = unicode.decode(beforeValue);
          } catch (error) {}

          break;

        case 7:
          try {
            afterValue = strimHtml(beforeValue);
          } catch (error) {}

          break;

        default:
          break;
      }

      this.setState({
        afterValue: afterValue
      });
    }
  }, {
    key: "textChange",
    value: function textChange(ev) {
      var value = ev.target.value;
      this.setState({
        beforeValue: value
      });
      this.run(this.state.codeType);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_14___default.a.buttonBox,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        onChange: this.onChange,
        onClick: this.onChange,
        value: this.state.codeType,
        buttonStyle: "solid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Button, {
        value: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Base64\u7F16\u7801"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Button, {
        value: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Base64\u89E3\u7801"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Button, {
        value: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Url\u7F16\u7801"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Button, {
        value: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Url\u89E3\u7801"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Button, {
        value: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Unicode\u7F16\u7801"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Button, {
        value: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Unicode\u89E3\u7801"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Button, {
        value: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "\u53BB\u9664HTML"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_14___default.a.codeBox,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(TextArea, {
        value: this.state.beforeValue,
        onChange: this.textChange,
        onKeyUp: this.textChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(TextArea, {
        readOnly: true,
        value: this.state.afterValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);



/***/ })

})
//# sourceMappingURL=tools.js.923f48d6dcc8711459ea.hot-update.js.map