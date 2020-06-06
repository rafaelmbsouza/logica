// function quadradoMaisCinco(x) {
//     return x*x + 5
// }

// for(var i=1;i<=100;i++){
//     console.log(quadradoMaisCinco(i))
// }

//exercício 1 lista de functions
//Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.pi.R3).

function volumeDaEsfera(raio){
    const PI = 3.141592
    var calculo = (4/3)*PI*raio**3
    return calculo
}

var rs = require('readline-sync')
// console.log(volumeDaEsfera(rs.questionFloat('Digite o Raio da Esfera: ')))

//Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
//Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na condição IF.

//número primo = divisível somente por ele mesmo ou por 1

// 1 2 | 3 4 | 5 6 | 7 8 | 9 10 | 11 12 | 13 //dividido por 2
// 1 2 3 | 4 5 6 | 7 8 9 | 10 11 12 | 13 //dividido por 3
// 1 2 3 4 | 5 6 7 8 | 9 10 11 12 | 13 //dividido por 4
// 1 2 3 4 5 | 6 7 8 9 10 | 11 12 13 //dividido por 5
// 1 2 3 4 5 6 | 7 8 9 10 11 12 | 13 //dividido por 6

function ehPrimo(n){
    let d = 2
    while(d<n){
        if(n%d==0){
            return false
        }
        d++
    }
    return true
}

for(let i=1;i<=100;i++){
    if(ehPrimo(i)){console.log(`O número ${i} é primo.`)}
}