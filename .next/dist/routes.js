"use strict";

var routes = require("next-routes")();

routes.add("/", "/index").add("/events", "/events/index").add("/events/new", "/events/new").add("/events/:address", "/events/show");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLEtBQ1ksQUFEWixVQUVHLEFBRkgsSUFFTyxBQUZQLFdBRWtCLEFBRmxCLGlCQUdHLEFBSEgsSUFHTyxBQUhQLGVBR3NCLEFBSHRCLGVBSUcsQUFKSCxJQUlPLEFBSlAsb0JBSTJCLEFBSjNCOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RzY290dC9wcm9qZWN0cy9iYWxkeSJ9