/**
 * Moonlight Collapse
 */
import { reflow } from "../utils/index";

const CLASS_NAME_SHOW = "show";
const CLASS_NAME_COLLAPSE = "collapse";
const CLASS_NAME_COLLAPSING = "collapsing";

export default class Collapse {
  private element: HTMLElement;
  private isTransitioning: boolean;

  constructor(element: HTMLElement) {
    this.element = element;
    this.isTransitioning = false;
  }

  public toggle() {
    if (this.isShown()) {
      this.close();
    } else {
      this.open();
    }
  }

  private open = () => {
    if (this.isTransitioning || this.isShown()) {
      return;
    }

    this.element.classList.remove(CLASS_NAME_COLLAPSE);
    this.element.classList.add(CLASS_NAME_COLLAPSING);

    this.element.style.height = "0px";

    this.isTransitioning = true;

    const complete = () => {
      this.isTransitioning = false;

      this.element.classList.remove(CLASS_NAME_COLLAPSING);
      this.element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

      this.element.style.height = "";
    };

    this.element.style.height = `${this.element.scrollHeight}px`;

    setTimeout(complete, 300);
  };

  private close = () => {
    if (this.isTransitioning || !this.isShown()) {
      return;
    }

    this.element.style.height = `${
      this.element.getBoundingClientRect().height
    }px`;

    reflow(this.element);

    this.element.classList.add(CLASS_NAME_COLLAPSING);
    this.element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

    this.isTransitioning = true;

    const complete = () => {
      this.isTransitioning = false;

      this.element.classList.remove(CLASS_NAME_COLLAPSING);
      this.element.classList.add(CLASS_NAME_COLLAPSE);
    };

    this.element.style.height = "";

    setTimeout(complete, 300);
  };

  private isShown(element = this.element) {
    return element.classList.contains(CLASS_NAME_SHOW);
  }
}
