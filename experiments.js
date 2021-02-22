function waitFor(time) {
  const futureTime = Date.now() + time;

  while (Date.now() < futureTime) {}

  console.log(futureTime);
}

waitFor(5000);

setTimeout(() => console.log('Exec #01'), 400);
setTimeout(() => waitFor(3000), 300);
console.log('Fim!');