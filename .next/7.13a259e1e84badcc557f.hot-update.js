webpackHotUpdate(7,{

/***/ 1162:
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

var _event = __webpack_require__(1163);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/pages/events/show.js?entry";


var EventShow = function (_Component) {
  (0, _inherits3.default)(EventShow, _Component);

  function EventShow() {
    (0, _classCallCheck3.default)(this, EventShow);

    return (0, _possibleConstructorReturn3.default)(this, (EventShow.__proto__ || (0, _getPrototypeOf2.default)(EventShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(EventShow, [{
    key: "render",

    // static async getInitialProps(props) {
    //   const event = Event(props.query.address);
    //   const summary = await campaign.methods.getSummary().call();
    // }

    value: function render() {
      console.log(this.props.url.query.address);
      return _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Event: ", this.props.url.query.address);
    }
  }]);

  return EventShow;
}(_react.Component);

exports.default = EventShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRXZlbnQiLCJFdmVudFNob3ciLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJ1cmwiLCJxdWVyeSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVzs7Ozs7Ozs7O0lBRVosQTs7Ozs7Ozs7OztTQUNKOztBQUNBO0FBQ0E7QUFDQTs7OzZCQUVTLEFBQ1A7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFBM0IsQUFBaUMsQUFDakM7NkJBQU8sY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLE9BQUEsRUFBWSxnQkFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFBbEMsQUFBTyxBQUFpQyxBQUN6Qzs7Ozs7QUFUcUIsQSxBQVl4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/dscott/projects/baldy/pages/events/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dscott/projects/baldy/pages/events/show.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/events/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4xM2EyNTllMWU4NGJhZGNjNTU3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXZlbnRzL3Nob3cuanM/MTEyODc3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2V2ZW50XCI7XG5cbmNsYXNzIEV2ZW50U2hvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgLy8gICBjb25zdCBldmVudCA9IEV2ZW50KHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuICAvLyAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG4gIC8vIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy51cmwucXVlcnkuYWRkcmVzcyk7XG4gICAgcmV0dXJuIDxoMj5FdmVudDoge3RoaXMucHJvcHMudXJsLnF1ZXJ5LmFkZHJlc3N9PC9oMj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTaG93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZXZlbnRzL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==