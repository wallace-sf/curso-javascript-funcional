// Functors são objetos que implementa a função MAP
// que também é um "wrapper" de um valor

// Array é um exemplo de functors
const nums = [1, 2, 3, 4, 5, 6];
const mappedNums = nums.map((el) => el + 10).map((el) => el * 2);

// Exemplo de functor
function TypeSafe(value) {
  return {
    value,
    isParamFunction(fn) {
      return typeof fn === "function";
    },
    map(fn) {
      if (!this.isParamFunction(fn)) {
        throw new Error(`${typeof fn} is not a function.`);
      }

      const newValue = fn(this.value);
      return TypeSafe(newValue);
    },
    flatMap(fn) {
      return this.map(fn).value;
    },
  };
}

const mappedValue = TypeSafe("x")
  .map((text = "") => text.toUpperCase())
  .map((text = "") => `${text}!!!`)
  .flatMap((text = "") => text.split("").join(" "));

console.log(mappedValue);
