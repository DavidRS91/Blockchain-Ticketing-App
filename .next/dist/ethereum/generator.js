"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _EventGenerator = require("./build/EventGenerator.json");

var _EventGenerator2 = _interopRequireDefault(_EventGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require("../config"),
    DEPLOYED_GENERATOR_ADDRESS = _require.DEPLOYED_GENERATOR_ADDRESS;

var instance = new _web2.default.eth.Contract(JSON.parse(_EventGenerator2.default.interface), //bytecode
DEPLOYED_GENERATOR_ADDRESS //contract address
);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2dlbmVyYXRvci5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiRXZlbnRHZW5lcmF0b3IiLCJyZXF1aXJlIiwiREVQTE9ZRURfR0VORVJBVE9SX0FERFJFU1MiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7Ozs7O2VBQ1ksUUFBQSxBQUFRLEE7SUFBdkMsQSxzQ0FBQSxBOztBQUVSLElBQU0sZUFBZSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQzVCLEtBQUEsQUFBSyxNQUFNLHlCQURJLEFBQ2YsQUFBMEIsWUFBWTtBQUR2QixBQUVmLDJCQUZGLEFBQWlCLEFBRVksQUFHN0I7QUFMaUI7O2tCQUtqQixBQUFlIiwiZmlsZSI6ImdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=