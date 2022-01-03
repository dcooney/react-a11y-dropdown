import React, {useRef} from 'react'
import DropDown from './lib/components/DropDown'
import Intro from './pages/home/Intro'
import MenuOne from './pages/home/MenuOne'
import MenuThree from './pages/home/MenuThree'
import MenuTwo from './pages/home/MenuTwo'
import MegaMenu from './pages/home/MegaMenu'

export default function App() {
   const drop = useRef()

   /**
    * Close the custom dropmenu.
    */
   const handleClick = () => {
      drop.current.close()
   }

   return (
      <div className="container mx-auto px-5 text-slate-800">
         <Intro />

         <main className="grid sm:grid-cols-2 gap-5 pt-5 pb-10">
            <section className="py-3">
               <h3 className="text-lg sm:text-xl font-bold mb-1">Basic</h3>
               <p className="text-sm mb-5">
                  OOTB functionality without custom configuration.
               </p>
               <div className="flex flex-nowrap items-center gap-4 self-start">
                  <DropDown label="Dropdown #1">
                     <MenuOne />
                  </DropDown>
                  <DropDown label="Dropdown #2">
                     <MenuTwo />
                  </DropDown>
               </div>
            </section>

            <section className="py-3">
               <h3 className="text-lg sm:text-xl font-bold mb-1">
                  Custom Configuration
               </h3>
               <p className="text-sm mb-5">
                  Using the <span className="bg-blue-50 p-1">config</span> prop
                  to style the dropdown button and menu.
               </p>
               <div className="flex flex-nowrap items-center gap-4 self-start">
                  <DropDown
                     label="Mega Menu"
                     config={{
                        button: {
                           background: '#38699b',
                           border: '1px solid #38699b',
                           borderRadius: '4px',
                           color: '#fff',
                           fontWeight: 'bold',
                           padding: '10px 14px',
                           hover: {
                              background: '#457ab1',
                              borderColor: '#457ab1',
                              color: '#fff'
                           }
                        },
                        dropdown: {
                           background: '#f3f7fb',
                           border: '1px solid #d6dfe9',
                           width: '500px',
                           transition:
                              'transform 0.25s cubic-bezier(0.24, 0.22, 0.015, 1.56), opacity 0.15s ease-in-out, visibility 0.15s ease-in-out',
                           top: '95%',
                           active: {
                              top: '102%'
                           }
                        }
                     }}
                  >
                     <MegaMenu />
                  </DropDown>
                  <DropDown
                     ref={drop}
                     id="my-dropdown"
                     label="Show Links"
                     className="drop"
                     buttonClassName="button"
                     dropdownClassName="menu"
                     config={{
                        button: {
                           background: '#fff',
                           color: '#d7583a',
                           borderColor: '#d7583a',
                           width: '100%',
                           fontWeight: 'bold',
                           padding: '10px 14px',
                           borderRadius: '6px',
                           hover: {
                              background: '#d7583a',
                              borderColor: '#d7583a',
                              color: '#fff'
                           },
                           active: {
                              background: '#c34426',
                              borderColor: '#c34426',
                              borderRadius: '6px 6px 0 0',
                              color: '#fff'
                           }
                        },
                        container: {
                           width: '150px'
                        },
                        dropdown: {
                           width: '150px',
                           background: '#fff',
                           borderColor: '#c34426',
                           borderRadius: '0 0 6px 6px',
                           transform: null
                        }
                     }}
                  >
                     <div>
                        <MenuOne />
                        <div className="flex justify-end text-xs mt-2">
                           <button
                              className="hover:underline"
                              onClick={() => handleClick()}
                           >
                              Close
                           </button>
                        </div>
                     </div>
                  </DropDown>
               </div>
            </section>

            <section className="py-3">
               <h3 className="text-lg sm:text-xl font-bold mb-1">
                  No Focusable Elements
               </h3>
               <p className="text-sm mb-5">
                  Dropdowns without interactive elements can be used for
                  informational purposes.
               </p>
               <div className="flex flex-nowrap items-center gap-4 self-start">
                  <DropDown label="Dropdown #1">
                     <MenuThree />
                  </DropDown>
                  <DropDown label="Dropdown #2">
                     <MenuThree />
                  </DropDown>
               </div>
            </section>

            <section className="py-3">
               <h3 className="text-lg sm:text-xl font-bold mb-1">Unstyled</h3>
               <p className="text-sm mb-5">
                  Using the <span className="bg-blue-50 p-1">useStyles</span>{' '}
                  prop to remove default CSS styling from the component (width,
                  colors, animation etc.).
               </p>
               <DropDown
                  label="Click Here <span>&darr;</span>"
                  buttonClassName="font-semibold p-1"
                  useStyles={false}
                  config={{
                     dropdown: {
                        top: null
                     }
                  }}
               >
                  <MenuOne />
               </DropDown>
            </section>
         </main>
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
      </div>
   )
}
