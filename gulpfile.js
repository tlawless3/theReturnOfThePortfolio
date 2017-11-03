var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });


  gulp.watch("js/*.js", ['reload']);
  gulp.watch("html/*.html", ['reload']);
  gulp.watch("index.html");
  gulp.watch("css/*.css", ['reload']);
});

gulp.task("reload", function(){
  browserSync.reload();
  done();
});
