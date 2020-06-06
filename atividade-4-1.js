// Escreva um programa que passe por todos os números de 1 a 50 
// e para cada um deles imprima na tela se o número é par ou ímpar. 
// Caso o número também seja primo, o programa deve dizer que ele é primo. 
// (um número primo é um número que só é divisível por ele mesmo e por 1). 
// Dica: Neste exercício você pode precisar de ajuda do operador MÓDULO (%). 
// Você também pode precisar criar mais de um loop.

// 1 ÍMPAR PRIMO
// 2 PAR PRIMO
// 3 ÍMPAR PRIMO
// 4 PAR
// 5 ÍMPAR PRIMO
// 6 PAR
// 7 ÍMPAR PRIMO
// 8 PAR
// 9 ÍMPAR
// 10 PAR

var START = 1;
var END = 50000;

var par_impar = ''
var n = START;
var m = 2;
var numdiv = 0
var primo = 'PRIMO'
var par = (START%2==0) // essa linha vai retornar true se o início do código for par
//n é divisível por m se n%m == 0; MÒDULO É O RESTO DA DIVISÃO (símbolo: %)

while(n<=END){
    //teste do par ou impar
    if(par){
        par_impar = "PAR"
    }
    else{
        par_impar = "ÍMPAR"
    }
    par = !par //precisamos trocar a paridade toda vez que mudamos o número
    //teste do PRIMO
    //um número é primo quando ele tem 2 ou menos divisores
    m = 2
    numdiv = 0
    primo = 'PRIMO'
    while(m<n){
        if(n%m==0){
            primo = ''
            break
        }
        m++
    }

    console.log(n+' '+par_impar+' '+primo)
    n++

}