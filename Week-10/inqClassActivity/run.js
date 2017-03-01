// * **Instructions:**

//     * Create a basic command line Node application using the inquirer package.

//     * Your application should ask the user any five questions of your choosing. 

//     * The question set should include at least one:

//         * Basic input, 
//         * Password
//         * List, 
//         * Checkbox, 
//         * Confirm

//     * Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 

//     * HINT: See the inquirer GitHub documentation "examples" page if you need help.

//     * Remember to get creative with your code!

var request = require("inquirer");
request.prompt([
{
	type:"input",
	message: "Summoner, What is your name?",
	name: "summoner"
},
{
	type:"confirm",
	message: "Are you ready to start your journey?",
	name: "start",
	default: true
}




]).then(function(user){
	if(user.start){
		console.log("Here we go!");
		request.prompt([
			{
				type: "list",
				message: "Choose your weapon",
				choices: ["Philosopher's Stone", "Death Fire Grasp", "Heart of Gold"],
				name: "weapon"
			}	
		]).then(function(user){
			console.log("You chose: "+ user.weapon+ "!");
				if(user.weapon == "Philosopher's Stone"){
					console.log("I see you like cheating");
				}else if (user.weapon == "Death Fire Grasp"){
					console.log("A Katarina Main!");
				}else if (user.weapon == "Heart of Gold"){
					console.log("Sona Train Hype Choo Choo");
				}
			request.prompt([
				{
					type: "confirm",
					message: "Do you wish to take a companion with you?",
					name: "companion",
					default: true
				}
			]).then(function(user){
				if (user.companion){
					request.prompt([
						{
							type: "list",
							message: "Choose your companion",
							choices: ["TSM BioFrost", "A Bronze V Scrub", "Pix"],
							name: "companionChoice"
						}
						]).then(function(user){
							if (user.companionChoice=="TSM BioFrost"){
								console.log("FREESM FREESM");
							}else if (user.companionChoice == "A Bronze V Scrub"){
								console.log("Good Luck");
							}else if (user.companionChoice == "Pix"){
								console.log("That tastes like purple!");
							}
						});
				}else{
					console.log("You suck");
				}
			});
			});
		}else{
		console.log("Oh well, another time.")
		}
	});