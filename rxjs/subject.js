const { Observable, Subject } = require("rxjs");

// A mensagem do subject é disparada apenas uma vez, enquanto que do Observable
// toda vez que o subscribe é chamado.

const getObservable = () => {
  return new Observable((subscriber) => {
    setTimeout(() => {
      console.log("#1 Obs...");
      subscriber.next(parseInt(Math.random() * 10));
      subscriber.complete;
    }, 1000);
  });
};

const getSubject = () => {
  const sub = new Subject();

  setTimeout(() => {
    console.log("#1 Sub...");
    sub.next(parseInt(Math.random() * 10));
  }, 1000);

  return sub;
};

const observable$ = getObservable();
const subject$ = getSubject();

observable$.subscribe(console.log);
observable$.subscribe(console.log);

subject$.subscribe(console.log);
subject$.subscribe(console.log);
