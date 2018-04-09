"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.web3Account = exports.web3Found = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAccount = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return web3.eth.getAccounts().then(function (accountList) {
              userAccount = accountList[0];
            });

          case 3:
            _context.next = 9;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);

            console.log(_context.t0);
            userAccount = null;

          case 9:
            return _context.abrupt("return", userAccount);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 5]]);
  }));

  return function getAccount() {
    return _ref.apply(this, arguments);
  };
}();

var _require = require("../config"),
    INFURA_KEY = _require.INFURA_KEY;

var web3 = void 0;
var findWeb3 = void 0;
var userAccount = void 0;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new _web2.default(window.web3.currentProvider);
  findWeb3 = true;
} else {
  var provider = new _web2.default.providers.HttpProvider(INFURA_KEY);
  web3 = new _web2.default(provider);
  findWeb3 = false;
}

exports.default = web3;
var web3Found = exports.web3Found = findWeb3;
var web3Account = exports.web3Account = getAccount();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwidGhlbiIsInVzZXJBY2NvdW50IiwiYWNjb3VudExpc3QiLCJjb25zb2xlIiwibG9nIiwiZ2V0QWNjb3VudCIsIldlYjMiLCJyZXF1aXJlIiwiSU5GVVJBX0tFWSIsImZpbmRXZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJ3ZWIzRm91bmQiLCJ3ZWIzQWNjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7OztzRkFPUCxtQkFBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUFBOzRCQUFBOzRCQUFBO3dCQUVVLEFBQUssSUFBTCxBQUFTLGNBQVQsQUFBdUIsS0FBSyx1QkFBZSxBQUMvQzs0QkFBYyxZQUFkLEFBQWMsQUFBWSxBQUMzQjtBQUpMLEFBRVUsYUFBQTs7ZUFGVjs0QkFBQTtBQUFBOztlQUFBOzRCQUFBOzRDQU1JOztvQkFBQSxBQUFRLGFBQ1I7MEJBUEosQUFPSSxBQUFjOztlQVBsQjs2Q0FBQSxBQVNTOztlQVRUO2VBQUE7NEJBQUE7O0FBQUE7MkJBQUE7QTs7a0JBQWUsQTs7Ozs7ZUFOUSxRQUFBLEFBQVEsQTtJQUF2QixBLHNCQUFBLEE7O0FBRVIsSUFBSSxZQUFKO0FBQ0EsSUFBSSxnQkFBSjtBQUNBLElBQUksbUJBQUo7O0FBY0EsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTRELGFBQWEsQUFDdkU7U0FBTyxBQUFJLGtCQUFLLE9BQUEsQUFBTyxLQUF2QixBQUFPLEFBQXFCLEFBQzVCO2FBQUEsQUFBVyxBQUNaO0FBSEQsT0FHTyxBQUNMO01BQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQWdDLEFBQ2pEO1NBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDaEI7YUFBQSxBQUFXLEFBQ1o7QUFFRDs7a0JBQUEsQUFBZSxBQUNmO0FBQU8sSUFBSSxnQ0FBSixBQUFnQixBQUN2QjtBQUFPLElBQUksb0NBQUosQUFBa0IiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=