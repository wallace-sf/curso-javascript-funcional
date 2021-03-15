// setTimeout(() => {
//   console.log("Executando após 2s");

//   setTimeout(() => {
//     console.log("Executando apos 3s");

//     setTimeout(() => {
//       console.log("Executando após 3s");
//     }, 3000);
//   }, 3000);
// }, 2000);

const waitFor = (timeout = 2000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Executando após ${timeout}ms`);
      resolve();
    }, timeout);
  });

waitFor(2000)
  .then(() => waitFor(3000))
  .then(() => waitFor(3000));
