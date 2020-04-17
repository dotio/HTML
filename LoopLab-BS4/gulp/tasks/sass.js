"use strict";
module.exports = function() {
  $.gulp.task("style:copy", function() {
    return $.gulp
      .src("./source/css/style.scss")
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init())
      .pipe($.sassGlob())
      .pipe($.gp.sass())
      .on(
        "error",
        $.gp.notify.onError(function(error) {
          return {
            title: "Scss",
            message: error.message
          };
        })
      )

      .pipe(
        $.gp.autoprefixer({
          browsers: ["last 3 version", "> 1%", "ie 8", "ie 9", "Opera 12.1"],
          cascade: true
        })
      )

      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest("./dev/css/"))
      .pipe($.browserSync.reload({ stream: true }));
  });

  $.gulp.task("style:build", function() {
    return $.gulp
      .src("./source/css/style.scss")
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init())
      .pipe($.sassGlob())
      .pipe(
        $.gp.sass({
          "include css": true,
          outputStyle: "compressed"
        })
      )
      .pipe(
        $.gp.autoprefixer({
          browsers: ["last 3 version", "> 1%", "ie 8", "ie 9", "Opera 12.1"],
          cascade: true
        })
      )
      .pipe($.gp.csscomb())
      .pipe($.cleanCSS())
      .pipe($.gp.cssnano())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest("./build/css/"));
  });
};
