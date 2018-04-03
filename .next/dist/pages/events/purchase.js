"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _event = require("../../ethereum/event");

var _event2 = _interopRequireDefault(_event);

var _CreditPurchaseForm = require("../../components/CreditPurchaseForm");

var _CreditPurchaseForm2 = _interopRequireDefault(_CreditPurchaseForm);

var _requests = require("../../lib/requests");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/pages/events/purchase.js?entry";


var EventPurchase = function (_Component) {
  (0, _inherits3.default)(EventPurchase, _Component);

  function EventPurchase(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, EventPurchase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EventPurchase.__proto__ || (0, _getPrototypeOf2.default)(EventPurchase)).call(this, props));

    _this.onSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _this$props, address, price, eventInstance, purchasePrice, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, address = _this$props.address, price = _this$props.price;

                console.log(parseInt(_this.state.quantity, 10));
                event.preventDefault();
                eventInstance = (0, _event2.default)(address);
                purchasePrice = price * _this.state.quantity;

                console.log(typeof purchasePrice === "undefined" ? "undefined" : (0, _typeof3.default)(purchasePrice));
                console.log((0, _typeof3.default)(_this.state.quantity));
                _this.setState({ loading: true, errorMessage: "" });

                _context.prev = 8;
                _context.next = 11;
                return _web2.default.eth.getAccounts();

              case 11:
                accounts = _context.sent;
                _context.next = 14;
                return eventInstance.methods.purchaseTicket(parseInt(_this.state.quantity, 10)).send({
                  from: accounts[0],
                  value: purchasePrice
                });

              case 14:
                Router.replaceRoute("/event/" + address);
                _context.next = 22;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](8);

                _this.setState({ errorMessage: _context.t0.message });
                console.log(_context.t0);
                console.log("failed");

              case 22:
                _this.setState({ loading: false });

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[8, 17]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      quantity: 0,
      errorMessage: "",
      loading: false
    };
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EventPurchase, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Event Purchase Page"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Quantity"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "# of tickets",
        value: this.state.quantity,
        onChange: function onChange(event) {
          return _this3.setState({ quantity: event.target.value });
        },
        labelPosition: "right",
        id: "quantity",
        placeholder: "eg 1, 2, 3...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, { id: "submit", control: _semanticUiReact.Button, content: "Purchase", __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })), _react2.default.createElement(_CreditPurchaseForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var eventInstance, summary, exchangeRate;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                eventInstance = (0, _event2.default)(props.query.address);
                _context2.next = 3;
                return eventInstance.methods.getSummary().call();

              case 3:
                summary = _context2.sent;
                _context2.next = 6;
                return _requests.Converter.etherToCAD();

              case 6:
                exchangeRate = _context2.sent;
                return _context2.abrupt("return", {
                  address: props.query.address,
                  price: summary[0],
                  capacity: summary[1],
                  manager: summary[2],
                  isOpen: summary[3],
                  ticketsSold: summary[4],
                  exchangeRates: exchangeRate
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return EventPurchase;
}(_react.Component);

exports.default = EventPurchase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9wdXJjaGFzZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJ3ZWIzIiwiRXZlbnQiLCJDcmVkaXRQdXJjaGFzZUZvcm0iLCJDb252ZXJ0ZXIiLCJFdmVudFB1cmNoYXNlIiwicHJvcHMiLCJvblN1Ym1pdCIsImV2ZW50IiwiYWRkcmVzcyIsInByaWNlIiwiY29uc29sZSIsImxvZyIsInBhcnNlSW50Iiwic3RhdGUiLCJxdWFudGl0eSIsInByZXZlbnREZWZhdWx0IiwiZXZlbnRJbnN0YW5jZSIsInB1cmNoYXNlUHJpY2UiLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInB1cmNoYXNlVGlja2V0Iiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsIlJvdXRlciIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJiaW5kIiwidGFyZ2V0IiwicXVlcnkiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJldGhlclRvQ0FEIiwiZXhjaGFuZ2VSYXRlIiwiY2FwYWNpdHkiLCJtYW5hZ2VyIiwiaXNPcGVuIiwidGlja2V0c1NvbGQiLCJleGNoYW5nZVJhdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQXdCOzs7O0FBQy9CLEFBQVMsQUFBaUI7Ozs7Ozs7SUFFcEIsQTt5Q0FDSjs7eUJBQUEsQUFBWSxPQUFPO2lCQUFBOzt3Q0FBQTs7b0pBQUEsQUFDWDs7VUFEVyxBQXlCbkIsdUJBekJtQjswRkF5QlIsaUJBQUEsQUFBTSxPQUFOO3VFQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFBQTs4QkFDa0IsTUFEbEIsQUFDdUIsT0FEdkIsQUFDRCxzQkFEQyxBQUNELFNBREMsQUFDUSxvQkFEUixBQUNRLEFBQ2pCOzt3QkFBQSxBQUFRLElBQUksU0FBUyxNQUFBLEFBQUssTUFBZCxBQUFvQixVQUFoQyxBQUFZLEFBQThCLEFBQzFDO3NCQUFBLEFBQU0sQUFDQTtBQUpHLGdDQUlhLHFCQUpiLEFBSWEsQUFBTSxBQUN0QjtBQUxHLGdDQUthLFFBQVEsTUFBQSxBQUFLLE1BTDFCLEFBS2dDLEFBQ3pDOzt3QkFBQSxBQUFRLFdBQVIsQUFBbUIsb0VBQW5CLEFBQW1CLEFBQ25CO3dCQUFBLEFBQVEsMEJBQVcsTUFBQSxBQUFLLE1BQXhCLEFBQThCLEFBQzlCO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBUnRCLEFBUVQsQUFBYyxBQUErQjs7Z0NBUnBDO2dDQUFBO3VCQVdnQixjQUFBLEFBQUssSUFYckIsQUFXZ0IsQUFBUzs7bUJBQTFCO0FBWEMsb0NBQUE7Z0NBQUE7cUNBWUQsQUFBYyxRQUFkLEFBQ0gsZUFBZSxTQUFTLE1BQUEsQUFBSyxNQUFkLEFBQW9CLFVBRGhDLEFBQ1ksQUFBOEIsS0FEMUMsQUFFSDt3QkFDTyxTQURGLEFBQ0UsQUFBUyxBQUNmO3lCQWhCRyxBQVlELEFBRUUsQUFFRztBQUZILEFBQ0osaUJBSEU7O21CQU1OO3VCQUFBLEFBQU8seUJBbEJBLEFBa0JQLEFBQThCO2dDQWxCdkI7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBb0JQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBQTlCLEFBQWMsQUFBb0IsQUFDbEM7d0JBQUEsQUFBUSxhQUNSO3dCQUFBLEFBQVEsSUF0QkQsQUFzQlAsQUFBWTs7bUJBRWQ7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0F4QlAsQUF3QlQsQUFBYyxBQUFXOzttQkF4QmhCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0FBekJROzsyQkFBQTtnQ0FBQTtBQUFBO0FBRWpCOztVQUFBLEFBQUs7Z0JBQVEsQUFDRCxBQUNWO29CQUZXLEFBRUcsQUFDZDtlQUhGLEFBQWEsQUFHRixBQUVYO0FBTGEsQUFDWDtVQUlGLEFBQUssV0FBVyxNQUFBLEFBQUssU0FBTCxBQUFjLEtBUGIsQUFPakI7V0FDRDs7Ozs7NkJBNENRO21CQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx3Q0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw2QkFBQSxBQUFDO2VBQUQsQUFDUSxBQUNOO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLE1BQUEsQUFBTSxPQUR4QixBQUNSLEFBQWMsQUFBeUI7QUFKM0MsQUFNRTt1QkFORixBQU1nQixBQUNkO1lBUEYsQUFPSyxBQUNIO3FCQVJGLEFBUWM7O29CQVJkO3NCQUhKLEFBQ0UsQUFFRSxBQVdGO0FBWEU7QUFDRSwyQkFVSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQWRGLEFBY0UsQUFDQTtBQURBO3dDQUNBLEFBQUMsc0JBQUQsQUFBTSxTQUFNLElBQVosQUFBZSxVQUFmLEFBQXdCLEFBQVMsa0NBQVEsU0FBekMsQUFBaUQ7b0JBQWpEO3NCQWpCSixBQUVFLEFBZUUsQUFFRjtBQUZFOzJCQUVGLEFBQUM7O29CQUFEO3NCQXBCSixBQUNFLEFBbUJFLEFBR0w7QUFISztBQUFBOzs7Ozs2R0EvRHVCLEE7Ozs7O21CQUNyQjtBLGdDQUFnQixxQkFBTSxNQUFBLEFBQU0sTUFBWixBLEFBQWtCOzt1QkFDbEIsY0FBQSxBQUFjLFFBQWQsQUFBc0IsYUFBYSxBLEFBQW5DOzttQkFBaEI7QTs7dUJBQ3FCLG9CQUFBLEEsQUFBVTs7bUJBQS9CO0E7OzJCQUVLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO3lCQUFPLFFBRkYsQUFFRSxBQUFRLEFBQ2Y7NEJBQVUsUUFITCxBQUdLLEFBQVEsQUFDbEI7MkJBQVMsUUFKSixBQUlJLEFBQVEsQUFDakI7MEJBQVEsUUFMSCxBQUtHLEFBQVEsQUFDaEI7K0JBQWEsUUFOUixBQU1RLEFBQVEsQUFDckI7aUNBUEssQUFPVSxBO0FBUFYsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhCc0IsQSxBQWdGNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoicHVyY2hhc2UuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9