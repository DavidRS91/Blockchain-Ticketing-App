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

var _sortAndStyleEvents = require("../../lib/sortAndStyleEvents");

var _sortAndStyleEvents2 = _interopRequireDefault(_sortAndStyleEvents);

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
    _this.handleDismiss = _this.handleDismiss.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement("h1", {
        style: {
          textAlign: "center",
          fontSize: "60px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Upcoming Events"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        style: {
          display: this.state.display
        },
        onDismiss: this.handleDismiss,
        warning: true,
        icon: "warning",
        header: "Disclaimer",
        content: messageContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), (0, _sortAndStyleEvents2.default)(this.props.eventSummaries));
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


var messageContent = "Please note that events hosted on baldy are not associated with any real events. Further, tickets purchased from Baldy do not have any monetary value and can not be used to gain access to any events.";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJJY29uIiwiTWVzc2FnZSIsIkxpbmsiLCJnZW5lcmF0b3IiLCJFdmVudCIsIkxheW91dCIsInNvcnRBbmRTdHlsZUV2ZW50cyIsImRpdkNvbnRlbnRTdHlsZSIsImNvbG9yIiwiY2FyZEljb25TdHlsZSIsIm1hcmdpbkxlZnQiLCJJbmRleCIsInByb3BzIiwiaGFuZGxlRGlzbWlzcyIsInNldFN0YXRlIiwiZGlzcGxheSIsInN0YXRlIiwiYmluZCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibWVzc2FnZUNvbnRlbnQiLCJldmVudFN1bW1hcmllcyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZEV2ZW50cyIsImNhbGwiLCJldmVudExpc3QiLCJlIiwiZ2V0U3VtbWFyeSIsInN1bW1hcnkiLCJhZGRyZXNzIiwicHVzaCIsInB1cmNoYXNlZEV2ZW50cyIsImZpbHRlciIsImV2ZW50IiwidGlja2V0c093bmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQXdCOzs7Ozs7Ozs7QUFFL0IsSUFBTSxrQkFBa0IsRUFBRSxPQUExQixBQUF3QixBQUFTOztBQUVqQyxJQUFNLGdCQUFnQixFQUFFLFlBQUYsQUFBYyxRQUFRLE9BQTVDLEFBQXNCLEFBQTZCOztJQUU3QyxBO2lDQUNKOztpQkFBQSxBQUFZLE9BQU87d0NBQUE7O29JQUFBLEFBQ1g7O1VBRFcsQUF5Qm5CLGdCQUFnQixZQUFNLEFBQ3BCO1lBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBQzFCO0FBM0JrQixBQUVqQjs7VUFBQSxBQUFLO2VBQUwsQUFBYSxBQUNGLEFBRVg7QUFIYSxBQUNYO1VBRUYsQUFBSyxnQkFBZ0IsTUFBQSxBQUFLLGNBQUwsQUFBbUIsS0FMdkIsQUFLakI7V0FDRDs7Ozs7NkJBdUJRLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztxQkFDUyxBQUNNLEFBQ1g7b0JBSEosQUFDUyxBQUVLO0FBRkwsQUFDTDs7b0JBRko7c0JBQUE7QUFBQTtBQUNFLFNBRkosQUFDRSxBQVFBOztvQkFBQTtzQkFURixBQVNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O21CQUVZLEtBQUEsQUFBSyxNQUZsQixBQUNTLEFBQ2UsQUFFdEI7QUFITyxBQUNMO21CQUVTLEtBSmIsQUFJa0IsQUFDaEI7aUJBTEYsQUFNRTtjQU5GLEFBTU8sQUFDTDtnQkFQRixBQU9TLEFBQ1A7aUJBUkYsQUFRVzs7b0JBUlg7c0JBVkYsQUFVRSxBQVVBO0FBVkE7QUFDRTs7b0JBU0Y7c0JBcEJGLEFBb0JFLEFBQ0E7QUFEQTtBQUFBOztvQkFDQTtzQkFyQkYsQUFxQkUsQUFFQztBQUZEO0FBQUEsNENBRW9CLEtBQUEsQUFBSyxNQXhCN0IsQUFDRSxBQXVCRyxBQUE4QixBQUdwQzs7Ozs7Ozs7Ozs7Ozt1QkFqRHlCLG9CQUFBLEFBQVUsUUFBVixBQUFrQixvQkFBbEIsQUFBc0MsQTs7bUJBQXhEO0EscUNBQ0Y7QSxpQyxBQUFpQjs7Ozs7dURBRVAsQTs7Ozs7O0FBQUw7O0E7O3VCQUNhLHFCQUFBLEFBQU0sR0FBTixBQUNqQixRQURpQixBQUNULGEsQUFEUyxBQUVqQjs7bUJBRkM7QSxtQ0FHSjs7d0JBQUEsQUFBUSxVQUFSLEFBQWtCLEFBQ2xCOytCQUFBLEFBQWUsS0FBZixBQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBRWhCO0EsaURBQWtCLEFBQWUsT0FDckMsaUJBQUE7eUJBQVMsTUFBQSxBQUFNLGVBQWYsQUFBOEI7QUFEUixBLGlCQUFBO2lEQUlqQixFQUFFLFdBQUYsV0FBYSxnQkFBYixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdkJTLEFBNkRwQixBOztrQkFBQSxBQUFlOzs7QUFFZixJQUFNLGlCQUFOLEFBQ0UiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9