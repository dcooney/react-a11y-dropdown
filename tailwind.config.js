/** @type {import('tailwindcss').Config} */
const limit = '1220px'

module.exports = {
   content: ['./src/**/*.{html,js,tsx}'],
   theme: {
      container: {
         center: true,
         margin: 'auto',
         padding: '1.5rem',
         screens: {
            lg: '100%',
            limit
         }
      },
      extend: {
         screens: {
            xs: '480px',
            md_max: {max: '767px'},
            lg_max: {max: '1023px'},
            xl_max: {max: '1219px'},
            xl: limit,
            limit
         }
      }
   }
}
