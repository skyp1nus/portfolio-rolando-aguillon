const timeToRedirect = 1.3 * 1000;
const timeToChangeBackground = 1;
const timeToEnableScroll = 1 * 1000;
const timeToHidePreload = 2 * 1000;
const timeoutPreload = 3.5 * 1000;
const timeoutStartAnimation = 3.7 * 1000;

function redirect(url) {
    document.location.href = '/portfolio-rolando-aguillon' + url;
}

function changeLeftFadeInNameClass() {
    const addClass = ["animate__animated", "animate__fadeInLeft", "animate__delay-1s"];

    let fadeLeft = document.querySelectorAll("[id^='fadeLeft']");

    fadeLeft.forEach(element => {
        element.classList.add(...addClass);
    });
}


function changeRightFadeInNameClass() {
    const addClass = ["animate__animated", "animate__fadeInRight", "animate__delay-1s"];

    let fadeRight = document.querySelectorAll("[id^='fadeRight']");

    fadeRight.forEach(element => {
        element.classList.add(...addClass);
    });
}

function changeLeftFadeOutNameClass() {
    const removeClass = ["animate__fadeInLeft", "animate__delay-1s"];
    const addClass = ["animate__fadeOutLeft"];

    let fadeLeft = document.querySelectorAll("[id^='fadeLeft']");

    fadeLeft.forEach(element => {
        element.classList.remove(...removeClass);
        element.classList.add(...addClass);
    });
}


function changeRightFadeOutNameClass() {
    const removeClass = ["animate__fadeInRight", "animate__delay-1s"];
    const addClass = ["animate__fadeOutRight"];

    let fadeRight = document.querySelectorAll("[id^='fadeRight']");

    fadeRight.forEach(element => {
        element.classList.remove(...removeClass);
        element.classList.add(...addClass);
    });
}

function changeBackgroundImage(imageUrl) {
    const style = document.createElement('style');
    style.innerHTML = `html::after {
    background-image: url(` + imageUrl + `);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    animation: backgroundChange ` + timeToChangeBackground + `s alternate;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -1;
    }`;

    document.head.appendChild(style);
}

function changeFadeOutDownNameClass() {
    const removeClass = ["animate__fadeInUp", "animate__delay-1s"];
    const addClass = ["animate__fadeOutDown"];

    let fadeRight = document.querySelectorAll("[id^='fadeOutDown']");

    fadeRight.forEach(element => {
        element.classList.remove(...removeClass);
        element.classList.add(...addClass);
    });
}

function switchScroll() {
    let html = document.querySelector('html');
    let style = window.getComputedStyle ? getComputedStyle(html, null) : html.currentStyle;

    console.log(style.overflowY.match("hidden") != null);

    if (style.overflowY.match("hidden") != null) {
        console.log("Enable");
        setTimeout(() => { html.style.overflowY = "scroll"; }, 0);
    } else {
        console.log("Disable");
        setTimeout(() => { html.style.overflowY = "hidden"; }, 0);
    }
}

function homeStartAnimation() {
    changeLeftFadeInNameClass();
    changeRightFadeInNameClass();
    switchScroll();
}

function homeToRedirect(url, imageUrl) {
    switchScroll();
    changeLeftFadeOutNameClass();
    changeRightFadeOutNameClass();
    changeBackgroundImage(imageUrl);

    setTimeout(() => {
        redirect(url);
    }, timeToRedirect);
}

function backToHome(url, imageUrl) {
    changeFadeOutDownNameClass();
    changeBackgroundImage(imageUrl);

    setTimeout(() => {
        redirect(url);
    }, timeToRedirect);
}

function hiddenPreloading() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, timeToHidePreload);
}

window.onload = () => {
    if (window.location.href.match('index.html') != null) {
        setTimeout(hiddenPreloading, timeoutPreload);
        setTimeout(homeStartAnimation, timeoutStartAnimation);
    }
}
