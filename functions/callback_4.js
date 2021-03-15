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

const isQtdGreaterThanTen = (item) => item.qtd > 10;
const getProductName = (item) => item.name;

const productsNamesWithPriceGreaterThanTen = cart
  .filter(isQtdGreaterThanTen)
  .map(getProductName);

// console.log(productsNamesWithPriceGreaterThanZero);

// Defining custom array prototype functions

Array.prototype.myFilter = function (callback) {
  const filteredArr = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const currentResult = callback(element, i, this);

    if (currentResult) {
      filteredArr.push(element);
    }
  }

  return filteredArr;
};

console.log(cart.myFilter(isQtdGreaterThanTen));
