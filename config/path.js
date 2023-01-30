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
        animate: "./node_modules/animate.css/animate.min.css",
        watch: pathSrc + "/scss/**/*.scss",
        dest: pathDest + "/css"
    },

    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js"
    },

    images: {
        src: pathSrc + "/assets/images/**/*.{png,jpg}",
        newer: pathDest + "/assets/images/**/*.{png,jpg}",
        watch: pathSrc + "/assets/images/**/*.{png,jpg}",
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