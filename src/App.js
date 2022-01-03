import React, {useRef} from 'react'
import DropDown from './lib/components/DropDown'
import Intro from './pages/home/Intro'
import MenuOne from './pages/home/MenuOne'
import MenuThree from './pages/home/MenuThree'
import MenuTwo from './pages/home/MenuTwo'
import MegaMenu from './pages/home/MegaMenu'

export default function App() {
   const drop = useRef()

   const handleClick = (e) => {
      drop.current.close()
   }

   return (
      <div className="container mx-auto px-5 text-slate-800 pb-15">
         <Intro />

         <div className="grid grid-cols-2 gap-5 pt-2">
            <div className="py-5">
               <h3 className="text-xl font-bold mb-1">Basic</h3>
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
            </div>

            <div className="py-5">
               <h3 className="text-xl font-bold mb-1">Custom Configuration</h3>
               <p className="text-sm mb-5">
                  Using the <span className="bg-blue-50 p-1">config</span> prop
                  to style the dropdown button and menu.
               </p>
               <div className="flex flex-nowrap items-center gap-4 self-start">
                  <DropDown
                     label="Mega Menu <span>&darr;</span>"
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
                           width: '475px',
                           maxHeight: 'none'
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
                        wrapper: {
                           width: '150px'
                        },
                        dropdown: {
                           width: '150px',
                           background: '#fff',
                           borderColor: '#c34426',
                           borderRadius: '0 0 6px 6px',
                           transform: 'none'
                        }
                     }}
                  >
                     <div>
                        <MenuOne />
                        <div className="flex justify-end text-xs">
                           <button onClick={() => handleClick()}>Close</button>
                        </div>
                     </div>
                  </DropDown>
               </div>
            </div>

            <div className="py-5">
               <h3 className="text-xl font-bold mb-1">No Focusable Elements</h3>
               <p className="text-sm mb-5">
                  Dropdowns without interactive elements.
               </p>
               <div className="flex flex-nowrap items-center gap-4 self-start">
                  <DropDown label="Dropdown #1">
                     <MenuThree />
                  </DropDown>
                  <DropDown label="Dropdown #2">
                     <MenuThree />
                  </DropDown>
               </div>
            </div>

            <div className="py-5">
               <h3 className="text-xl font-bold mb-1">Unstyled</h3>
               <p className="text-sm mb-5">
                  Using the <span className="bg-blue-50 p-1">useStyles</span>{' '}
                  prop to remove default CSS styling from the component.
               </p>
               <DropDown
                  label="Click Here <span>&darr;</span>"
                  useStyles={false}
               >
                  <MenuOne />
               </DropDown>
            </div>
         </div>
      </div>
   )
}
