// arrow function
const sayMerryChristmas = () => console.log('Feliz Natal!!!');

sayMerryChristmas();

const salutation = (name) => `Fala ${name} !!!`;

console.log(salutation('Wallace'));

const sum = (nums) => {
  let total = 0;

  for (let i of nums) {
    total += i;
  }

  return total;
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10]));

const power = (base) => (exp) => Math.pow(base, exp);
  
const powerResult = power(2)(3);

// this
Array.prototype.lastElement = function () {
  console.log(this[this.length - 1]);
}

Array.prototype.firstElement = function () {
  console.log(this[0]);
}

const nums = [0, 1, 2, 3, 4];

nums.lastElement();
nums.firstElement();