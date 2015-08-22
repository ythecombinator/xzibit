'use strict';

// Necessary Plugins
var gulp      = require('gulp')
    ,del = require('del')
    ,paths = require('../paths');

// Remove images in the destination folder (to avoid duplication)
module.exports = gulp.task('img-clean', function (cb) {
 return del(paths.build.imgClean, cb);
});
