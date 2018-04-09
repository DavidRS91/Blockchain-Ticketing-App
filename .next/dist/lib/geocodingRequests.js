"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Geocoder = undefined;

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require("../config"),
    GOOGLE_API_KEY = _require.GOOGLE_API_KEY;

var DOMAIN = "maps.googleapis.com";
var API_PREFIX = "/maps/api/geocode/json?address=";
var BASE_URL = "https://" + DOMAIN + API_PREFIX;


var Geocoder = {
  toLatLong: function toLatLong(street, city, province) {
    var streetInput = street.split(" ").join("+");
    var provinceInput = province.split(" ").join("+");
    console.log("" + BASE_URL + streetInput + "," + city + "," + province + "&key=" + GOOGLE_API_KEY);
    return (0, _isomorphicUnfetch2.default)("" + BASE_URL + streetInput + "," + city + "," + provinceInput + "&key=" + GOOGLE_API_KEY).then(function (res) {
      return res.json();
    });
  }
};

exports.Geocoder = Geocoder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9nZW9jb2RpbmdSZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiR09PR0xFX0FQSV9LRVkiLCJET01BSU4iLCJBUElfUFJFRklYIiwiQkFTRV9VUkwiLCJmZXRjaCIsIkdlb2NvZGVyIiwidG9MYXRMb25nIiwic3RyZWV0IiwiY2l0eSIsInByb3ZpbmNlIiwic3RyZWV0SW5wdXQiLCJzcGxpdCIsImpvaW4iLCJwcm92aW5jZUlucHV0IiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsQUFBTzs7Ozs7O2VBSm9CLFFBQUEsQSxBQUFRO0ksQUFBM0IsMEIsQUFBQTs7QUFDUixJQUFNLFNBQU4sQUFBZTtBQUNmLElBQU0sYUFBTixBQUFtQjtBQUNuQixJQUFNLHdCQUFBLEFBQXNCLFNBQTVCLEFBQXFDOzs7QUFHckMsSUFBTTtBQUFXLGdDQUFBLEFBQ0wsUUFESyxBQUNHLE1BREgsQUFDUyxVQUFVLEFBQ2hDO1FBQUksY0FBYyxPQUFBLEFBQU8sTUFBUCxBQUFhLEtBQWIsQUFBa0IsS0FBcEMsQUFBa0IsQUFBdUIsQUFDekM7UUFBSSxnQkFBZ0IsU0FBQSxBQUFTLE1BQVQsQUFBZSxLQUFmLEFBQW9CLEtBQXhDLEFBQW9CLEFBQXlCLEFBQzdDO1lBQUEsQUFBUSxTQUFSLEFBQ0ssV0FETCxBQUNnQixvQkFEaEIsQUFDK0IsYUFEL0IsQUFDdUMscUJBRHZDLEFBQ3VELEFBRXZEO2lEQUFPLEFBQ0YsV0FERSxBQUNTLG9CQURULEFBQ3dCLGFBRHhCLEFBQ2dDLDBCQURoQyxBQUNxRCxnQkFEckQsQUFFTCxLQUFLLGVBQUE7YUFBTyxJQUFQLEFBQU8sQUFBSTtBQUZsQixBQUFPLEFBR1IsS0FIUTtBQVBYLEFBQWlCLEFBYWpCO0FBYmlCLEFBQ2Y7O1FBWUYsQUFBUyIsImZpbGUiOiJnZW9jb2RpbmdSZXF1ZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=