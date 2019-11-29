Statistics look like this.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faImage, faUserCircle);

<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Statistic
      color="orange"
      label="Providers"
      value="Twenty two"
      is-textual-value
      is-plural/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Statistic
      color="orange"
      :icon-set="['', 'image']"
      label="Images"
      value="300M"
      is-plural/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Statistic
      color="orange"
      :icon-set="['user-circle', '']"
      label="Contributors"
      value="25"
      is-plural/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Statistic
      color="orange"
      label="Commits"
      value="2,100+"
      is-plural/>
  </GridCell>
</Grid>
```

### Color set

A statistic without a color specified is black.

```jsx
<Statistic
  label="Color"
  value="Black"
  is-textual-value/>
```

Statistics can be colored using any color from the set provided by CC 
Vocabulary. Writing this for every component is getting tiresome now.

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
<Statistic
  :color="color ? color : null"
  :shade="shade ? shade : null"
  label="Color"
  :value="color ? color : 'default'"
  is-textual-value/>
```

There is an inverted option when the statistic is being displayed on a dark or
non-white background.

```jsx { "props": { "className": "dark-background" } }
<Grid style="text-align: center;">
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Statistic
      label="Dark outside?"
      value="Inverted"
      is-inverted
      is-textual-value/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Statistic
      color="turquoise"
      label="Dark outside?"
      value="Colored"
      is-inverted
      is-textual-value/>
  </GridCell>
</Grid>
```

### Add-on set

A statistic can be contain two icons, one for the value and the label each. Note 
that the icon must be added to the FontAwesome library by the application.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons';

library.add(faFontAwesomeFlag);

<Grid style="text-align: center;">
  <GridCell :span-set="[12, 12, 6, 3, 3]">
    <Statistic
      color="tomato"
      :icon-set="['chart-line', '']"
      label="Icon"
      value="Value"
      is-textual-value/>
  </GridCell>
  <GridCell :span-set="[12, 12, 6, 3, 3]">
    <Statistic
      color="tomato"
      :icon-set="['', 'chart-line']"
      label="Icon"
      value="Label"
      is-textual-value/>
  </GridCell>
  <GridCell :span-set="[12, 12, 6, 3, 3]">
    <Statistic
      color="tomato"
      :icon-set="['chart-line', 'chart-line']"
      label="Icon"
      value="Both"
      is-textual-value/>
  </GridCell>
  <GridCell :span-set="[12, 12, 6, 3, 3]">
    <Statistic
      color="tomato"
      :icon-set="['', ['fab', 'font-awesome-flag']]"
      label="Icon"
      value="Any"
      is-textual-value/>
  </GridCell>
</Grid>
```

If you'd like your own something there, you can override the value and label 
add-on slots with something that catches your fancy. You can also override the 
value and label slots themselves to have literally anything in the statistic.
Be careful, as excess customisation might render it not a statistic.

```jsx
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('FontAwesomeIcon', FontAwesomeIcon); 

library.add(faCertificate);

<Statistic color="tomato">
  <template #labelAddons>
    <FontAwesomeIcon 
      :icon="['fas', 'certificate']"
      fixed-width/>
  </template>
  <template #label>
    License
  </template>
  <template #valueAddons>
    <strong>MIT</strong> /
  </template>
  Expat
</Statistic>
```

### Style set

A statistic can be formatted to have text-based value.

```jsx
<Statistic
  color="green" 
  value="Forty two"
  is-textual-value>
  <template #label>
    Answer to the Ultimate Question<br/>
    of Life, the Universe, and Everything
  </template>
</Statistic>
```

### Indication set

A statistic can indicate the contextual nature of its value.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faMinus);

let value = 50;
<Statistic 
  label="Battery"
  :value="`${value}%`"
  :indication="value >= 60 ? 'positive' : value <= 40 ? 'negative' : 'probably'"/>
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
