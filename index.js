var pkg = require('@inappcloud/stack').pkg;
var readFile = require('./src/read-file');
var readFilesInDir = require('./src/read-files-in-dir');

module.exports = pkg([readFile, readFilesInDir]);
