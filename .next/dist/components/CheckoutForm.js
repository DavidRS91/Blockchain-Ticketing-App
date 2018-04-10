"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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
    var _ref,
        _this2 = this;

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

      onSubmit = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
          var _this$props, address, price, eventInstance, purchasePrice, accounts;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$props = _this.props, address = _this$props.address, price = _this$props.price;

                  event.preventDefault();
                  eventInstance = Event(address);
                  purchasePrice = price * _this.state.quantity;

                  _this.setState({ loading: true, errorMessage: "" });

                  _context.prev = 5;
                  _context.next = 8;
                  return _web.web3.eth.getAccounts();

                case 8:
                  accounts = _context.sent;
                  _context.next = 11;
                  return eventInstance.methods.purchaseTicket(parseInt(_this.state.quantity, 10)).send({
                    from: accounts[0],
                    value: purchasePrice
                  });

                case 11:
                  Router.pushRoute("/events/" + address);
                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](5);

                  _this.setState({ errorMessage: _context.t0.message });

                case 17:
                  _this.setState({ loading: false });

                case 18:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[5, 14]]);
        }));

        return function onSubmit(_x) {
          return _ref3.apply(this, arguments);
        };
      }();

      // However, this line of code will do the same thing:
      // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CheckoutForm, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("form", { onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_CardSection2.default, { style: { backgroundColor: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { style: { color: "white", backgroundColor: "#329f5b" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Confirm Order"));
    }
  }]);

  return CheckoutForm;
}(_react2.default.Component);

exports.default = (0, _reactStripeElements.injectStripe)(CheckoutForm);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hlY2tvdXRGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiaW5qZWN0U3RyaXBlIiwiQnV0dG9uIiwid2ViMyIsIndlYjNGb3VuZCIsIndlYjNBY2NvdW50IiwiQ2FyZFNlY3Rpb24iLCJDaGVja291dEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJldiIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJzdHJpcGUiLCJjcmVhdGVUb2tlbiIsIm5hbWUiLCJ0aGVuIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJldmVudCIsImFkZHJlc3MiLCJwcmljZSIsImV2ZW50SW5zdGFuY2UiLCJFdmVudCIsInB1cmNoYXNlUHJpY2UiLCJzdGF0ZSIsInF1YW50aXR5Iiwic2V0U3RhdGUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJwdXJjaGFzZVRpY2tldCIsInBhcnNlSW50Iiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsIlJvdXRlciIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUyxBQUFNLEFBQVcsQUFBbUI7O0FBRTdDLEFBQU8sQUFBaUI7Ozs7Ozs7OztJQUVsQixBOzs7Ozs7Ozs7Ozs7Ozs7d05BQ0osQSxlQUFlLGNBQU0sQUFDbkI7QUFDQTtTQUFBLEFBQUcsQUFFSDs7QUFDQTtBQUNBO1lBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixZQUFZLEVBQUUsTUFBaEMsQUFBOEIsQUFBUSxpQkFBdEMsQUFBdUQsS0FBSyxpQkFBZTtZQUFaLEFBQVksY0FBWixBQUFZLEFBQ3pFOztnQkFBQSxBQUFRLElBQVIsQUFBWSwwQkFBWixBQUFzQyxBQUN2QztBQUZELEFBSUE7OzZCQUFBOzZGQUFXLGlCQUFBLEFBQU0sT0FBTjt5RUFBQTs7d0VBQUE7c0JBQUE7K0NBQUE7cUJBQUE7Z0NBQ2tCLE1BRGxCLEFBQ3VCLE9BRHZCLEFBQ0Qsc0JBREMsQUFDRCxTQURDLEFBQ1Esb0JBRFIsQUFDUSxBQUNqQjs7d0JBQUEsQUFBTSxBQUNBO0FBSEcsa0NBR2EsTUFIYixBQUdhLEFBQU0sQUFDdEI7QUFKRyxrQ0FJYSxRQUFRLE1BQUEsQUFBSyxNQUoxQixBQUlnQyxBQUN6Qzs7d0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FMdEIsQUFLVCxBQUFjLEFBQStCOztrQ0FMcEM7a0NBQUE7eUJBUWdCLFVBQUEsQUFBSyxJQVJyQixBQVFnQixBQUFTOztxQkFBMUI7QUFSQyxzQ0FBQTtrQ0FBQTt1Q0FTRCxBQUFjLFFBQWQsQUFDSCxlQUFlLFNBQVMsTUFBQSxBQUFLLE1BQWQsQUFBb0IsVUFEaEMsQUFDWSxBQUE4QixLQUQxQyxBQUVIOzBCQUNPLFNBREYsQUFDRSxBQUFTLEFBQ2Y7MkJBYkcsQUFTRCxBQUVFLEFBRUc7QUFGSCxBQUNKLG1CQUhFOztxQkFNTjt5QkFBQSxBQUFPLHVCQWZBLEFBZVAsQUFBNEI7a0NBZnJCO0FBQUE7O3FCQUFBO2tDQUFBO2tEQWlCUDs7d0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWpCdkIsQUFpQlAsQUFBYyxBQUFvQjs7cUJBRXBDO3dCQUFBLEFBQUssU0FBUyxFQUFFLFNBbkJQLEFBbUJULEFBQWMsQUFBVzs7cUJBbkJoQjtxQkFBQTtrQ0FBQTs7QUFBQTttQ0FBQTtBQUFYOztxQ0FBQTttQ0FBQTtBQUFBO0FBc0JBOztBQUNBO0FBQ0Q7QTs7Ozs7NkJBRVEsQUFDUDs2QkFDRSxjQUFBLFVBQU0sVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyx1Q0FBWSxPQUFPLEVBQUUsaUJBQXRCLEFBQW9CLEFBQW1CO29CQUF2QztzQkFERixBQUNFLEFBQ0E7QUFEQTs7O29CQUNBO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyx5Q0FBTyxPQUFPLEVBQUUsT0FBRixBQUFTLFNBQVMsaUJBQWpDLEFBQWUsQUFBbUM7b0JBQWxEO3NCQUFBO0FBQUE7U0FKSixBQUNFLEFBR0UsQUFNTDs7Ozs7RUFoRHdCLGdCQUFNLEEsQUFtRGpDOztrQkFBZSx1Q0FBZixBQUFlLEFBQWEiLCJmaWxlIjoiQ2hlY2tvdXRGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==