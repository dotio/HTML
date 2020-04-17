/* global $ */
module.exports = () => {
  $.gulp.task("watch", () => {
    $.gulp.watch("./source/template/**/*.pug", $.gulp.series("pug:copy"));
    $.gulp.watch("./source/css/**/*.scss", $.gulp.series("style:copy"));
    $.gulp.watch("./source/js/**/*.js", $.gulp.series("js:copy"));
    $.gulp.watch("./source/img/**/*.*", $.gulp.series("img:copy"));
  });
};