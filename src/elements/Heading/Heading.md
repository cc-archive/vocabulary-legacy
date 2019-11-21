Headings are supposed to preside over content.

```jsx
<Heading
  :level="1"
  color="orange">
  I am a title...
</Heading>
<Paragraph>
  And I am a paragraph...<br/>
  This is a <em>haiku</em>!
</Paragraph>
```

### Color set

Unless a color is specified, headings inherit color from the parent. This is
usually, but not necessarily, black.

```jsx
<Heading>Inherited color heading</Heading>
<div style="color: rgb(0, 33, 71);">
  <Heading>Inherited color heading</Heading>
</div>
```

Needless to say, headings can be colored with any color from the set provided by
CC Vocabulary.

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
<Heading
  :color="color ? color : null"
  :shade="shade ? shade : null">
  Heading
</Heading>
```

### Level set

Standard headers look like this. Each level corresponds to its HTML tag, thus
ranging from `h1` to `h6`. If not specified, the lowest level, the sixth, is
taken to be the default which may or may not be what you wanted.

```jsx
<Heading :level="1" color="blue">Heading 1</Heading>
<Heading :level="2" color="blue">Heading 2</Heading>
<Heading :level="3" color="blue">Heading 3</Heading>
<Heading :level="4" color="blue">Heading 4</Heading>
<Heading :level="5" color="blue">Heading 5</Heading>
<Heading :level="6" color="blue">Heading 6</Heading>
```

### Indication set

Headings can indicate the contextual nature of the content they preside over.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Heading 
      :level="1"
      indication="positive">
      Oh yes!
    </Heading>
    <Paragraph indication="positive">
      That is really terrific news!
    </Paragraph>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Heading 
      :level="1"
      indication="probably">
      Oh.
    </Heading>
    <Paragraph indication="probably">
      That is news.
    </Paragraph>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Heading 
      :level="1"
      indication="negative">
      Oh no!
    </Heading>
    <Paragraph indication="negative">
      That is really terrible news!
    </Paragraph>
  </GridCell>
</Grid>
```
