// var num
// console.log(typeof(num))
// num = "Rafael"
// console.log(typeof(num))
// num = 1
// console.log(typeof(num))
// num = new Object()
// console.log(typeof(num))
// num = false
// console.log(typeof(num))
// num = ['Rafael', 'Max', 'Bia', 'Miria', 'Douglas', 'Italo']
// console.log(typeof(num))
// var x = [];

// Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna
// essa idade expressa em dias.
// Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado
// utilizando a função criada.
//[3,4,5]
function converteIdadeParaDias(idade){
    totalDias = idade[0]*365 + idade[1]*30 + idade[2]*1
    return totalDias
}

var rs = require('readline-sync')

var velhice = rs.question('Insira os anos, meses e dias separados por espaço: ').split(' ')

// velhice[0] = rs.questionInt('Quantos anos?')
// velhice[1] = rs.questionInt('Quantos meses?')
// velhice[2] = rs.questionInt('Quantos dias?')


console.log(velhice)
var diasTotais = converteIdadeParaDias('345')

console.log(diasTotais)
console.log(converteIdadeParaDias(velhice))