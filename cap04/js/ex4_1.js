const frm = document.querySelector('form')
const nota = document.querySelector('h3')
const situacao = document.querySelector('h4')

// frm.addEventListener('submit',(e)=>{
//   const nome = frm.inNome.value
//   const nota1 = Number(frm.inNota1.value)
//   const nota2 = Number(frm.inNota2.value)

//   const media = (nota1+nota2)/2
//   nota.innerText = `Média das Notas ${media}`

//   if (media >= 7){
//     situacao.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
//     situacao.style.color = 'blue'
//   } else{
//     situacao.innerText = `Ops! ${nome}... Você foi reprovado(a)`
//     situacao.style.color = 'red'
//   }  

//   e.preventDefault()
// })

//segunda forma resposta 'em exame'

frm.addEventListener('submit',(e)=>{
  const nome = frm.inNome.value
  const nota1 = Number(frm.inNota1.value)
  const nota2 = Number(frm.inNota2.value)

  const media = (nota1+nota2)/2
  nota.innerText = `Média das Notas ${media}`

  if (media >= 7){
    situacao.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
    situacao.style.color = 'blue'
  }else if(media >= 4){
    situacao.innerText = `Ops! ${nome}! Você está em exame`
    situacao.style.color = 'green'
  } else{
    situacao.innerText = `Ops! ${nome}... Você foi reprovado(a)`
    situacao.style.color = 'red'
  }  

  e.preventDefault()
})