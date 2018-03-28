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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    className: "jsx-3366547462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Arimo:400,400i,700",
    rel: "stylesheet",
    className: "jsx-3366547462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement("script", { src: "https://js.stripe.com/v3/", className: "jsx-3366547462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: "3366547462",
    css: "body{background:#fbfbfb;color:#0c8346;font-family:\"Arimo\",sans-serif;}body *{font-family:\"Arimo\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCMkIsQUFHZ0MsQUFLYSxtQkFKbEIsWUFLaEIsRUFKa0MsK0JBQ2xDIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG4vLyBpbXBvcnQgeyBTdHJpcGVQcm92aWRlciB9IGZyb20gXCJyZWFjdC1zdHJpcGUtZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LyogPFN0cmlwZVByb3ZpZGVyIGFwaUtleT1cInBrX3Rlc3RfMTIzNDVcIj4gKi99XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXJpbW86NDAwLDQwMGksNzAwXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2pzLnN0cmlwZS5jb20vdjMvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgICAgICAgICAgIGNvbG9yOiAjMGM4MzQ2O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpbW9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSAqIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaW1vXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgey8qIDwvU3RyaXBlUHJvdmlkZXI+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gbGlnaHRncmV5OiAgZmJmYmZiXG4vLyBsaWdodCBncmVlbjogIDhmZDVhNlxuLy8gZ3JlZW46ICAzMjlmNWJcbi8vIGRhcmsgZ3JlZW46ICAwYzgzNDZcbi8vIGRhcms6IDFhMjgxZlxuIl19 */\n/*@ sourceURL=components/Layout.js */"
  }), props.children));
};

// lightgrey:  fbfbfb
// light green:  8fd5a6
// green:  329f5b
// dark green:  0c8346
// dark: 1a281f
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZCIsIk5hdmJhciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7OztBQUNuQixBQUVBOztrQkFBZSxpQkFBUyxBQUN0Qjt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUVFO0FBRkY7QUFBQSxHQUFBLGtCQUVFLEFBQUM7O2dCQUFEO2tCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUE7U0FDRSxBQUNNLEFBQ0o7VUFGRixBQUVPO2VBRlA7O2dCQUFBO2tCQURGLEFBQ0UsQUFJQTtBQUpBO0FBQ0U7VUFHRixBQUNPLEFBQ0w7U0FGRixBQUVNO2VBRk47O2dCQUFBO2tCQUxGLEFBS0UsQUFJQTtBQUpBO0FBQ0UsZ0RBR00sS0FBUixBQUFZLHdDQUFaOztnQkFBQTtrQkFWSixBQUNFLEFBU0U7QUFBQTs7YUFWSjtTQUFBLEFBc0JHO0FBdEJILFlBSkosQUFDRSxBQUdFLEFBc0JTLEFBS2Q7QUFoQ0Q7O0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==