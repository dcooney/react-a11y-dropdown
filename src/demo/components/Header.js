import {useRef} from 'react'
import DropDown from '../../lib/DropDown'

export default function Header() {
   const drop = useRef()

   const listStyle = 'my-2 ml-4 mb-3'

   /**
    * Close the custom dropmenu.
    */
   const handleClick = () => {
      drop.current.close()
   }
   return (
      <header className="py-5">
         <div className="block sm:flex justify-between items-center gap-2 pb-5">
            <div className="mb-2 sm:mb-0">
               <h1>React A11y Dropdown</h1>
               <p className="mb-0">
                  An accessible and unopinionated dropdown component for{' '}
                  <a href="https://www.reactjs.org">React</a> with full keyboard
                  support.
               </p>
            </div>
            <a
               className="inline-flex gap-1.5 font-medium items-center text-sm text-slate-700 rounded-[3px] bg-slate-50 border hover:border-slate-300 p-2.5 leading-none"
               href="https://github.com/dcooney/react-a11y-dropdown"
               target="_blank"
            >
               <svg
                  version="1.1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
               >
                  <path
                     fillRule="evenodd"
                     d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  ></path>
               </svg>
               <span>GitHub</span>
            </a>
         </div>

         <div className="flex items-center pt-5 border-t">
            <p className="text-sm mb-0">View the examples below:</p>
            <DropDown
               ref={drop}
               label="Testing Instructions"
               buttonClassName="tracking-tight"
               isMenu={false}
               config={{
                  button: {
                     background: null,
                     border: null,
                     padding: '5px',
                     margin: '0 5px',
                     fontSize: '0.875rem',
                     fontWeight: '600',
                     color: '#1e293b',
                     hover: {
                        background: null,
                        color: '#000'
                     }
                  },
                  dropdown: {
                     width: '320px',
                     padding: '15px 20px'
                  }
               }}
            >
               <ul className="text-sm leading-5 list-disc border-b">
                  <li className={listStyle}>
                     Click a button to toggle the corresponding dropdown menu.
                  </li>
                  <li className={listStyle}>
                     With a dropdown menu closed and the focus on a button,
                     press the down arrow to open the menu and move focus to the
                     first item in the menu.
                  </li>
                  <li className={listStyle}>
                     With a menu opened, press the down, up, home and end arrows
                     to cycle the focus through the items.
                  </li>
                  <li className={listStyle}>
                     With a menu opened, use the letter navigation by pressing a
                     letter key to navigate to items that start with whatever
                     letter you've typed.
                  </li>
                  <li className={listStyle}>
                     With a menu opened move focus outside of the menu — by
                     clicking anywhere outside or pressing Tab to close the
                     dropdown.
                  </li>
                  <li className={listStyle}>
                     With a menu opened and focus inside the menu, press the
                     Escape key or Shit + Tab to close the menu and return focus
                     to the trigger.
                  </li>
               </ul>
               <button
                  className="text-slate-700 text-xs hover:underline mt-3"
                  onClick={() => handleClick()}
               >
                  Close Window
               </button>
            </DropDown>
         </div>
      </header>
   )
}
