webpackHotUpdate("static\\development\\pages\\tools.js",{

/***/ "./node_modules/antd/lib/_util/responsiveObserve.js":
false,

/***/ "./node_modules/antd/lib/card/Grid.js":
false,

/***/ "./node_modules/antd/lib/card/Meta.js":
false,

/***/ "./node_modules/antd/lib/card/index.js":
false,

/***/ "./node_modules/antd/lib/card/style/css.js":
false,

/***/ "./node_modules/antd/lib/col/index.js":
false,

/***/ "./node_modules/antd/lib/col/style/css.js":
false,

/***/ "./node_modules/antd/lib/grid/RowContext.js":
false,

/***/ "./node_modules/antd/lib/grid/col.js":
false,

/***/ "./node_modules/antd/lib/grid/index.js":
false,

/***/ "./node_modules/antd/lib/grid/row.js":
false,

/***/ "./node_modules/antd/lib/grid/style/css.js":
false,

/***/ "./node_modules/antd/lib/row/index.js":
false,

/***/ "./node_modules/antd/lib/row/style/css.js":
false,

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
false,

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
false,

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
false,

/***/ "./node_modules/enquire.js/src/Util.js":
false,

/***/ "./node_modules/enquire.js/src/index.js":
false,

/***/ "./pages/tools.js":
/*!************************!*\
  !*** ./pages/tools.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer/style/css */ "./node_modules/antd/lib/drawer/style/css.js");
/* harmony import */ var antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/switch/style/css */ "./node_modules/antd/lib/switch/style/css.js");
/* harmony import */ var antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/switch */ "./node_modules/antd/lib/switch/index.js");
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/antd/lib/select/style/css.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/tabs/style/css */ "./node_modules/antd/lib/tabs/style/css.js");
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_JsonView__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/JsonView */ "./components/JsonView/index.js");
/* harmony import */ var _components_QRCode__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/QRCode */ "./components/QRCode/index.js");
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Code */ "./components/Code/index.js");
/* harmony import */ var _tools_less__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tools.less */ "./pages/tools.less");
/* harmony import */ var _tools_less__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_tools_less__WEBPACK_IMPORTED_MODULE_23__);



















var _jsxFileName = "E:\\github\\chrome-plugins\\src\\pages\\tools.js";





var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_18___default.a.TabPane;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_16___default.a.Option;

var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__["default"])(_default, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__["default"])(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(_ref) {
        var req, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
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

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(_default).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "showDrawer", function () {
      _this.setState({
        visible: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "onClose", function () {
      _this.setState({
        visible: false
      });
    });

    _this.state = {
      tabType: "1",
      json: {
        "2": 2
      },
      visible: false
    };
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this));
    _this.callback = _this.callback.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__["default"])(_default, [{
    key: "getQueryValue",
    value: function getQueryValue(name) {
      var search = location.search.slice(1);
      var obj = {};
      search = search.split("&");
      search.forEach(function (item) {
        var _item = item.split("=");

        obj[_item[0]] = _item[1];
      });
      return obj[name] || null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var type = this.getQueryValue("type");
      console.log(type);
      this.setState({
        tabType: type
      });
    }
  }, {
    key: "onChange",
    value: function onChange(ev) {
      var json;

      try {
        json = JSON.parse(ev.target.value);
      } catch (error) {}

      if (json) {
        this.setState({
          json: json
        });
      }

      console.log(json, ev.target.value);
    }
  }, {
    key: "callback",
    value: function callback(key) {
      console.log(key);
      this.setState({
        tabType: key
      });
    }
  }, {
    key: "switchOnChange",
    value: function switchOnChange(checked) {
      console.log("switch to ".concat(checked));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_19___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_18___default.a, {
        animated: false,
        defaultActiveKey: this.state.tabType,
        activeKey: this.state.tabType,
        onChange: this.callback,
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(TabPane, {
        tab: "Json view",
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_components_JsonView__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(TabPane, {
        tab: "QR code",
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_components_QRCode__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(TabPane, {
        tab: "\u7F16\u7801\u8F6C\u6362",
        key: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_components_Code__WEBPACK_IMPORTED_MODULE_22__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(TabPane, {
        tab: "\u8EAB\u4EFD\u8BC1\u53F7\u7801\u751F\u6210",
        key: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Content of Tab Pane 3"), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(TabPane, {
        tab: "\u94F6\u884C\u5361\u53F7\u7801\u751F\u6210",
        key: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Content of Tab Pane 3")), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "menu",
        className: _tools_less__WEBPACK_IMPORTED_MODULE_23___default.a.menu,
        onClick: this.showDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
        title: "\u8BBE\u7F6E",
        placement: "right" // closable={false}
        ,
        onClose: this.onClose,
        visible: this.state.visible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("dl", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("dt", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "\u5F00\u542F\u8BB0\u5FC6"), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("dd", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
        defaultChecked: true,
        checkedChildren: "\u5F00",
        unCheckedChildren: "\u5173",
        onChange: this.switchOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("dl", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("dt", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Code \u4E3B\u9898"), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("dd", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_16___default.a, {
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(Option, {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "asdf"))))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_19___default.a.Component);



/***/ })

})
//# sourceMappingURL=tools.js.64d766d4ed25f1763d7b.hot-update.js.map