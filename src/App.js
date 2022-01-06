import React, {useRef} from 'react'
import DropDown from './lib/components/DropDown'
import Footer from './pages/home/Footer'
import Header from './pages/home/Header'
import MegaMenu from './pages/home/MegaMenu'
import MenuFour from './pages/home/MenuFour'
import MenuOne from './pages/home/MenuOne'
import MenuSearch from './pages/home/MenuSearch'
import MenuThree from './pages/home/MenuThree'
import MenuTwo from './pages/home/MenuTwo'

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
         <Header />
         <main className="grid sm:grid-cols-12 gap-2 bg-slate-50 p-2 border-b">
            <section className="p-6 md:p-8 bg-white sm:col-span-6 lg:col-span-6">
               <h3 className="text-lg font-bold mb-2">Default</h3>
               <p className="text-sm mb-5 border-b border-opacity-50 pb-5 text-slate-600">
                  Basic component functionality without custom configuration or
                  styling.
               </p>
               <div className="flex flex-wrap items-center gap-3 lg:gap-2 self-start">
                  <DropDown label="Example #1">
                     <MenuOne />
                  </DropDown>
                  <DropDown label="Example #2" id="drop-2">
                     <MenuTwo />
                  </DropDown>
               </div>
            </section>

            <section className="p-6 md:p-8 bg-white sm:col-span-6 lg:col-span-6">
               <h3 className="text-lg font-bold mb-2">Custom Styling</h3>
               <p className="text-sm mb-5 border-b border-opacity-50 pb-5 text-slate-600">
                  Using the <span className="bg-blue-50 p-1">config</span> prop
                  to style the dropdown button, menu and transitions.
               </p>
               <div className="flex flex-wrap items-center gap-3 lg:gap-2 self-start">
                  <DropDown
                     label="Mega Menu"
                     config={{
                        button: {
                           background: '#5385b7',
                           border: '1px solid #38699b',
                           borderRadius: '4px',
                           color: '#fff',
                           padding: '8px 15px',
                           hover: {
                              background: '#2f5781',
                              borderColor: '#2f5781',
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
                           border: '1px solid #bcc2c9',
                           width: '500px',
                           padding: '20px',
                           transform: 'scale(0.95)',
                           transition:
                              'transform 0.25s cubic-bezier(0.24, 0.22, 0.015, 1.56), opacity 0.15s ease-in-out, visibility 0.15s ease-in-out',
                           top: '110%',
                           left: '-20px',
                           active: {
                              top: '100%',
                              transform: 'scale(1)'
                           }
                        }
                     }}
                  >
                     <MegaMenu />
                  </DropDown>
                  <DropDown
                     label="Open Right <span>&rarr;</span>"
                     config={{
                        button: {
                           padding: '8px 15px',
                           background: '#fff',
                           hover: {
                              background: '#f7f7f7',
                              borderColor: '#3d4750',
                              color: '#222'
                           },
                           active: {
                              background: '#3d4750',
                              borderColor: '#3d4750',
                              color: '#fff'
                           }
                        },
                        dropdown: {
                           background: '#f7f9fb',
                           border: '1px solid #c0c9d3',
                           transition: 'all 0.2s ease',
                           margin: '0',
                           padding: '10px 15px',
                           top: '0',
                           left: '105%',
                           transform: null,
                           active: {
                              top: '0',
                              left: '102%'
                           }
                        }
                     }}
                  >
                     <MenuOne />
                  </DropDown>
                  <DropDown
                     ref={drop}
                     id="my-dropdown"
                     label="Menu Group"
                     className="drop"
                     buttonClassName="button"
                     dropdownClassName="menu"
                     config={{
                        button: {
                           background: '#f5f3ff',
                           color: '#5b21b6',
                           borderColor: '#7c3aed',
                           width: '100%',
                           borderRadius: '4px',
                           hover: {
                              background: '#7c3aed',
                              borderColor: '#7c3aed',
                              color: '#fff'
                           },
                           active: {
                              background: '#6d28d9',
                              borderColor: '#6d28d9',
                              borderRadius: '4px 4px 0 0',
                              color: '#fff'
                           }
                        },
                        container: {
                           width: '150px'
                        },
                        dropdown: {
                           width: '100%',
                           background: '#fff',
                           borderColor: '#6d28d9',
                           borderRadius: '0 0 4px 4px',
                           padding: '5px',
                           display: 'none',
                           margin: '0',
                           active: {
                              display: 'block'
                           }
                        }
                     }}
                  >
                     <div>
                        <MenuFour />
                        <div className="flex justify-end text-xs mt-2">
                           <button
                              className="text-slate-700 text-xs hover:underline px-1 mb-1"
                              onClick={() => handleClick()}
                           >
                              Close
                           </button>
                        </div>
                     </div>
                  </DropDown>
               </div>
            </section>

            <section className="p-6 md:p-8 bg-white sm:col-span-6 lg:col-span-4">
               <h3 className="text-lg font-bold mb-2">Unstyled</h3>
               <p className="text-sm mb-5 border-b border-opacity-50 pb-5 text-slate-600">
                  Set the <span className="bg-blue-50 p-1">useStyles</span> prop
                  to <span className="bg-blue-50 p-1">false</span> and remove
                  almost all default component CSS (width, colors, backgrounds
                  etc.).
               </p>
               <DropDown
                  label="Click Here"
                  buttonClassName="font-semibold text-sm p-1"
                  useStyles={false}
               >
                  <MenuOne />
               </DropDown>
            </section>

            <section className="p-6 md:p-8 bg-white sm:col-span-6 lg:col-span-4">
               <h3 className="text-lg font-bold mb-2">Informational</h3>
               <p className="text-sm mb-5 border-b border-opacity-50 pb-5 text-slate-600">
                  Dropdowns without focusable or interactive elements can be
                  used for informational purposes.
               </p>
               <div className="flex flex-wrap items-center gap-3 lg:gap-2 self-start">
                  <DropDown
                     label="Show Info"
                     isMenu={false}
                     config={{dropdown: {background: '#f1f5f9'}}}
                  >
                     <MenuThree />
                  </DropDown>
               </div>
            </section>

            <section className="p-6 md:p-8 bg-white sm:col-span-6 lg:col-span-4">
               <h3 className="text-lg font-bold mb-2">Letter Navigation</h3>
               <p className="text-sm mb-5 border-b border-opacity-50 pb-5 text-slate-600">
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
