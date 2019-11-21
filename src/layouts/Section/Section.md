```jsx
<Section
  color="orange"
  roundness="slight"
  is-raised>
  <Heading :level="1" color="orange">Heading</Heading>
  <Paragraph color="blue" shade="dark">
    This is a paragraph of content that pertains to the heading above. This 
    makes enough justification for both of them to be grouped into a section. A
    section will keep this chunk separated from other content on the page.
  </Paragraph>
</Section>
```

### Color set

Without a color specified, the segment has no accent.

```jsx
<Section>
  No color
</Section>
```

Sections can be colored using any color from the set provided by CC Vocabulary.
Variety is, after all, the spice of life.

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
<Section
  :color="color ? color : null"
  :shade="shade ? shade : null">
  Blue color
</Section>
```

You can invert the section to create non-white backgrounds for content.

```jsx { "props": { "className": "dark-background" } }
<Section is-inverted>
  <Paragraph is-inverted>Such readable. Much wow.</Paragraph> 
</Section>
<br/>
<Section color="turquoise" is-inverted>
  <Paragraph is-inverted>Such readable. Much wow.</Paragraph> 
</Section>
```

### Style set

A section can change the side on which the color appears.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      color="green"
      color-side="top">
      <Heading :level="4" color="green">Top accent</Heading>
      <Paragraph>
        This section has accent on the top side which is the default.
      </Paragraph>
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      color="green"
      color-side="bottom">
      <Heading :level="4" color="green">Bottom accent</Heading>
      <Paragraph>
        This section has accent on the bottom side as opposed to the top.
      </Paragraph>
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      color="green"
      color-side="left">
      <Heading :level="4" color="green">Left accent</Heading>
      <Paragraph>
        This section has accent on the left side as opposed to the top.
      </Paragraph>
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      color="green"
      color-side="right">
      <Heading :level="4" color="green">Right accent</Heading>
      <Paragraph>
        This section has accent on the right side as opposed to the top.
      </Paragraph>
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 12, 12, 12, 12]">
    <Section
      color="green"
      color-side="none">
      <Heading :level="4" color="green">No accent</Heading>
      <Paragraph>
        This section has no accent on any side.
      </Paragraph>
    </Section>
  </GridCell>
</Grid>
```

A section can be simplified to hide the borders and give it a more toned-down
look and feel. A section can also be made extremely simple to hide the borders
and diminish the accents tone it down to the limit.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      color="green"
      simplicity="slight">
      <Heading
        color="green"
        :level="4">
        Slightly basic
      </Heading>
      <Paragraph>
        This section has just an accented border.
      </Paragraph>
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      simplicity="extreme">
      <Heading
        color="green"
        :level="4">
        Extremely basic
      </Heading>
      <Paragraph>
        This section has no borders.
      </Paragraph>
    </Section>
  </GridCell>
</Grid>
```

A section can be given rounded borders. Or going completely against the CC
aesthetic, a section can be made into a perfect pill shape.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      color="green"
      color-side="none"
      roundness="slight">
      <Paragraph>
        The vertices of the section have been rounded.
      </Paragraph>
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      color="green"
      color-side="none"
      roundness="complete">
      <Paragraph>
        The vertices of the section have been eliminated.
      </Paragraph>
    </Section>
  </GridCell>
</Grid>
```

A section can be raised to convey some height using a shadow.

```jsx
<Section color="green" is-raised>
  <Heading
    color="green"
    :level="4">
    Raised
  </Heading>
  <Paragraph>
    This section is every-so-slightly raised above the rest of the page.
  </Paragraph>
</Section>
```

A section can be compact so that it only takes the required amount of space.

```jsx
<Section color="green" is-compact>
  <Heading
    color="green"
    :level="4">
    Compact
  </Heading>
  <Paragraph>
    This section only takes the required amount of width.
  </Paragraph>
</Section>
```

A section can be clingy so that it has _(close to)_ zero internal padding.

```jsx
<Section color="green" is-clingy>
  <Heading
    color="green"
    :level="4">
    Clingy
  </Heading>
  <Paragraph>
    This section doesn't pad its contents.
  </Paragraph>
</Section>
```

Styles can be combined.

### Indication set

A section may indicate the positive, unclear or negative nature of its content.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Section
      indication="positive">
      <Heading 
        :level="4"
        indication="positive">
        Oh yes!
      </Heading>
      The operation completed successfully!
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Section
      indication="probably">
      <Heading 
        :level="4"
        indication="probably">
        Oh!
      </Heading>
      The operation status is unknown!
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Section
      indication="negative">
      <Heading 
        :level="4"
        indication="negative">
        Oh no!
      </Heading>
      The operation failed to complete.
    </Section>
  </GridCell>
</Grid>
```
