Here is a paragraph for your reading pleasure.

```jsx
<Paragraph density="sparse">
  "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim 
  ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia
  consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque
  porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur 
  adipisci[ng] velit, sed quia non numquam [do] eius modi tempora 
  inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
  ad minima veniam, quis nostrum exercitationem ullam corporis suscipit 
  laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum 
  iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae 
  consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla 
  pariatur?"
</Paragraph>
```

### Density set

The line height of text in the paragraph is customisable and can be increased or
decreased as per the needs of the situation.

```jsx
<Grid>
  <GridCell :spanSet="[12, 6, 4, 4, 4]">
    <Heading
      :level="3"
      color="tomato">
      Dense
    </Heading>
    <Paragraph density="dense">
      Five syllables here.<br/>
      Seven more syllables here.<br/>
      Are you happy now?
    </Paragraph>
  </GridCell>
  <GridCell :spanSet="[12, 6, 4, 4, 4]">
    <Heading
      :level="3"
      color="gold">
      Default
    </Heading>
    <Paragraph>
      Maybe my cat's name...<br/>
      is Schrödinger. Or is it?<br/>
      We will never know.
    </Paragraph>
  </GridCell>
  <GridCell :spanSet="[12, 6, 4, 4, 4]">
    <Heading
      :level="3"
      color="green">
      Sparse
    </Heading>
    <Paragraph density="sparse">
      Fat man sees small door.<br/>
      He knows he cannot fit through.<br/>
      Tears flow free now.
    </Paragraph>
  </GridCell>
</Grid>
```

### Color set

A paragraph without a specified color, inherits it from the parent.

```jsx
<Paragraph>
  This is a paragraph that inherits color.
</Paragraph>
<div style="color: rgb(0, 33, 71);">
  <Paragraph>
    This is a paragraph that inherits color.
  </Paragraph>
</div>
```

Paragraphs can be colored for some reason.

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
<Paragraph
  :color="color ? color : null"
  :shade="shade ? shade : null">
  This is a paragraph.
</Paragraph>
```

### Indication set

A paragraph can indicate the connotations attached to the content.

```jsx
<Paragraph indication="negative">
  Oof! That's sad.
</Paragraph>
<Paragraph indication="probably">
  Bruh! That's meh.
</Paragraph>
<Paragraph indication="positive">
  Lit! That's epic.
</Paragraph>
```
