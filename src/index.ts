import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./sass/app.sass";
import Headroom from "headroom.js";

const header = document.querySelector(".navbar")!;

const headroom = new Headroom(header);

headroom.init();

class Navbar {
  navbar: HTMLElement;
  mobileMenu: HTMLElement;

  constructor() {
    this.navbar = document.querySelector(".navbar")!;
    this.mobileMenu = document.querySelector(".mobile-menu")!;

    const headroom = new Headroom(this.navbar);

    headroom.init();

    this.bindEvents();
  }

  bindEvents = () => {
    this.navbar.querySelectorAll(".navbar-toggler").forEach((toggler) => {
      toggler.addEventListener("click", this.handleMenu.bind(this));
    });
    this.mobileMenu
      .querySelector(".mobile-menu-overlay")!
      .addEventListener("click", this.handleMenu.bind(this));
  };

  handleMenu = () => {
    console.log("click");
    const isOpen = this.mobileMenu.classList.contains("open");

    if (isOpen) {
      this.mobileMenu.classList.remove("open");
      setTimeout(() => {
        this.mobileMenu.style.display = "none";
      }, 300);
    } else {
      this.mobileMenu.style.display = "";
      setTimeout(() => {
        this.mobileMenu.classList.add("open");
      }, 100);
    }
  };
}
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

new Navbar();
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
