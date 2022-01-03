export default function Intro() {
   return (
      <>
         <p className="mb-5 text-xs mt-10">
            <strong className="bg-yellow-50 p-1">Note</strong>:{' '}
            <a href="https://www.npmjs.com/package/react-a11y-dropdown">
               React A11y Dropdowns
            </a>{' '}
            does not style the contents of the dropdown. It's a wrapper for your
            existing components and will inherit application styling when
            required.
         </p>
         <footer className="pt-5 border-t">
            <ul className="flex gap-5 text-sm">
               <li>
                  <a href="https://www.npmjs.com/package/react-a11y-dropdown">
                     &rarr; NPM
                  </a>
               </li>
               <li>
                  <a href="https://github.com/dcooney/react-a11y-dropdown">
                     &rarr; Github
                  </a>
               </li>
            </ul>
         </footer>
      </>
   )
}
