# react-a11y-dropdown

An fully accessible and unopinionated dropdown component for [React](https://www.reactjs.org) with full keyboard support.

The goal with **React A11y Dropdown** is to help build accessible dropdown menus by providing the required keyboard interactions and ARIA attributes to meet accessibilility best practices as determined by [w3.org Menu Button spec](https://www.w3.org/TR/wai-aria-practices/#menubutton).

&rarr; **[View the Examples](https://dcooney.github.io/react-a11y-dropdown/)**

## Features

- **Button**: Creates a button to toggle the state (open/closed) of the dropdown menu.
- **Aria Attributes**: Adds required `aria` attributes to the button and dropdown components.
- **Keyboard Controls**: Enables keyboard controls to tab and arrow key seemlessly through focusable elements within the dropdown component.
- **Letter Navigation**: Character search by first letter when focus is on an expanded dropdown menu.

**Note**: This component does not style the contents of the dropdown. Its simply a wrapper for your existing components and will inherit application styling as required.

## Accessibility

Meeting [W3.org accessiblitiy guidelines](https://www.w3.org/TR/wai-aria-practices/#menubutton) on interactive components requires a lot of thought, planning and custom JavaScript. The idea with **react-a11y-dropdowns** is to keep all that complex functionality inside a single component so you don't have to worry about it.

This component follows the best practices that have been set out by the W3.org with regards to dropdowns and menu button controls by enabling keyboard controls (up, down, home, end, esc), adding the proper `aria` attributes and providing a first letter search when interacting with a dropdown menu.

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

| Prop                      | Description                                                                             | Type    | Default | Required |
| ------------------------- | --------------------------------------------------------------------------------------- | ------- | ------- | -------- |
| `id`                      | The component ID - if not specified an ID will be generated randomly.                   | string  | null    | Yes      |
| `label`                   | The text for the generated button toggle - HTML is accepted.                            | string  | null    | Yes      |
| `className`               | Classnames for the dropdown component container.                                        | string  | null    | No       |
| `activeClassName`         | Classnames for the dropdown component container while in it's expanded state.           | string  | null    | No       |
| `buttonClassName`         | Classnames for the button trigger element.                                              | string  | null    | No       |
| `activeButtonClassName`   | Classnames for the button trigger element while in it's expanded state.                 | string  | null    | No       |
| `dropdownClassName`       | Classnames for the dropdown element.                                                    | string  | null    | No       |
| `activeDropdownClassName` | Classnames for the dropdown element while in it's expanded state.                       | string  | null    | No       |
| `useStyles`               | Use built-in CSS styles from component.                                                 | boolean | true    | No       |
| `isMenu`                  | Is this a menu button group? If true, the appropriate `aria` attributes will be added.  | boolean | true    | No       |
| `search`                  | Enbale searching dropdown menu contents by first letter when dropdown is in open state. | boolean | false   | No       |
| `onHover`                 | Allow mouse hover to open dropmenu.                                                     | boolean | false   | No       |
| `config`                  | Modify the component CSS styles via [config prop](#config).                             | object  | null    | No       |

```jsx
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

```jsx
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

The following default CSS properties are passed into the `DropDown` component and cann be modified using the `config` prop.

```javascript
{
   button: {
      background: '#eef1f4',
      border: '1px solid #d6d9dc',
      borderRadius: '3px',
      color: '#494a4c',
      fontSize: '14px',
      fontWeight: null,
      margin: '0',
      padding: '8px 12px',
      transition: null,
      width: null,
      hover: {
         background: '#eaedef',
         borderColor: '#c1c3c6',
         borderRadius: null,
         color: '#242526'
      },
      active: {
         background: null,
         borderColor: null,
         borderRadius: null,
         color: null
      }
   },
   dropdown: {
      background: '#fff',
      border: '1px solid #d6d9dc',
      borderRadius: '3px',
      bottom: null,
      boxShadow: '0 8px 16px rgba(88, 92, 95, 0.1)',
      display: 'block',
      left: '0',
      margin: '5px 0 0',
      padding: '10px',
      position: 'absolute',
      right: null,
      transform: null,
      transition: 'all 0.15s ease',
      top: '100%',
      width: '250px',
      zIndex: 99999,
      active: {
         bottom: null,
         display: null,
         left: null,
         right: null,
         top: null,
         transform: null
      }
   },
   container: {
      width: 'auto'
   }
}
```

**Notes**

- The `active` object properties are applied when the `DropDown` component is in an expanded state.
- Setting a property to `null` will prevent the CSS property from being attached to the component.

## CSS Styling

Some basic styles are provided via [Styled Components](https://styled-components.com) for the `<button/>` trigger and dropdown elements (see markup below). The contents of the dropdown are not styled in any way and it will inherit your current application styles.

I've done my best to only provide styling for things that were absolutely necessary to acheive a modern look and feel for the default component.

**Rendered Markup**

```HTML
<!-- Closed -->
<div class="react-a11y-dropdown">
   <button class="react-a11y-dropdown--button">Open Menu</button>
   <div class="react-a11y-dropdown--menu">
      <!-- Your Component Here -->
   </div>
</div>

<!-- Opened -->
<div class="react-a11y-dropdown expanded">
   <button class="react-a11y-dropdown--button active">Open Menu</button>
   <div class="react-a11y-dropdown--menu active">
      <!-- Your Component Here -->
   </div>
</div>
```

### Custom Styles

Instead of providing a CSS file to be imported directly into your application, I've created a `config` prop that is passed into the `<DropDown/>` component that can modify existing styles on the fly.

```jsx
return (
   <DropDown
      label="Button Label"
      config={{
         button: {
            background: '#f7f7f7',
            color: '#999',
            hover: {
               background: '#111111',
               color: '#fff'
            }
         }
      }}
   >
      <YourComponent>{children}</YourComponent>
   </DropDown>
)
```

**Remove Styles**

You can always roll your own styles and remove default component styling by setting the `useStyles` prop.

```jsx
<DropDown label="Button Label" useStyles={false}>
   <YourComponent>{children}</YourComponent>
</DropDown>
```

**Note**: With `useStyles` set to `false` all styling will be removed with the exception of the `visibility` and `opacity` styles that are used to show/hide the dropdown component.

## Development Features/Notes

Ideas and features to add in future development.

- The ability to add theming and allow for switching preset styles via component prop.
- Full text search along with letter navigation to enhance the letter searching.
