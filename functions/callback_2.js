const fs = require("fs");
const path = require("path");

const textPath = path.join(__dirname, "data.txt");

const readTextFileCb = (err, data) =>
  err ? console.log(err) : console.log(data.toString());

console.log("Start...");
fs.readFile(textPath, {}, readTextFileCb);
console.log("End...");

console.log("Start Sync");

const data = fs.readFileSync(textPath);

console.log(data.toString());
console.log("End Sync...");
