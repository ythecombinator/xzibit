'use strict';

var gulp = require('gulp');

// Build and Deploy
module.exports = gulp.task('build', ['js', 'jade', 'notes', 'stylus', 'img-clean', 'img-minify', 'videos', 'deploy-rsync']);
