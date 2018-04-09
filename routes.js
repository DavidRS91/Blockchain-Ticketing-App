const routes = require("next-routes")();

routes
  .add("/", "/index")
  .add("/events", "/events/index")
  .add("/events/new", "/events/new")
  .add("/events/:address/purchase", "/events/purchase")
  .add("/events/:address", "/events/show")
  .add("/events/:address/user", "/events/userevents");

module.exports = routes;
