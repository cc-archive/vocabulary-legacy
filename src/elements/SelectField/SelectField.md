A select field looks like this.

```jsx
<SelectField
  color="orange"
  icon="vote-yea"
  :option-list="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"
  is-basic/>
```

### Color set

A select field, unless colored, is grey.

```jsx
<SelectField
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
```

Looks quite drab, we know. So they can be colored with any color from the set 
provided by CC Vocabulary.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SelectField
      color="blue"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SelectField
      color="green"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SelectField
      color="magenta"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SelectField
      color="olive"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SelectField
      color="orange"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SelectField
      color="purple"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SelectField
      color="red"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SelectField
      color="sand"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SelectField
      color="yellow"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
</Grid>
``` 

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <SelectField
      color="blue"
      shade="light"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <SelectField
      color="blue"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <SelectField
      color="blue"
      shade="dark"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <SelectField
      color="blue"
      shade="darker"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
  </GridCell>
</Grid>
```

On a dark or non-white background, the inverted version of the component should
be used.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SelectField
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SelectField
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"
      is-inverted
      is-basic/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SelectField
      color="magenta"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SelectField
      color="magenta"
      :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"
      is-inverted
      is-basic/>
  </GridCell>
</Grid>
```

### Add-on set

A select field can contain an icon to act as a visual aid as to what the choice
is about. Note that the icon must be added to the FontAwesome library by the
application.

```jsx
<SelectField
  color="red"
  icon="vote-yea"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
```

If you'd like your own something there, you can override the add-on slot with 
something you like. This is not very flexible as there is a `1.25em` width limit
by default. To increase the limit, set the CSS custom property 
`--select-field-addons-space` on the element like so.

```css static
.vocab.select-field {
  ---select-field-addons-space: 2.5em;
}
```

See it in action.

```jsx
<SelectField
  color="green"
  style="--select-field-addons-space: 2.5em;">
  :optionList="[{value: 'by', text: 'CC BY'}, {value: 'oth', text: 'Other license'}]"
  <template #addons>
    <LicenseIconography :icon-list="['', 'by']"/>
  </template>
</SelectField>
```

### Style set

A select field can be defined to not attract attention, unless given attention
via means of a hover.

```jsx
<SelectField
  color="orange"
  icon="vote-yea"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"
  is-basic/>
```

A select field can be defined to deny attention, unless very specifically given
attention by the user.

```jsx
<SelectField
  color="blue"
  icon="vote-yea"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"
  is-ghost/>
```


### Size set

Select fields come in all sizes, from small to mega.

```jsx { "props": { "className": "contain-content" } }
<SelectField
  color="purple"
  size="small"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  size="big"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  size="large"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  size="huge"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  size="enormous"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  size="gigantic"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  size="mega"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
```

### Indication set

A select field may indicate a negative, ambiguous or positive choice. For
example, in this case deleting permanently is a destructive action whereas
restoring to safety is not. The dropdown changes color to reflect this.

```jsx
let value = 'meh';
let options = [
  {value: 'del', text: 'Delete file'}, 
  {value: 'meh', text: 'Hide file'}, 
  {value: 'res', text: 'Keep file'}
];

<SelectField
  v-model="value"
  :indication="value === 'res' ? 'positive' : value === 'del' ? 'negative' : 'probably'"
  :optionList="options"/>
```

### State set

A select field may be disabled to prevent input altogether.

```jsx
<SelectField
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"
  is-disabled/>
```

A select field may be made read-only to prevent input while maintaining 
readability as an output-only control.

```jsx
<SelectField
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"
  is-read-only/>
```

### Attributes

All attributes that you could pass to an `select` tag can be passed to the 
`SelectField` component.

So a select field may have a `name` and a `value`.

```jsx
<SelectField
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"
  name="Name"
  value="b"/>
```
