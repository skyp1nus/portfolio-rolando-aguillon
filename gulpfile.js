const path = require("./config/path.js");

const {watch, series, parallel, dest, src} = require('gulp');
const htmlmin = require("gulp-htmlmin");
const imagemin = require('gulp-imagemin');
const newer = require("gulp-newer");

const browserSync = require("browser-sync");
const del = require("del");
const sass = require('gulp-sass')(require('sass'));

const html = () => {
    return src(path.html.src)
        .pipe(htmlmin(
            {
                collapseWhitespace: true
            }
        ))
        .pipe(dest(path.html.dest))
        .pipe(browserSync.stream());
}

const scss = () => {
    return src(path.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(path.scss.dest))
        .pipe(browserSync.stream());
}

const images = () => {
    return src(path.images.src)
    .pipe(newer(path.images.newer))
    // .pipe(imagemin(
    //     {
    //         verbose: true
    //     }
    // ))
    .pipe(dest(path.images.dest))
}

const svg = () => {
    return src(path.svg.src)
        .pipe(newer(path.svg.newer))
        .pipe(imagemin(
            {
                verbose: true
            }
        ))
        .pipe(dest(path.svg.dest))
}

const fonts = () => {
    return src(path.font.src).pipe(dest(path.font.dest))
}

const watcher = () => {
    watch(path.html.watch, html);
    watch(path.scss.watch, scss);
    watch(path.images.watch, images);
    watch(path.svg.watch, svg);
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: path.server.prod
        }
    });
}

const clear = () => {
    return del(path.server.prod)
}

exports.dev = series(
    clear,
    series(html, scss, images, svg, fonts),
    parallel(server, watcher)
);

