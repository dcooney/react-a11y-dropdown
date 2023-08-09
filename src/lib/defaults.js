/**
 * Default component props.
 */
export const defaults = {
   button: {
      background: '#eef1f4',
      border: '1px solid #d6d9dc',
      borderRadius: '3px',
      color: '#494a4c',
      fontSize: '14px',
      fontWeight: null,
      margin: '0',
      padding: '8px 12px',
      transition: null,
      width: null,
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
      bottom: null,
      boxShadow: '0 8px 16px rgba(88, 92, 95, 0.1)',
      display: 'block',
      left: '0',
      margin: '5px 0 0',
      padding: '10px',
      position: 'absolute',
      right: null,
      transform: null,
      transition: 'all 0.15s ease',
      top: '100%',
      width: '250px',
      zIndex: 99999,
      active: {
         bottom: null,
         display: null,
         left: null,
         right: null,
         top: null,
         transform: null
      }
   },
   container: {
      width: 'auto',
      position: 'relative'
   }
}
