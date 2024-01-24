const prompt = require('prompt-sync')()
const compra = Number(prompt('Valor da comprar:'))
const nparc = Math.floor(compra/20)
let parc
let valor
// if(nparc == 0 || nparc == 1){
//   console.log(`Este valor de R$:${compra.toFixed(2)}, somente à vista!`)
// } else if(nparc > 6){
//   parc = 6
//   valor = compra/parc
//   console.log(`Pode pagar em ${parc}x de R$: ${valor.toFixed(2)}`)
// }else{
//   parc = nparc
//   valor = compra/parc
//   console.log(`Pode pagar em ${parc}x de R$: ${valor.toFixed(2)}`)  
// }

// COM OPERADOR TERNÁRIO

parc = nparc == 0 ? 1: nparc>6? 6:nparc
valor = compra/parc
console.log(`Pode pagar em ${parc}x de R$: ${valor.toFixed(2)}`)