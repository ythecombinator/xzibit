'use strict';

var gulp = require('gulp');

// Build and Deploy
module.exports = gulp.task('build', ['js', 'jade', 'notes', 'stylus', 'imagemin', 'videos', 'watch', 'deploy-rsync']);
