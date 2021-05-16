const textWithSizeBetween = (min) => (max) => (error = "") => (text = "") => {
  // Lazy Evaluation

  const size = text.trim().length;

  if (size < min || size > max) throw new Error(error);
};

const applyValidation = (fn) => (value) => {
  // Lazy Evaluation
  try {
    return fn(value);
  } catch (err) {
    return err.message;
  }
};

const forceDefaultSize = textWithSizeBetween(4)(255);
const forceNameValidProduct = forceDefaultSize("Nome produto inválido");
const isValidProductName = applyValidation(forceNameValidProduct);

const p1 = { name: "A", price: 14.99, desc: 0.25 };
const p2 = { name: "B", price: 7.99, desc: 0.1 };

console.log(isValidProductName(p1.name));
console.log(isValidProductName(p2.name));
