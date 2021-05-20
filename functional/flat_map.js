const nestedLetters = [
  ["O", "l", "á"],
  [" "],
  ["m", ["u", ["n"]], "d", "o"],
  ["!", "!", "!"],
];

const flattedLetters = nestedLetters.flat(Infinity);

const result = flattedLetters.flatMap((l) => [l, ""]).join('');

console.log(result);
