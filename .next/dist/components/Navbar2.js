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
      }, "View Events")), _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events/" + account + "/user", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "My Events")), account === ADMIN_WALLET_ACCOUNT ? _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Create An Event")) : "", _react2.default.createElement("span", { style: { marginLeft: "auto" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          margin: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement("img", {
        style: {
          width: "30px",
          height: "30px",
          backgroundColor: "white",
          borderRadius: "100%",
          alignSelf: "center",
          border: "3px solid #0c8346",
          WebkitFilter: "" + (metamask ? "grayscale(0)" : "grayscale(1)")
        },
        src: "/static/metamask.png",
        alt: "my image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      })), account === undefined ? _react2.default.createElement("div", { style: accountStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Please login ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), " to Metamask") : _react2.default.createElement("div", { style: accountStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "Current Account:"), _react2.default.createElement("div", { style: { textAlign: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "0x..." + account.substr(account.length - 5))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyMi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJDYXJkIiwiTGluayIsIndlYjMiLCJ3ZWIzRm91bmQiLCJ3ZWIzQWNjb3VudCIsInJlcXVpcmUiLCJBRE1JTl9XQUxMRVRfQUNDT1VOVCIsIml0ZW1TdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nIiwiYWxpZ25TZWxmIiwiZm9udFdlaWdodCIsImFjY291bnRTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5SaWdodCIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTdHlsZSIsIm9wYWNpdHkiLCJuYXZiYXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsIk5hdmJhciIsInByb3BzIiwic3RhdGUiLCJhY2NvdW50IiwibWVzdGFtYXNrIiwidGhlbiIsInNldFN0YXRlIiwiYWNjdCIsIm1ldGFtYXNrIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsIm1hcmdpbiIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiV2Via2l0RmlsdGVyIiwidW5kZWZpbmVkIiwidGV4dEFsaWduIiwic3Vic3RyIiwibGVuZ3RoIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBUyxBQUFZOztBQUNyQixBQUFTLEFBQU0sQUFBVyxBQUFtQjs7Ozs7OztlQUNaLFFBQUEsQUFBUSxBO0ksQUFBakMsZ0MsQUFBQTs7QUFFUixJQUFNO1NBQVksQUFDVCxBQUNQO1lBRmdCLEFBRU4sQUFDVjtXQUhnQixBQUdQLEFBQ1Q7YUFKZ0IsQUFJTCxBQUNYO2NBTEYsQUFBa0IsQUFLSjtBQUxJLEFBQ2hCO0FBTUYsSUFBTTtTQUFlLEFBQ1osQUFDUDtZQUZtQixBQUVULEFBQ1Y7V0FIbUIsQUFHVixBQUNUO1dBSm1CLEFBSVYsQUFDVDtlQUxtQixBQUtOLEFBQ2I7aUJBTm1CLEFBTUosQUFDZjtrQkFQbUIsQUFPSCxBQUNoQjthQVJtQixBQVFSLEFBQ1g7YUFUbUIsQUFTUixBQUNYO1dBVkYsQUFBcUIsQUFVVjtBQVZVLEFBQ25COztBQVlGLElBQU07V0FBYyxBQUNULEFBQ1Q7bUJBRmtCLEFBRUQsQUFDakI7U0FIRixBQUFvQixBQUdYO0FBSFcsQUFDbEI7O0ksQUFLSTtrQ0FDSjs7a0JBQUEsQUFBWSxPQUFPO3dDQUFBOztzSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztlQUFRLEFBQ0YsQUFDVDtpQkFKZSxBQUVqQixBQUFhLEFBRUE7QUFGQSxBQUNYO1dBR0g7Ozs7O3dDQU9tQjttQkFDbEI7O3VCQUFBLEFBQVksS0FBSyxnQkFBUSxBQUN2QjtlQUFBLEFBQUs7bUJBQVMsQUFDSCxBQUNUO0FBRkYsQUFBYyxBQUVGLEFBRWI7QUFKZSxBQUNaO0FBRkosQUFNRDs7Ozs2QkFFUTttQkFDdUIsS0FEdkIsQUFDNEI7VUFENUIsQUFDQyxpQkFERCxBQUNDO1VBREQsQUFDVSxrQkFEVixBQUNVLEFBQ2pCOzs2QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsOEJBQUssVUFBTixNQUFlLE9BQWYsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsT0FBSCxBQUFVLFdBQVcsV0FBckIsQUFBK0I7b0JBQS9CO3NCQUFBLEFBQ0U7QUFERjs7YUFDRSxBQUNNLEFBQ0o7YUFGRixBQUVNLEFBQ0o7ZUFBTyxFQUFFLFFBQUYsQUFBVSxRQUFRLFlBSDNCLEFBR1MsQUFBOEI7O29CQUh2QztzQkFITixBQUNFLEFBQ0UsQUFDRSxBQU9KO0FBUEk7QUFDRSw0QkFNTixBQUFDLDhCQUFLLFVBQU4sTUFBZSxPQUFmLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSxXQUFXLFdBQXJCLEFBQStCO29CQUEvQjtzQkFBQTtBQUFBO1NBWEosQUFVRSxBQUNFLEFBSUYsaUNBQUEsQUFBQyw4QkFBSyxVQUFOLE1BQWUsb0JBQUEsQUFBa0IsVUFBakM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxPQUFILEFBQVUsV0FBVyxXQUFyQixBQUErQjtvQkFBL0I7c0JBQUE7QUFBQTtTQWhCSixBQWVFLEFBQ0UsQUFLRCwyQkFBQSxBQUFZLHVDQUNYLEFBQUMsOEJBQUssVUFBTixNQUFlLE9BQWYsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsT0FBRyxPQUFILEFBQVUsV0FBVyxXQUFyQixBQUErQjtvQkFBL0I7c0JBQUE7QUFBQTtTQUZILEFBQ0MsQUFDRSxzQkF2Qk4sQUE0QkksQUFHRiw0Q0FBTSxPQUFPLEVBQUUsWUFBZixBQUFhLEFBQWM7b0JBQTNCO3NCQS9CRixBQStCRSxBQUVBO0FBRkE7MEJBRUEsY0FBQTs7bUJBQ1MsQUFDSSxBQUNUOzBCQUZLLEFBRVcsQUFDaEI7cUJBSEssQUFHTSxBQUNYO2tCQUxKLEFBQ1MsQUFJRztBQUpILEFBQ0w7O29CQUZKO3NCQUFBLEFBUUU7QUFSRjtBQUNFOztpQkFRUyxBQUNFLEFBQ1A7a0JBRkssQUFFRyxBQUNSOzJCQUhLLEFBR1ksQUFDakI7d0JBSkssQUFJUyxBQUNkO3FCQUxLLEFBS00sQUFDWDtrQkFOSyxBQU1HLEFBQ1I7OEJBQWlCLFdBQUEsQUFBVyxpQkFSaEMsQUFDUyxBQU9MLEFBQTZDLEFBRS9DO0FBVE8sQUFDTDthQUZKLEFBVU0sQUFDSjthQVhGLEFBV007O29CQVhOO3NCQXpDSixBQWlDRSxBQVFFLEFBZUQ7QUFmQztBQUNFLHVCQWNILEFBQVksNEJBQ1gsY0FBQSxTQUFLLE9BQUwsQUFBWSxjQUFjLFdBQTFCLEFBQW9DO29CQUFwQztzQkFBQTtBQUFBO09BQUEsRUFDZTs7b0JBQUE7c0JBRGYsQUFDZTtBQUFBO0FBQUEsVUFGaEIsQUFDQyxrQ0FJQSxjQUFBLFNBQUssT0FBTCxBQUFZLGNBQWMsV0FBMUIsQUFBb0M7b0JBQXBDO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxxQ0FBQSxjQUFBLFNBQUssT0FBTyxFQUFFLFdBQWQsQUFBWSxBQUFhO29CQUF6QjtzQkFBQTtBQUFBO21CQUE4QyxRQUFBLEFBQVEsT0FDcEQsUUFBQSxBQUFRLFNBakVsQixBQUNFLEFBNkRJLEFBRUUsQUFBOEMsQUFDM0IsQUFNNUI7Ozs7Ozs7Ozs7Ozt1QkF0RndCLFVBQUEsQUFBSyxJQUFMLEEsQUFBUzs7bUJBQTFCO0E7aURBQ0MsRUFBRSxVQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFYVSxBLEFBbUdyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJOYXZiYXIyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==