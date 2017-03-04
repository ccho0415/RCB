// * INSTRUCTIONS:

//   1) Open the folder and run `npm install`.

//   2) Update the `config.json` file's development object with your own local MYSQL database settings.

//   3) Navigate to the `api-routes.js` folder.

//   4) Add a Sequelize findAll method inside the GET route which finds all of the todos and returns them to the user as JSON.

//   5) Add a Sequelize create method to the POST route to save a new todo to the database using the data sent to the server in req.body.

//   6) To test if this worked, open your terminal and run `node server` and navigate to localhost:8080. If you are able to save new todos, you were successful.

//   7) Hint: We can access the Todo model here with "db.Todo"

//   If you get stuck or finish early, check out the Sequelize Star Wars solution from last class, or try and see if you and your partner can make sense of Sequelize's docs for the findAll and create methods

//   <http://docs.sequelizejs.com/en/latest/api/model/#findalloptions-promisearrayinstance>

//   <http://docs.sequelizejs.com/en/latest/api/model/#createvalues-options-promiseinstance>
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
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
