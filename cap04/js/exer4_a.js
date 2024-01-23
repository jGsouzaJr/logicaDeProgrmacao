const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
  e.preventDefault()

  const br = Number(frm.horaBr.value)
  let franca = br + 5
  if(franca > 24){
    franca = franca - 24
  }

  resp.innerText = `Hora na França ${franca.toFixed(2)}`


})