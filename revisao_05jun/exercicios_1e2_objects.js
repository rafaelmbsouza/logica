var rs = require('readline-sync')
var fs = require('fs')
var carro = {}
carro.cor = rs.question('Insira aqui a cor do carro: ')
carro.modelo = rs.question('Insira aqui o modelo do carro: ')
carro.marca = rs.question('Insira aqui a marca do carro: ')

carroSerializado = JSON.stringify(carro)
fs.writeFileSync('carro.json',carroSerializado)

console.log(carro)