webpackHotUpdate(6,{

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _semanticUiReact = __webpack_require__(475);

var _routes = __webpack_require__(667);

var _generator = __webpack_require__(1213);

var _generator2 = _interopRequireDefault(_generator);

var _web = __webpack_require__(672);

var _Layout = __webpack_require__(997);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/pages/index.js?entry";


var EventsIndex = function (_Component) {
  (0, _inherits3.default)(EventsIndex, _Component);

  function EventsIndex(props) {
    (0, _classCallCheck3.default)(this, EventsIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EventsIndex.__proto__ || (0, _getPrototypeOf2.default)(EventsIndex)).call(this, props));

    _this.state = {
      account: "",
      loaded: false
    };
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
          lineNumber: 29
        }
      }, _react2.default.createElement("img", {
        src: "/static/logo.png",
        alt: "my image",
        style: { alignSelf: "center" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), !_web.web3Found && this.state.loaded ? _react2.default.createElement("div", {
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
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, {
        name: "warning circle",
        style: { color: "#0c8346", fontSize: "40px" },
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement("p", { style: { fontSize: "17px", fontWeight: "700" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Uh oh! Looks like you don't have Metamask."), _react2.default.createElement("a", {
        href: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",
        target: "_blank",
        style: {
          fontWeight: "700",
          fontSize: "17px",
          color: "#0c8346",
          fontStyle: "italic"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Click here to install")) : "");
    }
  }]);

  return EventsIndex;
}(_react.Component);

exports.default = EventsIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkljb24iLCJMaW5rIiwiZ2VuZXJhdG9yIiwid2ViMyIsIndlYjNGb3VuZCIsIndlYjNBY2NvdW50IiwiTGF5b3V0IiwiRXZlbnRzSW5kZXgiLCJwcm9wcyIsInN0YXRlIiwiYWNjb3VudCIsImxvYWRlZCIsInRoZW4iLCJzZXRTdGF0ZSIsImFjY3QiLCJhbGlnblNlbGYiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250U3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFTLEFBQU0sQUFBVyxBQUFtQjs7QUFDN0MsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBO3VDQUNKOzt1QkFBQSxBQUFZLE9BQU87d0NBQUE7O2dKQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2VBQVEsQUFDRixBQUNUO2NBSmUsQUFFakIsQUFBYSxBQUVIO0FBRkcsQUFDWDtXQUdIOzs7Ozt3Q0FFbUI7bUJBQ2xCOzt1QkFBQSxBQUFZLEtBQUssZ0JBQVEsQUFDdkI7ZUFBQSxBQUFLO21CQUFTLEFBQ0gsQUFDVDtrQkFGRixBQUFjLEFBRUosQUFFWDtBQUplLEFBQ1o7QUFGSixBQU1EOzs7OzZCQUVRO1VBQUEsQUFDQyxVQUFZLEtBRGIsQUFDa0IsTUFEbEIsQUFDQyxBQUNSOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBO2FBQ0UsQUFDTSxBQUNKO2FBRkYsQUFFTSxBQUNKO2VBQU8sRUFBRSxXQUhYLEFBR1MsQUFBYTs7b0JBSHRCO3NCQURGLEFBQ0UsQUFTQTtBQVRBO0FBQ0U7O29CQVFGO3NCQVZGLEFBVUUsQUFDQztBQUREO0FBQUEsVUFDQyxBQUFDLG1CQUFhLEtBQUEsQUFBSyxNQUFuQixBQUF5Qix5QkFDeEIsY0FBQTs7cUJBQ1MsQUFDTSxBQUNYOzJCQUZLLEFBRVksQUFDakI7bUJBSEssQUFHSSxBQUNUO3NCQUpLLEFBSU8sQUFDWjt1QkFMSyxBQUtRLEFBQ2I7d0JBTkssQUFNUyxBQUNkO2lCQVJKLEFBQ1MsQUFPRTtBQVBGLEFBQ0w7O29CQUZKO3NCQUFBLEFBV0U7QUFYRjtBQUNFLE9BREYsa0JBV0UsQUFBQztjQUFELEFBQ08sQUFDTDtlQUFPLEVBQUUsT0FBRixBQUFTLFdBQVcsVUFGN0IsQUFFUyxBQUE4QixBQUNyQztjQUhGLEFBR087O29CQUhQO3NCQVhGLEFBV0UsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsY0FBQSxPQUFHLE9BQU8sRUFBRSxVQUFGLEFBQVksUUFBUSxZQUE5QixBQUFVLEFBQWdDO29CQUExQztzQkFBQTtBQUFBO1NBaEJGLEFBZ0JFLEFBR0EsK0RBQUEsY0FBQTtjQUFBLEFBQ08sQUFDTDtnQkFGRixBQUVTLEFBQ1A7O3NCQUFPLEFBQ08sQUFDWjtvQkFGSyxBQUVLLEFBQ1Y7aUJBSEssQUFHRSxBQUNQO3FCQVBKLEFBR1MsQUFJTTtBQUpOLEFBQ0w7O29CQUpKO3NCQUFBO0FBQUE7QUFDRSxTQXJCTCxBQUNDLEFBbUJFLDRCQWhDUixBQUNFLEFBNkNJLEFBdUJQOzs7OztBQXpGdUIsQSxBQTRGMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4yY2Q4ZmUxMTZhZjMwM2Q1ZWJmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZTk2M2VkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlcy5qc1wiO1xuaW1wb3J0IGdlbmVyYXRvciBmcm9tIFwiLi4vZXRoZXJldW0vZ2VuZXJhdG9yXCI7XG5pbXBvcnQgeyB3ZWIzLCB3ZWIzRm91bmQsIHdlYjNBY2NvdW50IH0gZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNsYXNzIEV2ZW50c0luZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjY291bnQ6IFwiXCIsXG4gICAgICBsb2FkZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdlYjNBY2NvdW50LnRoZW4oYWNjdCA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWNjb3VudDogYWNjdCxcbiAgICAgICAgbG9hZGVkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjY291bnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCJcbiAgICAgICAgICBhbHQ9XCJteSBpbWFnZVwiXG4gICAgICAgICAgc3R5bGU9e3sgYWxpZ25TZWxmOiBcImNlbnRlclwiIH19XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICBCYWxkeSBpcyBhIGJsb2NrY2hhaW4tYmFzZWQgdGlja2V0aW5nIHNvbHV0aW9uIGFpbWVkIGF0IHJlZHVjaW5nXG4gICAgICAgICAgZnJhdWR1bGVudCB0aWNrZXQgc2FsZXMgYW5kIGVsaW1pbmF0aW5nIHRpY2tldCBzY2FscGluZy5cbiAgICAgICAgPC9wPiAqL31cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHshd2ViM0ZvdW5kICYmIHRoaXMuc3RhdGUubG9hZGVkID8gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFNUUzRTNcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTUwcHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTUwcHhcIixcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzdGNzc3N1wiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIG5hbWU9XCJ3YXJuaW5nIGNpcmNsZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMwYzgzNDZcIiwgZm9udFNpemU6IFwiNDBweFwiIH19XG4gICAgICAgICAgICAgIHNpemU9XCJodWdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxN3B4XCIsIGZvbnRXZWlnaHQ6IFwiNzAwXCIgfX0+XG4gICAgICAgICAgICAgIFVoIG9oISBMb29rcyBsaWtlIHlvdSBkb24ndCBoYXZlIE1ldGFtYXNrLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL21ldGFtYXNrL25rYmloZmJlb2dhZWFvZWhsZWZua29kYmVmZ3Bna25uP2hsPWVuXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMGM4MzQ2XCIsXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENsaWNrIGhlcmUgdG8gaW5zdGFsbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKX1cbiAgICAgICAgey8qXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGgzIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5Ib3cgZG9lcyBpdCB3b3JrPzwvaDM+XG4gICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICBCYWxkeSBrZWVwcyBhIHJlY29yZCBvZiBhbGwgdGlja2V0IHB1cmNoYXNlcnMgb24gdGhlIEV0aGVyZXVtXG4gICAgICAgICAgYmxvY2tjaGFpbiBhbmQgdmVyaWZpZXMgdGhlaXIgcHVyY2hhc2UgdmlhIFFSLWNvZGUgd2hlbiBlbnRlcmluZyBhblxuICAgICAgICAgIGV2ZW50LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGgzIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICBEbyBJIG5lZWQgdG8gYnV5IGNyeXB0b2N1cnJlbmN5IHRvIHBhcnRpY2lwYXRlP1xuICAgICAgICA8L2gzPlxuICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgTm8gY3J5cHRvY3VycmVuY3k/IE5vIHByb2JsZW0hIFRoZSBiZWF1dHkgb2YgQmFsZHkgaXMgdGhhdCBpdCBhaW1zIHRvXG4gICAgICAgICAgYmUgYWNjZXNzaWJsZSB0byBhbGwuIFlvdSBjYW4gcGF5IHdpdGggZXRoZXIgb3IgeW91ciBjcmVkaXQgY2FyZCwgeW91XG4gICAgICAgICAgc2ltcGx5IG5lZWQgYSBtZXRhbWFzayBkaWdpdGFsIHdhbGxldCB0byBzdG9yZSB5b3VyIHByb29mIG9mIHB1cmNoYXNlLlxuICAgICAgICA8L3A+ICovfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudHNJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFHQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFFQTtBQUhBO0FBSUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQVNBO0FBVEE7QUFDQTs7QUFRQTtBQUNBO0FBREE7QUFBQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BOztBQUZBO0FBV0E7QUFYQTtBQUNBO0FBWUE7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7O0FBSkE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7QUF1Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==