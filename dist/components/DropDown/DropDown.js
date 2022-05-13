"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _defaults = _interopRequireDefault(require("./defaults"));

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO: fix issue with `TypeError: Cannot read properties of null (reading 'contains')` when closing the menu in nextJS (HTMLDocument.clickOutside)

/**
 * Accessibile Dropdown component.
 *
 * @param   {object}   props                       The component props.
 * @param   {string}   props.id                      An optional ID for the dropdown.
 * @param   {string}   props.label                   The button text for opening the dropdown.
 * @param   {boolean}  props.isMenu                  Is this a menu button group?
 * @param   {object}   props.children                Component children.
 * @param   {boolean}  props.useStyles               Should the component use the OOTB styling.
 * @param   {boolean}  props.search                  Enbale searching dropdown menu contents by first letter when dropdown is in open state.
 * @param   {string}   props.className               Classnames for the dropdown container.
 * @param   {string}   props.activeClassName         Classnames for the dropdown container whilst active.
 * @param   {string}   props.buttonClassName         Classnames for the button element.
 * @param   {string}   props.activeButtonClassName   Classnames for the button element whilst active.
 * @param   {string}   props.dropdownClassName       Classnames for the dropdown/menu element.
 * @param   {string}   props.activeDropdownClassName Classnames for the dropdown/menu element whilst active.
 * @param   {object}   props.config                  Override styling configuration for the component.
 * @param   {boolean}  props.onHover                 Open the menu on mouse hover.
 * @returns {Element}                                The DropDown component.
 */
