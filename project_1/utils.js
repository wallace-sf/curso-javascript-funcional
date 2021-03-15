const fs = require("fs");

// regex
const srtFormat = /^.*\.(srt)$/gi;

// common
const readFilePromised = (path, options = {}) => {
  return new Promise((resolve, reject) => {
    const readFileCb = (err, data) => (err ? reject(err) : resolve(data));

    fs.readFile(path, options, readFileCb);
  });
};

const readDirPromised = (path, options = {}) => {
  return new Promise((resolve, reject) => {
    const readDirCb = (err, files) => (err ? reject(err) : resolve(files));

    fs.readdir(path, options, readDirCb);
  });
};

module.exports = {
  readFilePromised,
  readDirPromised,
  srtFormat,
};
