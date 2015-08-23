'use strict';

// Necessary Plugins
var gulp    = require('gulp')
    ,gutil  = require('gulp-util')
    ,paths  = require('../paths')
    ,ghPages = require('gulp-gh-pages')
    ,config = require("./../../src/config.json");

// Deploy to GitHub Pages
module.exports = gulp.task('deploy-gh', function () {
    return gulp.src(paths.build.deploy)
        .pipe(ghPages(config.deploy.github));
});
