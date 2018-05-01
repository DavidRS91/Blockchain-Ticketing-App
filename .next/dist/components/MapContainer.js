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

var _semanticUiReact = require("semantic-ui-react");

var _googleMapsReact = require("google-maps-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/MapContainer.js";


var _require = require("../config"),
    GOOGLE_API_KEY = _require.GOOGLE_API_KEY;

var style = {
  width: "100%",
  height: "100%"
};
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
        style: style,
        initialCenter: { lat: this.props.lat, lng: this.props.lng },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_googleMapsReact.Marker, { position: { lat: this.props.lat, lng: this.props.lng }, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }));
    }
  }]);

  return MapContainer;
}(_react.Component);

exports.default = (0, _googleMapsReact.GoogleApiWrapper)({
  apiKey: GOOGLE_API_KEY
})(MapContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFwQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGFpbmVyIiwiTWFwIiwiTWFya2VyIiwiR29vZ2xlQXBpV3JhcHBlciIsInJlcXVpcmUiLCJHT09HTEVfQVBJX0tFWSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJNYXBDb250YWluZXIiLCJwcm9wcyIsImdvb2dsZSIsImxhdCIsImxuZyIsImFwaUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUyxBQUFLLEFBQVE7Ozs7Ozs7ZUFDSyxRLEFBQUEsQUFBUTtJLEFBQTNCLDBCQUFBLEE7O0FBRVIsSUFBTTtTQUFRLEFBQ0wsQUFDUDtVQUZGLEFBQWMsQUFFSixBQUVWO0FBSmMsQUFDWjtJQUdGLEFBQWEsNERBQWI7d0NBQUE7OzBCQUFBO3dDQUFBOzs4SUFBQTtBQUFBOzs7U0FBQTs2QkFDVyxBQUNQOzZCQUNFLEFBQUM7Z0JBQ1MsS0FBQSxBQUFLLE1BRGYsQUFDcUIsQUFDbkI7Y0FGRixBQUVRLEFBQ047ZUFIRixBQUdTLEFBQ1A7dUJBQWUsRUFBRSxLQUFLLEtBQUEsQUFBSyxNQUFaLEFBQWtCLEtBQUssS0FBSyxLQUFBLEFBQUssTUFKbEQsQUFJaUIsQUFBdUM7O29CQUp4RDtzQkFBQSxBQU1FO0FBTkY7QUFDRSxPQURGLGtCQU1FLEFBQUMseUNBQU8sVUFBVSxFQUFFLEtBQUssS0FBQSxBQUFLLE1BQVosQUFBa0IsS0FBSyxLQUFLLEtBQUEsQUFBSyxNQUFuRCxBQUFrQixBQUF1QztvQkFBekQ7c0JBUEosQUFDRSxBQU1FLEFBR0w7QUFISzs7QUFUUjtBQUFBOztTQUFBO0FBQUEsQUFBa0MsQUFlbEM7OztVQUFlLEFBQWlCLEFBQ3RCO0FBRHNCLEFBQzlCLENBRGEsRUFBZixBQUFlLEFBRVoiLCJmaWxlIjoiTWFwQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==