var gulp = require('gulp'),
    bundle = require('gulp-bundle-assets'),
    clean = require('gulp-clean'),
    replace = require('gulp-replace');

gulp.task('clean', function () {
    return gulp.src(['js/main-*.js', 'css/main-*.css', '**/maps/*'])
        .pipe(clean());
});

gulp.task('js', function() {
    return gulp.src('./bundle.jsconfig.js')
        .pipe(bundle())
        .pipe(gulp.dest('./js'));
});

gulp.task('css', function() {
    return gulp.src('./bundle.cssconfig.js')
        .pipe(bundle())
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['clean', 'js', 'css']);