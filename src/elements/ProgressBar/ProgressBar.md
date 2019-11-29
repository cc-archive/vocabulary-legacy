Depending on whether completion value is known, progress bars look like this.

```jsx
<ProgressBar
  color="orange"
  icon="hourglass-half"
  :value="20"  
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="orange"
  icon="hourglass-half"/>
```

### Color set

A progress bar without the color specified indicates progress in black.

```jsx
<ProgressBar :value="20"/>
```

You already know that the progress bar can be colored using any color from the 
set provided by CC Vocabulary. Black is no fit color for a progress bar. 

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
<ProgressBar
  :color="color ? color : null"
  :shade="shade ? shade : null"
  :value="20"/>
```

On dark and non-white backgrounds, use the inverted option.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :spanSet="[12, 6, 6, 6, 6]">
    <ProgressBar
      :value="20" 
      is-percent-visible 
      is-inverted/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 6, 6, 6]">
    <ProgressBar is-inverted/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 6, 6, 6]">
    <ProgressBar
      color="turquoise"
      :value="20" 
      is-percent-visible 
      is-inverted/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 6, 6, 6]">
    <ProgressBar
      color="turquoise"
      is-inverted/>
  </GridCell>
</Grid>
```

### Add-on set

A progress bar may include an icon as well as show the percentage value adjacent
to it.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';

library.add(faAccessibleIcon);

<ProgressBar 
  color="tomato"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="tomato"
  :icon="['fab', 'accessible-icon']"
  :value="20"
  is-percent-visible/>
```

But if an icon and the percent completion don't meet your requirements, or your
demands, you can swap them out for things that do.

```jsx
<ProgressBar 
  color="tomato" 
  :value="20">
  <template #leftAddons>
    <strong>:-(</strong>
  </template>
  <template #rightAddons>
    <strong>:-)</strong>
  </template>
</ProgressBar>
```

### Size set

Progress bars come in all sizes, from small to mega.

```jsx
<ProgressBar
  color="blue"
  size="small"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="blue"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="blue"
  size="big"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="blue"
  size="large"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="blue"
  size="huge"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="blue"
  size="enormous"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="blue"
  size="gigantic"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="blue"
  size="mega"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
```

### Style set

A progress bar may be rounded slightly to fit in better amongst curvy layouts.
Or it can be taken to an extreme and made completely round, completely
antithetical to the traditional CC design aesthetic.

```jsx
<ProgressBar
  color="green"
  icon="hourglass-half"
  :value="20"
  roundness="slight"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="green"
  icon="hourglass-half"
  :value="20"
  roundness="complete"
  is-percent-visible/>
```

### Indication set

A progress bar may indicate the positive or negative connotation attached to the
percentage completion.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faMinus);

let value = 50;
<ProgressBar 
  icon="hourglass-half"
  :value="parseInt(value)"
  :indication="value >= 60 ? 'positive' : value <= 40 ? 'negative' : 'probably'"
  is-percent-visible/>
<span>&nbsp;&nbsp;</span>
<Button
  icon="plus"
  indication="positive"
  @click="value += 10; if (value > 100) value = 100;">
  10%
</Button>
<Button 
  icon="minus" 
  indication="negative" 
  @click="value -= 10; if (value < 0) value = 0;">
  10%
</Button>
```
