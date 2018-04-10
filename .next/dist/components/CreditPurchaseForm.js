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

var _semanticUiReact = require("semantic-ui-react");

var _reactStripeElements = require("react-stripe-elements");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _event = require("../ethereum/event");

var _event2 = _interopRequireDefault(_event);

var _MyStoreCheckout = require("./MyStoreCheckout");

var _MyStoreCheckout2 = _interopRequireDefault(_MyStoreCheckout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/CreditPurchaseForm.js";


var _require = require("../config"),
    STRIPE_KEY = _require.STRIPE_KEY;

var CreditPurchaseForm = function (_Component) {
  (0, _inherits3.default)(CreditPurchaseForm, _Component);

  function CreditPurchaseForm() {
    (0, _classCallCheck3.default)(this, CreditPurchaseForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CreditPurchaseForm.__proto__ || (0, _getPrototypeOf2.default)(CreditPurchaseForm)).call(this));

    _this.state = {
      stripe: null
    };
    return _this;
  }

  (0, _createClass3.default)(CreditPurchaseForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // componentDidMount only runs in a browser environment.
      // In addition to loading asynchronously, this code is safe to server-side render.

      // You can inject a script tag manually like this,
      // or you can use the 'async' attribute on the Stripe.js v3 <script> tag.
      var stripeJs = document.createElement("script");
      stripeJs.src = "https://js.stripe.com/v3/";
      stripeJs.async = true;
      stripeJs.onload = function () {
        _this2.setState({
          stripe: window.Stripe(STRIPE_KEY)
        });
      };
      document.body && document.body.appendChild(stripeJs);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_reactStripeElements.StripeProvider, { stripe: this.state.stripe, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_MyStoreCheckout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }));
    }
  }]);

  return CreditPurchaseForm;
}(_react.Component);

exports.default = CreditPurchaseForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ3JlZGl0UHVyY2hhc2VGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiU3RyaXBlUHJvdmlkZXIiLCJ3ZWIzIiwiZXZlbnQiLCJNeVN0b3JlQ2hlY2tvdXQiLCJyZXF1aXJlIiwiU1RSSVBFX0tFWSIsIkNyZWRpdFB1cmNoYXNlRm9ybSIsInN0YXRlIiwic3RyaXBlIiwic3RyaXBlSnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsIm9ubG9hZCIsInNldFN0YXRlIiwid2luZG93IiwiU3RyaXBlIiwiYm9keSIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUTs7QUFDdkIsQUFBUzs7QUFDVCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBcUI7Ozs7Ozs7OztlQUNMLFFBQUEsQSxBQUFRO0lBQXZCLEEsc0JBQUEsQTs7SSxBQUVGOzhDQUNKOztnQ0FBYzt3Q0FBQTs7d0pBR1o7O1VBQUEsQUFBSztjQUhPLEFBR1osQUFBYSxBQUNIO0FBREcsQUFDWDtXQUVIOzs7Ozt3Q0FFbUI7bUJBQ2xCOztBQUNBO0FBRUE7O0FBQ0E7QUFDQTtVQUFNLFdBQVcsU0FBQSxBQUFTLGNBQTFCLEFBQWlCLEFBQXVCLEFBQ3hDO2VBQUEsQUFBUyxNQUFULEFBQWUsQUFDZjtlQUFBLEFBQVMsUUFBVCxBQUFpQixBQUNqQjtlQUFBLEFBQVMsU0FBUyxZQUFNLEFBQ3RCO2VBQUEsQUFBSztrQkFDSyxPQUFBLEFBQU8sT0FEakIsQUFBYyxBQUNKLEFBQWMsQUFFekI7QUFIZSxBQUNaO0FBRkosQUFLQTtlQUFBLEFBQVMsUUFBUSxTQUFBLEFBQVMsS0FBVCxBQUFjLFlBQS9CLEFBQWlCLEFBQTBCLEFBQzVDOzs7OzZCQUVRLEFBQ1A7NkJBQ0UsQUFBQyxxREFBZSxRQUFRLEtBQUEsQUFBSyxNQUE3QixBQUFtQztvQkFBbkM7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISztBQUFBOzs7OztBQTdCeUIsQSxBQW1DakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ3JlZGl0UHVyY2hhc2VGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==