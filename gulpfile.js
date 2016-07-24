var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');

gulp.task('default', function() {
  gulp.src(['src/index.html'])
    .pipe(fileinclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist'));
});