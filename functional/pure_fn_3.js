/* Uma função pura é uma função em que o valor de retorno é 
determinado APENAS por seus valores de entrada, sem efeitos
colaterais observáveis */

let amountExecution = 0;

Math

// Pura
function sum(a, b) {
  amountExecution++;

  return a + b;
}

console.log(sum(68, 31));
console.log(sum(68, 31));
console.log(sum(68, 31));
console.log(sum(68, 31));
console.log(sum(68, 31));
console.log(amountExecution);
