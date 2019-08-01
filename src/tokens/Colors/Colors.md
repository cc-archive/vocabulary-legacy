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

```jsx
<Colors category="hue"/>
```

### Tone set

Apart from all the vibrant hues, Vocabular provides a diverse set of tones to 
choose from, covering the grey spectrum from white to black.

```jsx
<Colors category="tone"/>
```

### Context set

Vue also covers the contextual colors that attach a connotation with an action
such as red for a dangerous action with negative consequences and green for a
safe one with positive consequences.

```jsx
<Colors category="context"/>
```

### Overlay set

Vue also covers the overlays which are translucent colors (alpha not at 100%)
that serve the purpose of darkening down or lightening up other colors. They
are usually laid on the background color using fake gradients as background 
images.

The following demonstrates different overlays laid out on
Oxford Blue
<span style="color: rgb(0, 33, 71);">
(<svg
  class="svg-inline--fa fa-square fa-w-14 fa-2x" 
  data-icon="square" 
  data-prefix="fas" 
  viewBox="0 0 448 512"
  style="vertical-align: middle;">
  <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"/>
</svg>)
</span>. Click the swatch to toggle between the overlay off and on and so on. 

```jsx
<Colors category="overlay"/>
```
