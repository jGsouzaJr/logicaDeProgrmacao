const frm = document.querySelector('form')
console.log(frm)
const resp = document.querySelector('h3')
console.log(resp)

frm.addEventListener('submit', (e)=>{
  const nome = frm.inNome.value  
  resp.innerText = `Olá ${nome}, seja bem-vindo!`
  e.preventDefault()
})

