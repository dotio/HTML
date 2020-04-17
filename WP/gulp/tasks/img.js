/* global $ */
module.exports = () => {
  $.gulp.task('img:copy', () => {
    return (
      $.gulp
        .src('./source/images/**/*.*', {
          since: $.gulp.lastRun('img:copy')
        })
        // pipe($.gp.imagemin())
        // .pipe($.gp.tinypng(''))
        .pipe($.gulp.dest('./dev/images/'))
    );
  });
  $.gulp.task('img:build', () => {
    return (
      $.gulp
        .src('./source/images/**/*.*')
        .pipe($.gp.imagemin())

        // .pipe($.gp.tinypng(''))
        .pipe($.gulp.dest('./build/images/'))
    );
  });
};
