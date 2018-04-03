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
        // The setTimeout lets us pretend that Stripe.js took a long time to load
        // Take it out of your production code!
        setTimeout(function () {
          _this2.setState({
            stripe: window.Stripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh")
          });
        }, 500);
      };
      document.body && document.body.appendChild(stripeJs);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_reactStripeElements.StripeProvider, { stripe: this.state.stripe, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_MyStoreCheckout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }));
    }
  }]);

  return CreditPurchaseForm;
}(_react.Component);

exports.default = CreditPurchaseForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ3JlZGl0UHVyY2hhc2VGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiU3RyaXBlUHJvdmlkZXIiLCJ3ZWIzIiwiZXZlbnQiLCJNeVN0b3JlQ2hlY2tvdXQiLCJDcmVkaXRQdXJjaGFzZUZvcm0iLCJzdGF0ZSIsInN0cmlwZSIsInN0cmlwZUpzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJvbmxvYWQiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJTdHJpcGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFTOztBQUNULEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFxQjs7Ozs7Ozs7O0ksQUFFdEI7OENBQ0o7O2dDQUFjO3dDQUFBOzt3SkFHWjs7VUFBQSxBQUFLO2NBSE8sQUFHWixBQUFhLEFBQ0g7QUFERyxBQUNYO1dBRUg7Ozs7O3dDQUVtQjttQkFDbEI7O0FBQ0E7QUFFQTs7QUFDQTtBQUNBO1VBQU0sV0FBVyxTQUFBLEFBQVMsY0FBMUIsQUFBaUIsQUFBdUIsQUFDeEM7ZUFBQSxBQUFTLE1BQVQsQUFBZSxBQUNmO2VBQUEsQUFBUyxRQUFULEFBQWlCLEFBQ2pCO2VBQUEsQUFBUyxTQUFTLFlBQU0sQUFDdEI7QUFDQTtBQUNBO21CQUFXLFlBQU0sQUFDZjtpQkFBQSxBQUFLO29CQUNLLE9BQUEsQUFBTyxPQURqQixBQUFjLEFBQ0osQUFBYyxBQUV6QjtBQUhlLEFBQ1o7QUFGSixXQUFBLEFBSUcsQUFDSjtBQVJELEFBU0E7ZUFBQSxBQUFTLFFBQVEsU0FBQSxBQUFTLEtBQVQsQUFBYyxZQUEvQixBQUFpQixBQUEwQixBQUM1Qzs7Ozs2QkFFUSxBQUNQOzZCQUNFLEFBQUMscURBQWUsUUFBUSxLQUFBLEFBQUssTUFBN0IsQUFBbUM7b0JBQW5DO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUZKLEFBQ0UsQUFDRSxBQUdMO0FBSEs7QUFBQTs7Ozs7QUFqQ3lCLEEsQUF1Q2pDOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNyZWRpdFB1cmNoYXNlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=