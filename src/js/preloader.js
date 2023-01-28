function hiddenPreloading() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 1990);
}

waitingTime = setTimeout(hiddenPreloading, 3500);

window.onload = () => { waitingTime; }