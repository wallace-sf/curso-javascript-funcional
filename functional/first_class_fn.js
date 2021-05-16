/* Diz-se que uma linguagem de programação
possui funções de primeira classe quando
funções nessa linguagem são tratadas
como qualquer outra variável */

const x = 3;
const y = function (txt) {
  return `${txt}`;
};
const z = () => console.log("Hello world again!");

console.log(x);
console.log(y("Hello World"));
z();
