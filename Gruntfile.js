/*global module:false*/

// todo: figure out if jshint is needed

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd @ HH:mm") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= pkg.license %> */\n',
    // Task configuration.
    uglify: {
      options: {
        banner: '<%= banner %>',
        sourceMap: true,
      },
      prod: {
        options: {
          output: {
            comments: false,
          },
        },
        files: {
          'dist/prod/js/jewellnet.min.js': ['_src/js/base.js'],
          'dist/prod/js/jquery-scrollspy.min.js': ['_src/js/jquery-scrollspy.js'],
          'dist/prod/splash/js/dj-splash.js': ['_src/js/base.js', '_src/js/splash.js'],
        }
      },
      dev: {
        options: {
          output: {
            comments: true,
            beautify: true,
          }
        },
        files: {
          'dist/dev/js/jewellnet.js': ['_src/js/base.js'],
          'dist/dev/js/jquery-scrollspy.js': ['_src/js/jquery-scrollspy.js'],
          'dist/dev/splash/js/dj-splash.js': ['_src/js/base.js', '_src/js/splash.js'],
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {},
        reporterOutput: ''
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      },
      default: {
        files: ['_src/**/*.less', '_src/**/*.js', '_src/**/*.html'],
        tasks: 'dev'
      }
    },
    less: {
      options: {
        banner: '<%= banner %>',
        sourceMap: true,
      },
      prod: {
        options: {
          compress: true,
        },
        files: {
          'dist/prod/css/jewellnet.min.css': ['_src/less/import-all.less'],
          'dist/prod/splash/css/dj-splash.min.css': ['_src/less/splash.less'],
        }
      },
      dev: {
        options: {
          compress: false,
        },
        files: {
          'dist/dev/css/jewellnet.css': ['_src/less/import-all.less'],
          'dist/dev/splash/css/dj-splash.css': ['_src/less/splash.less'],
        }
      }
    },
    copy: {
      dev: {
        files: [
          { expand: true, cwd: '_src', src: ['img/social/**', 'img/portfolio/**'], dest: 'dist/dev/' },
          { expand: true, flatten: true, cwd: '_src', src: ['html/*'], dest: 'dist/dev/' },
          { expand: true, cwd: '_src', src: ['css/*'], dest: 'dist/dev/' }
        ]
      },
      prod: {
        files: [
          { expand: true, cwd: '_src', src: ['img/social/**', 'img/portfolio/**'], dest: 'dist/prod/' },
          { expand: true, flatten: true, cwd: '_src', src: ['html/*'], dest: 'dist/prod/' },
          { expand: true, cwd: '_src', src: ['css/*'], dest: 'dist/prod/' }
        ]
      },
      complete: {
        files: [
          { expand: true, cwd: '_src', src: ['img/*', 'fonts/**'], dest: 'dist/prod/' },
          { expand: true, cwd: '_src', src: ['img/*', 'fonts/**'], dest: 'dist/dev/' },
          { expand: true, cwd: '_src', src: ['js/modernizr.js'], dest: 'dist/prod/' },
          { expand: true, cwd: '_src', src: ['js/modernizr.js'], dest: 'dist/dev/' },
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', ['less:dev', 'uglify:dev']);

  grunt.registerTask('dev', ['less:dev', 'uglify:dev', 'copy:dev']);
  grunt.registerTask('prod', ['less:prod', 'uglify:prod', 'copy:prod']);

  grunt.registerTask('complete', ['dev', 'prod', 'copy:complete']);

};
