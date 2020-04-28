// capturar números do usuário
var num1, num2

var rs = require('readline-sync')

num1 = rs.questionInt('Qual e o primeiro numero? ')
num2 = rs.questionInt('Qual e o segundo numero? ')

if(num1>num2){
    console.log('O maior número é o '+num1)
}
else if(num1<num2){
    console.log('O maior número é o '+num2)
}
else{
    console.log('Os números são iguais')
}