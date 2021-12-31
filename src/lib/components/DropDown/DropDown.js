import PropTypes from 'prop-types'
import React, {useEffect, useRef, useState} from 'react'
import {createMarkup, getActiveIndex, setFocus} from '../../functions'
import classNames from 'classnames'
import './styles.css'
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

   return (
      <>
         {!!label && (
            <div
               ref={containerRef}
               className={classNames(
                  'react-a11y-dropdown',
                  !useStyles ? 'unstyled' : null,
                  className && className
               )}
               id={id ? id : null}
            >
               <button
                  ref={triggerRef}
                  className={classNames(
                     'react-a11y-dropdown--button',
                     !useStyles ? 'unstyled' : null,
                     buttonClassName && buttonClassName
                  )}
                  aria-expanded={expanded ? 'true' : 'false'}
                  onClick={() => setExpanded((expanded) => !expanded)}
                  dangerouslySetInnerHTML={createMarkup(label)}
               ></button>
               <div
                  className={classNames(
                     'react-a11y-dropdown--menu',
                     !useStyles ? 'unstyled' : null,
                     dropdownClassName && dropdownClassName,
                     expanded ? 'expanded' : null
                  )}
                  ref={menuRef}
                  aria-hidden={expanded ? 'false' : 'true'}
               >
                  {children}
               </div>
            </div>
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
