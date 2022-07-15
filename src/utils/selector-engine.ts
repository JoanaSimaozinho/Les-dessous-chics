/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0-beta1): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const SelectorEngine = {
  find(selector: string, element = document.documentElement) {
    return [].concat(
      ...Element.prototype.querySelectorAll.call(element, selector)
    );
  },

  findOne(selector: string, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },
};

export default SelectorEngine;
