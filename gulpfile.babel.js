import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';


const plugins = gulpLoadPlugins();

// const paths = {
//     js: ['./**/*.js', '!dist/**', '!node_modules/**', '!coverage/**'],
//     nonJs: ['./package.json', './.gitignore', './.env'],
//     tests: './server/tests/*.js'
// };
const paths = {
    app: ['app/**/*.{js,sass,pug}'],
    sass: 'app/sass/**/*.scss',
    pug: ['!app/shared-views/**', 'app/**/*.pug'],
    entryJs: 'app/js/app.js',
    server: ['./**/**/*.js', '!dist/**', '!node_modules/**', '!coverage/**', '!app/**', '!public/**'],
    js: 'app/js/**/*.js',
    nonJs: ['./package.json', './.gitignore', './.env'],
    public: 'public'
};

// gulp tasks
gulp.task('pug2html', () => {
    gulp.src(paths.pug)
        .pipe(plugins.pug())
        .pipe(gulp.dest(paths.public))
        .pipe(browserSync.stream());
});


gulp.task('sass2css', () => {
    gulp.src('app/sass/app.scss')
        .pipe(plugins.sass())
        .pipe(gulp.dest(paths.public + '/css'))
        .pipe(browserSync.stream());
});

// Clean up dist and coverage directory
gulp.task('clean', () =>
    del.sync(['dist/**', 'dist/.*','public/**', 'public/.*', 'coverage/**', '!dist', '!coverage', '!public'])
);

// Copy non-js files to dist
gulp.task('copy', () =>
    gulp.src(paths.nonJs)
        .pipe(plugins.newer('dist'))
        .pipe(gulp.dest('dist'))
);

// Compile ES6 to ES5 and copy to dist
gulp.task('babel', () =>
    gulp.src([...paths.server, '!gulpfile.babel.js'], {base: '.'})
        .pipe(plugins.newer('dist'))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.babel())
        .pipe(plugins.sourcemaps.write('.', {
            includeContent: false,
            sourceRoot(file) {
                return path.relative(file.path, __dirname);
            }
        }))
        .pipe(gulp.dest('dist'))
);

// Start server with restart on file changes
gulp.task('nodemon', ['copy', 'babel', 'sass2css', 'pug2html'], () =>
    plugins.nodemon({
        script: path.join('dist', 'index.js'),
        ext: 'js',
        ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
        tasks: ['copy', 'babel', 'sass2css', 'pug2html']
    })
);

// gulp serve for development
gulp.task('serve', ['clean'], () => runSequence('nodemon'));

// default task: clean dist, compile js files and copy non-js files.
gulp.task('default', ['clean'], () => {
    runSequence(
        ['copy', 'babel', 'sass2css', 'pug2html']
    );
});
