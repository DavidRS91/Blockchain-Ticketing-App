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

var _routes = require("../../routes");

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
                console.log("now");
                _this.setState({ confirmationModal: true });
                // Router.pushRoute(`/events/${address}`);
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](5);

                _this.setState({ errorMessage: _context.t0.message });

              case 18:
                _this.setState({ loading: false });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 15]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      quantity: 0,
      errorMessage: "",
      loading: false,
      paymentType: "",
      confirmationModal: false
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
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Modal, { open: this.state.confirmationModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Purchase Complete!"), _react2.default.createElement(_semanticUiReact.Modal.Description, { style: { padding: "15px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement("p", { style: { fontSize: "16px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "You have successfully purchased ", this.state.quantity, " ticket", this.state.quantity === "1" ? "" : "s", " ", "to ", this.props.title, " "), _react2.default.createElement(_routes.Link, { route: "/events", __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Back to Events")))), _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(_semanticUiReact.Loader, { size: "massive", __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Processing Transaction")), _react2.default.createElement("h1", { style: { textAlign: "center", fontSize: "50px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Purchase Tickets to ", this.props.title), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_semanticUiReact.Message, {
        negative: true,
        style: {
          display: "" + (!!this.state.errorMessage ? "block" : "none")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Oops!"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, this.state.errorMessage)), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
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
          lineNumber: 122
        }
      }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), _react2.default.createElement("h4", { style: { marginLeft: "10px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "Select Payment Type"), _react2.default.createElement(_semanticUiReact.Button.Group, { style: { margin: "10px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { type: "button", onClick: this.payWithEther, __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, "Ether"), _react2.default.createElement(_semanticUiReact.Button.Or, { text: "or", __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: "button", onClick: this.payWithCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "Credit Card")), this.state.paymentType === "Ether" ? _react2.default.createElement("div", {
        style: {
          backgroundColor: "rgba(143, 213, 166, 0.4)",
          padding: "15px",
          borderRadius: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, "Pay With Ether (", this.state.quantity === 0 || this.state.quantity === "" ? 0 : Math.round(parseInt(this.state.quantity, 10) * _web2.default.utils.fromWei(this.props.price, "ether") * 100) / 100, " ", "Ether)"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        id: "submit",
        control: _semanticUiReact.Button,
        content: "Confirm Order",
        style: { color: "white", backgroundColor: "#329f5b" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      })) : ""), this.state.paymentType === "Card" ? _react2.default.createElement("div", {
        style: {
          backgroundColor: "rgba(143, 213, 166, 0.4)",
          padding: "15px",
          borderRadius: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, "Pay With Credit Card (", "$" + (this.state.quantity === 0 || this.state.quantity === "" ? 0 : Math.round(parseInt(this.state.quantity, 10) * _web2.default.utils.fromWei(this.props.price, "ether") * 100 * this.props.exchangeRates.CAD) / 100), ")"), _react2.default.createElement(_semanticUiReact.Message, { negative: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, "Sorry!"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, "Baldy is not currently accepting credit card payments")), _react2.default.createElement(_CreditPurchaseForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9wdXJjaGFzZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJEaW1tZXIiLCJMb2FkZXIiLCJNb2RhbCIsIkljb24iLCJIZWFkZXIiLCJMYXlvdXQiLCJ3ZWIzIiwiRXZlbnQiLCJMaW5rIiwiQ3JlZGl0UHVyY2hhc2VGb3JtIiwiQ29udmVydGVyIiwiUm91dGVyIiwiRXZlbnRQdXJjaGFzZSIsInByb3BzIiwib25TdWJtaXQiLCJldmVudCIsImFkZHJlc3MiLCJwcmljZSIsInByZXZlbnREZWZhdWx0IiwiZXZlbnRJbnN0YW5jZSIsInB1cmNoYXNlUHJpY2UiLCJzdGF0ZSIsInF1YW50aXR5Iiwic2V0U3RhdGUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJwdXJjaGFzZVRpY2tldCIsInBhcnNlSW50Iiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25maXJtYXRpb25Nb2RhbCIsIm1lc3NhZ2UiLCJwYXltZW50VHlwZSIsImJpbmQiLCJwYXlXaXRoQ2FyZCIsInBheVdpdGhFdGhlciIsInBhZGRpbmciLCJmb250U2l6ZSIsInRpdGxlIiwidGV4dEFsaWduIiwiZGlzcGxheSIsInRhcmdldCIsIm1hcmdpbkxlZnQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJNYXRoIiwicm91bmQiLCJ1dGlscyIsImZyb21XZWkiLCJjb2xvciIsImV4Y2hhbmdlUmF0ZXMiLCJDQUQiLCJxdWVyeSIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImV0aGVyVG9DQUQiLCJleGNoYW5nZVJhdGUiLCJjYXBhY2l0eSIsIm1hbmFnZXIiLCJpc09wZW4iLCJ0aWNrZXRzU29sZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBVyxRQUFRLEtBQUEsQUFBSyxNQUF4QixBQUE4QixPQURoQyxBQUNFLEFBQXFDLFdBRHZDLEFBRUUsTUFDQSxLQUFBLEFBQUssTUFBTCxBQUFXLGNBSmYsQUFJNkIsT0FSckMsQUFTWSxNQWhCZCxBQU9FLEFBWUEsc0JBQUEsQUFBQywwQ0FBUSxVQUFUO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHlCQUFBLEFBQVM7O29CQUFUO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwyQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FyQkosQUFtQkUsQUFFRSxBQUVGLDJFQUFBLEFBQUM7O29CQUFEO3NCQXhCSCxBQUNDLEFBdUJFO0FBQUE7QUFBQSxZQXBIUixBQUNFLEFBc0hJLEFBSVA7Ozs7OzZHLEFBNUs0Qjs7Ozs7bUJBQ3JCO0EsZ0NBQWdCLHFCQUFNLE1BQUEsQUFBTSxNQUFaLEEsQUFBa0I7O3VCQUNsQixjQUFBLEFBQWMsUUFBZCxBQUFzQixhQUF0QixBLEFBQW1DOzttQkFBbkQ7QTs7dUJBQ3FCLG9CQUFVLEEsQUFBVjs7bUJBQXJCO0E7OzJCQUVLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO3lCQUFPLFFBRkYsQUFFRSxBQUFRLEFBQ2Y7NEJBQVUsUUFITCxBQUdLLEFBQVEsQUFDbEI7MkJBQVMsUUFKSixBQUlJLEFBQVEsQUFDakI7MEJBQVEsUUFMSCxBQUtHLEFBQVEsQUFDaEI7K0JBQWEsUUFOUixBQU1RLEFBQVEsQUFDckI7eUJBQU8sUUFQRixBQU9FLEFBQVEsQUFDZjtpQ0FSSyxBQVFVLEE7QUFSVixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcEJzQixBLEFBOEw1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJwdXJjaGFzZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=