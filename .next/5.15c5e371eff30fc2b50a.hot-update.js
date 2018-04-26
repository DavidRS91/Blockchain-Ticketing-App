webpackHotUpdate(5,{

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(425);

var _routes = __webpack_require__(661);

var _generator = __webpack_require__(989);

var _generator2 = _interopRequireDefault(_generator);

var _web = __webpack_require__(459);

var _web2 = _interopRequireDefault(_web);

var _Layout = __webpack_require__(1156);

var _Layout2 = _interopRequireDefault(_Layout);

var _InfoPanel = __webpack_require__(1159);

var _InfoPanel2 = _interopRequireDefault(_InfoPanel);

var _RequirementsPanel = __webpack_require__(1160);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/dscott/projects/baldy/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dscott/projects/baldy/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xNWM1ZTM3MWVmZjMwZmMyYjUwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MTUzYzMxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBJY29uLFxuICBIZWFkZXIsXG4gIE1vZGFsLFxuICBJbWFnZSxcbiAgQnV0dG9uLFxuICBBY2NvcmRpb24sXG4gIFNlZ21lbnRcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlcy5qc1wiO1xuaW1wb3J0IGdlbmVyYXRvciBmcm9tIFwiLi4vZXRoZXJldW0vZ2VuZXJhdG9yXCI7XG5pbXBvcnQgd2ViMywgeyB3ZWIzRm91bmQsIHdlYjNBY2NvdW50IH0gZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgSW5mb1BhbmVsIGZyb20gXCIuLi9jb21wb25lbnRzL0luZm9QYW5lbFwiO1xuaW1wb3J0IFJlcXVpcmVtZW50c1BhbmVsIGZyb20gXCIuLi9jb21wb25lbnRzL1JlcXVpcmVtZW50c1BhbmVsXCI7XG5cbmNsYXNzIEV2ZW50c0luZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjY291bnQ6IFwiXCIsXG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBkaXNwbGF5R3VpZGU6IFwibm9uZVwiLFxuICAgICAgYWN0aXZlSW5kZXg6IC0xLFxuICAgICAgYmFsYW5jZTogMFxuICAgIH07XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3dHdWlkZSA9IHRoaXMuc2hvd0d1aWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgdGVzdCA9IFwidGVzdGVkXCI7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcblxuICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKGVyciwgcmVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgYWNjb3VudHMsIHRlc3QsIG5ldHdvcmsgfTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKGUsIHRpdGxlUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSB0aXRsZVByb3BzO1xuICAgIGNvbnN0IHsgYWN0aXZlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbmV3SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gaW5kZXggPyAtMSA6IGluZGV4O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJbmRleDogbmV3SW5kZXggfSk7XG4gIH07XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY3QgPSBhd2FpdCB3ZWIzQWNjb3VudDtcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCB3ZWIzLmV0aC5nZXRCYWxhbmNlKGFjY3QpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSwgbmV0d29yazogbmV0d29yayB9KTtcbiAgICAgIGNvbnN0IGFjY3QgPSBudWxsO1xuICAgICAgY29uc3QgYmFsYW5jZSA9IDA7XG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiwgZXJyKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY2NvdW50OiBhY2N0LFxuICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgYmFsYW5jZTogYmFsYW5jZVxuICAgIH0pO1xuICB9XG5cbiAgb3BlbiA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICBjbG9zZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgc2hvd0d1aWRlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlHdWlkZTogXCJmbGV4XCIgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWNjb3VudCwgYWN0aXZlSW5kZXgsIGJhbGFuY2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHshd2ViM0ZvdW5kICYmIHRoaXMuc3RhdGUubG9hZGVkID8gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFNUUzRTNcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggNDBweFwiLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICAgICAgICAgICAgICBjb2xvcjogXCIjN0Y3Nzc3XCJcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgbmFtZT1cIndhcm5pbmcgY2lyY2xlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzBjODM0NlwiLCBmb250U2l6ZTogXCI0MHB4XCIgfX1cbiAgICAgICAgICAgICAgc2l6ZT1cImh1Z2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE3cHhcIiwgZm9udFdlaWdodDogXCI3MDBcIiB9fT5cbiAgICAgICAgICAgICAgVWggb2ghIExvb2tzIGxpa2UgeW91IGRvbid0IGhhdmUgTWV0YW1hc2suXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbWV0YW1hc2svbmtiaWhmYmVvZ2FlYW9laGxlZm5rb2RiZWZncGdrbm4/aGw9ZW5cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwYzgzNDZcIixcbiAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJwcmVcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDbGljayBoZXJlIHRvIGluc3RhbGx7XCIgICAgXCJ9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW59XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwYzgzNDZcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcInByZVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtcIiAgICBcIn1XaGF0IGlzIE1ldGFtYXNrP1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgc3R5bGU9e3sgY29sb3I6IFwiIzMyOWY1YlwiIH19Pk1ldGFtYXNrPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50IGltYWdlPlxuICAgICAgICAgICAgICAgIDxJbWFnZSB3cmFwcGVkIHNpemU9XCJtZWRpdW1cIiBzcmM9XCIvc3RhdGljL21ldGFtYXNrLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgPEhlYWRlciBzdHlsZT17eyBjb2xvcjogXCIjMzI5ZjViXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFlvdXIgQ29ubmVjdGlvbiB0byB0aGUgRXRoZXJldW0gQmxvY2tjaGFpblxuICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgICB7bWV0YU1hc2tNb2RhbH1cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIkdvdCBpdFwiIG9uQ2xpY2s9e3RoaXMuY2xvc2V9IC8+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBcIlwiXG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJteSBpbWFnZVwiXG4gICAgICAgICAgICBzdHlsZT17eyBhbGlnblNlbGY6IFwiY2VudGVyXCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTZWdtZW50Lkdyb3VwIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgIDxSZXF1aXJlbWVudHNQYW5lbFxuICAgICAgICAgICAgICBiYWxhbmNlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICBuZXR3b3JrPXt0aGlzLnByb3BzLm5ldHdvcmt9XG4gICAgICAgICAgICAgIHRpdGxlPVwiV2hhdCBkbyBJIG5lZWQgdG8gZ2V0IHN0YXJ0ZWQ/XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5mb1BhbmVsXG4gICAgICAgICAgICAgIHRpdGxlPVwiV2hhdCBpcyBNZXRhbWFzaz9cIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17bWV0YW1hc2tEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5mb1BhbmVsXG4gICAgICAgICAgICAgIHRpdGxlPVwiSW5zdGFsbGluZyBNZXRhbWFza1wiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpbnRzdGFsbERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbmZvUGFuZWxcbiAgICAgICAgICAgICAgdGl0bGU9XCJTaWduaW5nIGluIHRvIE1ldGFtYXNrXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3NpZ25JbkRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbmZvUGFuZWxcbiAgICAgICAgICAgICAgdGl0bGU9XCJXaHkgaXMgTWV0YW1hc2sgbG9ja2VkP1wiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtsb2NrZWREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5mb1BhbmVsXG4gICAgICAgICAgICAgIHRpdGxlPVwiU2VsZWN0aW5nIHRoZSBSaW5rZWJ5IFRlc3QgTmV0d29ya1wiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtyaW5rZWJ5RGVzY3JpcHRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEluZm9QYW5lbFxuICAgICAgICAgICAgICB0aXRsZT1cIkhvdyBkbyBJIGdldCBFdGhlcj9cIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Z2V0RXRoZXJEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TZWdtZW50Lkdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1ldGhlcmV1bSBmYS00eFwiIC8+XG4gICAgICAgICAgPGgzIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjEwcHhcIiwgcGFkZGluZ0JvdHRvbTogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICBIb3N0ZWQgb24gdGhlIEV0aGVyZXVtIFJpbmtlYnkgVGVzdCBOZXR3b3JrXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudHNJbmRleDtcblxuY29uc3QgbWV0YW1hc2tEZXNjcmlwdGlvbiA9IChcbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIE1ldGFtYXNrIGlzIGEgZ29vZ2xlIGNocm9tZSBleHRlbnNpb24gdGhhdCBjb25uZWN0cyB5b3UgdG8gdGhlIGJsb2NrY2hhaW5cbiAgICAgIGFuZCBnaXZlcyB5b3UgYSBkaWdpdGFsIHdhbGxldCB0byBzdG9yZSBFdGhlciAoYSBjcnlwdG9jdXJyZW5jeSkuXG4gICAgPC9wPlxuICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgaGVpZ2h0OiBcIjBcIiwgcGFkZGluZ0JvdHRvbTogXCI1Ni4yNyVcIiB9fT5cbiAgICAgIDxpZnJhbWVcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvNkdmX2tSRTRNSlU/ZWN2ZXI9MlwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICBsZWZ0OiBcIjBcIlxuICAgICAgICB9fVxuICAgICAgICB3aWR0aD1cIjY0MFwiXG4gICAgICAgIGhlaWdodD1cIjM2MFwiXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgIGFsbG93PVwiYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYVwiXG4gICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBpbnRzdGFsbERlc2NyaXB0aW9uID0gKFxuICA8cD5cbiAgICBJbnN0YWxsaW5nIE1ldGFtYXNrIGlzIGZyZWUgYW5kIGVhc3kse1wiIFwifVxuICAgIDxhXG4gICAgICBocmVmPVwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbWV0YW1hc2svbmtiaWhmYmVvZ2FlYW9laGxlZm5rb2RiZWZncGdrbm4/aGw9ZW5cIlxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGNvbG9yOiBcIiMwYzgzNDZcIlxuICAgICAgfX1cbiAgICA+XG4gICAgICA8c3Ryb25nPmNsaWNrIGhlcmUgdG8gZ2V0IE1ldGFtYXNrPC9zdHJvbmc+XG4gICAgPC9hPntcIiBcIn1cbiAgICBmcm9tIHRoZSBHb29nbGUgQ2hyb21lIFdlYiBTdG9yZS5cbiAgPC9wPlxuKTtcblxuY29uc3Qgcmlua2VieURlc2NyaXB0aW9uID0gKFxuICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgIDxwPlxuICAgICAgRmlyc3Qgb3BlbiBtZXRhbWFzayBieSBjbGlja2luZyBpdHMgbG9nbyBpbiB0aGUgdG9wIHJpZ2h0IG9mIHlvdXIgYnJvd3NlclxuICAgICAgKGNpcmNsZWQgaW4gcmVkIGJlbG93KS4gTmV4dCBjbGljayBvbiB0aGUgbmV0d29yayBpbiB0aGUgdG9wIGxlZnQgKHNlZVxuICAgICAgYmVsb3cpLCBhbmQgc2VsZWN0IFJpbmtlYnkgVGVzdCBOZXQgZnJvbSB0aGUgZHJvcGRvd24uXG4gICAgPC9wPlxuICAgIDxpbWdcbiAgICAgIHNyYz1cIi9zdGF0aWMvbWV0YW1hc2tTY3JlZW5zaG90LnBuZ1wiXG4gICAgICBhbHQ9XCJteSBpbWFnZVwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXG4gICAgICAgIGhlaWdodDogXCIyMDBweFwiLFxuICAgICAgICBib3JkZXI6IFwidGhpbiBzb2xpZCAjOGZkNWE2XCJcbiAgICAgIH19XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBnZXRFdGhlckRlc2NyaXB0aW9uID0gKFxuICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgIDxwPlxuICAgICAgPHN0cm9uZz5cbiAgICAgICAgPGFcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogXCIjMGM4MzQ2XCJcbiAgICAgICAgICB9fVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZhdWNldC5yaW5rZWJ5LmlvL1wiXG4gICAgICAgID5cbiAgICAgICAgICBmYXVjZXQucmlua2VieS5pb1xuICAgICAgICA8L2E+XG4gICAgICA8L3N0cm9uZz57XCIgXCJ9XG4gICAgICBkaXNwZW5zZXMgRXRoZXIgb24gZm9yIHVzZSBvbiB0aGUgUmlua2VieSBUZXN0IE5ldHdvcmsuIEl0IHdpbGwgcmVxdWlyZVxuICAgICAgeW91IHRvIG1ha2UgYSBwb3N0IG9uIHNvY2lhbCBtZWRpYSBjb250YWluaW5nIHlvdXIgd2FsbGV0J3MgYWRkcmVzcyBpblxuICAgICAgb3JkZXIgdG8gcmVjZWl2ZSBFdGhlci5cbiAgICA8L3A+XG5cbiAgICA8cD5cbiAgICAgIE5vdGU6IFNlZSB0aGUgaW1hZ2UgYmVsb3cgZm9yIHJlZmVyZW5jZSBvbiBob3cgdG8gY29weSB5b3VyIHdhbGxldCdzXG4gICAgICBhZGRyZXNzLlxuICAgIDwvcD5cbiAgICA8aW1nXG4gICAgICBzcmM9XCIvc3RhdGljL2NvcHlXYWxsZXRBZGRyZXNzLnBuZ1wiXG4gICAgICBhbHQ9XCJteSBpbWFnZVwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXG4gICAgICAgIGhlaWdodDogXCIyMDBweFwiLFxuICAgICAgICBib3JkZXI6IFwidGhpbiBzb2xpZCAjOGZkNWE2XCJcbiAgICAgIH19XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBsb2NrZWREZXNjcmlwdGlvbiA9IChcbiAgPHA+XG4gICAgTWV0YW1hc2sgYXV0b21hdGljYWxseSBsb2NrcyB5b3VyIGFjY291bnQgYWZ0ZXIgYSBjZXJ0YWluIHBlcmlvZCBvZiB0aW1lLiBUb1xuICAgIHVubG9jayBzaW1wbHkgY2xpY2sgb24gdGhlIG1ldGFNYXNrIGV4dGVuc2lvbiAodG8gdGhlIHJpZ2h0IG9mIHRoZSBhZGRyZXNzXG4gICAgYmFyIGluIHRoZSBicm93c2VyKSBhbmQgdHlwZSBpbiB5b3VyIHBhc3N3b3JkLlxuICA8L3A+XG4pO1xuXG5jb25zdCBzaWduSW5EZXNjcmlwdGlvbiA9IChcbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIFRoZSBmaXJzdCB0aW1lIHlvdSB1c2UgTWV0YW1hc2ssIHlvdSB3aWxsIG5lZWQgdG8gY3JlYXRlIGEgd2FsbGV0IChsaWtlIGFuXG4gICAgICBhY2NvdW50KS4gQ2xpY2sgb24gdGhlIGV4dGVuc2lvbiAodGhlIGZveCBpY29uIHRvIHRoZSByaWdodCBvZiB0aGUgYWRkcmVzc1xuICAgICAgYmFyIGluIHRoZSBicm93c2VyKSBhbmQgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgdG8gY3JlYXRlIGFuIGFjY291bnQuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPHN0cm9uZz5Ob3RlOiA8L3N0cm9uZz4gV2hlbiBjcmVhdGluZyBhbiBhY2NvdW50LCB5b3Ugd2lsbCBiZSBnaXZlbiBhIGxpc3RcbiAgICAgIG9mIHNlZWQgd29yZHMuIE1ha2Ugc3VyZSB0byByZW1lbWJlciB0aGVzZSBpbiBjYXNlIHlvdSBuZWVkIHRvIHNpZ24gYmFja1xuICAgICAgaW4gdG8geW91ciBhY2NvdW50LlxuICAgIDwvcD5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBtZXRhTWFza01vZGFsID0gKFxuICA8ZGl2PlxuICAgIHtcIiBcIn1cbiAgICA8cCBzdHlsZT17eyBjb2xvcjogXCIjMzI5ZjViXCIgfX0+XG4gICAgICBNZXRhbWFzayBpcyBhIGdvb2dsZSBjaHJvbWUgZXh0ZW5zaW9uIHRoYXQgZW5hYmxlcyB1c2VycyB0byBpbnRlcmFjdCB3aXRoXG4gICAgICB0aGUgRXRoZXJldW0gYmxvY2tjaGFpbiBhbmQgcHJvdmlkZXMgdGhlbSB3aXRoIGEgZGlnaXRhbCB3YWxsZXQgZm9yIG1ha2luZ1xuICAgICAgdHJhbnNhY3Rpb25zIG9uIHRoZSBibG9ja2NoYWluLlxuICAgIDwvcD5cbiAgICA8cCBzdHlsZT17eyBjb2xvcjogXCIjMzI5ZjViXCIgfX0+XG4gICAgICBVc2VycyBvZiBCYWxkeSBuZWVkIHRvIGluc3RhbGwgTWV0YW1hc2sgaW4gb3JkZXIgdG8gcHVyY2hhc2UgdGlja2V0cywgYXNcbiAgICAgIHlvdXIgTWV0YW1hc2sgd2FsbGV0IGFkZHJlc3Mgd2lsbCBzZXJ2ZSBhcyBwcm9vZiBvZiBvd25lcnNoaXAgZm9yIHRpY2tldHNcbiAgICAgIHlvdSBoYXZlIHB1cmNoYXNlZCwgYW5kIE1ldGFtYXNrIHdpbGwgZ2l2ZSB5b3UgYWNjZXNzIHRvIHRoZSBldmVudHMgc3RvcmVkXG4gICAgICBvbiB0aGUgYmxvY2tjaGFpbi5cbiAgICA8L3A+XG4gICAgPGJyIC8+XG4gIDwvZGl2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFoQ0E7QUFDQTtBQW1EQTtBQUFBO0FBcERBO0FBQ0E7QUFvREE7QUFBQTtBQXJEQTtBQUNBO0FBcURBO0FBQUE7QUFwREE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBUEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTs7O0FBQ0E7QUFDQTtBQURBOzs7Ozs7O0FBRUE7QUFDQTtBQURBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBOztBQUZBO0FBVUE7QUFWQTtBQUNBO0FBV0E7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTs7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQWFBO0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BOztBQUhBO0FBWUE7QUFaQTtBQUNBOztBQUpBO0FBbUJBO0FBbkJBO0FBQ0E7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQUE7O0FBSEE7QUFNQTtBQU5BO0FBQ0E7O0FBUUE7QUFDQTtBQUFBO0FBRkE7O0FBRkE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQU1BO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUtBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFBQTs7QUFGQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFJQTtBQUNBO0FBQUE7QUFGQTs7QUFGQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFHQTtBQUhBO0FBQUE7Ozs7Ozs7Ozs7QUEzS0E7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7O0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3S0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBWkE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWdCQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7O0FBQ0E7QUFBQTs7QUFKQTtBQU9BO0FBUEE7QUFDQTs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBRkE7O0FBSkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTs7QUFHQTtBQUZBO0FBRUE7O0FBTEE7QUFBQTtBQUFBO0FBQ0E7O0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUZBOztBQUpBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFVQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBS0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFNQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9