const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const chinchila = Number(frm.inNum.value);
  const ano = Number(frm.inAno.value);
  let tempo = "";
  let total = chinchila;

  if (chinchila == 1) {
    alert("O Número de Chinchilas deve ser maior que 2!");
    frm.inNum.value = "";
    frm.inAno.value = "";
    frm.inNum.focus();
  } else {
    for (let i = 1; i <= ano; i++) {
      tempo = `${tempo}${i}º ano: ${total} Chinchilas\n`;
      total = total * 3;
    }
  }

  resp.innerText = tempo;
  
});
