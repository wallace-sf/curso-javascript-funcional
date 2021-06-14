const { interval, from } = require("rxjs");

const numbers = interval(1000);

const numbersSubscription_01 = numbers.subscribe((x) =>
  console.log(`Sub 01 ${x}`)
);
const numbersSubscription_02 = numbers.subscribe((x) =>
  console.log(`Sub 02: ${x}`)
);

setTimeout(() => numbersSubscription_01.unsubscribe(), 4000);
setTimeout(() => numbersSubscription_02.unsubscribe(), 6000);

from([1, 2, 3, 4, 5, 6, 7, 8, 9]).subscribe(console.log);
