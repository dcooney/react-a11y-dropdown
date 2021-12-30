import DropDown from './lib/components/DropDown'

export default function App() {
   return (
      <div className="p-5">
         <h1 className="text-3xl font-bold mb-1">React A11y DropDown</h1>
         <h2 className="text-2xl font-thin opacity-75 pb-5 border-b mb-5">
            An accessible and unopinionated dropdown component for{' '}
            <a href="https://www.reactjs.org">React</a> for full keyboard
            support.
         </h2>
         <p className="font-normal mb-5">
            Use the tab key in combination with your keyboard up/down arrows to
            navugate through the drop menu's and content.
         </p>
         <div className="flex flex-nowrap gap-5">
            <DropDown id="my-dropdown" label="Show Options">
               <ul>
                  <li>
                     <a
                        href="#"
                        className="block w-full text-left p-1 hover:underline"
                     >
                        Link One
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="block w-full text-left p-1 hover:underline"
                     >
                        Link Two
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="block w-full text-left p-1 hover:underline"
                     >
                        Link Three
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="block w-full text-left p-1 hover:underline"
                     >
                        Link Four
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="block w-full text-left p-1 hover:underline"
                     >
                        Link Five
                     </a>
                  </li>
               </ul>
            </DropDown>
            <DropDown id="my-id-2" label="Show Form Elements">
               <div>
                  <ul className="mb-2">
                     <li>
                        <button className="w-full text-left p-1 hover:underline">
                           Item One
                        </button>
                     </li>
                     <li>
                        <button className="w-full text-left p-1 hover:underline">
                           Item Two
                        </button>
                     </li>
                     <li>
                        <button className="w-full text-left p-1 hover:underline">
                           Item Three
                        </button>
                     </li>
                  </ul>
                  <div className="p-3 bg-gray-100">
                     <label
                        htmlFor="input"
                        className="block uppercase font-bold text-xs m-0 mb-1"
                     >
                        Form Input
                     </label>
                     <input id="input" type="text" className="border w-full" />
                  </div>
               </div>
            </DropDown>
            <DropDown label={`No Focusable Elements <span>💪</span>`}>
               <div className="p-2">
                  <h4 className="font-bold text-md mb-2">Heading Text</h4>
                  <p className="text-sm">
                     There are no interections in this dropdown. It's for
                     informational purposes only.
                  </p>
               </div>
            </DropDown>
         </div>
      </div>
   )
}
