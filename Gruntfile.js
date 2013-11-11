"use strict";

// Generated on 2013-10-08 using generator-nodejs 0.0.7
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    complexity: {
      generic: {
        src: ['lib/**/*.js', 'index.js'],
        options: {
          errorsOnly: false,
          cyclomatic: 5,       // default is 3
          halstead: 16,         // default is 8
          maintainability: 100  // default is 100
        }
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'lib/**/*.js',
        'index.js',
        'test/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    mochacli: {
      all: ['test/unit/**/*.js'],
      options: {
        reporter: 'spec',
        ui: 'tdd'
      }
    },
    execute: {
      integration: {
        src: ['test/integration/runner.js']
      }
    },    
    watch: {
      js: {
        files: ['**/*.js', '!node_modules/**/*.js'],
        tasks: ['default'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-complexity');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-execute');

  grunt.registerTask('test', ['complexity', 'jshint', 'mochacli', 'execute', 'watch']);
  grunt.registerTask('ci', ['complexity', 'jshint', 'mochacli', 'execute']);
  grunt.registerTask('default', ['test']);
};
