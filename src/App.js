import React, {useRef} from 'react'
import DropDown from './lib/components/DropDown'
import Header from './pages/home/Header'
import Footer from './pages/home/Footer'
import MenuOne from './pages/home/MenuOne'
import MenuThree from './pages/home/MenuThree'
import MenuTwo from './pages/home/MenuTwo'
import MegaMenu from './pages/home/MegaMenu'
import MenuSearch from './pages/home/MenuSearch'
import MenuFour from './pages/home/MenuFour'

export default function App() {
   const drop = useRef()

   /**
    * Close the custom dropmenu.
    */
   const handleClick = () => {
      drop.current.close()
   }

   return (
      <div className="container mx-auto px-5 md:px-10 text-slate-800">
         <Header />

         <main className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10 pt-5 pb-10">
            <section className="py-3 xl:py-5 xl:py-5">
               <h3 className="text-lg sm:text-xl font-bold mb-1">Default</h3>
               <p className="text-sm mb-5">
                  Component default functionality without any custom
                  configurations.
               </p>
               <div className="flex flex-nowrap items-center gap-4 self-start">
                  <DropDown label="Dropdown #1">
                     <MenuOne />
                  </DropDown>
                  <DropDown label="Dropdown #2" id="drop-2">
                     <MenuTwo />
                  </DropDown>
               </div>
            </section>

            <section className="py-3 xl:py-5">
               <h3 className="text-lg sm:text-xl font-bold mb-1">
                  Custom Styling
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
                              background: '#4680bb',
                              borderColor: '#4680bb',
                              color: '#fff'
                           },
                           active: {
                              background: '#4680bb',
                              borderColor: '#4680bb',
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
                           width: '100%',
                           background: '#c34426',
                           borderColor: '#c34426',
                           borderRadius: '0 0 6px 6px',
                           padding: '0 10px 10px 10px',
                           transition: null,
                           transform: null
                        }
                     }}
                  >
                     <div>
                        <MenuFour />
                        <div className="flex justify-end text-xs mt-2">
                           <button
                              className="text-white hover:underline"
                              onClick={() => handleClick()}
                           >
                              Close
                           </button>
                        </div>
                     </div>
                  </DropDown>
               </div>
            </section>

            <section className="py-3 xl:py-5">
               <h3 className="text-lg sm:text-xl font-bold mb-1">Unstyled</h3>
               <p className="text-sm mb-5">
                  Set <span className="bg-blue-50 p-1">useStyles: false</span>{' '}
                  to remove component CSS (width, colors, background, animation
                  etc.).
               </p>
               <DropDown
                  label="Click Here <span>&darr;</span>"
                  buttonClassName="font-semibold p-1"
                  useStyles={false}
               >
                  <MenuOne />
               </DropDown>
            </section>

            <section className="py-3 xl:py-5">
               <h3 className="text-lg sm:text-xl font-bold mb-1">
                  No Focusable Elements
               </h3>
               <p className="text-sm mb-5">
                  Dropdowns without interactive elements can be used for
                  informational purposes.
               </p>
               <div className="flex flex-nowrap items-center gap-4 self-start">
                  <DropDown label="Dropdown #1" isMenu={false}>
                     <MenuThree />
                  </DropDown>
                  <DropDown label="Dropdown #2" isMenu={false}>
                     <MenuThree />
                  </DropDown>
               </div>
            </section>

            <section className="py-3 xl:py-5">
               <h3 className="text-lg sm:text-xl font-bold mb-1">
                  Letter Navigation
               </h3>
               <p className="text-sm mb-5">
                  Place focus in the dropdown menu and use your keyboard to
                  search the menu items by first letter.
               </p>
               <DropDown label="Open Menu" search={true}>
                  <MenuSearch />
               </DropDown>
            </section>
         </main>
         <Footer />
      </div>
   )
}
