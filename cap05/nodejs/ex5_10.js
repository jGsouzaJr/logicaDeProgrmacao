const prompt = require('prompt-sync')()
const valor = Number(prompt('Valor R$:'))
const parc = Number(prompt('Nº de parcelas:'))
const valorParc = Math.floor(valor/parc)
const ultParc = valorParc + (valor%parc)
for(let i = 1; i<parc; i++){
  console.log(`${i}ª parcela: R$ ${valorParc.toFixed(2)}`)
}

console.log(`${parc}ª parcela: R$ ${ultParc.toFixed(2)}`)