export default function Footer() {
   return (
      <>
         <p className="text-xs py-12 leading-5 p-12 text-center">
            <strong className="bg-yellow-50 p-1">Note</strong>:{' '}
            <a href="https://www.npmjs.com/package/react-a11y-dropdown">
               React A11y Dropdowns
            </a>{' '}
            does not style the contents of dropdowns. It's a wrapper for your
            existing components and will inherit application styling when
            required.
         </p>
         <footer className="pt-5 pb-20 border-t">
            <ul className="flex justify-center gap-3 text-xs">
               <li>View Source:</li>
               <li>
                  <a
                     href="https://www.npmjs.com/package/react-a11y-dropdown"
                     className="font-semibold"
                  >
                     &rarr; NPM
                  </a>
               </li>
               <li>
                  <a
                     href="https://github.com/dcooney/react-a11y-dropdown"
                     className="font-semibold"
                  >
                     &rarr; Github
                  </a>
               </li>
            </ul>
         </footer>
      </>
   )
}
