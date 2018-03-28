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

var _routes = require("../../routes.js");

var _generator = require("../../ethereum/generator");

var _generator2 = _interopRequireDefault(_generator);

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
    key: "renderEvents",
    value: function renderEvents() {
      var items = this.props.eventList.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: "/events/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }, _react2.default.createElement("a", { style: { color: "#329f5b" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }, " View Event")),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Open Events"), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, process.browser ? "true" : "false"), this.renderEvents());
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var eventList;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _generator2.default.methods.getDeployedEvents().call();

              case 2:
                eventList = _context.sent;
                return _context.abrupt("return", { eventList: eventList });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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

// class CampaignIndex extends Component {
//   static async getInitialProps() {
//     const campaigns = await factory.methods.getDeployedCampaigns().call();
//
//     return { campaigns }; // samse as{campaigns: campaigns}
//   }
//
//   renderCampaigns() {
//     const items = this.props.campaigns.map(address => {
//       return {
//         header: address,
//         description: (
//           <Link route={`/campaigns/${address}`}>
//             <a>View Campaign</a>
//           </Link>
//         ),
//         fluid: true
//       };
//     });
//
//     return <Card.Group items={items} />;
//   }
//
//   render() {
//     return (
//       <Layout>
//         <div>
//           <h3>Open Campaigns</h3>
//
//           <Link route="/campaigns/new">
//             <a>
//               <Button
//                 floated="right"
//                 content="Create Campaign"
//                 icon="add circle"
//                 primary //same as primary={true}
//               />
//             </a>
//           </Link>
//           {this.renderCampaigns()}
//         </div>
//       </Layout>
//     );
//   }
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJMaW5rIiwiZ2VuZXJhdG9yIiwiTGF5b3V0IiwiSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiZXZlbnRMaXN0IiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiY29sb3IiLCJmbHVpZCIsInByb2Nlc3MiLCJicm93c2VyIiwicmVuZGVyRXZlbnRzIiwibWV0aG9kcyIsImdldERlcGxveWVkRXZlbnRzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRWIsQTs7Ozs7Ozs7Ozs7bUNBTVcsQUFDYjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQ2hEOztrQkFBTyxBQUNHLEFBQ1I7dUNBQ0UsQUFBQyw4QkFBSyxvQkFBTixBQUF3Qjt3QkFBeEI7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQSxPQUFHLE9BQU8sRUFBRSxPQUFaLEFBQVUsQUFBUzt3QkFBbkI7MEJBQUE7QUFBQTthQUpDLEFBR0gsQUFDRSxBQUdKO2lCQVBGLEFBQU8sQUFPRSxBQUVWO0FBVFEsQUFDTDtBQUZKLEFBQWMsQUFXZCxPQVhjOzJDQVdQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxnQ0FBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxpQkFBSyxBQUFRLFVBQVIsQUFBa0IsU0FGekIsQUFFRSxBQUFnQyxBQUMvQixlQUpMLEFBQ0UsQUFHRyxBQUFLLEFBR1g7Ozs7Ozs7Ozs7Ozt1QkEzQnlCLG9CQUFBLEFBQVUsUUFBVixBQUFrQixvQkFBbEIsQSxBQUFzQzs7bUJBQXhEO0E7aURBQ0MsRUFBRSxXQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIUyxBQWdDcEIsQTs7a0JBQUEsQUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9