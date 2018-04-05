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


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement("h1", { style: { textAlign: "center", fontSize: "60px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Upcoming Events"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), this.props.eventSummaries.map(function (event, i) {
        return _react2.default.createElement(_routes.Link, { route: "/events/" + _this2.props.eventList[i], __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _react2.default.createElement(_semanticUiReact.Card, { key: i, fluid: true, style: { marginBottom: "50px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Content, { header: event[6], __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, style: { display: "flex" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, _react2.default.createElement("div", { style: { color: "#0c8346" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, {
          style: { marginLeft: "15px", color: "#0c8346" },
          name: "calendar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }), event[3]), _react2.default.createElement("div", { style: { color: "#0c8346" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, {
          style: { marginLeft: "15px", color: "#0c8346" },
          name: "map pin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }), event[5]), _react2.default.createElement("div", { style: { color: "#0c8346" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, {
          style: { marginLeft: "15px", color: "#0c8346" },
          name: "users",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }), event[8] + " people are attending"))));
      }));
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
                  _context.next = 18;
                  break;
                }

                e = _step.value;
                _context.next = 13;
                return (0, _event2.default)(e).methods.getSummary().call();

              case 13:
                summary = _context.sent;

                eventSummaries.push(summary);

              case 15:
                _iteratorNormalCompletion = true;
                _context.next = 9;
                break;

              case 18:
                _context.next = 24;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 24:
                _context.prev = 24;
                _context.prev = 25;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 27:
                _context.prev = 27;

                if (!_didIteratorError) {
                  _context.next = 30;
                  break;
                }

                throw _iteratorError;

              case 30:
                return _context.finish(27);

              case 31:
                return _context.finish(24);

              case 32:
                purchasedEvents = eventSummaries.filter(function (event) {
                  return event.ticketsOwned > 0;
                });
                return _context.abrupt("return", { eventList: eventList, eventSummaries: eventSummaries });

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 20, 24, 32], [25,, 27, 31]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJJY29uIiwiTGluayIsImdlbmVyYXRvciIsIkV2ZW50IiwiTGF5b3V0IiwiSW5kZXgiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsInByb3BzIiwiZXZlbnRTdW1tYXJpZXMiLCJtYXAiLCJldmVudCIsImkiLCJldmVudExpc3QiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwibWV0aG9kcyIsImdldERlcGxveWVkRXZlbnRzIiwiY2FsbCIsImUiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsInB1c2giLCJwdXJjaGFzZWRFdmVudHMiLCJmaWx0ZXIiLCJ0aWNrZXRzT3duZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs2QkFtQks7bUJBQ1A7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQSxRQUFJLE9BQU8sRUFBRSxXQUFGLEFBQWEsVUFBVSxVQUFsQyxBQUFXLEFBQWlDO29CQUE1QztzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUdBOztvQkFBQTtzQkFKRixBQUlFLEFBQ0E7QUFEQTtBQUFBOztvQkFDQTtzQkFMRixBQUtFLEFBQ0E7QUFEQTtBQUFBOztvQkFDQTtzQkFORixBQU1FLEFBRUM7QUFGRDtBQUFBLGVBRUMsQUFBSyxNQUFMLEFBQVcsZUFBWCxBQUEwQixJQUFJLFVBQUEsQUFBQyxPQUFELEFBQVEsR0FBUjsrQkFDN0IsQUFBQyw4QkFBSyxvQkFBa0IsT0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFuQyxBQUF3QixBQUFxQjtzQkFBN0M7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsQUFBQyx1Q0FBSyxLQUFOLEFBQVcsR0FBRyxPQUFkLE1BQW9CLE9BQU8sRUFBRSxjQUE3QixBQUEyQixBQUFnQjtzQkFBM0M7d0JBQUEsQUFDRTtBQURGO3lDQUNFLEFBQUMsc0JBQUQsQUFBTSxXQUFRLFFBQVEsTUFBdEIsQUFBc0IsQUFBTTtzQkFBNUI7d0JBREYsQUFDRSxBQUNBO0FBREE7NEJBQ0MsY0FBRCxzQkFBQSxBQUFNLFdBQVEsT0FBZCxNQUFvQixPQUFPLEVBQUUsU0FBN0IsQUFBMkIsQUFBVztzQkFBdEM7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUUsT0FBZCxBQUFZLEFBQVM7c0JBQXJCO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxBQUFDO2lCQUNRLEVBQUUsWUFBRixBQUFjLFFBQVEsT0FEL0IsQUFDUyxBQUE2QixBQUNwQztnQkFGRixBQUVPOztzQkFGUDt3QkFERixBQUNFLEFBSUM7QUFKRDtBQUNFLGtCQUhOLEFBQ0UsQUFLRyxBQUFNLEFBRVQscUJBQUEsY0FBQSxTQUFLLE9BQU8sRUFBRSxPQUFkLEFBQVksQUFBUztzQkFBckI7d0JBQUEsQUFDRTtBQURGOzJCQUNFLEFBQUM7aUJBQ1EsRUFBRSxZQUFGLEFBQWMsUUFBUSxPQUQvQixBQUNTLEFBQTZCLEFBQ3BDO2dCQUZGLEFBRU87O3NCQUZQO3dCQURGLEFBQ0UsQUFJQztBQUpEO0FBQ0Usa0JBVk4sQUFRRSxBQUtHLEFBQU0sQUFFVCxxQkFBQSxjQUFBLFNBQUssT0FBTyxFQUFFLE9BQWQsQUFBWSxBQUFTO3NCQUFyQjt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsQUFBQztpQkFDUSxFQUFFLFlBQUYsQUFBYyxRQUFRLE9BRC9CLEFBQ1MsQUFBNkIsQUFDcEM7Z0JBRkYsQUFFTzs7c0JBRlA7d0JBREYsQUFDRSxBQUlJO0FBSko7QUFDRSxrQkFGSixBQUtNLEFBQU0sS0F4QlcsQUFDN0IsQUFDRSxBQUVFLEFBZUU7QUE1QlosQUFDRSxBQVFHLEFBZ0NOOzs7Ozs7Ozs7Ozs7O3VCQTNEeUIsb0JBQUEsQUFBVSxRQUFWLEFBQWtCLG9CQUFsQixBLEFBQXNDOzttQkFBeEQ7QSxxQ0FDRjtBLGlDQUFpQixBOzs7Ozt1REFFUCxBOzs7Ozs7QUFBTDs7QTs7dUJBQ2EscUJBQUEsQUFBTSxHQUFOLEFBQ2pCLFFBRGlCLEFBQ1QsYUFEUyxBQUVqQixBOzttQkFGQztBLG1DQUlKOzsrQkFBQSxBQUFlLEtBQWYsQUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQUVoQjtBLGlEQUFrQixBQUFlLE9BQ3JDLGlCQUFBO3lCQUFTLE1BQUEsQUFBTSxlQUFmLEFBQThCO0FBRFIsQSxpQkFBQTtpREFJakIsRUFBRSxXQUFGLFdBQWEsZ0JBQWIsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhCUyxBLEFBZ0VwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=