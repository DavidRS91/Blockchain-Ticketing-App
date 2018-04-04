"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Converter = undefined;

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DOMAIN = "min-api.cryptocompare.com";
var API_PREFIX = "/data/price?fsym=ETH&tsyms=BTC,USD,EUR,CAD";
var BASE_URL = "https://" + DOMAIN + API_PREFIX;


var Converter = {
  etherToCAD: function etherToCAD() {
    return (0, _isomorphicUnfetch2.default)("" + BASE_URL).then(function (res) {
      return res.json();
    });
    // .then(data => console.log(data));
  }
};

exports.Converter = Converter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9yZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJET01BSU4iLCJBUElfUFJFRklYIiwiQkFTRV9VUkwiLCJmZXRjaCIsIkNvbnZlcnRlciIsImV0aGVyVG9DQUQiLCJ0aGVuIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLEFBQU87Ozs7OztBQUhQLElBQU0sU0FBTixBQUFlO0FBQ2YsSUFBTSxhQUFOLEFBQW1CO0FBQ25CLElBQU0sd0JBQUEsQUFBc0IsU0FBNUIsQUFBcUM7OztBQUdyQyxJQUFNO0FBQVksb0NBQ0gsQUFDWDtpREFBTyxBQUFTLFVBQVQsQUFBcUIsS0FBSyxlQUFBO2FBQU8sSUFBUCxBQUFPLEFBQUk7QUFBNUMsQUFBTyxBQUNQLEtBRE87QUFFUjtBQUpILEFBQWtCLEFBT2xCO0FBUGtCLEFBQ2hCOztRQU1GLEFBQVMiLCJmaWxlIjoicmVxdWVzdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9