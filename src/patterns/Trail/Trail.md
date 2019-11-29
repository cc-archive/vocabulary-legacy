A trail of crumbs looks like this.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHome,
  faBook,
  faCubes,
  faCube
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faBook, faCubes, faCube);

<Trail color="orange">
  <TrailCrumb icon="home" link="https://github.com/creativecommons/vue-vocabulary">
    CC Vocabulary
  </TrailCrumb>
  <TrailCrumb icon="book" link="/">
    Styleguide
  </TrailCrumb>
  <TrailCrumb icon="cubes" link="/#/Patterns">
    Patterns
  </TrailCrumb>
  <TrailCrumb icon="cube" link="/#/Patterns/Trail">
    Trail
  </TrailCrumb>
</Trail>
```

## Color set

A trail is black colored by default.

```jsx
<Trail>
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
```

Trails can be colored using any color from the set provided by CC Vocabulary. I
wouldn't follow a black trail.

Also you may use one of the four shades, namely `lighter`, `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFillDrip, faSwatchbook } from '@fortawesome/free-solid-svg-icons'

library.add(faFillDrip, faSwatchbook);

let color = '';
let colorOptions = [
  { value: '', text: 'None' },
  { value: 'tomato', text: 'Tomato' },
  { value: 'gold', text: 'Gold' },
  { value: 'green', text: 'Green' },
  { value: 'blue', text: 'Blue' },
  { value: 'orange', text: 'Orange' },
  { value: 'turquoise', text: 'Turquoise' },
];

let shade = '';
let shadeOptions = [
  { value: '', text: 'Default' },
  { value: 'lighter', text: 'Lighter' },
  { value: 'light', text: 'Light' },
  { value: 'normal', text: 'Normal' },
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
<Trail
  :color="color ? color : null"
  :shade="shade ? shade : null">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
```

On a dark or non-white background, you may use the inverted version.

```jsx { "props": { "className": "dark-background" } }
<Trail is-inverted>
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="turquoise" is-inverted>
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
```

### Add-on set

Refer to [TrailCrumb](#/Patterns/TrailCrumb).
