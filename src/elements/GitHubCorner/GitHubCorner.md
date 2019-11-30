Here's a sample GitHub corner. Clicking it takes you to Vue Vocabulary's
repository on GitHub.

```jsx
<GitHubCorner 
  repo="creativecommons/vue-vocabulary"
  color="orange"> 
</GitHubCorner>
```

### Positioning set

A GitHubCorner can be have absolute or `relative` positioning. By default, it
has relative positioning. Using `absolute` positioning will position the GitHub
corner relative to its first relatively positioned parent.

```html
<GitHubCorner  
  position="absolute">
</GitHubCorner>
```

### Corner set

A GitHub corner can be the left or right corner type. By default, you get the
right corner type but you change the corner with a prop.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <GitHubCorner/> 
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <GitHubCorner corner="left"/>
  </GridCell>
</Grid>
```

### Color set

A GitHub corner without color is black.

```jsx
<GitHubCorner/> 
```

GitHub corners can be colored with any color from the set provided by
Vocabulary. Black, in one of rare cases like this, looks best though.

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
<GitHubCorner  
  :color="color ? color : null" 
  :shade="shade ? shade : null"/>
```

If the GitHub corner is to be placed on a dark or non-white background, use the 
inverted variant.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <GitHubCorner is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <GitHubCorner
      corner="left"
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <GitHubCorner  
      color="turquoise" 
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <GitHubCorner  
      color="turquoise"
      corner="left" 
      is-inverted/>
  </GridCell>
</Grid>
```
