module.exports = {
  name: 'writeJson',

  args: {
    path: {
      example: '_posts/hello-world.txt',
      required: true
    },

    data: {
      example: { title: 'Hello World!' },
      required: true
    }
  },

  call: function(args, done, error) {
    var fs = require('fs');

    fs.writeFile(args.path, JSON.stringify(args.data), 0, 'utf8', function(err, written, data) {
      if (err) {
        error(err);
      } else {
        done(data);
      }
    });
  }
};
