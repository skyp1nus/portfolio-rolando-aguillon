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
        dest: pathDest
    },

    images: {
        src: pathSrc + "/assets/images/*.png",
        newer: pathDest + "/assets/images/*.png",
        dest: pathDest + "/assets/images"
    },

    svg: {
        src: pathSrc + "/assets/svg/*.svg",
        newer: pathDest + "/assets/svg/*.svg",
        dest: pathDest + "/assets/svg"
    },

    font: {
        src: pathSrc + "/assets/fonts/*.{ttf, otf}",
        newer: pathDest + "/assets/fonts/*.{ttf, otf}",
        dest: pathDest + "/assets/fonts"
    }
}