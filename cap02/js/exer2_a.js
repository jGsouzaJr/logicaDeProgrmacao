const frm = document.querySelector('form')
const promocao = document.querySelector('#promocao')

frm.addEventListener('submit', (e)=>{
  const remedio = frm.remedio.value
  const preco = Number(frm.preco.value)

  // const desconto = (preco *2) -((preco * 2)%2)  minha solução
  //solução mais simples
  const desconto = Math.floor(preco * 2)

  promocao.innerText = `Promoção de ${remedio}\nLeve 2 por apenas ${desconto.toFixed(2)}`

  e.preventDefault()

})

