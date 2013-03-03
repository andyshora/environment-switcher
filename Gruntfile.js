/*jslint node: true */
"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
   
    cssmin: {
        'css': {
            'src': ['extension/main.css'],
            'dest': 'extension/m.css'
        }
    },

    min: {
       'js': {
            'src': ['extension/main.js'],
            'dest': 'extension/m.js'
        }
    },

    replace: {
      example: {
        src: ['extension/bookmarks.html'],           
        dest: 'extension/bookmarks_replaced.html',             // destination directory or file
        replacements: [
        { 
          from: 'main.js',      
          to: 'm.js' 
        },
        { 
          from: 'main.css',               
          to: 'm.css' 
        }
        ]
      }
    },

    htmlcompressor: {
      compile: {
        files: {
          'extension/b.html': 'extension/bookmarks_replaced.html'
        },
        options: {
          type: 'html',
          preserveServerScript: true
        }
      }
    }

  });

  // These plugins provide necessary tasks.
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-qunit');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-yui-compressor');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-htmlcompressor');

  // Default task.
  grunt.registerTask('default', ['cssmin', 'min', 'replace', 'htmlcompressor']);

};
