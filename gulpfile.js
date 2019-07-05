let gulp = require('gulp');
let less = require('gulp-less');
let del = require('del');
// 清除旧文件
gulp.task('clean', function (done) {
    del(['src/css/.css'], done());
});
// 编译less
gulp.task('less', function (done) {
    gulp.src(['src/less/*.less', '!src/less/global.less'])
        .pipe(less())
        .pipe(gulp.dest('src/css'));
    done();
});
gulp.task('less-build', function (done) {
    gulp.src(['src/css/*.css'])
        .pipe(gulp.dest('./build/css'));
    done();
});
gulp.task('html-build', function (done) {
    gulp.src(['src/*.html'])
        .pipe(gulp.dest('./build/'));
    done();
});
gulp.task('img-build', function (done) {
    gulp.src(['src/img/*.*'])
        .pipe(gulp.dest('./build/img'));
    done();
});
gulp.task('font-build', function (done) {
    gulp.src(['src/font/*.*'])
        .pipe(gulp.dest('./build/font'));
    done();
});
gulp.task('assets-build', function (done) {
    gulp.src(['src/assets/*.*'])
        .pipe(gulp.dest('./build/assets'));
    done();
});
gulp.task('js-build', function (done) {
    gulp.src(['src/js/*.*'])
        .pipe(gulp.dest('./build/js'));
    done();
});
// 监听less文件变化
gulp.task('watch', function (done) {
    gulp.watch('src/less/*.less', gulp.series('less'));
});
// 启动
gulp.task('start', gulp.series('clean', gulp.parallel('less', 'watch')), function (done) {
    done();
});
// 打包
gulp.task('build', gulp.series( gulp.parallel('less-build', 'js-build', 'html-build', 'img-build', 'font-build', 'assets-build')), function (done) {
    done();
});