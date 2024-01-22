const frm = document.querySelector('form')
const nome = document.querySelector('#name')
const entra = document.querySelector('#entra')
const parc = document.querySelector('#parc')

frm.addEventListener('submit', (e)=>{
  const car = frm.veiculo.value
  const age = frm.ano.value
  const promo = frm.preco.value / 2
  const vezes = promo / 12

  nome.innerText = `Promoção: ${car} ${age}`
  entra.innerText = `Entrada de ${promo.toFixed(2)}`
  parc.innerText = `+12x de R$ ${vezes.toFixed(2)}`

  e.preventDefault()

})