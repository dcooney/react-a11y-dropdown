import DropDown from './lib/components/DropDown'
import './App.css'

export default function App() {
  return (
    <div className="menu">
      <DropDown id="my-id1" label="Show Options" direction="horizontal">
        <ul>
          <li>
            <button>One</button>
          </li>
          <li>
            <button>Two</button>
          </li>
          <li>
            <button>Three</button>
          </li>
          <li>
            <button>Four</button>
          </li>
          <li>
            <button>Five</button>
          </li>
        </ul>
      </DropDown>
      <DropDown id="my-id-2" label="Show Form Elements">
        <div>
          <button>One #2</button>
          <button>Two #2</button>
          <button>Three #2</button>
          <button>Four #2</button>
          <button>Five #2</button>
          <div>
            <input type="text" />
          </div>
        </div>
      </DropDown>
      <DropDown label={`No Focusable Elements <span>💪</span>`}>
        <div>
          <p>
            This is a paragraph in the drop menu. Nothing needs to heppen here.
          </p>
        </div>
      </DropDown>
    </div>
  )
}
