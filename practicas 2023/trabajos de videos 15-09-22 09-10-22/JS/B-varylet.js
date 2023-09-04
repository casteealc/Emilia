'use strict'
document.write("<h1>var y let</h1>")


var numero = 100;
console.log(numero)

if(true){
    console.log(numero);
    var numero = 50;
    console.log(numero);
}

console.log(numero); 

console.log("Esto es LET")

var texto= "Angel"
console.log(texto)

if(true){
    let texto = "Carlos"
    console.log(texto) 
}

console.log(texto)