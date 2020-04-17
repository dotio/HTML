/* global $ */
module.exports = () => {
  $.gulp.task('module:copy', () => {
    return $.gulp.src('./source/libs/**/*.*').pipe($.gulp.dest('./dev/libs/'));
  });

  $.gulp.task('module:build', () => {
    return $.gulp
      .src('./source/libs/**/*.* ')
      .pipe($.gulp.dest('./build/libs/'));
  });
};
