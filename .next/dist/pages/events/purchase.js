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
                eventInstance = (0, _event2.default)(address);
                purchasePrice = price * _this.state.quantity;

                _this.setState({ loading: true, errorMessage: "" });

                _context.prev = 5;
                _context.next = 8;
                return _web2.default.eth.getAccounts();

              case 8:
                accounts = _context.sent;
                _context.next = 11;
                return eventInstance.methods.purchaseTicket(parseInt(_this.state.quantity, 10)).send({
                  from: accounts[0],
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
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Loader, { size: "massive", __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Processing Transaction")), _react2.default.createElement("h1", { style: { textAlign: "center", fontSize: "50px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Purchase Tickets to ", this.props.title), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_semanticUiReact.Message, {
        negative: true,
        style: {
          display: "" + (!!this.state.errorMessage ? "block" : "none")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Oops!"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, this.state.errorMessage)), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
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
          lineNumber: 100
        }
      }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement("h4", { style: { marginLeft: "10px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "Select Payment Type"), _react2.default.createElement(_semanticUiReact.Button.Group, { style: { margin: "10px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { type: "button", onClick: this.payWithEther, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Ether"), _react2.default.createElement(_semanticUiReact.Button.Or, { text: "or", __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: "button", onClick: this.payWithCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "Credit Card")), this.state.paymentType === "Ether" ? _react2.default.createElement("div", {
        style: {
          backgroundColor: "rgba(143, 213, 166, 0.4)",
          padding: "15px",
          borderRadius: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "Pay With Ether (", this.state.quantity === 0 || this.state.quantity === "" ? 0 : Math.round(parseInt(this.state.quantity, 10) * _web2.default.utils.fromWei(this.props.price, "ether") * 100) / 100, " ", "Ether)"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        id: "submit",
        control: _semanticUiReact.Button,
        content: "Confirm Order",
        style: { color: "white", backgroundColor: "#329f5b" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      })) : ""), this.state.paymentType === "Card" ? _react2.default.createElement("div", {
        style: {
          backgroundColor: "rgba(143, 213, 166, 0.4)",
          padding: "15px",
          borderRadius: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, "Pay With Credit Card (", "$" + (this.state.quantity === 0 || this.state.quantity === "" ? 0 : Math.round(parseInt(this.state.quantity, 10) * _web2.default.utils.fromWei(this.props.price, "ether") * 100 * this.props.exchangeRates.CAD) / 100), ")"), _react2.default.createElement(_semanticUiReact.Message, { negative: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, "Sorry!"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, "Baldy is not currently accepting credit card payments")), _react2.default.createElement(_CreditPurchaseForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9wdXJjaGFzZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJEaW1tZXIiLCJMb2FkZXIiLCJMYXlvdXQiLCJ3ZWIzIiwiRXZlbnQiLCJDcmVkaXRQdXJjaGFzZUZvcm0iLCJDb252ZXJ0ZXIiLCJSb3V0ZXIiLCJFdmVudFB1cmNoYXNlIiwicHJvcHMiLCJvblN1Ym1pdCIsImV2ZW50IiwiYWRkcmVzcyIsInByaWNlIiwicHJldmVudERlZmF1bHQiLCJldmVudEluc3RhbmNlIiwicHVyY2hhc2VQcmljZSIsInN0YXRlIiwicXVhbnRpdHkiLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInB1cmNoYXNlVGlja2V0IiwicGFyc2VJbnQiLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInBheW1lbnRUeXBlIiwiYmluZCIsInBheVdpdGhDYXJkIiwicGF5V2l0aEV0aGVyIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0YXJnZXQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIk1hdGgiLCJyb3VuZCIsInV0aWxzIiwiZnJvbVdlaSIsImNvbG9yIiwiZXhjaGFuZ2VSYXRlcyIsIkNBRCIsInF1ZXJ5IiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiZXRoZXJUb0NBRCIsImV4Y2hhbmdlUmF0ZSIsImNhcGFjaXR5IiwibWFuYWdlciIsImlzT3BlbiIsInRpY2tldHNTb2xkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQ0UsQUFDQSxBQUNB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