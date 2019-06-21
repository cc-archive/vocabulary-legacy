## Navigation guides the user around an app

Users of an application looking for a way to get around typically look for a 
navigation bar in the top of a page, typically to the right side. This is that 
bar, except the onus of placing it there is on you.

This bar is typically meant to be placed in the [Header](#/Patterns/Header).

### Examples

A basic Navigation component looks as follows.

```jsx
<Navigation
  :links="[{text: 'Link 1', href: '#1'}, {text: 'Link 2', href: '#2'}]"/>
```

On dark backgrounds, the component can be inverted to change the font color to 
white and the hover highlight to 10% white. 

```jsx { "props": { "className": "dark-background" } }
<Navigation
  inverted
  :links="[{text: 'Link 1', href: '#1'}, {text: 'Link 2', href: '#2'}]"/>
```

The bar is mobile responsive as well. Resize the browser to see it change to a 
mobile version.
