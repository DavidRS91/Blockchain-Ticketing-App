webpackHotUpdate(8,{

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(475);

var _routes = __webpack_require__(667);

var _generator = __webpack_require__(1213);

var _generator2 = _interopRequireDefault(_generator);

var _web = __webpack_require__(672);

var _Layout = __webpack_require__(997);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/pages/index.js?entry";


var EventsIndex = function (_Component) {
  (0, _inherits3.default)(EventsIndex, _Component);

  function EventsIndex(props) {
    (0, _classCallCheck3.default)(this, EventsIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EventsIndex.__proto__ || (0, _getPrototypeOf2.default)(EventsIndex)).call(this, props));

    _this.open = function () {
      return _this.setState({ open: true });
    };

    _this.close = function () {
      return _this.setState({ open: false });
    };

    _this.state = {
      account: "",
      loaded: false,
      open: false
    };
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EventsIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _web.web3Account.then(function (acct) {
        _this2.setState({
          account: acct,
          loaded: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var account = this.state.account;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, !_web.web3Found && this.state.loaded ? _react2.default.createElement("div", {
        style: {
          textAlign: "center",
          backgroundColor: "#E5E3E3",
          padding: "10px",
          marginLeft: "150px",
          marginRight: "150px",
          borderRadius: "15px",
          color: "#7F7777"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, {
        name: "warning circle",
        style: { color: "#0c8346", fontSize: "40px" },
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement("p", { style: { fontSize: "17px", fontWeight: "700" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Uh oh! Looks like you don't have Metamask."), _react2.default.createElement("a", {
        href: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",
        target: "_blank",
        style: {
          fontWeight: "700",
          fontSize: "17px",
          color: "#0c8346",
          fontStyle: "italic",
          whiteSpace: "pre"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Click here to install", "    "), _react2.default.createElement(_semanticUiReact.Modal, {
        open: this.state.open,
        trigger: _react2.default.createElement("button", {
          onClick: this.open,
          style: {
            fontWeight: "700",
            fontSize: "17px",
            color: "#0c8346",
            fontStyle: "italic",
            whiteSpace: "pre",
            border: "none",
            backgroundColor: "rgba(255,255,255,0)"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, "    ", "What is Metamask?"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Metamask"), _react2.default.createElement(_semanticUiReact.Modal.Content, { image: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { wrapped: true, size: "medium", src: "/static/metamask.svg", __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Your Connection to the Ethereum Blockchain"), _react2.default.createElement("p", { style: { color: "black" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Metamask is a google chrome extension that enables users to interact with the Ethereum blockchain and provides them with a digital wallet for making transactions on the blockchain."), _react2.default.createElement("p", { style: { color: "black" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Users of Baldy need to install Metamask in order to purchase tickets, as your Metamask wallet address will serve as proof of ownership for tickets you have purchased, and Metamask will give you access to the events stored on the blockchain."), _react2.default.createElement(_semanticUiReact.Button, { content: "Got it", onClick: this.close, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }))))) : "", _react2.default.createElement("div", { style: { display: "flex", justifyContent: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement("img", {
        src: "/static/logo.png",
        alt: "my image",
        style: { alignSelf: "center", height: "500px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      })), _react2.default.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement("i", { "class": "fas fa-info-circle fa-3x", __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), _react2.default.createElement("h3", { style: { paddingLeft: "10px", paddingBottom: "20px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "Getting Started With Baldy")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), _react2.default.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement("i", { "class": "fab fa-ethereum fa-4x", __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), _react2.default.createElement("h3", { style: { paddingLeft: "10px", paddingBottom: "20px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, "Hosted on the Ethereum Rinkeby Test Network")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }));
    }
  }]);

  return EventsIndex;
}(_react.Component);

exports.default = EventsIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkljb24iLCJIZWFkZXIiLCJNb2RhbCIsIkltYWdlIiwiQnV0dG9uIiwiTGluayIsImdlbmVyYXRvciIsIndlYjMiLCJ3ZWIzRm91bmQiLCJ3ZWIzQWNjb3VudCIsIkxheW91dCIsIkV2ZW50c0luZGV4IiwicHJvcHMiLCJvcGVuIiwic2V0U3RhdGUiLCJjbG9zZSIsInN0YXRlIiwiYWNjb3VudCIsImxvYWRlZCIsImJpbmQiLCJ0aGVuIiwiYWNjdCIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRTdHlsZSIsIndoaXRlU3BhY2UiLCJib3JkZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnblNlbGYiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTSxBQUFRLEFBQU8sQUFBTzs7QUFDM0MsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBUyxBQUFNLEFBQVcsQUFBbUI7O0FBQzdDLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRWIsQTt1Q0FDSjs7dUJBQUEsQUFBWSxPQUFPO3dDQUFBOztnSkFBQSxBQUNYOztVQURXLEFBb0JuQixPQUFPLFlBQUE7YUFBTSxNQUFBLEFBQUssU0FBUyxFQUFFLE1BQXRCLEFBQU0sQUFBYyxBQUFRO0FBcEJoQjs7VUFBQSxBQXFCbkIsUUFBUSxZQUFBO2FBQU0sTUFBQSxBQUFLLFNBQVMsRUFBRSxNQUF0QixBQUFNLEFBQWMsQUFBUTtBQXJCakIsQUFF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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/dscott/projects/baldy/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dscott/projects/baldy/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC42YjNjYjA4YzUwYjY0ZDFmYzA5My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MjZkMDE5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBJY29uLCBIZWFkZXIsIE1vZGFsLCBJbWFnZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlcy5qc1wiO1xuaW1wb3J0IGdlbmVyYXRvciBmcm9tIFwiLi4vZXRoZXJldW0vZ2VuZXJhdG9yXCI7XG5pbXBvcnQgeyB3ZWIzLCB3ZWIzRm91bmQsIHdlYjNBY2NvdW50IH0gZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNsYXNzIEV2ZW50c0luZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjY291bnQ6IFwiXCIsXG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgb3BlbjogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3ZWIzQWNjb3VudC50aGVuKGFjY3QgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjY291bnQ6IGFjY3QsXG4gICAgICAgIGxvYWRlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIGNsb3NlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjY291bnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHshd2ViM0ZvdW5kICYmIHRoaXMuc3RhdGUubG9hZGVkID8gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFNUUzRTNcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTUwcHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTUwcHhcIixcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzdGNzc3N1wiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIG5hbWU9XCJ3YXJuaW5nIGNpcmNsZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMwYzgzNDZcIiwgZm9udFNpemU6IFwiNDBweFwiIH19XG4gICAgICAgICAgICAgIHNpemU9XCJodWdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxN3B4XCIsIGZvbnRXZWlnaHQ6IFwiNzAwXCIgfX0+XG4gICAgICAgICAgICAgIFVoIG9oISBMb29rcyBsaWtlIHlvdSBkb24ndCBoYXZlIE1ldGFtYXNrLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL21ldGFtYXNrL25rYmloZmJlb2dhZWFvZWhsZWZua29kYmVmZ3Bna25uP2hsPWVuXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMGM4MzQ2XCIsXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwicHJlXCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2xpY2sgaGVyZSB0byBpbnN0YWxse1wiICAgIFwifVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vcGVufVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMGM4MzQ2XCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJwcmVcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMClcIlxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7XCIgICAgXCJ9V2hhdCBpcyBNZXRhbWFzaz9cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyPk1ldGFtYXNrPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50IGltYWdlPlxuICAgICAgICAgICAgICAgIDxJbWFnZSB3cmFwcGVkIHNpemU9XCJtZWRpdW1cIiBzcmM9XCIvc3RhdGljL21ldGFtYXNrLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgPEhlYWRlcj5Zb3VyIENvbm5lY3Rpb24gdG8gdGhlIEV0aGVyZXVtIEJsb2NrY2hhaW48L0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIE1ldGFtYXNrIGlzIGEgZ29vZ2xlIGNocm9tZSBleHRlbnNpb24gdGhhdCBlbmFibGVzIHVzZXJzIHRvXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0IHdpdGggdGhlIEV0aGVyZXVtIGJsb2NrY2hhaW4gYW5kIHByb3ZpZGVzIHRoZW0gd2l0aFxuICAgICAgICAgICAgICAgICAgICBhIGRpZ2l0YWwgd2FsbGV0IGZvciBtYWtpbmcgdHJhbnNhY3Rpb25zIG9uIHRoZSBibG9ja2NoYWluLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgVXNlcnMgb2YgQmFsZHkgbmVlZCB0byBpbnN0YWxsIE1ldGFtYXNrIGluIG9yZGVyIHRvIHB1cmNoYXNlXG4gICAgICAgICAgICAgICAgICAgIHRpY2tldHMsIGFzIHlvdXIgTWV0YW1hc2sgd2FsbGV0IGFkZHJlc3Mgd2lsbCBzZXJ2ZSBhcyBwcm9vZlxuICAgICAgICAgICAgICAgICAgICBvZiBvd25lcnNoaXAgZm9yIHRpY2tldHMgeW91IGhhdmUgcHVyY2hhc2VkLCBhbmQgTWV0YW1hc2tcbiAgICAgICAgICAgICAgICAgICAgd2lsbCBnaXZlIHlvdSBhY2Nlc3MgdG8gdGhlIGV2ZW50cyBzdG9yZWQgb24gdGhlIGJsb2NrY2hhaW4uXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJHb3QgaXRcIiBvbkNsaWNrPXt0aGlzLmNsb3NlfSAvPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgXCJcIlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIlxuICAgICAgICAgICAgYWx0PVwibXkgaW1hZ2VcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYWxpZ25TZWxmOiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiNTAwcHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWluZm8tY2lyY2xlIGZhLTN4XCIgLz5cbiAgICAgICAgICA8aDMgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMTBweFwiLCBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgIEdldHRpbmcgU3RhcnRlZCBXaXRoIEJhbGR5XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtZXRoZXJldW0gZmEtNHhcIiAvPlxuICAgICAgICAgIDxoMyBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIxMHB4XCIsIHBhZGRpbmdCb3R0b206IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgSG9zdGVkIG9uIHRoZSBFdGhlcmV1bSBSaW5rZWJ5IFRlc3QgTmV0d29ya1xuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQWtCQTtBQUFBO0FBcEJBO0FBQ0E7QUFvQkE7QUFBQTtBQW5CQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRUE7QUFKQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFFQTtBQUhBO0FBSUE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BOztBQUZBO0FBV0E7QUFYQTtBQUNBO0FBWUE7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTs7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQWFBO0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BOztBQUhBO0FBWUE7QUFaQTtBQUNBOztBQUpBO0FBbUJBO0FBbkJBO0FBQ0E7O0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQUE7O0FBSEE7QUFNQTtBQU5BO0FBQ0E7O0FBUUE7QUFDQTtBQUFBO0FBRkE7O0FBRkE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUlBO0FBQ0E7QUFBQTtBQUZBOztBQUZBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUdBO0FBSEE7QUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=