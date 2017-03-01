// * Create a command-line node application that takes in parameters like this:

//     - `node calculator.js add 1 2` ... and outputs 3
//     - `node calculator.js subtract 5 2` ... and outputs 3
//     - `node calculator.js multiply 3 2` ... and outputs 6
//     - `node calculator.js divide 8 2` ... and outputs 4
//     - `node calculator.js remainder 7 2`... and outputs 1

//     * Bonus: Enable your calculator application to also handle the below cases:
//     `node calculator.js exp 7 2` ... and output 49 (7 squared)
//     `node calculator.js algebra 4x+2=10`... and output 2. (Hint: Assume the algebra will always be in this exact form and will always be addition)
var calculation = process.argv[2];
var num1 = process.argv[3];
var num2 = process.argv[4];

if (calculation == "add"){
	result = parseInt(num1) + parseInt(num2);
	console.log(result);
}
else if (calculation == "subtract"){
	result = parseInt(num1) - parseInt(num2);
	console.log(result);
}

else if (calculation == "multiply"){
	result = parseInt(num1) * parseInt(num2);
	console.log(result);
}

else if (calculation == "divide"){
	result = parseInt(num1) / parseInt(num2);
	console.log(result);
}

else if (calculation == "remainder"){
	result = parseInt(num1) % parseInt(num2);
	console.log(result);
}
else if (calculation == "exponent"){
	result= Math.pow(parseInt(num1),parseInt(num2));
	console.log(result);
}else if (calculation == "algebra"){
	let equation = num1;
	let ix = equation.indexOf("x");
	let ioperator = ix+1;
	let equal = equation.indexOf("=");
	let firstNum = equation.substring(0, ix);
	let secondNum = equation.substring(operator+1, equal);
	let thirdNum = equation.substring(equal+1, equation.length);
	var operator= equation[ioperator]
    if (operator == '+'){
        console.log((thirdNum - secondNum) / firstNum);
    }
    if (operator == '-'){
        console.log((thirdNum + secondNum) / firstNum);
    }
    if (operator == '*'){
        console.log((thirdNum / secondNum) / firstNum);
    }
    if (operator == '/'){
        console.log((thirdNum * secondNum) / firstNum);
    }
}			

