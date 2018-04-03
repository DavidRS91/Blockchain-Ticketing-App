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

var _Navbar = require("./Navbar2");

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dscott/projects/baldy/components/Layout.js";

// import { StripeProvider } from "react-stripe-elements";

exports.default = function (props) {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_Navbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_semanticUiReact.Container, {
    style: {
      backgroundColor: "rgba(251, 251, 251, 0.98)",
      marginTop: "25px",
      marginBottom: "25px",
      padding: "100px 40px 100px 40px",
      borderRadius: "15px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    className: "jsx-2218159790",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Arimo:400,400i,700",
    rel: "stylesheet",
    className: "jsx-2218159790",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement("script", { src: "https://js.stripe.com/v3/", className: "jsx-2218159790",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: "2218159790",
    css: "body{background-color:#ffffff;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%238fd5a6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23fff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0'/%3E%3C/svg%3E\");background-attachment:fixed;color:#0c8346;font-family:\"Arimo\",sans-serif;}body *{font-family:\"Arimo\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDMkIsQUFHc0MsQUFPTyx5QkFONmlCLE1BTy9rQix1a0JBTjhCLDRCQUNkLGNBQ2tCLCtCQUNsQyIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmF2YmFyMiBmcm9tIFwiLi9OYXZiYXIyXCI7XG4vLyBpbXBvcnQgeyBTdHJpcGVQcm92aWRlciB9IGZyb20gXCJyZWFjdC1zdHJpcGUtZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LyogPFN0cmlwZVByb3ZpZGVyIGFwaUtleT1cInBrX3Rlc3RfMTIzNDVcIj4gKi99XG4gICAgICA8TmF2YmFyMiAvPlxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MSwgMjUxLCAyNTEsIDAuOTgpXCIsXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjI1cHhcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjVweFwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMTAwcHggNDBweCAxMDBweCA0MHB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXJpbW86NDAwLDQwMGksNzAwXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2pzLnN0cmlwZS5jb20vdjMvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7LyogTGF5b3V0IGZyb20gaHR0cHM6Ly93d3cuc3ZnYmFja2dyb3VuZHMuY29tLyNkaWFtb25kLXN1bnNldCAqL31cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnICUzRSUzQ2RlZnMlM0UlM0NsaW5lYXJHcmFkaWVudCBpZD0nYScgeDE9JzAnIHgyPScwJyB5MT0nMCcgeTI9JzEnJTNFJTNDc3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyUyM2ZmZmZmZicvJTNFJTNDc3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyUyMzhmZDVhNicvJTNFJTNDL2xpbmVhckdyYWRpZW50JTNFJTNDL2RlZnMlM0UlM0NwYXR0ZXJuIGlkPSdiJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnJTNFJTNDY2lyY2xlIGZpbGw9JyUyM2ZmZicgY3g9JzEyJyBjeT0nMTInIHI9JzEyJy8lM0UlM0MvcGF0dGVybiUzRSUzQ3JlY3Qgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIGZpbGw9J3VybCglMjNhKScvJTNFJTNDcmVjdCB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgZmlsbD0ndXJsKCUyM2IpJyBmaWxsLW9wYWNpdHk9JzAnLyUzRSUzQy9zdmclM0VcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgY29sb3I6ICMwYzgzNDY7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmltb1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5ICoge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpbW9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9Db250YWluZXI+XG4gICAgICB7LyogPC9TdHJpcGVQcm92aWRlcj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBsaWdodGdyZXk6ICBmYmZiZmJcbi8vIGxpZ2h0IGdyZWVuOiAgOGZkNWE2XG4vLyBncmVlbjogIDMyOWY1YlxuLy8gZGFyayBncmVlbjogIDBjODM0NlxuLy8gZGFyazogMWEyODFmXG4iXX0= */\n/*@ sourceURL=components/Layout.js */"
  }), props.children));
};

// lightgrey:  fbfbfb
// light green:  8fd5a6
// green:  329f5b
// dark green:  0c8346
// dark: 1a281f
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZCIsIk5hdmJhcjIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7Ozs7O0FBQ3BCLEFBRUE7O2tCQUFlLGlCQUFTLEFBQ3RCO3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBRUU7QUFGRjtBQUFBLEdBQUEsa0JBRUUsQUFBQzs7Z0JBQUQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDOzt1QkFDUSxBQUNZLEFBQ2pCO2lCQUZLLEFBRU0sQUFDWDtvQkFISyxBQUdTLEFBQ2Q7ZUFKSyxBQUlJLEFBQ1Q7b0JBTkosQUFDUyxBQUtTO0FBTFQsQUFDTDs7Z0JBRko7a0JBQUEsQUFTRTtBQVRGO0FBQ0UscUJBUUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUE7U0FDRSxBQUNNLEFBQ0o7VUFGRixBQUVPO2VBRlA7O2dCQUFBO2tCQURGLEFBQ0UsQUFJQTtBQUpBO0FBQ0U7VUFHRixBQUNPLEFBQ0w7U0FGRixBQUVNO2VBRk47O2dCQUFBO2tCQUxGLEFBS0UsQUFJQTtBQUpBO0FBQ0UsZ0RBR00sS0FBUixBQUFZLHdDQUFaOztnQkFBQTtrQkFsQkosQUFTRSxBQVNFO0FBQUE7O2FBbEJKO1NBQUEsQUFpQ0c7QUFqQ0gsWUFKSixBQUNFLEFBR0UsQUFpQ1MsQUFLZDtBQTNDRDs7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9