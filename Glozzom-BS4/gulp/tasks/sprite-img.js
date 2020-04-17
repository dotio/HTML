/* global $ */
module.exports = () => {
  $.gulp.task("sprite:png", () => {
    const spriteData = $.gulp.src("./source/img/pngSprite/**/*.png").pipe(
      $.gp.spritesmith({
        imgName: "sprite.png",
        cssName: "sprite.scss",
        cssFormat: "scss",
        imgPath: "../img/pngSprite/sprite.png",
        padding: 70
      })
    );

    const imaStream = spriteData.img.pipe($.gulp.dest("./source/img/pngSprite"));
    const cssStream = spriteData.css.pipe($.gulp.dest("./dev/img/pngSprite"));

    return $.merge(imaStream, cssStream);
  });

  $.gulp.task("sprite:png-build", () => {
    const spriteData = $.gulp.src("./source/img/pngSprite/**/*.png").pipe(
      $.gp.spritesmith({
        imgName: "sprite.png",
        cssName: "sprite.scss",
        cssFormat: "scss",
        imgPath: "../img/pngSprite/sprite.png",
        padding: 70
      })
    );

    const imaStream = spriteData.img.pipe($.gulp.dest("./source/img/pngSprite"));

    const cssStream = spriteData.css.pipe($.gulp.dest("./build/img/pngSprite"));

    return $.merge(imaStream, cssStream);
  });
};