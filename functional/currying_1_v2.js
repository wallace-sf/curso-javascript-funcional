const textWithSizeBetween = (min) => (max) => (error = "") => (text = "") => {
  // Lazy Evaluation

  const size = text.trim().length;

  if (size < min || size > max) throw new Error(error);
};

const forceDefaultSize = textWithSizeBetween(4)(255);
const forceNameValidProduct = forceDefaultSize("Nome produto inválido");

const p1 = { name: "A", price: 14.99, desc: 0.25 };

forceNameValidProduct(p1.name);
