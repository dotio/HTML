/* global $ */
module.exports = () => {
  $.gulp.task("pug:copy", () => {
    return (
      $.gulp
      .src("./source/template/pages/*.pug")
      .pipe($.gp.pug({
        pretty: true
      }))
      .on(
        "error",
        $.gp.notify.onError((error) => {
          return {
            title: "Pug",
            message: error.message
          };
        })
      )
      .pipe($.gulp.dest("./dev/"))
      .on("end", $.browserSync.reload)
    );
  });

  $.gulp.task("pug:build", () => {
    return (
      $.gulp
      .src("./source/template/pages/*.pug")
      .pipe($.gp.pug({
        pretty: true
      }))
      .on(
        "error",
        $.gp.notify.onError((error) => {
          return {
            title: "Pug",
            message: error.message
          };
        })
      )
      .pipe($.gulp.dest("./build/"))
      .on("end", $.browserSync.reload)
    );
  });
};