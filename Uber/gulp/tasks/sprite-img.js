/* global $ */
module.exports = () => {
  $.gulp.task('sprite:png', () => {
    const spriteData = $.gulp.src('./source/images/pngSprite/**/*.png').pipe(
      $.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        cssFormat: 'scss',
        imgPath: '../images/pngSprite/sprite.png',
        padding: 70
      })
    );

    const imaStream = spriteData.img.pipe(
      $.gulp.dest('./source/images/pngSprite')
    );
    const cssStream = spriteData.css.pipe(
      $.gulp.dest('./dev/images/pngSprite')
    );

    return $.merge(imaStream, cssStream);
  });

  $.gulp.task('sprite:png-build', () => {
    const spriteData = $.gulp.src('./source/images/pngSprite/**/*.png').pipe(
      $.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        cssFormat: 'scss',
        imgPath: '../images/pngSprite/sprite.png',
        padding: 70
      })
    );

    const imaStream = spriteData.img.pipe(
      $.gulp.dest('./source/images/pngSprite')
    );

    const cssStream = spriteData.css.pipe(
      $.gulp.dest('./build/images/pngSprite')
    );

    return $.merge(imaStream, cssStream);
  });
};
