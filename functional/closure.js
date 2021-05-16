// Closure é quando uma função "lembra" de
// seu escopo léxico, mesmo quando a função
// é executa fora de seu escopo léxico

const out = require("./closure_scope");

const x = 1000;
console.log(out());
