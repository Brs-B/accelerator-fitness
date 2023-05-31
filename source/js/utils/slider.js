// eslint-disable-next-line no-undef
const swiper = new Swiper('.mySwiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 2,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
      initialSlide: 2,
    },
    1300: {
      slidesPerView: 'auto',
      spaceBetween: 40,
      initialSlide: 0,
    },
  },
  loop: true,
  navigation: {
    nextEl: '.coaches__arrow--next',
    prevEl: '.coaches__arrow--prev',
  },
});

swiper();

// eslint-disable-next-line no-undef
const newSwiper = new Swiper('.newSwiper', {
  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: '.reviews__arrow--next',
    prevEl: '.reviews__arrow--prev',
  },
});

newSwiper();
