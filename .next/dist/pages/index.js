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