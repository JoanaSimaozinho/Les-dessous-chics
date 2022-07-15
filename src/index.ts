import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./sass/app.sass";

import Dropdown from "./components/dropdown";
import "./components/slider";
import Collapse from "./components/collapse";

class Moonlight {
  constructor() {
    this.navbar = this.navbar.bind(this);
  }

  init() {
    document
      .querySelectorAll<HTMLElement>(".dropdown")
      .forEach((dropdown) => new Dropdown(dropdown));
    this.navbar();
    this.megaMenu();
  }

  navbar() {
    const toggler = document.querySelector<HTMLElement>(".navbar-toggler");
    const collapse = document.querySelector<HTMLElement>(".navbar-collapse");

    toggler.addEventListener("click", () => new Collapse(collapse).toggle());
  }

  megaMenu() {
    const navLink = document.querySelector<HTMLElement>(".nav-link");
    const subMenu = document.querySelector<HTMLElement>(".sub-nav-menu");

    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      subMenu.classList.toggle("show");
    });
  }
}

const moonlight = new Moonlight();

document.addEventListener("DOMContentLoaded", () => {
  moonlight.init();
});
