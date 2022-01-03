import React, {useRef} from 'react'
import DropDown from './lib/components/DropDown'
import Intro from './pages/home/Intro'
import MenuOne from './pages/home/MenuOne'
import MenuThree from './pages/home/MenuThree'
import MenuTwo from './pages/home/MenuTwo'

export default function App() {
   const drop = useRef()

   const handleClick = (e) => {
      drop.current.close()
   }

   return (
      <div className="container mx-auto">
         <Intro />
         <div className="flex flex-nowrap items-center gap-4 self-start text-md">
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
                     color: '#121212',
                     borderColor: '#121212',
                     hover: {
                        background: '#121212',
                        borderColor: '#121212',
                        color: '#fff'
                     }
                  },
                  wrapper: {
                     width: '200px'
                  },
                  dropdown: {
                     top: false
                  }
               }}
            >
               <div>
                  <button onClick={() => handleClick()}>Close</button>
                  <MenuOne />
               </div>
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
