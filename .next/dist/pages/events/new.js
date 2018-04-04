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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../routes");

var _generator = require("../../ethereum/generator");

var _generator2 = _interopRequireDefault(_generator);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _requests = require("../../lib/requests");

var _geocodingRequests = require("../../lib/geocodingRequests");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/pages/events/new.js?entry";


var EventNew = function (_Component) {
  (0, _inherits3.default)(EventNew, _Component);

  function EventNew(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, EventNew);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EventNew.__proto__ || (0, _getPrototypeOf2.default)(EventNew)).call(this, props));

    _this.onSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, coordinates;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                _this.setState({
                  loading: true
                });
                console.log("tried");
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;

                console.log(accounts);
                _context.next = 9;
                return _geocodingRequests.Geocoder.toLatLong("12 Sunvista Place", "Calgary", "Alberta");

              case 9:
                coordinates = _context.sent;

                console.log(coordinates.results[0].geometry.location);
                _context.next = 13;
                return _generator2.default.methods.createEvent(_this.state.price, _this.state.capacity).send({
                  from: accounts[0]
                });

              case 13:

                _routes.Router.pushRoute("/");
                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);

                console.log(_context.t0.message);
                _this.setState({ errorMessage: _context.t0.message });

              case 20:
                _this.setState({ loading: false });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 16]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      capacity: "",
      date: "",
      description: "",
      imageUrl: "",
      location: "",
      price: "",
      loading: false
    };
    return _this;
  }

  (0, _createClass3.default)(EventNew, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props$exchangeRates = this.props.exchangeRates,
          CAD = _props$exchangeRates.CAD,
          USD = _props$exchangeRates.USD;
      var _state = this.state,
          price = _state.price,
          capacity = _state.capacity,
          description = _state.description,
          location = _state.location,
          date = _state.date;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement("h2", { style: { textAlign: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Create a New Event"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Price"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "Ether",
        value: price,
        onChange: function onChange(event) {
          return _this3.setState({ price: event.target.value });
        },
        labelPosition: "right",
        id: "price",
        placeholder: "eg 150",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Capacity"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "tickets",
        value: capacity,
        onChange: function onChange(event) {
          return _this3.setState({ capacity: event.target.value });
        },
        id: "capacity",
        labelPosition: "right",
        placeholder: "eg 150",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }))), !!parseFloat(price, 10) ? _react2.default.createElement("div", {
        style: {
          backgroundColor: "rgba(190,190,190,0.2)",
          width: "50%",
          padding: "3px",
          borderRadius: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement("p", {
        style: {
          marginLeft: "20px",
          marginBottom: "3px",
          fontStyle: "italic",
          fontSize: "12px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "\u2022 Current value in CAD: $", Math.round(parseFloat(price, 10) * CAD * 100) / 100), " ", _react2.default.createElement("p", {
        style: {
          marginLeft: "20px",
          fontStyle: "italic",
          fontSize: "12px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "\u2022 Current value in USD: $", Math.round(parseFloat(price, 10) * USD * 100) / 100)) : "", _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        value: date,
        onChange: function onChange(event) {
          return _this3.setState({ date: event.target.value });
        },
        id: "date",
        control: _semanticUiReact.Input,
        label: "Event Date",
        placeholder: "April 6, 2018",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        id: "location",
        value: location,
        onChange: function onChange(event) {
          return _this3.setState({ location: event.target.value });
        },
        control: _semanticUiReact.Input,
        label: "Location",
        placeholder: "eg 142 West Hastings Street",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        id: "description",
        value: description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        control: _semanticUiReact.TextArea,
        label: "Event description",
        placeholder: "Tell prospective attendees a little bit about your event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, { id: "submit", control: _semanticUiReact.Button, content: "Create Event", __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var exchangeRates;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _requests.Converter.etherToCAD();

              case 2:
                exchangeRates = _context2.sent;
                return _context2.abrupt("return", {
                  exchangeRates: exchangeRates
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return EventNew;
}(_react.Component);

exports.default = EventNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiSW5wdXQiLCJUZXh0QXJlYSIsIkJ1dHRvbiIsIkxpbmsiLCJSb3V0ZXIiLCJnZW5lcmF0b3IiLCJ3ZWIzIiwiQ29udmVydGVyIiwiR2VvY29kZXIiLCJFdmVudE5ldyIsInByb3BzIiwib25TdWJtaXQiLCJldmVudCIsInNldFN0YXRlIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwidG9MYXRMb25nIiwiY29vcmRpbmF0ZXMiLCJyZXN1bHRzIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsIm1ldGhvZHMiLCJjcmVhdGVFdmVudCIsInN0YXRlIiwicHJpY2UiLCJjYXBhY2l0eSIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImVycm9yTWVzc2FnZSIsImRhdGUiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwiZXhjaGFuZ2VSYXRlcyIsIkNBRCIsIlVTRCIsInRleHRBbGlnbiIsInRhcmdldCIsInZhbHVlIiwicGFyc2VGbG9hdCIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJmb250U3R5bGUiLCJmb250U2l6ZSIsIk1hdGgiLCJyb3VuZCIsImV0aGVyVG9DQUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFPLEFBQVU7O0FBQ2hDLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBaUI7O0FBQzFCLEFBQVMsQUFBZ0I7Ozs7Ozs7SSxBQUVuQjtvQ0FD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