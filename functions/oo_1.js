function Produto(name, price, discount = 0.15) {
  this.name = name;
  this.price = price;
  this.discount = discount;

  this.getLiquidPrice = function () {
    return this.price - this.price * this.discount;
  };
}

const p1 = new Produto("Caneta", 8.59);
const p2 = new Produto("Geladeira", 2000, 0.1);

console.log(p1);
console.log(p2);
console.log(p2.getLiquidPrice());
