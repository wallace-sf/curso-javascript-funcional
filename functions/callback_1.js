const sumOnTerminal = (valueA) => (valueB) => console.log(valueA + valueB);
const subtractOnTerminal = (valueA) => (valueB) => console.log(valueA - valueB);

const exec = (fn, valueA, valueB) => {
  fn(valueA)(valueB);
}

exec(sumOnTerminal, 56, 38);
exec(subtractOnTerminal, 182, 27);