const DropDown = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    id,
    label,
    isMenu,
    children,
    useStyles,
    search,
    className,
    activeClassName,
    buttonClassName,
    activeButtonClassName,
    dropdownClassName,
    activeDropdownClassName,
    config,
    onHover
  } = props;
  const [expanded, setExpanded] = (0, _react.useState)(false);
  const [theId] = (0, _react.useState)(id ? id : generateId(8)); // Generate random ID if not specified.

  const loaded = (0, _react.useRef)(false);
  const containerRef = (0, _react.useRef)();
  const menuRef = (0, _react.useRef)();
  const buttonRef = (0, _react.useRef)();
  const focusable = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
  let hoverIntent = null; // Get styling config.

  const {
    container,
    button,
    dropdown
  } = config ? config : {};

  const buttonStyles = _objectSpread(_objectSpread(_objectSpread({}, _defaults.default.button), button), {}, {
    hover: _objectSpread(_objectSpread({}, _defaults.default.button.hover), button === null || button === void 0 ? void 0 : button.hover),
    active: _objectSpread(_objectSpread({}, _defaults.default.button.active), button === null || button === void 0 ? void 0 : button.active)
  });

  const menuStyles = _objectSpread(_objectSpread(_objectSpread({}, _defaults.default.dropdown), dropdown), {}, {
    active: _objectSpread(_objectSpread({}, _defaults.default.dropdown.active), dropdown === null || dropdown === void 0 ? void 0 : dropdown.active)
  });

  const containerStyles = _objectSpread(_objectSpread({}, _defaults.default.container), container);

  (0, _react.useEffect)(() => {
    const elements = menuRef.current.querySelectorAll(focusable);

    if (elements) {
      elements.forEach(item => {
        item.tabIndex = '-1';
      });
    }
    /**
     * Handle keyboard controls.
     *
     * @param {Event} event The click event.
     */


    function keyboardControls(event) {
      const active = document.activeElement;
      const target = event.target;
      const {
        index,
        length
      } = getActiveIndex(active, elements);
      const {
        shiftKey,
        key
      } = event; // Exit if elements are not focusable.

      if (!(containerRef !== null && containerRef !== void 0 && containerRef.current.contains(active)) || elements.length === 0) {
        switch (key) {
          // Exit if esc and no focusable elements.
          case 'Esc':
          case 'Escape':
            // Escape
            setExpanded(false);
            break;
        }

        return;
      }

      if (shiftKey) {
        // Shift + Tab
        if (key === 'Tab') {
          setExpanded(false);
          return;
        }
      } else {
        switch (key) {
          case ' ':
          case 'Enter':
            //setFocus(buttonRef.current)
            //setExpanded(false)
            break;

          case 'Esc':
          case 'Escape':
            // Escape
            setFocus(buttonRef.current);
            setExpanded(false);
            break;

          case 'ArrowDown':
          case 'Down':
            // Down arrow.
            if (active === buttonRef.current) {
              // Focused on trigger then expand the menu.
              setFocus(elements[0]);
              setExpanded(true);
            } else {
              const next = index === length ? 0 : index + 1;
              elements[next] && setFocus(elements[next]);
            }

            event.preventDefault();
            break;

          case 'Up':
          case 'ArrowUp':
            // Up arrow.
            const prev = index === 0 ? length : index - 1;
            elements[prev] && setFocus(elements[prev]);
            event.preventDefault();
            break;

          case 'Home':
          case 'PageUp':
            // Home.
            setFocus(elements[0]);
            event.preventDefault();
            break;

          case 'End':
          case 'PageDown':
            // End.
            setFocus(elements[elements.length - 1]);
            event.preventDefault();
            break;

          default:
            // Search
            search && searchByFirstLetter(target, key);
            break;
        }
      }
    }

    if (!loaded.current) {
      document.addEventListener('click', clickOutside);
      document.addEventListener('keyup', focusOutside);
      document.addEventListener('keydown', keyboardControls);
      loaded.current = true;
    }

    return () => {
      document.removeEventListener('click', clickOutside);
      document.removeEventListener('keyup', focusOutside);
      document.removeEventListener('keydown', keyboardControls);
    };
  }, []);
  /**
   * Click handler to toggle the dropdown menu.
   *
   * @param {Event} event The click event.
   */

  function toggleMenu() {
    //e.currentTarget.blur()
    const elements = menuRef.current.querySelectorAll(focusable);

    if (elements && !expanded) {
      setFocus(elements[0]);
    }

    setExpanded(expanded => !expanded);
  }
  /**
   * Show the dropdown menu.
   */


  function showMenu() {
    document.addEventListener('mousemove', hideMenuHover);
    setExpanded(true);
  }
  /**
   * Hide dropmenu if mouseout of container element.
   *
   * @param {Event} event The mouse event.
   */


  function hideMenuHover(event) {
    clearTimeout(hoverIntent);
    hoverIntent = setTimeout(function () {
      if (!(containerRef !== null && containerRef !== void 0 && containerRef.current.contains(event.target))) {
        setExpanded(false);
        document.removeEventListener('mousemove', hideMenuHover);
      }
    }, 100);
  }
  /**
   * Allow for setting the expanded state from parent components.
   * @see https://reactjs.org/docs/hooks-reference.html#useimperativehandle
   */


  (0, _react.useImperativeHandle)(ref, () => ({
    /**
     * Exposed function to close the dropdown.
     */
    close() {
      setExpanded(false);
    }

  }));
  /**
   * Close menu when clicking outside.
   *
   * @param {Event} event The click event.
   */

  function clickOutside(event) {
    if (!event || !(event !== null && event !== void 0 && event.target)) {
      return; // exit if event is null.
    }

    if (!(menuRef !== null && menuRef !== void 0 && menuRef.current.contains(event.target)) && !(buttonRef !== null && buttonRef !== void 0 && buttonRef.current.contains(event.target))) {
      setExpanded(false);
    }
  }
  /**
   * Checks for focus outside of component.
   *
   * @param {Event} event The click event.
   */


  function focusOutside(event) {
    if (!(containerRef !== null && containerRef !== void 0 && containerRef.current.contains(event.target))) {
      setExpanded(false);
    }
  }
  /**
   * Search the menu elements by first letter.
   *
   * @param {string} current The currently active element.
   * @param {string} char    The character to search.
   * @returns null
   */


  function searchByFirstLetter(current, char) {
    const elements = menuRef.current.querySelectorAll(focusable);
    let start = 0;
    let index = 0;

    if (char.length > 1 || !elements) {
      return;
    }

    const array = Array.prototype.slice.call(elements); // First letters.

    const letters = array && array.map(item => {
      return item !== null && item !== void 0 && item.textContent ? item.textContent.trim()[0].toLowerCase() : '';
    }); // Get start item from the position of the current item.

    start = array.indexOf(current) + 1;

    if (start >= array.length) {
      start = 0;
    } // Check menu elements.


    index = letters.indexOf(char.toLowerCase(), start); // Search from beginning.

    if (index === -1) {
      index = letters.indexOf(char.toLowerCase(), 0);
    } // Match found, set focus


    if (index > -1) {
      setFocus(array[index]);
    }
  }
  /**
   * Get the current index position for the active element.
   *
   * @param   {HTMLElement} el       The current element to compare.
   * @param   {NodeList}    elements The list of elements.
   * @returns {Boolean}              The current index position in array.
   */


  function getActiveIndex(el, elements) {
    const array = Array.prototype.slice.call(elements); // Convert NodeList to array.

    return {
      index: array.indexOf(el),
      length: array.length - 1
    };
  }
  /**
   * Set focus on element.
   *
   * @param {HTMLElement} element The element to recieve focus.
   */


  function setFocus(element) {
    if (!element) {
      return;
    }

    setTimeout(() => {
      element.focus({
        preventScroll: true
      });
    }, 20);
  }
  /**
   * Create HTML from a string.
   *
   * @param   {string} html The string to set as HTML.
   * @returns {string}      Returns a string to render as HTML.
   */


  function createMarkup(html) {
    return {
      __html: html
    };
  }
  /**
   * Generate a random string.
   *
   * @param   {int} length The length of the string to generate.
   * @returns {string}     The generated string.
   */


  function generateId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!label && /*#__PURE__*/_react.default.createElement(_styles.Container, {
    ref: containerRef,
    id: "dropdown-".concat(theId),
    className: (0, _classnames.default)('react-a11y-dropdown', className && className, expanded ? 'expanded' : null, expanded && activeClassName ? activeClassName : null),
    useStyles: useStyles,
    styles: containerStyles
  }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    ref: buttonRef,
    id: "button-".concat(theId),
    className: (0, _classnames.default)('react-a11y-dropdown--button', buttonClassName && buttonClassName, expanded ? 'active' : null, expanded && activeButtonClassName ? activeButtonClassName : null),
    useStyles: useStyles,
    styles: buttonStyles,
    onClick: () => toggleMenu(),
    dangerouslySetInnerHTML: createMarkup(label),
    "aria-expanded": expanded ? 'true' : 'false',
    "aria-haspopup": "true",
    "aria-controls": isMenu ? "menu-".concat(theId) : null,
    onFocus: () => onHover && showMenu(),
    onMouseEnter: () => onHover && showMenu()
  }), /*#__PURE__*/_react.default.createElement(_styles.Menu, {
    ref: menuRef,
    id: "menu-".concat(theId),
    className: (0, _classnames.default)('react-a11y-dropdown--menu', dropdownClassName && dropdownClassName, expanded ? 'active' : null, expanded && activeDropdownClassName ? activeDropdownClassName : null),
    useStyles: useStyles,
    styles: menuStyles,
    expanded: expanded,
    "aria-hidden": expanded ? 'false' : 'true',
    "aria-labelledby": isMenu ? "button-".concat(theId) : null,
    role: isMenu ? "menu" : null
  }, children)));
});

var _default = DropDown;
exports.default = _default;
DropDown.defaultProps = {
  isMenu: true,
  useStyles: true,
  search: false,
  onHover: false
};