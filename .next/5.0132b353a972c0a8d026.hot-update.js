webpackHotUpdate(5,{

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = __webpack_require__(494);

var _web2 = _interopRequireDefault(_web);

var _EventGenerator = __webpack_require__(661);

var _EventGenerator2 = _interopRequireDefault(_EventGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(660),
    DEPLOYED_GENERATOR_ADDRESS = _require.DEPLOYED_GENERATOR_ADDRESS;

var instance = new _web2.default.eth.Contract(JSON.parse(_EventGenerator2.default.interface), //bytecode
DEPLOYED_GENERATOR_ADDRESS //contract address
);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2dlbmVyYXRvci5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiRXZlbnRHZW5lcmF0b3IiLCJyZXF1aXJlIiwiREVQTE9ZRURfR0VORVJBVE9SX0FERFJFU1MiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7Ozs7O2VBQ1ksUUFBQSxBQUFRLEE7SUFBdkMsQSxzQ0FBQSxBOztBQUVSLElBQU0sZUFBZSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQzVCLEtBQUEsQUFBSyxNQUFNLHlCQURJLEFBQ2YsQUFBMEIsWUFBWTtBQUR2QixBQUVmLDJCQUZGLEFBQWlCLEFBRVksQUFHN0I7QUFMaUI7O2tCQUtqQixBQUFlIiwiZmlsZSI6ImdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/dscott/projects/baldy/ethereum/generator.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dscott/projects/baldy/ethereum/generator.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wMTMyYjM1M2E5NzJjMGE4ZDAyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vZ2VuZXJhdG9yLmpzPzY0ODExMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYjMgZnJvbSBcIi4vd2ViM1wiO1xuaW1wb3J0IEV2ZW50R2VuZXJhdG9yIGZyb20gXCIuL2J1aWxkL0V2ZW50R2VuZXJhdG9yLmpzb25cIjtcbmNvbnN0IHsgREVQTE9ZRURfR0VORVJBVE9SX0FERFJFU1MgfSA9IHJlcXVpcmUoXCIuLi9jb25maWdcIik7XG5cbmNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICBKU09OLnBhcnNlKEV2ZW50R2VuZXJhdG9yLmludGVyZmFjZSksIC8vYnl0ZWNvZGVcbiAgREVQTE9ZRURfR0VORVJBVE9SX0FERFJFU1MgLy9jb250cmFjdCBhZGRyZXNzXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V0aGVyZXVtL2dlbmVyYXRvci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFBQTs7O0FBRUE7QUFFQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9