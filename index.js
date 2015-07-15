var pkg = require('@inappcloud/stack').pkg;
var readFile = require('./src/read-file');

module.exports = pkg([readFile]);
