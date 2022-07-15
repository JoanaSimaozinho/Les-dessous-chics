/**
 * Moonlight Dropdown
 */
export default class Dropdown {
  element: HTMLElement;
  isOpen: boolean;

  constructor(element: HTMLElement) {
    this.element = element;
    this.isOpen = false;

    this.toggle = this.toggle.bind(this);
  }

  public toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  private open = () => {
    this.element.style.display = "";
    this.isOpen = true;
    setTimeout(() => {
      this.element.classList.add("show");
    }, 100);
  };

  private close = () => {
    this.element.classList.remove("show");
    this.isOpen = false;
    setTimeout(() => {
      this.element.style.display = "none";
    }, 300);
  };
}
