import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
export default () => (
	gulp.src('src/assets/images/**/*')
		.pipe(imagemin([
            pngquant({quality: [0.5, 0.75]})
          ]))
		.pipe(gulp.dest('src/assets/images/')),
    gulp.src('src/assets/portfolio/images/*')
		.pipe(imagemin([
            pngquant({quality: [0.5, 0.75]})
          ]))
		.pipe(gulp.dest('src/assets/portfolio/images/'))
);