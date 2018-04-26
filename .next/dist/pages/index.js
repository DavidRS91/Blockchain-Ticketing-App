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

var _routes = require("../routes.js");

var _generator = require("../ethereum/generator");

var _generator2 = _interopRequireDefault(_generator);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _InfoPanel = require("../components/InfoPanel");

var _InfoPanel2 = _interopRequireDefault(_InfoPanel);

var _RequirementsPanel = require("../components/RequirementsPanel");

var _RequirementsPanel2 = _interopRequireDefault(_RequirementsPanel);

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
      return _this.setState({ displayGuide: "flex" });
    };

    _this.state = {
      account: "",
      loaded: false,
      open: false,
      displayGuide: "none",
      activeIndex: -1,
      balance: 0
    };
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.showGuide = _this.showGuide.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EventsIndex, [{
    key: "componentDidMount",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _acct, _balance, _acct2, _balance2;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _web.web3Account;

              case 3:
                _acct = _context.sent;
                _context.next = 6;
                return _web2.default.eth.getBalance(_acct);

              case 6:
                _balance = _context.sent;
                _context.next = 15;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                this.setState({ loaded: true, network: network });
                _acct2 = null;
                _balance2 = 0;

                console.log("ERROR: ", _context.t0);

              case 15:
                this.setState({
                  account: acct,
                  loaded: true,
                  balance: balance
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          account = _state.account,
          activeIndex = _state.activeIndex,
          balance = _state.balance;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
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
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, {
        name: "warning circle",
        style: { color: "#0c8346", fontSize: "40px" },
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement("p", { style: { fontSize: "17px", fontWeight: "700" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
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
          lineNumber: 99
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
            lineNumber: 115
          }
        }, "    ", "What is Metamask?"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, { style: { color: "#329f5b" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, "Metamask"), _react2.default.createElement(_semanticUiReact.Modal.Content, { image: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { wrapped: true, size: "medium", src: "/static/metamask.svg", __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { style: { color: "#329f5b" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, "Your Connection to the Ethereum Blockchain"), metaMaskModal, _react2.default.createElement(_semanticUiReact.Button, { content: "Got it", onClick: this.close, __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }))))) : "", _react2.default.createElement("div", { style: { display: "flex", justifyContent: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, _react2.default.createElement("img", {
        src: "/static/logo.png",
        alt: "my image",
        style: { alignSelf: "center", width: "100%" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      })), _react2.default.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement(_semanticUiReact.Segment.Group, { style: { width: "100%" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react2.default.createElement(_RequirementsPanel2.default, {
        balance: balance,
        network: this.props.network,
        title: "What do I need to get started?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }), _react2.default.createElement(_InfoPanel2.default, {
        title: "What is Metamask?",
        description: metamaskDescription,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }), _react2.default.createElement(_InfoPanel2.default, {
        title: "Installing Metamask",
        description: intstallDescription,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), _react2.default.createElement(_InfoPanel2.default, {
        title: "Signing in to Metamask",
        description: signInDescription,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }), _react2.default.createElement(_InfoPanel2.default, {
        title: "Why is Metamask locked?",
        description: lockedDescription,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }), _react2.default.createElement(_InfoPanel2.default, {
        title: "Selecting the Rinkeby Test Network",
        description: rinkebyDescription,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), _react2.default.createElement(_InfoPanel2.default, {
        title: "How do I get Ether?",
        description: getEtherDescription,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), _react2.default.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, _react2.default.createElement("i", { className: "fab fa-ethereum fa-4x", __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }), _react2.default.createElement("h3", { style: { paddingLeft: "10px", paddingBottom: "20px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, "Hosted on the Ethereum Rinkeby Test Network")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var test, accounts, network;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                test = "tested";
                _context2.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context2.sent;

                console.log(accounts);

                _context2.next = 7;
                return _web2.default.eth.net.getId(function (err, res) {
                  if (err) {}
                });

              case 7:
                network = _context2.sent;
                return _context2.abrupt("return", { accounts: accounts, test: test, network: network });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return EventsIndex;
}(_react.Component);

exports.default = EventsIndex;


var metamaskDescription = _react2.default.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217
  }
}, _react2.default.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 218
  }
}, "Metamask is a google chrome extension that connects you to the blockchain and gives you a digital wallet to store Ether (a cryptocurrency)."), _react2.default.createElement("div", { style: { position: "relative", height: "0", paddingBottom: "56.27%" }, __source: {
    fileName: _jsxFileName,
    lineNumber: 222
  }
}, _react2.default.createElement("iframe", {
  src: "https://www.youtube.com/embed/6Gf_kRE4MJU?ecver=2",
  style: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0"
  },
  width: "640",
  height: "360",
  frameBorder: "0",
  allow: "autoplay; encrypted-media",
  allowFullScreen: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 223
  }
})));

var intstallDescription = _react2.default.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 242
  }
}, "Installing Metamask is free and easy,", " ", _react2.default.createElement("a", {
  href: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",
  target: "_blank",
  style: {
    color: "#0c8346"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 244
  }
}, _react2.default.createElement("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 251
  }
}, "click here to get Metamask")), " ", "from the Google Chrome Web Store.");

var rinkebyDescription = _react2.default.createElement("div", { style: { display: "flex", flexDirection: "column" }, __source: {
    fileName: _jsxFileName,
    lineNumber: 258
  }
}, _react2.default.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 259
  }
}, "First open metamask by clicking its logo in the top right of your browser (circled in red below). Next click on the network in the top left (see below), and select Rinkeby Test Net from the dropdown."), _react2.default.createElement("img", {
  src: "/static/metamaskScreenshot.png",
  alt: "my image",
  style: {
    alignSelf: "center",
    height: "200px",
    border: "thin solid #8fd5a6"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 264
  }
}));

var getEtherDescription = _react2.default.createElement("div", { style: { display: "flex", flexDirection: "column" }, __source: {
    fileName: _jsxFileName,
    lineNumber: 277
  }
}, _react2.default.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 278
  }
}, _react2.default.createElement("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 279
  }
}, _react2.default.createElement("a", {
  target: "_blank",
  style: {
    color: "#0c8346"
  },
  href: "https://faucet.rinkeby.io/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 280
  }
}, "faucet.rinkeby.io")), " ", "dispenses Ether on for use on the Rinkeby Test Network. It will require you to make a post on social media containing your wallet's address in order to receive Ether."), _react2.default.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 295
  }
}, "Note: See the image below for reference on how to copy your wallet's address."), _react2.default.createElement("img", {
  src: "/static/copyWalletAddress.png",
  alt: "my image",
  style: {
    alignSelf: "center",
    height: "200px",
    border: "thin solid #8fd5a6"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 299
  }
}));

