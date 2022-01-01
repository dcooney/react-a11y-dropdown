import styled, {css} from 'styled-components'

const WrapperStyles = css`
   width: ${(props) => (props?.styles?.width ? props?.styles?.width : null)};
`
export const Wrapper = styled.div`
   position: relative;
   ${(props) => (props.useStyles ? WrapperStyles : null)}
`

const ButtonStyles = css`
   cursor: pointer;
   font-size: ${(props) =>
      props?.styles?.fontSize ? props?.styles?.fontSize : null};
   color: ${(props) => props.styles.text};
   background-color: ${(props) =>
      props.background !== false && props.styles.background};
   border: ${(props) =>
      props.border !== false && `1px solid ${props.styles.border}`};
   border-radius: ${(props) => props.radius !== false && props.styles.radius};
   padding: ${(props) => props.padding !== false && props.styles.padding};
   margin: ${(props) => props.margin !== false && props.styles.margin};
   :hover,
   :focus {
      color: ${(props) =>
         props.styles.hover.text !== false && props.styles.hover.text};
      background-color: ${(props) =>
         props.styles.hover.background !== false &&
         props.styles.hover.background};
      border-color: ${(props) =>
         props.styles.hover.border !== false && props.styles.hover.border};
   }
`
export const Button = styled.button`
   ${(props) => (props.useStyles ? ButtonStyles : null)}
`

export const MenuStyles = css`
   transform: scale(${(props) => (props.expanded ? '1' : ' 0.95')});
   transition: ${(props) =>
      props.transition !== false && props.styles.transition};
   background-color: ${(props) =>
      props.background !== false && props.styles.background};
   border: ${(props) =>
      props.border !== false && `1px solid ${props.styles.border}`};
   border-radius: ${(props) => props.radius !== false && props.styles.radius};
   padding: ${(props) => props.padding !== false && props.styles.padding};
   margin: ${(props) => props.margin !== false && props.styles.margin};
   box-shadow: ${(props) =>
      props.styles.boxShadow !== false && props.styles.boxShadow};
   width: ${(props) => props.styles.width !== false && props.styles.width};
   min-width: ${(props) =>
      props.styles.minWidth !== false && props.styles.minWidth};
   max-height: ${(props) =>
      props.styles.maxHeight !== false && props.styles.maxHeight};
   overflow-y: ${(props) =>
      props.styles.overflowY !== false && props.styles.overflowY};
`
export const Menu = styled.div`
   visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
   opacity: ${(props) => (props.expanded ? '1' : '0')};
   display: ${(props) =>
      props.styles.display !== false && props.styles.display};
   z-index: ${(props) => props.styles.zIndex !== false && props.styles.zIndex};
   position: ${(props) =>
      props.styles.position !== false && props.styles.position};
   top: ${(props) => props.styles.top !== false && props.styles.top};
   left: ${(props) => props.styles.left !== false && props.styles.left};
   ${(props) => (props.useStyles ? MenuStyles : null)}
`
