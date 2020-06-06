//ATRIBUTOS, PROPRIEDADES
participants = new Object()
console.log(participants)
participantes = {}
console.log(participantes)

ar = new Array()
console.log(ar)
ar2 = []
console.log(ar2)

participantes['tutores'] = ['Rafael', 'Miria']
participantes['estudantes'] = ['Paulo','Alexandre','Bruno']
participantes['invasores'] = ['Cadeirudo', 'Alexandre frota']
participantes.calculaTotal = function(){
    this.totalPessoas = this.tutores.length + this.estudantes.length + this.invasores.length
}

// console.log(participantes)
// participantes.calculaTotal()
// console.log(participantes)

// participantes.tutores.push('Max')
// participantes.calculaTotal()
// console.log(participantes)

// console.log(participantes.tutores.splice(1,1))

// console.log(typeof participantes.tutores)

ar = ['rafael','miria','max'] //criação

console.log(ar)
console.log(ar.length)
ar.invasor = 'alexandrefrota'
console.log(ar)
console.log(ar.length)

// participantes -> objeto
// participantes.tutores -> Array
// participantes.tutores[0] -> string