var express = require("express");

var router = express.Router();

// Import the model
var actor = require("../models/actor.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  actor.allAndJoin("movies", "movie_id", "id", function(data) {
    var hbsObject = {
      actor: data
    };
    console.log(hbsObject);
    res.render("actors/index", hbsObject);
  });
});
router.get("/new", function(req,res){
	res.render("actors/new");
})
router.post("/create", function(req, res) {
	actor.create(['name','movie_id'], [req.body.name, req.body.movie_id], function(data){
	res.redirect('/actors');
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