const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
  e.preventDefault()
  const radar = Number(frm.radar.value)
  const carro = Number(frm.carro.value)
  let multaLeve = radar+(radar*0.2)
  if(carro <= radar){
    resp.innerText = 'Carro está em uma ótima velocidade'
  } else if( carro <= multaLeve){
    resp.innerText = 'Multa leve e 4 pontos na CNH'
  } else {
    resp.innerText = 'Multa grave e 4 pontos na CNH'
  }  
})