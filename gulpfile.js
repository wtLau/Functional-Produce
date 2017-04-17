const gulp = require('gulp');
const babel = require('gulp-babel');

const babelConfig = {
  presets: ['es2015', 'stage-0'],
  plugins: ['transform-async-to-generator', 'transform-runtime']
};

gulp.task('default', () => {
  gulp.src('es/**/*.js')
    .pipe(babel(babelConfig))
    .pipe(gulp.dest('compiled'));
});
