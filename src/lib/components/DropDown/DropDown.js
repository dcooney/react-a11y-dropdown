import PropTypes from 'prop-types'
import React, {useEffect, useRef, useState} from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

const Wrapper = styled.div`
   width: auto;
   padding-bottom: 1px;
   position: relative;
`
const Button = styled.button`
   cursor: pointer;
   font-size: 14px;
   color: #333;
   background-color: #f7f7f7;
   border: #333;
   border-radius: 3px;
   padding: 10px;
   margin: 0;
`

const Drop = styled.div`
   visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
   opacity: ${(props) => (props.expanded ? '1' : '0')};
   z-index: 9999;
   position: absolute;
   top: 100%;
   left: 0;
   display: block;
   transform: scale(${(props) => (props.expanded ? '1' : ' 0.95')});
   transition: transform 0.2s cubic-bezier(0.24, 0.22, 0.015, 1.56),
      opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;
   background-color: #fff;
   border: 1px solid #ccc;
   border-radius: 3px;
   box-shadow: 0 10px 20px rgba(88, 92, 95, 0.1);
   padding: 10px;
   width: 225px;
   min-width: 100%;
   max-height: 350px;
   overflow-y: auto;
   top: ${(props) => (props.expanded ? '100%' : '110%')};
`

/**
 * Accessibile Dropdown component.
 *
 * @param   {object}  props          The component props.
 * @param   {object}  props.children Container children.
 * @returns {Element}                The DropDown component.
 */
export default function DropDown(props) {
   const {
      id,
      label,
      children,
      useStyles,
      className,
      buttonClassName,
      dropdownClassName
   } = props
   const [expanded, setExpanded] = useState(false)
   const loaded = useRef(false)
   const containerRef = useRef()
   const menuRef = useRef()
   const triggerRef = useRef()
   const focusable =
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'

   useEffect(() => {
      console.log('hello')
      /**
       * Handle keyboard controls.
       *
       * @param {Event} event The click event.
       */
      function keyboardControls(event) {
         const active = document.activeElement
         const elements = menuRef.current.querySelectorAll(focusable)

         // Exit if elements are not focusable.
         if (!containerRef.current.contains(active) || elements.length === 0) {
            return
         }

         const {index, length} = getActiveIndex(active, elements)

         if (event.which === 40) {
            if (active === triggerRef.current) {
               // Focused on trigger then expand the menu.
               setFocus(elements[0])
               setExpanded(true)
            } else {
               const next = index === length ? 0 : index + 1
               elements[next] && setFocus(elements[next])
            }
            event.preventDefault()
            return false
         }

         if (event.which === 38) {
            if (active === triggerRef.current) {
               // Focused on trigger then collapse the menu.
               setExpanded(false)
            } else {
               const prev = index === 0 ? length : index - 1
               elements[prev] && setFocus(elements[prev])
            }
            event.preventDefault()
            return false
         }
      }

      if (!loaded.current) {
         document.addEventListener('click', clickOutside)
         document.addEventListener('keyup', focusOutside)
         document.addEventListener('keydown', keyboardControls)
         document.addEventListener('keydown', escClick)
         loaded.current = true
      }

      return () => {
         document.removeEventListener('click', clickOutside)
         document.removeEventListener('keyup', focusOutside)
         document.removeEventListener('keydown', keyboardControls)
         document.removeEventListener('keydown', escClick)
      }
   }, [])

   /**
    * Close menu when clicking outside.
    *
    * @param {Event} event The click event.
    */
   function clickOutside(event) {
      if (
         !menuRef.current.contains(event.target) &&
         !triggerRef.current.contains(event.target)
      ) {
         setExpanded(false)
      }
   }

   /**
    * Checks for focus outside of component.
    *
    * @param {Event} event The click event.
    */
   function focusOutside(event) {
      if (!containerRef.current.contains(event.target)) {
         setExpanded(false)
      }
   }

   /**
    * Detect an escape key press and close.
    *
    * @param {Event} event The click event.
    */
   function escClick(event) {
      if (event.key === 'Escape') {
         setExpanded(false)
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
      const array = Array.prototype.slice.call(elements) // Convert NodeList to array.
      return {
         index: array.indexOf(el),
         length: array.length - 1
      }
   }

   /**
    * Set focus on element.
    *
    * @param {HTMLElement} element The element to recieve focus.
    */
   function setFocus(element) {
      if (!element) {
         return
      }
      setTimeout(() => {
         element.focus({preventScroll: true})
      }, 25)
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
      }
   }

   return (
      <>
         {!!label && (
            <Wrapper
               ref={containerRef}
               className={classNames(
                  'react-a11y-dropdown',
                  !useStyles ? 'unstyled' : null,
                  className && className
               )}
               useStyles={useStyles}
               id={id ? id : null}
            >
               <Button
                  ref={triggerRef}
                  className={classNames(
                     'react-a11y-dropdown--button',
                     !useStyles ? 'unstyled' : null,
                     buttonClassName && buttonClassName
                  )}
                  useStyles={useStyles}
                  aria-expanded={expanded ? 'true' : 'false'}
                  onClick={() => setExpanded((expanded) => !expanded)}
                  dangerouslySetInnerHTML={createMarkup(label)}
               ></Button>
               <Drop
                  ref={menuRef}
                  className={classNames(
                     'react-a11y-dropdown--menu',
                     !useStyles ? 'unstyled' : null,
                     dropdownClassName && dropdownClassName,
                     expanded ? 'expanded' : null
                  )}
                  expanded={expanded}
                  useStyles={useStyles}
                  aria-hidden={expanded ? 'false' : 'true'}
               >
                  {children}
               </Drop>
            </Wrapper>
         )}
      </>
   )
}

DropDown.propTypes = {
   id: PropTypes.string,
   label: PropTypes.string.isRequired,
   children: PropTypes.object,
   useStyles: PropTypes.bool,
   className: PropTypes.string,
   buttonClassName: PropTypes.string,
   dropdownClassName: PropTypes.string
}

DropDown.defaultProps = {
   useStyles: true
}
