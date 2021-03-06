// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
 routeName: "yoda",
 name: "Yoda",
 role: "Jedi Master",
 age: 900,
 forcePoints: 2000
}, {
 routeName: "darthmaul",
 name: "Darth Maul",
 role: "Sith Lord",
 age: 200,
 forcePoints: 1200
}, {
 routeName: "obiwankenobi",
 name: "Obi Wan Kenobi",
 role: "Jedi Master",
 age: 55,
 forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
 res.send("Welcome to the Star Wars Page!");
});

// What does the question mark indicate?
app.get("/api/:characters?", function(req, res) {
 // It puts a variable to what is mapped on after the :/
 var chosen = req.params.characters;

 if (chosen) {
   console.log(chosen);

   // loop over characters if the value is equal to the route name. Then it will res.json that particular object character name
   for (var i = 0; i < characters.length; i++) {
     if (chosen === characters[i].routeName) {
       res.json(characters[i]);
       return;
     }
   }

   res.send("No character found");

 }

 // What does this code do?
 else {
   res.json(characters);
 }
});

// Listener
// ===========================================================
app.listen(PORT, function() {
 console.log("App listening on PORT " + PORT);
});