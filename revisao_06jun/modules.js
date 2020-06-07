//npm = node package manager
//módulo == bibliotecas

let mediana = require('median') //chama a biblioteca

let notas = [4,5,8,7,3,2,5,6,8,9,6,4,2,9,8,7,8,9,6]

console.log(mediana(notas))

//======================================//

let FasamImc = require('fasam-imc-calc')

let imc = new FasamImc(72,1.8)

console.log(imc.calc())
