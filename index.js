import validator from './validator.js';

const nameOnCardInput = document.querySelector('.o-card-holder-form');

if(nameOnCardInput){
  nameOnCardInput.addEventListener('input', () => {
    const cardHolder = document.querySelector('.o-name-on-card');
    cardHolder.innerHTML = nameOnCardInput.value.toUpperCase();
    const userIcon = document.querySelector('.o-face-form');
    userIcon.style.color = '#67b8bd';
    if(nameOnCardInput.value === ''){
      cardHolder.innerHTML = 'Name on card';
      userIcon.style.color = '';
    }
  })
}

const numberCardInput = document.querySelector('.o-card-number-form');
if(numberCardInput){
  numberCardInput.addEventListener('input', () => {
    const numberCard = document.querySelector('.o-card-number');
    const cardIcon = document.querySelector('.o-card-form');
    cardIcon.style.color = '#67b8bd'
    const maskedNumber = validator.maskify(numberCardInput.value);
    numberCard.innerHTML = maskedNumber;
    if(numberCardInput.value === ''){
      numberCard.innerHTML = 'XXXX XXXX XXXX XXXX';
      cardIcon.style = '';
    }
  })
}

const expiryDate = document.querySelector('.o-mm-yy-form');
if(expiryDate){
  expiryDate.addEventListener('input', ()=>{
    const expCard = document.querySelector('.o-mm-yy');
    const calendarIcon = document.querySelector('.o-calendar-form');
    calendarIcon.style.color = '#67b8bd';
    expCard.innerHTML = expiryDate.value;
    if(expiryDate.value == ''){
      expCard.innerHTML = 'MM/YY';
      calendarIcon.style = '';
    }
  })
}

const cvv = document.querySelector('.o-input-cvv-form');
if(cvv){
  cvv.addEventListener('input', () => {
    const cvvCard = document.querySelector('.o-number-cvv');
    const lockIcon = document.querySelector('.o-lock-form');
    lockIcon.style.color = '#67b8bd';
    cvvCard.innerHTML = cvv.value;
    if(cvv.value ==  ''){
      lockIcon.style.color = '';
      cvvCard.innerHTML = 'XXX';
    }
    cvvCard.innerHTML = cvv.value;
    if(cvv.value.length > 2){
      const flipper = document.querySelector('.flipper');
      flipper.classList.toggle('flip');
      setTimeout(() => {
        flipper.classList.toggle('flip');
      }, "2000");
    }
  })
}

