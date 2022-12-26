// Variables

var a; // declarando
var b = 'b'; // declarando y asignando
b = 'bb'; //re-asignando
var a = 'aa' // re-declarando

// Global Scope
var fruit = 'Apple' // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = 'Colombia'; // global
  console.log(country);
}

countries();
console.log(country);
