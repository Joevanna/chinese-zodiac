var gulp = require('gulp'),
  compass = require('gulp-compass'),
	sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  concatCss = require('gulp-concat-css'),
	browserSync = require('browser-sync').create();


gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(compass({      
      css: 'app/css/',
      sass: 'app/scss/'
    }))
    .pipe(autoprefixer())
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('concat', function () {
  return gulp.src('app/**/*.css')
    .pipe(concatCss("css/styles.css"))
    .pipe(gulp.dest('app/'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch',['browserSync', 'sass'], function(){
  gulp.watch('app/scss/styles.scss', ['sass']); 
  // Other watchers
});