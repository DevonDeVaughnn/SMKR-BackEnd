const userRoutes = require("./userRoutes");
module.exports = function (app, db) {
  userRoutes(app, db);
  strainRoutes(app, db);
};
