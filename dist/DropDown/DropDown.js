"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropDown;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Accessibile Dropdown component.
 *
 * @param   {object}  props          The component props.
 * @param   {object}  props.children Container children.
 * @returns {Element}                The DropDown component.
 */
function DropDown(props) {
  const {
    id,
    label,
    children
  } = props;
  const [expanded, setExpanded] = (0, _react.useState)(false);
  const loaded = (0, _react.useRef)(false);
  const containerRef = (0, _react.useRef)();
  const menuRef = (0, _react.useRef)();
  const triggerRef = (0, _react.useRef)();
  const focusable = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
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
        if (active === triggerRef.current) {
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
        if (active === triggerRef.current) {
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
   * Close menu when clicking outside.
   *
   * @param {Event} event The click event.
   */

  function clickOutside(event) {
    if (!menuRef.current.contains(event.target) && !triggerRef.current.contains(event.target)) {
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

  return /*#__PURE__*/_react.default.createElement(Container, {
    id: id ? id : null,
    ref: containerRef
  }, /*#__PURE__*/_react.default.createElement(Button, {
    ref: triggerRef,
    "aria-expanded": expanded ? 'true' : 'false',
    onClick: () => setExpanded(expanded => !expanded),
    dangerouslySetInnerHTML: createMarkup(label)
  }), /*#__PURE__*/_react.default.createElement(Menu, {
    ref: menuRef,
    "aria-hidden": expanded ? 'false' : 'true',
    expanded: expanded
  }, children));
}

DropDown.propTypes = {
  id: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  children: _propTypes.default.object
};

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: auto;\n  position: relative;\n"])));

const Button = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));

const Menu = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: block;\n  visibility: ", ";\n  opacity: ", ";\n  transform: scale(0.95);\n  transition: transform 0.2s cubic-bezier(0.24, 0.22, 0.015, 1.56),\n    opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;\n  padding: 10px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  z-index: 9999;\n  position: absolute;\n  top: 110%;\n  left: -12px;\n  width: 200px;\n  max-height: 350px;\n  overflow-y: auto;\n"])), props => props.expanded ? 'visible' : 'hidden', props => props.expanded ? '1' : '0');