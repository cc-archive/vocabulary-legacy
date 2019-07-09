## Examples

A basic navigation bar component looks as follows.

```jsx { "props": { "className": "no-i18n" } }
<Navigation
  :linkList="[{text: 'Link 1', href: '#1'}, {text: 'Link 2', href: '#2'}]"/>
```

The bar is mobile responsive as well. Resize the browser to see it change to a 
mobile version.

### Color set

On dark backgrounds, the component can be inverted to change the font color to 
white and the hover highlight to 15% white. 

```jsx { "props": { "className": "no-i18n dark-background" } }
<Navigation
  :linkList="[{text: 'Link 1', href: '#1'}, {text: 'Link 2', href: '#2'}]"
  is-inverted/>
```
