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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyMi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJDYXJkIiwiUG9wdXAiLCJJY29uIiwiTGluayIsIndlYjMiLCJ3ZWIzRm91bmQiLCJ3ZWIzQWNjb3VudCIsInJlcXVpcmUiLCJBRE1JTl9XQUxMRVRfQUNDT1VOVCIsIml0ZW1TdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nIiwiYWxpZ25TZWxmIiwiZm9udFdlaWdodCIsImFjY291bnRTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5SaWdodCIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTdHlsZSIsIm9wYWNpdHkiLCJuYXZiYXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsIk5hdmJhciIsInByb3BzIiwic3RhdGUiLCJhY2NvdW50IiwibWVzdGFtYXNrIiwidGhlbiIsInNldFN0YXRlIiwiYWNjdCIsIm1ldGFtYXNrIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsInVuZGVmaW5lZCIsInByb2Nlc3MiLCJicm93c2VyIiwid2lkdGgiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwiYWxpZ25JdGVtcyIsInN1YnN0ciIsImxlbmd0aCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBTzs7QUFDNUIsQUFBUyxBQUFZOztBQUNyQixBQUFTLEFBQU0sQUFBVyxBQUFtQjs7Ozs7OztlQUNaLFFBQUEsQUFBUSxBO0lBQWpDLEEsZ0MsQUFBQTs7QUFFUixJQUFNO1NBQVksQUFDVCxBQUNQO1lBRmdCLEFBRU4sQUFDVjtXQUhnQixBQUdQLEFBQ1Q7YUFKZ0IsQUFJTCxBQUNYO2NBTEYsQUFBa0IsQUFLSjtBQUxJLEFBQ2hCO0FBTUYsSUFBTTtTQUFlLEFBQ1osQUFDUDtZQUZtQixBQUVULEFBQ1Y7V0FIbUIsQUFHVixBQUNUO1dBSm1CLEFBSVYsQUFDVDtlQUxtQixBQUtOLEFBQ2I7aUJBTm1CLEFBTUosQUFDZjtrQkFQbUIsQUFPSCxBQUNoQjthQVJtQixBQVFSLEFBQ1g7YUFUbUIsQUFTUixBQUNYO1dBVkYsQUFBcUIsQUFVVjtBQVZVLEFBQ25COztBQVlGLElBQU07V0FBYyxBQUNULEFBQ1Q7bUJBRmtCLEFBRUQsQUFDakI7U0FIRixBQUFvQixBQUdYO0FBSFcsQUFDbEI7O0ksQUFLSTtrQ0FDSjs7a0JBQUEsQUFBWSxPQUFPO3dDQUFBOztzSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztlQUFRLEFBQ0YsQUFDVDtpQkFKZSxBQUVqQixBQUFhLEFBRUE7QUFGQSxBQUNYO1dBR0g7Ozs7O3dDQU9tQjttQkFDbEI7O3VCQUFBLEFBQVksS0FBSyxnQkFBUSxBQUN2QjtlQUFBLEFBQUs7bUJBQVMsQUFDSCxBQUNUO0FBRkYsQUFBYyxBQUVGLEFBRWI7QUFKZSxBQUNaO0FBRkosQUFNRDs7Ozs2QkFFUTttQkFDdUIsS0FEdkIsQUFDNEI7VUFENUIsQUFDQyxpQkFERCxBQUNDO1VBREQsQUFDVSxrQkFEVixBQUNVLEFBQ2pCOzs2QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsOEJBQUssVUFBTixNQUFlLE9BQWYsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsT0FBSCxBQUFVLFdBQVcsV0FBckIsQUFBK0I7b0JBQS9CO3NCQUFBLEFBQ0U7QUFERjs7YUFDRSxBQUNNLEFBQ0o7YUFGRixBQUVNLEFBQ0o7ZUFBTyxFQUFFLFFBQUYsQUFBVSxRQUFRLFlBSDNCLEFBR1MsQUFBOEI7O29CQUh2QztzQkFITixBQUNFLEFBQ0UsQUFDRSxBQU9KO0FBUEk7QUFDRSw0QkFNTixBQUFDLDhCQUFLLFVBQU4sTUFBZSxPQUFmLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSxXQUFXLFdBQXJCLEFBQStCO29CQUEvQjtzQkFBQTtBQUFBO1NBWEosQUFVRSxBQUNFLEFBVUYseURBQU0sT0FBTyxFQUFFLFlBQWYsQUFBYSxBQUFjO29CQUEzQjtzQkFyQkYsQUFxQkUsQUFDQztBQUREO3NCQUNDLEFBQVksdUNBQ1gsQUFBQyw4QkFBSyxVQUFOLE1BQWUsT0FBZixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSxXQUFXLFdBQXJCLEFBQStCO29CQUEvQjtzQkFBQTtBQUFBO1NBRkgsQUFDQyxBQUNFLHNCQXhCTixBQTZCSSxBQUVELGdCQUFBLEFBQVksNEJBQ1gsQUFBQyw4QkFBSyxVQUFOLE1BQWUsb0JBQUEsQUFBa0IsVUFBakM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSxXQUFXLFdBQXJCLEFBQStCO29CQUEvQjtzQkFBQTtBQUFBO1NBRkgsQUFDQyxBQUNFLGdCQWpDTixBQXNDSSxBQUVGLG9CQUFBLEFBQUM7eUJBRUcsQUFBUSwwQkFDTixjQUFBO2lCQUNTLEVBQUUsUUFBRixBQUFVLFFBQVEsT0FBbEIsQUFBeUIsUUFBUSxXQUQxQyxBQUNTLEFBQTRDOztzQkFEckQ7d0JBQUEsQUFHRTtBQUhGO0FBQ0UsU0FERixrQkFHRSxBQUFDO2dCQUVHLFlBQVksWUFBWixBQUF3QixZQUF4QixBQUNJLGlCQUhSLEFBSVEsQUFFTjs7d0JBQU8sQUFDTyxBQUNaOzBCQUZLLEFBRVMsQUFDZDt5QkFDRSxZQUFZLFlBQVosQUFBd0IsWUFBeEIsQUFDSSxZQUxELEFBR0wsQUFHTSxBQUVOO3NCQVJLLEFBUUssQUFDVjt1QkFmSixBQU1TLEFBU007QUFUTixBQUNMOztzQkFQSjt3QkFKSixBQUNFLEFBR0U7QUFBQTtBQUNFLFdBTE4sR0F3QkUsQUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpESixBQW1ERTs7QUFsREEsbUNBbURFLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDtBQUFBLFNBQUEsNkJBRUksY0FBQTs7cUJBQ1MsQUFDSSxBQUNUO3dCQUZLLEFBRU8sQUFDWjtxQkFKSixBQUNTLEFBR0k7QUFISixBQUNMOztzQkFGSjt3QkFBQSxBQU9FO0FBUEY7QUFDRSxTQURGLGtCQU9FLEFBQUMsdUNBQUssTUFBTixBQUFXLGFBQVksT0FBdkIsQUFBNkIsU0FBUSxNQUFyQyxBQUEwQztzQkFBMUM7d0JBUEYsQUFPRTtBQUFBO1lBUkgsQUFDQyx1Q0FXQSxjQUFBOztxQkFDUyxBQUNJLEFBQ1Q7d0JBRkssQUFFTyxBQUNaO3FCQUpKLEFBQ1MsQUFHSTtBQUhKLEFBQ0w7O3NCQUZKO3dCQUFBLEFBT0U7QUFQRjtBQUNFLFNBREYsa0JBT0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsVUFBUyxPQUFwQixBQUEwQixPQUFNLE1BQWhDLEFBQXFDO3NCQUFyQzt3QkFQRixBQU9FO0FBQUE7WUFwQk4sQUFhSSxBQVdELHNDQUFBLEFBQVksNEJBQ1gsY0FBQTs7cUJBQ1MsQUFDSSxBQUNUO3dCQUZLLEFBRU8sQUFDWjtxQkFKSixBQUNTLEFBR0k7QUFISixBQUNMOztzQkFGSjt3QkFBQSxBQU9FO0FBUEY7QUFDRSxTQURGLGtCQU9FLEFBQUMsdUNBQUssTUFBTixBQUFXLGFBQVksT0FBdkIsQUFBNkIsU0FBUSxNQUFyQyxBQUEwQztzQkFBMUM7d0JBUEYsQUFPRTtBQUFBO1lBUEYsK0JBUW9CLFFBQUEsQUFBUSxPQUFPLFFBQUEsQUFBUSxTQVQ1QyxBQUNDLEFBUW9CLEFBQWdDLHNCQUdwRCxjQUFBOztxQkFDUyxBQUNJLEFBQ1Q7d0JBRkssQUFFTyxBQUNaO3FCQUpKLEFBQ1MsQUFHSTtBQUhKLEFBQ0w7O3NCQUZKO3dCQUFBLEFBT0U7QUFQRjtBQUNFLFNBREYsa0JBT0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsVUFBUyxPQUFwQixBQUEwQixPQUFNLE1BQWhDLEFBQXFDO3NCQUFyQzt3QkFQRixBQU9FO0FBQUE7WUEvRlYsQUFvREksQUFvQ0k7O29CQXhGUjtzQkF6Q0osQUFDRSxBQXdDRSxBQXFITDtBQXJISzs7Ozs7Ozs7Ozs7Ozt1QkF4RG1CLFVBQUEsQUFBSyxJQUFMLEFBQVMsQTs7bUJBQTFCO0E7aURBQ0MsRUFBRSxVQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFYVSxBLEFBMExyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJOYXZiYXIyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==