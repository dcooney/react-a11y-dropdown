import {useRef} from 'react'
import Footer from './demo/components/Footer'
import Header from './demo/components/Header'
import MegaMenu from './demo/menus/MegaMenu'
import Menu from './demo/menus/Menu'
import MixedContent from './demo/menus/MixedContent'
import MenuSearch from './demo/menus/MenuSearch'
import InfoMenu from './demo/menus/InfoMenu'
import DropDown from './lib/DropDown'

export default function Demo() {
   const megaMenuRef = useRef()

   return (
      <div className="container mx-auto px-5 text-slate-800">
         <Header />
         <main className="grid sm:grid-cols-12 gap-2.5 bg-slate-50 p-2.5 border rounded-md">
            <section className="section">
               <h3>Default Examples</h3>
               <p>
                  Basic component functionality without custom configuration or
                  styling.
               </p>
               <div className="flex flex-wrap gap-2.5">
                  <DropDown label="Dropdown Menu">
                     <Menu />
                  </DropDown>
                  <DropDown label="Mixed Content">
                     <MixedContent />
                  </DropDown>
               </div>
            </section>

            <section className="section">
               <h3>Custom Styling</h3>
               <p>
                  Using the <code>config</code> prop to style the button, menu
                  and dropdown transitions.{' '}
                  <a
                     href="https://github.com/dcooney/react-a11y-dropdown#config"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Learn More
                  </a>
               </p>
               <div className="flex flex-wrap gap-2.5">
                  <DropDown
                     ref={megaMenuRef}
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
                           top: '105%',
                           left: '-20px',
                           active: {
                              top: '100%',
                              transform: 'scale(1)'
                           }
                        }
                     }}
                  >
                     <MegaMenu />
                     <div className="flex justify-end text-xs mt-2">
                        <button
                           className="text-slate-700 text-xs hover:underline px-1 mb-1"
                           onClick={() => megaMenuRef?.current?.close()}
                        >
                           Close Menu
                        </button>
                     </div>
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
                     <Menu />
                  </DropDown>
               </div>
            </section>

            <section className="section">
               <h3>Unstyled</h3>
               <p>
                  Set <code>useStyles</code> to <code>false</code> to remove all
                  default component CSS (width, colors, backgrounds etc.).
               </p>
               <DropDown
                  label="Open Menu"
                  buttonClassName="font-medium text-sm p-1"
                  useStyles={false}
               >
                  <Menu />
               </DropDown>
            </section>

            <section className="section">
               <h3>On Hover</h3>
               <p>
                  Expand the dropdown on mouse hover and using keyboard
                  interactions.
               </p>
               <div className="flex flex-wrap gap-2.5">
                  <DropDown label="Hover Menu" onHover={true}>
                     <Menu />
                  </DropDown>
               </div>
            </section>

            <section className="section">
               <h3>Informational</h3>
               <p>
                  Dropdowns without focusable or interactive elements can be
                  used for informational purposes.
               </p>
               <DropDown
                  label="Show Info"
                  isMenu={false}
                  config={{dropdown: {background: '#f1f5f9'}}}
               >
                  <InfoMenu />
               </DropDown>
            </section>

            <section className="section">
               <h3>Letter Navigation</h3>
               <p>
                  Place focus within the dropdown menu and use your keyboard to
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
