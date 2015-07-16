var pkg = require('@inappcloud/stack').pkg;
var readFile = require('./src/read-file');
var readFilesInDir = require('./src/read-files-in-dir');
var writeFile = require('./src/write-file');
var writeJson = require('./src/write-json');

module.exports = pkg([readFile, readFilesInDir, writeFile, writeJson]);
