Select fields look like this. Yes, including the locale switcher.

```jsx { "props": { "className": "i18n-enabled" } }
let optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
];

<SelectField
  color="orange"
  icon="vote-yea"
  :option-list="optionList"
  simplicity="slight"/>
```

### Color set

A select field, unless colored, is grey.

```jsx
let optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
];

<SelectField
  :option-list="optionList"/>
```

Looks quite drab, we know. So they can be colored with any color from the set 
provided by CC Vocabulary.

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

let optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
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

<SelectField
  :color="color ? color : null"
  :shade="shade ? shade : null"
  :option-list="optionList"/>
```

On a dark or non-white background, the inverted version of the component should
be used.

```jsx { "props": { "className": "dark-background" } }
let optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
];

<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SelectField
      :option-list="optionList"
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SelectField
      :option-list="optionList"
      simplicity="slight"
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SelectField
      color="turquoise"
      :option-list="optionList"
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SelectField
      color="turquoise"
      :option-list="optionList"
      simplicity="slight"
      is-inverted/>
  </GridCell>
</Grid>
```

### Add-on set

A select field can contain an icon to act as a visual aid as to what the choice
is about. Note that the icon must be added to the FontAwesome library by the
application.

```jsx
let optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
];

<SelectField
  color="tomato"
  icon="vote-yea"
  :option-list="optionList"/>
```

If you'd like your own something there, you can override the add-on slot with 
something you like. This is not very flexible as there is a `1.25em` width limit
by default. To increase the limit, set the CSS custom property 
`--select-field-addons-space` on the element like so.

```css static
.vocab.select-field {
  ---select-field-addons-space: 2.5em;
}
```

See it in action.

```jsx
let optionList = [
  {
    value: 'by',
    text: 'CC BY'
  },
  {
    value: 'oth',
    text: 'Any other license'
  }
];

<SelectField
  color="tomato"
  style="--select-field-addons-space: 2.5em;"
  :option-list="optionList">
  <template #addons>
    <LicenseIconography :icon-list="['', 'by']"/>
  </template>
</SelectField>
```

### Style set

A select field can be defined to not attract attention, unless given attention
via means of a hover. Or it can be defined to deny attention, unless very
specifically given attention by the user.

```jsx
let optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
];

<SelectField
  color="green"
  icon="vote-yea"
  :option-list="optionList"
  simplicity="slight"/>
<br/><br/>
<SelectField
  color="green"
  icon="vote-yea"
  :option-list="optionList"
  simplicity="extreme"/>
```

A select field may be rounded either slightly, to fit in better with curvy 
layouts or completely, to fit in better with very curvy layouts.

```jsx
let optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
];

<SelectField
  color="green"
  icon="vote-yea"
  :option-list="optionList"
  roundness="slight"/>
<br/><br/>
<SelectField
  color="green"
  icon="vote-yea"
  :option-list="optionList"
  roundness="complete"/>
```


### Size set

Select fields come in all sizes, from small to mega.

```jsx
let optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
];

<SelectField
  color="blue"
  size="small"
  :option-list="optionList"/>
<br/><br/>
<SelectField
  color="blue"
  :option-list="optionList"/>
<br/><br/>
<SelectField
  color="blue"
  size="big"
  :option-list="optionList"/>
<br/><br/>
<SelectField
  color="blue"
  size="large"
  :option-list="optionList"/>
<br/><br/>
<SelectField
  color="blue"
  size="huge"
  :option-list="optionList"/>
<br/><br/>
<SelectField
  color="blue"
  size="enormous"
  :option-list="optionList"/>
<br/><br/>
<SelectField
  color="blue"
  size="gigantic"
  :option-list="optionList"/>
<br/><br/>
<SelectField
  color="blue"
  size="mega"
  :option-list="optionList"/>
```

### Indication set

A select field may indicate a negative, ambiguous or positive choice. For
example, in this case deleting permanently is a destructive action whereas
restoring to safety is not. The dropdown changes color to reflect this.

```jsx
let value = 'meh';
let options = [
  {value: 'del', text: 'Delete file'}, 
  {value: 'meh', text: 'Hide file'}, 
  {value: 'res', text: 'Keep file'}
];

<SelectField
  v-model="value"
  :indication="value === 'res' ? 'positive' : value === 'del' ? 'negative' : 'probably'"
  :option-list="options"/>
```

### State set

A select field may be disabled to prevent input altogether.

```jsx
let optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
];

<SelectField
  :option-list="optionList"
  is-disabled/>
```

A select field may be made read-only to prevent input while maintaining 
readability as an output-only control.

```jsx
let optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
];

<SelectField
  :option-list="optionList"
  is-read-only/>
```

### Attributes

All attributes that you could pass to an `select` tag can be passed to the 
`SelectField` component.

So a select field may have a `name` and a `value`.

```jsx
let optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
];

<SelectField
  :option-list="optionList"
  name="Name"
  value="b"/>
```
