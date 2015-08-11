'use strict';

// Necessary Plugins
var gulp    = require('gulp')
    ,gutil  = require('gulp-util')
    ,paths  = require('../paths')
    ,s3     = require( "gulp-s3-ls" )
,aws = require("./aws.json")
    ,config = require("./../../src/config.json");

// Deploy to AWS S3
module.exports = gulp.task('deploy-s3', function () {
    return gulp.src(paths.build.html)
        .pipe(s3(aws));
});
