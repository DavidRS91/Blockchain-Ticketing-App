"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _routes = require("../../routes.js");

var _generator = require("../../ethereum/generator");

var _generator2 = _interopRequireDefault(_generator);

var _event = require("../../ethereum/event");

var _event2 = _interopRequireDefault(_event);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/pages/events/index.js?entry";


var divContentStyle = { color: "#0c8346" };

var cardIconStyle = { marginLeft: "15px", color: "#0c8346" };

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.handleDismiss = function () {
      _this.setState({ display: "none" });
    };

    _this.state = {
      display: "block"
    };
    _this.sortAndStyleEvents = _this.sortAndStyleEvents.bind(_this);
    _this.handleDismiss = _this.handleDismiss.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: "sortAndStyleEvents",
    value: function sortAndStyleEvents(arr) {
      var rightNow = new Date();
      return arr.filter(function (e) {
        return Date.parse(e[3]) > rightNow;
      }).sort(function (a, b) {
        return Date.parse(a[3]) > Date.parse(b[3]) ? 1 : Date.parse(b[3]) > Date.parse(a[3]) ? -1 : 0;
      }).map(function (event, i) {
        return _react2.default.createElement(_routes.Link, { route: "/events/" + event.address, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react2.default.createElement(_semanticUiReact.Card, { key: i, fluid: true, style: { marginBottom: "50px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
          header: event[6] + " " + (event[1] === event[8] ? "• SOLD OUT" : ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, style: { display: "flex" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, _react2.default.createElement("div", { style: divContentStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "calendar", __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }), event[3]), _react2.default.createElement("div", { style: divContentStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "map pin", __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }), event[5]), _react2.default.createElement("div", { style: divContentStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "users", __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }), event[8] + " people are attending"), _react2.default.createElement("div", { style: divContentStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "ticket", __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }), event[1] - event[8] + " remaining tickets"))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement("h1", {
        style: {
          textAlign: "center",
          fontSize: "60px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Upcoming Events"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        style: {
          display: this.state.display
        },
        onDismiss: this.handleDismiss,
        warning: true,
        icon: "warning",
        header: "Disclaimer",
        content: "Please note that events hosted on baldy are not associated with any real events. Further, tickets purchased from Baldy do not have any monetary value and can not be used to gain access to any events.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), this.sortAndStyleEvents(this.props.eventSummaries));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var eventList, eventSummaries, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, e, summary, purchasedEvents;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _generator2.default.methods.getDeployedEvents().call();

              case 2:
                eventList = _context.sent;
                eventSummaries = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 7;
                _iterator = (0, _getIterator3.default)(eventList);

              case 9:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 19;
                  break;
                }

                e = _step.value;
                _context.next = 13;
                return (0, _event2.default)(e).methods.getSummary().call();

              case 13:
                summary = _context.sent;

                summary.address = e;
                eventSummaries.push(summary);

              case 16:
                _iteratorNormalCompletion = true;
                _context.next = 9;
                break;

              case 19:
                _context.next = 25;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 25:
                _context.prev = 25;
                _context.prev = 26;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 28:
                _context.prev = 28;

                if (!_didIteratorError) {
                  _context.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context.finish(28);

              case 32:
                return _context.finish(25);

              case 33:
                purchasedEvents = eventSummaries.filter(function (event) {
                  return event.ticketsOwned > 0;
                });
                return _context.abrupt("return", { eventList: eventList, eventSummaries: eventSummaries });

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 21, 25, 33], [26,, 28, 32]]);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJJY29uIiwiTWVzc2FnZSIsIkxpbmsiLCJnZW5lcmF0b3IiLCJFdmVudCIsIkxheW91dCIsImRpdkNvbnRlbnRTdHlsZSIsImNvbG9yIiwiY2FyZEljb25TdHlsZSIsIm1hcmdpbkxlZnQiLCJJbmRleCIsInByb3BzIiwiaGFuZGxlRGlzbWlzcyIsInNldFN0YXRlIiwiZGlzcGxheSIsInN0YXRlIiwic29ydEFuZFN0eWxlRXZlbnRzIiwiYmluZCIsImFyciIsInJpZ2h0Tm93IiwiRGF0ZSIsImZpbHRlciIsInBhcnNlIiwiZSIsInNvcnQiLCJhIiwiYiIsIm1hcCIsImV2ZW50IiwiaSIsImFkZHJlc3MiLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImV2ZW50U3VtbWFyaWVzIiwibWV0aG9kcyIsImdldERlcGxveWVkRXZlbnRzIiwiY2FsbCIsImV2ZW50TGlzdCIsImdldFN1bW1hcnkiLCJzdW1tYXJ5IiwicHVzaCIsInB1cmNoYXNlZEV2ZW50cyIsInRpY2tldHNPd25lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNLGtCQUFrQixFQUFFLE9BQTFCLEFBQXdCLEFBQVM7O0FBRWpDLElBQU0sZ0JBQWdCLEVBQUUsWUFBRixBQUFjLFFBQVEsT0FBNUMsQUFBc0IsQUFBNkI7O0ksQUFFN0M7aUNBQ0o7O2lCQUFBLEFBQVksT0FBTzt3Q0FBQTs7b0lBQUEsQUFDWDs7VUFEVyxBQWtFbkIsZ0JBQWdCLFlBQU0sQUFDcEI7WUFBQSxBQUFLLFNBQVMs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QVRGLEFBU0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7bUJBRVksS0FBQSxBQUFLLE1BRmxCLEFBQ1MsQUFDZSxBQUV0QjtBQUhPLEFBQ0w7bUJBRVMsS0FKYixBQUlrQixBQUNoQjtpQkFMRixBQU1FO2NBTkYsQUFNTyxBQUNMO2dCQVBGLEFBT1MsQUFDUDtpQkFSRixBQVFVOztvQkFSVjtzQkFWRixBQVVFLEFBWUE7QUFaQTtBQUNFOztvQkFXRjtzQkF0QkYsQUFzQkUsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQXZCRixBQXVCRSxBQUVDO0FBRkQ7QUFBQSxlQUVDLEFBQUssbUJBQW1CLEtBQUEsQUFBSyxNQTFCbEMsQUFDRSxBQXlCRyxBQUFtQyxBQUd6Qzs7Ozs7Ozs7Ozs7Ozt1QkEzRnlCLG9CQUFBLEFBQVUsUUFBVixBQUFrQixvQkFBbEIsQUFBc0MsQTs7bUJBQXhEO0EscUNBQ0Y7QSxpQ0FBaUIsQTs7Ozs7dURBRVAsQTs7Ozs7O0FBQUw7O0E7O3VCQUNhLHFCQUFBLEFBQU0sR0FBTixBQUNqQixRQURpQixBQUNULGFBRFMsQSxBQUVqQjs7bUJBRkM7QSxtQ0FHSjs7d0JBQUEsQUFBUSxVQUFSLEFBQWtCLEFBQ2xCOytCQUFBLEFBQWUsS0FBZixBQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBRWhCO0EsaURBQWtCLEFBQWUsT0FDckMsaUJBQUE7eUJBQVMsTUFBQSxBQUFNLGVBQWYsQUFBOEI7QUFEUixBLGlCQUFBO2lEQUlqQixFQUFFLFdBQUYsV0FBYSxnQkFBYixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeEJTLEEsQUF3R3BCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==