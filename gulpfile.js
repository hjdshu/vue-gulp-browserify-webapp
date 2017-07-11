var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var streamify = require("gulp-streamify")
var vueify = require("vueify");
var babelify = require("babelify");
var watchify = require('watchify');
var hmr = require('browserify-hmr');
var browserSync = require('browser-sync');
var assign = require('lodash.assign');
var uglify = require('gulp-uglify');
var env = require('gulp-env');

// 在这里添加自定义 browserify 选项
var customOpts = {
  entries: ['./src/app.js'],
  debug: true,
  plugin:[hmr]
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
b.transform(vueify);
b.transform("babelify", {presets: ["es2015"]})

b.on('update', bundle); // 当任何依赖发生改变的时候，运行打包工具

function bundle() {
  return b.bundle()
    .on('error', function (meesage) {
      console.log(meesage)
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./tmp'));
}

gulp.task('devTransJs', bundle);

gulp.task('destHtml',function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./tmp/'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('destStatic',function () {
  return gulp.src('./src/static/**')
    .pipe(gulp.dest('./tmp/static'))
    .pipe(gulp.dest('./dist/static'))
})

gulp.task('default',['destStatic','destHtml','devTransJs'],function () {

  browserSync({
    port:8000,
    server:{
      baseDir:['tmp'],
      routes: {
        //'/bower_components': 'bower_components',
        // '/dist':'dist'
      },
      startPath:'index.html'
    }
  })
})


gulp.task('html',function () {
  return gulp()
})

gulp.task('build', ['destHtml'], function(){

  const envs = env.set({
    NODE_ENV: 'production'
  });

  return browserify('./src/app.js')
    .transform(vueify)
    .transform("babelify", {presets: ["es2015"]})
    .bundle().on('error', function(err){
      console.log(err.message);
      this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('dist'));
});

