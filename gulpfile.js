var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var streamify = require("gulp-streamify")
var vueify = require("vueify");
var babelify = require("babelify");
var watchify = require('watchify');
var hmr = require('browserify-hmr');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var assign = require('lodash.assign');
var uglify = require('gulp-uglify');
var env = require('gulp-env');
var fs = require('fs');


// 在这里添加自定义 browserify 选项
// var customOpts = {
//   entries: ['./src/main.js'],
//   debug: true,
//   plugin:[hmr]
// };
// var opts = assign({}, watchify.args, customOpts);
// var b = watchify(browserify(opts));
// b.transform(vueify);
// b.transform("babelify", {presets: ["es2015"]})
//
// b.on('update', bundle); // 当任何依赖发生改变的时候，运行打包工具
//
// function bundle() {
//   return b.bundle()
//     .on('error', function (meesage) {
//       console.log(meesage)
//     })
//     .pipe(source('main.js'))
//     .pipe(gulp.dest('./tmp'));
// }
// gulp.task('devTransJs', bundle);


gulp.task('mulTransJs',function () {
  var files = [
    './src/main.js',
  ];
  files.map(function(entry,index) {
      //在这里添加自定义 browserify 选项
      var customOpts = {
        entries: [entry],
        debug: true,
      };

      if(index === 0){
        customOpts.plugin = [hmr]
      }

      var opts = assign({}, watchify.args, customOpts)
      var b = watchify(browserify(opts));
      b.transform(vueify);
      b.transform("babelify", {presets: ["es2015"]})

      b.on('update', bundle); // 当任何依赖发生改变的时候，运行打包工具

      function bundle() {
        return b.bundle()
          .on('error', function (meesage) {
            console.log(meesage)
          })
          .pipe(source(entry.split('/')[2]))
          .pipe(gulp.dest('./tmp'));
      }
      bundle()
  });
})




gulp.task('trans_imgs',function(){
  var fileList = [];
  function walk(path){
    var dirList = fs.readdirSync(path);
    dirList.forEach(function(item){
      if(fs.statSync(path + '/' + item).isDirectory()){
        walk(path + '/' + item);
      }else{
        if(item == '.DS_Store') return;
        fileList.push('./static/images/'+item);
      }
    });
  }
  walk('src/static/images');

  var arrayString = '['
  fileList.forEach(function(item){
    arrayString += '"'+item+'",'
  })
  arrayString += ']'
  var content = 'var imgs = ' + arrayString +';' + '\r\nexport default imgs;'
  fs.writeFileSync('src/static/js/img.js', content, 'utf-8');
  return;
})



gulp.task('destHtml',function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./tmp/'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('destStatic',function () {
  return gulp.src('./src/static/**')
    .pipe(gulp.dest('./tmp/static'))
    .pipe(gulp.dest('./dist/static'))
})

gulp.task('default',['destStatic','destHtml','mulTransJs'],function () {

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


  gulp.watch('src/static/images/*', ['destStatic','trans_imgs']).on('change',function(){
    setTimeout(function(){reload()},100)
  });


})


gulp.task('html',function () {
  return gulp()
})

gulp.task('build', ['destHtml'], function(){

  const envs = env.set({
    NODE_ENV: 'production'
  });

  return browserify('./src/main.js')
    .transform(vueify)
    .transform("babelify", {presets: ["es2015"]})
    .bundle().on('error', function(err){
      console.log(err.message);
      this.emit('end');
    })
    .pipe(source('main.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('dist'));
});

