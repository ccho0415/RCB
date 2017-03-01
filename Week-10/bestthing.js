// * **Instructions:**

//     * Create a Node application that reads the `best_things_ever.txt` file, parses the comma separated elements, and ultimately console logs each element in the file on separate lines.

//         * HINT: If you are struggling to figure out how to loop your way through the text, look into the `.split()` method. This could make your life a whole lot easier.

//     * Your final output should look something like this:

var fs = require("fs");
var writethis = [];
fs.readFile("best_things_ever.txt", "utf8", function(error, data){
	console.log(data);
	var dataArr = data.split(",")
	// Another solution
	// var onDifLines = output.join("\n");
	// console.log(onDifLines);
	for(i=0; i <dataArr.length; i++){
		console.log(dataArr[i]);
		writethis.push(dataArr[i] + "\r\n");
		//
		// fs.appendFile("best_things_ever_2.txt", dataArr[i], function(err){
			// if (err){
			// console.log(err);
			// return; 
			// }else{
			// console.log("text was updated") 
			// }
		// });
		// 
	}
	console.log(writethis);
// .appendFile will add onto file
fs.writeFile("best_things_ever_2.txt", writethis, function(err){
		if (err){
			console.log(err);
			return;
		}else{
			console.log("best_things_ever_2.txt was updated")
		}

	});

});