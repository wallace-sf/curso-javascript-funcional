const isPromise = (value) => Promise.resolve(value) === value;
const composition =
  (...fns) =>
  (value) =>
    fns.reduce(
      async (acc, fn) => (isPromise(acc) ? fn(await acc) : fn(acc)),
      value
    );

const scream = (text = "") =>
  new Promise((resolve) => resolve(text.toUpperCase()));
const emphasize = (text = "") => `${text}!!!`;
const slower = (text = "") => text.split(/(?=\w)(?<=\w)/g).join(" ");

const composedResult = composition(scream, emphasize, slower);
const pipedWordStop = composedResult("para");
const pipedPhraseAttention = composedResult("Cuidado com o buraco");

pipedWordStop.then(console.log);
pipedPhraseAttention.then(console.log);
