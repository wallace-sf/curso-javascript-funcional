class Product {
  constructor(name = "", price = 0, discount = 0.15) {
    this._name = name;
    this._price = price;
    this.discount = discount;
  }

  get name() {
    return `Descrição ${this._name}`;
  }

  set name(name) {
    this._name = name.toUpperCase();
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price >= 0 ? price : this._price;
  }

  getLiquidPrice() {
    return this._price - this._price * this.discount;
  }
}

const p1 = new Product("Caneta", 10, 0.5);
const p2 = new Product("Geladeira", 3000, 0.8);

p1.name = "caneta";
p1.price = -20;

console.log(p1, p1.name, p1.getLiquidPrice());
console.log(p2, p2.name, p2.getLiquidPrice());
