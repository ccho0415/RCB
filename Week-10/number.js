
// * **Instructions:**

//     * Starting from a blank Javascript file, create a Node application that takes in two command line arguments and checks if they are equal. If the two numbers are equal then output: "true". Otherwise output: "false".

//     * Bonus: Check if the two numbers are both multiples of 7. Again output "true" if they are and output "false" if they are not.

//     * Hint: `console.log(process.argv)` as a starting point if you are completely lost. 

var num1 = process.argv[2];
var num2 = process.argv[3];

if (num1 == num2){
	console.log("true");
}else{
	console.log("false");
}
if (num1%7 === 0 && num2%7 === 0 ){
	console.log("divisible");
}else{
	console.log("not divisible");
}
// Another way
// var num1r = num1/7
// var num2r = num2/7
// console.log((num1r==parseInt(num1r))&& (num2r == parseInt(num2r)));