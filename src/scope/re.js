// var
var firstName; // Declaración  (undefined)
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David'; // Declaración y Asignación
lastName = 'Anna'; // Re-asignación
console.log(lastName);

var secondName = 'David'; // Declaración y Asignación
var secondName = 'Anna'; // Re-declaración y Re-asignación
console.log(secondName);

// let
let fruit = 'Apple'; // Declaración y Asignación
fruit = 'Kiwi'; // Re-asignación
console.log(fruit);

// let fruit = 'Banana'; // Cannot redeclare
// console.log(fruit);

// const
const animal = 'dog'; // Declaración y Asignación
// animal = 'cat'; // Re-asignación // TypeError: Assignment to constant variable.
// const animal = 'snake'; // SyntaxError: Identifier 'animal' has already been declared
console.log(animal); 

// const array
const vehicles = [];
vehicles.push('BMW');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);