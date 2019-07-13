## Examples

```jsx
<Heading
  :level="1"
  color="green"
  shade="dark">
  Hello World!
</Heading>
<Paragraph>
  The heading above is colored a <strong>dark</strong> shade of 
  <strong>green</strong>.
</Paragraph> 
```

### Color set

Vocabulary has a rich set of colors, covering the both primary and secondary 
colors on the spectrum along with their darker and lighter hues.

```jsx { "props": { "className": "i18n-enabled" } }
<Colors group="meh"/>
```

### Tone set

Apart from all the vibrant hues, Vocabular provides a diverse set of tones to 
choose from, covering the grey spectrum from white to black.

```jsx { "props": { "className": "i18n-enabled" } }
<Colors group="tone"/>
```

### Context set

Vue also covers the contextual colors that attach a connotation with an action
such as red for a dangerous action with negative consequences and green for a
safe one with positive consequences.

```jsx { "props": { "className": "i18n-enabled" } }
<Colors group="context"/>
```
