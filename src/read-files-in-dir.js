module.exports = {
  name: 'readFilesInDir',

  args: {
    path: {
      example: 'blog/posts/',
      required: true
    }
  },

  call: function(args, done) {
    var fs = require('fs');
    var path = require('path');

    var map = require('@inappcloud/stack-array').map;
    var readFile = require('..').readFile;

    fs.readdir(args.path, function(err, files) {
      if (err) {
        done(err);
      } else {
        var filePaths = files.map(function(file) {
          return path.join(args.path, file);
        });

        map({ array: filePaths, fn: function(x) { return readFile({ path: x }); } }).then(function(v) {
          done(v);
        }).catch(function(e) {
          done(e);
        });
      }
    });
  }
};
