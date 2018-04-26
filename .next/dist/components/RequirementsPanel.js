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

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/RequirementsPanel.js";


var RequirementsPanel = function (_Component) {
  (0, _inherits3.default)(RequirementsPanel, _Component);

  function RequirementsPanel(props) {
    (0, _classCallCheck3.default)(this, RequirementsPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RequirementsPanel.__proto__ || (0, _getPrototypeOf2.default)(RequirementsPanel)).call(this, props));

    _this.handleClick = function (e, titleProps) {
      var index = titleProps.index;
      var activeIndex = _this.state.activeIndex;

      var newIndex = activeIndex === index ? -1 : index;

      _this.setState({ activeIndex: newIndex });
    };

    _this.state = {
      account: "",
      mestamask: "",
      activeIndex: -1
    };
    return _this;
  }

  (0, _createClass3.default)(RequirementsPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _web.web3Account.then(function (acct) {
        _this2.setState({
          account: acct,
          metamask: _web.web3Found
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          activeIndex = _state.activeIndex,
          account = _state.account,
          metamask = _state.metamask;

      return _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_semanticUiReact.Accordion, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Accordion.Title, {
        active: activeIndex === 0,
        index: 0,
        onClick: this.handleClick,
        style: { color: "#329f5b" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "dropdown", size: "large", __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement("h4", { style: { margin: "0px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, this.props.title))), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 0, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Below is a list of requirements to use Baldy. If you see an X next to a requirement, consult the panels below for instructions to meet the requirement."), _react2.default.createElement(_semanticUiReact.Grid, { celled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 14, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "1. Install Metamask"), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, metamask ? _react2.default.createElement(_semanticUiReact.Icon, { name: "checkmark", color: "green", size: "large", __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }) : _react2.default.createElement(_semanticUiReact.Icon, { name: "remove", color: "red", size: "large", __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 14, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "2. Login to Metamask"), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, account !== undefined ? _react2.default.createElement(_semanticUiReact.Icon, { name: "checkmark", color: "green", size: "large", __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }) : _react2.default.createElement(_semanticUiReact.Icon, { name: "remove", color: "red", size: "large", __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 14, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "3. Select Rinkeby Test Network"), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, this.props.network === 4 ? _react2.default.createElement(_semanticUiReact.Icon, { name: "checkmark", color: "green", size: "large", __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }) : _react2.default.createElement(_semanticUiReact.Icon, { name: "remove", color: "red", size: "large", __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 14, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "4. Acquire Ether (cryptocurrency)"), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _web2.default.utils.fromWei(this.props.balance.toString(), "ether") > 0.1 ? _react2.default.createElement(_semanticUiReact.Icon, { name: "checkmark", color: "green", size: "large", __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }) : _react2.default.createElement(_semanticUiReact.Icon, { name: "remove", color: "red", size: "large", __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })))), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "Note: "), "You need to refresh the page after signing into Metamask or changing networks."))));
    }
  }]);

  return RequirementsPanel;
}(_react.Component);

exports.default = RequirementsPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWlyZW1lbnRzUGFuZWwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTZWdtZW50IiwiQWNjb3JkaW9uIiwiSWNvbiIsIkdyaWQiLCJCdXR0b24iLCJ3ZWIzIiwid2ViM0ZvdW5kIiwid2ViM0FjY291bnQiLCJSZXF1aXJlbWVudHNQYW5lbCIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJlIiwidGl0bGVQcm9wcyIsImluZGV4IiwiYWN0aXZlSW5kZXgiLCJzdGF0ZSIsIm5ld0luZGV4Iiwic2V0U3RhdGUiLCJhY2NvdW50IiwibWVzdGFtYXNrIiwidGhlbiIsImFjY3QiLCJtZXRhbWFzayIsImNvbG9yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJ0aXRsZSIsInVuZGVmaW5lZCIsIm5ldHdvcmsiLCJ1dGlscyIsImZyb21XZWkiLCJiYWxhbmNlIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUyxBQUFXLEFBQU0sQUFBTTs7QUFDekMsQUFBTyxBQUFRLEFBQVcsQUFBbUI7Ozs7Ozs7OztJQUV2QyxBOzZDQUNKOzs2QkFBQSxBQUFZLE9BQU87d0NBQUE7OzRKQUFBLEFBQ1g7O1VBRFcsQUFrQm5CLGNBQWMsVUFBQSxBQUFDLEdBQUQsQUFBSSxZQUFlO1VBQUEsQUFDdkIsUUFEdUIsQUFDYixXQURhLEFBQ3ZCO1VBRHVCLEFBRXZCLGNBQWdCLE1BRk8sQUFFRixNQUZFLEFBRXZCLEFBQ1I7O1VBQU0sV0FBVyxnQkFBQSxBQUFnQixRQUFRLENBQXhCLEFBQXlCLElBQTFDLEFBQThDLEFBRTlDOztZQUFBLEFBQUssU0FBUyxFQUFFLGFBQWhCLEFBQWMsQUFBZSxBQUM5QjtBQXhCa0IsQUFFakI7O1VBQUEsQUFBSztlQUFRLEFBQ0YsQUFDVDtpQkFGVyxBQUVBLEFBQ1g7bUJBQWEsQ0FMRSxBQUVqQixB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