'use strict';

// Necessary Plugins
var gulp    = require('gulp')
    ,gutil  = require('gulp-util')
    ,paths  = require('../paths')
    ,ghPages = require('gulp-gh-pages')
    ,config = require("./../../src/config.json");

// Deploy to GitHub Pages
module.exports = gulp.task('deploy-gh', function () {
  return gulp.src(paths.build.html)
    .pipe(ghPages({remoteUrl: "https://github.com/mabrasil/lumberpack-testing.git", branch:"gh-pages", message:"Testing at [timestamp]", force:true, }));
});
