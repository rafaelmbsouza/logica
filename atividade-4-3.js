// Escreva um programa javascript para escrever o seguinte padrão na tela, com N linhas:

// *  
// * *  
// * * *  
// * * * *  
// * * * * *

var user = require('readline-sync')
var n = user.questionInt('Insira o numero N: ')
var str = ''
var j = 1
while(j<=n){
    str=str+'* '
    console.log(str)
    j++
}