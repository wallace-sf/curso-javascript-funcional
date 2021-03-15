const path = require("path");

const { readFilePromised, readDirPromised, srtFormat } = require("./utils");

const pathSubtitles = path.join(__dirname, "../data/legendas");

const getStrFiles = (filesNameArr = []) =>
  filesNameArr.filter((fileName) => !!fileName.match(srtFormat));

const toStringArr = (arr = []) => arr.map((el) => el.toString());

const readAllStrFiles = (dirPath, fileNames = []) => {
  const readFilesPromises = fileNames.map((filename) => {
    const filePath = path.join(dirPath, filename);

    return new Promise((resolve, reject) => {
      readFilePromised(filePath).then(resolve).catch(reject);
    });
  });

  return readFilesPromises;
};

readDirPromised(pathSubtitles)
  .then((files) => getStrFiles(files))
  .then((fileNames) => readAllStrFiles(pathSubtitles, fileNames))
  .then((readFilesPromises) => Promise.all(readFilesPromises))
  .then((subtitlesArr) => toStringArr(subtitlesArr))
  .catch(console.log);
