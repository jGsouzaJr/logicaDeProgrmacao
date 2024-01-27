const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
  e.preventDefault()

  const num = Number(frm.numero.value)
  let cont = `Entre ${num} e 1:`
  for(let i = num; i >= 1; i--){
    cont = cont + i + ','
  }

  resp.innerText = cont
})