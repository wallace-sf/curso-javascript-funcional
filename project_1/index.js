const path = require("path");

const {
  readDirPromised,
  getStrFiles,
  readAllStrFiles,
  toStringArr,
  getWordsOnly,
  toLowerCaseArr,
  mapWordInObj,
  groupByWord,
  toCapitalizeWordArr,
} = require("./utils");

const pathSubtitles = path.join(__dirname, "../data/legendas");

readDirPromised(pathSubtitles)
  .then(getStrFiles)
  .then(strFiles => readAllStrFiles(pathSubtitles, strFiles))
  .then((readFilesPromises) => Promise.all(readFilesPromises))
  .then(toStringArr)
  .then(getWordsOnly)
  .then((wordsOnly) => wordsOnly.flat())
  .then(toLowerCaseArr)
  .then(mapWordInObj)
  .then(groupByWord)
  .then(toCapitalizeWordArr)
  .then(console.log)
  .catch(console.log);
