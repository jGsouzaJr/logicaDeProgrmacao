const frm = document.querySelector('form')
const promocao = document.querySelector('#promocao')


frm.addEventListener('submit', (e)=>{
  const produto = frm.produto.value
  const preco = frm.preco.value

  const desconto = preco * 0.5
  const total = (preco*3) - desconto

  promocao.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}
  
  O 3º produto custa apenas: R$ ${desconto.toFixed(2)}`

  e.preventDefault()
})
