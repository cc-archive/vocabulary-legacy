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
      color="red">
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
      color="yellow">
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

```jsx
<Paragraph color="blue">
  This is a paragraph colored blue.
</Paragraph>
<Paragraph color="green">
  This is a paragraph colored green.
</Paragraph>
<Paragraph color="magenta">
  This is a paragraph colored magenta.
</Paragraph>
<Paragraph color="olive">
  This is a paragraph colored olive.
</Paragraph>
<Paragraph color="orange">
  This is a paragraph colored orange.
</Paragraph>
<Paragraph color="purple">
  This is a paragraph colored purple.
</Paragraph>
<Paragraph color="red">
  This is a paragraph colored red.
</Paragraph>
<Paragraph color="sand">
  This is a paragraph colored sand.
</Paragraph>
<Paragraph color="yellow">
  This is a paragraph colored yellow.
</Paragraph>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Paragraph
  color="blue"
  shade="light">
  This is a paragraph colored the light shade of blue.
</Paragraph>
<Paragraph
  color="blue">
  This is a paragraph colored blue.
</Paragraph>
<Paragraph
  color="blue"
  shade="dark">
  This is a paragraph colored the dark shade of blue.
</Paragraph>
<Paragraph
  color="blue"
  shade="darker">
  This is a paragraph colored the darker shade of blue.
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
