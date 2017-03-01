"use strict";
// it tightens up the language syntax
var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
// process.env.NODE is an environment variable. it will use what environment variable is passed in. (through the hosting platform) otherwise it'll default to development.
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};

fs
// Read current directory
  .readdirSync(__dirname)
// Get files that are not index.js and read the files
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });
// After reading all the files in there should be tables (persons, users and task)

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
