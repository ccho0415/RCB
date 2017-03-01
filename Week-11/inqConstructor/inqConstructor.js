// Load Inquirer
var inq = require("inquirer");
var arr = [];
var count =0;
// Create a Constructor
function Summoner(name, champion){
	this.name=name,
	this.champion=champion
}
// 
function stop(event){
	event.preventDefault();
}
// Create a series of questions
function prompt(){
	inq.prompt([
	{
		type:"input",
		name: "name",
		message: "What is your name Summoner?"

	},
	{
		type:"list",
		name: "champion",
		message: "Choose your Champion!",
		choices: ["Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Blitzcrank", "Brand", "Caitlyn", "Cassiopeia", "Cho'gath", "Corki", "Dr. Mundo", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Irelia", "Janna", "Jarvan IV", "Jax", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Pantheon", "Poppy", "Rammus", "Renekton", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Talon", "Taric", "Teemo", "Tristana", "Trundle", "Trydamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xerath", "Xin Zhao", "Yorick", "Ziggs", "Zilean"]
	}
	]).then(function(data){
		var summonerInfo = new Summoner(data.name, data.champion);
		arr.push(summonerInfo);
		if (arr.length<5){
			prompt();
		}else{
			console.log(arr);
		}

	});
}
prompt();