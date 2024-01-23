const prompt = require('prompt-sync')()
const racao = prompt('Saco de ração(Kg):')
const animal = prompt('Consumo diário(gr):')

const racaoGr = Math.floor((racao*1000)/animal)
const sobra = (racao*1000)%animal



console.log(`O saco de ração vai durar ${racaoGr} dias e vai sobrar ${sobra} gr.`)