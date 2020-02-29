// Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada entre
// estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
// procedimento para uma turma composta por cinco alunos, usando o comando For.
// Exemplo de tela de saída:

// Entre com o nome do aluno: João da Silva
// Entre com o grau A: 5.0
// Entre com o grau B: 6.0
// O aluno João da Silva tem uma média:5.7

// média ponderada a*0.3+b*0.7
var user = require('readline-sync')
//arrays de armazenamento
var alunos = []
var notasA = []
var notasB = []
var TAMANHO_CLASSE = 5 //esse eh o numero de alunos da sala
var pesos = [0.3,0.7]

for(var i=0;i<TAMANHO_CLASSE;i++){
    //pedir dados do usuario
    var nomeAluno = user.question('Insira o nome do aluno: ')
    var notaA = user.questionFloat('Insira a nota da prova A: ')
    var notaB = user.questionFloat('Insira a nota da prova B: ')
    //console.log(`O aluno ${nomeAluno} tem uma média: ${mediaPonderada}`)
    alunos.push(nomeAluno)
    notasA.push(notaA)
    notasB.push(notaB)
}
console.log('Coletamos todos os alunos. Imprimindo as medias:')

for(var j=0;j<TAMANHO_CLASSE;j++){
    console.log(`Nome do aluno: ${alunos[j]}\n
    Nota da prova A: ${notasA[j]}\n
    Nota da prova B: ${notasB[j]}\n
    Media ponderada do aluno: ${pesos[0]*notasA[j]+pesos[1]*notasB[j]}\n\n`)
}
