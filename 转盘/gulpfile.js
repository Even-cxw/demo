// **切记node版本为v10.15.0**
// cnpm install gulp gulp-connect gulp-concat gulp-babel gulp-rename gulp-uglify -S
// 获取 gulp
var gulp = require('gulp');
// 开启服务器插件
const connect = require('gulp-connect');
// 合并js文件插件
const concat =  require('gulp-concat');
// 编译代码插件
const babel =   require('gulp-babel');
// 重新命名插件
const rename =  require('gulp-rename');
// 压缩插件
var uglify = require('gulp-uglify')

gulp.task('webserver', () =>
    connect.server({
        livereload: true,
        port: 2333
    })
);
gulp.task('script', function() {
    return gulp.src('src/ES6/*.js')
        .pipe(concat('all.js'))  
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'})) 
        .pipe(gulp.dest('src/dist/'))
})

gulp.task('auto', function () {
    gulp.watch('js/*.js', ['script'])
})
gulp.task('default', ['webserver', 'script', 'auto'])
