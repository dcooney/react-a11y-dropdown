/**
 * Default component props.
 */
module.exports = {
   button: {
      background: '#eef1f4',
      border: '1px solid #d6d9dc',
      borderRadius: '3px',
      color: '#5f6062',
      fontSize: '14px',
      margin: '0',
      padding: '10px',
      hover: {
         background: '#eaedef',
         borderColor: '#c1c3c6',
         color: '#303031'
      }
   },
   dropdown: {
      background: '#fff',
      border: '1px solid #d6d9dc',
      borderRadius: '3px',
      boxShadow: '0 10px 20px rgba(88, 92, 95, 0.1)',
      display: 'block',
      left: '0',
      margin: '0',
      maxHeight: '300px',
      minWidth: 'auto',
      overflowY: 'auto',
      padding: '10px',
      position: 'absolute',
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
