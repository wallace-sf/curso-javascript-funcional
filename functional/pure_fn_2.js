const getRandomNumbersBetween = (min, max) => {
  const factor = max - min + 1;

  return parseInt(Math.random() * factor) + min;
};

console.log(getRandomNumbersBetween(5, 6));
console.log(getRandomNumbersBetween(5, 6));
console.log(getRandomNumbersBetween(5, 6));
console.log(getRandomNumbersBetween(5, 6));
