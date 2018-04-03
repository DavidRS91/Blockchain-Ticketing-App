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

var _requests = require("../../lib/requests");

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
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                console.log("tried");
                _context.next = 4;
                return _web.web3.eth.getAccounts();

              case 4:
                accounts = _context.sent;
                _context.next = 7;
                return _generator2.default.methods.createEvent(_this.state.price, _this.state.capacity).send({
                  from: accounts[0]
                });

              case 7:

                _routes.Router.pushRoute("/");
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);

                _this.setState({ errorMessage: _context.t0.message });

              case 13:
                _this.setState({ loading: false });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 10]]);
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

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("h2", { style: { textAlign: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Create a New Event"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Price"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "wei",
        value: this.state.price,
        onChange: function onChange(event) {
          return _this3.setState({ price: event.target.value });
        },
        labelPosition: "right",
        id: "price",
        placeholder: "eg 150",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement("div", { style: { height: "23px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement("a", {
        id: "anchorID",
        href: "https://currencio.co/cad/eth/",
        target: "_blank",
        style: {
          height: "38px",
          display: "flex",
          alignItems: "flex-stretch"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        basic: true,
        type: "button",
        style: {
          padding: "7px 10px",
          fontSize: "12px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "ETH:CAD Converter"))), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Capacity"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "tickets",
        value: this.state.capacity,
        onChange: function onChange(event) {
          return _this3.setState({ capacity: event.target.value });
        },
        id: "capacity",
        labelPosition: "right",
        placeholder: "eg 150",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }))), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        value: this.state.date,
        onChange: function onChange(event) {
          return _this3.setState({ date: event.target.value });
        },
        id: "date",
        control: _semanticUiReact.Input,
        label: "Event Date",
        placeholder: "April 6, 2018",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        id: "location",
        value: this.state.location,
        onChange: function onChange(event) {
          return _this3.setState({ location: event.target.value });
        },
        control: _semanticUiReact.Input,
        label: "Location",
        placeholder: "eg 142 West Hastings Street",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        id: "description",
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        control: _semanticUiReact.TextArea,
        label: "Event description",
        placeholder: "Tell prospective attendees a little bit about your event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        id: "imageUrl",
        value: this.state.imageUrl,
        onChange: function onChange(event) {
          return _this3.setState({ imageUrl: event.target.value });
        },
        control: _semanticUiReact.Input,
        label: "Image URL (Optional)",
        placeholder: "Enter the link of an image you would like to use",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, { id: "submit", control: _semanticUiReact.Button, content: "Create Event", __source: {
          fileName: _jsxFileName,
          lineNumber: 142
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiSW5wdXQiLCJUZXh0QXJlYSIsIkJ1dHRvbiIsIkxpbmsiLCJSb3V0ZXIiLCJnZW5lcmF0b3IiLCJ3ZWIzIiwid2ViM0ZvdW5kIiwiQ29udmVydGVyIiwiRXZlbnROZXciLCJwcm9wcyIsIm9uU3VibWl0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVFdmVudCIsInN0YXRlIiwicHJpY2UiLCJjYXBhY2l0eSIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwic2V0U3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwibG9hZGluZyIsImRhdGUiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwibG9jYXRpb24iLCJ0ZXh0QWxpZ24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImZvbnRTaXplIiwiZXRoZXJUb0NBRCIsImV4Y2hhbmdlUmF0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFPLEFBQVU7O0FBQ2hDLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBUyxBQUFNLEFBQWlCOztBQUNoQyxBQUFTLEFBQWlCOzs7Ozs7O0lBRXBCLEE7b0NBQ0o7O29CQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7OzBJQUFBLEFBQ1g7O1VBRFcsQUFvQm5CLHVCQXBCbUI7MEZBb0JSLGlCQUFBLEFBQU0sT0FBTjtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUFBO2dDQUVQOzt3QkFBQSxBQUFRLElBRkQsQUFFUCxBQUFZ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QkFSZDtzQkF4Q04sQUFDRSxBQXFDRSxBQUVFLEFBWUo7QUFaSTtBQUNFLDRCQVdMLGNBQUQsc0JBQUEsQUFBTSxTQUFNLFFBQVosQUFBbUI7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLHNCQUFELEFBQU07ZUFDRyxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE1BQU0sTUFBQSxBQUFNLE9BQXJDLEFBQVMsQUFBYyxBQUFxQjtBQUZ4RCxBQUdFO1lBSEYsQUFHSyxBQUNIO0FBSkYsQUFJVyxBQUNUO2VBTEYsQUFLUSxBQUNOO3FCQU5GLEFBTWM7O29CQU5kO3NCQURGLEFBQ0UsQUFRQTtBQVJBO0FBQ0Usd0NBT0YsQUFBQyxzQkFBRCxBQUFNO1lBQU4sQUFDSyxBQUNIO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLE1BQUEsQUFBTSxPQUR4QixBQUNSLEFBQWMsQUFBeUI7QUFKM0MsQUFNRTtBQU5GLEFBTVcsQUFDVDtlQVBGLEFBT1EsQUFDTjtxQkFSRixBQVFjOztvQkFSZDtzQkE3REosQUFvREUsQUFTRSxBQVdGO0FBWEU7QUFDRSx5Q0FVSixBQUFDLHNCQUFELEFBQU07WUFBTixBQUNLLEFBQ0g7ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BRDNCLEFBQ1IsQUFBYyxBQUE0QjtBQUo5QyxBQU1FO0FBTkYsQUFNVyxBQUNUO2VBUEYsQUFPUSxBQUNOO3FCQVJGLEFBUWM7O29CQVJkO3NCQXhFRixBQXdFRSxBQVVBO0FBVkE7QUFDRSx3Q0FTRixBQUFDLHNCQUFELEFBQU07WUFBTixBQUNLLEFBQ0g7ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsTUFBQSxBQUFNLE9BQXpDLEFBQVMsQUFBYyxBQUF5QjtBQUg1RCxBQUlFO0FBSkYsQUFJVyxBQUNUO2VBTEYsQUFLUSxBQUNOO3FCQU5GLEFBTWM7O29CQU5kO3NCQWxGRixBQWtGRSxBQVFBO0FBUkE7QUFDRSx3Q0FPRixBQUFDLHNCQUFELEFBQU0sU0FBTSxJQUFaLEFBQWUsVUFBZixBQUF3QixBQUFTLGtDQUFRLFNBQXpDLEFBQWlEO29CQUFqRDtzQkE5Rk4sQUFDRSxBQUdFLEFBMEZFLEFBSVA7QUFKTzs7Ozs7Ozs7Ozs7Ozt1QkF0SHNCLG9CQUFBLEFBQVUsQTs7bUJBQWhDO0E7O2lDQUNDLEE7QUFBQSxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakJpQixBLEFBNEl2Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9