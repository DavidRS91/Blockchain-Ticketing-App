"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortAndStyleEvents;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/lib/sortAndStyleEvents.js";


var divContentStyle = { color: "#0c8346" };
var cardIconStyle = { marginLeft: "15px", color: "#0c8346" };

function sortAndStyleEvents(arr) {
  var rightNow = new Date();
  return arr.filter(function (e) {
    return Date.parse(e[3]) >= rightNow;
  }).sort(function (a, b) {
    return Date.parse(a[3]) > Date.parse(b[3]) ? 1 : Date.parse(b[3]) > Date.parse(a[3]) ? -1 : 0;
  }).map(function (event, i) {
    return _react2.default.createElement(_routes.Link, { route: "/events/" + event.address, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, _react2.default.createElement(_semanticUiReact.Card, { key: i, fluid: true, style: { marginBottom: "50px" }, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, _react2.default.createElement(_semanticUiReact.Card.Content, {
      header: event[6] + " " + (event[1] === event[8] ? "• SOLD OUT" : ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, style: { display: "flex" }, __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement("div", { style: divContentStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "calendar", __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }), event[3]), _react2.default.createElement("div", { style: divContentStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "map pin", __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }), event[5]), _react2.default.createElement("div", { style: divContentStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "users", __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }), event[8] + " people are attending"), _react2.default.createElement("div", { style: divContentStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, _react2.default.createElement(_semanticUiReact.Icon, { style: cardIconStyle, name: "ticket", __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }), event[1] - event[8] + " remaining tickets"))));
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zb3J0QW5kU3R5bGVFdmVudHMuanMiXSwibmFtZXMiOlsiQ2FyZCIsIkljb24iLCJMaW5rIiwiZGl2Q29udGVudFN0eWxlIiwiY29sb3IiLCJjYXJkSWNvblN0eWxlIiwibWFyZ2luTGVmdCIsInNvcnRBbmRTdHlsZUV2ZW50cyIsImFyciIsInJpZ2h0Tm93IiwiRGF0ZSIsImZpbHRlciIsInBhcnNlIiwiZSIsInNvcnQiLCJhIiwiYiIsIm1hcCIsImV2ZW50IiwiaSIsImFkZHJlc3MiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBTTs7QUFDZixBQUFTLEFBQVk7Ozs7Ozs7QUFFckIsSUFBTSxrQkFBa0IsRUFBRSxPQUExQixBQUF3QixBQUFTO0FBQ2pDLElBQU0sZ0JBQWdCLEVBQUUsWUFBRixBQUFjLFFBQVEsT0FBNUMsQUFBc0IsQUFBNkIsQUFFbkQ7O0FBQWUsU0FBQSxBQUFTLG1CQUFULEFBQTRCLEtBQUssQUFDOUM7TUFBTSxXQUFXLElBQWpCLEFBQWlCLEFBQUksQUFDckI7YUFBTyxBQUNKLE9BQU8sYUFBQTtXQUFLLEtBQUEsQUFBSyxNQUFNLEVBQVgsQUFBVyxBQUFFLE9BQWxCLEFBQXlCO0FBRDVCLEdBQUEsRUFBQSxBQUVKLEtBQUssVUFBQSxBQUFTLEdBQVQsQUFBWSxHQUFHLEFBQ25CO1dBQU8sS0FBQSxBQUFLLE1BQU0sRUFBWCxBQUFXLEFBQUUsTUFBTSxLQUFBLEFBQUssTUFBTSxFQUE5QixBQUFtQixBQUFXLEFBQUUsTUFBaEMsQUFDSCxJQUNBLEtBQUEsQUFBSyxNQUFNLEVBQVgsQUFBVyxBQUFFLE1BQU0sS0FBQSxBQUFLLE1BQU0sRUFBOUIsQUFBbUIsQUFBVyxBQUFFLE1BQU0sQ0FBdEMsQUFBdUMsSUFGM0MsQUFFK0MsQUFDaEQ7QUFOSSxLQUFBLEFBT0osSUFBSSxVQUFBLEFBQUMsT0FBRCxBQUFRLEdBQVI7MkJBQ0gsQUFBQyw4QkFBSyxvQkFBa0IsTUFBeEIsQUFBOEI7a0JBQTlCO29CQUFBLEFBQ0U7QUFERjtLQUFBLGtCQUNFLEFBQUMsdUNBQUssS0FBTixBQUFXLEdBQUcsT0FBZCxNQUFvQixPQUFPLEVBQUUsY0FBN0IsQUFBMkIsQUFBZ0I7a0JBQTNDO29CQUFBLEFBQ0U7QUFERjtxQ0FDRSxBQUFDLHNCQUFELEFBQU07Y0FDTyxNQUFYLEFBQVcsQUFBTSxZQUFNLE1BQUEsQUFBTSxPQUFPLE1BQWIsQUFBYSxBQUFNLEtBQW5CLEFBQXdCLGVBRGpELEFBQ0UsQUFBOEQ7O2tCQURoRTtvQkFERixBQUNFLEFBR0E7QUFIQTtBQUNFLHdCQUVELGNBQUQsc0JBQUEsQUFBTSxXQUFRLE9BQWQsTUFBb0IsT0FBTyxFQUFFLFNBQTdCLEFBQTJCLEFBQVc7a0JBQXRDO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZO2tCQUFaO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxBQUFDLHVDQUFLLE9BQU4sQUFBYSxlQUFlLE1BQTVCLEFBQWlDO2tCQUFqQztvQkFERixBQUNFLEFBQ0M7QUFERDtjQUZKLEFBQ0UsQUFFRyxBQUFNLEFBRVQscUJBQUEsY0FBQSxTQUFLLE9BQUwsQUFBWTtrQkFBWjtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsQUFBQyx1Q0FBSyxPQUFOLEFBQWEsZUFBZSxNQUE1QixBQUFpQztrQkFBakM7b0JBREYsQUFDRSxBQUNDO0FBREQ7Y0FOSixBQUtFLEFBRUcsQUFBTSxBQUVULHFCQUFBLGNBQUEsU0FBSyxPQUFMLEFBQVk7a0JBQVo7b0JBQUEsQUFDRTtBQURGO3VCQUNFLEFBQUMsdUNBQUssT0FBTixBQUFhLGVBQWUsTUFBNUIsQUFBaUM7a0JBQWpDO29CQURGLEFBQ0UsQUFDSTtBQURKO2NBREYsQUFFTSxBQUFNLEtBWGQsQUFTRSxBQUlBLDBDQUFBLGNBQUEsU0FBSyxPQUFMLEFBQVk7a0JBQVo7b0JBQUEsQUFDRTtBQURGO3VCQUNFLEFBQUMsdUNBQUssT0FBTixBQUFhLGVBQWUsTUFBNUIsQUFBaUM7a0JBQWpDO29CQURGLEFBQ0UsQUFDSTtBQURKO2NBQ0ksQUFBTSxLQUFLLE1BRmpCLEFBRWlCLEFBQU0sS0FyQjFCLEFBQ0gsQUFDRSxBQUlFLEFBYUU7QUExQlYsQUFBTyxBQWtDUiIsImZpbGUiOiJzb3J0QW5kU3R5bGVFdmVudHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9