const prompt = require('prompt-sync')()
const numero = Number(prompt('Coloque uma centena:'))
if(numero<100|| numero==1000){
  console.log('Erro... Deve ser uma centena, tente novamente')
  return
}
const cem = Math.floor(numero/100)
let sobra = numero %100
const dez = Math.floor(sobra/10)
const unid = sobra%10

console.log(`Invertido:${unid}${dez}${cem}`)