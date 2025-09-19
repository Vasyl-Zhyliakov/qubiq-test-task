import './styles/main.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import disconnectIcon from './images/icons/disconnect.svg';

const buttonConnect = document.querySelector('.connect');

buttonConnect.addEventListener('click', () => {
  if (buttonConnect.classList.contains('connect--active')) {
    buttonConnect.classList.remove('connect--active');
    buttonConnect.innerHTML = 'Connect';
  } else {
    buttonConnect.classList.add('connect--active');
    buttonConnect.innerHTML = `
      <span>0x233...ger</span>
      <span class="connect__icon-wrap">
        <img src=${disconnectIcon} alt="disconnect icon" class="connect__icon">
      </span>
    `;
  }
});

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets', //.swiper-pagination-bullet {}
    clickable: true,
  },

  slideToClickedSlide: true,
  autoHeight: false,
  breakpoints: {
    0: {
      spaceBetween: 16,
      slidesPerView: 1,
    },

    1278: {
      spaceBetween: 78,
      slidesPerView: 3,
    },

    1900: {
      spaceBetween: 145,
      slidesPerView: 3,
    },
  },
});
