function Shoe(soul, laces, size){
	this.soul = soul;
	this.laces = laces;
	this.size = size;
}
var sneakers = new Shoe("elastic", "pink", 10.5);
var heels = new Shoe("wood","black", Math.pi);
Shoe.prototype.walk=function(){
	console.log("you have walked one step");
}
console.log(sneakers);
sneakers.walk();