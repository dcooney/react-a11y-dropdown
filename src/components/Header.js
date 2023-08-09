import React, {useRef} from 'react'
import DropDown from '../lib/DropDown'

const listStyle = 'my-2 ml-4 mb-3'

export default function Intro() {
   const drop = useRef()

   /**
    * Close the custom dropmenu.
    */
   const handleClick = () => {
      drop.current.close()
   }
   return (
      <header className="text-slate-800">
         <h1 className="text-3xl sm:text-4xl font-black mb-2 pt-6">
            React A11y DropDown
         </h1>
         <div className="block sm:flex justify-between gap-2 pb-5">
            <h2 className="text-slate-600	text-xl font-light pr-2 mb-5 sm:mb-0">
               An accessible and unopinionated dropdown component for{' '}
               <a
                  href="https://www.reactjs.org"
                  className="underline hover:no-underline text-sky-600"
               >
                  React
               </a>{' '}
               with full keyboard support.
            </h2>
            <a
               className="self-start inline-block sm:flex gap-1 items-center text-sm text-slate-700 rounded-[3px] bg-slate-100 border border-slate-300 hover:border-slate-400 px-3 py-2 leading-none -mt-1.5"
               href="https://github.com/dcooney/react-a11y-dropdown"
               target="_blank"
            >
               <span className="flex gap-1 items-center">
                  GitHub
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
               </span>
            </a>
         </div>
         <div className="flex items-center py-5 border-t">
            <p className="text-sm px-1">View the examples below:</p>
            <DropDown
               ref={drop}
               label="Test Instructions"
               buttonClassName="tracking-tight"
               isMenu={false}
               config={{
                  button: {
                     background: null,
                     border: null,
                     padding: '5px',
                     fontSize: '0.875rem',
                     fontWeight: '700',
                     color: '#1e293b',
                     hover: {
                        background: null,
                        color: '#000'
                     }
                  },
                  dropdown: {
                     width: '300px',
                     padding: '20px 25px 20px 20px'
                  }
               }}
            >
               <ul className="text-xs leading-5 list-disc border-b">
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
