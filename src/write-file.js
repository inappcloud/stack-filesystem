module.exports = {
  name: 'writeFile',

  args: {
    path: {
      example: '_posts/hello-world.txt',
      required: true
    },

    data: {
      example: 'Hello World',
      required: true
    }
  },

  call: function(args, done, error) {
    var fs = require('fs');

    fs.writeFile(args.path, args.data, 0, 'utf8', function(err, written, data) {
      if (err) {
        error(err);
      } else {
        done(data);
      }
    });
  }
};
