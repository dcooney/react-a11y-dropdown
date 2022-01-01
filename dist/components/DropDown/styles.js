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

const WrapperStyles = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n   width: ", ";\n"])), props => {
  var _props$styles, _props$styles2;

  return props !== null && props !== void 0 && (_props$styles = props.styles) !== null && _props$styles !== void 0 && _props$styles.width ? props === null || props === void 0 ? void 0 : (_props$styles2 = props.styles) === null || _props$styles2 === void 0 ? void 0 : _props$styles2.width : null;
});

const Wrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n   position: relative;\n   ", "\n"])), props => props.useStyles ? WrapperStyles : null);

exports.Wrapper = Wrapper;
const ButtonStyles = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n   cursor: pointer;\n   font-size: ", ";\n   color: ", ";\n   background-color: ", ";\n   border: ", ";\n   border-radius: ", ";\n   padding: ", ";\n   margin: ", ";\n   :hover,\n   :focus {\n      color: ", ";\n      background-color: ", ";\n      border-color: ", ";\n   }\n"])), props => {
  var _props$styles3, _props$styles4;

  return props !== null && props !== void 0 && (_props$styles3 = props.styles) !== null && _props$styles3 !== void 0 && _props$styles3.fontSize ? props === null || props === void 0 ? void 0 : (_props$styles4 = props.styles) === null || _props$styles4 === void 0 ? void 0 : _props$styles4.fontSize : null;
}, props => props.styles.text, props => props.background !== false && props.styles.background, props => props.border !== false && "1px solid ".concat(props.styles.border), props => props.radius !== false && props.styles.radius, props => props.padding !== false && props.styles.padding, props => props.margin !== false && props.styles.margin, props => props.styles.hover.text !== false && props.styles.hover.text, props => props.styles.hover.background !== false && props.styles.hover.background, props => props.styles.hover.border !== false && props.styles.hover.border);

const Button = _styledComponents.default.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n   ", "\n"])), props => props.useStyles ? ButtonStyles : null);

exports.Button = Button;
const MenuStyles = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n   transform: scale(", ");\n   transition: ", ";\n   background-color: ", ";\n   border: ", ";\n   border-radius: ", ";\n   padding: ", ";\n   margin: ", ";\n   box-shadow: ", ";\n   width: ", ";\n   min-width: ", ";\n   max-height: ", ";\n   overflow-y: ", ";\n"])), props => props.expanded ? '1' : ' 0.95', props => props.transition !== false && props.styles.transition, props => props.background !== false && props.styles.background, props => props.border !== false && "1px solid ".concat(props.styles.border), props => props.radius !== false && props.styles.radius, props => props.padding !== false && props.styles.padding, props => props.margin !== false && props.styles.margin, props => props.styles.boxShadow !== false && props.styles.boxShadow, props => props.styles.width !== false && props.styles.width, props => props.styles.minWidth !== false && props.styles.minWidth, props => props.styles.maxHeight !== false && props.styles.maxHeight, props => props.styles.overflowY !== false && props.styles.overflowY);
exports.MenuStyles = MenuStyles;

const Menu = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n   visibility: ", ";\n   opacity: ", ";\n   display: ", ";\n   z-index: ", ";\n   position: ", ";\n   top: ", ";\n   left: ", ";\n   ", "\n"])), props => props.expanded ? 'visible' : 'hidden', props => props.expanded ? '1' : '0', props => props.styles.display !== false && props.styles.display, props => props.styles.zIndex !== false && props.styles.zIndex, props => props.styles.position !== false && props.styles.position, props => props.styles.top !== false && props.styles.top, props => props.styles.left !== false && props.styles.left, props => props.useStyles ? MenuStyles : null);

exports.Menu = Menu;