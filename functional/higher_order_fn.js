/* Funções que operam em outras funções,
tomando-as como argumento ou retornando-as, são chamadas de higher-order 
functions */

function execute(fn, ...rest) {
  const r = fn(...rest);

  return (text) => `${text}: ${r}`;
}

function sum(a, b, c) {
  return a + b + c;
}

function multi(a, b) {
  return a * b;
}

console.log(execute(sum, 4, 5, 6)("Resultado"));
console.log(execute(multi, 4, 5)("Resultado"));