var lockedDescription = _react2.default.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 312
  }
}, "Metamask automatically locks your account after a certain period of time. To unlock simply click on the metaMask extension (to the right of the address bar in the browser) and type in your password.");

var signInDescription = _react2.default.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 320
  }
}, _react2.default.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 321
  }
}, "The first time you use Metamask, you will need to create a wallet (like an account). Click on the extension (the fox icon to the right of the address bar in the browser) and follow the instructions to create an account."), _react2.default.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 326
  }
}, _react2.default.createElement("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 327
  }
}, "Note: "), " When creating an account, you will be given a list of seed words. Make sure to remember these in case you need to sign back in to your account."));

var metaMaskModal = _react2.default.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 335
  }
}, " ", _react2.default.createElement("p", { style: { color: "#329f5b" }, __source: {
    fileName: _jsxFileName,
    lineNumber: 337
  }
}, "Metamask is a google chrome extension that enables users to interact with the Ethereum blockchain and provides them with a digital wallet for making transactions on the blockchain."), _react2.default.createElement("p", { style: { color: "#329f5b" }, __source: {
    fileName: _jsxFileName,
    lineNumber: 342
  }
}, "Users of Baldy need to install Metamask in order to purchase tickets, as your Metamask wallet address will serve as proof of ownership for tickets you have purchased, and Metamask will give you access to the events stored on the blockchain."), _react2.default.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 348
  }
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkljb24iLCJIZWFkZXIiLCJNb2RhbCIsIkltYWdlIiwiQnV0dG9uIiwiQWNjb3JkaW9uIiwiU2VnbWVudCIsIkxpbmsiLCJnZW5lcmF0b3IiLCJ3ZWIzIiwid2ViM0ZvdW5kIiwid2ViM0FjY291bnQiLCJMYXlvdXQiLCJJbmZvUGFuZWwiLCJSZXF1aXJlbWVudHNQYW5lbCIsIkV2ZW50c0luZGV4IiwicHJvcHMiLCJoYW5kbGVDbGljayIsImUiLCJ0aXRsZVByb3BzIiwiaW5kZXgiLCJhY3RpdmVJbmRleCIsInN0YXRlIiwibmV3SW5kZXgiLCJzZXRTdGF0ZSIsIm9wZW4iLCJjbG9zZSIsInNob3dHdWlkZSIsImRpc3BsYXlHdWlkZSIsImFjY291bnQiLCJsb2FkZWQiLCJiYWxhbmNlIiwiYmluZCIsImFjY3QiLCJldGgiLCJnZXRCYWxhbmNlIiwibmV0d29yayIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250U3R5bGUiLCJ3aGl0ZVNwYWNlIiwiYm9yZGVyIiwibWV0YU1hc2tNb2RhbCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduU2VsZiIsIndpZHRoIiwiYWxpZ25JdGVtcyIsIm1ldGFtYXNrRGVzY3JpcHRpb24iLCJpbnRzdGFsbERlc2NyaXB0aW9uIiwic2lnbkluRGVzY3JpcHRpb24iLCJsb2NrZWREZXNjcmlwdGlvbiIsInJpbmtlYnlEZXNjcmlwdGlvbiIsImdldEV0aGVyRGVzY3JpcHRpb24iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdCb3R0b20iLCJ0ZXN0IiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm5ldCIsImdldElkIiwiZXJyIiwicmVzIiwicG9zaXRpb24i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