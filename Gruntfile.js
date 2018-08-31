/*global module:false*/

// todo: figure out if jshint is needed

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON("package.json"),
    banner:
      "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - " +
      '<%= grunt.template.today("yyyy-mm-dd @ HH:mm") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; */\n',
    uglify: {
      options: {
        banner: "<%= banner %>"
      },
      lib: {
        options: {
          compress: false
        },
        files: [
          {
            src: [
              "_src/lib/dev/js/modernizr.js",
              "_src/lib/dev/js/jquery-3.3.1.js",
              "_src/lib/dev/js/jquery-scrollspy.js",
              "_src/lib/dev/js/hammer.js"
            ],
            dest: "dist/dev/js/lib.js"
          },
          {
            options: {
              sourceMap: false
            },
            src: [
              "_src/lib/prod/js/modernizr.min.js",
              "_src/lib/prod/js/jquery-3.3.1.min.js",
              "_src/lib/prod/js/jquery-scrollspy.min.js",
              "_src/lib/prod/js/hammer.min.js"
            ],
            dest: "dist/prod/js/lib.min.js"
          }
        ]
      },
      prod: {
        options: {
          compress: true,
          sourceMap: false,
          output: {
            comments: false,
            beautify: false
          }
        },
        files: [
          { src: "_src/js/base.js", dest: "dist/prod/js/jewellnet.min.js" },
          {
            src: ["_src/js/base.js", "_src/js/splash.js"],
            dest: "dist/prod/splash/js/dj-splash.js"
          }
        ]
      },
      dev: {
        options: {
          sourceMap: true,
          output: {
            comments: true,
            beautify: true
          }
        },
        files: [
          { src: "_src/js/base.js", dest: "dist/dev/js/jewellnet.js" },
          {
            src: ["_src/js/base.js", "_src/js/splash.js"],
            dest: "dist/dev/splash/js/dj-splash.js"
          }
        ]
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
        reporterOutput: ""
      },
      gruntfile: {
        src: "Gruntfile.js"
      },
      lib_test: {
        src: ["lib/**/*.js", "test/**/*.js"]
      }
    },
    qunit: {
      files: ["test/**/*.html"]
    },
    watch: {
      gruntfile: {
        files: "<%= jshint.gruntfile.src %>",
        tasks: ["jshint:gruntfile"]
      },
      lib_test: {
        files: "<%= jshint.lib_test.src %>",
        tasks: ["jshint:lib_test", "qunit"]
      },
      default: {
        files: ["_src/**/*.less", "_src/**/*.js", "_src/**/*.html"],
        tasks: "dev"
      }
    },
    less: {
      options: {
        banner: "<%= banner %>"
      },
      prod: {
        options: {
          compress: true,
          sourceMap: false
        },
        files: {
          "dist/prod/css/jewellnet.min.css": ["_src/less/import-all.less"],
          "dist/prod/splash/css/dj-splash.min.css": ["_src/less/splash.less"]
        }
      },
      dev: {
        options: {
          compress: false,
          sourceMap: true
        },
        files: {
          "dist/dev/css/jewellnet.css": ["_src/less/import-all.less"],
          "dist/dev/splash/css/dj-splash.css": ["_src/less/splash.less"]
        }
      }
    },
    copy: {
      lib: {
        files: [
          {
            expand: true,
            cwd: "_src/lib/dev",
            src: "css/normalize.css",
            dest: "dist/dev"
          },
          {
            expand: true,
            cwd: "_src/lib/prod",
            src: "css/normalize.min.css",
            dest: "dist/prod"
          }
        ]
      },
      dev: {
        files: [
          {
            expand: true,
            cwd: "_src",
            src: ["img/social/**", "img/portfolio/**"],
            dest: "dist/dev/"
          },
          {
            expand: true,
            flatten: true,
            cwd: "_src",
            src: ["html/*"],
            dest: "dist/dev/"
          }
        ]
      },
      prod: {
        files: [
          {
            expand: true,
            cwd: "_src",
            src: ["img/social/**", "img/portfolio/**"],
            dest: "dist/prod/"
          },
          {
            expand: true,
            flatten: true,
            cwd: "_src",
            src: ["html/*"],
            dest: "dist/prod/"
          }
        ]
      },
      complete: {
        files: [
          {
            expand: true,
            cwd: "_src/lib/dev",
            src: "css/normalize.css",
            dest: "dist/dev"
          },
          {
            expand: true,
            cwd: "_src/lib/prod",
            src: "css/normalize.min.css",
            dest: "dist/prod"
          },
          {
            expand: true,
            cwd: "_src",
            src: ["img/*", "fonts/**"],
            dest: "dist/prod/"
          },
          {
            expand: true,
            cwd: "_src",
            src: ["img/*", "fonts/**"],
            dest: "dist/dev/"
          }
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-copy");

  // Default task.
  grunt.registerTask("default", ["less:dev", "uglify:dev"]);

  grunt.registerTask("dev", ["less:dev", "uglify:dev", "copy:dev"]);
  grunt.registerTask("prod", ["less:prod", "uglify:prod", "copy:prod"]);
  grunt.registerTask("lib", ["uglify:lib", "copy:lib"]);

  grunt.registerTask("complete", ["dev", "prod", "copy:complete"]);
};
