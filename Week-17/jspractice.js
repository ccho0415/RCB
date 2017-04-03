// create a new array of moviePatrons who are older than 17

const moviePatrons = [{
  name: "Tammer",
  age: 12
},
{
  name: "John",
  age: 18
},
{
  name: "Pavan",
  age: 9
},
]

const over17 = moviePatrons.filter(function(person) {
  return person.age >= 17
});

// return a new array. Double the number if even, triple it if odd
const numbers = [
  4,
  8,
  15,
  16,
  23,
  42
]

const twoOrThree = numbers.map(function(value){
  if (value%2 === 0) {
      return value*2
  }
  return value*3
})
