const frm = document.querySelector('form')
const total = document.querySelector('#total')

frm.addEventListener('submit', (e)=>{
  const valor = Number(frm.preco.value)
  const tempo = Number(frm.tempo.value)

  const consumo = Math.ceil(tempo/15)*valor
  
  
  total.innerText = `Valor a Pagar é: R$ ${consumo.toFixed(2)}`
  e.preventDefault()
})