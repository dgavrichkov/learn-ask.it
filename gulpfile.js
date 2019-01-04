var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var plumber = require('gulp-plumber')
var browserSync = require('browser-sync').create();

gulp.task('style', function(){
	gulp.src('app/scss/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([ autoprefixer() ]))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['style'], function(){
	browserSync.init({
		server: './app'
	});
	gulp.watch('app/scss/**/*.{scss, sass}', ['style']);
	gulp.watch('app/*.html').on('change', browserSync.reload);

});

gulp.task('default', ['serve']);