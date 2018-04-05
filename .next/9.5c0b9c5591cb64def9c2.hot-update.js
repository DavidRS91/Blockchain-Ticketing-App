webpackHotUpdate(9,{

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _web = __webpack_require__(672);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/Navbar2.js";


var _require = __webpack_require__(430),
    ADMIN_WALLET_ACCOUNT = _require.ADMIN_WALLET_ACCOUNT;

var itemStyle = {
  color: "rgba(50, 159, 91,0.95)",
  fontSize: "1.1em",
  padding: "10px",
  alignSelf: "center",
  fontWeight: "700"
};
var accountStyle = {
  color: "rgba(50, 159, 91,0.95)",
  fontSize: "0.8em",
  padding: "5px",
  display: "flex",
  marginRight: "5px",
  flexDirection: "column",
  justifyContent: "center",
  alignSelf: "center",
  fontStyle: "italic",
  opacity: "0.7"
};

var navbarStyle = {
  display: "flex",
  backgroundColor: "rgba(255, 255, 255,1)",
  color: "white"
};

var Navbar = function (_Component) {
  (0, _inherits3.default)(Navbar, _Component);

  function Navbar(props) {
    (0, _classCallCheck3.default)(this, Navbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).call(this, props));

    _this.state = {
      account: "",
      mestamask: ""
    };
    return _this;
  }

  (0, _createClass3.default)(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _web.web3Account.then(function (acct) {
        _this2.setState({
          account: acct,
          metamask: _web.web3Found
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          account = _state.account,
          metamask = _state.metamask;

      return _react2.default.createElement("nav", { style: navbarStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_routes.Link, { prefetch: true, route: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("img", {
        src: "/static/bLogoGreen.png",
        alt: "my image",
        style: { height: "40px", marginLeft: "15px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }))), _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events", __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "View Events")), _react2.default.createElement("span", { style: { marginLeft: "auto" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), account === ADMIN_WALLET_ACCOUNT ? _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Create An Event")) : "", account !== undefined ? _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events/" + account + "/user", __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "My Events")) : "", _react2.default.createElement(_semanticUiReact.Popup, {
        trigger: process.browser ? _react2.default.createElement("div", {
          style: { height: "40px", width: "40px", alignSelf: "center" },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, {
          name: metamask && account !== undefined ? "check circle" : "calendar",
          style: {
            paddingTop: "25%",
            paddingRight: "10px",
            color: "" + (metamask && account !== undefined ? "#329f5b" : "firebrick"),
            fontSize: "30px",
            alignSelf: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        })) : ""
        // <div
        //   style={{
        //     display: "flex",
        //     justifyContent: "center",
        //     alignSelf: "center",
        //     margin: "10px"
        //   }}
        // >
        //   <img
        //     style={{
        //       width: "30px",
        //       height: "30px",
        //       backgroundColor: "white",
        //       borderRadius: "100%",
        //       alignSelf: "center",
        //       border: "3px solid #0c8346",
        //       WebkitFilter: `${metamask ? "grayscale(0)" : "grayscale(1)"}`
        //     }}
        //     src="/static/metamask.png"
        //     alt="my image"
        //   />
        // </div>

        , content: _react2.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, metamask ? _react2.default.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            padding: "4px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "checkmark", color: "green", size: "large", __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }), "Metamask detected") : _react2.default.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            padding: "4px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "remove", color: "red", size: "large", __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          }
        }), "Metamask not detected"), account !== undefined ? _react2.default.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            padding: "4px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "checkmark", color: "green", size: "large", __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        }), "Current Account: ", "0x..." + account.substr(account.length - 5)) : _react2.default.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            padding: "4px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "remove", color: "red", size: "large", __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          }
        }), "Please login to Metamask")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web.web3.eth.getAccounts();

              case 2:
                accounts = _context.sent;
                return _context.abrupt("return", { accounts: accounts });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Navbar;
}(_react.Component);

exports.default = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyMi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJDYXJkIiwiUG9wdXAiLCJJY29uIiwiTGluayIsIndlYjMiLCJ3ZWIzRm91bmQiLCJ3ZWIzQWNjb3VudCIsInJlcXVpcmUiLCJBRE1JTl9XQUxMRVRfQUNDT1VOVCIsIml0ZW1TdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nIiwiYWxpZ25TZWxmIiwiZm9udFdlaWdodCIsImFjY291bnRTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5SaWdodCIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTdHlsZSIsIm9wYWNpdHkiLCJuYXZiYXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsIk5hdmJhciIsInByb3BzIiwic3RhdGUiLCJhY2NvdW50IiwibWVzdGFtYXNrIiwidGhlbiIsInNldFN0YXRlIiwiYWNjdCIsIm1ldGFtYXNrIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsInVuZGVmaW5lZCIsInByb2Nlc3MiLCJicm93c2VyIiwid2lkdGgiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwiYWxpZ25JdGVtcyIsInN1YnN0ciIsImxlbmd0aCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBTzs7QUFDNUIsQUFBUyxBQUFZOztBQUNyQixBQUFTLEFBQU0sQUFBVyxBQUFtQjs7Ozs7OztlQUNaLFFBQUEsQUFBUSxBO0lBQWpDLEEsZ0MsQUFBQTs7QUFFUixJQUFNO1NBQVksQUFDVCxBQUNQO1lBRmdCLEFBRU4sQUFDVjtXQUhnQixBQUdQLEFBQ1Q7YUFKZ0IsQUFJTCxBQUNYO2NBTEYsQUFBa0IsQUFLSjtBQUxJLEFBQ2hCO0FBTUYsSUFBTTtTQUFlLEFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpESixBQW1ERTs7QUFsREEsbUNBbURFLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDtBQUFBLFNBQUEsNkJBRUksY0FBQTs7cUJBQ1MsQUFDSSxBQUNUO3dCQUZLLEFBRU8sQUFDWjtxQkFKSixBQUNTLEFBR0k7QUFISixBQUNMOztzQkFGSjt3QkFBQSxBQU9FO0FBUEY7QUFDRSxTQURGLGtCQU9FLEFBQUMsdUNBQUssTUFBTixBQUFXLGFBQVksT0FBdkIsQUFBNkIsU0FBUSxNQUFyQyxBQUEwQztzQkFBMUM7d0JBUEYsQUFPRTtBQUFBO1lBUkgsQUFDQyx1Q0FXQSxjQUFBOztxQkFDUyxBQUNJLEFBQ1Q7d0JBRkssQUFFTyxBQUNaO3FCQUpKLEFBQ1MsQUFHSTtBQUhKLEFBQ0w7O3NCQUZKO3dCQUFBLEFBT0U7QUFQRjtBQUNFLFNBREYsa0JBT0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsVUFBUyxPQUFwQixBQUEwQixPQUFNLE1BQWhDLEFBQXFDO3NCQUFyQzt3QkFQRixBQU9FO0FBQUE7WUFwQk4sQUFhSSxBQVdELHNDQUFBLEFBQVksNEJBQ1gsY0FBQTs7cUJBQ1MsQUFDSSxBQUNUO3dCQUZLLEFBRU8sQUFDWjtxQkFKSixBQUNTLEFBR0k7QUFISixBQUNMOztzQkFGSjt3QkFBQSxBQU9FO0FBUEY7QUFDRSxTQURGLGtCQU9FLEFBQUMsdUNBQUssTUFBTixBQUFXLGFBQVksT0FBdkIsQUFBNkIsU0FBUSxNQUFyQyxBQUEwQztzQkFBMUM7d0JBUEYsQUFPRTtBQUFBO1lBUEYsK0JBUW9CLFFBQUEsQUFBUSxPQUFPLFFBQUEsQUFBUSxTQVQ1QyxBQUNDLEFBUW9CLEFBQWdDLHNCQUdwRCxjQUFBOztxQkFDUyxBQUNJLEFBQ1Q7d0JBRkssQUFFTyxBQUNaO3FCQUpKLEFBQ1MsQUFHSTtBQUhKLEFBQ0w7O3NCQUZKO3dCQUFBLEFBT0U7QUFQRjtBQUNFLFNBREYsa0JBT0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsVUFBUyxPQUFwQixBQUEwQixPQUFNLE1BQWhDLEFBQXFDO3NCQUFyQzt3QkFQRixBQU9FO0FBQUE7WUEvRlYsQUFvREksQUFvQ0k7O29CQXhGUjtzQkF6Q0osQUFDRSxBQXdDRSxBQXFITDtBQXJISzs7Ozs7Ozs7Ozs7Ozt1QkF4RG1CLFVBQUEsQUFBSyxJQUFMLEFBQVMsQTs7bUJBQTFCO0E7aURBQ0MsRUFBRSxVQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFYVSxBLEFBMExyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJOYXZiYXIyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/dscott/projects/baldy/components/Navbar2.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dscott/projects/baldy/components/Navbar2.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS41YzBiOWM1NTkxY2I2NGRlZjljMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIyLmpzPzVkZDZlNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWVudSwgQ2FyZCwgUG9wdXAsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgeyB3ZWIzLCB3ZWIzRm91bmQsIHdlYjNBY2NvdW50IH0gZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmNvbnN0IHsgQURNSU5fV0FMTEVUX0FDQ09VTlQgfSA9IHJlcXVpcmUoXCIuLi9jb25maWdcIik7XG5cbmNvbnN0IGl0ZW1TdHlsZSA9IHtcbiAgY29sb3I6IFwicmdiYSg1MCwgMTU5LCA5MSwwLjk1KVwiLFxuICBmb250U2l6ZTogXCIxLjFlbVwiLFxuICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxuICBmb250V2VpZ2h0OiBcIjcwMFwiXG59O1xuY29uc3QgYWNjb3VudFN0eWxlID0ge1xuICBjb2xvcjogXCJyZ2JhKDUwLCAxNTksIDkxLDAuOTUpXCIsXG4gIGZvbnRTaXplOiBcIjAuOGVtXCIsXG4gIHBhZGRpbmc6IFwiNXB4XCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBtYXJnaW5SaWdodDogXCI1cHhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGFsaWduU2VsZjogXCJjZW50ZXJcIixcbiAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICBvcGFjaXR5OiBcIjAuN1wiXG59O1xuXG5jb25zdCBuYXZiYXJTdHlsZSA9IHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsMSlcIixcbiAgY29sb3I6IFwid2hpdGVcIlxufTtcblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjY291bnQ6IFwiXCIsXG4gICAgICBtZXN0YW1hc2s6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgcmV0dXJuIHsgYWNjb3VudHMgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdlYjNBY2NvdW50LnRoZW4oYWNjdCA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWNjb3VudDogYWNjdCxcbiAgICAgICAgbWV0YW1hc2s6IHdlYjNGb3VuZFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY2NvdW50LCBtZXRhbWFzayB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBzdHlsZT17bmF2YmFyU3R5bGV9PlxuICAgICAgICA8TGluayBwcmVmZXRjaCByb3V0ZT1cIi9cIj5cbiAgICAgICAgICA8YSBzdHlsZT17aXRlbVN0eWxlfSBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvYkxvZ29HcmVlbi5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJteSBpbWFnZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0MHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTVweFwiIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBwcmVmZXRjaCByb3V0ZT1cIi9ldmVudHNcIj5cbiAgICAgICAgICA8YSBzdHlsZT17aXRlbVN0eWxlfSBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICBWaWV3IEV2ZW50c1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7LyogPExpbmsgcHJlZmV0Y2ggcm91dGU9e2AvZXZlbnRzLyR7YWNjb3VudH0vdXNlcmB9PlxuICAgICAgICAgIDxhIHN0eWxlPXtpdGVtU3R5bGV9IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgIE15IEV2ZW50c1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPiAqL31cblxuICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiB9fSAvPlxuICAgICAgICB7YWNjb3VudCA9PT0gQURNSU5fV0FMTEVUX0FDQ09VTlQgPyAoXG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2ggcm91dGU9XCIvZXZlbnRzL25ld1wiPlxuICAgICAgICAgICAgPGEgc3R5bGU9e2l0ZW1TdHlsZX0gY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICBDcmVhdGUgQW4gRXZlbnRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgXCJcIlxuICAgICAgICApfVxuICAgICAgICB7YWNjb3VudCAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgIDxMaW5rIHByZWZldGNoIHJvdXRlPXtgL2V2ZW50cy8ke2FjY291bnR9L3VzZXJgfT5cbiAgICAgICAgICAgIDxhIHN0eWxlPXtpdGVtU3R5bGV9IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgTXkgRXZlbnRzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKX1cbiAgICAgICAgPFBvcHVwXG4gICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICBwcm9jZXNzLmJyb3dzZXIgPyAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGFsaWduU2VsZjogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIG5hbWU9e1xuICAgICAgICAgICAgICAgICAgICBtZXRhbWFzayAmJiBhY2NvdW50ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiY2hlY2sgY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiY2FsZW5kYXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGAke1xuICAgICAgICAgICAgICAgICAgICAgIG1ldGFtYXNrICYmIGFjY291bnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiMzMjlmNWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZpcmVicmlja1wiXG4gICAgICAgICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIDxkaXZcbiAgICAgICAgICAgIC8vICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIC8vICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIC8vICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAvLyAgICAgbWFyZ2luOiBcIjEwcHhcIlxuICAgICAgICAgICAgLy8gICB9fVxuICAgICAgICAgICAgLy8gPlxuICAgICAgICAgICAgLy8gICA8aW1nXG4gICAgICAgICAgICAvLyAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC8vICAgICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICAgICAgICAgIC8vICAgICAgIGhlaWdodDogXCIzMHB4XCIsXG4gICAgICAgICAgICAvLyAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIC8vICAgICAgIGJvcmRlclJhZGl1czogXCIxMDAlXCIsXG4gICAgICAgICAgICAvLyAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAvLyAgICAgICBib3JkZXI6IFwiM3B4IHNvbGlkICMwYzgzNDZcIixcbiAgICAgICAgICAgIC8vICAgICAgIFdlYmtpdEZpbHRlcjogYCR7bWV0YW1hc2sgPyBcImdyYXlzY2FsZSgwKVwiIDogXCJncmF5c2NhbGUoMSlcIn1gXG4gICAgICAgICAgICAvLyAgICAgfX1cbiAgICAgICAgICAgIC8vICAgICBzcmM9XCIvc3RhdGljL21ldGFtYXNrLnBuZ1wiXG4gICAgICAgICAgICAvLyAgICAgYWx0PVwibXkgaW1hZ2VcIlxuICAgICAgICAgICAgLy8gICAvPlxuICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge21ldGFtYXNrID8gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweFwiXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjaGVja21hcmtcIiBjb2xvcj1cImdyZWVuXCIgc2l6ZT1cImxhcmdlXCIgLz5NZXRhbWFza1xuICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHhcIlxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicmVtb3ZlXCIgY29sb3I9XCJyZWRcIiBzaXplPVwibGFyZ2VcIiAvPk1ldGFtYXNrIG5vdFxuICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2FjY291bnQgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHhcIlxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2hlY2ttYXJrXCIgY29sb3I9XCJncmVlblwiIHNpemU9XCJsYXJnZVwiIC8+Q3VycmVudFxuICAgICAgICAgICAgICAgICAgQWNjb3VudDoge2AweC4uLiR7YWNjb3VudC5zdWJzdHIoYWNjb3VudC5sZW5ndGggLSA1KX1gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweFwiXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJyZW1vdmVcIiBjb2xvcj1cInJlZFwiIHNpemU9XCJsYXJnZVwiIC8+UGxlYXNlIGxvZ2luIHRvXG4gICAgICAgICAgICAgICAgICBNZXRhbWFza1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiB7YWNjb3VudCA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e2FjY291bnRTdHlsZX0gY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgUGxlYXNlIGxvZ2luIDxiciAvPiB0byBNZXRhbWFza1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e2FjY291bnRTdHlsZX0gY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgPGRpdj57YEN1cnJlbnQgQWNjb3VudDpgfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e2AweC4uLiR7YWNjb3VudC5zdWJzdHIoXG4gICAgICAgICAgICAgIGFjY291bnQubGVuZ3RoIC0gNVxuICAgICAgICAgICAgKX1gfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfSAqL31cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXZiYXIyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFBQTs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBVEE7QUFDQTtBQVdBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTs7QUFLQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQURBO0FBR0E7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBRUE7QUFIQTtBQUlBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQUE7O0FBSEE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBRUE7O0FBREE7QUFHQTtBQUhBO0FBQ0E7QUFJQTs7QUFNQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBUkE7O0FBUEE7QUFBQTtBQUFBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQW5EQTs7QUFtREE7QUFDQTtBQURBO0FBQUE7O0FBS0E7QUFDQTtBQUFBO0FBRkE7O0FBRkE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFQQTs7QUFjQTtBQUNBO0FBQUE7QUFGQTs7QUFGQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUlBOztBQUlBO0FBQ0E7QUFBQTtBQUZBOztBQUZBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBUEE7O0FBY0E7QUFDQTtBQUFBO0FBRkE7O0FBRkE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFQQTs7QUF4RkE7QUFxSEE7QUFySEE7Ozs7Ozs7Ozs7Ozs7QUF4REE7QUFDQTtBQURBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEtBOzs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9