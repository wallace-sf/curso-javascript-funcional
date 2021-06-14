const { of } = require("rxjs");

const { operatorWrapper } = require("./utils");

const delay = (timeout = 1000) =>
  operatorWrapper((subscriber) => {
    const values = [];

    return {
      next: (value) => values.push(value),
      error: (error) => subscriber.error(error),
      complete: () =>
        values.forEach((value, idx) =>
          setTimeout(() => {
            subscriber.next(value);
            if (idx + 1 === values.length) subscriber.complete();
          }, (idx + 1) * timeout)
        ),
    };
  });

of(1, 2, 3, 4, 5).pipe(delay(2000)).subscribe(console.log);
