var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');
var livereload = require('gulp-livereload');

// default task 执行 gulp 的默认分支任务
gulp.task('default', function (done) {
    console.log('gulp----');
    done();
})

// js 任务
gulp.task('js', function (done) {
    gulp.src('js/*.js')
        .pipe(gulp.dest('dist/'));
    done();
})

// css 任务
gulp.task('css', function (done) {
    gulp.src('js/*.css')
        .pipe(gulp.dest('dist/'));
    done();
})

// rename
// 利用 rename 将 css 转换为 wxss
gulp.task('rename', function (done) {
    gulp.src('js/*.less')
        .pipe(less())
        .pipe(rename({
            extname: '.wxss'
        }))
        .pipe(gulp.dest('dist/'));
    done();
})

