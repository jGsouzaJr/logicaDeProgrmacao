const frm = document.querySelector('form')
const titulo = document.querySelector('h3')
const duracao = document.querySelector('h4')

frm.addEventListener('submit', (e)=>{
  const title = frm.filme.value
  const min = Number(frm.min.value)

  const horas = Math.floor(min/ 60)
  const mins = min%60

  titulo.innerText = title
  duracao.innerText = `${horas} hora(s) e ${mins} minuto(s)`

  e.preventDefault()
})