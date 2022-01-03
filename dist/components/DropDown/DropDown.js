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

/**
 * Accessibile Dropdown component.
 *
 * @param   {object}  props                   The component props.
 * @param   {string}  props.id                An optional ID for the dropdown.
 * @param   {string}  props.label             The button text for opening the dropdown.
 * @param   {object}  props.children          Component children.
 * @param   {boolean} props.useStyles         Should the component use the OOTB styling.
 * @param   {string}  props.className         Custom classnames for the dropdown container.
 * @param   {string}  props.buttonClassName   Custom classnames for the button element.
 * @param   {string}  props.dropdownClassName Custom classnames for the dropdown/menu element.
 * @param   {object}  props.config            Override styling configuration for the component.
 * @returns {Element}                         The DropDown component.
 */
const DropDown = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    id,
    label,
    children,
    useStyles,
    className,
    buttonClassName,
    dropdownClassName,
    config
  } = props;
  const [expanded, setExpanded] = (0, _react.useState)(false);
  const loaded = (0, _react.useRef)(false);
  const containerRef = (0, _react.useRef)();
  const menuRef = (0, _react.useRef)();
  const buttonRef = (0, _react.useRef)();
  const focusable = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'; // Get color and styling config.

  const {
    button,
    dropdown,
    wrapper
  } = config ? config : {};

  const buttonStyles = _objectSpread(_objectSpread({}, _defaults.default.button), button);

  const menuStyles = _objectSpread(_objectSpread({}, _defaults.default.dropdown), dropdown);

  const wrapperStyles = _objectSpread(_objectSpread({}, _defaults.default.wrapper), wrapper);

  (0, _react.useEffect)(() => {
    /**
     * Handle keyboard controls.
     *
     * @param {Event} event The click event.
     */
    function keyboardControls(event) {
      const active = document.activeElement;
      const elements = menuRef.current.querySelectorAll(focusable); // Exit if elements are not focusable.

      if (!containerRef.current.contains(active) || elements.length === 0) {
        return;
      }

      const {
        index,
        length
      } = getActiveIndex(active, elements);

      if (event.which === 40) {
        if (active === buttonRef.current) {
          // Focused on trigger then expand the menu.
          setFocus(elements[0]);
          setExpanded(true);
        } else {
          const next = index === length ? 0 : index + 1;
          elements[next] && setFocus(elements[next]);
        }

        event.preventDefault();
        return false;
      }

      if (event.which === 38) {
        if (active === buttonRef.current) {
          // Focused on trigger then collapse the menu.
          setExpanded(false);
        } else {
          const prev = index === 0 ? length : index - 1;
          elements[prev] && setFocus(elements[prev]);
        }

        event.preventDefault();
        return false;
      }
    }

    if (!loaded.current) {
      document.addEventListener('click', clickOutside);
      document.addEventListener('keyup', focusOutside);
      document.addEventListener('keydown', keyboardControls);
      document.addEventListener('keydown', escClick);
      loaded.current = true;
    }

    return () => {
      document.removeEventListener('click', clickOutside);
      document.removeEventListener('keyup', focusOutside);
      document.removeEventListener('keydown', keyboardControls);
      document.removeEventListener('keydown', escClick);
    };
  }, []);
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
    if (!menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setExpanded(false);
    }
  }
  /**
   * Checks for focus outside of component.
   *
   * @param {Event} event The click event.
   */


  function focusOutside(event) {
    if (!containerRef.current.contains(event.target)) {
      setExpanded(false);
    }
  }
  /**
   * Detect an escape key press and close.
   *
   * @param {Event} event The click event.
   */


  function escClick(event) {
    if (event.key === 'Escape') {
      setExpanded(false);
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
    }, 25);
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!label && /*#__PURE__*/_react.default.createElement(_styles.Wrapper, {
    ref: containerRef,
    className: (0, _classnames.default)('react-a11y-dropdown', className && className),
    useStyles: useStyles,
    styles: wrapperStyles,
    id: id ? id : null
  }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    ref: buttonRef,
    className: (0, _classnames.default)('react-a11y-dropdown--button', buttonClassName && buttonClassName),
    useStyles: useStyles,
    styles: buttonStyles,
    "aria-expanded": expanded ? 'true' : 'false',
    onClick: () => setExpanded(expanded => !expanded),
    dangerouslySetInnerHTML: createMarkup(label)
  }), /*#__PURE__*/_react.default.createElement(_styles.Menu, {
    ref: menuRef,
    className: (0, _classnames.default)('react-a11y-dropdown--menu', dropdownClassName && dropdownClassName, expanded ? 'expanded' : null),
    useStyles: useStyles,
    styles: menuStyles,
    expanded: expanded,
    "aria-hidden": expanded ? 'false' : 'true'
  }, children)));
});

var _default = DropDown;
exports.default = _default;
DropDown.propTypes = {
  id: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  children: _propTypes.default.object,
  useStyles: _propTypes.default.bool,
  className: _propTypes.default.string,
  buttonClassName: _propTypes.default.string,
  dropdownClassName: _propTypes.default.string,
  config: _propTypes.default.object
};
DropDown.defaultProps = {
  useStyles: true
};