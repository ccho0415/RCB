// Instructions

// Create a seinfeld_db database with an actors table.

// The actors table will have a column for id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), and attitude (varchar).
// Add in four actors with different names, coolness_points, and attitudes.

// Create a Node Application with Express, MySQL, and Body Parser with three Express routes.

// Create a /cast route that will display all the actors and their data ordered by their id's.

// Create a /coolness-chart route that will display all the actors and their data ordered by their coolness points.

// Create a /attitude-chart/:att route that will display all the actors for a specific type of attitude.

var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "",
  database: "seinfeld_db"
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Routes
app.get("/cast", function(req, res) {

  connection.query("SELECT * FROM actors order by id", function(err, result) {

    // We then begin building out HTML elements for the page.
    var html = "<h1> Actors Ordered by ID </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>School: " + result[i].name + " </p>";
      html += "<p> Coolness Points:" + results[i].coolness_points+"</p>";
      html += "<p> Attitude: " + results[i].attitude+ "</p></li>"
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});
app.get("/attitude-chart/:att", function(req, res) {

  connection.query("SELECT * FROM actors order where attitude =?",[req.params.att], function(err, result) {

    // We then begin building out HTML elements for the page.
    var html = "<h1> Actors With an Attitude of"+ req.params.att "</h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>School: " + result[i].name + " </p>";
      html += "<p> Coolness Points:" + results[i].coolness_points+"</p>";
      html += "<p> Attitude: " + results[i].attitude+ "</p></li>"
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});
app.get("/coolness-chart", function(req, res) {

  connection.query("SELECT * FROM actors order by coolness_points DESC", function(err, result) {

    // We then begin building out HTML elements for the page.
    var html = "<h1> Actors by Coolness </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>School: " + result[i].name + " </p>";
      html += "<p> Coolness Points:" + results[i].coolness_points+"</p>";
      html += "<p> Attitude: " + results[i].attitude+ "</p></li>"
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});

// Initiate the listener.
app.listen(port);
