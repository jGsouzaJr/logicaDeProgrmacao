const frm = document.querySelector('form')
const resp1 = document.querySelector('#alta')
const resp2 = document.querySelector('#media')
const resp3 = document.querySelector('#baixa')

frm.addEventListener('submit', (e)=>{
  e.preventDefault()

  const saque = Number(frm.saque.value)
  const menorNotas = frm.menor.checked
  const notasCem = Math.floor(saque/100)  
  const notas50 = Math.floor(saque/50)  
  const notas10 = Math.floor(saque/10)
  let resto = saque%100
  if(saque%10 !=0){
    alert('Valor inválido para notas disponíveis(R$10, 50, 100)')
    frm.saque.focus()
    return
  }
  if(menorNotas){
    let resto = saque%100
    const menor50 = Math.floor(resto/50)
    resto = resto%50
    const menor10 = Math.floor(resto/10)

    if(notasCem > 0){
    resp1.innerText = `Notas de R$ 100: ${notasCem}`
    }
    if(menor50 > 0){
    resp2.innerText = `Notas de R$ 50: ${menor50}`
    }
    if(menor10>0){
    resp3.innerText = `Notas de R$ 10: ${menor10}`
    }
    
  } else{
    if(notasCem > 0){
      resp1.innerText = `Notas de R$ 100: ${notasCem}`
    }
    if(notas50 > 0){
      resp2.innerText = `Notas de R$ 50: ${notas50}`
    }
  
    if(notas10 > 0){
      resp3.innerText = `Notas de R$ 10: ${notas10}`
  
    }
  }

  
  
  
})


