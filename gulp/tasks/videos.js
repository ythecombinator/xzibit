'use strict';

// Necessary Plugins
var gulp      = require('gulp')
    ,paths = require('../paths');

// Call Imagemin
module.exports = gulp.task('videos', function(){
  return gulp.src(paths.source.videos)
    .pipe(gulp.dest(paths.build.videos))
})
