// * **Instructions**

//     * In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.

//     * Your "Programmer" constructor should be able to take in the following information...

//         * The programmer's name
//         * Their position/job title
//         * How old they are
//         * Favorite programming language

//     * Now create a method for the constructor that would print all of the information contained within an object to the console.

//     * Finally, create a "Programmer" object and call the method to print its contents
function Programmer(name, position, age, language){
	this.name = name;
	this.position = position;
	this.age = age;
	this.language = language;
}
var Pavan = new Programmer("Pavan", "RCB Instructor", 25, "Ruby");
console.log(Pavan);
//Other solutions
function test(a,b,c){
	console.log(arguments);
	// or
	for (var keys in arguments){
		console.log(arguments[key]);
	}
	// or (the + infront of the = sign cocatinate to the string)
	var argValues = ""
	for (var keys in arguments){
		argValues += arguments[key]+ " ";
	}
	return argValues;
}
// This is a good way to update all objects with certain keys. These add these keys to the constructor. 
// So when the object is called and there is not already a declared key, it will go to these created keys in the constructor and assign the value to these keys;
Programmer.prototype.student ="Rutgers Coding Bootcamp";
Programmer.prototype.minor = false;
