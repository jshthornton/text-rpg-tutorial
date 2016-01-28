module.exports = function(grunt) {
  // Makes it so we do not have to load in
  // each grunt plugin / module
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      default: {
        options: {
          port: 8080,
          base: 'public',
          keepalive: true,
          middleware: function(connect, options, middlewares) {
            middlewares.push(function(req, res, next) {
              var path = __dirname + '/public' + req.url;
              try {
                var stat = fs.statSync(path);
                return next();
              } catch (ex) {
                fs.createReadStream('public/index.html').pipe(res);
              }
            });

            return middlewares;
          }
        },
      }
    }
  });
};