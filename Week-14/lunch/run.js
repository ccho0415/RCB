var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var port = 3000;
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
var lunches = [
{
	lunch: "Beet & Goat Cheese Salad with minestrone soup."
}, {
	lunch: "Pizza, two double veggie burgers, fries with a big gulp"
}
];
app.get("/weekday", function(req, res){
	res.render("index", lunches[0]);
});
app.get("/weekend", function(req, res){
	res.render("index", lunches[1]);
});
app.get("/lunches", function(req,res){
	res.render("all-lunches", {
			foods: lunches,
			eater: "david"
	});
});
app.listen(port);