"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.MenuStyles = exports.Menu = exports.Button = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const WrapperStyles = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n   width: ", ";\n"])), props => props.styles.width || null);

const Wrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n   position: relative;\n   ", "\n"])), props => props.useStyles ? WrapperStyles : null);

exports.Wrapper = Wrapper;
const ButtonStyles = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n   cursor: pointer;\n   font-size: ", ";\n   color: ", ";\n   background: ", ";\n   border: ", ";\n   border-color: ", ";\n   border-radius: ", ";\n   margin: ", ";\n   padding: ", ";\n   :hover,\n   :focus {\n      color: ", ";\n      background: ", ";\n      border: ", ";\n      border-color: ", ";\n   }\n"])), props => getProp(props.styles.fontSize), props => getProp(props.styles.color), props => getProp(props.styles.background), props => getProp(props.styles.border), props => getProp(props.styles.borderColor), props => getProp(props.styles.borderRadius), props => getProp(props.styles.margin), props => getProp(props.styles.padding), props => getProp(props.styles.hover.color), props => getProp(props.styles.hover.background), props => getProp(props.styles.hover.border), props => getProp(props.styles.hover.borderColor));

const Button = _styledComponents.default.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n   ", "\n"])), props => props.useStyles ? ButtonStyles : null);

exports.Button = Button;
const MenuStyles = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n   transform: scale(", ");\n   transition: ", ";\n   background-color: ", ";\n   border: ", ";\n   bordercolor: ", ";\n   border-radius: ", ";\n   padding: ", ";\n   margin: ", ";\n   box-shadow: ", ";\n   width: ", ";\n   min-width: ", ";\n   max-height: ", ";\n   overflow-y: ", ";\n"])), props => props.expanded ? '1' : ' 0.95', props => getProp(props.styles.transition), props => getProp(props.styles.background), props => getProp(props.styles.border), props => getProp(props.styles.borderColor), props => getProp(props.styles.borderRadius), props => getProp(props.styles.padding), props => getProp(props.styles.margin), props => getProp(props.styles.boxShadow), props => getProp(props.styles.width), props => getProp(props.styles.minWidth), props => getProp(props.styles.maxHeight), props => getProp(props.styles.overflowY));
exports.MenuStyles = MenuStyles;

const Menu = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n   visibility: ", ";\n   opacity: ", ";\n   display: ", ";\n   z-index: ", ";\n   position: ", ";\n   top: ", ";\n   left: ", ";\n   ", "\n"])), props => props.expanded ? 'visible' : 'hidden', props => props.expanded ? '1' : '0', props => getProp(props.styles.display), props => getProp(props.styles.zIndex), props => getProp(props.styles.position), props => getProp(props.styles.top), props => getProp(props.styles.left), props => props.useStyles ? MenuStyles : null);
/**
 * Get style prop, only return if not false.
 *
 * @param   {string||boolean} prop The property to compare.
 * @returns {string}               The CSS prop value.
 */


exports.Menu = Menu;

function getProp(prop) {
  return prop !== false && prop;
}