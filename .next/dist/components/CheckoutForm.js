"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactStripeElements = require("react-stripe-elements");

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../ethereum/web3");

var _CardSection = require("./CardSection");

var _CardSection2 = _interopRequireDefault(_CardSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/CheckoutForm.js";


var CheckoutForm = function (_React$Component) {
  (0, _inherits3.default)(CheckoutForm, _React$Component);

  function CheckoutForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CheckoutForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CheckoutForm.__proto__ || (0, _getPrototypeOf2.default)(CheckoutForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (ev) {
      // We don't want to let default form submission happen here, which would refresh the page.
      ev.preventDefault();

      // Within the context of `Elements`, this call to createToken knows which Element to
      // tokenize, since there's only one in this group.
      _this.props.stripe.createToken({ name: "Jenny Rosen" }).then(function (_ref2) {
        var token = _ref2.token;

        console.log("Received Stripe token:", token);
      });

      // However, this line of code will do the same thing:
      // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CheckoutForm, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("form", { onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_CardSection2.default, { style: { backgroundColor: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { style: { color: "white", backgroundColor: "#329f5b" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Confirm Order"));
    }
  }]);

  return CheckoutForm;
}(_react2.default.Component);

exports.default = (0, _reactStripeElements.injectStripe)(CheckoutForm);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hlY2tvdXRGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiaW5qZWN0U3RyaXBlIiwiQnV0dG9uIiwid2ViMyIsIndlYjNGb3VuZCIsIndlYjNBY2NvdW50IiwiQ2FyZFNlY3Rpb24iLCJDaGVja291dEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJldiIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJzdHJpcGUiLCJjcmVhdGVUb2tlbiIsIm5hbWUiLCJ0aGVuIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQU0sQUFBVyxBQUFtQjs7QUFFN0MsQUFBTyxBQUFpQjs7Ozs7Ozs7O0lBRWxCLEE7Ozs7Ozs7Ozs7Ozs7O3dOQUNKLEEsZUFBZSxjQUFNLEFBQ25CO0FBQ0E7U0FBQSxBQUFHLEFBRUg7O0FBQ0E7QUFDQTtZQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsWUFBWSxFQUFFLE1BQWhDLEFBQThCLEFBQVEsaUJBQXRDLEFBQXVELEtBQUssaUJBQWU7WUFBWixBQUFZLGNBQVosQUFBWSxBQUN6RTs7Z0JBQUEsQUFBUSxJQUFSLEFBQVksMEJBQVosQUFBc0MsQUFDdkM7QUFGRCxBQUlBOztBQUNBO0FBQ0Q7QTs7Ozs7NkJBRVEsQUFDUDs2QkFDRSxjQUFBLFVBQU0sVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyx1Q0FBWSxPQUFPLEVBQUUsaUJBQXRCLEFBQW9CLEFBQW1CO29CQUF2QztzQkFERixBQUNFLEFBQ0E7QUFEQTs7O29CQUNBO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyx5Q0FBTyxPQUFPLEVBQUUsT0FBRixBQUFTLFNBQVMsaUJBQWpDLEFBQWUsQUFBbUM7b0JBQWxEO3NCQUFBO0FBQUE7U0FKSixBQUNFLEFBR0UsQUFNTDs7Ozs7RUExQndCLGdCQUFNLEEsQUE2QmpDOztrQkFBZSx1Q0FBZixBQUFlLEFBQWEiLCJmaWxlIjoiQ2hlY2tvdXRGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==