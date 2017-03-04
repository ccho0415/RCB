// * INSTRUCTIONS:

//   1) Create a new local MYSQL database called 'todolist', but don't create any tables.

//   2) Delete any references to the orm.js file inside the `api-routes.js` file.

//   3) Delete the config folder.

//   4) While inside the activity folder, run npm install in terminal.

//   5) In terminal, type in the following command: "sequelize init:models init:config". If this produces an error, then you may not have the sequelize-cli installed globally. If this is the case, for now you can run ./node_modules/.bin/sequelize init:config init:models

//   6) Step 5 should have created a config and a models folder for us. Navigate to the config folder, open `config.json`, and modify the development object's "database","username" and "password" values to match your MYSQL database on your machine.

//   7) Navigate to the models folder and create a new file called `todo.js`. Create a Todo model with columns for "text" (DataTypes.STRING), and "complete" (DataTypes.BOOLEAN).

//   8) Navigate to the server.js file and require all of our models by requiring the models folder. Save this to a variable and name it "db".

//   9) Sync the models by running db.sequelize.sync() before we start the express server.

//   10) In your terminal, run "node server". Check MYSQL Workbench to see if a Todos table was created. If so, you were successful. If not, check your terminal for any errors.
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// Requiring Model
var db = require("./models");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

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
// syncing the models
db.sequelize.sync().then(function(){
// Starting our express app
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
});

