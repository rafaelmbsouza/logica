// Faça um algoritmo que receba uma entrada do usuário e caso encontre a letra a
// transforme ela em maiúscula
// EX: abelha
// O algoritmo imprime
// AbelhA

var rs = require('readline-sync')
var palavra = rs.question('Insira aqui uma palavra: ')

var novapalavra = ''
for(var cont = 0;cont < palavra.length;cont++){
    if(palavra.charAt(cont)=='a'){
        novapalavra = novapalavra + 'A'
    }
    else{
        novapalavra = novapalavra + palavra.charAt(cont)
    }
}
console.log(novapalavra)