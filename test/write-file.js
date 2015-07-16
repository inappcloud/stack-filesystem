var assert = require('assert');
var test = require('mocha').test;
var filesystem = require('..');
var fs = require('fs');

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

testCases.forEach(function(testCase) {
  test(testCase.name, function(done) {
    filesystem.writeFile({}, testCase.args).then(function(ctx) {
      if (testCase.output !== 'error') {
        if (testCase !== null) {
          assert.equal(ctx[testCase.args.output], testCase.output);
        }
        fs.unlinkSync(testCase.args.path);
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
