import styled, {css} from 'styled-components'

const WrapperStyles = css`
   width: auto;
   padding-bottom: 1px;
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
   transition: transform 0.2s cubic-bezier(0.24, 0.22, 0.015, 1.56),
      opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;
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
   top: ${(props) => (props.expanded ? '100%' : '110%')};
`
export const Menu = styled.div`
   display: block;
   visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
   opacity: ${(props) => (props.expanded ? '1' : '0')};
   z-index: 9999;
   position: absolute;
   top: 100%;
   left: 0;
   ${(props) => (props.useStyles ? MenuStyles : null)}
`
