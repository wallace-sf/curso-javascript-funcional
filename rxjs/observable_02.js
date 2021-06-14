const { Observable } = require("rxjs");
const { last } = require("rxjs/operators");

const obs$ = new Observable((subscriber) => {
  subscriber.next("RxJS");
  subscriber.next("é");
  subscriber.next("bem");
  subscriber.next("poderoso!");

  if (Math.random() >= 0.5) {
    subscriber.complete();
  } else {
    subscriber.error("The listener went wrong.");
  }
});

obs$.pipe(last()).subscribe({
  next: (value) => console.log(`Valor: ${value}`),
  error: (msg) => console.log(`Err: ${msg}`),
  complete: () => console.log("The subscription has ended."),
});
