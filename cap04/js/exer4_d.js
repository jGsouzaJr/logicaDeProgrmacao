const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit',(e)=>{
  e.preventDefault()
  const a = Number(frm.ladoA.value)
  const b = Number(frm.ladoB.value)
  const c = Number(frm.ladoC.value) 
  if(a > b+c || b > a+c || c>b+a){
    alert('Os valores informados não formam um triângulo')
    frm.ladoA.focus()
    return
  } 

  if( a == b && a == c){   
    resp.innerText = `Os dados informados podem formar um triângulo: 'Equilátero'`
  } else if (a == b || a==c ||b == c){    
    resp.innerText = `Os dados informados podem formar um triângulo: 'Isósceles'`
  } else {
    resp.innerText = `Os dados informados podem formar um triângulo: 'Escaleno'`    
  }


})