// Calling process.argv
console.log(process.argv);
// Calling specific numbers in process.argv
console.log((process.argv[2])+(process.argv[3]));
// Checking if the number in [2] matches in [3]
if (parseInt(process.argv[2])==parseInt(process.argv[3])){
	console.log("match");
}else
	console.log("not match");
//Print out other strings in the process.argv if there is andrew in [2]
if (process.argv[2] == "andrew"){
	console.log(process.argv[3], process.argv[4]);
}
