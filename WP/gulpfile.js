/* eslint-disable global-require */
/* eslint-disable require */
/* global $ */

// varialbles
global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  del: require('del'),
  cssunit: require('gulp-css-unit'),
  sassGlob: require('gulp-sass-glob'),
  cleanCSS: require('gulp-clean-css'),
  package: require('./package.json'),
  merge: require('merge-stream'),
  path: {
    tasks: require('./gulp/config/tasks.js')
  }
};

// path to tasks
$.path.tasks.forEach(taskPath => {
  require(taskPath)();
});

// dev
$.gulp.task(
  'dev',
  $.gulp.series(
    $.gulp.parallel(
      'style:copy',
      'pug:copy',
      'js:copy',
      'img:copy',
      'font:copy',
      'libs:copy',
      'favicon:copy',
      'watch',
      'serve'
    )
  )
);

$.gulp.task('sprite', $.gulp.series('clean', $.gulp.parallel('sprite:svg')));

// build
$.gulp.task(
  'build',
  $.gulp.series(
    'clean',
    $.gulp.parallel(
      'style:build',
      'pug:build',
      'js:build',
      'sprite:svg-build',
      'img:build',
      'font:build',
      'libs:build',
      'favicon:build',
      'serve',
      'watch'
    )
  )
);

// default
$.gulp.task('default', $.gulp.series('dev', $.gulp.parallel('watch', 'serve')));
