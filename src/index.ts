import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./sass/app.sass";

import Dropdown from "./components/dropdown";
import "./components/slider";
import Collapse from "./components/collapse";

class Moonlight {
  constructor() {
    this.init = this.init.bind(this);
  }

  init() {
    this.collapse();
    this.dropdown();
  }

  collapse() {
    const collapseTogglers = document.querySelectorAll<HTMLElement>(
      "[data-toggle=collapse]"
    );

    collapseTogglers.forEach((el) => {
      const collapseElement = document.querySelector<HTMLElement>(
        el.getAttribute("data-target")
      );

      el.addEventListener("click", () =>
        new Collapse(collapseElement).toggle()
      );
    });
  }

  dropdown() {
    const dropdownTogglers = document.querySelectorAll<HTMLElement>(
      "[data-toggle=dropdown]"
    );

    dropdownTogglers.forEach((el) => {
      const dropdown = new Dropdown(el);

      const screenWidth = window.innerWidth;

      if (screenWidth < 1024) {
        el.addEventListener("click", (event) => {
          event.preventDefault();
          dropdown.toggle();
        });
      } else {
        dropdown.parent.addEventListener("mouseenter", () => dropdown.show());
        dropdown.parent.addEventListener("mouseleave", () => dropdown.hide());
      }
    });
  }
}

const moonlight = new Moonlight();

document.addEventListener("DOMContentLoaded", () => {
  moonlight.init();
});
