"use strict";

var routes = require("next-routes")();

routes.add("/", "/index").add("/sign_in", "/sign_in").add("/events", "/events/index").add("/events/new", "/events/new").add("/events/:address", "/events/show");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLEtBQ1ksQUFEWixVQUVHLEFBRkgsSUFFTyxBQUZQLFlBRW1CLEFBRm5CLFlBR0csQUFISCxJQUdPLEFBSFAsV0FHa0IsQUFIbEIsaUJBSUcsQUFKSCxJQUlPLEFBSlAsZUFJc0IsQUFKdEIsZUFLRyxBQUxILElBS08sQUFMUCxvQkFLMkIsQUFMM0I7O0FBT0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=