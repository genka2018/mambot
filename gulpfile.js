var gulp        = require("gulp");
var sass        = require("gulp-sass");
var minify = require('gulp-minify');


// sass task
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('minify', function() {
  gulp.src('script/*.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        noSource: 'custom.js,',
        exclude: ['tasks'],
    }))
    .pipe(gulp.dest('js'))
});

gulp.task('default', ['sass', 'minify'], function () {
    gulp.watch("sass/**/*.scss", ['sass']);
    gulp.watch("script/*.js", ['minify']);
});
