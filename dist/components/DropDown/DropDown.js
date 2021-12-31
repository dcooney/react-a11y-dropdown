"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropDown;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _functions = require("../../functions");

var _classnames = _interopRequireDefault(require("classnames"));

require("./styles.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    children,
    useStyles,
    className,
    buttonClassName,
    dropdownClassName
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
      } = (0, _functions.getActiveIndex)(active, elements);

      if (event.which === 40) {
        if (active === triggerRef.current) {
          // Focused on trigger then expand the menu.
          (0, _functions.setFocus)(elements[0]);
          setExpanded(true);
        } else {
          const next = index === length ? 0 : index + 1;
          elements[next] && (0, _functions.setFocus)(elements[next]);
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
          elements[prev] && (0, _functions.setFocus)(elements[prev]);
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!label && /*#__PURE__*/_react.default.createElement("div", {
    ref: containerRef,
    className: (0, _classnames.default)('react-a11y-dropdown', !useStyles ? 'unstyled' : null, className && className),
    id: id ? id : null
  }, /*#__PURE__*/_react.default.createElement("button", {
    ref: triggerRef,
    className: (0, _classnames.default)('react-a11y-dropdown--button', !useStyles ? 'unstyled' : null, buttonClassName && buttonClassName),
    "aria-expanded": expanded ? 'true' : 'false',
    onClick: () => setExpanded(expanded => !expanded),
    dangerouslySetInnerHTML: (0, _functions.createMarkup)(label)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('react-a11y-dropdown--menu', !useStyles ? 'unstyled' : null, dropdownClassName && dropdownClassName, expanded ? 'expanded' : null),
    ref: menuRef,
    "aria-hidden": expanded ? 'false' : 'true'
  }, children)));
}

DropDown.propTypes = {
  id: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  children: _propTypes.default.object,
  useStyles: _propTypes.default.bool,
  className: _propTypes.default.string,
  buttonClassName: _propTypes.default.string,
  dropdownClassName: _propTypes.default.string
};
DropDown.defaultProps = {
  useStyles: true
};