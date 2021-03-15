/**
 * @param {number} min
 * @param {number} max
 * @return {Promise}
 */
const getNumbersBetween = (min, max) => {
  if (min > max) [min, max] = [max, min];

  return new Promise((resolve) => {
    const factor = max - min + 1;
    const portionFactor = Math.random() * factor;
    const randomNumber = Math.trunc(portionFactor) + min;

    resolve(randomNumber);
  });
};

getNumbersBetween(0, 10).then(console.log);
