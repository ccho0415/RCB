var models = require("../models");
var express = require("express");
var router = express.Router();
var path = require("path");
router.get("/", function(req,res){
	models.Chirp.findAll({

	}).then(function(chirps){
		    res.render('chirps/index', {chirps: chirps})
	});
});
router.post("/create", function(req, res){
	models.Chirp.create({
		name: req.body.name,
		chirp: req.body.chirp
	}).then(function(){
		res.redirect("/");
	});
});

module.exports = router;