function numbersGenerator() {
  return {
    init: (callback, ms) => {
      let num = 0;
      const intervalId = setInterval(() => callback(num++), ms);

      return {
        stop: () => {
          if (intervalId) clearInterval(intervalId);
        },
      };
    },
  };
}

const numGentrInstance = numbersGenerator();

const init_01_instance = numGentrInstance.init(
  (num) => console.log(`1.1 ${num * 2}`),
  1000
);

const init_02_instance = numGentrInstance.init(
  (num) => console.log(`1.2 ${num * 2}`),
  2000
);

setTimeout(() => {
  init_01_instance.stop();
}, 10000);

setTimeout(() => {
  init_02_instance.stop();
}, 15000);
