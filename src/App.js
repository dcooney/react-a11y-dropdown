import DropDown from './lib/components/DropDown'
import './App.css'

export default function App() {
  return (
    <div className="menu">
      <DropDown id="my-id1" label="My Button" direction="horizontal">
        <div>
          <button>One</button>
          <button>Two</button>
          <button>Three</button>
        </div>
      </DropDown>
      <DropDown id="my-id-2" label={`My Button #2 <span>defwefer</span>`}>
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
      <DropDown
        id="my-id-3"
        label={`My Button #2 <span>No Focusable Elements</span>`}
      >
        <div>
          <p>
            This is a paragraph in the drop menu. Nothing needs to heppen here.
          </p>
        </div>
      </DropDown>
    </div>
  )
}
