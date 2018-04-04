"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapContainer = undefined;

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

var _googleMapsReact = require("google-maps-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/MapContainer.js";


var _require = require("../config"),
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