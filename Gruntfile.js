var webpackConfig = require('./webpack.config');
var fs = require('fs');

module.exports = grunt => {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      dev: webpackConfig
    },
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
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'public/index.html': 'src/index.html'
        }
      },
      dev: {
        files: {
          'public/index.html': 'src/index.html'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'main.css': 'main.scss'
        }
      },
      dev: {
        options: {
          style: 'expanded',
          loadPath: [
            // './node_modules/bootstrap/scss'
          ]
        },
        files: {
          './public/assets/css/main.css': './src/assets/css/main.scss'
        }
      }
    },
    imagemin: {
      dev: {
        files: [{
          expand: true,
          cwd: './src/assets/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: './public/assets/img'
        }]
      }
    },
    watch: {
      css: {
        options: {
          atBegin: true,
          livereload: true
        },
        files: ['src/assets/css/**/*.scss'],
        tasks: ['sass:dev']
      },
      js: {
        options: {
          atBegin: true,
          livereload: true
        },
        files: ['src/assets/js/**/*.js'],
        tasks: ['webpack:dev']
      },
      images: {
        options: {
          atBegin: true,
          livereload: true
        },
        files: ['src/assets/img/**/*'],
        tasks: ['imagemin:dev']
      },
      html: {
        options: {
          atBegin: true,
          livereload: true
        },
        files: ['src/**/*.html'],
        tasks: ['htmlmin:dev']
      }
    },
    concurrent: {
      dev: ['connect', 'watch'],
    }
  });
  // Default task(s).
  //grunt.registerTask('default', []);
  grunt.registerTask('build-dev', ['webpack:dev', 'htmlmin:dev', 'sass:dev', 'imagemin:dev']);
};