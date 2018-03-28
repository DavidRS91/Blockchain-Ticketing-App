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


var itemStyle = {
  color: "white",
  fontSize: "1.3em",
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
          lineNumber: 37
        }
      }, _react2.default.createElement(_semanticUiReact.Menu, { className: "Navbar", size: "tiny", secondary: true, pointing: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_routes.Link, { prefetch: true, route: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Home, " + account))), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "View Events"))), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events/user", __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "My Events"))), !!this.props.accounts ? _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.props.accounts[0]) : "", _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Create An Event"))), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_routes.Link, { prefetch: true, route: "/sign_in", __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement("a", { style: itemStyle, className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Sign In / Register"))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIkNhcmQiLCJMaW5rIiwid2ViMyIsIndlYjNGb3VuZCIsIndlYjNBY2NvdW50IiwiaXRlbVN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJOYXZiYXIiLCJwcm9wcyIsInN0YXRlIiwiYWNjb3VudCIsInRoZW4iLCJzZXRTdGF0ZSIsImFjY3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJvcGFjaXR5IiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQVMsQUFBWTs7QUFDckIsQUFBUyxBQUFNLEFBQVcsQUFBbUI7Ozs7Ozs7QUFFN0MsSUFBTTtTQUFZLEFBQ1QsQUFDUDtZQUZnQixBQUVOLEFBQ1Y7Y0FIRixBQUFrQixBQUdKO0FBSEksQUFDaEI7O0ksQUFLSTtrQ0FDSjs7a0JBQUEsQUFBWSxPQUFPO3dDQUFBOztzSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztlQUZZLEFBRWpCLEFBQWEsQUFDRjtBQURFLEFBQ1g7V0FFSDs7Ozs7d0NBUW1CO21CQUNsQjs7dUJBQUEsQUFBWSxLQUFLLGdCQUFRLEFBQ3ZCO2VBQUEsQUFBSzttQkFBTCxBQUFjLEFBQ0gsQUFFWjtBQUhlLEFBQ1o7QUFGSixBQUtEOzs7OzZCQUVRO1VBQUEsQUFDQyxVQUFZLEtBRGIsQUFDa0IsTUFEbEIsQUFDQyxBQUNSOzs2QkFDRSxjQUFBOzsyQkFDUyxBQUNZLEFBQ2pCO3dCQUZLLEFBRVMsQUFDZDttQkFKSixBQUNTLEFBR0k7QUFISixBQUNMOztvQkFGSjtzQkFBQSxBQU9FO0FBUEY7QUFDRSxPQURGLGtCQU9FLEFBQUMsdUNBQUssV0FBTixBQUFnQixVQUFTLE1BQXpCLEFBQThCLFFBQU8sV0FBckMsTUFBK0MsVUFBL0M7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBSyxVQUFOLE1BQWUsT0FBZixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxPQUFILEFBQVUsV0FBVyxXQUFyQixBQUErQjtvQkFBL0I7c0JBQUE7QUFBQTtvQkFITixBQUNFLEFBQ0UsQUFDRSxBQUNZLEFBSWhCLDRCQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBSyxVQUFOLE1BQWUsT0FBZixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxPQUFILEFBQVUsV0FBVyxXQUFyQixBQUErQjtvQkFBL0I7c0JBQUE7QUFBQTtTQVZOLEFBUUUsQUFDRSxBQUNFLEFBS0osa0NBQUMsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLFVBQU4sTUFBZSxPQUFmLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSxXQUFXLFdBQXJCLEFBQStCO29CQUEvQjtzQkFBQTtBQUFBO1NBakJOLEFBZUUsQUFDRSxBQUNFLEFBS0gsaUJBQUMsQ0FBQyxLQUFBLEFBQUssTUFBUCxBQUFhLDJCQUNYLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFBWTtBQUFaO0FBQUEsT0FBQSxPQUFZLEFBQUssTUFBTCxBQUFXLFNBRHhCLEFBQ0MsQUFBWSxBQUFvQixNQXZCcEMsQUF5QkksQUFFRixvQkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLFVBQU4sTUFBZSxPQUFmLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSxXQUFXLFdBQXJCLEFBQStCO29CQUEvQjtzQkFBQTtBQUFBO1NBSE4sQUFDRSxBQUNFLEFBQ0UsQUFLSixzQ0FBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssVUFBTixNQUFlLE9BQWYsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsT0FBSCxBQUFVLFdBQVcsV0FBckIsQUFBK0I7b0JBQS9CO3NCQUFBO0FBQUE7U0E3Q1osQUFDRSxBQU9FLEFBMkJFLEFBUUUsQUFDRSxBQUNFLEFBU2I7Ozs7Ozs7Ozs7Ozt1QkFyRXdCLFVBQUEsQUFBSyxJQUFMLEEsQUFBUzs7bUJBQTFCO0Esb0NBQ047O3dCQUFBLEFBQVEsSUFBUixBQUFZO2lEQUNMLEVBQUUsVSxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWFUsQSxBQWlGckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==