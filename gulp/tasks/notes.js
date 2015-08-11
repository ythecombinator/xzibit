'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,paths = require('../paths');

// Pipe Notes
module.exports = gulp.task('notes', function(){
  return gulp.src(paths.source.files.notes)
    .pipe(gulp.dest(paths.build.notes))
});
