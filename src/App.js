import './App.css'
import DropDown from './lib/DropDown'
import styled from 'styled-components'

export default function App() {
  return (
    <div>
      <Wrapper className="App">
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
              This is a paragraph in the drop menu. Nothing needs to heppen
              here.
            </p>
          </div>
        </DropDown>
      </Wrapper>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
      <p>dewfwef we</p>
    </div>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 25px;
  margin-bottom: 250px;
`
