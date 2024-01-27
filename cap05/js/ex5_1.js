const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e)=>{
  e.preventDefault()
  const numero = Number(frm.fator.value)
  let produto = ''
  for(let i = 1; i <= 10; i++){
    produto = produto + numero + 'x' + i + ' = ' + (numero*i) + '\n' 
  }
  resp.innerText = produto
})