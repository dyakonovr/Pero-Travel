import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const routeSwiper = new Swiper('.route-slider', {
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
