var mochila = require('./src/mochila')
var minimo = require('./src/minimo')
var codeMountain = require('./src/codeMountain')
const meuAssistente = require('../src/meuAssistente')


var mochilaDoZe = { equipamentos: ['mapa', 'bussola', 'corda'] }

var cabeNoCartao = { message: ['muito grande para o cartão'] }

console.log('tem corda na mochila do zé', mochila.procurarNaMochila(mochilaDoZe, 'corda'))
console.log('tem canivete na mochila do zé', mochila.procurarNaMochila(mochilaDoZe, 'canivete'))

console.log('minimo entre 2 e 8', minimo(2, 8))

console.log('meuAssistente', meuAssistente())