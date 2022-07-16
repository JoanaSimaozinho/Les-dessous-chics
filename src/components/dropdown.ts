import { reflow } from "../utils";
import SelectorEngine from "../utils/selector-engine";
/**
 * Moonlight Dropdown
 */

const CLASS_NAME_SHOW = "show";
const CLASS_NAME_DROPDOWN_MENU = "dropdown-menu";
const CLASS_NAME_ENTERING = "entering";
const CLASS_NAME_LEAVING = "leaving";

export default class Dropdown {
  private element: HTMLElement;
  public parent: HTMLElement;
  public menu: HTMLElement;
  private isTransitioning: boolean;

  constructor(element: HTMLElement) {
    this.element = element;
    this.parent = this.element.parentNode as HTMLElement;
    this.menu = SelectorEngine.findOne(".dropdown-menu", this.parent);

    this.isTransitioning = false;
  }

  public toggle() {
    return this.isShown() ? this.hide() : this.show();
  }

  public show = () => {
    if (this.isTransitioning || this.isShown()) {
      return;
    }

    this.menu.classList.remove(CLASS_NAME_DROPDOWN_MENU);
    this.menu.classList.add(CLASS_NAME_ENTERING);

    this.menu.style.opacity = "0";

    reflow(this.element);

    this.isTransitioning = true;

    const complete = () => {
      this.isTransitioning = false;

      this.menu.classList.remove(CLASS_NAME_ENTERING);
      this.menu.classList.add(CLASS_NAME_DROPDOWN_MENU, CLASS_NAME_SHOW);

      this.menu.style.opacity = "";
    };

    this.menu.style.opacity = "1";

    setTimeout(complete, 200);
  };

  public hide = () => {
    if (this.isTransitioning || !this.isShown()) {
      return;
    }

    this.menu.style.opacity = "1";

    this.menu.classList.add(CLASS_NAME_LEAVING);
    this.menu.classList.remove(CLASS_NAME_DROPDOWN_MENU, CLASS_NAME_SHOW);

    this.isTransitioning = true;

    const complete = () => {
      this.isTransitioning = false;

      this.menu.classList.remove(CLASS_NAME_LEAVING);
      this.menu.classList.add(CLASS_NAME_DROPDOWN_MENU);
    };

    this.menu.style.opacity = "";

    setTimeout(complete, 150);
  };

  private isShown(element = this.menu) {
    return element.classList.contains(CLASS_NAME_SHOW);
  }
}
