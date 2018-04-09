"use strict";

var routes = require("next-routes")();

routes.add("/", "/index").add("/events", "/events/index").add("/events/new", "/events/new").add("/events/:address/purchase", "/events/purchase").add("/events/:address", "/events/show").add("/events/:address/user", "/events/userevents");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLEtBQ1ksQUFEWixVQUVHLEFBRkgsSUFFTyxBQUZQLFdBRWtCLEFBRmxCLGlCQUdHLEFBSEgsSUFHTyxBQUhQLGVBR3NCLEFBSHRCLGVBSUcsQUFKSCxJQUlPLEFBSlAsNkJBSW9DLEFBSnBDLG9CQUtHLEFBTEgsSUFLTyxBQUxQLG9CQUsyQixBQUwzQixnQkFNRyxBQU5ILElBTU8sQUFOUCx5QkFNZ0MsQUFOaEM7O0FBUUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHNjb3R0L3Byb2plY3RzL2JhbGR5In0=