"use strict";
module.exports = function() {
  $.gulp.task("font:copy", function() {
    return $.gulp.src("./source/font/**/*.*").pipe($.gulp.dest("./dev/font/"));
  });

  $.gulp.task("font:build", function() {
    return $.gulp
      .src("./source/font/**/*.* ")
      .pipe($.gp.fontmin())
      .pipe($.gulp.dest("./build/font/"));
  });
};
