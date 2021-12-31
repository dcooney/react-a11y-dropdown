# React A11y DropDown

An accessible and unopinionated dropdown component for [React](https://www.reactjs.org) for full keyboard support.

[Usage Example](https://dcooney.github.io/react-a11y-dropdown/)

**Important note**: This component does not style the contents of the dropdown. It's simply a wrapper for existing components and will inherit application styling.

## Features

-  Creates a button to toggle the state (open/closed) of the dropdown menu.
-  Adds required aria attributes to button and dropdown components.
-  Enables keyboard controls to tab and arrow seemlessly through items within the dropdown.

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

| Prop                | Description                                           | Type    | Default | Required |
| ------------------- | ----------------------------------------------------- | ------- | ------- | -------- |
| `label`             | The label for thegenerated button - HTML is accepted. | string  | null    | Yes      |
| `id`                | An optional ID for the rendered HTML element.         | string  | null    | No       |
| `className`         | Custom classnames for the dropdown component wrapper. | string  | null    | No       |
| `buttonClassName`   | Custom classnames for the button trigger element.     | string  | null    | No       |
| `dropdownClassName` | Custom classnames for the dropdown element.           | string  | null    | No       |
| `useStyles`         | Use built-in CSS styles from component.               | boolean | true    | No       |

```javascript
return (
   <DropDown
      label="Button Label"
      id="dropdown"
      className="my-dropdown"
      buttonClassName="my-dropdown--button"
   >
      <YourComponent>{children}</YourComponent>
   </DropDown>
)
```
