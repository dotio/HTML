/* global $ */
module.exports = () => {
  $.gulp.task("js:copy", () => {
    return $.gulp
      .src("./source/js/**/*.js")
      .pipe($.gulp.dest("./dev/js/"))
      .pipe($.browserSync.stream());
  });

  $.gulp.task("js:build", () => {
    return $.gulp
      .src("./source/js/**/*.js")
      .pipe($.gp.babel({
        presets: ['@babel/env']
      }))
      .pipe($.gp.uglify())
      .pipe($.gp.concat("bundle.min.js"))
      .pipe($.gulp.dest("./build/js/"))
      .pipe($.browserSync.stream());
  });
};