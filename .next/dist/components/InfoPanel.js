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

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/InfoPanel.js";


var InfoPanel = function (_Component) {
  (0, _inherits3.default)(InfoPanel, _Component);

  function InfoPanel() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InfoPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InfoPanel.__proto__ || (0, _getPrototypeOf2.default)(InfoPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeIndex: -1 }, _this.handleClick = function (e, titleProps) {
      console.log(titleProps);
      var index = titleProps.index;
      var activeIndex = _this.state.activeIndex;

      var newIndex = activeIndex === index ? -1 : index;

      _this.setState({ activeIndex: newIndex });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(InfoPanel, [{
    key: "render",
    value: function render() {
      var activeIndex = this.state.activeIndex;

      return _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_semanticUiReact.Accordion, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_semanticUiReact.Accordion.Title, {
        active: activeIndex === 0,
        index: 0,
        onClick: this.handleClick,
        style: { color: "#329f5b" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "dropdown", size: "large", __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement("h4", { style: { margin: "0px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, this.props.title))), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 0, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, this.props.description))));
    }
  }]);

  return InfoPanel;
}(_react.Component);

exports.default = InfoPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5mb1BhbmVsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU2VnbWVudCIsIkFjY29yZGlvbiIsIkljb24iLCJJbmZvUGFuZWwiLCJzdGF0ZSIsImFjdGl2ZUluZGV4IiwiaGFuZGxlQ2xpY2siLCJlIiwidGl0bGVQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsIm5ld0luZGV4Iiwic2V0U3RhdGUiLCJjb2xvciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVMsQUFBVzs7Ozs7OztJLEFBRXZCOzs7Ozs7Ozs7Ozs7OztrTixBQUNKLFFBQVEsRUFBRSxhQUFhLENBQWYsQSxBQUFnQixXLEFBRXhCLGNBQWMsVUFBQSxBQUFDLEdBQUQsQUFBSSxZQUFlLEFBQy9CO2NBQUEsQUFBUSxJQUR1QixBQUMvQixBQUFZO1VBRG1CLEFBRXZCLFFBRnVCLEFBRWIsV0FGYSxBQUV2QjtVQUZ1QixBQUd2QixjQUFnQixNQUhPLEFBR0YsTUFIRSxBQUd2QixBQUNSOztVQUFNLFdBQVcsZ0JBQUEsQUFBZ0IsUUFBUSxDQUF4QixBQUF5QixJQUExQyxBQUE4QyxBQUU5Qzs7WUFBQSxBQUFLLFNBQVMsRUFBRSxhQUFoQixBQUFjLEFBQWUsQUFDOUI7QTs7Ozs7NkJBRVE7VUFBQSxBQUNDLGNBQWdCLEtBRGpCLEFBQ3NCLE1BRHRCLEFBQ0MsQUFDUjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELDJCQUFBLEFBQVc7Z0JBQ0QsZ0JBRFYsQUFDMEIsQUFDeEI7ZUFGRixBQUVTLEFBQ1A7aUJBQVMsS0FIWCxBQUdnQixBQUNkO2VBQU8sRUFBRSxPQUpYLEFBSVMsQUFBUzs7b0JBSmxCO3NCQUFBLEFBTUU7QUFORjtBQUNFLHlCQUtBLGNBQUE7O21CQUNTLEFBQ0ksQUFDVDtzQkFISixBQUNTLEFBRU87QUFGUCxBQUNMOztvQkFGSjtzQkFBQSxBQU1FO0FBTkY7QUFDRSx5QkFLQSxBQUFDLHVDQUFLLE1BQU4sQUFBVyxZQUFXLE1BQXRCLEFBQTJCO29CQUEzQjtzQkFORixBQU1FLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFFBQUksT0FBTyxFQUFFLFFBQWIsQUFBVyxBQUFVO29CQUFyQjtzQkFBQSxBQUErQjtBQUEvQjtjQUErQixBQUFLLE1BZDFDLEFBQ0UsQUFNRSxBQU9FLEFBQTBDLEFBRzlDLDBCQUFDLGNBQUQsMkJBQUEsQUFBVyxXQUFRLFFBQVEsZ0JBQTNCLEFBQTJDO29CQUEzQztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsY0FBTSxBQUFLLE1BcEJuQixBQUNFLEFBQ0UsQUFpQkUsQUFDRSxBQUFpQixBQUsxQjs7Ozs7QUF2Q3FCLEEsQUEwQ3hCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkluZm9QYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=