// You will create an Express calculator application with one get route that is able to take in three parameters: an operation and two numbers.

//    * There are four operation values which a user may use: addition, subtraction, multiplication, and division.

//    * When the route is hit, your browser should display the result of the math operation and the two numbers on the screen.

//        * For example, when the user goes to the url http://localhost:3000/addition/10/1, the page should display 11.
var express= require("express");
var app = express();
var PORT = 3000;
app.get("/:operation/:firstNumb/:secondNum", function(req,res){
	var operation = req.params.operation;
	var firstNum = parseInt(req.params.firstNum);
	var secondNum = parseInt(req.params.secondNum);
	var result;

	switch(operation){
		case "add":
		result = firstNum + secondNum;
		break;
		case "subract":
		result = firstNum - secondNum;
		break;
		case "multiply":
		result = firstNum * secondNum;
		break;
		case "divide":
		result = firstNum / secondNum;
		break;
		default:
		result = "Sorry! The only valid operations are add, subract, multiply and divide.";
	}
	res.send(result.toString());

});
app.listen(3000);