var assert = require('assert');
var test = require('mocha').test;
var filesystem = require('..');
var _ = require('lodash');

var testCases = [
  {
    name: 'readFilesInDir',
    args: { path: 'test/fixtures', output: 'files' },
    output: ['Hello World!\n', 'Foobar\n']
  },
  {
    name: 'readFilesInDir#no-args',
    args: {},
    output: 'error'
  }
];

testCases.forEach(function(testCase) {
  test(testCase.name, function(done) {
    filesystem.readFilesInDir({}, testCase.args).then(function(ctx) {
      if (testCase.output !== 'error') {
        assert.ok(_.isEqual(ctx[testCase.args.output], testCase.output), 'expected: ' + testCase.output + ', got: ' + ctx[testCase.args.output]);
        done();
      } else {
        done(new Error('Function should have returned an error'));
      }
    }).catch(function(ctx) {
      if (testCase.output === 'error') {
        done();
      } else {
        done(ctx.error || ctx);
      }
    });
  });
});
