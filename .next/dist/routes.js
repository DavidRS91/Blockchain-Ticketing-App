"use strict";

var routes = require("next-routes")();

routes.add("/", "/index").add("/sign_in", "/sign_in").add("/sign_up", "/sign_up").add("/events", "/events/index").add("/events/new", "/events/new").add("/events/:address", "/events/show");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLEtBQ1ksQUFEWixVQUVHLEFBRkgsSUFFTyxBQUZQLFlBRW1CLEFBRm5CLFlBR0csQUFISCxJQUdPLEFBSFAsWUFHbUIsQUFIbkIsWUFJRyxBQUpILElBSU8sQUFKUCxXQUlrQixBQUpsQixpQkFLRyxBQUxILElBS08sQUFMUCxlQUtzQixBQUx0QixlQU1HLEFBTkgsSUFNTyxBQU5QLG9CQU0yQixBQU4zQjs7QUFRQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kc2NvdHQvcHJvamVjdHMvYmFsZHkifQ==