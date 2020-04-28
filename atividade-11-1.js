var user = require('readline-sync')
user.questionEMail("informe o email")
var caneca = {
    peso: 10,
    cor: 'branco',
    estaCheia: true,
    servir: function() {
        console.log("glug glug!")
        return "esta servido"
    },
    listaDeCoisasNaCaneca: ['cafe', 'whiskey', 'teste'],
    tipoDoCafe: {
        marca: 'pele',
        preco: 3
    }
}

var caneca2 = {
    peso: 10,
    cor: 'branco',
    estaCheia: true,
    servir: function() {
        console.log("glug glug!")
        return "esta servido"
    },
    listaDeCoisasNaCaneca: ['cafe', 'whiskey', 'teste'],
    tipoDoCafe: {
        marca: 'pele',
        preco: 3
    }
}