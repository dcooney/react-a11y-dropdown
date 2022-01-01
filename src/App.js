import DropDown from './lib/components/DropDown'
import MenuOne from './pages/home/MenuOne'
import MenuTwo from './pages/home/MenuTwo'
import MenuThree from './pages/home/MenuThree'
import Intro from './pages/home/Intro'

export default function App() {
   return (
      <div className="container mx-auto">
         <Intro />
         <div className="flex flex-nowrap items-center gap-4 self-start text-md">
            <DropDown
               id="my-dropdown"
               label="Show Links"
               className="drop"
               buttonClassName="button"
               dropdownClassName="menu"
               config={{
                  button: {
                     background: '#fff',
                     text: '#121212',
                     border: '#121212',
                     hover: {
                        background: '#121212',
                        border: '#121212',
                        text: '#fff'
                     }
                  },
                  wrapper: {
                     width: '200px'
                  }
               }}
            >
               <MenuOne />
            </DropDown>
            <DropDown id="my-id-2" label="Show Form Elements">
               <MenuTwo />
            </DropDown>
            <DropDown label={`No Focusable Elements <span>💪</span>`}>
               <MenuThree />
            </DropDown>
            <DropDown label="Unstyled Dropdown" useStyles={false}>
               <MenuOne />
            </DropDown>
         </div>
      </div>
   )
}
