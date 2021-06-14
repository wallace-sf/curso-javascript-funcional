// Desafio
// Criar um stream de números entre um valor mínimo e máximo com Observable
const { Observable } = require("rxjs");

const getNumbersBetweenRange = (min, max) =>
  [...Array(max - min + 1).keys()].map((i) => i + min);

const nums$ = (min, max, ms) => {
  return new Observable((subscriber) => {
    if (min > max) return subscriber.error("Min is greather than the maximum.");

    const numbersBetweenRange = getNumbersBetweenRange(min, max);
    let currentNumber = numbersBetweenRange[0];
    let intervalId;

    intervalId = setInterval(() => {
      subscriber.next(currentNumber);
      currentNumber++;

      if (currentNumber > max) {
        clearInterval(intervalId);
        subscriber.complete();
      }
    }, ms);
  });
};

nums$(4, 5, 1000).subscribe(console.log);
