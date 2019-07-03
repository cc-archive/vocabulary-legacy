## Examples

Headings are supposed to preside over content.

```jsx { "props": { "className": "no-i18n" } }
<Heading :level="1" color="orange">
  I am a title...
</Heading>
<Paragraph>
  And I am a paragraph...
</Paragraph>
<Paragraph>
  This is a <em>haiku</em>!
</Paragraph>
```

```jsx { "props": { "className": "no-i18n" } }
<Heading :level="1" color="red">
  Chapter 1
</Heading>
<Heading :level="2" color="blue">
  Section 1.1
</Heading>
<Paragraph>
  Section 1.1 has some content!
</Paragraph>
<Heading :level="2" color="blue">
  Section 1.2
</Heading>
<Paragraph>
  Section 1.2 has more content than 1.1! This is so meta!
</Paragraph>
```

### Size set

Stardard headers look like this. Each level corresponds to its HTML tag, thus
ranging from `h1` to `h6`.

```jsx { "props": { "className": "no-i18n" } }
<Heading :level="1">Heading 1</Heading>
<Heading :level="2">Heading 2</Heading>
<Heading :level="3">Heading 3</Heading>
<Heading :level="4">Heading 4</Heading>
<Heading :level="5">Heading 5</Heading>
<Heading :level="6">Heading 6</Heading>
```

### Color set

Needless to say, headings can be colored with any color from the set provided by
CC Vocabulary.

<!-- TODO Place them in a grid -->
```jsx { "props": { "className": "no-i18n" } }
<Heading :level="4" color="blue">
  Blue heading
</Heading>
<Heading :level="4" color="green">
  Green heading
</Heading>
<Heading :level="4" color="magenta">
  Magenta heading
</Heading>
<Heading :level="4" color="olive">
  Olive heading
</Heading>
<Heading :level="4" color="orange">
  Orange heading
</Heading>
<Heading :level="4" color="purple">
  Purple heading
</Heading>
<Heading :level="4" color="red">
  Red heading
</Heading>
<Heading :level="4" color="sand">
  Sand heading
</Heading>
<Heading :level="4" color="yellow">
  Yellow heading
</Heading>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx { "props": { "className": "no-i18n" } }
<Heading :level="4" color="blue" shade="dark">
  Blue heading
</Heading>
<Heading :level="4" color="green" shade="dark">
  Green heading
</Heading>
<Heading :level="4" color="magenta" shade="dark">
  Magenta heading
</Heading>
<Heading :level="4" color="olive" shade="dark">
  Olive heading
</Heading>
<Heading :level="4" color="orange" shade="dark">
  Orange heading
</Heading>
<Heading :level="4" color="purple" shade="dark">
  Purple heading
</Heading>
<Heading :level="4" color="red" shade="dark">
  Red heading
</Heading>
<Heading :level="4" color="sand" shade="dark">
  Sand heading
</Heading>
<Heading :level="4" color="yellow" shade="dark">
  Yellow heading
</Heading>
```

If the header is set against a dark or non-white option, the text color can be 
inverted for readability or aesthetic reasons.

```jsx { "props": { "className": "dark-background no-i18n" } }
<Heading is-inverted :level="1">Heading 1</Heading>
<Heading is-inverted :level="2">Heading 2</Heading>
<Heading is-inverted :level="3">Heading 3</Heading>
<Heading is-inverted :level="4">Heading 4</Heading>
<Heading is-inverted :level="5">Heading 5</Heading>
<Heading is-inverted :level="6">Heading 6</Heading>
```
