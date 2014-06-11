/*
 * grunt-bgmust
 * https://github.com/derrickliu/grunt-bgmust
 *
 * Copyright (c) 2014 derrickliu
 * Licensed under the MIT license.
 */

'use strict';
var fs = require('fs');
module.exports = function(grunt) {

    function replaceBg(imagesPath,css){
        var imageFiles = fs.readdirSync(imagesPath);
        var cssStr = grunt.file.read(css, 'utf8');
        imageFiles.forEach(function(file){
            var s = file.split('.');
            if(s[2] !== undefined){ 
                var fileName = s[1] + '.' + s[2];
                var cifReg = new RegExp('/' + fileName,'g');
                cssStr = cssStr.replace(cifReg,'/' + file);
                grunt.log.writeln('background "' + fileName + '" replace with: "' + file + '"');
            }
        });
        return cssStr;
    }
  

  grunt.registerMultiTask('bgmust', 'image in css must', function() {

    var options = this.options({
      images: ''
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      
     f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        var src = replaceBg(options.images,filepath);
        fs.writeFileSync(filepath,src); 
      });

      // Print a success message.
      grunt.log.writeln('File "' + f.src + '" created.');
    });
  });

};
