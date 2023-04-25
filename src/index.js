import validator from './validator.js';

document.getElementById("inputCardNumber").addEventListener("keyup", () => {
  const cardNumber = document.getElementById("inputCardNumber");
  printMaskify(validator.maskify(cardNumber.value));
});

document.getElementById("submit").addEventListener("click", () => {
  const cardNumber = document.getElementById("inputCardNumber").value;
  printValidationStatus(validator.isValid(cardNumber.toString()));
});

function printValidationStatus(cardNumberIsValid) {
  cardNumberIsValid ? document.getElementById("cardNumberValidationStatus").innerHTML = "Número do cartão validado com sucesso!" :
    document.getElementById("cardNumberValidationStatus").innerHTML = "Número do cartão invalido!";
}

function printMaskify(creditCardNumber){
  document.getElementById("cardShowNumber").innerHTML = creditCardNumber;
}



