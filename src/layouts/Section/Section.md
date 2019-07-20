## Examples

A section looks like this.

```jsx
<Section color="red" is-raised>
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
<Section color="blue">Blue color</Section>
<br/>
<Section color="green">Green color</Section>
<br/>
<Section color="orange">Orange color</Section>
<br/>
<Section color="olive">Olive color</Section>
<br/>
<Section color="orange">Orange color</Section>
<br/>
<Section color="purple">Purple color</Section>
<br/>
<Section color="red">Red color</Section>
<br/>
<Section color="sand">Sand color</Section>
<br/>
<Section color="yellow">Yellow color</Section>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Section color="blue" shade="light">Light blue color</Section>
<br/>
<Section color="blue">Default blue color</Section>
<br/>
<Section color="blue" shade="dark">Dark blue color</Section>
<br/>
<Section color="blue" shade="darker">Darker blue color</Section>
```

You can invert the section to create non-white backgrounds for content.

```jsx { "props": { "className": "dark-background" } }
<Section is-inverted>
  <Paragraph is-inverted>Such readable. Much wow.</Paragraph> 
</Section>
<br/>
<Section color="magenta" shade="darker" is-inverted>
  <Paragraph is-inverted>Such readable. Much wow.</Paragraph> 
</Section>
```

### Style set

A section can be made basic to hide the borders and give it a more toned-down
look and feel.

```jsx
<Section is-basic>
  <Heading :level="1" color="green">Basic</Heading>
  <Paragraph>
    This section has no borders and relies entirely on spacing for separation.
  </Paragraph>
</Section>
```

A section can be given rounded borders.

```jsx
<Section color="purple" is-rounded>
  <Heading :level="1" color="purple">Rounded</Heading>
  <Paragraph>
    The vertices of the section have been rounded for a smoother feel.
  </Paragraph>
</Section>
```

A section can be raised to convey some height using a shadow.

```jsx
<Section color="magenta" is-raised>
  <Heading :level="1" color="magenta">Raised</Heading>
  <Paragraph>
    This section is every-so-slightly raised above the rest of the page.
  </Paragraph>
</Section>
```

A section can be compact so that it only takes the required amount of space.

```jsx
<Section color="orange" is-compact>
  <Heading :level="1" color="orange">Compact</Heading>
  <Paragraph>
    This section only takes the required amount of width.
  </Paragraph>
</Section>
```
