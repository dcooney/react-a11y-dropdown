import styled, {css} from 'styled-components'

const ContainerStyles = css`
   width: ${(props) => getProp(props.styles.width)};
`
export const Container = styled.div`
   position: relative;
   ${(props) => (props.useStyles ? ContainerStyles : null)}
`

const ButtonStyles = css`
   background: ${(props) => getProp(props.styles.background)};
   border: ${(props) => getProp(props.styles.border)};
   border-color: ${(props) => getProp(props.styles.borderColor)};
   border-radius: ${(props) => getProp(props.styles.borderRadius)};
   color: ${(props) => getProp(props.styles.color)};
   cursor: pointer;
   font-size: ${(props) => getProp(props.styles.fontSize)};
   font-weight: ${(props) => getProp(props.styles.fontWeight)};
   margin: ${(props) => getProp(props.styles.margin)};
   padding: ${(props) => getProp(props.styles.padding)};
   transition: ${(props) => getProp(props.styles.transition)};
   width: ${(props) => getProp(props.styles.width)};
   :hover,
   :focus {
      color: ${(props) => getProp(props.styles.hover.color)};
      background: ${(props) => getProp(props.styles.hover.background)};
      border-color: ${(props) => getProp(props.styles.hover.borderColor)};
      border-radius: ${(props) => getProp(props.styles.hover.borderRadius)};
   }
   &.active {
      color: ${(props) => getProp(props.styles.active.color)};
      background: ${(props) => getProp(props.styles.active.background)};
      border-color: ${(props) => getProp(props.styles.active.borderColor)};
      border-radius: ${(props) => getProp(props.styles.active.borderRadius)};
   }
`
export const Button = styled.button`
   ${(props) => (props.useStyles ? ButtonStyles : null)}
`

export const MenuStyles = css`
   background-color: ${(props) => getProp(props.styles.background)};
   border: ${(props) => getProp(props.styles.border)};
   border-color: ${(props) => getProp(props.styles.borderColor)};
   border-radius: ${(props) => getProp(props.styles.borderRadius)};
   box-shadow: ${(props) => getProp(props.styles.boxShadow)};
   left: ${(props) => getProp(props.styles.left)};
   margin: ${(props) => getProp(props.styles.margin)};
   max-height: ${(props) => getProp(props.styles.maxHeight)};
   min-width: ${(props) => getProp(props.styles.minWidth)};
   overflow-y: ${(props) => getProp(props.styles.overflowY)};
   padding: ${(props) => getProp(props.styles.padding)};
   top: ${(props) => getProp(props.styles.top)};
   transform: ${(props) => getProp(props.styles.transform)};
   transition: ${(props) => getProp(props.styles.transition)};
   width: ${(props) => getProp(props.styles.width)};
   &.active {
      left: ${(props) => getProp(props.styles.active.left)};
      top: ${(props) => getProp(props.styles.active.top)};
      transform: ${(props) => getProp(props.styles.active.transform)};
   }
`
export const Menu = styled.div`
   display: ${(props) => getProp(props.styles.display)};
   left: ${(props) => getProp(props.styles.left)};
   opacity: ${(props) => (props.expanded ? '1' : '0')};
   position: ${(props) => getProp(props.styles.position)};
   top: ${(props) => getProp(props.styles.top)};
   visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
   z-index: ${(props) => getProp(props.styles.zIndex)};
   ${(props) => (props.useStyles ? MenuStyles : null)}
`

/**
 * Get style prop, only return if not null.
 *
 * @param   {string||boolean} prop The property to compare.
 * @returns {string}               The CSS prop value.
 */
function getProp(prop) {
   return prop !== null && prop
}
