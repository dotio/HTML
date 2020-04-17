/* global $ */
module.exports = () => {
  $.gulp.task('font:copy', () => {
    return $.gulp.src('./source/fonts/**/*.*').pipe($.gulp.dest('./dev/font/'));
  });

  $.gulp.task('font:build', () => {
    return $.gulp
      .src('./source/font/**/*.* ')
      .pipe($.gp.fontmin())
      .pipe($.gulp.dest('./build/fonts/'));
  });
};
