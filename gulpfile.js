const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const buildStyles = () => {
  return src(['scss/main.scss', 'scss/cv_style.scss'])
    .pipe(sass())
    .pipe(dest('dist/css'));
};

const watchTask = () => {
  watch(['scss/main.scss', 'scss/cv_style.scss'], buildStyles);
};

exports.default = series(buildStyles, watchTask);
