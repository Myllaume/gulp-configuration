var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
    console.log('Hello world');
})

// https://www.npmjs.com/package/gulp-sass
// https://www.npmjs.com/package/gulp-clean-css
// https://www.npmjs.com/package/gulp-autoprefixer

gulp.task('sass', function () {
    return gulp.src('./gen/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./assets'));
});

gulp.task('watch', function () {
    gulp.watch('./gen/sass/**/*.scss', gulp.series('sass'))
        .on('change', function (event) {
            console.log('CSS upted');
        });
});