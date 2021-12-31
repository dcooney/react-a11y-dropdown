import DropDown from './lib/components/DropDown'
import MenuOne from './components/MenuOne'
import MenuTwo from './components/MenuTwo'
import MenuThree from './components/MenuThree'
import Intro from './components/Intro'

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
