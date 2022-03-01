var gulp = require('gulp');

// default task 执行 gulp 的默认分支任务
gulp.task('default', function (done) {
    console.log('gulp----');
    done();
})

// js 任务
gulp.task('js', function (done) {
    gulp.src('js/*.js')
        .pipe(gulp.dest('dest/'));
    done();
})