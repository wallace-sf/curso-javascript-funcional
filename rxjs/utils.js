const { Observable } = require("rxjs");

const operatorWrapper = (observerCb) => (source) =>
  new Observable((subscriber) => source.subscribe(observerCb(subscriber)));

module.exports = {
  operatorWrapper,
};
