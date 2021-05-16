const nums = [45, 15, 5, 84, 12, 56];

// Mutable and imperative code
// let total = 0;

// for (let i = 0; i < nums.length; i++) {
//   total += nums[i];
// }

// console.log(total);

// Código declarativo
// sum e reduce são funções puras
const sum = (a, b) => a + b;
const total = nums.reduce(sum);

console.log(total);
