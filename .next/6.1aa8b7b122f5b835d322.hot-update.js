webpackHotUpdate(6,{

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _semanticUiReact = __webpack_require__(467);

var _routes = __webpack_require__(660);

var _web = __webpack_require__(512);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/Navbar2.js";


var _require = __webpack_require__(717),
    ADMIN_WALLET_ACCOUNT = _require.ADMIN_WALLET_ACCOUNT;

var itemStyle = {
  color: "white",
  fontSize: "1.3em",
  padding: "5px",
  alignSelf: "center"
};
var accountStyle = {
  color: "white",
  fontSize: "1.0em",
  padding: "5px",
  display: "flex",
  alignSelf: "center"
};

var navbarStyle = {
  display: "flex",
  backgroundColor: "tomato",
  color: "white"
};

var Navbar = function (_Component) {
  (0, _inherits3.default)(Navbar, _Component);

  function Navbar(props) {
    (0, _classCallCheck3.default)(this, Navbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).call(this, props));

    _this.state = {
      account: ""
    };
    return _this;
  }

  (0, _createClass3.default)(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _web.web3Account.then(function (acct) {
        _this2.setState({
          account: acct
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var account = this.state.account;

      return _react2.default.createElement("nav", { style: navbarStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_routes.Link, { prefetch: true, route: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Home")), _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events", __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "View Events")), _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events/user", __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "My Events")), _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Create An Event")), _react2.default.createElement("span", { style: { marginLeft: "auto" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _web.web3Found ? _react2.default.createElement("div", {
        style: {
          height: "42px",
          width: "42px",
          backgroundColor: "white",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "10px",
          alignSelf: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement("img", {
        style: {
          width: "40px",
          height: "40px",
          backgroundColor: "white",
          borderRadius: "100%",
          alignSelf: "center"
        },
        src: "/static/metamask.png",
        alt: "my image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })) : _react2.default.createElement("div", {
        style: {
          height: "42px",
          width: "42px",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "10px",
          alignSelf: "center",
          border: "thick solid white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement("img", {
        style: {
          width: "40px",
          height: "40px",
          backgroundColor: "" + (true ? "red" : "green"),
          borderRadius: "100%",
          alignSelf: "center"
        },
        src: "/static/metamask.png",
        alt: "my image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      })), _react2.default.createElement("div", { style: accountStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, account === undefined ? "need to log in" : _react2.default.createElement("div", { style: { justifyContent: "center", display: "flex" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "Current Account:", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), " ", "..." + account.substr(account.length - 5))));
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

                console.log(accounts);
                return _context.abrupt("return", { accounts: accounts });

              case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyMi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJDYXJkIiwiTGluayIsIndlYjMiLCJ3ZWIzRm91bmQiLCJ3ZWIzQWNjb3VudCIsInJlcXVpcmUiLCJBRE1JTl9XQUxMRVRfQUNDT1VOVCIsIml0ZW1TdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nIiwiYWxpZ25TZWxmIiwiYWNjb3VudFN0eWxlIiwiZGlzcGxheSIsIm5hdmJhclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiTmF2YmFyIiwicHJvcHMiLCJzdGF0ZSIsImFjY291bnQiLCJ0aGVuIiwic2V0U3RhdGUiLCJhY2N0IiwibWFyZ2luTGVmdCIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJib3JkZXIiLCJ1bmRlZmluZWQiLCJzdWJzdHIiLCJsZW5ndGgiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBUyxBQUFZOztBQUNyQixBQUFTLEFBQU0sQUFBVyxBQUFtQjs7Ozs7OztlQUNaLFFBQUEsQUFBUSxBO0lBQWpDLEEsZ0MsQUFBQTs7QUFFUixJQUFNO1NBQVksQUFDVCxBQUNQO1lBRmdCLEFBRU4sQUFDVjtXQUhnQixBQUdQLEFBQ1Q7YUFKRixBQUFrQixBQUlMO0FBSkssQUFDaEI7QUFLRixJQUFNO1NBQWUsQUFDWixBQUNQO1lBRm1CLEFBRVQsQUFDVjtXQUhtQixBQUdWLEFBQ1Q7V0FKbUIsQUFJVixBQUNUO2FBTEYsQUFBcUIsQUFLUjtBQUxRLEFBQ25COztBQU9GLElBQU07V0FBYyxBQUNULEFBQ1Q7bUJBRmtCLEFBRUQsQUFDakI7U0FIRixBQUFvQixBQUdYO0FBSFcsQUFDbEI7O0lBS0ksQTtrQ0FDSjs7a0JBQUEsQUFBWSxPQUFPO3dDQUFBOztzSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztlQUZZLEFBRWpCLEFBQWEsQUFDRjtBQURFLEFBQ1g7V0FFSDs7Ozs7d0NBUW1CO21CQUNsQjs7dUJBQUEsQUFBWSxLQUFLLGdCQUFRLEFBQ3ZCO2VBQUEsQUFBSzttQkFBTCxBQUFjLEFBQ0gsQUFFWjtBQUhlLEFBQ1o7QUFGSixBQUtEOzs7OzZCQUVRO1VBQUEsQUFDQyxVQUFZLEtBRGIsQUFDa0IsTUFEbEIsQUFDQyxBQUNSOzs2QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsOEJBQUssVUFBTixNQUFlLE9BQWYsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsT0FBSCxBQUFVLFdBQVcsV0FBckIsQUFBK0I7b0JBQS9CO3NCQUFBO0FBQUE7U0FGSixBQUNFLEFBQ0UsQUFJRiwwQkFBQSxBQUFDLDhCQUFLLFVBQU4sTUFBZSxPQUFmLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSxXQUFXLFdBQXJCLEFBQStCO29CQUEvQjtzQkFBQTtBQUFBO1NBUEosQUFNRSxBQUNFLEFBSUYsaUNBQUEsQUFBQyw4QkFBSyxVQUFOLE1BQWUsT0FBZixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxPQUFILEFBQVUsV0FBVyxXQUFyQixBQUErQjtvQkFBL0I7c0JBQUE7QUFBQTtTQVpKLEFBV0UsQUFDRSxBQUlGLCtCQUFBLEFBQUMsOEJBQUssVUFBTixNQUFlLE9BQWYsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsT0FBSCxBQUFVLFdBQVcsV0FBckIsQUFBK0I7b0JBQS9CO3NCQUFBO0FBQUE7U0FqQkosQUFnQkUsQUFDRSxBQUlGLDZEQUFNLE9BQU8sRUFBRSxZQUFmLEFBQWEsQUFBYztvQkFBM0I7c0JBckJGLEFBcUJFLEFBQ0M7QUFERDsyQ0FFRSxjQUFBOztrQkFDUyxBQUNHLEFBQ1I7aUJBRkssQUFFRSxBQUNQOzJCQUhLLEFBR1ksQUFDakI7d0JBSkssQUFJUyxBQUNkO21CQUxLLEFBS0ksQUFDVDswQkFOSyxBQU1XLEFBQ2hCO2tCQVBLLEFBT0csQUFDUjtxQkFUSixBQUNTLEFBUU07QUFSTixBQUNMOztvQkFGSjtzQkFBQSxBQVlFO0FBWkY7QUFDRSxPQURGOztpQkFhVyxBQUNFLEFBQ1A7a0JBRkssQUFFRyxBQUNSOzJCQUhLLEFBR1ksQUFDakI7d0JBSkssQUFJUyxBQUNkO3FCQU5KLEFBQ1MsQUFLTSxBQUViO0FBUE8sQUFDTDthQUZKLEFBUU0sQUFDSjthQVRGLEFBU007O29CQVROO3NCQWJILEFBQ0MsQUFZRTtBQUFBO0FBQ0UsNEJBWUosY0FBQTs7a0JBQ1MsQUFDRyxBQUNSO2lCQUZLLEFBRUUsQUFDUDt3QkFISyxBQUdTLEFBQ2Q7bUJBSkssQUFJSSxBQUNUOzBCQUxLLEFBS1csQUFDaEI7a0JBTkssQUFNRyxBQUNSO3FCQVBLLEFBT00sQUFDWDtrQkFUSixBQUNTLEFBUUc7QUFSSCxBQUNMOztvQkFGSjtzQkFBQSxBQVlFO0FBWkY7QUFDRSxPQURGOztpQkFhVyxBQUNFLEFBQ1A7a0JBRkssQUFFRyxBQUNSO2lDQUFvQixPQUFBLEFBQU8sUUFIdEIsQUFHTCxBQUFtQyxBQUNuQzt3QkFKSyxBQUlTLEFBQ2Q7cUJBTkosQUFDUyxBQUtNLEFBRWI7QUFQTyxBQUNMO2FBRkosQUFRTSxBQUNKO2FBVEYsQUFTTTs7b0JBVE47c0JBNUROLEFBZ0RJLEFBWUUsQUFhSjtBQWJJO0FBQ0UsMkJBWU4sY0FBQSxTQUFLLE9BQUwsQUFBWSxjQUFjLFdBQTFCLEFBQW9DO29CQUFwQztzQkFBQSxBQUNHO0FBREg7cUJBQ0csQUFBWSxZQUFaLEFBQ0MsbUNBRUEsY0FBQSxTQUFLLE9BQU8sRUFBRSxnQkFBRixBQUFrQixVQUFVLFNBQXhDLEFBQVksQUFBcUM7b0JBQWpEO3NCQUFBO0FBQUE7T0FBQSxFQUVFOztvQkFBQTtzQkFGRixBQUVFO0FBQUE7QUFBQSxVQUZGLGFBRWdCLFFBQUEsQUFBUSxPQUFPLFFBQUEsQUFBUSxTQWhGL0MsQUFDRSxBQXlFRSxBQUlJLEFBRWdCLEFBQWdDLEFBTXpEOzs7Ozs7Ozs7Ozs7dUJBckd3QixVQUFBLEFBQUssSUFBTCxBQUFTLEE7O21CQUExQjtBLG9DQUNOOzt3QkFBQSxBQUFRLElBQVIsQUFBWTtpREFDTCxFQUFFLFUsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVhVLEEsQUFpSHJCOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik5hdmJhcjIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/dscott/projects/baldy/components/Navbar2.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dscott/projects/baldy/components/Navbar2.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4xYWE4YjdiMTIyZjViODM1ZDMyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIyLmpzP2Y3NTMzN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWVudSwgQ2FyZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCB7IHdlYjMsIHdlYjNGb3VuZCwgd2ViM0FjY291bnQgfSBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuY29uc3QgeyBBRE1JTl9XQUxMRVRfQUNDT1VOVCB9ID0gcmVxdWlyZShcIi4uL2NvbmZpZ1wiKTtcblxuY29uc3QgaXRlbVN0eWxlID0ge1xuICBjb2xvcjogXCJ3aGl0ZVwiLFxuICBmb250U2l6ZTogXCIxLjNlbVwiLFxuICBwYWRkaW5nOiBcIjVweFwiLFxuICBhbGlnblNlbGY6IFwiY2VudGVyXCJcbn07XG5jb25zdCBhY2NvdW50U3R5bGUgPSB7XG4gIGNvbG9yOiBcIndoaXRlXCIsXG4gIGZvbnRTaXplOiBcIjEuMGVtXCIsXG4gIHBhZGRpbmc6IFwiNXB4XCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBhbGlnblNlbGY6IFwiY2VudGVyXCJcbn07XG5cbmNvbnN0IG5hdmJhclN0eWxlID0ge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcInRvbWF0b1wiLFxuICBjb2xvcjogXCJ3aGl0ZVwiXG59O1xuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWNjb3VudDogXCJcIlxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICBjb25zb2xlLmxvZyhhY2NvdW50cyk7XG4gICAgcmV0dXJuIHsgYWNjb3VudHMgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdlYjNBY2NvdW50LnRoZW4oYWNjdCA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWNjb3VudDogYWNjdFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY2NvdW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2IHN0eWxlPXtuYXZiYXJTdHlsZX0+XG4gICAgICAgIDxMaW5rIHByZWZldGNoIHJvdXRlPVwiL1wiPlxuICAgICAgICAgIDxhIHN0eWxlPXtpdGVtU3R5bGV9IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgcHJlZmV0Y2ggcm91dGU9XCIvZXZlbnRzXCI+XG4gICAgICAgICAgPGEgc3R5bGU9e2l0ZW1TdHlsZX0gY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgVmlldyBFdmVudHNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgcHJlZmV0Y2ggcm91dGU9XCIvZXZlbnRzL3VzZXJcIj5cbiAgICAgICAgICA8YSBzdHlsZT17aXRlbVN0eWxlfSBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICBNeSBFdmVudHNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgcHJlZmV0Y2ggcm91dGU9XCIvZXZlbnRzL25ld1wiPlxuICAgICAgICAgIDxhIHN0eWxlPXtpdGVtU3R5bGV9IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgIENyZWF0ZSBBbiBFdmVudFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiB9fSAvPlxuICAgICAgICB7d2ViM0ZvdW5kID8gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MnB4XCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjQycHhcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImNlbnRlclwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL21ldGFtYXNrLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIm15IGltYWdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQycHhcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNDJweFwiLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiBcInRoaWNrIHNvbGlkIHdoaXRlXCJcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dHJ1ZSA/IFwicmVkXCIgOiBcImdyZWVuXCJ9YCxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL21ldGFtYXNrLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIm15IGltYWdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgc3R5bGU9e2FjY291bnRTdHlsZX0gY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgIHthY2NvdW50ID09PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICBcIm5lZWQgdG8gbG9nIGluXCJcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICAgIHtgQ3VycmVudCBBY2NvdW50OmB9XG4gICAgICAgICAgICAgIDxiciAvPiB7YC4uLiR7YWNjb3VudC5zdWJzdHIoYWNjb3VudC5sZW5ndGggLSA1KX1gfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmF2YmFyMi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQUE7OztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7O0FBS0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFGQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUEE7O0FBRkE7QUFZQTtBQVpBO0FBQ0E7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BO0FBT0E7QUFBQTs7QUFUQTtBQUFBO0FBQUE7QUFDQTs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUEE7O0FBRkE7QUFZQTtBQVpBO0FBQ0E7O0FBY0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQU5BO0FBT0E7QUFBQTs7QUFUQTtBQWFBO0FBYkE7QUFDQTtBQVlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQS9GQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFHQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9