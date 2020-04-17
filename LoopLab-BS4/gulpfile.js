"use strict";

//vars
global.$ = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  browserSync: require("browser-sync").create(),
  del: require("del"),
  cssunit: require("gulp-css-unit"),
  sassGlob: require("gulp-sass-glob"),
  cleanCSS: require("gulp-clean-css"),
  package: require("./package.json"),
  merge: require("merge-stream"),
  path: {
    tasks: require("./gulp/config/tasks.js")
  }
};

//path to tasks
$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

//dev
$.gulp.task(
  "dev",
  $.gulp.series(
    $.gulp.parallel(
      "style:copy",
      "pug:copy",
      "js:copy",
      "img:copy",
      "font:copy",
      "module:copy",
      "favicon:copy"
    )
  )
);

$.gulp.task("sprite", $.gulp.series("clean", $.gulp.parallel("sprite:svg")));

//build
$.gulp.task(
  "build",
  $.gulp.series(
    "clean",
    $.gulp.parallel(
      "style:build",
      "pug:build",
      "js:build",
      "sprite:svg-build",
      "img:build",
      "font:build",
      "module:build",
      "favicon:build"
    )
  )
);

//default
$.gulp.task("default", $.gulp.series("dev", $.gulp.parallel("watch", "serve")));
