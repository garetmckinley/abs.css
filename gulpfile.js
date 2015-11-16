'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');

gulp.task('default', function() {
});

gulp.task('sass', function() {
	gulp.src('./lib/scss/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('./lib/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./lib/scss/**/*.scss', ['sass']);
});

gulp.task('coffee', function() {
  gulp.src('./lib/js/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./lib/js/'))
});

gulp.task('coffee:watch', function () {
	gulp.watch('./lib/js/*.coffee', ['coffee']);
});

gulp.task('all', ['coffee', 'sass']);

gulp.task('all:watch', ['coffee:watch', 'sass:watch']);