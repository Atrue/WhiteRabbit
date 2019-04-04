'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const javascriptObfuscator = require('gulp-javascript-obfuscator');
const obfuscateConfig = {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 1,
    debugProtection: true,
    debugProtectionInterval: true,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    renameGlobals: false,
    rotateStringArray: true,
    selfDefending: true,
    stringArray: true,
    stringArrayEncoding: 'rc4',
    stringArrayThreshold: 1,
    transformObjectKeys: true,
    unicodeEscapeSequence: false,
};

gulp.task('js', function() {
    return gulp.src('static/js/*.js')
        .pipe(javascriptObfuscator(obfuscateConfig))
        .pipe(gulp.dest('staticfiles/js'));
});

gulp.task('sass', function () {
  return gulp.src('static/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('staticfiles/style/css'));
});

gulp.watch('static/js/*js', gulp.series('js'));
gulp.watch('static/styles/*.scss', gulp.series('sass'));