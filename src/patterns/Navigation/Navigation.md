If a navigation bar of links looks like this, _"I'm going on an adventure!"_

```jsx { "props": { "className": "dark-background" } }
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHome,
  faBook
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faBook);

<Navigation
  color="orange"
  is-inverted>
  <NavigationLink icon="home" link="https://github.com/creativecommons/cc-vocabulary">
    Home page
  </NavigationLink>
  <NavigationLink icon="book" link="/">
    Style guide
  </NavigationLink>
</Navigation>
```

The bar is mobile responsive as well. Resize the browser to see it change to a 
mobile version.

### Color set

A navigation bar is black colored by default.

```jsx
<Navigation>
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
```

Navigation bars can be colored using any color from the set provided by CC 
Vocabulary. Nothing to discourage exploration like the color black. Also you
may use one of the three shades, namely `light`, `dark` and `darker`, to 
accentuate the color.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFillDrip, faSwatchbook } from '@fortawesome/free-solid-svg-icons'

library.add(faFillDrip, faSwatchbook);

let color = '';
let colorOptions = [
  { value: '', text: 'None' },
  { value: 'blue', text: 'Blue' },
  { value: 'green', text: 'Green' },
  { value: 'magenta', text: 'Magenta' },
  { value: 'olive', text: 'Olive' },
  { value: 'orange', text: 'Orange' },
  { value: 'purple', text: 'Purple' },
  { value: 'red', text: 'Red' },
  { value: 'sand', text: 'Sand' },
  { value: 'yellow', text: 'Yellow' }
];

let shade = '';
let shadeOptions = [
  { value: 'light', text: 'Light' },
  { value: '', text: 'Default' },
  { value: 'dark', text: 'Dark' },
  { value: 'darker', text: 'Darker' }
];

<SelectField
  v-model="color"
  :color="color ? color : null"
  icon="fill-drip"
  :option-list="colorOptions"/>
<SelectField
  v-model="shade"
  :color="color ? color : null"
  :shade="shade ? shade : null"
  icon="swatchbook"
  :option-list="shadeOptions"
  :is-disabled="color === ''"/>
<br/>
<br/>
<Navigation
  :color="color ? color : null"
  :shade="shade ? shade : null">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
```

On dark backgrounds, the component can be inverted.

```jsx { "props": { "className": "dark-background" } }
<Navigation is-inverted>
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="magenta" is-inverted>
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
```

### Add-on set

Refer to [NavigationLink](#/Patterns/NavigationLink).
