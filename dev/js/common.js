$(document).ready(function () {
  function init() {
    var sticky = $('header'),
      scroll = $(window).scrollTop();
    if (scroll >= 50) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  }
  init();
  $(window).scroll(function(){
    var sticky = $('header'),
      scroll = $(window).scrollTop();
    if (scroll >= 50) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
  $('.home-slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 579,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

});


