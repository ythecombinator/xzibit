'use strict';

var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['js', 'jade', 'stylus', 'img-clean', 'img-minify', 'videos', 'watch', 'browser-sync']);
