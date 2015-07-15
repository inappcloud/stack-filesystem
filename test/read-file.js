var assert = require('assert');
var test = require('mocha').test;
var filesystem = require('..');

var testCases = [
  {
    name: 'readFile',
    args: { file: 'test/fixture.txt', output: 'file' },
    output: 'Hello World!'
  },
  {
    name: 'readFile#no-args',
    args: {},
    output: 'error'
  }
];

testCases.forEach(function(testCase) {
  test(testCase.name, function(done) {
    filesystem.readFile({}, testCase.args).then(function(ctx) {
      if (testCase.output !== 'error') {
        assert.equal(ctx[testCase.args.output], testCase.output);
        done();
      } else {
        done(new Error('Function should have returned an error'));
      }
    }).catch(function(ctx) {
      if (testCase.output === 'error') {
        done();
      } else {
        done(ctx.error);
      }
    });
  });
});
