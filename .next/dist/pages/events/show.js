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

var _routes = require("../../routes");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _event = require("../../ethereum/event");

var _event2 = _interopRequireDefault(_event);

var _MapContainer = require("../../components/MapContainer");

var _MapContainer2 = _interopRequireDefault(_MapContainer);

var _geocodingRequests = require("../../lib/geocodingRequests");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/pages/events/show.js?entry";


var _require = require("../../config"),
    GOOGLE_API_KEY = _require.GOOGLE_API_KEY;

var EventShow = function (_Component) {
  (0, _inherits3.default)(EventShow, _Component);

  function EventShow() {
    (0, _classCallCheck3.default)(this, EventShow);

    return (0, _possibleConstructorReturn3.default)(this, (EventShow.__proto__ || (0, _getPrototypeOf2.default)(EventShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(EventShow, [{
    key: "render",
    value: function render() {
      var props = this.props;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_semanticUiReact.Segment.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { style: { height: "500px", padding: "0px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, " ", process.browser ? _react2.default.createElement(_MapContainer2.default, {
        lat: props.coordinates.lat,
        lng: props.coordinates.lng,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }) : _react2.default.createElement("div", {
        style: { width: "100%", height: "500px", textAlign: "center" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Map Loading...")), _react2.default.createElement(_semanticUiReact.Segment, {
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("h2", { style: { alignSelf: "center", margin: 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, props.title), _react2.default.createElement(_routes.Link, { route: "/events/" + props.address + "/purchase", __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        icon: true,
        labelPosition: "left",
        style: {
          alignSelf: "center",
          backgroundColor: "#329f5b",
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "ticket", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), "Purchase Tickets!"))), _react2.default.createElement(_semanticUiReact.Segment, {
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement("span", { style: { padding: "0px 30px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "calendar outline", __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), props.date)), _react2.default.createElement("span", { style: { padding: "0px 30px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "marker", __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), props.location + ", " + props.city)), _react2.default.createElement("span", { style: { padding: "0px 30px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "users", __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), props.ticketsSold, " Attendees"))), _react2.default.createElement(_semanticUiReact.Segment, { padded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, props.desc.split("\n").map(function (item) {
        return _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, item, _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }));
      })), _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "Manager: ", props.manager))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var event, summary, coordinates;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event = (0, _event2.default)(props.query.address);
                _context.next = 3;
                return event.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                _context.next = 6;
                return _geocodingRequests.Geocoder.toLatLong(summary[4], summary[5].split(", ").length > 1 ? summary[5].split(", ")[0] : summary[5], summary[5].split(", ").length > 1 ? summary[5].split(", ")[1] : "");

              case 6:
                coordinates = _context.sent;
                return _context.abrupt("return", {
                  address: event.options.address,
                  price: summary[0],
                  capacity: summary[1],
                  desc: summary[2],
                  date: summary[3],
                  location: summary[4],
                  city: summary[5],
                  title: summary[6],
                  manager: summary[7],
                  ticketsSold: summary[8],
                  coordinates: coordinates.results[0].geometry.location
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return EventShow;
}(_react.Component);

exports.default = EventShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU2VnbWVudCIsIkltYWdlIiwiQnV0dG9uIiwiSWNvbiIsIkNvbnRhaW5lciIsIkxpbmsiLCJMYXlvdXQiLCJFdmVudCIsIk1hcENvbnRhaW5lciIsInJlcXVpcmUiLCJHT09HTEVfQVBJX0tFWSIsIkdlb2NvZGVyIiwiRXZlbnRTaG93IiwicHJvcHMiLCJoZWlnaHQiLCJwYWRkaW5nIiwicHJvY2VzcyIsImJyb3dzZXIiLCJjb29yZGluYXRlcyIsImxhdCIsImxuZyIsIndpZHRoIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25TZWxmIiwibWFyZ2luIiwidGl0bGUiLCJhZGRyZXNzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJkYXRlIiwibG9jYXRpb24iLCJjaXR5IiwidGlja2V0c1NvbGQiLCJkZXNjIiwic3BsaXQiLCJtYXAiLCJpdGVtIiwibWFuYWdlciIsImV2ZW50IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwidG9MYXRMb25nIiwibGVuZ3RoIiwib3B0aW9ucyIsInByaWNlIiwiY2FwYWNpdHkiLCJyZXN1bHRzIiwiZ2VvbWV0cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFTLEFBQU8sQUFBUSxBQUFNOztBQUN2QyxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFrQjs7OztBQUV6QixBQUFTLEFBQWdCOzs7Ozs7O2VBREUsUSxBQUFBLEFBQVE7SUFBM0IsQSwwQixBQUFBOztJLEFBR0Y7Ozs7Ozs7Ozs7OzZCQTBCSztVQUFBLEFBQ0MsUUFERCxBQUNXLEtBRFgsQUFDQyxBQUNSOzs2QkFDRSxBQUFD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