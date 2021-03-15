const fs = require("fs");
const path = require("path");

const readFileText = (filePath, options = {}) => {
  return new Promise((resolve, reject) => {
    const readTextFileCb = (err, data) =>
      err ? reject(err) : resolve(data.toString());

    fs.readFile(filePath, options, readTextFileCb);
  });
};

const dataPath = path.join(__dirname, "data.txt");

readFileText(dataPath).then(console.log).catch(console.log);
