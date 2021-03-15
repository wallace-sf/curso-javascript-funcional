/**
 * @param {any} value
 * @param {number} chanceErr
 */
const solveByChance = (value, chanceErr) => {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErr) throw new Error("Promise rejected!");

      resolve(value);
    } catch (error) {
      reject(error);
    }
  });
};

solveByChance("Promise resolve", 0.8).then(console.log).catch(console.log);
