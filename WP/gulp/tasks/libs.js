/* global $ */
module.exports = () => {
  $.gulp.task('libs:copy', () => {
    return $.gulp.src('./source/libs/**/*.*').pipe($.gulp.dest('./dev/libs/'));
  });

  $.gulp.task('libs:build', () => {
    return $.gulp
      .src('./source/libs/**/*.* ')
      .pipe($.gulp.dest('./build/libs/'));
  });
};
