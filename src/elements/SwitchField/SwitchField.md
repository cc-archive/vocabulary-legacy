A switch looks like this.

```jsx
<SwitchField
  color="orange"
  size="large"
  :value="true"
  is-labelled/>
```

### Color set

A switch without color is black.

```jsx
<SwitchField :value="true"/>
```

But as always, switches can be colored with any color from the set provided by
CC Vocabulary. Sometimes, black doesn't indicate on.

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
<SwitchField
  :color="color ? color : null"
  :shade="shade ? shade : null"
  :value="true"/>
```

On a dark or non-white background, use the inverted form of the switch.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      :value="true"
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      color="turquoise"
      :value="true"
      is-inverted/>
  </GridCell>
</Grid>
```

### Size set

Switches come in all sizes, from small to mega.

```jsx
<SwitchField
  color="blue"
  size="small"
  :value="true"/>
<br/><br/>
<SwitchField
  color="blue"
  :value="true"/>
<br/><br/>
<SwitchField
  color="blue"
  size="big"
  :value="true"/>
<br/><br/>
<SwitchField
  color="blue"
  size="large"
  :value="true"/>
<br/><br/>
<SwitchField
  color="blue"
  size="huge"
  :value="true"/>
<br/><br/>
<SwitchField
  color="blue"
  size="enormous"
  :value="true"/>
<br/><br/>
<SwitchField
  color="blue"
  size="gigantic"
  :value="true"/>
<br/><br/>
<SwitchField
  color="blue"
  size="mega"
  :value="true"/>
```

### Style set

A switch field can be rounded to be more compatible with curvy layouts. Even
more rounded is the pill shape. It is in complete contrast to the sharp edged CC
design but looks really good.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      color="green"
      roundness="slight"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      color="green"
      roundness="complete"
      :value="true"/>
  </GridCell>
</Grid>
```

The switch field can be defined so that it does not attract attention or it can 
defined to actively deny it. This ensures that other content on the page gets
the prominence it deserves.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      color="green"
      simplicity="slight"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      color="green"
      simplicity="extreme"
      :value="true"/>
  </GridCell>
</Grid>
```

### Add-on set

A switch may indicate the state with on/off icons for clarity. If the standard
I and O don't meet your expectations, you can supply the off and on icons 
yourself.

```jsx
<Grid>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <SwitchField
      color="tomato"
      size="huge" 
      :value="true"
      is-labelled/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <SwitchField
      color="tomato"
      size="huge"
      :value="true"
      :iconSet="['times', 'check']"
      is-labelled/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <SwitchField
      color="tomato"
      size="huge"
      :value="true"
      :iconSet="[['fab', 'bluetooth-b'], ['fab', 'bluetooth-b']]"
      is-labelled/>
  </GridCell>
</Grid>
```

### Indication set

A switch can indicate the nature of the consequences if flipped.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField indication="positive"/> Save all life
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField indication="probably"/> Thanos
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField indication="negative"/> End all life
  </GridCell>
</Grid>
```

Two special kinds of conditional indication have also been provided.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField indication="conditional"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField indication="anticonditional"/>
  </GridCell>
</Grid>
```

### State set

A switch may be disabled to prevent input altogether.

```jsx
<SwitchField
  color="blue"
  :value="true"
  is-disabled/>
```

A switch may be made read-only to prevent input while preserving readability.

```jsx
<SwitchField
  color="blue"
  :value="true"
  is-read-only/>
```
