var gulp          = require('gulp'),
	  browserSync   = require('browser-sync'),
    sass          = require('gulp-sass'),
	  jshint        = require('gulp-jshint'),
    jshintStylish = require('jshint-stylish'),
    csslint       = require('gulp-csslint'),
    autoprefixer  = require('gulp-autoprefixer'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
	  clean         = require('gulp-clean');

var inputSass  = './src/sass/**/*.scss';
var outputSass = './src/css/';
var sassOptions  = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

var autoprefixerOptions  = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
}

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
    return gulp.src(inputSass)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest(outputSass))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return gulp.src('src/script/**/*.js')
    .pipe(concat('lab-mentoria.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/script/'));
});


gulp.task('server', ['sass', 'scripts'], function(){
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
  
  gulp.watch('src/**/*').on('change', browserSync.reload);

  gulp.watch('src/script/**/*.js').on('change', function(event){
    gulp.src(event.path)
        .pipe(jshint())
        .pipe(jshint.reporter(jshintStylish));
  });
  
  gulp.watch(inputSass, ['sass']);  

  gulp.watch(['script/**/*.js'], ['scripts'])

});