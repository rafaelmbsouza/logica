var rs = require('readline-sync')
var num = rs.questionInt('Insira um número inteiro entre 0 e 10^9 (um bilhão): ')

//Cláusula para os engraçadinhos que botarem um número maior que 1bi
if (num>1e9){
    console.log('Eu falei um número menor que 1 bilhão. Mas vou quebrar essa pra ti. Vou arredondar seu número.')
}
//estruturando o problema: tudo vai depender da quantidade de algarismos do nosso número.
//primeiro, fazemos um dicionário:
//1 = um, 2 = dois... esse dicionario estará descrito abaixo:

var unidades = ['','um','dois','três','quatro','cinco','seis','sete', 'oito', 'nove']
var excecao_dez = ['dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
var dezenas = ['','dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
var centenas = ['','cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']
var milhares = ['','mil','milhões','bilhões','trilhões','quadrilhões', 'quintilhões']
//A partir daqui, temos a composição de um número de unidade com a palavra do milhar depois.

function constroiCentenas(num3Digitos){
    num3Digitos=num3Digitos.toString().padStart(3,'0')
    //console.log(num3Digitos)
    if(num3Digitos=="100") {return 'cem'}
    if(num3Digitos[1]==1){
        //excecao do dez (onze, doze, treze...)
        num3DigitosExtenso = `${centenas[num3Digitos[0]]}${(num3Digitos[0]!=0 ? ' e ':'')}${excecao_dez[num3Digitos[2]]}`        
    }
    else{
        //casos regulares
        num3DigitosExtenso = `${centenas[num3Digitos[0]]}${(num3Digitos[0]!=0 && (Number(num3Digitos[1])+Number(num3Digitos[2]))>0? ' e ':'')}${dezenas[num3Digitos[1]]}${(num3Digitos[1]==0 || num3Digitos[2]==0 ? '':' e ')}${unidades[num3Digitos[2]]}`
    }
    return num3DigitosExtenso
}

function quebraMilhares(num){
    num = num.toString()
    var chunks = []
    while(num.length>0){
        if(num.length>=3){
            chunks.push(num.slice(num.length-3,num.length))
            num = num.slice(0,num.length-3)
        }
        else{
            chunks.push(num)
            num=''
        }
    }
    return chunks.reverse()
}

function escreveNumeroExtenso(num){
    if (num == 0){return 'zero'}
    var numeroExtenso = ''
    var numQuebradoMilhares = quebraMilhares(num)
    //console.log(numQuebradoMilhares)
    for (var [index, centena] of numQuebradoMilhares.entries()) {
        numeroExtenso = numeroExtenso + constroiCentenas(centena)+' '+milhares[numQuebradoMilhares.length-index-1]+ ' '
    }
    return numeroExtenso.trim()
}

console.log(escreveNumeroExtenso(num.toString()))