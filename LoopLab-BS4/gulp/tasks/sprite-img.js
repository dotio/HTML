"use strict";
module.exports = function() {
  $.gulp.task("sprite:png", function() {
    var spriteData = $.gulp.src("./source/img/pngSprite/**/*.png").pipe(
      $.gp.spritesmith({
        imgName: "sprite.png",
        cssName: "sprite.scss",
        cssFormat: "scss",
        imgPath: "../img/pngSprite/sprite.png",
        padding: 70
      })
    );

    var imaStream = spriteData.img.pipe($.gulp.dest("./source/img/pngSprite"));
    var cssStream = spriteData.css.pipe($.gulp.dest("./dev/img/pngSprite"));

    return $.merge(imaStream, cssStream);
  });

  $.gulp.task("sprite:png-build", function() {
    var spriteData = $.gulp.src("./source/img/pngSprite/**/*.png").pipe(
      $.gp.spritesmith({
        imgName: "sprite.png",
        cssName: "sprite.scss",
        cssFormat: "scss",
        imgPath: "../img/pngSprite/sprite.png",
        padding: 70
      })
    );

    var imaStream = spriteData.img.pipe($.gulp.dest("./source/img/pngSprite"));

    var cssStream = spriteData.css.pipe($.gulp.dest("./build/img/pngSprite"));

    return $.merge(imaStream, cssStream);
  });
};
