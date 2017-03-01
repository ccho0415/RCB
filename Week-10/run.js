var bandobj =require("./band.js")
for (value in bandobj.band){
	console.log("A "+value+" band is "+bandobj.band[value]);
}
console.log(bandobj);