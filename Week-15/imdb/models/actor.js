// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var actor = {
  allAndJoin: function(tableTwo, tableOneJoinId, tableTwoJoinId, cb){
    orm.allAndJoin("actors", tableTwo, tableOneJoinId, tableTwoJoinId, function(res){
      cb(res);
    });
  },
  all: function(cb) {
    orm.all("actors", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("actors", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("actors", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("actors", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = actor;