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

```jsx
<Heading 
  :level="1"
  color="red">
  Chapter 1
</Heading>
<Heading 
  :level="2"
  color="blue">
  Section 1.1
</Heading>
<Paragraph>
  Section 1.1 has some content!
</Paragraph>
<Heading 
  :level="2"
  color="blue">
  Section 1.2
</Heading>
<Paragraph>
  Section 1.2 has more content than 1.1! This is so meta!
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

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Heading color="blue">Blue heading</Heading>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Heading color="green">Green heading</Heading>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Heading color="magenta">Magenta heading</Heading>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Heading color="olive">Olive heading</Heading>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Heading color="orange">Orange heading</Heading>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Heading color="purple">Purple heading</Heading>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Heading color="red">Red heading</Heading>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Heading color="sand">Sand heading</Heading>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Heading color="yellow">Yellow heading</Heading>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Heading 
      color="blue"
      shade="light">
      Light blue
    </Heading>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Heading color="blue">
      Blue
    </Heading>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Heading 
      color="blue"
      shade="dark">
      Dark blue
    </Heading>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Heading 
      color="blue"
      shade="darker">
      Darker blue
    </Heading>
  </GridCell>
</Grid>
```
### Level set

Standard headers look like this. Each level corresponds to its HTML tag, thus
ranging from `h1` to `h6`. If not specified, the lowest level, the sixth, is
taken to be the default which may or may not be what you wanted.

```jsx
<Heading :level="1" color="purple">Heading 1</Heading>
<Heading :level="2" color="purple">Heading 2</Heading>
<Heading :level="3" color="purple">Heading 3</Heading>
<Heading :level="4" color="purple">Heading 4</Heading>
<Heading :level="5" color="purple">Heading 5</Heading>
<Heading :level="6" color="purple">Heading 6</Heading>
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
