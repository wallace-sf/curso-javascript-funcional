const sum = (a, b) => {
  return a + b;
}

const mult = (a, b) => {
  return a * b;
}

const div = (a, b) => {
  return a / b;
}

const sub = (a, b) => {
  return a - b;
}

const calculate = (a) => {
  return (b) => {
    return (fn) => {
      return fn(a , b);
    }
  }
}

const calculateSum = calculate(15)(35)(sum);
const calculateMult = calculate(15)(35)(mult);
const calculateDiv = calculate(15)(35)(div);
const calculateSub = calculate(15)(35)(sub);
console.log(
  calculateSum,
  calculateMult,
  calculateDiv,
  calculateSub
);