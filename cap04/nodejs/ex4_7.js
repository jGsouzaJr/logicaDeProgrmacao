const prompt = require('prompt-sync')()
const pessoas = Number(prompt('Número de Pessoas: '))
const peixes = Number(prompt('Número de peixes:'))

let ingresso = 20
let add = 12
let pagar

if(peixes <= pessoas){
  pagar = ingresso * pessoas
} else {
  pagar = (pessoas*ingresso)+((peixes - pessoas)*add)
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`)