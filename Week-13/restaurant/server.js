// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// Sets up the Express App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Reservations
var reservations =[{

}];
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// Send index.html file
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
// Sends user to reserve page and send reserve.html
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.post("/new", function(req, res) {
  var newinfo = req.body;
  res.send(newinfo);
});