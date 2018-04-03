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

var _CardSection = require("./CardSection");

var _CardSection2 = _interopRequireDefault(_CardSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/CheckoutForm.js";

// import AddressSection from "./AddressSection";


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
          lineNumber: 24
        }
      }, _react2.default.createElement(_CardSection2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Confirm order"));
    }
  }]);

  return CheckoutForm;
}(_react2.default.Component);

exports.default = (0, _reactStripeElements.injectStripe)(CheckoutForm);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hlY2tvdXRGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiaW5qZWN0U3RyaXBlIiwiQ2FyZFNlY3Rpb24iLCJDaGVja291dEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJldiIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJzdHJpcGUiLCJjcmVhdGVUb2tlbiIsIm5hbWUiLCJ0aGVuIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUdULEFBQU8sQUFBaUI7Ozs7Ozs7O0FBRHhCOzs7SUFHTSxBOzs7Ozs7Ozs7Ozs7Ozt3TkFDSixBLGVBQWUsY0FBTSxBQUNuQjtBQUNBO1NBQUEsQUFBRyxBQUVIOztBQUNBO0FBQ0E7WUFBQSxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLFlBQVksRUFBRSxNQUFoQyxBQUE4QixBQUFRLGlCQUF0QyxBQUF1RCxLQUFLLGlCQUFlO1lBQVosQUFBWSxjQUFaLEFBQVksQUFDekU7O2dCQUFBLEFBQVEsSUFBUixBQUFZLDBCQUFaLEFBQXNDLEFBQ3ZDO0FBRkQsQUFJQTs7QUFDQTtBQUNEO0E7Ozs7OzZCQUVRLEFBQ1A7NkJBQ0UsY0FBQSxVQUFNLFVBQVUsS0FBaEIsQUFBcUI7b0JBQXJCO3NCQUFBLEFBRUU7QUFGRjtPQUFBLGtCQUVFLEFBQUM7O29CQUFEO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkosQUFDRSxBQUdFLEFBR0w7Ozs7O0VBdkJ3QixnQixBQUFNLEFBMEJqQzs7a0JBQWUsdUNBQWYsQUFBZSxBQUFhIiwiZmlsZSI6IkNoZWNrb3V0Rm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=