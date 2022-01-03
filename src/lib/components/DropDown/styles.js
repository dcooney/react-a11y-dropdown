import styled, {css} from 'styled-components'

const WrapperStyles = css`
   width: ${(props) => props.styles.width || null};
`
export const Wrapper = styled.div`
   position: relative;
   ${(props) => (props.useStyles ? WrapperStyles : null)}
`

const ButtonStyles = css`
   cursor: pointer;
   font-size: ${(props) => getProp(props.styles.fontSize)};
   color: ${(props) => getProp(props.styles.color)};
   background: ${(props) => getProp(props.styles.background)};
   border: ${(props) => getProp(props.styles.border)};
   border-color: ${(props) => getProp(props.styles.borderColor)};
   border-radius: ${(props) => getProp(props.styles.borderRadius)};
   margin: ${(props) => getProp(props.styles.margin)};
   padding: ${(props) => getProp(props.styles.padding)};
   :hover,
   :focus {
      color: ${(props) => getProp(props.styles.hover.color)};
      background: ${(props) => getProp(props.styles.hover.background)};
      border: ${(props) => getProp(props.styles.hover.border)};
      border-color: ${(props) => getProp(props.styles.hover.borderColor)};
   }
`
export const Button = styled.button`
   ${(props) => (props.useStyles ? ButtonStyles : null)}
`

export const MenuStyles = css`
   transform: scale(${(props) => (props.expanded ? '1' : ' 0.95')});
   transition: ${(props) => getProp(props.styles.transition)};
   background-color: ${(props) => getProp(props.styles.background)};
   border: ${(props) => getProp(props.styles.border)};
   bordercolor: ${(props) => getProp(props.styles.borderColor)};
   border-radius: ${(props) => getProp(props.styles.borderRadius)};
   padding: ${(props) => getProp(props.styles.padding)};
   margin: ${(props) => getProp(props.styles.margin)};
   box-shadow: ${(props) => getProp(props.styles.boxShadow)};
   width: ${(props) => getProp(props.styles.width)};
   min-width: ${(props) => getProp(props.styles.minWidth)};
   max-height: ${(props) => getProp(props.styles.maxHeight)};
   overflow-y: ${(props) => getProp(props.styles.overflowY)};
`
export const Menu = styled.div`
   visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
   opacity: ${(props) => (props.expanded ? '1' : '0')};
   display: ${(props) => getProp(props.styles.display)};
   z-index: ${(props) => getProp(props.styles.zIndex)};
   position: ${(props) => getProp(props.styles.position)};
   top: ${(props) => getProp(props.styles.top)};
   left: ${(props) => getProp(props.styles.left)};
   ${(props) => (props.useStyles ? MenuStyles : null)}
`

/**
 * Get style prop, only return if not false.
 *
 * @param   {string||boolean} prop The property to compare.
 * @returns {string}               The CSS prop value.
 */
function getProp(prop) {
   return prop !== false && prop
}
