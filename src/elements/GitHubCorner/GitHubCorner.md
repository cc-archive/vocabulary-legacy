Here's a sample GitHub corner. Clicking it takes you to Vue Vocabulary's
repository on GitHub.

```jsx
<GitHubCorner 
  repo="creativecommons/vue-vocabulary"
  color="orange"> 
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

GitHub corners can be colored with either a black or white backgorund. 
Black, in one of rare cases like this, looks best though.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFillDrip, faSwatchbook } from '@fortawesome/free-solid-svg-icons'

library.add(faFillDrip, faSwatchbook);

let color = '';
let colorOptions = [
  { value: '', text: 'None' },
];

<SelectField
  v-model="color"
  :color="color ? color : null"
  icon="fill-drip"
  :option-list="colorOptions"/>
<br/>
<br/>
<GitHubCorner  
  :color="color ? color : null" />
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
</Grid>
```
