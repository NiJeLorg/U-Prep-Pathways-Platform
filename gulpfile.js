const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");
const browserSync = require("browser-sync");
const webpack = require("webpack-stream");
const config = require("dotenv").config();

const paths = {
    app: ["app/**/*.{js,sass,pug}"],
    sass: "app/sass/**/*.scss",
    pug: ["!app/shared-views/**", "app/**/*.pug"],
    entryJs: "app/js/app.js",
    server: [
        "./**/**/*.js",
        "!dist/**",
        "!node_modules/**",
        "!coverage/**",
        "!app/**",
        "!public/**"
    ],
    js: "app/js/**/*.js",
    nonJs: ["./package.json", "./.gitignore", "./.env"],
    public: "public"
};

// gulp tasks
gulp.task("pug2html", () => {
    gulp.src(paths.pug)
        .pipe(pug())
        .pipe(gulp.dest(paths.public))
        .pipe(browserSync.stream());
});

gulp.task("sass2css", () => {
    gulp.src("app/sass/app.scss")
        .pipe(sass())
        .pipe(gulp.dest(paths.public + "/css"))
        .pipe(browserSync.stream());
});

gulp.task("bundleJS", () => {
    gulp.src(paths.entryJs)
        .pipe(webpack(require("./webpack.config")))
        .pipe(gulp.dest(paths.public + "/js"))
        .pipe(browserSync.stream());
});

gulp.task("browser-sync", () => {
    browserSync.init(null, {
        proxy: "localhost:" + config.port,
        port: 5000,
        open: false
    });
    gulp.watch(paths.sass, ["sass2css"]);
    gulp.watch(paths.app, ["pug2html"]);
    gulp.watch(paths.js, ["bundleJS"]);
});

gulp.task("build", ["pug2html", "sass2css", "bundleJS", "browser-sync"]);

gulp.task("default", ["build"]);
