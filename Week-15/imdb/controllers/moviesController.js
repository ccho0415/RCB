var express = require("express");

var router = express.Router();

// Import the model
var movie = require("../models/movie.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  movie.all(function(data) {
    var hbsObject = {
      movie: data
    };
    console.log(hbsObject);
    res.render("movies/index", hbsObject);
  });
});
router.get("/new", function(req,res){
	res.render("movies/new");
})
router.post("/create", function(req, res) {
	movie.create(['title','genre','rating'], [req.body.title, req.body.genre, req.body.rating], function(data){
	res.redirect('/movies');
	});
});

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   movie.update({
//     sleepy: req.body.sleepy
//   }, condition, function() {
//     res.redirect("/");
//   });
// });

// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   movie.delete(condition, function() {
//     res.redirect("/");
//   });
// });

// Export routes for server.js to use.
module.exports = router;