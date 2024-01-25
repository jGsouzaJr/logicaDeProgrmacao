const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const moedas = Number(frm.moedas.value);

  let troco;

  if (moedas < 1) {
    alert(`O Valor depositado insuficiente!`);
    frm.moedas.focus();
    return;
  } else if (moedas == 1) {
    resp.innerText = `Seu tempo é de 30 mins`;
  } else if (moedas > 1 && moedas < 1.75) {
    troco = moedas - 1;
    resp.innerHTML = `Seu tempo é de 30 mins, seu troco é de R$${troco.toFixed(
      2
    )}.`;
  } else if (moedas == 1.75) {
    resp.innerText = `Seu tempo é de 60 mins`;
  } else if (moedas > 1.75 && moedas < 2.75) {
    troco = moedas - 1.75;
    resp.innerHTML = `Seu tempo é de 60 mins, seu troco é de R$${troco.toFixed(
      2
    )}.`;
  } else if (moedas == 2.75) {
    resp.innerText = `Seu tempo é de 90 mins`;
  } else if (moedas > 2.75 && moedas < 3) {
    troco = moedas - 2.75;
    resp.innerHTML = `Seu tempo é de 90 mins, seu troco é de R$${troco.toFixed(
      2
    )}.`;
  } else if (moedas == 3) {
    resp.innerText = `Seu tempo é de 120 mins`;
  } else if (moedas > 3) {
    troco = moedas - 3;
    resp.innerHTML = `Seu tempo é de 120 mins, esse é o tempo máximo, seu troco é de R$${troco.toFixed(
      2
    )}.`;
  }
});
