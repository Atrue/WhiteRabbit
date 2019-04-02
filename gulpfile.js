'use strict';
const gulp = require('gulp');
const javascriptObfuscator = require('gulp-javascript-obfuscator');

gulp.task('js', function() {
    gulp.src('static/js/*.js')
        .pipe(javascriptObfuscator())
        .pipe(gulp.dest('staticfiles'));
});