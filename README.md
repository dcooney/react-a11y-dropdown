# React A11y DropDown

An accessible and unopinionated dropdown component for [React](https://www.reactjs.org) with full keyboard support.

[Usage Example](https://dcooney.github.io/react-a11y-dropdown/)

**Important note**: This component does not style the contents of the dropdown. It's simply a wrapper for existing components and will inherit application styling.

## Features

-  Creates a button to toggle the state (open/closed) of the dropdown menu.
-  Adds required aria attributes to the button and dropdown components.
-  Enables keyboard controls to tab and arrow seemlessly through focusable elements within the dropdown.

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

| Prop                | Description                                                 | Type    | Default | Required |
| ------------------- | ----------------------------------------------------------- | ------- | ------- | -------- |
| `label`             | The label for thegenerated button - HTML is accepted.       | string  | null    | Yes      |
| `id`                | An optional ID for the rendered HTML element.               | string  | null    | No       |
| `className`         | Custom classnames for the dropdown component wrapper.       | string  | null    | No       |
| `buttonClassName`   | Custom classnames for the button trigger element.           | string  | null    | No       |
| `dropdownClassName` | Custom classnames for the dropdown element.                 | string  | null    | No       |
| `useStyles`         | Use built-in CSS styles from component.                     | boolean | true    | No       |
| `config`            | Modify the component CSS styles via [config prop](#config). | object  | null    | No       |

```javascript
return (
   <DropDown
      label="Button Label"
      id="dropdown"
      className="my-dropdown"
      buttonClassName="text-md text-blue-600 bg-blue-50",
      config={{
         button: {
            background: '#fff',
            borderColor: '#cccccc',
            color: '#111111',
            hover: {
               background: '#111111',
               borderColor: '#111111',
               color: '#fff'
            }
         }
      }}
   >
      <YourComponent>{children}</YourComponent>
   </DropDown>
)
```

## Config

The `DropDown` component can be fully styled passing in updated options via the `config` prop.

```javascript
return (
   <DropDown
      label="Show Menu"
      config={{
         button: {
            background: '#fff',
            border: null,
            color: "#ff0000',
            hover: {
               background: '#121212',
               color: "#fff',
            }
         }
      }}
   >
      <YourComponent>{children}</YourComponent>
   </DropDown>
)
```

**Config Defaults**

The following default CSS properties are passed into the `DropDown` component.

```javascript
{
   button: {
      background: '#eef1f4',
      border: '1px solid #d6d9dc',
      borderRadius: '3px',
      color: '#494a4c',
      fontSize: '14px',
      fontWeight: 'normal',
      margin: '0',
      padding: '10px',
      width: 'auto',
      hover: {
         background: '#eaedef',
         borderColor: '#c1c3c6',
         color: '#242526'
      }
   },
   dropdown: {
      background: '#fff',
      border: '1px solid #d6d9dc',
      borderRadius: '3px',
      boxShadow: '0 10px 20px rgba(88, 92, 95, 0.1)',
      display: 'block',
      left: '0',
      margin: '0',
      maxHeight: '300px',
      minWidth: 'auto',
      overflowY: 'auto',
      padding: '10px',
      position: 'absolute',
      transform: 'scale(0.95)',
      transition:
         'transform 0.25s cubic-bezier(0.24, 0.22, 0.015, 1.56), opacity 0.15s ease-in-out, visibility 0.15s ease-in-out',
      top: '100%',
      width: '250px',
      zIndex: 99999,
      active: {
         transform: 'scale(1)'
      }
   },
   wrapper: {
      width: 'auto'
   }
}
```

**Note**: Setting a property to `null` will prevent the CSS property from being attached to the component.
