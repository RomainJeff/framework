var prodPath = "dist";
var devPath  = ".";
var uglifyConfig = {
    mangle: false
};
var jasmineConfig = {
    integration: true,
    abortOnFail: true,
    vendor: [prodPath +'/scripts/**/*.js']
};

var gulp        = require('gulp');
var jshint      = require('gulp-jshint');
var babel       = require('gulp-babel');
var concat      = require('gulp-concat');
var sourcemaps  = require('gulp-sourcemaps');
var jasmine     = require('gulp-jasmine-phantom');
//var serve       = require('gulp-serve');
//var useref      = require('gulp-useref');
//var compass     = require('gulp-for-compass');
var uglify      = require('gulp-uglify');
//var clean       = require('gulp-clean');
//var rename      = require('gulp-rename');

 

/** COMPILE MODULES **/
gulp.task('compileServices', ['lintModules'], function () {
    return gulp.src(devPath +'/modules/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat("framework.js"))
        .pipe(babel())
        .pipe(gulp.dest(prodPath));
});


/** COMPILE VENDORS **/
gulp.task('compileVendors', function () {
    return gulp.src(devPath +'/vendors/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat("vendors.js"))
        .pipe(gulp.dest(prodPath));
});


/** UGLIFY VENDORS **/
gulp.task('uglifyVendors', ['compileVendors'], function () {
    return gulp.src(prodPath +'/vendors.js')
        .pipe(uglify(uglifyConfig))
        .pipe(gulp.dest(prodPath));
});


/** VERIFY JAVASCRIPT **/
gulp.task('lintModules', function() {
    return gulp.src(devPath +'/modules/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});



/** RUN TESTS **/ 
gulp.task('tests', ['compileServices'], function () {
    return gulp.src('tests/**/*.js')
        .pipe(jasmine(jasmineConfig));
});


/** TASK PROD **/
gulp.task('prod', ['compileServices', 'uglifyVendors']);
