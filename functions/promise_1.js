const promise = new Promise((resolve, reject) => {
  resolve(["Ana", "Carlos", "Bia", "Daniel"]);
});

const getFirstElement = (arr = []) => arr[0];
const getFirstLetter = (string = "") => string[0];
const toTiny = (text = "") => text.toLowerCase();

console.log(typeof promise);

promise
  .then(getFirstElement)
  .then(getFirstLetter)
  .then(toTiny)
  .then(console.log);
