import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./sass/app.sass";
import Headroom from "headroom.js";
import "bootstrap";

const header = document.querySelector(".navbar")!;

const headroom = new Headroom(header);

headroom.init();

class Dropdowns {
  dropdown: HTMLElement;
  toggler: HTMLButtonElement | HTMLAnchorElement;
  menu: HTMLElement;

  constructor(dropdown: HTMLElement) {
    this.dropdown = dropdown;
    this.toggler = this.dropdown.querySelector(".dropdown-toggler")!;
    this.menu = this.dropdown.querySelector(".dropdown-menu")!;

    this.bindEvents();
  }

  bindEvents = () => {
    this.toggler.addEventListener("mouseenter", this.openMenu.bind(this));
    this.dropdown.addEventListener("mouseleave", this.closeMenu.bind(this));
  };

  openMenu = () => {
    this.menu.style.display = "";
    setTimeout(() => {
      this.menu.classList.add("show");
    }, 100);
  };

  closeMenu = () => {
    this.menu.classList.remove("show");
    setTimeout(() => {
      this.menu.style.display = "none";
    }, 300);
  };
}

document
  .querySelectorAll<HTMLElement>(".dropdown")
  .forEach((dropdown) => new Dropdowns(dropdown));

const swiper = new Swiper(".swiper", {
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
