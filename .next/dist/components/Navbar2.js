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