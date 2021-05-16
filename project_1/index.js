const path = require("path");

const {
  readDirPromised,
  getStrFiles,
  readAllFiles,
  writeFilePromised,
  removeSubStrFromStr,
  removeElementsIfEmpty,
  removeElementsIfIncludes,
  removeIfOnlyNumbers,
  toStringArr,
  toSplittedStr,
  getWordsOnly,
  toCapitalizedArr,
  toJoinedArrays,
  mapWordInObj,
  groupByWord,
  orderByQty,
  toFlattedArr,
  composition,
} = require("./utils");

const pathSubtitles = path.join(__dirname, "../data/legendas");
const pathWriteFileSubstitle = path.join(__dirname, "word_counter_bb99.json");

const composedResult = composition(
  readDirPromised,
  getStrFiles,
  readAllFiles(pathSubtitles),
  toStringArr,
  toJoinedArrays,
  removeSubStrFromStr(["<i>", "</i>", "\r"]),
  toSplittedStr("\n"),
  removeElementsIfEmpty,
  removeElementsIfIncludes(["-->", "<font", "</font>"]),
  removeIfOnlyNumbers,
  getWordsOnly,
  toFlattedArr,
  removeElementsIfEmpty,
  toCapitalizedArr,
  mapWordInObj,
  groupByWord,
  orderByQty,
  writeFilePromised(pathWriteFileSubstitle)
);

composedResult(pathSubtitles);
