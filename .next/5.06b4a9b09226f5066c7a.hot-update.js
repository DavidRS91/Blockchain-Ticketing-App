webpackHotUpdate(5,{

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapContainer = undefined;

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

var _googleMapsReact = __webpack_require__(1162);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/MapContainer.js";


var _require = __webpack_require__(468),
    GOOGLE_API_KEY = _require.GOOGLE_API_KEY;

var MapContainer = exports.MapContainer = function (_Component) {
  (0, _inherits3.default)(MapContainer, _Component);

  function MapContainer() {
    (0, _classCallCheck3.default)(this, MapContainer);

    return (0, _possibleConstructorReturn3.default)(this, (MapContainer.__proto__ || (0, _getPrototypeOf2.default)(MapContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(MapContainer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_googleMapsReact.Map, {
        google: this.props.google,
        zoom: 14,
        style: { width: "1000px", height: "500px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement(_googleMapsReact.Marker, { onClick: this.onMarkerClick, name: "Current location", __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement(_googleMapsReact.InfoWindow, { onClose: this.onInfoWindowClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }
  }]);

  return MapContainer;
}(_react.Component);

exports.default = (0, _googleMapsReact.GoogleApiWrapper)({
  apiKey: GOOGLE_API_KEY
})(MapContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFwQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWFwIiwiSW5mb1dpbmRvdyIsIk1hcmtlciIsIkdvb2dsZUFwaVdyYXBwZXIiLCJyZXF1aXJlIiwiR09PR0xFX0FQSV9LRVkiLCJNYXBDb250YWluZXIiLCJwcm9wcyIsImdvb2dsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib25NYXJrZXJDbGljayIsIm9uSW5mb1dpbmRvd0Nsb3NlIiwiYXBpS2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFLLEFBQVksQUFBUTs7Ozs7OztlQUNQLFFBQUEsQUFBUSxBO0ksQUFBM0IsMEJBQUEsQSxBQUVSOztJQUFBLEFBQWEsNERBQWI7d0NBQUE7OzBCQUFBO3dDQUFBOzs4SUFBQTtBQUFBOzs7U0FBQTs2QkFDVyxBQUNQOzZCQUNFLEFBQUM7Z0JBQ1MsS0FBQSxBQUFLLE1BRGYsQUFDcUIsQUFDbkI7Y0FGRixBQUVRLEFBQ047ZUFBTyxFQUFFLE9BQUYsQUFBUyxVQUFVLFFBSDVCLEFBR1MsQUFBMkI7O29CQUhwQztzQkFBQSxBQUtFO0FBTEY7QUFDRSxPQURGLGtCQUtFLEFBQUMseUNBQU8sU0FBUyxLQUFqQixBQUFzQixlQUFlLE1BQXJDLEFBQTJDO29CQUEzQztzQkFMRixBQUtFLEFBRUE7QUFGQTswQkFFQSxBQUFDLDZDQUFXLFNBQVMsS0FBckIsQUFBMEI7b0JBQTFCO3NCQVJKLEFBQ0UsQUFPRSxBQUdMO0FBSEs7O0FBVlI7QUFBQTs7U0FBQTtBQUFBLEFBQWtDLEFBZ0JsQzs7O1VBQWUsQUFBaUIsQUFDdEI7QUFEc0IsQUFDOUIsQ0FEYSxFQUFmLEFBQWUsQUFFWiIsImZpbGUiOiJNYXBDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/dscott/projects/baldy/components/MapContainer.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dscott/projects/baldy/components/MapContainer.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wNmI0YTliMDkyMjZmNTA2NmM3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXBDb250YWluZXIuanM/N2YwZTdhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYXAsIEluZm9XaW5kb3csIE1hcmtlciwgR29vZ2xlQXBpV3JhcHBlciB9IGZyb20gXCJnb29nbGUtbWFwcy1yZWFjdFwiO1xuY29uc3QgeyBHT09HTEVfQVBJX0tFWSB9ID0gcmVxdWlyZShcIi4uL2NvbmZpZ1wiKTtcblxuZXhwb3J0IGNsYXNzIE1hcENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1hcFxuICAgICAgICBnb29nbGU9e3RoaXMucHJvcHMuZ29vZ2xlfVxuICAgICAgICB6b29tPXsxNH1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwMHB4XCIsIGhlaWdodDogXCI1MDBweFwiIH19XG4gICAgICA+XG4gICAgICAgIDxNYXJrZXIgb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfSBuYW1lPXtcIkN1cnJlbnQgbG9jYXRpb25cIn0gLz5cblxuICAgICAgICA8SW5mb1dpbmRvdyBvbkNsb3NlPXt0aGlzLm9uSW5mb1dpbmRvd0Nsb3NlfSAvPlxuICAgICAgPC9NYXA+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVBcGlXcmFwcGVyKHtcbiAgYXBpS2V5OiBHT09HTEVfQVBJX0tFWVxufSkoTWFwQ29udGFpbmVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTWFwQ29udGFpbmVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFBQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQURBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQUlBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFHQTtBQUhBOztBQVZBO0FBQUE7QUFDQTtBQURBO0FBZ0JBO0FBQ0E7O0FBQUE7QUFBQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9