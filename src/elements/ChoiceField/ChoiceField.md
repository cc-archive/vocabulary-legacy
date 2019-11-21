Here's a choice. Radio buttons or checkboxes. To each purpose, it's own 
component!

```jsx
let picked = 'C';

<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <ChoiceField
      v-model="picked"
      id="a"
      color="orange"
      name="choice"
      value="A"
      simplicity="slight"
      is-single-select/>
    <label for="a">A</label>
    <br/>
    <ChoiceField
      v-model="picked"
      id="b"
      color="orange"
      name="choice"
      value="B"
      simplicity="slight"
      is-single-select/>
    <label for="b">B</label>
    <br/>
    <ChoiceField
      v-model="picked"
      id="c"
      color="orange"
      name="choice"
      value="C"
      simplicity="slight"
      is-single-select/>
    <label for="c">C</label>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Heading
      :level="4"
      color="orange">
      Choice
    </Heading>
    <Paragraph v-if="picked">
      You have chosen {{ picked }}.
    </Paragraph>
    <Paragraph v-else>
      You have not chosen.
    </Paragraph>
  </GridCell>
</Grid>
```

```jsx
let picked = ['C'];

<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <ChoiceField
      v-model="picked"
      id="a"
      color="orange"
      name="choice"
      value="A"
      simplicity="slight"/>
    <label for="a">A</label>
    <br/>
    <ChoiceField
      v-model="picked"
      id="b"
      color="orange"
      name="choice"
      value="B"
      simplicity="slight"/>
    <label for="b">B</label>
    <br/>
    <ChoiceField
      v-model="picked"
      id="c"
      color="orange"
      name="choice"
      value="C"
      simplicity="slight"/>
    <label for="c">C</label>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Heading
      :level="4"
      color="orange">
      Choice
    </Heading>
    <Paragraph v-if="picked.length !== 0">
      You have chosen {{ picked.join(', ') }}.
    </Paragraph>
    <Paragraph v-else>
      You have not chosen.
    </Paragraph>
  </GridCell>
</Grid>
```

### Color set

A choice field without color is black.

```jsx
<ChoiceField/>
```

Not a good color, sure. Choice fields can be colored using any color from the
set provided by CC Vocabulary.

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
<ChoiceField
  :color="color ? color : null"
  :shade="shade ? shade : null"/>
```

On a dark or non-white background, use the inverted choice field.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <ChoiceField
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <ChoiceField
      color="turquoise"
      is-inverted/>
  </GridCell>
</Grid>
```

### Style set

A choice field can be made simple to not attract attention. Or you can max that
up and make a choice field deny attention (there are two checkboxes below and
the second one is invisible). 

```jsx
<ChoiceField
  color="green"
  simplicity="slight"/>
<ChoiceField
  color="green"
  simplicity="extreme"/>
```

### Size set
 
Choice fields come in all sizes, from small to mega.

```jsx
<ChoiceField
  color="blue"
  size="small"/>
<br/><br/>
<ChoiceField
  color="blue"/>
<br/><br/>
<ChoiceField
  color="blue"
  size="big"/>
<br/><br/>
<ChoiceField
  color="blue"
  size="large"/>
<br/><br/>
<ChoiceField
  color="blue"
  size="huge"/>
<br/><br/>
<ChoiceField
  color="blue"
  size="enormous"/>
<br/><br/>
<ChoiceField
  color="blue"
  size="gigantic"/>
<br/><br/>
<ChoiceField
  color="blue"
  size="mega"/>
```

### Selection type set

A field can be set to single select to only be able to choose one of the fields 
with the same `name`.

```jsx
<ChoiceField
  color="tomato"
  name="name"
  value="value-one"
  is-single-select/>
<ChoiceField
  color="tomato"
  name="name"
  value="value-two"
  is-single-select/>
```

### Indication set

A choice field can indicate the nature of the outcomes that should be expected
when chosen.

```jsx
<ChoiceField indication="positive"/>
<ChoiceField indication="probably"/>
<ChoiceField indication="negative"/>
```

### State set

A choice field may be disabled to prevent being being acted on.

```jsx
let picked = ['value'];
<ChoiceField
  v-model="picked"
  name="name"
  value="value"
  is-disabled/>
```

A choice field may be made read only to prevent being acted on while maintaining
readability.

```jsx
let picked = ['value'];
<ChoiceField
  v-model="picked"
  name="name"
  value="value"
  is-read-only/>
```
