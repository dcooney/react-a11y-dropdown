import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, {useEffect, useRef, useState} from 'react'
import defaults from './defaults'
import {Button, Menu, Wrapper} from './styles'

/**
 * Accessibile Dropdown component.
 *
 * @param   {object}  props                   The component props.
 * @param   {string}  props.id                An optional ID for the dropdown.
 * @param   {string}  props.label             The button text for opening the dropdown.
 * @param   {object}  props.children          Component children.
 * @param   {boolean} props.useStyles         Should the component use the OOTB styling.
 * @param   {string}  props.className         Custom classnames for the dropdown container.
 * @param   {string}  props.buttonClassName   Custom classnames for the button element.
 * @param   {string}  props.dropdownClassName Custom classnames for the dropdown/menu element.
 * @param   {object}  props.config            Override styling configuration for the component.
 * @returns {Element}                         The DropDown component.
 */
export default function DropDown(props) {
   const {
      id,
      label,
      children,
      useStyles,
      className,
      buttonClassName,
      dropdownClassName,
      config
   } = props
   const [expanded, setExpanded] = useState(false)
   const loaded = useRef(false)
   const containerRef = useRef()
   const menuRef = useRef()
   const buttonRef = useRef()
   const focusable =
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'

   // Get color and styling config.
   const {button, dropdown} = config ? config : {}
   const buttonStyles = {...defaults.button, ...button}
   const menuStyles = {...defaults.dropdown, ...dropdown}

   useEffect(() => {
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
            if (active === buttonRef.current) {
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
            if (active === buttonRef.current) {
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
         !buttonRef.current.contains(event.target)
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
                  className && className
               )}
               useStyles={useStyles}
               id={id ? id : null}
            >
               <Button
                  ref={buttonRef}
                  className={classNames(
                     'react-a11y-dropdown--button',
                     buttonClassName && buttonClassName
                  )}
                  useStyles={useStyles}
                  styles={buttonStyles}
                  aria-expanded={expanded ? 'true' : 'false'}
                  onClick={() => setExpanded((expanded) => !expanded)}
                  dangerouslySetInnerHTML={createMarkup(label)}
               ></Button>
               <Menu
                  ref={menuRef}
                  className={classNames(
                     'react-a11y-dropdown--menu',
                     dropdownClassName && dropdownClassName,
                     expanded ? 'expanded' : null
                  )}
                  useStyles={useStyles}
                  styles={menuStyles}
                  expanded={expanded}
                  aria-hidden={expanded ? 'false' : 'true'}
               >
                  {children}
               </Menu>
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
   dropdownClassName: PropTypes.string,
   config: PropTypes.object
}

DropDown.defaultProps = {
   useStyles: true
}
