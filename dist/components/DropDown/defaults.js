"use strict";

/**
 * Default component props.
 */
module.exports = {
  button: {
    background: '#eef1f4',
    border: '1px solid #d6d9dc',
    borderRadius: '3px',
    color: '#494a4c',
    fontSize: '14px',
    fontWeight: '400',
    margin: '0',
    padding: '10px',
    transition: null,
    width: 'auto',
    hover: {
      background: '#eaedef',
      borderColor: '#c1c3c6',
      borderRadius: null,
      color: '#242526'
    },
    active: {
      background: null,
      borderColor: null,
      borderRadius: null,
      color: null
    }
  },
  dropdown: {
    background: '#fff',
    border: '1px solid #d6d9dc',
    borderRadius: '3px',
    boxShadow: '0 8px 16px rgba(88, 92, 95, 0.15)',
    display: 'block',
    left: '0',
    margin: '0',
    maxHeight: null,
    minWidth: null,
    overflowY: 'auto',
    padding: '10px',
    position: 'absolute',
    transform: 'scale(0.95)',
    transition: 'all 0.15s ease',
    top: '100%',
    width: '250px',
    zIndex: 99999,
    active: {
      left: null,
      top: null,
      transform: 'scale(1)'
    }
  },
  container: {
    width: 'auto'
  }
};