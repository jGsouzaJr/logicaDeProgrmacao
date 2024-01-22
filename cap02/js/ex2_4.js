const frm = document.querySelector('form')
const total = document.querySelector('#total')

frm.addEventListener('submit', (e)=>{
  const quilo = Number(frm.preco.value)
  const cliente = Number(frm.grama.value)

  const consumo = (quilo/ 1000) * cliente

  total.innerText = `Total a pagar R$: ${consumo.toFixed(2)}`

  e.preventDefault()

})