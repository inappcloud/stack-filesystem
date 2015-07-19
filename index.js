var fn = require('@inappcloud/stack').fn;
var readFile = require('./src/read-file');
var readFilesInDir = require('./src/read-files-in-dir');
var writeFile = require('./src/write-file');
var writeJson = require('./src/write-json');

module.exports = {
  readFile: fn(readFile),
  readFilesInDir: fn(readFilesInDir),
  writeFile: fn(writeFile),
  writeJson: fn(writeJson)
};
