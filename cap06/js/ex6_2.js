const frm = document.querySelector('form')
const respErro = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDica = document.querySelector('#outDica')

const erros = []
const sorteado = Math.floor(Math.random()*100)+1
console.log(sorteado)
const CHANCES = 6


frm.addEventListener('submit', (e)=>{
  e.preventDefault()
  const numero = Number(frm.inNum.value)
  if(numero == sorteado){
    respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
    frm.idSubmit.disabled = true
    frm.idNovo.className = 'exibe'
  } else {
    if(erros.includes(numero)){
      alert(`Você já apostou o número ${numero}. Tente outro...`)
    } else{
      erros.push(numero)
      const numErros = erros.length
      const numChances =   CHANCES - numErros
      respErro.innerText = `${numErros} (${erros.join(', ')})`
      respChances.innerText = numChances
      if(numChances == 0){
        alert("Suas chances acabaram...")
        frm.idSubmit.disabled = true
        frm.idNovo.className = 'exibe'
        respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`
      } else {
        const dica = numero< sorteado? 'maior':'menor'
        respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
      }
    }
  }
  frm.inNum.value = ''
  frm.inNum.focus()
  
})

frm.idNovo.addEventListener('click',()=>{
  location.reload()
})
