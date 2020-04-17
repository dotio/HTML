"use strict";
module.exports = function() {
  $.gulp.task("js:copy", function() {
    return $.gulp
      .src("./source/js/**/*.js")
      .pipe($.gulp.dest("./dev/js/"))
      .pipe($.browserSync.stream());
  });

  $.gulp.task("js:build", function() {
    return $.gulp
      .src("./source/js/**/*.js")
      .pipe($.gp.babel({presets:['@babel/env']}))
      .pipe($.gp.uglify())
      .pipe($.gp.concat("bundle.min.js"))
      .pipe($.gulp.dest("./build/js/"))
      .pipe($.browserSync.stream());
  });
};
