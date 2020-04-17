/* global $ */
module.exports = () => {
  $.gulp.task("serve", () => {
    $.browserSync.init({
      open: false,
      server: {
        baseDir: "./dev"
      }
    });
  });
};