/* eslint-env es6 */
/* eslint-disable no-console */

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () => {
    gulp.src('src/assets/images/**/*')
   .pipe(imagemin())
   .pipe(gulp.dest('src/assets/imagesOptimized'))
});
