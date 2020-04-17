/* global $ */
module.exports = () => {
  $.gulp.task("favicon:copy", () => {
    return $.gulp
      .src("./source/favicon/*.*")
      .pipe($.gulp.dest("./dev/favicon/"));
  });

  $.gulp.task("favicon:build", () => {
    return $.gulp
      .src("./source/favicon/*.* ")
      .pipe($.gulp.dest("./build/favicon/"));
  });
};