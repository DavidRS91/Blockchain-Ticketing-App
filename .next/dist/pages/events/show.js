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

var _googleMapsReact = require("google-maps-react");

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
    key: "initMap",
    value: function initMap() {
      var uluru = { lat: -25.363, lng: 131.044 };
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru
      });
      console.log("run");
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, process.browser ? _react2.default.createElement(_MapContainer2.default, { style: { padding: "15px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }) : _react2.default.createElement("div", { style: { width: "100%", height: "500px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Map Loading..."), _react2.default.createElement(_semanticUiReact.Segment.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("h2", { style: { alignSelf: "center", margin: 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Event Title"), _react2.default.createElement(_routes.Link, { route: "/events/" + props.address + "/purchase", __source: {
          fileName: _jsxFileName,
          lineNumber: 71
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
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "ticket", __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), "Purchase Tickets!"))), _react2.default.createElement(_semanticUiReact.Segment, {
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement("span", { style: { padding: "0px 30px 0px 0px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "user", __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), " CodeCore")), _react2.default.createElement("span", { style: { padding: "0px 30px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "calendar outline", __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), "April 6, 2018")), _react2.default.createElement("span", { style: { padding: "0px 30px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "marker", __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), "142 W Hastings")), _react2.default.createElement("span", { style: { padding: "0px 0px 0px 30px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "ticket", __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), props.capacity - props.ticketsSold))), _react2.default.createElement(_semanticUiReact.Segment, { padded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "This is a sample event description"), _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Manager: ", props.manager))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var event, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event = (0, _event2.default)(props.query.address);
                _context.next = 3;
                return event.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  address: event.options.address,
                  price: summary[0],
                  capacity: summary[1],
                  manager: summary[2],
                  isOpen: summary[3],
                  ticketsSold: summary[4]
                });

              case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU2VnbWVudCIsIkltYWdlIiwiQnV0dG9uIiwiSWNvbiIsIkNvbnRhaW5lciIsIkxpbmsiLCJMYXlvdXQiLCJFdmVudCIsIk1hcENvbnRhaW5lciIsInJlcXVpcmUiLCJHT09HTEVfQVBJX0tFWSIsIkdvb2dsZU1hcCIsIk1hcCIsIkluZm9XaW5kb3ciLCJNYXJrZXIiLCJHb29nbGVBcGlXcmFwcGVyIiwiRXZlbnRTaG93IiwidWx1cnUiLCJsYXQiLCJsbmciLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInpvb20iLCJjZW50ZXIiLCJjb25zb2xlIiwibG9nIiwibWFya2VyIiwicG9zaXRpb24iLCJwcm9wcyIsInByb2Nlc3MiLCJicm93c2VyIiwicGFkZGluZyIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25TZWxmIiwibWFyZ2luIiwiYWRkcmVzcyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiY2FwYWNpdHkiLCJ0aWNrZXRzU29sZCIsIm1hbmFnZXIiLCJldmVudCIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsIm9wdGlvbnMiLCJwcmljZSIsImlzT3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVMsQUFBTyxBQUFRLEFBQU07O0FBQ3ZDLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWtCOzs7O0FBR3pCLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7Ozs7OztlQVB5QixRQUFBLEFBQVEsQTtJQUEzQixBLDBCQUFBLEE7O0lBVUYsQTs7Ozs7Ozs7Ozs7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