// #1 martivi gamravleba

function multiply(a, b) {
    return a * b;
}


console.log(multiply(13, 130));




// #2 asakis shemowmeba

function age (a) {
    if ( a>=18 ) {
        return "შენ ხარ სრულწლოვანი";
    } else {
        return "შენ ხარ არასრულწლოვანი";
    }
}

console.log (age(21));


// #3 ricxvi luwia tu kenti

function isEvenOrOdd(num) {
    if (num % 2 ===0) { 
    return '${num} არის ლუწი რიცხვი';
} else {
    return '${num} არის კენტი რიცხვი';
}
}
console.log (isEvenOrOdd(13));


// #4 dgeebis daasaxeleba

function getDayName(dayNumber) {
    if (dayNumber === 1 ) {
        return "ორშაბათი";
    } else if (dayNumber === 2) {
        return "სამშაბათი";
    } else if (dayNumber === 3) {
        return "ოთხშაბათი";
    } else if (dayNumber === 4) {
        return "ხუთშაბათი";
    } else if (dayNumber === 5) {
        return "პარასკევი";
    } else if (dayNumber === 6) {
        return "შაბათი";
    } else if (dayNumber === 7) {
        return "კვირა";
    } else {
        return "მიუთითე ერთიდან შვიდამდე რიცხვი";

    }
}
console.log (getDayName(13));

// #5  ricxvebis shedareba 
function compareNumbers(a, b) {
    if (a === b) {
        return "(orive ricxvi tolia";}
        else if (a > b) {
            return " pirveli metia meoreze";
    } else {
        return "meore metia pirvelze";
    }
}

console.log (compareNumbers(3, 13));

// 6.kalkulatori funqcia

function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculator(a, b, operator) {
  const result = operator(a, b);
  return "result" + result;
  return operator(a, b);
}

console.log(calculator(13, 13, divide));
console.log(calculator(31, 13, minus));
console.log(calculator(31, 31, sum));
console.log(calculator(31, 13, multiply));

// 7.temperaturis gancxadeba

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(31));

// 8.max number finder

function findMax(a, b, c) {
  if (a > b && a > c) {
    return `${a} is the highest number`;
  } else if (b > a && b > c) {
    return `${b} is the highest number`;
  } else {
    return `${c} is the highest number`;
  }
}

console.log(findMax(31, 33, 11));

// 9. num dadebiti or uaryofiti

function checkSign(num) {
  if (num > 0) {
    return `${num} რიცხვი დადებითია`;
  } else if (num === 0) {
    return `${num} ნულია`;
  } else {
    return `${num} რიცხვი უარყოფითია`;
  }
}

console.log(checkSign(77));
console.log(checkSign(0));
console.log(checkSign(-13));

// 10. if elseit tveebis dasaxeleba

function getMonthName(monthNumber) {
  if (monthNumber === 1) {
    return "იანვარი";
  } else if (monthNumber === 2) {
    return "თებერვალი";
  } else if (monthNumber === 3) {
    return "მარტი";
  } else if (monthNumber === 4) {
    return "აპრილი";
  } else if (monthNumber === 5) {
    return "მაიისი";
  } else if (monthNumber === 6) {
    return "ივნისი";
  } else if (monthNumber === 7) {
    return "ივლისი";
  } else if (monthNumber === 8) {
    return "აგვისტო";
  } else if (monthNumber === 9) {
    return "სექტემბერიი";
  } else if (monthNumber === 10) {
    return "ოქტომბერი";
  } else if (monthNumber === 11) {
    return "ნოემბერი";
  } else if (monthNumber === 12) {
    return "დეკემბერი";
  } else {
    return "ჩაწერე 1-დან 12-მდე";
  }
}

console.log(getMonthName(13));
console.log(getMonthName(3));
console.log(getMonthName(1));
console.log(getMonthName(12));

// 11.gamravlebis mnishvneloba

function muliplyGreaterThanFive(num) {
  if (num >= 5) {
    return num * 10;
  } else {
    return "რიცხვი მცირეა";
  }
}

console.log(muliplyGreaterThanFive(13));
console.log(muliplyGreaterThanFive(9));

// 12.if elseit sezonia shemowmeba

function getSeason(seasonNumber) {
  if (seasonNumber === 1) {
    return "გაზაფხული";
  } else if (seasonNumber === 2) {
    return "ზაფხული";
  } else if (seasonNumber === 3) {
    return "შემოდგომა";
  } else if (seasonNumber === 4) {
    return "ზამთარი";
  } else {
    return "ჩაწერეთ რიცხვი 1-დან 4-მდე";
  }
}

console.log(getSeason(3));
console.log(getSeason(13));
console.log(getSeason(1));
console.log(getSeason(2));

// 13.easy agricxva

function checkPrice(price) {
  if (price >= 100) {
    return "ფასი მაღალია";
  } else {
    return "ფასი ნორმალურია";
  }
}

console.log(checkPrice(130));
console.log(checkPrice(31));

// 14. if elseit math operatorebis shemowmeba

function switchCalculator(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return "არასწორი ოპერატორი";
  }
}

console.log(switchCalculator(13, 31, "*"));
console.log(switchCalculator(31, 13, "+"));
console.log(switchCalculator(77, 31, "/"));
console.log(switchCalculator(33, 9, "-"));

// 15.ricxvebis dadebiti jami

function positiveSum(a, b) {
  if (a > 0 && b > 0) {
    return a + b;
  } else {
    return "მინიმუმ ერთი რიცხვი უარყოფითია";
  }
}

console.log(positiveSum(32, -13));
console.log(positiveSum(-77, 3));