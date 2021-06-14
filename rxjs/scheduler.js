const { from, asyncScheduler } = require("rxjs");

// O processamento do método from se torna assíncrono

console.log("Antes...");

from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], asyncScheduler).subscribe(console.log);

console.log("Depois...");
