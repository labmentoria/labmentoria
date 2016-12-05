var gulp          = require('gulp'),
	browserSync   = require('browser-sync'),
	sass          = require('gulp-sass');
	clean         = require('gulp-clean');


gulp.task('default', ['server'], function(){});

gulp.task('build', ['copy'], function(){});

gulp.task('copy', ['clean'], function(){
	return gulp.src(['src/**/*', '!src/sass/**/*'])
		.pipe(gulp.dest('build'));
});

gulp.task('clean', function(){
  return gulp.src('build')
        .pipe(clean());
});

gulp.task('sass', function() {
    return gulp.src("src/sass/lab-mentoria.min.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('server', ['sass'], function(){
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
  
  gulp.watch('src/**/*').on('change', browserSync.reload);
  
  gulp.watch("src/sass/**/*", ['sass']);  

});