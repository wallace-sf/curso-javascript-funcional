const { from } = require("rxjs");

const { operatorWrapper } = require("./utils");

const first = operatorWrapper((subscriber) => {
  return {
    next: (value) => {
      subscriber.next(value * 1000);
      subscriber.complete();
    },
    error: (error) => subscriber.error(error),
    complete: () => subscriber.complete(),
  };
});

const last = operatorWrapper((subscriber) => {
  const sourceValues = [];

  return {
    next: (value) => sourceValues.push(value),
    error: (error) => subscriber.error(error),
    complete: () => {
      subscriber.next(sourceValues.pop());
      subscriber.complete();
    },
  };
});

const observable$ = from([0, 1, 2, 3, 4, 5, 6, 7, 8]).pipe(first, last);

observable$.subscribe(console.log);
observable$.subscribe(console.log);
