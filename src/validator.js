const validator = {

  isValid: function (inputCardNumber) {

    let cardNumber = inputCardNumber.split('').reverse();

    cardNumber = cardNumber.map(function (item) {
      return parseInt(item, 10);
    });

    const finalIndex = cardNumber.length - 1;
    let sumOfAllDigits = 0;


    for (let index = 0; index <= finalIndex; index++) {


      if (index % 2 !== 0) {
        cardNumber[index] = cardNumber[index] * 2;


        if (cardNumber[index] > 9) {
          const digits = cardNumber[index].toString(10).split('');
          const firstDigit = parseInt(digits.slice(0, 1));
          const secondtDigit = parseInt(digits.slice(1));
          const sumOfDigits = firstDigit + secondtDigit;
          cardNumber[index] = sumOfDigits;
        }//endIf

      }//endIf

    }//endFor

    for (let index = 0; index <= finalIndex; index++) {
      sumOfAllDigits += cardNumber[index];
    }//endFor


    const digits = sumOfAllDigits.toString(10).split('');
    const lastDigit = parseInt(digits.slice(1));

    if (lastDigit === 0 || inputCardNumber === '')  {
      return true;
    } else {
      return false;
    }

  },//endIsValid

  maskify: function (creditCardNumber) {

    const indexStart = 0;
    const sliceIndex = creditCardNumber.length - 4;
    const indexEnd = creditCardNumber.length;

    let digitsThatWillBeMasked = creditCardNumber.substring(indexStart, sliceIndex);

    const lastFourIndexes = creditCardNumber.substring(sliceIndex, indexEnd);

    const maskedNumber = digitsThatWillBeMasked.replace(digitsThatWillBeMasked, () => {
      for (let i = 0; i < digitsThatWillBeMasked.length; i++) {
        digitsThatWillBeMasked = digitsThatWillBeMasked.replace(digitsThatWillBeMasked[i], '*');
      }
      return digitsThatWillBeMasked;
    });

    let concatenated = maskedNumber + lastFourIndexes;
    let formated = '';

    for (let i = 0; i < concatenated.length; i++) {
      if (i % 4 === 0) {
        formated += ' ';
        formated += concatenated[i]
      } else {
        formated += concatenated[i];
      }
    }

    return formated;

  },//endMaskify

  isDateValid : (inputDateString) => {
    let inputMonth = inputDateString.substring(0, 2);

    const monthOfYearString = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    if(!monthOfYearString .includes(inputMonth)){
      return false;
    }
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth()+1;
    const monthOfYearInt = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if(monthOfYearInt.includes(currentMonth)){
      currentMonth = currentMonth.toString().padStart(2, '0');
    } else {
      currentMonth = currentMonth.toString();
    }

    let inputYear = inputDateString.substring(2, 4);

    let currentYear = currentDate.getFullYear().toString().substring(2,4);
    if(inputYear < currentYear) {
      return false;
    }
    inputDateString = inputDateString.split("").reverse().join("");

    currentDate = currentMonth + currentYear;
    currentDate = currentDate.split("").reverse().join("");

    if(inputDateString < currentDate){
      return false;
    }

    return true;

  }

}//endValidator

export default validator;
