"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/Navbar2.js";


var _require = require("../config"),
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
          lineNumber: 75
        }
      }), account === ADMIN_WALLET_ACCOUNT ? _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Create An Event")) : "", account !== undefined ? _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events/" + account + "/user", __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "My Events")) : "", _react2.default.createElement(_semanticUiReact.Popup, {
        trigger: process.browser ? _react2.default.createElement("div", {
          style: { height: "40px", width: "40px", alignSelf: "center" },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, {
          name: metamask && account !== undefined ? "check circle outline" : "remove circle outline",
          style: {
            paddingTop: "25%",
            paddingRight: "10px",
            color: "" + (metamask && account !== undefined ? "#329f5b" : "firebrick"),
            fontSize: "30px",
            alignSelf: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        })) : "",
        content: _react2.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, metamask ? _react2.default.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            padding: "4px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "checkmark", color: "green", size: "large", __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }), "Metamask detected") : _react2.default.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            padding: "4px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "remove", color: "red", size: "large", __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }), "Metamask not detected"), account !== undefined ? _react2.default.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            padding: "4px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "checkmark", color: "green", size: "large", __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }), "Current Account: ", "0x..." + account.substr(account.length - 5)) : _react2.default.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            padding: "4px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "remove", color: "red", size: "large", __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          }
        }), "Please login to Metamask")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
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
                return _web2.default.eth.getAccounts();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyMi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJDYXJkIiwiUG9wdXAiLCJJY29uIiwiTGluayIsIndlYjMiLCJ3ZWIzRm91bmQiLCJ3ZWIzQWNjb3VudCIsInJlcXVpcmUiLCJBRE1JTl9XQUxMRVRfQUNDT1VOVCIsIml0ZW1TdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nIiwiYWxpZ25TZWxmIiwiZm9udFdlaWdodCIsImFjY291bnRTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5SaWdodCIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTdHlsZSIsIm9wYWNpdHkiLCJuYXZiYXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsIk5hdmJhciIsInByb3BzIiwic3RhdGUiLCJhY2NvdW50IiwibWVzdGFtYXNrIiwidGhlbiIsInNldFN0YXRlIiwiYWNjdCIsIm1ldGFtYXNrIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsInVuZGVmaW5lZCIsInByb2Nlc3MiLCJicm93c2VyIiwid2lkdGgiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwiYWxpZ25JdGVtcyIsInN1YnN0ciIsImxlbmd0aCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBTzs7QUFDNUIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVEsQUFBVyxBQUFtQjs7Ozs7Ozs7O2VBQ1osUUFBQSxBQUFRLEE7SSxBQUFqQyxnQyxBQUFBOztBQUVSLElBQU07U0FBWSxBQUNULEFBQ1A7WUFGZ0IsQUFFTixBQUNWO1dBSGdCLEFBR1AsQUFDVDthQUpnQixBQUlMLEFBQ1g7Y0FMRixBQUFrQixBQUtKO0FBTEksQUFDaEI7QUFNRixJQUFNO1NBQWUs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QUEsU0FBQSw2QkFFSSxjQUFBOztxQkFDUyxBQUNJLEFBQ1Q7d0JBRkssQUFFTyxBQUNaO3FCQUpKLEFBQ1MsQUFHSTtBQUhKLEFBQ0w7O3NCQUZKO3dCQUFBLEFBT0U7QUFQRjtBQUNFLFNBREYsa0JBT0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsYUFBWSxPQUF2QixBQUE2QixTQUFRLE1BQXJDLEFBQTBDO3NCQUExQzt3QkFQRixBQU9FO0FBQUE7WUFSSCxBQUNDLHVDQVdBLGNBQUE7O3FCQUNTLEFBQ0ksQUFDVDt3QkFGSyxBQUVPLEFBQ1o7cUJBSkosQUFDUyxBQUdJO0FBSEosQUFDTDs7c0JBRko7d0JBQUEsQUFPRTtBQVBGO0FBQ0UsU0FERixrQkFPRSxBQUFDLHVDQUFLLE1BQU4sQUFBVyxVQUFTLE9BQXBCLEFBQTBCLE9BQU0sTUFBaEMsQUFBcUM7c0JBQXJDO3dCQVBGLEFBT0U7QUFBQTtZQXBCTixBQWFJLEFBV0Qsc0NBQUEsQUFBWSw0QkFDWCxjQUFBOztxQkFDUyxBQUNJLEFBQ1Q7d0JBRkssQUFFTyxBQUNaO3FCQUpKLEFBQ1MsQUFHSTtBQUhKLEFBQ0w7O3NCQUZKO3dCQUFBLEFBT0U7QUFQRjtBQUNFLFNBREYsa0JBT0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsYUFBWSxPQUF2QixBQUE2QixTQUFRLE1BQXJDLEFBQTBDO3NCQUExQzt3QkFQRixBQU9FO0FBQUE7WUFQRiwrQkFRb0IsUUFBQSxBQUFRLE9BQU8sUUFBQSxBQUFRLFNBVDVDLEFBQ0MsQUFRb0IsQUFBZ0Msc0JBR3BELGNBQUE7O3FCQUNTLEFBQ0ksQUFDVDt3QkFGSyxBQUVPLEFBQ1o7cUJBSkosQUFDUyxBQUdJO0FBSEosQUFDTDs7c0JBRko7d0JBQUEsQUFPRTtBQVBGO0FBQ0UsU0FERixrQkFPRSxBQUFDLHVDQUFLLE1BQU4sQUFBVyxVQUFTLE9BQXBCLEFBQTBCLE9BQU0sTUFBaEMsQUFBcUM7c0JBQXJDO3dCQVBGLEFBT0U7QUFBQTtZQXpFVixBQThCSSxBQW9DSTs7b0JBbEVSO3NCQXBDSixBQUNFLEFBbUNFLEFBa0ZMO0FBbEZLO0FBQ0U7Ozs7Ozs7Ozs7Ozt1QkFwRGlCLGNBQUEsQUFBSyxJQUFMLEFBQVMsQTs7bUJBQTFCO0E7aURBQ0MsRUFBRSxVQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFYVSxBLEFBa0pyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJOYXZiYXIyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==