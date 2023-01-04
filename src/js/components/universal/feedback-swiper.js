import Swiper, { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';

Swiper.use([Navigation, Scrollbar]);

const feedbackSwiper = new Swiper('.feedback-slider', {
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  }
});
