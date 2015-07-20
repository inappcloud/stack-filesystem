var testCases = [
  {
    name: 'writeFile',
    args: { path: 'test/fixtures/fixture99.txt', data: 'Hello World!' },
    output: null
  },
  {
    name: 'writeFile#no-args',
    args: {},
    output: 'error'
  }
];

require('@inappcloud/stack-test').runTests(require('..').writeFile, testCases, function(testCase) {
  require('fs').unlinkSync(testCase.args.path);
});
