const { Observable } = require("rxjs");

const promiseExample = new Promise((resolve) => {
  /**
   * Resolves only once.
   */
  resolve("Promise is resolved");
  resolve("Promise is resolved");
});

promiseExample.then(console.log);

const observerExample = new Observable((subscriber) => {
  subscriber.next("Message");
  setTimeout(() => subscriber.next("Arrived"), 2000);
  subscriber.complete();
});

observerExample.subscribe(console.log);
