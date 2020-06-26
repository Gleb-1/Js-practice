$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1500,
    focusOnSelect: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,
    waitForAnimate: true,
    fade: false,
    responsive: [
      {
        breakpoint: 1966,
        settings: {
          autoplay: true,
        },
      },
    ],
  });
});
