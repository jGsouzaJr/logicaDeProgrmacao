const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const modelo = frm.inNome.value;
  const preco = Number(frm.inPreco.value);
  carros.push({ modelo, preco });
  frm.inNome.value = "";
  frm.inPreco.value = "";
  inNome.focus();

  frm.inLista.dispatchEvent(new Event("click"));
});

frm.inLista.addEventListener("click", () => {
  if (carros.length == 0) {
    alert("Não há carros na lista!");
    frm.inNome.focus()
    return;
  }
  const lista = carros.reduce((acumulador, carro) => 
    acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(
      40
    )}\n${lista}`;
    frm.inNome.focus()
   
  
});

frm.inFiltrar.addEventListener('click',()=>{
  let maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar?'))
  // let maximo = Number(frm.inPreco.value)

  if(maximo == 0 || isNaN(maximo)){
    return
  }
  const carrosFilter = carros.filter(carro=>carro.preco<=maximo)
  if(carrosFilter.length == 0){
    alert('Não há carros com preço inferior ou igual ao solicitado')
    frm.inNome.focus()
    return
  }
  let lista = ''
  for(const car of carrosFilter){
    lista += `${car.modelo} - R$: ${car.preco.toFixed(2)}\n`
  }
  resp.innerText = `Carros até R$: ${maximo.toFixed(2)}\n${'-'.repeat(40)}\n${lista}`
})

frm.inPromocao.addEventListener('click', ()=>{
  const desconto = Number(prompt('Qual o percentual de desconto:'))
  if(desconto == 0 || isNaN(desconto)){
    return
  }

  const carrosDesc = carros.map(v=>({
    modelo: v.modelo,
    preco: v.preco - (v.preco * desconto/100)
  }))
  lista = ''
  for(const carro of carrosDesc){
    lista+=`${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
  }
  resp.innerText = `Carros com desconto: ${desconto}%\n${'-'.repeat(40)}\n${lista.sort()}`
})