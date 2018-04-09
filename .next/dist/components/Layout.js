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
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      padding: "40px",
      minHeight: "100vh",
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement("script", {
    defer: true,
    src: "https://use.fontawesome.com/releases/v5.0.9/js/all.js",
    integrity: "sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl",
    crossorigin: "anonymous",
    className: "jsx-4107381934",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    className: "jsx-4107381934",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Arimo:400,400i,700",
    rel: "stylesheet",
    className: "jsx-4107381934",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement("script", { src: "https://js.stripe.com/v3/", className: "jsx-4107381934",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: "4107381934",
    css: "body{background-color:rgb(255,255,255);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  width='90' height='90' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='1' fill='%230c8346'  cx='45' cy='45' r='10'/%3E%3Cg fill='%238fd5a6'  fill-opacity='1'%3E%3Ccircle  cx='0' cy='90' r='10'/%3E%3Ccircle  cx='90' cy='90' r='10'/%3E%3Ccircle  cx='90' cy='0' r='10'/%3E%3Ccircle  cx='0' cy='0' r='10'/%3E%3C/g%3E%3C/svg%3E\");background-attachment:scroll;background-size:auto;color:#329f5b;font-family:\"Arimo\",sans-serif;}body *{font-family:\"Arimo\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDMkIsQUFHaUQsQUFRSiwrQkFDbEMsR0FSeVosdVpBQzFYLDZCQUNSLHFCQUNQLGNBQ2tCLCtCQUNsQyIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmF2YmFyMiBmcm9tIFwiLi9OYXZiYXIyXCI7XG5jb25zdCB7IEdPT0dMRV9BUElfS0VZIH0gPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8U3RyaXBlUHJvdmlkZXIgYXBpS2V5PVwicGtfdGVzdF8xMjM0NVwiPiAqL31cbiAgICAgIDxOYXZiYXIyIC8+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSlcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRlZmVyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC45L2pzL2FsbC5qc1wiXG4gICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOGlQVGsycy9qTVZqODFkbnpiL2lGUjJzZEE3dTA2dkhKeXlMbEFkNHNuRnBDbC9TbnlValJyYmRKc3cxcEdJbFwiXG4gICAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXJpbW86NDAwLDQwMGksNzAwXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2pzLnN0cmlwZS5jb20vdjMvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7LyogTGF5b3V0IGZyb20gaHR0cHM6Ly93d3cuc3ZnYmFja2dyb3VuZHMuY29tLyNkaWFtb25kLXN1bnNldCAqL31cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyAgd2lkdGg9JzkwJyBoZWlnaHQ9JzkwJyB2aWV3Qm94PScwIDAgOTAgOTAnJTNFJTNDY2lyY2xlIGZpbGwtb3BhY2l0eT0nMScgZmlsbD0nJTIzMGM4MzQ2JyAgY3g9JzQ1JyBjeT0nNDUnIHI9JzEwJy8lM0UlM0NnIGZpbGw9JyUyMzhmZDVhNicgIGZpbGwtb3BhY2l0eT0nMSclM0UlM0NjaXJjbGUgIGN4PScwJyBjeT0nOTAnIHI9JzEwJy8lM0UlM0NjaXJjbGUgIGN4PSc5MCcgY3k9JzkwJyByPScxMCcvJTNFJTNDY2lyY2xlICBjeD0nOTAnIGN5PScwJyByPScxMCcvJTNFJTNDY2lyY2xlICBjeD0nMCcgY3k9JzAnIHI9JzEwJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAjMzI5ZjViO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpbW9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSAqIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaW1vXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgey8qIDwvU3RyaXBlUHJvdmlkZXI+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy9cbi8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4vLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnICUzRSUzQ2RlZnMlM0UlM0NsaW5lYXJHcmFkaWVudCBpZD0nYScgeDE9JzAnIHgyPScwJyB5MT0nMCcgeTI9JzEnJTNFJTNDc3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyUyM2ZmZmZmZicvJTNFJTNDc3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyUyMzhmZDVhNicvJTNFJTNDL2xpbmVhckdyYWRpZW50JTNFJTNDL2RlZnMlM0UlM0NwYXR0ZXJuIGlkPSdiJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnJTNFJTNDY2lyY2xlIGZpbGw9JyUyM2ZmZicgY3g9JzEyJyBjeT0nMTInIHI9JzEyJy8lM0UlM0MvcGF0dGVybiUzRSUzQ3JlY3Qgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIGZpbGw9J3VybCglMjNhKScvJTNFJTNDcmVjdCB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgZmlsbD0ndXJsKCUyM2IpJyBmaWxsLW9wYWNpdHk9JzAnLyUzRSUzQy9zdmclM0VcIik7XG4vLyBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuLy8gY29sb3I6ICMwYzgzNDY7XG4vLyBmb250LWZhbWlseTogXCJBcmltb1wiLCBzYW5zLXNlcmlmO1xuXG4vLyBsaWdodGdyZXk6ICBmYmZiZmJcbi8vIGxpZ2h0IGdyZWVuOiAgOGZkNWE2XG4vLyBncmVlbjogIDMyOWY1YlxuLy8gZGFyayBncmVlbjogIDBjODM0NlxuLy8gZGFyazogMWEyODFmXG4iXX0= */\n/*@ sourceURL=components/Layout.js */"
  }), props.children));
};

//
// background-color: #ffffff;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%238fd5a6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23fff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0'/%3E%3C/svg%3E");
// background-attachment: fixed;
// color: #0c8346;
// font-family: "Arimo", sans-serif;

// lightgrey:  fbfbfb
// light green:  8fd5a6
// green:  329f5b
// dark green:  0c8346
// dark: 1a281f
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZCIsIk5hdmJhcjIiLCJyZXF1aXJlIiwiR09PR0xFX0FQSV9LRVkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwiaGVpZ2h0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7Ozs7OztlQUNPLFFBQUEsQUFBUSxBO0ksQUFBM0IsMEIsQUFBQSxBQUVSOztrQkFBZSxpQkFBUyxBQUN0Qjt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUVFO0FBRkY7QUFBQSxHQUFBLGtCQUVFLEFBQUM7O2dCQUFEO2tCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQzs7dUJBQ1EsQUFDWSxBQUNqQjtlQUZLLEFBRUksQUFDVDtpQkFISyxBQUdNLEFBQ1g7Y0FMSixBQUNTLEFBSUc7QUFKSCxBQUNMOztnQkFGSjtrQkFBQSxBQVFFO0FBUkY7QUFDRSxxQkFPQSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQTtXQUNFLEFBRUU7U0FGRixBQUVNLEFBQ0o7ZUFIRixBQUdZLEFBQ1Y7aUJBSkYsQUFJYztlQUpkOztnQkFBQTtrQkFERixBQUNFLEFBTUE7QUFOQTtBQUNFO1NBS0YsQUFDTSxBQUNKO1VBRkYsQUFFTztlQUZQOztnQkFBQTtrQkFQRixBQU9FLEFBSUE7QUFKQTtBQUNFO1VBR0YsQUFDTyxBQUNMO1NBRkYsQUFFTTtlQUZOOztnQkFBQTtrQkFYRixBQVdFLEFBSUE7QUFKQTtBQUNFLGdEQUdNLEtBQVIsQUFBWSx3Q0FBWjs7Z0JBQUE7a0JBdkJKLEFBUUUsQUFlRTtBQUFBOzthQXZCSjtTQUFBLEFBdUNHO0FBdkNILFlBSkosQUFDRSxBQUdFLEFBdUNTLEFBS2Q7QUFqREQ7O0FBbURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=