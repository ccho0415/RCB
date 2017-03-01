var fs = require("fs");
var textFile = process.argv[2];
var appendToFile = process.argv[3];
fs.appendFile(textFile, appendToFile, function(err){
	if (err){
		console.log(err);
	}else{
		console.log("content Added");
	}
});