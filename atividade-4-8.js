// Escreva um programa que simule uma partida de pedra papel e tesoura. 
// Deve ser solicitado o nome do jogador A e do jogador B.
// Após isso o programa deve pedir a jogada do jogador A e a jogada do jogador B.
// No final o programa deve imprimir quem ganhou.
// Dicas: 
// Papel ganha de pedra
// Tesoura ganha de papel
// Pedra ganha de tesoura

// Para não exibir a jogada do jogador utilize o comando de “password” no readline-sync

console.log('Bem vindo ao jogo de pedra (A) papel (B) tesoura (C). ')
var user = require('readline-sync')
var querContinuar = true

while(querContinuar){
    while(jogadaA != 'A' && jogadaA != 'B' && jogadaA != 'C'){
        var jogadaA = user.question('JOGADOR A, INSIRA SUA JOGADA (A, B ou C): ',{hideEchoBack:true}).toUpperCase()
    }
    while(jogadaB != 'A' && jogadaB != 'B' && jogadaB != 'C'){
        var jogadaB = user.question('JOGADOR B, INSIRA SUA JOGADA (A, B ou C): ',{hideEchoBack:true}).toUpperCase()
    }

    //checagem
    if(jogadaA==jogadaB){
        console.log('Deu empate!')
    }
    else if(jogadaA == 'A'){
        if(jogadaB == 'B'){
            console.log('O jogador B ganhou!')
        }
        else{
            console.log('O jogador A ganhou!')
        }
    }
    else if(jogadaA == 'B'){
        if(jogadaB == 'C'){
            console.log('O jogador B ganhou!')
        }
        else{
            console.log('O jogador A ganhou!')
        }
    }
    else{
        if(jogadaB == 'A'){
            console.log('O jogador B ganhou!')
        }
        else{
            console.log('O jogador A ganhou!')
        }
    }
    querContinuar = user.keyInYN('Voce deseja continuar jogando?')
    jogadaA = ''
    jogadaB = ''
}