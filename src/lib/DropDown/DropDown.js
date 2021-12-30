import React, {useRef, useState, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Accessibile Dropdown component.
 *
 * @param   {object}  props          The component props.
 * @param   {object}  props.children Container children.
 * @returns {Element}                The DropDown component.
 */
export default function DropDown(props) {
  const {id, label, children} = props
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
      return;
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
    <Container id={id ? id : null} ref={containerRef}>
      <Button
        ref={triggerRef}
        aria-expanded={expanded ? 'true' : 'false'}
        onClick={() => setExpanded((expanded) => !expanded)}
        dangerouslySetInnerHTML={createMarkup(label)}
      ></Button>
      <Menu
        ref={menuRef}
        aria-hidden={expanded ? 'false' : 'true'}
        expanded={expanded}
      >
        {children}
      </Menu>
    </Container>
  )
}

DropDown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.object
}

const Container = styled.div`
  width: auto;
  position: relative;
`
const Button = styled.button``

const Menu = styled.div`
  display: block;
  visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.expanded ? '1' : '0')};
  transform: scale(0.95);
  transition: transform 0.2s cubic-bezier(0.24, 0.22, 0.015, 1.56),
    opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  z-index: 9999;
  position: absolute;
  top: 110%;
  left: -12px;
  width: 200px;
  max-height: 350px;
  overflow-y: auto;
`
