//FATORIAL DE 5
//inteiros positivos menores que N
//5,4,3,2,1
//5! = 5*4*3*2*1

var rs = require('readline-sync')

while (true) {
    var num = rs.questionInt('Insira o numero para o calculo do fatorial: ')
    var resultado = 1
    for (; num > 1; num--) {
        resultado = resultado * num
    }
    console.log(resultado)
    resp = rs.question('Você deseja continuar? (s - continua, n - sai do programa) ')
    if (resp == 'n') { break }
}