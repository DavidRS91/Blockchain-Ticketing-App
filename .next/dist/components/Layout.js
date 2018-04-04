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


var _require = require("../config"),
    GOOGLE_API_KEY = _require.GOOGLE_API_KEY;

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
  }), _react2.default.createElement("script", {
    async: true,
    defer: true,
    src: "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_API_KEY + "&callback=initMap",
    type: "text/javascript",
    className: "jsx-2218159790",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: "2218159790",
    css: "body{background-color:#ffffff;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%238fd5a6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23fff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0'/%3E%3C/svg%3E\");background-attachment:fixed;color:#0c8346;font-family:\"Arimo\",sans-serif;}body *{font-family:\"Arimo\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDMkIsQUFHc0MsQUFPTyx5QkFONmlCLE1BTy9rQix1a0JBTjhCLDRCQUNkLGNBQ2tCLCtCQUNsQyIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmF2YmFyMiBmcm9tIFwiLi9OYXZiYXIyXCI7XG5jb25zdCB7IEdPT0dMRV9BUElfS0VZIH0gPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8U3RyaXBlUHJvdmlkZXIgYXBpS2V5PVwicGtfdGVzdF8xMjM0NVwiPiAqL31cbiAgICAgIDxOYXZiYXIyIC8+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUxLCAyNTEsIDI1MSwgMC45OClcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjVweFwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyNXB4XCIsXG4gICAgICAgICAgcGFkZGluZzogXCIxMDBweCA0MHB4IDEwMHB4IDQwcHhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMTIvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Bcmltbzo0MDAsNDAwaSw3MDBcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vanMuc3RyaXBlLmNvbS92My9cIiAvPlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgICBkZWZlclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0ke0dPT0dMRV9BUElfS0VZfSZjYWxsYmFjaz1pbml0TWFwYH1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgey8qIExheW91dCBmcm9tIGh0dHBzOi8vd3d3LnN2Z2JhY2tncm91bmRzLmNvbS8jZGlhbW9uZC1zdW5zZXQgKi99XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyAlM0UlM0NkZWZzJTNFJTNDbGluZWFyR3JhZGllbnQgaWQ9J2EnIHgxPScwJyB4Mj0nMCcgeTE9JzAnIHkyPScxJyUzRSUzQ3N0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPSclMjNmZmZmZmYnLyUzRSUzQ3N0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPSclMjM4ZmQ1YTYnLyUzRSUzQy9saW5lYXJHcmFkaWVudCUzRSUzQy9kZWZzJTNFJTNDcGF0dGVybiBpZD0nYicgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyUzRSUzQ2NpcmNsZSBmaWxsPSclMjNmZmYnIGN4PScxMicgY3k9JzEyJyByPScxMicvJTNFJTNDL3BhdHRlcm4lM0UlM0NyZWN0IHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyBmaWxsPSd1cmwoJTIzYSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIGZpbGw9J3VybCglMjNiKScgZmlsbC1vcGFjaXR5PScwJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICAgIGNvbG9yOiAjMGM4MzQ2O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpbW9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSAqIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaW1vXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgey8qIDwvU3RyaXBlUHJvdmlkZXI+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gbGlnaHRncmV5OiAgZmJmYmZiXG4vLyBsaWdodCBncmVlbjogIDhmZDVhNlxuLy8gZ3JlZW46ICAzMjlmNWJcbi8vIGRhcmsgZ3JlZW46ICAwYzgzNDZcbi8vIGRhcms6IDFhMjgxZlxuIl19 */\n/*@ sourceURL=components/Layout.js */"
  }), props.children));
};

// lightgrey:  fbfbfb
// light green:  8fd5a6
// green:  329f5b
// dark green:  0c8346
// dark: 1a281f
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZCIsIk5hdmJhcjIiLCJyZXF1aXJlIiwiR09PR0xFX0FQSV9LRVkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7Ozs7OztlQUNPLFFBQUEsQUFBUSxBO0ksQUFBM0IsMEIsQUFBQSxBQUVSOztrQkFBZSxpQkFBUyxBQUN0Qjt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUVFO0FBRkY7QUFBQSxHQUFBLGtCQUVFLEFBQUM7O2dCQUFEO2tCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQzs7dUJBQ1EsQUFDWSxBQUNqQjtpQkFGSyxBQUVNLEFBQ1g7b0JBSEssQUFHUyxBQUNkO2VBSkssQUFJSSxBQUNUO29CQU5KLEFBQ1MsQUFLUztBQUxULEFBQ0w7O2dCQUZKO2tCQUFBLEFBU0U7QUFURjtBQUNFLHFCQVFBLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBO1NBQ0UsQUFDTSxBQUNKO1VBRkYsQUFFTztlQUZQOztnQkFBQTtrQkFERixBQUNFLEFBSUE7QUFKQTtBQUNFO1VBR0YsQUFDTyxBQUNMO1NBRkYsQUFFTTtlQUZOOztnQkFBQTtrQkFMRixBQUtFLEFBSUE7QUFKQTtBQUNFLGdEQUdNLEtBQVIsQUFBWSx3Q0FBWjs7Z0JBQUE7a0JBVEYsQUFTRSxBQUNBO0FBREE7O1dBQ0EsQUFFRTtXQUZGLEFBR0U7MERBQUEsQUFBb0QsaUJBSHRELEFBSUU7VUFKRixBQUlPO2VBSlA7O2dCQUFBO2tCQW5CSixBQVNFLEFBVUU7QUFBQTtBQUNFO2FBcEJOO1NBQUEsQUF1Q0c7QUF2Q0gsWUFKSixBQUNFLEFBR0UsQUF1Q1MsQUFLZDtBQWpERDs7QUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9