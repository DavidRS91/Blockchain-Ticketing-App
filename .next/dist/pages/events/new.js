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
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                _context.next = 6;
                return _generator2.default.methods.createEvent(_this.state.price, _this.state.capacity).send({
                  from: accounts[0],
                  gas: 100000
                });

              case 6:

                _routes.Router.pushRoute("/");
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                _this.setState({ errorMessage: _context.t0.message });

              case 12:
                _this.setState({ loading: false });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 9]]);
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
    key: "currencyConverter",
    value: function currencyConverter() {
      console.log("currencyConverter");
      // Router.pushRoute("https://www.google.ca/");
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Create a New Event "), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
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
          lineNumber: 52
        }
      })), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("div", { style: { height: "23px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
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
          lineNumber: 63
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
          lineNumber: 73
        }
      }, "ETH:CAD Converter"))), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
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
          lineNumber: 88
        }
      }))), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 100
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
          lineNumber: 101
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
          lineNumber: 109
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
          lineNumber: 120
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
          lineNumber: 130
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, { id: "submit", control: _semanticUiReact.Button, content: "Create Event", __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      })));
    }
  }]);

  return EventNew;
}(_react.Component);

exports.default = EventNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiSW5wdXQiLCJUZXh0QXJlYSIsIkJ1dHRvbiIsIkxpbmsiLCJSb3V0ZXIiLCJnZW5lcmF0b3IiLCJ3ZWIzIiwiRXZlbnROZXciLCJwcm9wcyIsIm9uU3VibWl0IiwiZXZlbnQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUV2ZW50Iiwic3RhdGUiLCJwcmljZSIsImNhcGFjaXR5Iiwic2VuZCIsImZyb20iLCJnYXMiLCJwdXNoUm91dGUiLCJzZXRTdGF0ZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJsb2FkaW5nIiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VVcmwiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBTyxBQUFVOztBQUNoQyxBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDtvQ0FDSjs7b0JBQUEsQUFBWSxPQUFPO2lCQUFBOzt3Q0FBQTs7MElBQUEsQUFDWDs7VUFEVyxBQWFuQix1QkFibUI7MEZBYVIsaUJBQUEsQUFBTSxPQUFOO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQUE7Z0NBQUE7Z0NBQUE7dUJBRWdCLGNBQUEsQUFBSyxJQUZyQixBQUVnQixBQUFTOzttQkFBMUI7QUFGQyxvQ0FBQTtnQ0FBQTsyQ0FHRCxBQUFVLFFBQVYsQUFDSCxZQUFZLE1BQUEsQUFBSyxNQURkLEFBQ29C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QUFtQjtvQkFBbkI7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsc0JBQUQsQUFBTTtlQUNHLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsTUFBTSxNQUFBLEFBQU0sT0FBckMsQUFBUyxBQUFjLEFBQXFCO0FBRnhELEFBR0U7WUFIRixBQUdLLEFBQ0g7QUFKRixBQUlXLEFBQ1Q7ZUFMRixBQUtRLEFBQ047cUJBTkYsQUFNYzs7b0JBTmQ7c0JBREYsQUFDRSxBQVFBO0FBUkE7QUFDRSx3Q0FPRixBQUFDLHNCQUFELEFBQU07WUFBTixBQUNLLEFBQ0g7ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsTUFBQSxBQUFNLE9BRHhCLEFBQ1IsQUFBYyxBQUF5QjtBQUozQyxBQU1FO0FBTkYsQUFNVyxBQUNUO2VBUEYsQUFPUSxBQUNOO3FCQVJGLEFBUWM7O29CQVJkO3NCQTdESixBQW9ERSxBQVNFLEFBV0Y7QUFYRTtBQUNFLHlDQVVKLEFBQUMsc0JBQUQsQUFBTTtZQUFOLEFBQ0ssQUFDSDtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUsYUFBYSxNQUFBLEFBQU0sT0FEM0IsQUFDUixBQUFjLEFBQTRCO0FBSjlDLEFBTUU7QUFORixBQU1XLEFBQ1Q7ZUFQRixBQU9RLEFBQ047cUJBUkYsQUFRYzs7b0JBUmQ7c0JBeEVGLEFBd0VFLEFBVUE7QUFWQTtBQUNFLHdDQVNGLEFBQUMsc0JBQUQsQUFBTTtZQUFOLEFBQ0ssQUFDSDtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxNQUFBLEFBQU0sT0FBekMsQUFBUyxBQUFjLEFBQXlCO0FBSDVELEFBSUU7QUFKRixBQUlXLEFBQ1Q7ZUFMRixBQUtRLEFBQ047cUJBTkYsQUFNYzs7b0JBTmQ7c0JBbEZGLEFBa0ZFLEFBUUE7QUFSQTtBQUNFLHdDQU9GLEFBQUMsc0JBQUQsQUFBTSxTQUFNLElBQVosQUFBZSxVQUFmLEFBQXdCLEFBQVMsa0NBQVEsU0FBekMsQUFBaUQ7b0JBQWpEO3NCQTdGTixBQUNFLEFBRUUsQUEwRkUsQUFJUDtBQUpPOzs7Ozs7QUFsSWEsQSxBQXlJdkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==