var gulp = require('gulp'),
sass = require('gulp-sass');
browserSync = require('browser-sync');
// watch = require('gulp-watch');

gulp.task('sass', function() {
	return gulp.src(['app/sass/**/*.scss','app/sass/**/*.sass'])
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync',function() {
	browserSync({
		server: {
			baseDir: "app"
		},
		notify: false
	})
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch(['app/sass/**/*.scss', 'app/sass/**/*.sass'], ['sass']);
	// на будущее - ватч не может следить за несколькими файлами
	// прописать в консоли вот такое вот:
	// echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});