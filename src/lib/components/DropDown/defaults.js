/**
 * Default component props.
 */
module.exports = {
   button: {
      background: '#eef1f4',
      border: '#d6d9dc',
      fontSize: '14px',
      margin: '0',
      padding: '10px',
      radius: '3px',
      text: '#5f6062',
      hover: {
         background: '#eaedef',
         border: '#c1c3c6',
         text: '#303031'
      }
   },
   dropdown: {
      background: '#fff',
      border: '#d6d9dc',
      boxShadow: '0 10px 20px rgba(88, 92, 95, 0.1)',
      display: 'block',
      left: '0',
      margin: '0',
      maxHeight: '300px',
      minWidth: '100%',
      overflowY: 'auto',
      padding: '10px',
      position: 'absolute',
      radius: '3px',
      transition:
         'transform 0.25s cubic-bezier(0.24, 0.22, 0.015, 1.56), opacity 0.15s ease-in-out, visibility 0.15s ease-in-out',
      top: '100%',
      width: '250px',
      zIndex: 99999
   },
   wrapper: {
      width: 'auto'
   }
}
