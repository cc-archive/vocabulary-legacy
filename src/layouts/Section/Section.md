```jsx
<Section
  color="red"
  roundness="rounded"
  is-raised>
  <Heading :level="1" color="red">Heading</Heading>
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

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Section color="blue">Blue color</Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Section color="green">Green color</Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Section color="orange">Orange color</Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Section color="olive">Olive color</Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Section color="orange">Orange color</Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Section color="purple">Purple color</Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Section color="red">Red color</Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Section color="sand">Sand color</Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Section color="yellow">Yellow color</Section>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Section
      color="blue"
      shade="light">
      Light blue color
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Section color="blue">
      Default blue color
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Section
      color="blue"
      shade="dark">
      Dark blue color
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Section
      color="blue"
      shade="darker">
      Darker blue color
    </Section>
  </GridCell>
</Grid>
```

You can invert the section to create non-white backgrounds for content.

```jsx { "props": { "className": "dark-background" } }
<Section is-inverted>
  <Paragraph is-inverted>Such readable. Much wow.</Paragraph> 
</Section>
<br/>
<Section color="magenta" is-inverted>
  <Paragraph is-inverted>Such readable. Much wow.</Paragraph> 
</Section>
```

### Style set

A section can change the side on which the color appears.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      color="blue"
      color-side="top">
      <Heading :level="4" color="blue">Top accent</Heading>
      <Paragraph>
        This section has accent on the top side which is the default.
      </Paragraph>
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      color="blue"
      color-side="bottom">
      <Heading :level="4" color="blue">Bottom accent</Heading>
      <Paragraph>
        This section has accent on the bottom side as opposed to the top.
      </Paragraph>
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      color="blue"
      color-side="left">
      <Heading :level="4" color="blue">Left accent</Heading>
      <Paragraph>
        This section has accent on the left side as opposed to the top.
      </Paragraph>
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      color="blue"
      color-side="right">
      <Heading :level="4" color="blue">Right accent</Heading>
      <Paragraph>
        This section has accent on the right side as opposed to the top.
      </Paragraph>
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 12, 12, 12, 12]">
    <Section
      color="blue"
      color-side="none">
      <Heading :level="4" color="blue">No accent</Heading>
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
      color="purple"
      color-side="none"
      roundness="slight">
      <Paragraph>
        The vertices of the section have been rounded.
      </Paragraph>
    </Section>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Section
      color="purple"
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
<Section color="magenta" is-raised>
  <Heading
    color="magenta"
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
<Section color="orange" is-compact>
  <Heading
    color="orange"
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
<Section color="sand" is-clingy>
  <Heading
    color="sand"
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
