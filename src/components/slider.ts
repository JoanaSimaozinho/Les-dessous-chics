import Swiper, { Navigation, Pagination } from "swiper";

const slider = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    992: {
      slidesPerView: 5,
    },
  },
  slidesPerView: 2,
  spaceBetween: 5,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
