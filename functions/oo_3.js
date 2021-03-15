function Produto(name, price, discount = 0.15) {
  this.name = name;
  this.price = price;
  this._discount = discount;

  this.getLiquidPrice = function () {
    return this.price - this.price * this._discount;
  };
}

Produto.prototype.log = function () {
  console.log(`Name/price: ${this.name}/${this.price}`);
};

const p1 = new Produto("Caneta", 8.59);
const p2 = new Produto("Geladeira", 2000, 0.1);

Object.defineProperty(Produto.prototype, "discount", {
  set(discount) {
    this._discount = discount >= 0 && discount <= 1 ? discount : this._discount;
  },
  get() {
    return this._discount;
  },
});

p1.discount = 0.5;

console.log(p1, p1.getLiquidPrice(), p1.discount);
p1.log();

console.log(p2, p2.getLiquidPrice());
