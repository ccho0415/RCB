// * INSTRUCTIONS:

//   1) Open the folder slacked out to you.

//   2) Run `npm install`.

//   3) Update the `config.json` file's development object with your own local MYSQL database settings.

//   4) Modify the `todo.js` file so that the Todo model has a flag to prevent the text field from being null. Also add a validation to make sure the text field is at least one character, but no more than 140 characters.

//   5) Modify the complete field in our Todo model so that it supplies a default value of false if one is not supplied during Todo creation.

//   6) Once a Sequelize model has been created and sync'ed for the first time, any changes we make to our Todo model won't be picked up by our database. The easiest way to get around this during the development process is to pass "{ force: true }" as an argument into our sync method inside `server.js` file. This will make it so that every time we run our app, our Todos table will be dropped and recreated with the new configuration. More info here: <http://docs.sequelizejs.com/en/latest/api/sequelize/#syncoptions-promise>

//   7) Navigate to localhost:8080 to test that this worked. Try to save a Todo without any text in it, and then try and save a Todo with over 140 characters. If these didn't save and you see errors in your console that have to do with validation, you were successful.

//   8) **Big Hint**: Sequelize documentation on validations with examples can be found here: <http://docs.sequelizejs.com/en/latest/docs/models-definition/#validations>


// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Routes =============================================================

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
