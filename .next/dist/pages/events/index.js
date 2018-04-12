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

    _this.sortAndStyleEvents = _this.sortAndStyleEvents.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: "sortAndStyleEvents",
    value: function sortAndStyleEvents(arr) {
      return arr.sort(function (a, b) {
        return Date.parse(a[3]) > Date.parse(b[3]) ? 1 : Date.parse(b[3]) > Date.parse(a[3]) ? -1 : 0;
      }).map(function (event, i) {
        return _react2.default.createElement(_routes.Link, { route: "/events/" + event.address, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, _react2.default.createElement(_semanticUiReact.Card, { key: i, fluid: true, style: { marginBottom: "50px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
          header: event[6] + " " + (event[1] === event[8] ? "• SOLD OUT" : ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, style: { display: "flex" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement("div", { style: divContentStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "calendar", __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }), event[3]), _react2.default.createElement("div", { style: divContentStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "map pin", __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }), event[5]), _react2.default.createElement("div", { style: divContentStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "users", __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }), event[8] + " people are attending"), _react2.default.createElement("div", { style: divContentStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "ticket", __source: {
            fileName: _jsxFileName,
            lineNumber: 64
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
          lineNumber: 75
        }
      }, _react2.default.createElement("h1", { style: { textAlign: "center", fontSize: "60px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Upcoming Events"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJJY29uIiwiTGluayIsImdlbmVyYXRvciIsIkV2ZW50IiwiTGF5b3V0IiwiZGl2Q29udGVudFN0eWxlIiwiY29sb3IiLCJjYXJkSWNvblN0eWxlIiwibWFyZ2luTGVmdCIsIkluZGV4IiwicHJvcHMiLCJzb3J0QW5kU3R5bGVFdmVudHMiLCJiaW5kIiwiYXJyIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInBhcnNlIiwibWFwIiwiZXZlbnQiLCJpIiwiYWRkcmVzcyIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImV2ZW50U3VtbWFyaWVzIiwibWV0aG9kcyIsImdldERlcGxveWVkRXZlbnRzIiwiY2FsbCIsImV2ZW50TGlzdCIsImUiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsInB1c2giLCJwdXJjaGFzZWRFdmVudHMiLCJmaWx0ZXIiLCJ0aWNrZXRzT3duZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTSxrQkFBa0IsRUFBRSxPQUExQixBQUF3QixBQUFTOztBQUVqQyxJQUFNLGdCQUFnQixFQUFFLFlBQUYsQUFBYyxRQUFRLE9BQTVDLEFBQXNCLEFBQTZCOztJQUU3QyxBO2lDQUNKOztpQkFBQSxBQUFZLE9BQU87d0NBQUE7O29JQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLLHFCQUFxQixNQUFBLEFBQUssbUJBQUwsQUFBd0IsS0FGakMsQUFFakI7V0FDRDs7Ozs7dUMsQUFtQmtCLEtBQUssQUFDdEI7aUJBQU8sQUFDSixLQUFLLFVBQUEsQUFBUyxHQUFULEFBQVksR0FBRyxBQUNuQjtlQUFPLEtBQUEsQUFBSyxNQUFNLEVBQVgsQUFBVyxBQUFFLE1BQU0sS0FBQSxBQUFLLE1BQU0sRUFBOUIsQUFBbUIsQUFBVyxBQUFFLE1BQWhDLEFBQ0gsSUFDQSxLQUFBLEFBQUssTUFBTSxFQUFYLEFBQVcsQUFBRSxNQUFNLEtBQUEsQUFBSyxNQUFNLEVBQTlCLEFBQW1CLEFBQVcsQUFBRSxNQUFNLENBQXRDLEFBQXVDLElBRjNDLEFBRStDLEFBQ2hEO0FBTEksT0FBQSxFQUFBLEFBTUosSUFBSSxVQUFBLEFBQUMsT0FBRCxBQUFRLEdBQVI7K0JBQ0gsQUFBQyw4QkFBSyxvQkFBa0IsTUFBeEIsQUFBOEI7c0JBQTlCO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLEFBQUMsdUNBQUssS0FBTixBQUFXLEdBQUcsT0FBZCxNQUFvQixPQUFPLEVBQUUsY0FBN0IsQUFBMkIsQUFBZ0I7c0JBQTNDO3dCQUFBLEFBQ0U7QUFERjt5Q0FDRSxBQUFDLHNCQUFELEFBQU07a0JBQ08sTUFBWCxBQUFXLEFBQU0sWUFDZixNQUFBLEFBQU0sT0FBTyxNQUFiLEFBQWEsQUFBTSxLQUFuQixBQUF3QixlQUY1QixBQUNFLEFBQ3lDOztzQkFGM0M7d0JBREYsQUFDRSxBQUtBO0FBTEE7QUFDRSw0QkFJRCxjQUFELHNCQUFBLEFBQU0sV0FBUSxPQUFkLE1BQW9CLE9BQU8sRUFBRSxTQUE3QixBQUEyQixBQUFXO3NCQUF0Qzt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxTQUFLLE9BQUwsQUFBWTtzQkFBWjt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsQUFBQyx1Q0FBSyxPQUFOLEFBQWEsZUFBZSxNQUE1QixBQUFpQztzQkFBakM7d0JBREYsQUFDRSxBQUNDO0FBREQ7a0JBRkosQUFDRSxBQUVHLEFBQU0sQUFFVCxxQkFBQSxjQUFBLFNBQUssT0FBTCxBQUFZO3NCQUFaO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxBQUFDLHVDQUFLLE9BQU4sQUFBYSxlQUFlLE1BQTVCLEFBQWlDO3NCQUFqQzt3QkFERixBQUNFLEFBQ0M7QUFERDtrQkFOSixBQUtFLEFBRUcsQUFBTSxBQUVULHFCQUFBLGNBQUEsU0FBSyxPQUFMLEFBQVk7c0JBQVo7d0JBQUEsQUFDRTtBQURGOzJCQUNFLEFBQUMsdUNBQUssT0FBTixBQUFhLGVBQWUsTUFBNUIsQUFBaUM7c0JBQWpDO3dCQURGLEFBQ0UsQUFDSTtBQURKO2tCQURGLEFBRU0sQUFBTSxLQVhkLEFBU0UsQUFJQSwwQ0FBQSxjQUFBLFNBQUssT0FBTCxBQUFZO3NCQUFaO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxBQUFDLHVDQUFLLE9BQU4sQUFBYSxlQUFlLE1BQTVCLEFBQWlDO3NCQUFqQzt3QkFERixBQUNFLEFBQ0k7QUFESjtrQkFDSSxBQUFNLEtBQUssTUFGakIsQUFFaUIsQUFBTSxLQXZCMUIsQUFDSCxBQUNFLEFBTUUsQUFhRTtBQTNCVixBQUFPLEFBbUNSOzs7OzZCQUVRLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFFBQUksT0FBTyxFQUFFLFdBQUYsQUFBYSxVQUFVLFVBQWxDLEFBQVcsQUFBaUM7b0JBQTVDO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBR0E7O29CQUFBO3NCQUpGLEFBSUUsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQUxGLEFBS0UsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQU5GLEFBTUUsQUFFQztBQUZEO0FBQUEsZUFFQyxBQUFLLG1CQUFtQixLQUFBLEFBQUssTUFUbEMsQUFDRSxBQVFHLEFBQW1DLEFBR3pDOzs7Ozs7Ozs7Ozs7O3VCQXBFeUIsb0JBQUEsQUFBVSxRQUFWLEFBQWtCLG9CQUFsQixBQUFzQyxBOzttQkFBeEQ7QSxxQ0FDRjtBLGlDQUFpQixBOzs7Ozt1REFFUCxBOzs7Ozs7QUFBTDs7QTs7dUJBQ2EscUJBQUEsQUFBTSxHQUFOLEFBQ2pCLFFBRGlCLEFBQ1QsYUFEUyxBLEFBRWpCOzttQkFGQztBLG1DQUdKOzt3QkFBQSxBQUFRLFVBQVIsQUFBa0IsQUFDbEI7K0JBQUEsQUFBZSxLQUFmLEFBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFFaEI7QSxpREFBa0IsQUFBZSxPQUNyQyxpQkFBQTt5QkFBUyxNQUFBLEFBQU0sZUFBZixBQUE4QjtBLEFBRFIsaUJBQUE7aURBSWpCLEVBQUUsV0FBRixXQUFhLGdCQUFiLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwQlMsQSxBQTZFcEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9