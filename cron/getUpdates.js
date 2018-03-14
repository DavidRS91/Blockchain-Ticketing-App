const mongo = require("mongo");
const ethApi = require("foo");

mongo.client("somedatabase", (err, db) => {
  db
    .collections("events")
    .findOne({ status: "pending" })
    .then(() => {
      //do stuff
      events.forEach(event => {
        ethApi(event.id).doUpdate();
      });
    });
  db.end();
});
