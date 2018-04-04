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

// 12+Sunvista+Place,+Calgary,Alberta,T2X2T4&key=

var Geocoder = {
  toLatLong: function toLatLong(street, city, province) {
    var streetInput = street.split(" ").join("+");
    var provinceInput = province.split(" ").join("+");
    console.log("" + BASE_URL + streetInput + "," + city + "," + province + "&key=" + GOOGLE_API_KEY);
    return (0, _isomorphicUnfetch2.default)("" + BASE_URL + streetInput + "," + city + "," + provinceInput + "&key=" + GOOGLE_API_KEY).then(function (res) {
      return res.json();
    });
    // .then(data => console.log(data));
  }
};

exports.Geocoder = Geocoder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9nZW9jb2RpbmdSZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiR09PR0xFX0FQSV9LRVkiLCJET01BSU4iLCJBUElfUFJFRklYIiwiQkFTRV9VUkwiLCJmZXRjaCIsIkdlb2NvZGVyIiwidG9MYXRMb25nIiwic3RyZWV0IiwiY2l0eSIsInByb3ZpbmNlIiwic3RyZWV0SW5wdXQiLCJzcGxpdCIsImpvaW4iLCJwcm92aW5jZUlucHV0IiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsQUFBTzs7Ozs7O2VBSm9CLFFBQUEsQSxBQUFRO0lBQTNCLEEsMEJBQUEsQTs7QUFDUixJQUFNLFNBQU4sQUFBZTtBQUNmLElBQU0sYUFBTixBQUFtQjtBQUNuQixJQUFNLHdCQUFBLEFBQXNCLFNBQTVCLEFBQXFDOztBQUVyQzs7QUFFQSxJQUFNO0FBQVcsZ0NBQUEsQUFDTCxRQURLLEFBQ0csTUFESCxBQUNTLFVBQVUsQUFDaEM7UUFBSSxjQUFjLE9BQUEsQUFBTyxNQUFQLEFBQWEsS0FBYixBQUFrQixLQUFwQyxBQUFrQixBQUF1QixBQUN6QztRQUFJLGdCQUFnQixTQUFBLEFBQVMsTUFBVCxBQUFlLEtBQWYsQUFBb0IsS0FBeEMsQUFBb0IsQUFBeUIsQUFDN0M7WUFBQSxBQUFRLFNBQVIsQUFDSyxXQURMLEFBQ2dCLG9CQURoQixBQUMrQixhQUQvQixBQUN1QyxxQkFEdkMsQUFDdUQsQUFFdkQ7aURBQU8sQUFDRixXQURFLEFBQ1Msb0JBRFQsQUFDd0IsYUFEeEIsQUFDZ0MsMEJBRGhDLEFBQ3FELGdCQURyRCxBQUVMLEtBQUssZUFBQTthQUFPLElBQVAsQUFBTyxBQUFJO0FBRmxCLEFBQU8sQUFHUCxLQUhPO0FBSVI7QUFYSCxBQUFpQixBQWNqQjtBQWRpQixBQUNmOztRQWFGLEFBQVMiLCJmaWxlIjoiZ2VvY29kaW5nUmVxdWVzdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9