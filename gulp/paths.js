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
            styl: 'src/styles/main.styl'
        }

    },

    browserSync: {
        html: 'out/**/*.html',
        js: 'out/scripts/**/*.js',
        css: 'out/styles/**/*.css',
        img: 'out/images/**/*'
    },

    build: {
        html: './out/',
        js: 'out/scripts',
        css: 'out/styles',
        imgClean: 'out/images/**/*.{jpg,png,gif}',
        imgMinify: 'out/images',
        videos: 'out/videos',
        deploy:'out/**/*.*'
    }
};
