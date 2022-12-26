// En el caso de las variables el hoisting sucede con las variables declaradas con var.

console.log(nombre) // undefined
var nombre = "Andres" 

// Hoisting
// var nombre = undefined
// console.log(nombre)
// nombre = "Andres"

// Hoisting en funciones
// Al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.
console.log( saludar() )

function saludar() {
  return "Hola"
}
// Hoisting
// function saludar() {
//   return "Hola"
// }

// console.log( saludar() ) // "Hola"

// Hoisting de variables dentro de una función
function scope() {
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  var nombre = "Andres"
  var edad = 20
  for (var i = 0; i< 6; i++) {
  //...
  }
}
//hoisting
// function scope() {
//   var nombre = undefined
//   var edad = undefined
//   var i = undefined
  
//   console.log(nombre) // undefined
//   console.log(edad) // undefined
//   console.log(i) // undefined
  
//   nombre = "Andres"
//   edad = 20
//   for ( i = 0; i< 6; i++) {
  
//   //
//   }
// }

