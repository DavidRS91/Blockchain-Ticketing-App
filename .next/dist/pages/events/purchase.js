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

var _routes = require("../../routes");

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

                event.preventDefault();
                // 1.  Create an instance of my smart contract
                eventInstance = (0, _event2.default)(address);
                // 2.  Determine the cost of the transaction

                purchasePrice = price * _this.state.quantity;

                _this.setState({ loading: true, errorMessage: "" });

                _context.prev = 5;
                _context.next = 8;
                return _web2.default.eth.getAccounts();

              case 8:
                accounts = _context.sent;
                _context.next = 11;
                return eventInstance.methods
                //4. Call a function on the smart contract to purchase this.state.quantity tickets
                .purchaseTicket(parseInt(_this.state.quantity, 10)).send({
                  // 5. Send transaction from the active metamask account
                  from: accounts[0],
                  // 6. Send correct amount of money to the smart contract
                  value: purchasePrice
                });

              case 11:
                _routes.Router.pushRoute("/events/" + address);
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

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      quantity: 0,
      errorMessage: "",
      loading: false,
      paymentType: ""
    };
    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.payWithCard = _this.payWithCard.bind(_this);
    _this.payWithEther = _this.payWithEther.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EventPurchase, [{
    key: "payWithCard",
    value: function payWithCard() {
      this.setState({ paymentType: "Card" });
    }
  }, {
    key: "payWithEther",
    value: function payWithEther() {
      this.setState({ paymentType: "Ether" });
    }

    // ---Start Presentation Code Walkthrough: Submitting a transaction to the blockchain---

  }, {
    key: "render",

    // ---End of Presentation Code Walkthrough---

    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Loader, { size: "massive", __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Processing Transaction")), _react2.default.createElement("h1", { style: { textAlign: "center", fontSize: "50px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Purchase Tickets to ", this.props.title), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "How many tickets would you like to purchase?"), _react2.default.createElement(_semanticUiReact.Input
      // label="# of tickets"
      , { value: this.state.quantity,
        onChange: function onChange(event) {
          return _this3.setState({ quantity: event.target.value });
        }
        // labelPosition="right"
        , id: "quantity",
        placeholder: "eg 1, 2, 3...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), _react2.default.createElement("h4", { style: { marginLeft: "10px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "Select Payment Type"), _react2.default.createElement(_semanticUiReact.Button.Group, { style: { margin: "10px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { type: "button", onClick: this.payWithEther, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "Ether"), _react2.default.createElement(_semanticUiReact.Button.Or, { text: "or", __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: "button", onClick: this.payWithCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "Credit Card")), this.state.paymentType === "Ether" ? _react2.default.createElement("div", {
        style: {
          backgroundColor: "rgba(143, 213, 166, 0.4)",
          padding: "15px",
          borderRadius: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "Pay With Ether (", this.state.quantity === 0 || this.state.quantity === "" ? 0 : Math.round(parseInt(this.state.quantity, 10) * _web2.default.utils.fromWei(this.props.price, "ether") * 100) / 100, " ", "Ether)"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        id: "submit",
        control: _semanticUiReact.Button,
        content: "Confirm Order",
        style: { color: "white", backgroundColor: "#329f5b" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      })) : ""), this.state.paymentType === "Card" ? _react2.default.createElement("div", {
        style: {
          backgroundColor: "rgba(143, 213, 166, 0.4)",
          padding: "15px",
          borderRadius: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, "Pay With Credit Card (", "$" + (this.state.quantity === 0 || this.state.quantity === "" ? 0 : Math.round(parseInt(this.state.quantity, 10) * _web2.default.utils.fromWei(this.props.price, "ether") * 100 * this.props.exchangeRates.CAD) / 100), ")"), _react2.default.createElement(_CreditPurchaseForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      })) : "");
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
                  title: summary[6],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9wdXJjaGFzZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJEaW1tZXIiLCJMb2FkZXIiLCJMYXlvdXQiLCJ3ZWIzIiwiRXZlbnQiLCJDcmVkaXRQdXJjaGFzZUZvcm0iLCJDb252ZXJ0ZXIiLCJSb3V0ZXIiLCJFdmVudFB1cmNoYXNlIiwicHJvcHMiLCJvblN1Ym1pdCIsImV2ZW50IiwiYWRkcmVzcyIsInByaWNlIiwicHJldmVudERlZmF1bHQiLCJldmVudEluc3RhbmNlIiwicHVyY2hhc2VQcmljZSIsInN0YXRlIiwicXVhbnRpdHkiLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInB1cmNoYXNlVGlja2V0IiwicGFyc2VJbnQiLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInBheW1lbnRUeXBlIiwiYmluZCIsInBheVdpdGhDYXJkIiwicGF5V2l0aEV0aGVyIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJ0aXRsZSIsInRhcmdldCIsIm1hcmdpbkxlZnQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiTWF0aCIsInJvdW5kIiwidXRpbHMiLCJmcm9tV2VpIiwiY29sb3IiLCJleGNoYW5nZVJhdGVzIiwiQ0FEIiwicXVlcnkiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJldGhlclRvQ0FEIiwiZXhjaGFuZ2VSYXRlIiwiY2FwYWNpdHkiLCJtYW5hZ2VyIiwiaXNPcGVuIiwidGlja2V0c1NvbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUF3Qjs7OztBQUMvQixBQUFTLEFBQWlCOztBQUMxQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjt5Q0FDSjs7eUJBQUEsQUFBWSxPQUFPO2lCQUFBOzt3Q0FBQTs7b0pBQUEsQUFDWDs7VUFEVyxBQXVDbkIsdUJBdkNtQjswRkF1Q1IsaUJBQUEsQUFBTSxPQUFOO3VFQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFBQTs4QkFDa0IsTUFEbEIsQUFDdUIsT0FEdkIsQUFDRCxzQkFEQyxBQUNELFNBREMsQUFDUSxvQkFEUixBQUNRLEFBQ2pCOztzQkFBQSxBQUFNLEFBQ047QUFDTTtBQUpHLGdDQUlhLHFCQUpiLEFBSWEsQUFBTSxBQUM1QjtBQUNNOztBQU5HLGdDQU1hLFFBQVEsTUFBQSxBQUFLLE1BTjFCLEFBTWdDLEFBQ3pDOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQVB0QixBQU9ULEFBQWMsQUFBK0I7O2dDQVBwQztnQ0FBQTt1QkFXZ0IsY0FBQSxBQUFLLElBWHJCLEFBV2dCLEFBQVM7O21CQUExQjtBQVhDLG9DQUFBO2dDQUFBO3FDQVlhLEFBQ2xCO0FBREk7QUFBQSxpQkFBQSxBQUVILGVBQWUsU0FBUyxNQUFBLEFBQUssTUFBZCxBQUFvQixVQUZoQyxBQUVZLEFBQThCLEtBRjFDLEFBR0g7QUFFQzt3QkFBTSxTQUZGLEFBRUUsQUFBUyxBQUNmO0FBQ0E7eUJBbkJHLEFBWUQsQUFHRSxBQUlHO0FBSkgsQUFDSjs7bUJBS0o7K0JBQUEsQUFBTyx1QkFyQkEsQUFxQlAsQUFBNEI7Z0NBckJyQjtBQUFBOzttQkFBQTtnQ0FBQTtnREF1QlA7O3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUF2QnZCLEFBdUJQLEFBQWMsQUFBb0I7O21CQUVwQztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQXpCUCxBQXlCVCxBQUFjLEFBQVc7O21CQXpCaEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QUF2Q1E7OzJCQUFBO2dDQUFBO0FBQUE7QUFFakI7O1VBQUEsQUFBSztnQkFBUSxBQUNELEFBQ1Y7b0JBRlcsQUFFRyxBQUNkO2VBSFcsQUFHRixBQUNUO21CQUpGLEFBQWEsQUFJRSxBQUVmO0FBTmEsQUFDWDtVQUtGLEFBQUssV0FBVyxNQUFBLEFBQUssU0FBTCxBQUFjLEtBQTlCLEFBQ0E7VUFBQSxBQUFLLGNBQWMsTUFBQSxBQUFLLFlBQUwsQUFBaUIsS0FBcEMsQUFDQTtVQUFBLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQVZyQixBQVVqQjtXQUNEOzs7OztrQ0FrQmEsQUFDWjtXQUFBLEFBQUssU0FBUyxFQUFFLGFBQWhCLEFBQWMsQUFBZSxBQUM5Qjs7OzttQ0FFYyxBQUNiO1dBQUEsQUFBSyxTQUFTLEVBQUUsYUFBaEIsQUFBYyxBQUFlLEFBQzlCO0FBRUQ7Ozs7O1NBOEJBOzs7OzZCQUVTO21CQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMseUNBQU8sUUFBUSxLQUFBLEFBQUssTUFBckIsQUFBMkI7b0JBQTNCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLE1BQVIsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFLEFBRUYsNENBQUEsY0FBQSxRQUFJLE9BQU8sRUFBRSxXQUFGLEFBQWEsVUFBVSxVQUFsQyxBQUFXLEFBQWlDO29CQUE1QztzQkFBQTtBQUFBO1NBQ3VCLDZCQUFBLEFBQUssTUFMOUIsQUFJRSxBQUNrQyxBQUVsQzs7b0JBQUE7c0JBUEYsQUFPRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU0sU0FBTSxRQUFaLEFBQW1CO29CQUFuQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsaUVBQUMsQUFDQztBQURGO1VBRUUsT0FBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsTUFBQSxBQUFNLE9BRHhCLEFBQ1IsQUFBYyxBQUF5QjtBQUV6QztBQU5GO1VBT0UsSUFQRixBQU9LLEFBQ0g7cUJBUkYsQUFRYzs7b0JBUmQ7c0JBSk4sQUFDRSxBQUNFLEFBRUUsQUFZSjtBQVpJOzRCQVlKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBaEJGLEFBZ0JFLEFBQ0E7QUFEQTs7O29CQUNBO3NCQWpCRixBQWlCRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBLFFBQUksT0FBTyxFQUFFLFlBQWIsQUFBVyxBQUFjO29CQUF6QjtzQkFBQTtBQUFBO1NBbEJGLEFBa0JFLEFBQ0Esd0NBQUMsY0FBRCx3QkFBQSxBQUFRLFNBQU0sT0FBTyxFQUFFLFFBQXZCLEFBQXFCLEFBQVU7b0JBQS9CO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLE1BQVIsQUFBYSxVQUFTLFNBQVMsS0FBL0IsQUFBb0M7b0JBQXBDO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBR0Esd0NBQUEsQUFBQyx3QkFBRCxBQUFRLE1BQUcsTUFBWCxBQUFnQjtvQkFBaEI7c0JBSkYsQUFJRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsVUFBUyxTQUFTLEtBQS9CLEFBQW9DO29CQUFwQztzQkFBQTtBQUFBO1NBeEJKLEFBbUJFLEFBS0UsQUFJRCxzQkFBQSxBQUFLLE1BQUwsQUFBVyxnQkFBWCxBQUEyQiwwQkFDMUIsY0FBQTs7MkJBQ1MsQUFDWSxBQUNqQjttQkFGSyxBQUVJLEFBQ1Q7d0JBSkosQUFDUyxBQUdTO0FBSFQsQUFDTDs7b0JBRko7c0JBQUEsQUFPRTtBQVBGO0FBQ0UsT0FERixrQkFPRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDbUIseUJBQUEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixLQUN6QyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBRE0sQUFDTyxLQURQLEFBRWIsSUFDQSxLQUFBLEFBQUssTUFDSCxTQUFTLEtBQUEsQUFBSyxNQUFkLEFBQW9CLFVBQXBCLEFBQThCLE1BQzVCLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFBLEFBQUssTUFBeEIsQUFBOEIsT0FEaEMsQUFDRSxBQUFxQyxXQUZ6QyxBQUdJLE9BUFYsQUFRVSxBQUFLLEtBUmYsS0FQRixBQU9FLEFBV0E7O29CQUFBO3NCQWxCRixBQWtCRSxBQUNBO0FBREE7QUFBQSx3Q0FDQSxBQUFDLHNCQUFELEFBQU07WUFBTixBQUNLLEFBQ0g7QUFGRixBQUVXLEFBQ1Q7aUJBSEYsQUFHVSxBQUNSO2VBQU8sRUFBRSxPQUFGLEFBQVMsU0FBUyxpQkFKM0IsQUFJUyxBQUFtQzs7b0JBSjVDO3NCQXBCSCxBQUNDLEFBbUJFO0FBQUE7QUFDRSxZQXpEVixBQVFFLEFBd0RJLEFBR0gsVUFBQSxBQUFLLE1BQUwsQUFBVyxnQkFBWCxBQUEyQix5QkFDMUIsY0FBQTs7MkJBQ1MsQUFDWSxBQUNqQjttQkFGSyxBQUVJLEFBQ1Q7d0JBSkosQUFDUyxBQUdTO0FBSFQsQUFDTDs7b0JBRko7c0JBQUEsQUFPRTtBQVBGO0FBQ0UsT0FERixrQkFPRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDNEIsMEJBRDVCLE9BRUksS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFYLEFBQXdCLEtBQUssS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUF4QyxBQUFxRCxLQUFyRCxBQUNJLElBQ0EsS0FBQSxBQUFLLE1BQ0gsU0FBUyxLQUFBLEFBQUssTUFBZCxBQUFvQixVQUFwQixBQUE4QixNQUM1QixjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQXhCLEFBQThCLE9BRGhDLEFBQ0UsQUFBcUMsV0FEdkMsQUFFRSxNQUNBLEtBQUEsQUFBSyxNQUFMLEFBQVcsY0FKZixBQUk2QixPQVJyQyxBQVNZLE1BaEJkLEFBT0UsQUFZQSxzQkFBQSxBQUFDOztvQkFBRDtzQkFwQkgsQUFDQyxBQW1CRTtBQUFBO0FBQUEsWUF4RlIsQUFDRSxBQTBGSSxBQUlQOzs7Ozs2RyxBQXhKNEI7Ozs7O21CQUNyQjtBLGdDQUFnQixxQkFBTSxNQUFBLEFBQU0sTUFBWixBLEFBQWtCOzt1QkFDbEIsY0FBQSxBQUFjLFFBQWQsQUFBc0IsYUFBdEIsQUFBbUMsQTs7bUJBQW5EO0E7O3VCQUNxQixvQkFBQSxBLEFBQVU7O21CQUEvQjtBOzsyQkFFSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjt5QkFBTyxRQUZGLEFBRUUsQUFBUSxBQUNmOzRCQUFVLFFBSEwsQUFHSyxBQUFRLEFBQ2xCOzJCQUFTLFFBSkosQUFJSSxBQUFRLEFBQ2pCOzBCQUFRLFFBTEgsQUFLRyxBQUFRLEFBQ2hCOytCQUFhLFFBTlIsQUFNUSxBQUFRLEFBQ3JCO3lCQUFPLFFBUEYsQUFPRSxBQUFRLEFBQ2Y7aUNBUkssQUFRVSxBO0FBUlYsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW5Cc0IsQSxBQXlLNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoicHVyY2hhc2UuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9