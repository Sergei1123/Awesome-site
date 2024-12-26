$(document).ready(() => {
    let currentSlide = 0;
    let isBusy = false;

    $('.slider-arrow').on('click', (e) => {
      const that = $(e.currentTarget);
      const slidesCount = slides.lenght - 1;

      if (!isBusy) {

        if (that.hasClass('right')) {
          currentSlide += 1;
          if (currentSlide > slidesCount) currentSlide = 0;
        } else {
          currentSlide -= 1;
          if (currentSlide < 0) currentSlide = currentCount;
        }
        isBussy = true;
        $('.slider-image').animate({'opacity': 0}, 350, () => {
          $('slider-image').css('background-image', 'url('+ slides[currentSlide] + ')');
          $('.slider-image').animate({'opacity':1}, 350, () => isBussy = false);
        });
      }
    });
});

const slides = [
    'img/slider/bootstrap01.jpg',
    'img/slider/bootstrap02.jpg',
    'img/slider/bootstrap03.jpg',
    'img/slider/bootstrap04.jpg',
    'img/slider/bootstrap05.jpg',
    'img/slider/bootstrap06.jpg',
];
