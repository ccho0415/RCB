var express = require("express");
var bodyParser = require("body-parser")
var app = express();
var mysql = require("mysql");
var port = 3000;

var connection =mysql.createConnection({
	host: "localhost",
	user: "nodeuser",
	password: "Tigger1031",
	database: "wishes_db"
});


var exphbs = require("express-handlebars");
app.use(express.static(__dirname +"/public"));
app.use(bodyParser.urlencoded({extended: false}));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.listen(port);

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

app.get("/", function(req,res) {
	connection.query("SELECT *FROM wishes;", function(err,data){
		if(err){
			throw err;
		}
		res.render("index", {wishes: data});
	});
});
app.post("/", function(req,res){
	connection.query("INSERT INTO wishes (wish) VALUES(?)",[req.body.wish], function(err,data){
		if(err){
			throw err;
		}
		res.redirect("/");
	});
});