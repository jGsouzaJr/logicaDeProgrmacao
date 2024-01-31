const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
  e.preventDefault()

  let fruta = frm.inNome.value
  let num = Number(frm.inNumero.value)
  let rept = ''
  for(let i = 1; i <= num; i++){
    // rep = rep+fruta+'*'
    rep = `${rep}${fruta}*`
  }

  resp.innerText = rep
})