const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
  e.preventDefault()
  let numero = Number(frm.numero.value)
  
  let parImpar = numero%2 == 0 ? resp.innerText = `O ${numero} é par`: resp.innerText = `O ${numero} é ímpar`

  // if(parImpar == 0){
  //   resp.innerText = `O ${numero} é par`
  // } else {
  //   resp.innerText = `O ${numero} é ímpar`
  // }


})