// Encontrar um operador na lib rxjs que seja capaz de:
// 1. Aguardar 3000ms;
// 2. Gerar números a cada 500ms;
// 3. Após de 10000ms desinscrever-se da subscription.
const { timer, Subscription } = require("rxjs");

const timer10s$ = timer(10000);
const timer3s$ = timer(3000, 500);

const subscription = timer3s$.subscribe((number) =>
  console.log(`#1 Gerou o número: ${number}`)
);
const subscription2 = timer3s$.subscribe((number) =>
  console.log(`#2 Gerou o número: ${number}`)
);

const mainSubscription = new Subscription();
mainSubscription.add(subscription);
mainSubscription.add(subscription2);

timer10s$.subscribe({ complete: () => mainSubscription.unsubscribe() });
