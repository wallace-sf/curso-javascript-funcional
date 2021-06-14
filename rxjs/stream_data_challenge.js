// Desafio

function dataDispatcher(dataArr = []) {
  return {
    init: (callback, ms = 1000) => {
      let intervalId;
      let currentIndex = 0;

      const intervalCb = () => {
        callback(dataArr[currentIndex]);
        currentIndex++;

        if (currentIndex + 1 > dataArr.length) clearInterval(intervalId);
      };

      if (dataArr.length) {
        intervalId = setInterval(intervalCb, ms);
      }

      return {
        stop: () => {
          if (intervalId) clearInterval(intervalId);
        },
      };
    },
  };
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const names = ["Ana", "Bia", "Carlos", "Anderson", "Clarice", "Adão", "Maxuela"];

const subscription = dataDispatcher(numbers).init(console.log, 1000);
setTimeout(() => subscription.stop(), 4000);

dataDispatcher(names).init(console.log);
