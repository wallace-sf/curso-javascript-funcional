// Existem dois tipos de operadores:
// 1. De criação
// 2. Encadeáveis (Pipeable operators)

const { of } = require("rxjs"); // 1
const { last, map } = require("rxjs/operators"); // 2

of(1, 2, 3, 4, 5, 6, 7, 8, 9)
  .pipe(
    map((value) => value * 2),
    last()
  )
  .subscribe((value) => console.log(`O valor gerado foi ${value}`));
