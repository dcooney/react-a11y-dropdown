export default function Footer() {
   return (
      <div>
         <p className="text-sm py-10 leading-5 p-12 text-center m-0">
            <strong>Note</strong>:{' '}
            <a href="https://www.npmjs.com/package/react-a11y-dropdown">
               React A11y Dropdowns
            </a>{' '}
            does not style the contents of dropdowns. It's simply a wrapper for
            your existing components and will inherit application styling when
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
      </div>
   )
}
