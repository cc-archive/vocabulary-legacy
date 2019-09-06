Here's a choice. Radio buttons or checkboxes. To each purpose, it's own 
component!

```jsx
let picked = 'C';

<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <ChoiceField
      v-model="picked"
      id="a"
      color="blue"
      name="choice"
      value="A"
      simplicity="slight"
      is-single-select/>
    <label for="a">A</label>
    <br/>
    <ChoiceField
      v-model="picked"
      id="b"
      color="blue"
      name="choice"
      value="B"
      simplicity="slight"
      is-single-select/>
    <label for="b">B</label>
    <br/>
    <ChoiceField
      v-model="picked"
      id="c"
      color="blue"
      name="choice"
      value="C"
      simplicity="slight"
      is-single-select/>
    <label for="c">C</label>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Heading
      :level="4"
      color="blue">
      Choice
    </Heading>
    <Paragraph v-if="picked">
      You have chosen {{ picked }}.
    </Paragraph>
    <Paragraph v-else>
      You have not chosen.
    </Paragraph>
  </GridCell>
</Grid>
```

```jsx
let picked = ['C'];

<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <ChoiceField
      v-model="picked"
      id="a"
      color="purple"
      name="choice"
      value="A"
      simplicity="slight"/>
    <label for="a">A</label>
    <br/>
    <ChoiceField
      v-model="picked"
      id="b"
      color="purple"
      name="choice"
      value="B"
      simplicity="slight"/>
    <label for="b">B</label>
    <br/>
    <ChoiceField
      v-model="picked"
      id="c"
      color="purple"
      name="choice"
      value="C"
      simplicity="slight"/>
    <label for="c">C</label>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Heading
      :level="4"
      color="purple">
      Choice
    </Heading>
    <Paragraph v-if="picked.length !== 0">
      You have chosen {{ picked.join(', ') }}.
    </Paragraph>
    <Paragraph v-else>
      You have not chosen.
    </Paragraph>
  </GridCell>
</Grid>
```

### Color set

A choice field without color is black.

```jsx
<ChoiceField/>
```

Not a good color, sure. Choice fields can be colored using any color from the
set provided by CC Vocabulary.

```jsx
<Grid>
  <GridCell :span-set="[6, 4, 4, 4, 4]">
    <ChoiceField color="blue"/>
  </GridCell>
  <GridCell :span-set="[6, 4, 4, 4, 4]">
    <ChoiceField color="green"/>
  </GridCell>
  <GridCell :span-set="[6, 4, 4, 4, 4]">
    <ChoiceField color="magenta"/>
  </GridCell>
  <GridCell :span-set="[6, 4, 4, 4, 4]">
    <ChoiceField color="olive"/>
  </GridCell>
  <GridCell :span-set="[6, 4, 4, 4, 4]">
    <ChoiceField color="orange"/>
  </GridCell>
  <GridCell :span-set="[6, 4, 4, 4, 4]">
    <ChoiceField color="purple"/>
  </GridCell>
  <GridCell :span-set="[6, 4, 4, 4, 4]">
    <ChoiceField color="red"/>
  </GridCell>
  <GridCell :span-set="[6, 4, 4, 4, 4]">
    <ChoiceField color="sand"/>
  </GridCell>
  <GridCell :span-set="[6, 4, 4, 4, 4]">
    <ChoiceField color="yellow"/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[6, 6, 3, 3, 3]">
    <ChoiceField
      color="blue"
      shade="light"/>
  </GridCell>
  <GridCell :span-set="[6, 6, 3, 3, 3]">
    <ChoiceField color="blue"/>
  </GridCell>
  <GridCell :span-set="[6, 6, 3, 3, 3]">
    <ChoiceField
      color="blue"
      shade="dark"/>
  </GridCell>
  <GridCell :span-set="[6, 6, 3, 3, 3]">
    <ChoiceField
      color="blue"
      shade="darker"/>
  </GridCell>
</Grid>
```

On a dark or non-white background, use the inverted choice field.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <ChoiceField
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <ChoiceField
      color="magenta"
      is-inverted/>
  </GridCell>
</Grid>
```

### Style set

A choice field can be made simple to not attract attention. Or you can max that
up and make a choice field deny attention.

```jsx
<ChoiceField
  color="blue"
  simplicity="slight"/>
<ChoiceField
  color="blue"
  simplicity="extreme"/>
```

### Size set
 
Choice fields come in all sizes, from small to mega.

```jsx
<ChoiceField
  color="purple"
  size="small"/>
<br/><br/>
<ChoiceField color="purple"/>
<br/><br/>
<ChoiceField
  color="purple"
  size="big"/>
<br/><br/>
<ChoiceField
  color="purple"
  size="large"/>
<br/><br/>
<ChoiceField
  color="purple"
  size="huge"/>
<br/><br/>
<ChoiceField
  color="purple"
  size="enormous"/>
<br/><br/>
<ChoiceField
  color="purple"
  size="gigantic"/>
<br/><br/>
<ChoiceField
  color="purple"
  size="mega"/>
```

### Selection type set

A field can be set to single select to only be able to choose one of the fields 
with the same `name`.

```jsx
<ChoiceField
  color="orange"
  name="name"
  value="value-one"
  is-single-select/>
<ChoiceField
  color="orange"
  name="name"
  value="value-two"
  is-single-select/>
```

### Indication set

A choice field can indicate the nature of the outcomes that should be expected
when chosen.

```jsx
<ChoiceField indication="positive"/>
<ChoiceField indication="probably"/>
<ChoiceField indication="negative"/>
```

### State set

A choice field may be disabled to prevent being being acted on.

```jsx
let picked = ['value'];
<ChoiceField
  v-model="picked"
  name="name"
  value="value"
  is-disabled/>
```

A choice field may be made read only to prevent being acted on while maintaining
readability.

```jsx
let picked = ['value'];
<ChoiceField
  v-model="picked"
  name="name"
  value="value"
  is-read-only/>
```
