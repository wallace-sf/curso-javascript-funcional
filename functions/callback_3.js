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

const names = [
  "Jenna",
  "Arne",
  "Kathe",
  "Glenine",
  "Phillipe",
  "Steffi",
  "Leann",
  "Lorri",
  "Angus",
  "Tully",
  "Von",
  "Karel",
  "Norean",
  "Lynette",
  "Shaun",
  "Gifford",
  "Arri",
  "Donella",
  "Danyelle",
  "Butch",
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

const toFormattedValue = (num, idx, arr) => num * 2 + idx + arr.length;
const getFirstLetter = (text) => Array.from(text).shift();
const getProductName = (product) => product.name;
const getProductTotal = ({ qtd, price }) => qtd * price;

const formattedValues = nums.map(toFormattedValue);
const namesFirstLetter = names.map(getFirstLetter);
const productsInCartNames = cart.map(getProductName);
const allProductsTotals = cart.map(getProductTotal);

// console.log(formattedValues);
// console.log(namesFirstLetter);
// console.log(productsInCartNames);
// console.log(allProductsTotals);

// Defining custom array prototype functions

Array.prototype.myMap = function (callback) {
  const mappedArr = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const mappedElement = callback(element, i, this);

    mappedArr[i] = mappedElement;
  }

  return mappedArr;
};

console.log(cart.myMap(getProductTotal));
