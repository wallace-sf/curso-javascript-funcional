const fs = require("fs");
const path = require("path");
const ld = require("lodash");

// regex
const STR_FORMAT = /^.*\.(srt)$/gi;
const WORD_ONLY = /(?<!(<\/))((?<!(\s<))(\b([a-zA-Z'])+\b))/gi;

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

const readAllStrFiles = (pathSubtitles, fileNames = []) => {
  const readFilesPromises = fileNames.map((filename) => {
    const filePath = path.join(pathSubtitles, filename);

    return new Promise((resolve, reject) => {
      readFilePromised(filePath).then(resolve).catch(reject);
    });
  });

  return readFilesPromises;
};

// get

const getStrFiles = (filesNameArr = []) =>
  filesNameArr.filter((fileName) => !!fileName.match(STR_FORMAT));

const getWordsOnly = (stringArr = []) =>
  stringArr.map((text) => text.match(WORD_ONLY));

// map
const mapWordInObj = (wordsOnlyArr = []) =>
  wordsOnlyArr.map((word) => ({ word }));

const groupByWord = (arrWordInObj = []) =>
  ld
    .values(ld.groupBy(arrWordInObj, "word"))
    .map((group) => ({ ...group[0], qty: group.length }));

// to
const toStringArr = (arr = []) => arr.map((text) => text.toString());
const toLowerCaseArr = (arr = []) => arr.map((text = "") => text.toLowerCase());
const toCapitalizeWordArr = (arr = []) =>
  arr.map((el) => ({ ...el, word: ld.capitalize(el.word) }));

module.exports = {
  readDirPromised,
  getStrFiles,
  readAllStrFiles,
  toStringArr,
  getWordsOnly,
  toLowerCaseArr,
  mapWordInObj,
  groupByWord,
  toCapitalizeWordArr,
};
