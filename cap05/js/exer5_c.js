const frm = document.querySelector('form')
const resp = document.querySelector('h2')
const resp2 = document.querySelector('h3')


frm.addEventListener('submit', (e)=>{
  e.preventDefault()
  const num = Number(frm.inNum.value)
  let div = `Divisores do ${num}: 1 `
  let per = ''
  let soma = 1
  for(let i = 2; i<=num/2;i++){
    if(num% i == 0){
      div = div + ', '+i      
      soma = soma + i
    }
  }
  div = div + ' (soma:' + soma + ')' 
  resp.innerText = div
  if(num == soma){
    per = num + ' É um número perfeito!'
  } else{
    per = num + ' Não é um número perfeito!'
  }
  resp2.innerText = per
})