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

var _jsxFileName = "/Users/dscott/projects/baldy/components/Navbar.js";


var _require = require("../config"),
    ADMIN_WALLET_ACCOUNT = _require.ADMIN_WALLET_ACCOUNT;

var itemStyle = {
  color: "white",
  fontSize: "1.3em",
  fontWeight: "bold"
};
var accountStyle = {
  color: "white",
  fontSize: "1.0em",
  fontWeight: "bold"
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

      return _react2.default.createElement("div", {
        style: {
          backgroundColor: "#329f5b",
          marginBottom: "20px",
          opacity: "1.0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Menu, { className: "Navbar", size: "tiny", secondary: true, pointing: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_routes.Link, { prefetch: true, route: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Home"))), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events", __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "View Events"))), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events/user", __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "My Events"))), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, account === ADMIN_WALLET_ACCOUNT ? _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Create An Event"))) : "", _web.web3Found ? _react2.default.createElement("div", {
        style: {
          height: "50px",
          width: "50px",
          backgroundColor: "white",
          borderRadius: "100%",
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement("img", {
        style: {
          width: "40px",
          height: "40px",
          backgroundColor: "white",
          borderRadius: "100%"
        },
        src: "/static/metamask.png",
        alt: "my image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      })) : "Metamask Not Detected", _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement("div", { style: accountStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, account === undefined ? "need to log in" : "Account: ..." + account.substr(account.length - 5))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIkNhcmQiLCJMaW5rIiwid2ViMyIsIndlYjNGb3VuZCIsIndlYjNBY2NvdW50IiwicmVxdWlyZSIsIkFETUlOX1dBTExFVF9BQ0NPVU5UIiwiaXRlbVN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJhY2NvdW50U3R5bGUiLCJOYXZiYXIiLCJwcm9wcyIsInN0YXRlIiwiYWNjb3VudCIsInRoZW4iLCJzZXRTdGF0ZSIsImFjY3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJvcGFjaXR5IiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwic3Vic3RyIiwibGVuZ3RoIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQVMsQUFBWTs7QUFDckIsQUFBUyxBQUFNLEFBQVcsQUFBbUI7Ozs7Ozs7ZUFDWixRQUFRLEEsQUFBUjtJLEFBQXpCLGdDLEFBQUE7O0FBRVIsSUFBTTtTQUFZLEFBQ1QsQUFDUDtZQUZnQixBQUVOLEFBQ1Y7Y0FIRixBQUFrQixBQUdKO0FBSEksQUFDaEI7QUFJRixJQUFNO1NBQWUsQUFDWixBQUNQO1lBRm1CLEFBRVQsQUFDVjtjQUhGLEFBQXFCLEFBR1A7QUFITyxBQUNuQjs7SSxBQUtJO2tDQUNKOztrQkFBQSxBQUFZLE9BQU87d0NBQUE7O3NJQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2VBRlksQUFFakIsQUFBYSxBQUNGO0FBREUsQUFDWDtXQUVIOzs7Ozt3Q0FRbUI7bUJBQ2xCOzt1QkFBQSxBQUFZLEtBQUssZ0JBQVEsQUFDdkI7ZUFBQSxB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