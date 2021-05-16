const composition =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

const scream = (text = "") => text.toUpperCase();
const emphasize = (text = "") => `${text}!!!`;
const slower = (text = "") => text.split(/(?=\w)(?<=\w)/g).join(" ");

const composedResult = composition(scream, emphasize, slower);
const pipedWordStop = composedResult("para");
const pipedPhraseAttention = composedResult("Cuidado com o buraco");

console.log(pipedWordStop);
console.log(pipedPhraseAttention);
