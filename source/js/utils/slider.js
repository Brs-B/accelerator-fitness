// eslint-disable-next-line
const swiper = new Swiper('.mySwiper', {
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 0,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      initialSlide: 2,
    },
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 40,
      initialSlide: 0,
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

// eslint-disable-next-line
const newSwiper = new Swiper('.newSwiper', {
  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: '.reviews__arrow--next',
    prevEl: '.reviews__arrow--prev',
  },
});
