const env = process.env.NODE_ENV || "development";
if (env === "development") {
    require("dotenv").load();
}

const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");
const nodemon = require("nodemon");
const browserSync = require("browser-sync");
const webpack = require("webpack-stream");
const path = require("path");
const paths = {
    sass: "app/sass/**/*.scss",
    pug: ["!app/shared-views/**", "app/**/*.pug"],
    entryJs: "app/js/app.js",
    js: "app/js/**/*.js",
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

gulp.task("nodemon", () => {
    nodemon({
        script: path.join(__dirname, "index.js"),
        env: { NODE_ENV: "development" },
        ignore: ["app/", "node_modules/"]
    }).on("restart", function() {
        console.log(">> node restart");
    });
});

gulp.task("browser-sync", ["sass2css", "pug2html", "bundleJS"], () => {
    browserSync.init({
        proxy: `localhost:${process.env.PORT}`,
        port: 5000,
        open: false
    });
    gulp.watch(paths.sass, ["sass2css"]);
    gulp.watch(paths.pug, ["pug2html"]);
    gulp.watch(paths.js, ["bundleJS"]);
});

gulp.task("build", [
    "pug2html",
    "sass2css",
    "bundleJS",
    "nodemon",
    "browser-sync"
]);

gulp.task("default", ["build"]);
