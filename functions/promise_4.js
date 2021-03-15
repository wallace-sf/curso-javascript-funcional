/**
 * @param {number} min
 * @param {number} max
 * @param {number} timeout - ms
 * @return {Promise<number>}
 */
const getNumbersBetween = (min, max, timeout) => {
  if (min > max) [min, max] = [max, min];

  return new Promise((resolve) => {
    setTimeout(() => {
      const factor = max - min + 1;
      const portionFactor = Math.random() * factor;
      const randomNumber = Math.trunc(portionFactor) + min;

      resolve(randomNumber);
    }, timeout);
  });
};

console.time("promise");

/**
 * @return {Promise<Array<number>>}
 */
const getMultipleRandomNumbers = () => {
  return Promise.all([
    getNumbersBetween(1, 60, 4000),
    getNumbersBetween(1, 60, 1000),
    getNumbersBetween(1, 60, 500),
    getNumbersBetween(1, 60, 300),
    getNumbersBetween(1, 60, 100),
    getNumbersBetween(1, 60, 1500),
  ]);
};

getMultipleRandomNumbers().then((numberArr) => {
  console.log(numberArr);
  console.timeEnd("promise");
});
