module.exports = function() {
  $.gulp.task("sprite:svg", () => {
    return $.gulp
      .src("./source/svg/**/*.svg")
      .pipe(
        $.gp.svgmin({
          js2svg: {
            pretty: true
          }
        })
      )
      .pipe(
        $.gp.cheerio({
          run: function($) {
            $("[fill]").removeAttr("fill");
            $("[stroke]").removeAttr("stroke");
            $("[style]").removeAttr("style");
          },
          parserOptions: { xmlMode: true }
        })
      )
      .pipe($.gp.replace("&gt;", ">"))
      .pipe(
        $.gp.svgSprite({
          mode: {
            symbol: {
              sprite: "../sprite.svg"
            }
          }
        })
      )
      .pipe($.gulp.dest("./dev/svg/"));
  });

  $.gulp.task("sprite:svg-build", () => {
    return $.gulp
      .src("./source/svg/**/*.svg")
      .pipe(
        $.gp.svgmin({
          js2svg: {
            pretty: true
          }
        })
      )
      .pipe(
        $.gp.cheerio({
          run: function($) {
            $("[fill]").removeAttr("fill");
            $("[stroke]").removeAttr("stroke");
            $("[style]").removeAttr("style");
          },
          parserOptions: { xmlMode: true }
        })
      )
      .pipe($.gp.replace("&gt;", ">"))
      .pipe(
        $.gp.svgSprite({
          mode: {
            symbol: {
              sprite: "../sprite.svg"
            }
          }
        })
      )
      .pipe($.gulp.dest("./build/svg/"));
  });
};
