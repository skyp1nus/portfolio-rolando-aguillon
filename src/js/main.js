const carousel = $(".carousel");

carousel.slick({
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: '#stage-dots',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
    ],
});

carousel.on('wheel', (function(e) {
    e.preventDefault();
    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
    } else {
        $(this).slick('slickNext');
    }
  }));