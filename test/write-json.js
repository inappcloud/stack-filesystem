var testCases = [
  {
    name: 'writeJson',
    args: { path: 'test/fixtures/fixture98.txt', data: { foo: 'foobar' } },
    output: null
  },
  {
    name: 'writeJson#no-args',
    args: {},
    output: 'error'
  }
];

require('@inappcloud/stack-test').runTests(require('..').writeJson, testCases, function(testCase) {
  require('fs').unlinkSync(testCase.args.path);
});
