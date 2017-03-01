
// * **Instructions:**

//     * Starting from scratch, build a Node application called `bank.js` which allows takes in user inputs via the command line to register bank transactions.

//     * The transactions possible are:

//         * `total` - this should tally up all of the money in the bank balance and display it for the user.

//         * `deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)

//         * `withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)

//         * `lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.

//     * For all deposits, withdrawals, or lotto purchases the transaction should be registered in the `bank.txt` file.

//     * HINT: Consider making a series of if-then or switch-case statements to identify the "type" of transaction and the "amount" involved (if relevant).

//     * Bonus: If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.

var operator = process.argv[2];
var num = process.argv[3];
var bankArr = [];
var fs = require("fs");
var total = 0;
if (operator== "total"){
	fs.readFile("bank.txt", "utf8", function(error, data){
	bankArr= data.split(",");
		for(i=0; i<bankArr.length; i++){
			var newnum= parseFloat(bankArr[i]);
			total = total + newnum;
		
		}
	console.log(total.toFixed(2));
	});	
}else if(operator == "deposit"){
	fs.appendFile("bank.txt", ","+ num, function(err){
			if (err){
		console.log(err);
	}else{
		console.log("content Added");
	}
	});
}else if(operator == "withdraw"){
	fs.appendFile("bank.txt", ", -"+ num, function(err){
			if (err){
		console.log(err);
	}else{
		console.log("content Added");
	}
	});
}else if(operator =="lotto"){
	let randomnum = Math.floor( Math.random()*2)
	if (randomnum == 0){
		fs.appendFile("bank.txt", ","+ 5, function(err){
			if (err){
				console.log(err);
			}else{
				console.log("you won 5 dollars!");
			}
		});
	}else{
		fs.appendFile("bank.txt", ",-"+ 10, function(err){
			if (err){
				console.log(err);
			}else{
				console.log("you lost 10 dollars!");
	}
	});
	}
}
