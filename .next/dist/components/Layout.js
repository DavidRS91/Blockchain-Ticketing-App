"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _Navbar = require("./Navbar");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Navbar3 = require("./Navbar2");

var _Navbar4 = _interopRequireDefault(_Navbar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/Layout.js";

// import { StripeProvider } from "react-stripe-elements";

exports.default = function (props) {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_Navbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_Navbar4.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    className: "jsx-3366547462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Arimo:400,400i,700",
    rel: "stylesheet",
    className: "jsx-3366547462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement("script", { src: "https://js.stripe.com/v3/", className: "jsx-3366547462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: "3366547462",
    css: "body{background:#fbfbfb;color:#0c8346;font-family:\"Arimo\",sans-serif;}body *{font-family:\"Arimo\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCMkIsQUFHZ0MsQUFLYSxtQkFKbEIsWUFLaEIsRUFKa0MsK0JBQ2xDIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgTmF2YmFyMiBmcm9tIFwiLi9OYXZiYXIyXCI7XG4vLyBpbXBvcnQgeyBTdHJpcGVQcm92aWRlciB9IGZyb20gXCJyZWFjdC1zdHJpcGUtZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LyogPFN0cmlwZVByb3ZpZGVyIGFwaUtleT1cInBrX3Rlc3RfMTIzNDVcIj4gKi99XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8TmF2YmFyMiAvPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4xMi9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFyaW1vOjQwMCw0MDBpLDcwMFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzL1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gICAgICAgICAgICBjb2xvcjogIzBjODM0NjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaW1vXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkgKiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmltb1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIHsvKiA8L1N0cmlwZVByb3ZpZGVyPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIGxpZ2h0Z3JleTogIGZiZmJmYlxuLy8gbGlnaHQgZ3JlZW46ICA4ZmQ1YTZcbi8vIGdyZWVuOiAgMzI5ZjViXG4vLyBkYXJrIGdyZWVuOiAgMGM4MzQ2XG4vLyBkYXJrOiAxYTI4MWZcbiJdfQ== */\n/*@ sourceURL=components/Layout.js */"
  }), props.children));
};

// lightgrey:  fbfbfb
// light green:  8fd5a6
// green:  329f5b
// dark green:  0c8346
// dark: 1a281f
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZCIsIk5hdmJhciIsIk5hdmJhcjIiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7Ozs7O0FBQ3BCLEFBRUE7O2tCQUFlLGlCQUFTLEFBQ3RCO3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBRUU7QUFGRjtBQUFBLEdBQUEsa0JBRUUsQUFBQzs7Z0JBQUQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDOztnQkFBRDtrQkFIRixBQUdFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBO1NBQ0UsQUFDTSxBQUNKO1VBRkYsQUFFTztlQUZQOztnQkFBQTtrQkFERixBQUNFLEFBSUE7QUFKQTtBQUNFO1VBR0YsQUFDTyxBQUNMO1NBRkYsQUFFTTtlQUZOOztnQkFBQTtrQkFMRixBQUtFLEFBSUE7QUFKQTtBQUNFLGdEQUdNLEtBQVIsQUFBWSx3Q0FBWjs7Z0JBQUE7a0JBVkosQUFDRSxBQVNFO0FBQUE7O2FBVko7U0FBQSxBQXNCRztBQXRCSCxZQUxKLEFBQ0UsQUFJRSxBQXNCUyxBQUtkO0FBakNEOztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=