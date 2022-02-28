let inputMen = document.getElementById("inputMen");
let inputWomen = document.getElementById("inputWomen");
let inputKids = document.getElementById("inputKids");
let result = document.getElementById("result");

function totalSteakBarbecue() {
  let QuantMen = inputMen.value;
  let QuantWomen = inputWomen.value;
  let QuantKids = inputKids.value;
  let QuantPeople = parseInt(QuantMen) + parseInt(QuantWomen) + parseInt(QuantKids)

  let steakMenQuant = QuantMen * 0.5;
  let steakWomenQuant = QuantWomen * 0.3;
  let steakKidsQuant = QuantKids * 0.2;
  let sumSteakQuant = steakWomenQuant + steakMenQuant + steakKidsQuant;
  let totalSteakQuant = sumSteakQuant.toFixed(2)

  result.innerHTML = `<p>${totalSteakQuant} Kg de carne para um churrasco com ${QuantPeople} pessoas</p>`;
}
