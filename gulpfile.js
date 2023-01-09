const {watch, series, parallel, dest, src} = require('gulp');
const htmlmin = require("gulp-htmlmin");

const browserSync = require("browser-sync");
const del = require("del");
const sass = require('gulp-sass')(require('sass'));

const html = () => {
    return src("./src/html/*.html")
        .pipe(htmlmin(
            {
                collapseWhitespace: true
            }
        ))
        .pipe(dest("./public"))
        .pipe(browserSync.stream());
}

const scss = () => {
    return src("./src/scss/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(dest("./public"))
        .pipe(browserSync.stream());
}

const watcher = () => {
    watch("./src/html/*.html", html);
    watch("./src/scss/*.scss", scss);
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
}

const clear = () => {
    return del("./public")
}

exports.dev = series(
    clear,
    series(html, scss),
    parallel(server, watcher)
);

