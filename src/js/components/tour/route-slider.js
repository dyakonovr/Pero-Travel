import Swiper, { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';

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
  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  }
});


routeSwiper.navigation.update()
