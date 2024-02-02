const frm = document.querySelector('form')
const aten = document.querySelector('span')
const atList = document.querySelector('pre')
const urgente = document.querySelector('#btnUr')
const atender = document.querySelector('#btnAt')

const paciente = []

frm.addEventListener('submit', (e)=>{
  e.preventDefault()

  const nome = frm.paciente.value
  paciente.push(nome)

  let lista = ''
  for(let i = 0;i< paciente.length; i++){
    lista += `${i+1}. ${paciente[i]}\n`
  }

  atList.innerText = lista
  frm.paciente.value = ''
  frm.paciente.focus()
})
// fim add lista atend

urgente.addEventListener('click', ()=>{
  if(!frm.checkValidity()){
    alert('Informe o nome do paciente a ser atendido em caráter de urgência')
    frm.paciente.focus()
    return
  }
  const nome = frm.paciente.value
  paciente.unshift(nome)
  let lista = ''
  paciente.forEach((paciente, i)=>{
    lista+= `${i+1}. ${paciente}\n`
  })
  atList.innerText = lista
  frm.paciente.value = ''
  frm.paciente.focus()
})
// fim da urgência

atender.addEventListener('click',()=>{
  if(paciente.length == 0){
    alert('Não há pacientes na lista de espera!')
    return
  }
  const atend = paciente.shift()
  aten.innerText = atend
  let lista = ''
  paciente.forEach((paciente, i)=>(lista += `${i+1}. ${paciente}\n`))
  atList.innerText = lista
})



