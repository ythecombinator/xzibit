'use strict';

module.exports = {

    source: {
        templates: 'src/templates/**/*.jade',
        slides: 'src/slides/*.jade',
        js: 'src/scripts/**/*.js',
        styl: 'src/styles/**/*.styl',
        img: 'src/images/**/*.{jpg,png,gif}',
        videos: 'src/videos/**/*',
        files: {
            config: './src/config.json',
            jade: 'src/templates/index.jade',
            styl: 'src/styles/main.styl',
            notes: 'src/js/vendor/plugins/notes/notes.html'
        }

    },

    browserSync: {
        html: 'out/**/*.html',
        js: 'out/js/**/*.js',
        css: 'out/css/**/*.css',
        img: 'out/img/**/*'
    },

    build: {
        html: './out/',
        js: 'out/js',
        css: 'out/css',
        imgMinify: 'out/img',
        imgClean: 'out/img/**/*.{jpg,png,gif}',
        videos: 'out/videos',
        notes: 'out/js/vendor/plugins/notes/'
    }
};
