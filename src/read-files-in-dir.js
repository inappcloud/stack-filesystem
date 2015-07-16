module.exports = {
  name: 'readFilesInDir',

  args: {
    path: {
      example: 'blog/posts/',
      required: true
    }
  },

  call: function(args, done, error) {
    var _ = require('lodash');
    var fs = require('fs');
    var path = require('path');

    var array = require('@inappcloud/stack-array');
    var filesystem = require('..');

    fs.readdir(args.path, function(err, files) {
      if (err) {
        error(err);
      } else {
        var filePaths = _.map(files, function(file) {
          return path.join(args.path, file);
        });

        array.map({}, { array: filePaths, fn: filesystem.readFile, data: 'path', output: 'readFiles' }).then(function(c) {
          done(c.readFiles);
        }).catch(function(maperr) {
          error(maperr);
        });
      }
    });
  }
};
