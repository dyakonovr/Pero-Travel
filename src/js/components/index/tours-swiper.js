import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const toursSwiper = new Swiper('.tours-slider', {
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },

    576: {
      slidesPerView: 2,
    },

    320: {
      slidesPerView: 1,
    }
  }
});
