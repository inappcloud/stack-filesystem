var testCases = [
  {
    name: 'readFilesInDir',
    args: { path: 'test/fixtures' },
    output: ['Hello World!\n', 'Foobar\n']
  },
  {
    name: 'readFilesInDir#no-args',
    args: {},
    output: 'error'
  }
];

require('./util').runTests(require('..').readFilesInDir, testCases);
