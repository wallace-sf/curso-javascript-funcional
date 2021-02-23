let a = 4;
console.log(a);

// Function Declaration
function sayGoodMorning() {
  console.log('Bom dia!');
}

sayGoodMorning();

// Function Expression
const sayGoodAfternoon = () => {
  console.log('Good afternoon');
}

sayGoodAfternoon();

function sum(a, b) {
  return a + b;
}

const resultCase1 = sum(3, 4, 5, 6, 7);
const resultCase2 = sum(3);

console.log(resultCase1);
console.log(resultCase2);