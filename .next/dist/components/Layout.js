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
  }, process.browser ? window.chrome !== null && typeof window.chrome !== "undefined" && window.navigator.vendor === "Google Inc." && window.navigator.userAgent.indexOf("OPR") > -1 === false && window.navigator.userAgent.indexOf("Edge") > -1 === false ? "" : _react2.default.createElement("div", {
    style: {
      height: "30px",
      backgroundColor: "#f7d4d4",
      color: "firebrick",
      textAlign: "center",
      paddingTop: "5px",
      fontSize: "16px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "We're sorry, Baldy is only available for use on Chrome browsers at this time.") : "", _react2.default.createElement(_Navbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
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
      lineNumber: 36
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement("script", {
    defer: true,
    src: "https://use.fontawesome.com/releases/v5.0.9/js/all.js",
    integrity: "sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl",
    crossorigin: "anonymous",
    className: "jsx-4107381934",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    className: "jsx-4107381934",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), _react2.default.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Arimo:400,400i,700",
    rel: "stylesheet",
    className: "jsx-4107381934",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), _react2.default.createElement("script", { src: "https://js.stripe.com/v3/", className: "jsx-4107381934",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: "4107381934",
    css: "body{background-color:rgb(255,255,255);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  width='90' height='90' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='1' fill='%230c8346'  cx='45' cy='45' r='10'/%3E%3Cg fill='%238fd5a6'  fill-opacity='1'%3E%3Ccircle  cx='0' cy='90' r='10'/%3E%3Ccircle  cx='90' cy='90' r='10'/%3E%3Ccircle  cx='90' cy='0' r='10'/%3E%3Ccircle  cx='0' cy='0' r='10'/%3E%3C/g%3E%3C/svg%3E\");background-attachment:scroll;background-size:auto;color:#329f5b;font-family:\"Arimo\",sans-serif;}body *{font-family:\"Arimo\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEMkIsQUFHaUQsQUFRSiwrQkFDbEMsR0FSeVosdVpBQzFYLDZCQUNSLHFCQUNQLGNBQ2tCLCtCQUNsQyIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmF2YmFyMiBmcm9tIFwiLi9OYXZiYXIyXCI7XG5jb25zdCB7IEdPT0dMRV9BUElfS0VZIH0gPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtwcm9jZXNzLmJyb3dzZXIgPyAoXG4gICAgICAgIHdpbmRvdy5jaHJvbWUgIT09IG51bGwgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdy5jaHJvbWUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci52ZW5kb3IgPT09IFwiR29vZ2xlIEluYy5cIiAmJlxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiT1BSXCIpID4gLTEgPT09IGZhbHNlICYmXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJFZGdlXCIpID4gLTEgPT09IGZhbHNlID8gKFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZDRkNFwiLFxuICAgICAgICAgICAgICBjb2xvcjogXCJmaXJlYnJpY2tcIixcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjVweFwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCJcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgV2UncmUgc29ycnksIEJhbGR5IGlzIG9ubHkgYXZhaWxhYmxlIGZvciB1c2Ugb24gQ2hyb21lIGJyb3dzZXJzIGF0XG4gICAgICAgICAgICB0aGlzIHRpbWUuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICkgOiAoXG4gICAgICAgIFwiXCJcbiAgICAgICl9XG4gICAgICA8TmF2YmFyMiAvPlxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpXCIsXG4gICAgICAgICAgcGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBkZWZlclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjAuOS9qcy9hbGwuanNcIlxuICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LThpUFRrMnMvak1WajgxZG56Yi9pRlIyc2RBN3UwNnZISnl5TGxBZDRzbkZwQ2wvU255VWpScmJkSnN3MXBHSWxcIlxuICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4xMi9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFyaW1vOjQwMCw0MDBpLDcwMFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzL1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgey8qIEJhY2tncm91bmQgZ2VuZXJlYXRlZCBieSBodHRwczovL3d3dy5zdmdiYWNrZ3JvdW5kcy5jb20vICovfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnICB3aWR0aD0nOTAnIGhlaWdodD0nOTAnIHZpZXdCb3g9JzAgMCA5MCA5MCclM0UlM0NjaXJjbGUgZmlsbC1vcGFjaXR5PScxJyBmaWxsPSclMjMwYzgzNDYnICBjeD0nNDUnIGN5PSc0NScgcj0nMTAnLyUzRSUzQ2cgZmlsbD0nJTIzOGZkNWE2JyAgZmlsbC1vcGFjaXR5PScxJyUzRSUzQ2NpcmNsZSAgY3g9JzAnIGN5PSc5MCcgcj0nMTAnLyUzRSUzQ2NpcmNsZSAgY3g9JzkwJyBjeT0nOTAnIHI9JzEwJy8lM0UlM0NjaXJjbGUgIGN4PSc5MCcgY3k9JzAnIHI9JzEwJy8lM0UlM0NjaXJjbGUgIGN4PScwJyBjeT0nMCcgcj0nMTAnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICMzMjlmNWI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmltb1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5ICoge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpbW9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=components/Layout.js */"
  }), props.children));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZCIsIk5hdmJhcjIiLCJyZXF1aXJlIiwiR09PR0xFX0FQSV9LRVkiLCJwcm9jZXNzIiwiYnJvd3NlciIsIndpbmRvdyIsImNocm9tZSIsIm5hdmlnYXRvciIsInZlbmRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJmb250U2l6ZSIsInBhZGRpbmciLCJtaW5IZWlnaHQiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU8sQUFBYTs7Ozs7Ozs7O2VBQ08sUUFBUSxBLEFBQVI7SSxBQUFuQiwwQkFFUixBLEFBRlE7O2tCQUVPLGlCQUFTLEFBQ3RCO3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEdBQUEsVUFDRyxBQUFRLFVBQ1AsT0FBQSxBQUFPLFdBQVAsQUFBa0IsUUFDbEIsT0FBTyxPQUFQLEFBQWMsV0FEZCxBQUN5QixlQUN6QixPQUFBLEFBQU8sVUFBUCxBQUFpQixXQUZqQixBQUU0QixpQkFDNUIsT0FBQSxBQUFPLFVBQVAsQUFBaUIsVUFBakIsQUFBMkIsUUFBM0IsQUFBbUMsU0FBUyxDQUE1QyxBQUE2QyxNQUg3QyxBQUdtRCxTQUNuRCxPQUFBLEFBQU8sVUFBUCxBQUFpQixVQUFqQixBQUEyQixRQUEzQixBQUFtQyxVQUFVLENBQTdDLEFBQThDLE1BSjlDLEFBSW9ELFFBSnBELEFBS0UscUJBRUEsY0FBQTs7Y0FDUyxBQUNHLEFBQ1I7dUJBRkssQUFFWSxBQUNqQjthQUhLLEFBR0UsQUFDUDtpQkFKSyxBQUlNLEFBQ1g7a0JBTEssQUFLTyxBQUNaO2dCQVBKLEFBQ1MsQUFNSztBQU5MLEFBQ0w7O2dCQUZKO2tCQUFBO0FBQUE7QUFDRSxHQURGLEVBUkgsQUFRRyxtRkFUTixBQXdCSSxBQUVGLG9CQUFBLEFBQUM7O2dCQUFEO2tCQTFCRixBQTBCRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDOzt1QkFDUSxBQUNZLEFBQ2pCO2VBRkssQUFFSSxBQUNUO2lCQUhLLEFBR00sQUFDWDtjQUxKLEFBQ1MsQUFJRztBQUpILEFBQ0w7O2dCQUZKO2tCQUFBLEFBUUU7QUFSRjtBQUNFLHFCQU9BLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBO1dBQ0UsQUFFRTtTQUZGLEFBRU0sQUFDSjtlQUhGLEFBR1ksQUFDVjtpQkFKRixBQUljO2VBSmQ7O2dCQUFBO2tCQURGLEFBQ0UsQUFNQTtBQU5BO0FBQ0U7U0FLRixBQUNNLEFBQ0o7VUFGRixBQUVPO2VBRlA7O2dCQUFBO2tCQVBGLEFBT0UsQUFJQTtBQUpBO0FBQ0U7VUFHRixBQUNPLEFBQ0w7U0FGRixBQUVNO2VBRk47O2dCQUFBO2tCQVhGLEFBV0UsQUFJQTtBQUpBO0FBQ0UsZ0RBR00sS0FBUixBQUFZLHdDQUFaOztnQkFBQTtrQkF2QkosQUFRRSxBQWVFO0FBQUE7O2FBdkJKO1NBQUEsQUF1Q0c7QUF2Q0gsWUE1QkosQUFDRSxBQTJCRSxBQXVDUyxBQUlkO0FBeEVEIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=