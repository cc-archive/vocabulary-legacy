## Examples

Statistics look like this.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faImage, faUserCircle);

<Grid>
  <GridCell :spanSet="[12, 6, 3, 3, 3]" style="text-align: center;">
    <Statistic color="magenta" value="Twenty two" label="Providers" is-textual-value is-plural/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 3, 3, 3]" style="text-align: center;">
    <Statistic color="purple" value="300M" label="Images" :iconSet="['', 'image']" is-plural/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 3, 3, 3]" style="text-align: center;">
    <Statistic color="blue" value="25" label="Contributors" :iconSet="['user-circle', '']" is-plural/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 3, 3, 3]" style="text-align: center;">
    <Statistic color="orange" value="2,100+" label="Commits" is-plural/>
  </GridCell>
</Grid>
```

### Color set

A statistic without a color specified is black.

```jsx
<Statistic value="Black" label="Color" is-textual-value/>
```

Statistics can be colored using any color from the set provided by CC 
Vocabulary. Writing this for every component is getting tiresome now.

```jsx
<Grid>
  <GridCell :spanSet="[12, 4, 4, 4, 4]" style="text-align: center;">
    <Statistic color="blue" value="blue" label="Color" is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]" style="text-align: center;">
    <Statistic color="green" value="green" label="Color" is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]" style="text-align: center;">
    <Statistic color="magenta" value="magenta" label="Color" is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]" style="text-align: center;">
    <Statistic color="olive" value="olive" label="Color" is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]" style="text-align: center;">
    <Statistic color="orange" value="orange" label="Color" is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]" style="text-align: center;">
    <Statistic color="purple" value="purple" label="Color" is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]" style="text-align: center;">
    <Statistic color="red" value="red" label="Color" is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]" style="text-align: center;">
    <Statistic color="sand" value="sand" label="Color" is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]" style="text-align: center;">
    <Statistic color="yellow" value="yellow" label="Color" is-textual-value/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :spanSet="[12, 6, 3, 3, 3]" style="text-align: center;">
    <Statistic color="blue" shade="light" value="Light" label="Color" is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 3, 3, 3]" style="text-align: center;">
    <Statistic color="blue" value="Default" label="Color" is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 3, 3, 3]" style="text-align: center;">
    <Statistic color="blue" shade="dark" value="Dark" label="Color" is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 3, 3, 3]" style="text-align: center;">
    <Statistic color="blue" shade="darker" value="Darker" label="Color" is-textual-value/>
  </GridCell>
</Grid>
```

There is an inverted option when the statistic is being displayed on a dark or
non-white background.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :spanSet="[12, 6, 6, 6, 6]" style="text-align: center;">
    <Statistic value="Inverted" label="Dark outside?" is-inverted is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 6, 6, 6]" style="text-align: center;">
    <Statistic color="purple" value="Colored" label="Dark outside?" is-inverted is-textual-value/>
  </GridCell>
</Grid>
```

### Add-on set

A statistic can be contain two icons, one for the value and the label each. Note 
that the icon must be added to the FontAwesome library by the application.

```jsx
<Grid>
  <GridCell :spanSet="[12, 4, 4, 4, 4]" style="text-align: center;">
    <Statistic
      color="magenta"
      :iconSet="['chart-line', '']"
      value="Value" 
      label="Icon" 
      is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]" style="text-align: center;">
    <Statistic
      color="magenta"
      :iconSet="['', 'chart-line']"
      value="Label" 
      label="Icon" 
      is-textual-value/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]" style="text-align: center;">
    <Statistic
      color="magenta"
      :iconSet="['chart-line', 'chart-line']"
      value="Both" 
      label="Icon" 
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

<Statistic color="orange">
  <template v-slot:labelAddons>
    <FontAwesomeIcon
      :icon="['fas', 'certificate']"/>
  </template>
  <template v-slot:label>
    License
  </template>
  <template v-slot:valueAddons>
    MIT |
  </template>
  Expat
</Statistic>
```

### Style set

A statistic can be formatted to have text-based value.

```jsx
<Statistic
  color="blue" 
  value="Forty two"
  is-textual-value>
  <template v-slot:label>
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

let value = 20;
<Statistic 
  :value="`${value}%`"
  label="Battery"
  :indication="parseInt(value) > 50 ? 'positive': 'negative'"/>
<span>&nbsp;&nbsp;</span>
<Button
  icon="plus"
  indication="positive"
  v-on:click="value += 10; if (value > 100) value = 100;">
  10%
</Button>
<Button 
  icon="minus" 
  indication="negative" 
  v-on:click="value -= 10; if (value < 0) value = 0;">
  10%
</Button>
```
