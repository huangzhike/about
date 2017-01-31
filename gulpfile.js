const gulp = require("gulp"),
	autofix = require("gulp-autoprefixer"),
	minifycss = require("gulp-clean-css"),
	imagemin = require("gulp-imagemin"),
	concat = require("gulp-concat"),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify");

gulp.task("css", function() {
	function a() {
		gulp.src("css/*.css")
			.pipe(concat("resume.min.css"))
			.pipe(autofix())
			.pipe(minifycss())
			.pipe(gulp.dest("dist/css"))
	}
	a();
	gulp.watch("css/*.css", function() {
		a();
	})
});

gulp.task("js", function() {
	function a() {
		gulp.src(["js/*.js"])
			.pipe(uglify())
			.pipe(rename({ suffix: ".min" }))
			.pipe(gulp.dest("dist/js"))

	}
	a();
	gulp.watch("js/*.js", function() {
		a();
	})
});

gulp.task("img", () =>
	gulp.src("img/*")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/img"))
);

gulp.task("default", ["js", "css", "img"]);
