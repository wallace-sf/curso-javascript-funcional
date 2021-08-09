const { Observable } = require("rxjs");
const fs = require("fs");

const DEFAULT_OPTIONS = {
  encoding: "utf-8",
};

const writeFile =
  (path, options = DEFAULT_OPTIONS) =>
  (data) => {
    console.log(data);
    fs.writeFile(path, JSON.stringify(data), options, (err) => {
      if (err) return console.error(err);
    });
  };

module.exports = { writeFile };
