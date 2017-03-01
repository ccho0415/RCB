var joey = {
	favFood: "barbeque chicken",
	hobbies: ["coding", "playing soccer", "skiing"],
	from:"Elizabeth,NJ",
}
//how do I update Joey's favFood
joey.favFood="pizza";
console.log(joey);
//how do I print out all the keys in the Joey Object
console.log(Object.keys(joey));
// how do I print out all the values in the Joey Object
for(var key in joey){
	console.log(joey[key]);
}
var joeyRuns = function(){
	console.log("run joey");
}
//how do I add a key to the joey object
joey.guitar=0;
console.log(joey);
// This allows other files to export the object from this file
exports.joey=joey;
// This allows other files to export the function from this file
exports.jr = joeyRuns;