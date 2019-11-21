A set of shields look like this.

```jsx
<Shield
  color="orange"
  label="CC"
  message="vocabulary"/>
```

### Color set

A shield without any given color is grey.

```jsx
<Shield
  label="Color"
  message="Grey"/> 
```

The message part of the shield can be colored with any color from the set
provided by CC Vocabulary. No one likes grey.

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
<Shield
  :color="color ? color : null"
  :shade="shade ? shade : null"
  label="Color"
  :message="color ? color : 'color'"/>
```

On a dark or non-white background, use the inverted type of shield.

```jsx { "props": { "className": "dark-background" } }
<Shield
  label="Dark?"
  message="Inverted"
  is-inverted/>
<br/><br/>
<Shield
  color="turquoise"
  label="Dark?"
  message="Inverted"
  is-inverted/>
```

### Style set

Shield allows both label and message to be manipulated in terms of text case. By
default labels are lowercased whereas messages are not. This can be changed if
needed or desired.

```jsx
<Shield
  color="green"
  :lowercase-set="[false, true]"
  label="Creative Commons"
  message="When we share, everyone wins"/>
```

A shield can be rounded slightly to fit in better with curvy layouts. And you
can go against the CC design aesthetic and make it completely rounded.

```jsx
<Shield
  color="green"
  label="Roundness"
  message="Slight"
  roundness="slight"/>
<br/><br/>
<Shield
  color="green"
  label="Roundness"
  message="Complete"
  roundness="complete"/>
```  

A shield can be made slightly simple version, which is not too much prominent
or extremely simple, which is even less eye-catching.

```jsx
<Shield
  color="green"
  label="Simplicity"
  message="Slight"
  simplicity="slight"/>
<br/><br/>
<Shield
  color="green"
  label="Simplicity"
  message="Extreme"
  simplicity="extreme"/>
```  


### Size set

Shields come in all sizes.

```jsx
<Shield
  color="blue"
  size="small"
  label="Size"
  message="Level 1"/>
<br/><br/>
<Shield
  color="blue"
  label="Size"
  message="Level 2"/>
<br/><br/>
<Shield
  color="blue"
  size="big"
  label="Size"
  message="Level 3"/>
<br/><br/>
<Shield
  color="blue"
  size="large"
  label="Size"
  message="Level 4"/>
<br/><br/>
<Shield
  color="blue"
  size="huge"
  label="Size"
  message="Level 5"/>
<br/><br/>
<Shield
  color="blue"
  size="enormous"
  label="Size"
  message="Level 6"/>
<br/><br/>
<Shield
  color="blue"
  size="gigantic"
  label="Size"
  message="Level 7"/>
<br/><br/>
<Shield
  color="blue"
  size="mega"
  label="Size"
  message="Level 8"/>
```

### Add-on set

A label accepts strings for the label and the message via the `label` and 
`message` props.

```jsx
<Shield
  color="tomato"
  label="Customisation"
  message="None"/>
``` 

But there are times when you just want to control the formatting of the text or
want some additional stuff to go in those sections.

```jsx
<Shield color="tomato">
  <template #label>
     <LicenseIconography :icon-list="['', 'by']"/>
  </template>
  <strong>Creative Commons</strong> Attribution
</Shield>
```

### Indication set

A shield can indicate the nature of the message.

```jsx
let one = true;
let two = true;

<Paragraph>
  <SwitchField 
    v-model="one"
    color="blue"/>
   Test one
</Paragraph>
<Paragraph>
  <SwitchField 
    v-model="two"
    color="blue"/>
   Test two
</Paragraph>
<br/>
<Shield 
  :indication="one & two ? 'positive' : one || two ? 'probably' : 'negative'"
  label="Tests"
  :message="one & two ? 'passing' : one || two ? 'partial' : 'failing'"/>
```
