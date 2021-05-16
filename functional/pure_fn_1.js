/* Uma função pura é uma função em que o valor de retorno é 
determinado APENAS por seus valores de entrada, sem efeitos
colaterais observáveis */

const PI = 3.14;

// Pura um impura?
// R: Impura - Pois a fn depende do PI que é externo
const getCircleArea = (radius) => {
  return radius ** 2 * PI;
};

// Pura
const getCircleAreaPure = (radius, pi = 3.14) => {
  return radius ** 2 * pi;
};

console.log(getCircleArea(10));
console.log(getCircleAreaPure(10, 3.141592));
console.log(getCircleAreaPure(10, Math.PI));
