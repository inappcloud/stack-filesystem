module.exports = {
  name: 'readFile',

  args: {
    file: {
      example: '_posts/hello-world.txt',
      required: true
    }
  },

  call: function(args, done, error) {
    var fs = require('fs');

    fs.readFile(args.file, 'utf8', function(err, data) {
      if (err) {
        error(err);
      } else {
        done(data);
      }
    });
  }
};
