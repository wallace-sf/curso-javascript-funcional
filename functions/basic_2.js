function sayGoodMorning() {
  console.log('Good morning');
}

const sayGoodAfternoon = () => {
  console.log('Good afternoon');
}

function executeAny(fn) {
  if (typeof fn === 'function') {
    fn();
  }
}

executeAny(3);
executeAny(sayGoodMorning);
executeAny(sayGoodAfternoon);

// 2) Returns a function
function power(base) {
  return (exp) => {
    return Math.pow(base, exp);
  }
}

const powerResult = power(2)(3);
console.log(powerResult);