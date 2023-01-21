const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
    server: {
        prod: pathDest
    },

    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },

    scss: {
        src: pathSrc + "/scss/*.scss",
        watch: pathSrc + "/scss/**/*.scss",
        dest: pathDest + "/css"
    },

    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        jquery: "./node_modules/jquery/dist/jquery.min.js",
        slick: "./node_modules/slick-carousel/slick/slick.js",
        dest: pathDest + "/js"
    },

    images: {
        src: pathSrc + "/assets/images/**/*.png",
        newer: pathDest + "/assets/images/**/*.png",
        watch: pathSrc + "/assets/images/**/*.png",
        dest: pathDest + "/assets/images"
    },

    svg: {
        src: pathSrc + "/assets/svg/*.svg",
        newer: pathDest + "/assets/svg/*.svg",
        watch: pathSrc + "/assets/svg/*.svg",
        dest: pathDest + "/assets/svg"
    },

    font: {
        src: pathSrc + "/assets/fonts/*",
        dest: pathDest + "/assets/fonts"
    }
}