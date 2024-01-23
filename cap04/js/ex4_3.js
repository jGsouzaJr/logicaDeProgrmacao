const bairro = prompt("Bairro de Entrega:");

let taxaEntrega;
switch (bairro) {
  case "Centro":
    taxaEntrega = 5;
    break;
  case "Vila Virginia":
  case "Jd C Redentor":
    taxaEntrega = 7;
    break;
  case "Monte Alegre":
    taxaEntrega = 10;
    break;

  default:
    taxaEntrega = 12
    break;
}

alert(`Taxa R$ ${taxaEntrega.toFixed(2)}`)
