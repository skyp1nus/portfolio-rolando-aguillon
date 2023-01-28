function notScroll() {
    let body = document.querySelector('html');
    body.style.overflow = 'hidden';
}

function hiddenPreloading() {
    let body = document.querySelector('html');
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 1990);

    body.style.overflow = "scroll";
}

waitingTime = setTimeout(hiddenPreloading, 3500);

window.onload = () => { notScroll(); waitingTime; }