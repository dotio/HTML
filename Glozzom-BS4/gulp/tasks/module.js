/* global $ */
module.exports = () => {
  $.gulp.task("module:copy", () => {
    return $.gulp
      .src("./source/module/**/*.*")
      .pipe($.gulp.dest("./dev/module/"));
  });

  $.gulp.task("module:build", () => {
    return $.gulp
      .src("./source/module/**/*.* ")
      .pipe($.gulp.dest("./build/module/"));
  });
};