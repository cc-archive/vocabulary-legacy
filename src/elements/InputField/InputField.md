An input field looks like this.

```jsx
<InputField
  type="text"
  :icon-set="['keyboard', '']"
  placeholder="How is CC Vocabulary?"
  value="It is awesome!"
  color="orange"
  is-basic/>
```

### Color set

An input field without color is grey.

```jsx
<InputField
  type="text"
  :icon-set="['keyboard', '']"
  placeholder="Answer..."/>
```

But in classic fashion, input fields can be colored with any color from the set 
provided by CC Vocabulary. Grey is nobody's favourite.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="blue"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="green"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="magenta"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="olive"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="orange"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="purple"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="red"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="sand"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="yellow"/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="blue"
      shade="light"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="blue"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="blue"
      shade="dark"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      color="blue"
      shade="darker"/>
  </GridCell>
</Grid>
```

For use on dark or non-white backgrounds, we provided an inverted variant.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      is-inverted
      is-basic/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      color="magenta"
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      color="magenta"
      type="text"
      :icon-set="['keyboard', '']"
      placeholder="Answer..."
      is-inverted
      is-basic/>
  </GridCell>
</Grid>
``` 

### Add-on set

A field can also contain two icons, one on the left and right side each. Note 
that the icon must be added to the FontAwesome library by the application.

```jsx
<InputField
  color="red"
  type="text"
  :icon-set="['keyboard', '']"
  placeholder="Left"/>
<br/><br/>
<InputField
  color="red"
  type="text"
  :icon-set="['', 'keyboard']"
  placeholder="Right"/>
<br/><br/>
<InputField
  color="red"
  type="text"
  :icon-set="['keyboard', 'keyboard']"
  placeholder="Both"/>
```

If you'd like your own something there, you can override the left and the right
add-on slots with something you like.

```jsx
<InputField
  color="green"
  type="text"
  placeholder="License iconography">
  <template #leftAddons>
    <LicenseIconography :icon-list="['']"/>
  </template>
  <template #rightAddons>
    <LicenseIconography :icon-list="['by']"/>
  </template>
</InputField>
<br/><br/>
<InputField
  color="green"
  type="text"
  placeholder="Not even icons">
  <template #leftAddons>
    <div style="width: 1.25em; text-align: center;">
      <strong>:-)</strong>
    </div>
  </template>
  <template #rightAddons>
    <div style="width: 1.25em; text-align: center;">
      <strong>:-(</strong>
    </div>
  </template>
</InputField>
```

### Style set

An input field can be defined to not attract attention, unless given attention
via means of a focus.

```jsx
<InputField
  type="text"
  :icon-set="['keyboard', '']"
  color="orange"
  placeholder="Answer"
  is-basic/>
```

An input field can also be defined to deny attention, unless it is absolutely
what the user wanted.

```jsx
<InputField
  type="text"
  :icon-set="['keyboard', '']"
  color="orange"
  placeholder="Answer"
  is-ghost/>
```

Styles can be combined.

### Size set

Input fields come in all sizes, from small to mega.

```jsx { "props": { "className": "contain-content" } }
<InputField
  color="purple"
  :icon-set="['keyboard', '']"
  size="small"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<InputField
  color="purple"
  :icon-set="['keyboard', '']"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<InputField
  color="purple"
  :icon-set="['keyboard', '']"
  size="big"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<InputField
  color="purple"
  :icon-set="['keyboard', '']"
  size="large"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<InputField
  color="purple"
  :icon-set="['keyboard', '']"
  size="huge"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<InputField
  color="purple"
  :icon-set="['keyboard', '']"
  size="enormous"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<InputField
  color="purple"
  :icon-set="['keyboard', '']"
  size="gigantic"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<InputField
  color="purple"
  :icon-set="['keyboard', '']"
  size="mega"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
```

### Indication set

A field may indicate erroneous, correct or ambiguous input. For example, in this
case _'Wrong answer'_ will be highlighted negatively, _'Right answer'_ which
will be highlighted positively and any other other input will be indicated
probably.

```jsx
let value = 'Any answer';

<InputField
  type="text"
  :icon-set="['keyboard', '']"
  placeholder="Answer..."
  :indication="value === 'Right answer' ? 'positive' : value === 'Wrong answer' ? 'negative' : 'probably'"
  v-model="value"/>
```

### State set

A field may be disabled to prevent input altogether.

```jsx
<InputField
  type="text"
  :icon-set="['keyboard', '']"
  placeholder="Answer..."
  is-disabled/>
```

A field may be made read-only to prevent input while preserving readability as
an output component.

```jsx
<InputField
  type="text"
  :icon-set="['keyboard', '']"
  placeholder="Answer..."
  value="Read me"
  is-read-only/>
```

### Attributes

All attributes that you could pass to an `input` tag can be passed to the 
`InputField` component. You've already seen the `placeholder` attribute in use 
above.

An initial `value` can be provided for the field.

```jsx
<InputField
  type="text"
  value="Value"
  placeholder="Placeholder"
  color="olive"/>
```

The `type` attribute works as you would expect.

```jsx
<InputField
  type="email"
  placeholder="Email address..."
  color="blue">
</InputField><br/><br/>
<InputField
  type="url"
  placeholder="Website URL..."
  color="purple">
</InputField><br/><br/>
<InputField
  type="number"
  placeholder="Age in years..."
  min="0"
  max="122"
  color="green">
</InputField><br/><br/>
<InputField
  type="date"
  color="magenta">
</InputField><br/><br/>
<InputField
  type="time"
  color="orange">
</InputField><br/><br/>
<InputField
  type="file"
  color="yellow">
</InputField>
```
