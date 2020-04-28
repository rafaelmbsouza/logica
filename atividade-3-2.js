// Criar um algoritmo que realize a multiplicação de dois números maiores que zero 
// SEM usar o operador de multiplicação (*)

var user = require("readline-sync")

var num1 = user.questionInt("Insira o primeiro número: ")
var num2 = user.questionInt("Insira o segundo número: ")

//O que é uma multiplicação?
//3*4 == 4 + 4 + 4
//3*4 == 3 + 3 + 3 + 3

// var resultado = 0
// while(num1>0){
//     resultado = resultado + num2
//     num1--
// }

for(var resultado=0;num1>0;num1--){
    resultado = resultado + num2
}

console.log("O resultado é: "+resultado)