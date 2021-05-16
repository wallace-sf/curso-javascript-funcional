function textWithSizeBetween(min, max, error, text = "") {
  const size = text.trim().length;

  if (size < min || size > max) throw new Error(error);
}

const p1 = { name: "A", price: 14.99, desc: 0.25 };

textWithSizeBetween(4, 255, "Nome inválido", p1.name);
