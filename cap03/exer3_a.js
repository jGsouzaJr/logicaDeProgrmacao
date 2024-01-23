const prompt = require('prompt-sync')()
const salario = prompt('Salário:')
const tempo = prompt('Tempo de serviço:')

const ajuste = Math.floor((tempo/4))*0.01
const aumento = salario* ajuste
console.log(`O aumento é de ${aumento.toFixed(2)}`)
