const fs = require("fs");

const writeFile =
  (path, options = {}) =>
  (data) => {
    fs.writeFile(path, JSON.stringify(data), options, (err) => {
      if (err) console.error(err);
    });
  };

module.exports = { writeFile };
