"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

    _this.handleClick = function (e, titleProps) {
      var index = titleProps.index;
      var activeIndex = _this.state.activeIndex;

      var newIndex = activeIndex === index ? -1 : index;
      _this.setState({ activeIndex: newIndex });
    };

    _this.open = function () {
      return _this.setState({ open: true });
    };

    _this.close = function () {
      return _this.setState({ open: false });
    };

    _this.showGuide = function () {
      return _this.setState({ displayGuide: "Block" });
    };

    _this.state = {
      account: "",
      loaded: false,
      open: false,
      displayGuide: "none",
      activeIndex: -1
    };
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.showGuide = _this.showGuide.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
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
      var _ref;

      var _state = this.state,
          account = _state.account,
          activeIndex = _state.activeIndex;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, !_web.web3Found && this.state.loaded ? _react2.default.createElement("div", {
        style: {
          textAlign: "center",
          backgroundColor: "#E5E3E3",
          padding: "10px",
          margin: "0px 40px",
          borderRadius: "15px",
          color: "#7F7777"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, {
        name: "warning circle",
        style: { color: "#0c8346", fontSize: "40px" },
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement("p", { style: { fontSize: "17px", fontWeight: "700" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
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
          lineNumber: 75
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
            lineNumber: 91
          }
        }, "    ", "What is Metamask?"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "Metamask"), _react2.default.createElement(_semanticUiReact.Modal.Content, { image: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { wrapped: true, size: "medium", src: "/static/metamask.svg", __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "Your Connection to the Ethereum Blockchain"), _react2.default.createElement("p", { style: { color: "black" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "Metamask is a google chrome extension that enables users to interact with the Ethereum blockchain and provides them with a digital wallet for making transactions on the blockchain."), _react2.default.createElement("p", { style: { color: "black" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "Users of Baldy need to install Metamask in order to purchase tickets, as your Metamask wallet address will serve as proof of ownership for tickets you have purchased, and Metamask will give you access to the events stored on the blockchain."), _react2.default.createElement(_semanticUiReact.Button, { content: "Got it", onClick: this.close, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }))))) : "", _react2.default.createElement("div", { style: { display: "flex", justifyContent: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement("img", {
        src: "/static/logo.png",
        alt: "my image",
        style: { alignSelf: "center", width: "100%" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      })), _react2.default.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        style: (_ref = {
          backgroundColor: "rgba(255,255,255,0)",
          display: "flex",
          alignItems: "center",
          color: "#329f5b",
          borderWidth: "1px",
          borderColor: "#329f5b",
          borderStyle: "solid"
        }, (0, _defineProperty3.default)(_ref, "backgroundColor", "#edf8f0"), (0, _defineProperty3.default)(_ref, "padding", "5px 10px"), (0, _defineProperty3.default)(_ref, "borderRadius", "10px"), _ref),
        onClick: this.showGuide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement("i", { "class": "fas fa-info-circle fa-2x", __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }), _react2.default.createElement("h4", {
        style: {
          paddingLeft: "10px",
          alignSelf: "center",
          margin: "0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "Get Started With Baldy"))), _react2.default.createElement("div", {
        style: {
          padding: "20px",
          margin: "0px 40px",
          borderRadius: "10px",
          display: this.state.displayGuide
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, _react2.default.createElement("h4", { style: { textAlign: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, "Follow these steps to purchase tickets with Baldy!"), _react2.default.createElement(_semanticUiReact.Accordion, { styled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement(_semanticUiReact.Accordion.Title, {
        style: { color: "#329f5b" },
        active: activeIndex === 0,
        index: 0,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "dropdown", __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }), "1. Install Metamask and create an account"), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 0, __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "Metamask is a chrome extension that connects you to the blockchain and gives you a digital wallet to store currency and other tokens. Installation is easy and free!", " ", _react2.default.createElement("a", {
        href: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",
        target: "_blank",
        style: {
          color: "#0c8346"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, _react2.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, "Click here to install")), ".")), _react2.default.createElement(_semanticUiReact.Accordion.Title, {
        style: { color: "#329f5b" },
        active: activeIndex === 1,
        index: 1,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "dropdown", __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }), "2. Ensure Metamask is connected to the Rinkeby Test Network"), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 1, __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, "To change the network Metamask is connected to, first open metamask by clicking its logo in the top right of your browser (circled in red below). Next click on the network in the top left, and select Rinkeby Test Net from the dropdown. You are now connected to the Rinkeby Test Network!"), _react2.default.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, _react2.default.createElement("img", {
        src: "/static/metamaskScreenshot.png",
        alt: "my image",
        style: {
          alignSelf: "center",
          height: "200px",
          border: "thin solid #8fd5a6"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }))), _react2.default.createElement(_semanticUiReact.Accordion.Title, {
        style: { color: "#329f5b" },
        active: activeIndex === 2,
        index: 2,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "dropdown", __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }), "3. Acquire Ether to purchase tickets (it's free!)"), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, _react2.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }, _react2.default.createElement("a", {
        target: "_blank",
        style: {
          color: "#0c8346"
        },
        href: "https://faucet.rinkeby.io/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }, "faucet.rinkeby.io")), " ", "is a site that dispenses Ether on for use on the Rinkeby Test Network. This Ether won't have any monetary value, but it will allow you to purchase tickets on Baldy. Follow the instructions on the site to get your own."), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, "Note: When specifying which account you would like to deposit your Ether into, you will need to copy your wallet's address from Metamask. See the image below for reference on how to do this."), _react2.default.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, _react2.default.createElement("img", {
        src: "/static/copyWalletAddress.png",
        alt: "my image",
        style: {
          alignSelf: "center",
          height: "200px",
          border: "thin solid #8fd5a6"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }))), _react2.default.createElement(_routes.Link, { prefetch: true, route: "/events", __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, _react2.default.createElement(_semanticUiReact.Accordion.Title, {
        style: { color: "#329f5b", textAlign: "center" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, "You're all set! Click here to view upcoming events!")))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }), _react2.default.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, _react2.default.createElement("i", { "class": "fab fa-ethereum fa-4x", __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }), _react2.default.createElement("h3", { style: { paddingLeft: "10px", paddingBottom: "20px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, "Hosted on the Ethereum Rinkeby Test Network")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }));
    }
  }]);

  return EventsIndex;
}(_react.Component);

exports.default = EventsIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkljb24iLCJIZWFkZXIiLCJNb2RhbCIsIkltYWdlIiwiQnV0dG9uIiwiQWNjb3JkaW9uIiwiTGluayIsImdlbmVyYXRvciIsIndlYjMiLCJ3ZWIzRm91bmQiLCJ3ZWIzQWNjb3VudCIsIkxheW91dCIsIkV2ZW50c0luZGV4IiwicHJvcHMiLCJoYW5kbGVDbGljayIsImUiLCJ0aXRsZVByb3BzIiwiaW5kZXgiLCJhY3RpdmVJbmRleCIsInN0YXRlIiwibmV3SW5kZXgiLCJzZXRTdGF0ZSIsIm9wZW4iLCJjbG9zZSIsInNob3dHdWlkZSIsImRpc3BsYXlHdWlkZSIsImFjY291bnQiLCJsb2FkZWQiLCJiaW5kIiwidGhlbiIsImFjY3QiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250U3R5bGUiLCJ3aGl0ZVNwYWNlIiwiYm9yZGVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25TZWxmIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsImJvcmRlclN0eWxlIiwicGFkZGluZ0xlZnQiLCJoZWlnaHQiLCJwYWRkaW5nQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFTLEFBQU0sQUFBVyxBQUFtQjs7QUFDN0MsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBO3VDQUNKOzt1QkFBQSxBQUFZLE9BQU87d0NBQUE7O2dKQUFBLEFBQ1g7O1VBRFcsQUFlbkIs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QkFLQSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFORixBQU1FO0FBQUE7VUFyRUosQUErREUsQUFTQSxzRUFBQyxjQUFELDJCQUFBLEFBQVcsV0FBUSxRQUFRLGdCQUEzQixBQUEyQztvQkFBM0M7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7Z0JBQUEsQUFDUyxBQUNQOztpQkFGRixBQUVTLEFBQ0UsQUFFVDtBQUhPLEFBQ0w7Y0FISixBQUtPOztvQkFMUDtzQkFBQTtBQUFBO0FBQ0UsU0FITixBQUNFLEFBQ0UsQUFTUSx1QkFYWixLQURGLEFBQ0UsQUFrQkEsOE9BQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBbkJGLEFBbUJFLEFBTUEsbU5BQUEsY0FBQTs7bUJBQ1MsQUFDSSxBQUNUOzBCQUhKLEFBQ1MsQUFFVztBQUZYLEFBQ0w7O29CQUZKO3NCQUFBLEFBTUU7QUFORjtBQUNFO2FBS0EsQUFDTSxBQUNKO2FBRkYsQUFFTSxBQUNKOztxQkFBTyxBQUNNLEFBQ1g7a0JBRkssQUFFRyxBQUNSO2tCQU5KLEFBR1MsQUFHRztBQUhILEFBQ0w7O29CQUpKO3NCQXZHTixBQXdFRSxBQXlCRSxBQU1FLEFBV0o7QUFYSTtBQUNFLDRCQVVOLEFBQUMsOEJBQUssVUFBTixNQUFlLE9BQWYsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELDJCQUFBLEFBQVc7ZUFDRixFQUFFLE9BQUYsQUFBUyxXQUFXLFdBRDdCLEFBQ1MsQUFBK0I7O29CQUR4QztzQkFBQTtBQUFBO0FBQ0UsU0FyUFYsQUFzSEUsQUFXRSxBQWtIRSxBQUNFLEFBUU47O29CQUFBO3NCQTVQRixBQTRQRSxBQUNBO0FBREE7QUFBQTs7b0JBQ0E7c0JBN1BGLEFBNlBFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUE7O21CQUNTLEFBQ0ksQUFDVDtzQkFGSyxBQUVPLEFBQ1o7MEJBSkosQUFDUyxBQUdXO0FBSFgsQUFDTDs7b0JBRko7c0JBQUEsQUFPRTtBQVBGO0FBQ0UsOENBTUcsU0FBSCxBQUFTO29CQUFUO3NCQVBGLEFBT0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsUUFBSSxPQUFPLEVBQUUsYUFBRixBQUFlLFFBQVEsZUFBbEMsQUFBVyxBQUFzQztvQkFBakQ7c0JBQUE7QUFBQTtTQXRRSixBQThQRSxBQVFFLEFBSUY7O29CQUFBO3NCQTNRSixBQUNFLEFBMFFFLEFBR0w7QUFISztBQUFBOzs7OztBQWpUa0IsQSxBQXVUMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9