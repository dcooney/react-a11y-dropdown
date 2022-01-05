import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, {useEffect, useRef, useState, useImperativeHandle} from 'react'
import defaults from './defaults'
import {Button, Menu, Container} from './styles'

/**
 * Accessibile Dropdown component.
 *
 * @param   {object}  props                   The component props.
 * @param   {string}  props.id                An optional ID for the dropdown.
 * @param   {string}  props.label             The button text for opening the dropdown.
 * @param   {boolean} props.isMenu            Is this a menu button group?
 * @param   {object}  props.children          Component children.
 * @param   {boolean} props.useStyles         Should the component use the OOTB styling.
 * @param   {boolean} props.search            Enbale searching dropdown menu contents by first letter when dropdown is in open state.
 * @param   {string}  props.className         Custom classnames for the dropdown container.
 * @param   {string}  props.buttonClassName   Custom classnames for the button element.
 * @param   {string}  props.dropdownClassName Custom classnames for the dropdown/menu element.
 * @param   {object}  props.config            Override styling configuration for the component.
 * @returns {Element}                         The DropDown component.
 */
const DropDown = React.forwardRef((props, ref) => {
   const {
      id,
      label,
      isMenu,
      children,
      useStyles,
      search,
      className,
      buttonClassName,
      dropdownClassName,
      config
   } = props
   const [expanded, setExpanded] = useState(false)
   const [theId] = useState(id ? id : generateId(8)) // Generate random ID if not specified.
   const loaded = useRef(false)
   const containerRef = useRef()
   const menuRef = useRef()
   const buttonRef = useRef()
   const focusable =
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'

   // Get styling config.
   const {container, button, dropdown} = config ? config : {}
   const buttonStyles = {
      ...defaults.button,
      ...button,
      hover: {
         ...defaults.button.hover,
         ...button?.hover
      },
      active: {
         ...defaults.button.active,
         ...button?.active
      }
   }
   const menuStyles = {
      ...defaults.dropdown,
      ...dropdown,
      active: {
         ...defaults.dropdown.active,
         ...dropdown?.active
      }
   }
   const containerStyles = {...defaults.container, ...container}

   useEffect(() => {
      const elements = menuRef.current.querySelectorAll(focusable)
      if (elements) {
         elements.forEach((item) => {
            item.tabIndex = '-1'
         })
      }

      /**
       * Handle keyboard controls.
       *
       * @param {Event} event The click event.
       */
      function keyboardControls(event) {
         const active = document.activeElement
         const target = event.target

         // Exit if elements are not focusable.
         if (!containerRef.current.contains(active) || elements.length === 0) {
            return
         }

         const {index, length} = getActiveIndex(active, elements)
         const {shiftKey, key} = event

         if (shiftKey) {
            // Shift + Tab
            if (key === 'Tab') {
               setExpanded(false)
               return
            }
         } else {
            switch (key) {
               case ' ':
               case 'Enter':
                  //setFocus(buttonRef.current)
                  //setExpanded(false)
                  break
               case 'Esc':
               case 'Escape': // Escape
                  setFocus(buttonRef.current)
                  setExpanded(false)
                  break

               case 'ArrowDown':
               case 'Down': // Down arrow.
                  if (active === buttonRef.current) {
                     // Focused on trigger then expand the menu.
                     setFocus(elements[0])
                     setExpanded(true)
                  } else {
                     const next = index === length ? 0 : index + 1
                     elements[next] && setFocus(elements[next])
                  }
                  event.preventDefault()
                  break

               case 'Up':
               case 'ArrowUp': // Up arrow.
                  const prev = index === 0 ? length : index - 1
                  elements[prev] && setFocus(elements[prev])
                  event.preventDefault()
                  break

               case 'Home':
               case 'PageUp': // Home.
                  setFocus(elements[0])
                  event.preventDefault()
                  break

               case 'End':
               case 'PageDown': // End.
                  setFocus(elements[elements.length - 1])
                  event.preventDefault()
                  break

               default:
                  // Search
                  search && searchByFirstLetter(target, key)
                  break
            }
         }
      }

      if (!loaded.current) {
         document.addEventListener('click', clickOutside)
         document.addEventListener('keyup', focusOutside)
         document.addEventListener('keydown', keyboardControls)
         containerRef.current.addEventListener('focusout', focusOut)
         loaded.current = true
      }

      return () => {
         document.removeEventListener('click', clickOutside)
         document.removeEventListener('keyup', focusOutside)
         document.removeEventListener('keydown', keyboardControls)
         containerRef.current.removeEventListener('focusout', focusOut)
      }
   }, [])

   /**
    * Search the menu elements by first letter.
    *
    * @param {string} current The currently active element.
    * @param {string} char    The character to search.
    * @returns null
    */
   function searchByFirstLetter(current, char) {
      const elements = menuRef.current.querySelectorAll(focusable)
      let start = 0
      let index = 0

      if (char.length > 1 || !elements) {
         return
      }

      const array = Array.prototype.slice.call(elements)

      // First letters.
      const letters =
         array &&
         array.map((item) => {
            return item?.textContent
               ? item.textContent.trim()[0].toLowerCase()
               : ''
         })

      // Get start item from the position of the current item.
      start = array.indexOf(current) + 1
      if (start >= array.length) {
         start = 0
      }

      // Check menu elements.
      index = letters.indexOf(char.toLowerCase(), start)

      // Search from beginning.
      if (index === -1) {
         index = letters.indexOf(char.toLowerCase(), 0)
      }

      // Match found, set focus
      if (index > -1) {
         setFocus(array[index])
      }
   }

   /**
    * Click handler to toggle the dropdown menu.
    *
    * @param {Event} event The click event.
    */
   function toggleMenu(e) {
      e.currentTarget.blur()
      const elements = menuRef.current.querySelectorAll(focusable)
      if (elements && !expanded) {
         setFocus(elements[0])
      }
      setExpanded((expanded) => !expanded)
   }

   /**
    * Allow for setting the expanded state from parent components.
    * @see https://reactjs.org/docs/hooks-reference.html#useimperativehandle
    */
   useImperativeHandle(ref, () => ({
      /**
       * Exposed function to close the dropdown.
       */
      close() {
         setExpanded(false)
      }
   }))

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
    * Checks for focus leaving the component.
    *
    * @param {Event} event The click event.
    */
   function focusOut(event) {
      if (containerRef.current.contains(event.relatedTarget)) {
         return
      } else {
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
      }, 20)
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

   /**
    * Generate a random string.
    *
    * @param   {int} length The length of the string to generate.
    * @returns {string}     The generated string.
    */
   function generateId(length) {
      var result = ''
      var characters =
         'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      var charactersLength = characters.length
      for (var i = 0; i < length; i++) {
         result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
         )
      }
      return result
   }

   return (
      <>
         {!!label && (
            <Container
               ref={containerRef}
               id={`dropdown-${theId}`}
               className={classNames(
                  'react-a11y-dropdown',
                  className && className,
                  expanded ? 'expanded' : null
               )}
               useStyles={useStyles}
               styles={containerStyles}
            >
               <Button
                  ref={buttonRef}
                  id={`button-${theId}`}
                  className={classNames(
                     'react-a11y-dropdown--button',
                     buttonClassName && buttonClassName,
                     expanded ? 'active' : null
                  )}
                  useStyles={useStyles}
                  styles={buttonStyles}
                  onClick={(e) => toggleMenu(e)}
                  dangerouslySetInnerHTML={createMarkup(label)}
                  aria-expanded={expanded ? 'true' : 'false'}
                  aria-haspopup="true"
                  aria-controls={isMenu ? `menu-${theId}` : null}
               ></Button>
               <Menu
                  ref={menuRef}
                  id={`menu-${theId}`}
                  className={classNames(
                     'react-a11y-dropdown--menu',
                     dropdownClassName && dropdownClassName,
                     expanded ? 'active' : null
                  )}
                  useStyles={useStyles}
                  styles={menuStyles}
                  expanded={expanded}
                  aria-hidden={expanded ? 'false' : 'true'}
                  aria-labelledby={isMenu ? `button-${theId}` : null}
                  role={isMenu ? `menu` : null}
               >
                  {children}
               </Menu>
            </Container>
         )}
      </>
   )
})

export default DropDown

DropDown.propTypes = {
   id: PropTypes.string,
   label: PropTypes.string.isRequired,
   isMenu: PropTypes.bool,
   search: PropTypes.bool,
   children: PropTypes.object,
   useStyles: PropTypes.bool,
   className: PropTypes.string,
   buttonClassName: PropTypes.string,
   dropdownClassName: PropTypes.string,
   config: PropTypes.object
}

DropDown.defaultProps = {
   isMenu: true,
   useStyles: true,
   search: false
}
