'use strict';

// Necessary Plugins
var gulp     = require('gulp')

// Pipe Notes
module.exports = gulp.task('notes', function(){
  return gulp.src('src/js/vendor/notes/notes.html')
      .pipe(gulp.dest('build/js/vendor/notes/'))
});
