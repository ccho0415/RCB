var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var reservations = [
{
	fullName: 'frank',
	phone: '123-2323-23',
	email: 'frank@frank.com',
	uniqueId: 2323,
},
{
	fullName: 'frank',
	phone: '123-2323-23',
	email: 'frank@frank.com',
	uniqueId: 323,
}
]

app.get("/", function(req, res) {
	console.log(__dirname);
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/all-reservations", function(req, res) {
	res.json(reservations);
});

app.get("/make-reservation", function(req, res) {
	res.sendFile(path.join(__dirname, "make-reservation.html"));
});


app.post("/add-reservation", function(req, res) {
	reservations.push(req.body)
	res.send(req.body);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});









