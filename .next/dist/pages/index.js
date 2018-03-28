"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _routes = require("../routes.js");

var _generator = require("../ethereum/generator");

var _generator2 = _interopRequireDefault(_generator);

var _web = require("../ethereum/web3");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/pages/index.js?entry";


var EventsIndex = function (_Component) {
  (0, _inherits3.default)(EventsIndex, _Component);

  function EventsIndex(props) {
    (0, _classCallCheck3.default)(this, EventsIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EventsIndex.__proto__ || (0, _getPrototypeOf2.default)(EventsIndex)).call(this, props));

    _this.state = {
      account: ""
    };
    return _this;
  }

  (0, _createClass3.default)(EventsIndex, [{
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

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Welcome to Baldy!"), _react2.default.createElement("p", { style: { fontSize: "15px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Baldy is a blockchain-based ticketing solution aimed at reducing fraudulent ticket sales and eliminating ticket scalping."), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), "" + account, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _web.web3Found ? "Metamask ready to go" : _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Uh oh! Looks like you don't have Metamask.", " ", _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Click here to get started")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "How does it work?"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Baldy keeps a record of all ticket purchasers on the Ethereum blockchain and verifies their purchase via QR-code when entering an event."), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Do I need to buy cryptocurrency to participate?"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "No cryptocurrency? No problem! The beauty of Baldy is that it aims to be accessible to all. You can pay with ether or your credit card, you simply need a metamask digital wallet to store your proof of purchase."));
    }
  }]);

  return EventsIndex;
}(_react.Component);

exports.default = EventsIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkxpbmsiLCJnZW5lcmF0b3IiLCJ3ZWIzIiwid2ViM0ZvdW5kIiwid2ViM0FjY291bnQiLCJMYXlvdXQiLCJFdmVudHNJbmRleCIsInByb3BzIiwic3RhdGUiLCJhY2NvdW50IiwidGhlbiIsInNldFN0YXRlIiwiYWNjdCIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVMsQUFBTSxBQUFXLEFBQW1COztBQUM3QyxBQUFPLEFBQVk7Ozs7Ozs7OztJQUViLEE7dUNBQ0o7O3VCQUFBLEFBQVksT0FBTzt3Q0FBQTs7Z0pBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7ZUFGWSxBQUVqQixBQUFhLEFBQ0Y7QUFERSxBQUNYO1dBRUg7Ozs7O3dDQUVtQjttQkFDbEI7O3VCQUFBLEFBQVksS0FBSyxnQkFBUSxBQUN2QjtlQUFBLEFBQUs7bUJBQUwsQUFBYyxBQUNILEFBRVo7QUFIZSxBQUNaO0FBRkosQUFLRDs7Ozs2QkFFUTtVQUFBLEFBQ0MsVUFBWSxLQURiLEFBQ2tCLE1BRGxCLEFBQ0MsQUFDUjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esc0NBQUEsY0FBQSxPQUFHLE9BQU8sRUFBRSxVQUFaLEFBQVUsQUFBWTtvQkFBdEI7c0JBQUE7QUFBQTtTQUZGLEFBRUUsQUFJQTs7b0JBQUE7c0JBTkYsQUFNRTtBQUFBO0FBQUEsZUFORixBQU9NLEFBQ0o7O29CQUFBO3NCQVJGLEFBUUUsQUFDQztBQUREO0FBQUEsMkJBQ0MsQUFDQyx5Q0FFQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQSxFQUM2Qyw4Q0FEN0MsQUFFRSxxQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FkTixBQVlJLEFBRUUsQUFHSjs7b0JBQUE7c0JBakJGLEFBaUJFLEFBQ0E7QUFEQTtBQUFBOztvQkFDQTtzQkFsQkYsQUFrQkUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBbkJGLEFBbUJFLEFBQ0Esc0NBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBcEJGLEFBb0JFLEFBS0E7O29CQUFBO3NCQXpCRixBQXlCRSxBQUNBO0FBREE7QUFBQTs7b0JBQ0E7c0JBMUJGLEFBMEJFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQTNCRixBQTJCRSxBQUNBLG9FQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQTdCSixBQUNFLEFBNEJFLEFBT0w7Ozs7O0FBdER1QixBLEFBeUQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=