/* global $ */
module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug:copy'));
    $.gulp.watch('./source/styles/**/*.scss', $.gulp.series('style:copy'));
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:copy'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('img:copy'));
  });
};
