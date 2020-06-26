$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    speed: 1000,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    touchThreshold: 50,
    waitForAnimate: false,
  });
});

let count = 0;
let allDiv = document.querySelectorAll('.window-signature div');

function activ(count) {
  allDiv[count];
  allDiv.forEach(function (elem) {
    if (allDiv[count] == elem) elem.classList.add('active');
    else elem.classList.remove('active');
  });
}

allDiv.forEach(function (elem, index) {
  elem.onclick = function () {
    count = index;
    activ(count);
  };
});
