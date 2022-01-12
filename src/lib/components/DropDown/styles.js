import styled, {css} from 'styled-components'

const ContainerStyles = css`
   width: ${(props) => getProp(props.styles.width)};
`
export const Container = styled.div`
   position: ${(props) =>
      getProp(props.styles.position) ? props.styles.position : 'static'};
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
   &:after {
      content: '';
      display: inline-block;
      margin: 0 3px;
      position: relative;
      left: 4px;
      top: 3px;
      border-color: currentColor transparent transparent;
      border-width: 5px 4px;
      border-style: solid;
      opacity: 0.55;
   }
   :hover,
   :focus {
      color: ${(props) => getProp(props.styles.hover.color)};
      background: ${(props) => getProp(props.styles.hover.background)};
      border-color: ${(props) => getProp(props.styles.hover.borderColor)};
      border-radius: ${(props) => getProp(props.styles.hover.borderRadius)};
      &:after {
         opacity: 0.75;
      }
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
   bottom: ${(props) => getProp(props.styles.bottom)};
   box-shadow: ${(props) => getProp(props.styles.boxShadow)};
   display: ${(props) => getProp(props.styles.display)};
   left: ${(props) => getProp(props.styles.left)};
   margin: ${(props) => getProp(props.styles.margin)};
   padding: ${(props) => getProp(props.styles.padding)};
   right: ${(props) => getProp(props.styles.right)};
   top: ${(props) => getProp(props.styles.top)};
   transform: ${(props) => getProp(props.styles.transform)};
   transition: ${(props) => getProp(props.styles.transition)};
   width: ${(props) => getProp(props.styles.width)};
   &.active {
      bottom: ${(props) => getProp(props.styles.active.bottom)};
      display: ${(props) => getProp(props.styles.active.display)};
      left: ${(props) => getProp(props.styles.active.left)};
      right: ${(props) => getProp(props.styles.active.right)};
      top: ${(props) => getProp(props.styles.active.top)};
      transform: ${(props) => getProp(props.styles.active.transform)};
   }
`
export const Menu = styled.div`
   opacity: ${(props) => (props.expanded ? '1' : '0')};
   position: ${(props) => getProp(props.styles.position)};
   visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
   z-index: ${(props) => getProp(props.styles.zIndex)};
   pointer-events: ${(props) => (props.expanded ? 'auto' : 'none')};
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
