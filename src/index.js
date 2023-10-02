import validator from './validator.js';

const nameOnCardInput = document.querySelector('.o-card-holder-form');
const cardHolder = document.querySelector('.o-name-on-card');

if (nameOnCardInput) {
  nameOnCardInput.addEventListener('input', () => {
    cardHolder.innerHTML = nameOnCardInput.value.toUpperCase();
    const userIcon = document.querySelector('.o-face-form');
    userIcon.style.color = '#67b8bd';
    if (nameOnCardInput.validity.patternMismatch) {
      nameOnCardInput.value = '';
    }
    if (nameOnCardInput.value === '') {
      cardHolder.innerHTML = 'Name on card';
      userIcon.style.color = '';
    }
  })
}
let error = document.getElementById('error-message-number-card');
let errorBox = document.getElementById('error-number-card');

const numberCardInput = document.querySelector('.o-card-number-form');

if (numberCardInput) {
  numberCardInput.addEventListener('input', () => {
    const numberCard = document.querySelector('.o-card-number');
    const cardIcon = document.querySelector('.o-card-form');
    cardIcon.style.color = '#67b8bd'
    const maskedNumber = validator.maskify(numberCardInput.value);
    numberCard.innerHTML = maskedNumber;
    const flag = document.querySelector('.o-flag');
    if (numberCardInput.value.length === 16) {
      if (!validator.isValid(numberCardInput.value)) {
        numberCardInput.value = '';
        errorBox.classList.toggle('visible');
        error.innerHTML = 'Número de cartão inválido!'
        setTimeout(() => {
          errorBox.classList.toggle('visible');
          errorBox.classList.toggle('trasition');
        }, '4000')
      }

    }
    if (numberCardInput.value === '') {
      numberCard.innerHTML = 'XXXX XXXX XXXX XXXX';
      cardIcon.style = '';
      flag.style.visibility = 'hidden';
    }

    if (numberCardInput.value.length === 4) {
      const result = validator.flag(numberCardInput.value);
      console.log(result.length)
      if (result.length !== 0) {
        flag.classList.toggle('visible');
        flag.innerHTML = result;
      }
    }

  })
}

const expiryDate = document.querySelector('.o-mm-yy-form');

if (expiryDate) {
  expiryDate.addEventListener('input', () => {
    const expCard = document.querySelector('.o-mm-yy');
    const calendarIcon = document.querySelector('.o-calendar-form');
    calendarIcon.style.color = '#67b8bd';
    const regex =  /^\d+$/;

    if (!expiryDate.value.match(regex)) {
      expiryDate.value = '';
      error.innerHTML = 'Data inválida!'
    }
    if (expiryDate.value == '') {
      expCard.innerHTML = 'MM/YY';
      calendarIcon.style = '';
    }


//^(0[1-9]|1[0-2])\/?([0-9]{2})$*
    const month = expiryDate.value.substring(0, 2);
    const year = expiryDate.value.substring(2, 5);

    const dateParam = month + year;


    if (!expiryDate.validity.patternMismatch && expiryDate.value.length === 4) {
      console.log(dateParam);
      if (!validator.isDateValid(dateParam)) {
        error.innerHTML = 'Data inválida!'
        errorBox.classList.toggle('visible');
        setTimeout(() => {
          errorBox.classList.toggle('visible');
          errorBox.classList.toggle('trasition');
        }, '4000')
        return expiryDate.value = '';
      };
      const date = month + '/' + year;
      expCard.innerHTML = date;
      return expiryDate.value = date;
    }
  })
}

const cvv = document.querySelector('.o-input-cvv-form');
if (cvv) {
  cvv.addEventListener('input', () => {
    const cvvCard = document.querySelector('.o-number-cvv');
    const lockIcon = document.querySelector('.o-lock-form');
    lockIcon.style.color = '#67b8bd';
    cvvCard.innerHTML = cvv.value;
    if (cvv.value === '') {
      lockIcon.style.color = '';
      cvvCard.innerHTML = 'XXX';
    }
    cvvCard.innerHTML = cvv.value;
    if (cvv.value.length > 2) {
      const flipper = document.querySelector('.flipper');
      flipper.classList.toggle('flip');
      setTimeout(() => {
        flipper.classList.toggle('flip');
      }, "2000");
    }
  })
}

const doubt = document.querySelector('.o-help-form');
if (doubt) {
  doubt.addEventListener('mouseenter', () => {
    console.log(doubt);
    const popupDoubt = document.getElementById('doubts-about-cvv');
    popupDoubt.classList.toggle('stack');
    setTimeout(() => {
      popupDoubt.classList.toggle('stack');
    }, "3500");

  });
}

const buttonSave = document.querySelector('.o-btn-save');

const form = document.querySelector('.form');

const inputs = form.querySelectorAll('input');



const checksIfTheFormIsCompletelyFilledOut = () => {
  const allInputs = Array.from(inputs).every(input => input.value !== '');
  buttonSave.disabled = true;
  buttonSave.classList.add('disabled')
  console.log(numberCardInput.value.length)

  if (allInputs &&
    cvv.value.length === 3 &&
    expiryDate.value.length === 5 &&
    nameOnCardInput.value.length > 2 &&
    (numberCardInput.value.length >= 13 &&
      numberCardInput.value.length <= 16)
  ) {
    buttonSave.disabled = false;
    buttonSave.classList.remove('disabled')
  }

}

inputs.forEach(input => {
  input.addEventListener('input', checksIfTheFormIsCompletelyFilledOut);
})

buttonSave.addEventListener('click', () => {
  if (!validator.isValid(numberCardInput.value)) {
    numberCardInput.value = '';
    errorBox.classList.toggle('visible');
    error.innerHTML = 'Número de cartão inválido!'
    setTimeout(() => {
      errorBox.classList.toggle('visible');
      errorBox.classList.toggle('trasition');
    }, '4000')
  }
})
