const nums = [
  6,
  75,
  64,
  56,
  43,
  14,
  39,
  18,
  60,
  41,
  18,
  34,
  80,
  21,
  44,
  82,
  84,
  61,
  19,
  37,
];

const cart = [
  {
    name: "Beef - Tongue, Fresh",
    qtd: 23,
    price: 176.06,
  },
  {
    name: "Oxtail - Cut",
    qtd: 0,
    price: 176.6,
  },
  {
    name: "Bols Melon Liqueur",
    qtd: 13,
    price: 36.96,
  },
  {
    name: "Bread - Pumpernickel",
    qtd: 12,
    price: 106.02,
  },
  {
    name: "Magnotta - Bel Paese White",
    qtd: 13,
    price: 159.72,
  },
  {
    name: "Squeeze Bottle",
    qtd: 8,
    price: 77.67,
  },
  {
    name: "Pasta - Orzo, Dry",
    qtd: 17,
    price: 59.28,
  },
  {
    name: "Nut - Pistachio, Shelled",
    qtd: 5,
    price: 121.72,
  },
  {
    name: "Plastic Arrow Stir Stick",
    qtd: 25,
    price: 131.98,
  },
  {
    name: "Bandage - Fexible 1x3",
    qtd: 16,
    price: 178.49,
  },
];

// Defining custom array prototype functions

Array.prototype.myReduce = function (callback, initialValue) {
  const doesInitialValueExists = initialValue !== undefined;
  let reduceResult = doesInitialValueExists ? initialValue : this[0];

  for (let i = doesInitialValueExists ? 0 : 1; i < this.length; i++) {
    const element = this[i];
    const currentResult = callback(reduceResult, element, i, this);

    reduceResult = currentResult;
  }

  return reduceResult;
};

const getSum = (acc, num) => acc + num;
const getTotal = (acc, product) => product.qtd * product.price + acc;
const toObjValues = (acc, num) => {
  acc[`${num}`] = num;

  return acc;
};

console.log(nums.reduce(getSum));
console.log(nums.myReduce(getSum));
console.log(cart.reduce(getTotal));
console.log(cart.myReduce(getTotal));
console.log(nums.reduce(toObjValues, {}));
console.log(nums.myReduce(toObjValues, {}));
