const routes = require("next-routes")();

routes
  .add("/", "/index")
  .add("/sign_in", "/sign_in")
  .add("/events", "/events/index")
  .add("/events/new", "/events/new")
  .add("/events/:address", "/events/show");

module.exports = routes;
