# React A11y DropDown

An accessible and unopinionated dropdown component for [React](https://www.reactjs.org) for full keyboard support.

**important note**: This component does not style the contents of the dropdown. It's simply a wrapper for existing components and will inherit application styling.

## Features

-  Creates a button to toggle the state (open/closed) of the drop menu.
-  Adds the required aria attributes to button and dropdown component.
-  Enables keyboard controls to tab and arrow seemlessly through dropdown items.

## Install

```bash
# With npm
npm i react-a11y-dropdown

# With Yarn
yarn add react-a11y-dropdown
```

## Usage

```javascript
import DropDown from 'react-a11y-dropdown'

export default function App() {
   return (
      <DropDown label="Development Resources">
         <ul>
            <li>
               <a href="https://github.com/">Github</a>
            </li>
            <li>
               <a href="https://www.npmjs.com/">NPM</a>
            </li>
            <li>
               <a href="https://www.reactjs.org">React</a>
            </li>
         </ul>
      </DropDown>
   )
}
```

## Props

The `DropDown` component accepts the following props.

| Syntax | Description                                           | Type   | Reuired |
| ------ | ----------------------------------------------------- | ------ | ------- |
| id     | An optional ID for the rendered HTML element.         | string | No      |
| label  | The label for thegenerated button - HTML is accepted. | string | Yes     |

```javascript
return (
   <DropDown label="Button Label">
      <div>...children</div>
   </DropDown>
)
```
