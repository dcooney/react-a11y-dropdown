/**
 * Get the current index position for the active element.
 *
 * @param   {HTMLElement} el       The current element to compare.
 * @param   {NodeList}    elements The list of elements.
 * @returns {Boolean}              The current index position in array.
 */
export function getActiveIndex(el, elements) {
   const array = Array.prototype.slice.call(elements) // Convert NodeList to array.
   return {
      index: array.indexOf(el),
      length: array.length - 1
   }
}

/**
 * Set focus on element.
 *
 * @param {HTMLElement} element The element to recieve focus.
 */
export function setFocus(element) {
   if (!element) {
      return
   }
   setTimeout(() => {
      element.focus({preventScroll: true})
   }, 25)
}

/**
 * Create HTML from a string.
 *
 * @param   {string} html The string to set as HTML.
 * @returns {string}      Returns a string to render as HTML.
 */
export function createMarkup(html) {
   return {
      __html: html
   }
}
