module.exports = {
  name: 'readFile',

  args: {
    path: {
      example: '_posts/hello-world.txt',
      required: true
    }
  },

  call: function(args, done) {
    var fs = require('fs');

    fs.readFile(args.path, 'utf8', function(err, data) {
      if (err) {
        done(err);
      } else {
        done(data);
      }
    });
  }
};
