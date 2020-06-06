// //loop

// let numero = 8;
// // var i = 10;
// // while(i>0){
// //     console.log(numero) //repetido
// //     i = i - 1 //DECRESCIMO === i--
// // }

// for(var i=10;i>0;i--){
//     console.log(numero)
// }

// TIPOS DE VARS
// tipos primitivos
// //string
// //number
// //boolean
// //null
// //undefined

// //BigInt
// //Symbol

// //object
// //function

// var bool = true

// console.log(!!bool != bool)

// var cont = 0;
// while(!bool != bool){
//     if(cont>=10){break}
//     console.log('Arbyte')
//     cont++
// }


// while(true){
//     numero = rs.questionInt('Coloque aqui um numero inteiro entre 50 e 100: ')
//     if(numero>=50 && numero<=100){
//         break
//     }
// }

//21 eh divisivel por 7 7 + 7 + 7 = 21
// var rs = require('readline-sync')
// var numero = rs.questionInt('Coloque aqui um numero inteiro entre 0 e Josué: ')

function ehPrimo(numero){
    //essa funcao recebe um numero inteiro e retorna true se ele eh primo
    //e false se ele nao eh
    var i = 2
    while(i<numero){
        if(numero%i==0){
            return false
        }
        i++
    }
    return true
}

var animal1 = new Object()

animal1.especie = "Leão"
animal1.nome = "Simba"
animal1.peso = 1000
animal1.leituraDoAnimal = function() {
    console.log(`Esse animal é um ${this.especie}. O nome dele é ${this.nome}. Ele pesa ${this.peso} quilos.`)
}

animal1.leituraDoAnimal()

var animal2 = {}



// if(name = "Rafael"){
//     console.log('O nome dele é Rafael')
// }
// else{
//     console.log('O nome dela e miria')
// }

//9/9 = 1 0<-
//9/8 = 1 1
//9/7 = 1 2
//9/6 = 1 3
//9/5 = 1 4
//9/4 = 2 1
//9/3 = 3 0<-
//9/2 = 4 1
//9/1 = 9 0<-