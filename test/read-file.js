var testCases = [
  {
    name: 'readFile',
    args: { path: 'test/fixtures/fixture.txt' },
    output: 'Hello World!\n'
  },
  {
    name: 'readFile#no-args',
    args: {},
    output: 'error'
  }
];

require('@inappcloud/stack-test').runTests(require('..').readFile, testCases);
