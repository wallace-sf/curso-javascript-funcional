const { of } = require("rxjs");
const _ = require("lodash");

const { operatorWrapper } = require("./utils");

const endsWith = (text) =>
  operatorWrapper((subscriber) => {
    return {
      next: (value) => {
        if (typeof value === "string" && value.endsWith(text)) {
          subscriber.next(value);
        }
      },
      error: (error) => subscriber.error(error),
      complete: () => subscriber.complete(),
    };
  });

const contains = (text) =>
  operatorWrapper((subscriber) => {
    return {
      next: (value) => {
        if (typeof value === "string" && value.includes(text)) {
          subscriber.next(value);
        }
      },
      error: (error) => subscriber.error(error),
      complete: () => subscriber.complete(),
    };
  });

const orderBy = (order = "") =>
  operatorWrapper((subscriber) => {
    const numbers = [];

    return {
      next: (value) => {
        if (typeof value === "number") numbers.push({ value });
      },
      error: (error) => subscriber.error(error),
      complete: () => {
        _.orderBy(numbers, ["value"], order).forEach(({ value }) =>
          subscriber.next(value)
        );
        subscriber.complete();
      },
    };
  });

const observable$ = of(
  "Ana Silva",
  "Maria Silva",
  "Pedro Rocha",
  "Pedro Almeida"
);

const observable2$ = of(4, 5, 1, 2, 7, 8);

observable$.pipe(endsWith("Silva")).subscribe(console.log);
observable$.pipe(contains("Pe")).subscribe(console.log);

observable2$.pipe(orderBy("desc")).subscribe(console.log);
