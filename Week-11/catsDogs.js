// * **Instructions**

//     * Make a dogs object with three keys...

//         * First key called "raining" with a value of true

//         * Second key called "noise" with a value of "Woof!"

//         * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs

//     * Make a cats object with three keys...

//         * First key called "raining" with a value of false

//         * Second key called "noise" with a value of "Meow!"

//         * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats

//     * Make the dog bark

//     * Make the cat meow

//     * BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the raining keys are equal to true.

//     * BONUS: Look to see if you can find any means to simplify your code further and further

// var dogs = {
//     raining : true,
//     noise: "Woof",
//     makeNoise: function(){
//         if (this.raining){
//             return(this.noise);
//         }
//     }
// }
// var cats = {
//     raining: false,
//     noise: "Meow",
//     makeNoise: function(){
//         if(this.raining){
//             return(this.noise);
//         }
//     }
// }
// function run(){
//     cats.raining = true;
//     console.log(dogs.makeNoise());
//     console.log(cats.makeNoise());
// }
// run();
// function massHysteria(a,b){
//     if(a.raining && b.raining) return "Cats and Dogs Mass Hysteria";
// }
// console.log(massHysteria(cats,dogs));

//We can create a constructor function with particular keys
// Make sure the function starts with a Capital Case
function Animal(raining, noise){
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function(){
        if(this.raining) return this.noise;
    }
}

var dog = new Animal(true, "Woof!");
var zebra = new Animal(true,"Zip Zip");
var python = new Animal(true, "Hiss");
var fox = new Animal(true, "Ding ding ding ding dingaling");
console.log(fox.makeNoise());