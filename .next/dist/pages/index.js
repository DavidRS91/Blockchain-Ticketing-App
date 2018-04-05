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

var _routes = require("../routes.js");

var _generator = require("../ethereum/generator");

var _generator2 = _interopRequireDefault(_generator);

var _web = require("../ethereum/web3");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/pages/index.js?entry";


var EventsIndex = function (_Component) {
  (0, _inherits3.default)(EventsIndex, _Component);

  function EventsIndex(props) {
    (0, _classCallCheck3.default)(this, EventsIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EventsIndex.__proto__ || (0, _getPrototypeOf2.default)(EventsIndex)).call(this, props));

    _this.state = {
      account: "",
      loaded: false
    };
    return _this;
  }

  (0, _createClass3.default)(EventsIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _web.web3Account.then(function (acct) {
        _this2.setState({
          account: acct,
          loaded: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var account = this.state.account;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement("img", {
        src: "/static/logo.png",
        alt: "my image",
        style: { alignSelf: "center" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), !_web.web3Found && this.state.loaded ? _react2.default.createElement("div", {
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
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, {
        name: "warning circle",
        style: { color: "#0c8346", fontSize: "40px" },
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement("p", { style: { fontSize: "17px", fontWeight: "700" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Uh oh! Looks like you don't have Metamask."), _react2.default.createElement("a", {
        href: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",
        target: "_blank",
        style: {
          fontWeight: "700",
          fontSize: "17px",
          color: "#0c8346",
          fontStyle: "italic"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Click here to install")) : "");
    }
  }]);

  return EventsIndex;
}(_react.Component);

exports.default = EventsIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkljb24iLCJMaW5rIiwiZ2VuZXJhdG9yIiwid2ViMyIsIndlYjNGb3VuZCIsIndlYjNBY2NvdW50IiwiTGF5b3V0IiwiRXZlbnRzSW5kZXgiLCJwcm9wcyIsInN0YXRlIiwiYWNjb3VudCIsImxvYWRlZCIsInRoZW4iLCJzZXRTdGF0ZSIsImFjY3QiLCJhbGlnblNlbGYiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250U3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFTLEFBQU0sQUFBVyxBQUFtQjs7QUFDN0MsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBO3VDQUNKOzt1QkFBQSxBQUFZLE9BQU87d0NBQUE7O2dKQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2VBQVEsQUFDRixBQUNUO2NBSmUsQUFFakIsQUFBYSxBQUVIO0FBRkcsQUFDWDtXQUdIOzs7Ozt3Q0FFbUI7bUJBQ2xCOzt1QkFBQSxBQUFZLEtBQUssZ0JBQVEsQUFDdkI7ZUFBQSxBQUFLO21CQUFTLEFBQ0gsQUFDVDtrQkFGRixBQUFjLEFBRUosQUFFWDtBQUplLEFBQ1o7QUFGSixBQU1EOzs7OzZCQUVRO1VBQUEsQUFDQyxVQUFZLEtBRGIsQUFDa0IsTUFEbEIsQUFDQyxBQUNSOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBO2FBQ0UsQUFDTSxBQUNKO2FBRkYsQUFFTSxBQUNKO2VBQU8sRUFBRSxXQUhYLEFBR1MsQUFBYTs7b0JBSHRCO3NCQURGLEFBQ0UsQUFTQTtBQVRBO0FBQ0U7O29CQVFGO3NCQVZGLEFBVUUsQUFDQztBQUREO0FBQUEsVUFDQyxBQUFDLG1CQUFhLEtBQUEsQUFBSyxNQUFuQixBQUF5Qix5QkFDeEIsY0FBQTs7cUJBQ1MsQUFDTSxBQUNYOzJCQUZLLEFBRVksQUFDakI7bUJBSEssQUFHSSxBQUNUO3NCQUpLLEFBSU8sQUFDWjt1QkFMSyxBQUtRLEFBQ2I7d0JBTkssQUFNUyxBQUNkO2lCQVJKLEFBQ1MsQUFPRTtBQVBGLEFBQ0w7O29CQUZKO3NCQUFBLEFBV0U7QUFYRjtBQUNFLE9BREYsa0JBV0UsQUFBQztjQUFELEFBQ08sQUFDTDtlQUFPLEVBQUUsT0FBRixBQUFTLFdBQVcsVUFGN0IsQUFFUyxBQUE4QixBQUNyQztjQUhGLEFBR087O29CQUhQO3NCQVhGLEFBV0UsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsY0FBQSxPQUFHLE9BQU8sRUFBRSxVQUFGLEFBQVksUUFBUSxZQUE5QixBQUFVLEFBQWdDO29CQUExQztzQkFBQTtBQUFBO1NBaEJGLEFBZ0JFLEFBR0EsK0RBQUEsY0FBQTtjQUFBLEFBQ08sQUFDTDtnQkFGRixBQUVTLEFBQ1A7O3NCQUFPLEFBQ08sQUFDWjtvQkFGSyxBQUVLLEFBQ1Y7aUJBSEssQUFHRSxBQUNQO3FCQVBKLEFBR1MsQUFJTTtBQUpOLEFBQ0w7O29CQUpKO3NCQUFBO0FBQUE7QUFDRSxTQXJCTCxBQUNDLEFBbUJFLDRCQWhDUixBQUNFLEFBNkNJLEFBdUJQOzs7OztBQXpGdUIsQSxBQTRGMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9