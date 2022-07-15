/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */
export const reflow = (element: HTMLElement) => {
  element.offsetHeight; // eslint-disable-line no-unused-expressions
};

export const getSelector = (element: Element) => {
  let selector = element.getAttribute("data-target");

  if (!selector || selector === "#") {
    let hrefAttribute = element.getAttribute("href");

    // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273
    if (
      !hrefAttribute ||
      (!hrefAttribute.includes("#") && !hrefAttribute.startsWith("."))
    ) {
      return null;
    }

    // Just in case some CMS puts out a full URL with the anchor appended
    if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
      hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
    }

    selector =
      hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
  }

  return selector;
};

export const getSelectorFromElement = (element: Element) => {
  const selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

export const isElement = (object: any) => {
  if (!object || typeof object !== "object") {
    return false;
  }

  if (typeof object.jquery !== "undefined") {
    object = object[0];
  }

  return typeof object.nodeType !== "undefined";
};

export const isVisible = (element: Element) => {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }

  const elementIsVisible =
    getComputedStyle(element).getPropertyValue("visibility") === "visible";
  // Handle `details` element as its content may falsie appear visible when it is closed
  const closedDetails = element.closest("details:not([open])");

  if (!closedDetails) {
    return elementIsVisible;
  }

  if (closedDetails !== element) {
    const summary = element.closest("summary");
    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }

    if (summary === null) {
      return false;
    }
  }

  return elementIsVisible;
};

export const isDisabled = (element: HTMLElement) => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains("disabled")) {
    return true;
  }

  // @ts-ignore
  if (typeof element.disabled !== "undefined") {
    // @ts-ignore
    return element.disabled;
  }

  return (
    element.hasAttribute("disabled") &&
    element.getAttribute("disabled") !== "false"
  );
};
