/*
 * grunt-bgmust
 * https://github.com/derrickliu/grunt-bgmust
 *
 * Copyright (c) 2014 derrickliu
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    cssmin: {
         options: {
             keepSpecialComments: 0
         },
         compress: {
             files: {
                 'release/css/contact.css': 'src/css/contact.css'
             }
         }
     },
     bgmust: {
        contact: {
          options: {
            images: 'release/css/images/'
          },
          files: [
            {
              src: 'release/css/contact.css'
            }
          ]
        }
     },

     /////////////////////////////
     clean: ['release/css/images/'],
     copy: {
        main: {
            expand: true,
            cwd: 'src/css/images/',
            src: ['**'],
            dest: 'release/css/images/',
        }
     },

     rev: {
        files: {
            src: ['release/css/images/**/*.{png,jpg,gif}']
        }
     }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');


  grunt.loadNpmTasks('grunt-rev');

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bgmust');

  grunt.registerTask('css', ['cssmin','clean','copy','rev','bgmust']);
