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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _event = require("../../ethereum/event");

var _event2 = _interopRequireDefault(_event);

var _web = require("../../ethereum/web3");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/pages/events/userevents.js?entry";


var divContentStyle = { color: "#0c8346" };

var cardIconStyle = { marginLeft: "15px", color: "#0c8346" };

var UserIndex = function (_Component) {
  (0, _inherits3.default)(UserIndex, _Component);

  function UserIndex() {
    (0, _classCallCheck3.default)(this, UserIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UserIndex.__proto__ || (0, _getPrototypeOf2.default)(UserIndex)).call(this));

    _this.displayUserEvents = _this.displayUserEvents.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(UserIndex, [{
    key: "displayUserEvents",
    value: function displayUserEvents(arr) {
      if (arr.filter(function (e) {
        return e.ticketsOwned !== "0";
      }).length > 0) {
        return arr.sort(function (a, b) {
          return Date.parse(a[3]) > Date.parse(b[3]) ? 1 : Date.parse(b[3]) > Date.parse(a[3]) ? -1 : 0;
        }).filter(function (event) {
          return event.ticketsOwned !== "0";
        }).map(function (event, i) {
          return _react2.default.createElement(_routes.Link, { route: "/events/" + event.address, __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, _react2.default.createElement(_semanticUiReact.Card, { key: i, fluid: true, style: { marginBottom: "50px" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }, _react2.default.createElement(_semanticUiReact.Card.Content, { header: event[6], __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          }), _react2.default.createElement(_semanticUiReact.Card.Description, {
            style: {
              marginLeft: "20px",
              marginBottom: "15px",
              color: "#0c8346",
              fontWeight: "600"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          }, "You have ", event.ticketsOwned, " ", event.ticketsOwned > 1 ? "tickets" : "ticket"), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, style: { display: "flex" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }, _react2.default.createElement("div", { style: divContentStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "calendar", __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }), event[3]), _react2.default.createElement("div", { style: divContentStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "map pin", __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          }), event[5]), _react2.default.createElement("div", { style: divContentStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "users", __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          }), event[8] + " people are attending"))));
        });
      } else {
        return _react2.default.createElement("div", {
          style: {
            textAlign: "center",
            backgroundColor: "#E5E3E3",
            padding: "10px",
            marginLeft: "150px",
            marginRight: "150px",
            borderRadius: "15px",
            color: "#7F7777"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, {
          name: "warning circle",
          style: { color: "#0c8346", fontSize: "40px" },
          size: "huge",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }), _react2.default.createElement("h3", { style: { color: "#0c8346", fontSize: "30px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, "Uh oh!"), _react2.default.createElement("p", { style: { fontSize: "17px", fontWeight: "700" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, "Looks like you haven't purchased any tickets yet!"), _react2.default.createElement(_routes.Link, { route: "/events", __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, _react2.default.createElement("a", {
          style: {
            fontWeight: "700",
            fontSize: "17px",
            color: "#0c8346",
            fontStyle: "italic"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, "Click here to view upcoming events")));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement("h1", { style: { textAlign: "center", fontSize: "60px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "Your Events"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), this.displayUserEvents(this.props.eventSummaries));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var query = _ref.query;

        var eventList, eventSummaries, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, e, summary, ticketsOwned, purchasedEvents;

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
                  _context.next = 23;
                  break;
                }

                e = _step.value;
                _context.next = 13;
                return (0, _event2.default)(e).methods.getSummary().call();

              case 13:
                summary = _context.sent;
                _context.next = 16;
                return (0, _event2.default)(e).methods.verifyOwnership(query.address).call();

              case 16:
                ticketsOwned = _context.sent;

                summary["ticketsOwned"] = ticketsOwned;
                summary.address = e;

                eventSummaries.push(summary);

              case 20:
                _iteratorNormalCompletion = true;
                _context.next = 9;
                break;

              case 23:
                _context.next = 29;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 29:
                _context.prev = 29;
                _context.prev = 30;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 32:
                _context.prev = 32;

                if (!_didIteratorError) {
                  _context.next = 35;
                  break;
                }

                throw _iteratorError;

              case 35:
                return _context.finish(32);

              case 36:
                return _context.finish(29);

              case 37:
                purchasedEvents = eventSummaries.filter(function (event) {
                  return event.ticketsOwned > 0;
                });
                return _context.abrupt("return", { eventList: eventList, purchasedEvents: purchasedEvents, eventSummaries: eventSummaries });

              case 39:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 25, 29, 37], [30,, 32, 36]]);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return UserIndex;
}(_react.Component);

exports.default = UserIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy91c2VyZXZlbnRzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkljb24iLCJMaW5rIiwiZ2VuZXJhdG9yIiwiTGF5b3V0IiwiRXZlbnQiLCJ3ZWIzIiwid2ViM0ZvdW5kIiwid2ViM0FjY291bnQiLCJkaXZDb250ZW50U3R5bGUiLCJjb2xvciIsImNhcmRJY29uU3R5bGUiLCJtYXJnaW5MZWZ0IiwiVXNlckluZGV4IiwiZGlzcGxheVVzZXJFdmVudHMiLCJiaW5kIiwiYXJyIiwiZmlsdGVyIiwiZSIsInRpY2tldHNPd25lZCIsImxlbmd0aCIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJwYXJzZSIsImV2ZW50IiwibWFwIiwiaSIsImFkZHJlc3MiLCJtYXJnaW5Cb3R0b20iLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwiZm9udFN0eWxlIiwicHJvcHMiLCJldmVudFN1bW1hcmllcyIsInF1ZXJ5IiwibWV0aG9kcyIsImdldERlcGxveWVkRXZlbnRzIiwiY2FsbCIsImV2ZW50TGlzdCIsImdldFN1bW1hcnkiLCJzdW1tYXJ5IiwidmVyaWZ5T3duZXJzaGlwIiwicHVzaCIsInB1cmNoYXNlZEV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBUyxBQUFNLEFBQVcsQUFBbUI7Ozs7Ozs7QUFFN0MsSUFBTSxrQkFBa0IsRUFBRSxPQUExQixBQUF3QixBQUFTOztBQUVqQyxJQUFNLGdCQUFnQixFQUFFLFlBQUYs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O3VCQUNhLHFCQUFBLEFBQU0sR0FBTixBQUNqQixRQURpQixBQUNULGFBRFMsQUFFakIsQTs7bUJBRkM7QTs7dUJBR3VCLHFCQUFBLEFBQU0sR0FBTixBQUN4QixRQUR3QixBQUNoQixnQkFBZ0IsTUFEQSxBQUNNLFNBRE4sQSxBQUV4Qjs7bUJBRkc7QSx3Q0FHTjs7d0JBQUEsQUFBUSxrQkFBUixBQUEwQixBQUMxQjt3QkFBQSxBQUFRLFVBQVIsQUFBa0IsQUFFbEI7OytCQUFBLEFBQWUsS0FBZixBQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBRWhCO0EsaURBQWtCLEFBQWUsT0FDckMsaUJBQUE7eUJBQVMsTUFBQSxBQUFNLGVBQWYsQUFBOEI7QUFEUixBLGlCQUFBO2lEQUlqQixFQUFFLFdBQUYsV0FBYSxpQkFBYixpQkFBOEIsZ0JBQTlCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUExQmEsQSxBQTBIeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoidXNlcmV2ZW50cy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=