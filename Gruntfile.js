/*jslint node: true */
"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
   
    

    cssmin: {
        'css': {
            'src': ['main.css'],
            'dest': 'm.css'
        }
    },

    min: {
       'js': {
            'src': ['main.js'],
            'dest': 'm.js'
        }
    },

    replace: {
      example: {
        src: ['bookmarks.html'],           
        dest: 'bookmarks_replaced.html',             // destination directory or file
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
          'bookmarks_replaced.html': 'b.html'
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
  grunt.loadNpmTasks('grunt-casperjs');
  grunt.loadNpmTasks('grunt-yui-compressor');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-htmlcompressor');

  // Default task.
  grunt.registerTask('default', ['jshint', 'cssmin', 'min', 'replace', 'htmlcompressor']);

};
