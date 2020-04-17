"use strict";
module.exports = function() {
  $.gulp.task("favicon:copy", function() {
    return $.gulp
      .src("./source/favicon/*.*")
      .pipe($.gulp.dest("./dev/favicon/"));
  });

  $.gulp.task("favicon:build", function() {
    return $.gulp
      .src("./source/favicon/*.* ")
      .pipe($.gulp.dest("./build/favicon/"));
  });
};
