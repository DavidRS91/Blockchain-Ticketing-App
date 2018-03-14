"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _event = require("../../ethereum/event");

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/pages/events/show.js?entry";


var EventShow = function (_Component) {
  (0, _inherits3.default)(EventShow, _Component);

  function EventShow() {
    (0, _classCallCheck3.default)(this, EventShow);

    return (0, _possibleConstructorReturn3.default)(this, (EventShow.__proto__ || (0, _getPrototypeOf2.default)(EventShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(EventShow, [{
    key: "render",

    // static async getInitialProps(props) {
    //   const event = Event(props.query.address);
    //   const summary = await campaign.methods.getSummary().call();
    // }

    value: function render() {
      console.log(this.props.url.query.address);
      return _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Event: ", this.props.url.query.address);
    }
  }]);

  return EventShow;
}(_react.Component);

exports.default = EventShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50cy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRXZlbnQiLCJFdmVudFNob3ciLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJ1cmwiLCJxdWVyeSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVzs7Ozs7Ozs7O0lBRVosQTs7Ozs7Ozs7OztTQUNKOztBQUNBO0FBQ0E7QUFDQTs7OzZCQUVTLEFBQ1A7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFBM0IsQUFBaUMsQUFDakM7NkJBQU8sY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLE9BQUEsRUFBWSxnQkFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFBbEMsQUFBTyxBQUFpQyxBQUN6Qzs7Ozs7QUFUcUIsQSxBQVl4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==