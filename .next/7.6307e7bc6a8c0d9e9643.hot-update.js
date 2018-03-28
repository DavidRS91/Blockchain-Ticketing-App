webpackHotUpdate(7,{

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _semanticUiReact = __webpack_require__(467);

var _routes = __webpack_require__(659);

var _web = __webpack_require__(989);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/dscott/projects/baldy/components/Navbar.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dscott/projects/baldy/components/Navbar.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy42MzA3ZTdiYzZhOGMwZDllOTY0My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanM/OWNmNzEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZW51LCBDYXJkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IHsgd2ViMywgd2ViM0ZvdW5kLCB3ZWIzQWNjb3VudCB9IGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNvbnN0IGl0ZW1TdHlsZSA9IHtcbiAgY29sb3I6IFwid2hpdGVcIixcbiAgZm9udFNpemU6IFwiMS4zZW1cIixcbiAgZm9udFdlaWdodDogXCJib2xkXCJcbn07XG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY2NvdW50OiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcbiAgICByZXR1cm4geyBhY2NvdW50cyB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2ViM0FjY291bnQudGhlbihhY2N0ID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY2NvdW50OiBhY2N0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjY291bnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMyOWY1YlwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXG4gICAgICAgICAgb3BhY2l0eTogXCIxLjBcIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJOYXZiYXJcIiBzaXplPVwidGlueVwiIHNlY29uZGFyeSBwb2ludGluZz5cbiAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggcm91dGU9XCIvXCI+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXtpdGVtU3R5bGV9IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICB7YEhvbWUsICR7YWNjb3VudH1gfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIHJvdXRlPVwiL2V2ZW50c1wiPlxuICAgICAgICAgICAgICA8YSBzdHlsZT17aXRlbVN0eWxlfSBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgVmlldyBFdmVudHNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaCByb3V0ZT1cIi9ldmVudHMvdXNlclwiPlxuICAgICAgICAgICAgICA8YSBzdHlsZT17aXRlbVN0eWxlfSBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgTXkgRXZlbnRzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICB7ISF0aGlzLnByb3BzLmFjY291bnRzID8gKFxuICAgICAgICAgICAgPE1lbnUuSXRlbT57dGhpcy5wcm9wcy5hY2NvdW50c1swXX08L01lbnUuSXRlbT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCByb3V0ZT1cIi9ldmVudHMvbmV3XCI+XG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e2l0ZW1TdHlsZX0gY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgQ3JlYXRlIEFuIEV2ZW50XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIHJvdXRlPVwiL3NpZ25faW5cIj5cbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17aXRlbVN0eWxlfSBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICBTaWduIEluIC8gUmVnaXN0ZXJcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDwvTWVudS5NZW51PlxuICAgICAgICA8L01lbnU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7O0FBS0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFGQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBRkE7O0FBRkE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBU0E7Ozs7Ozs7Ozs7OztBQXJFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFFQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9