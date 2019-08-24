An input field looks like this.

```jsx
let value="It is awesome";

<InputField
  v-model="value"
  color="orange"
  :icon-set="['keyboard', '']"
  type="text"
  placeholder="How is CC Vocabulary?"
  is-basic
  is-infused/>
```

### Color set

An input field without color is black.

```jsx
<InputField
  :icon-set="['keyboard', '']"
  type="text"
  placeholder="Answer..."/>
```

But in classic fashion, input fields can be colored with any color from the set 
provided by CC Vocabulary. Grey is nobody's favourite.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      color="blue"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      color="green"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      color="magenta"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      color="olive"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      color="orange"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      color="purple"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      color="red"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      color="sand"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <InputField
      color="yellow"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      color="blue"
      shade="light"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      color="blue"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      color="blue"
      shade="dark"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      color="blue"
      shade="darker"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
</Grid>
```

For use on dark or non-white backgrounds, we provided an inverted variant.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."
      is-inverted
      is-basic/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      color="magenta"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <InputField
      color="magenta"
      :icon-set="['keyboard', '']"
      type="text"
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
  :icon-set="['keyboard', '']"
  type="text"
  placeholder="Left"/>
<br/><br/>
<InputField
  color="red"
  :icon-set="['', 'keyboard']"
  type="text"
  placeholder="Right"/>
<br/><br/>
<InputField
  color="red"
  :icon-set="['keyboard', 'keyboard']"
  type="text"
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
      <strong>:‑)</strong>
    </div>
  </template>
  <template #rightAddons>
    <div style="width: 1.25em; text-align: center;">
      <strong>:‑D</strong>
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

An input field can be defined to color the text inside as well adding an
additional streak of color to the field.

```jsx
<InputField
  type="text"
  :icon-set="['keyboard', '']"
  color="orange"
  placeholder="Answer"
  is-infused/>
```

An input field may appear joined to another component such as another input
field or a `Button`. The border on the join side is dropped to share it
with the other component.

```jsx
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

library.add(faArrowLeft, faArrowRight);

let style = {
  display: 'flex',
  flexDirection: 'row',
  gap: '0' // Replace with '1em' to see how 
};

<div :style="style">
  <Button
    color="blue"
    shade="dark"
    is-basic>
    <template #addons>
      Joined
    </template>
    <FontAwesomeIcon 
      :icon="['fas', 'arrow-right']"
      fixed-width/>
  </Button>
  <InputField
    color="blue" 
    shade="dark"
    :icon-set="['arrow-left', 'arrow-right']"
    join-side="both"
    is-basic/>
  <Button 
    color="blue"
    shade="dark"
    icon="arrow-left"
    is-basic>
    Joined
  </Button>
</div>
```

Styles can be combined.

### Size set

Input fields come in all sizes, from small to mega.

```jsx
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
  v-model="value"
  :icon-set="['keyboard', '']"
  :indication="value === 'Right answer' ? 'positive' : value === 'Wrong answer' ? 'negative' : 'probably'"
  type="text"
  placeholder="Answer..."/>
```

### State set

A field may be disabled to prevent input altogether.

```jsx
<InputField
  :icon-set="['keyboard', '']"
  type="text"
  placeholder="Answer..."
  is-disabled/>
```

A field may be made read-only to prevent input while preserving readability as
an output component.

```jsx
<InputField
  :icon-set="['keyboard', '']"
  type="text"
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
  color="sand"
  type="text"
  placeholder="Placeholder"
  value="Value"/>
```

The `type` attribute works as you would expect.

```jsx
<InputField
  color="blue"
  type="email"
  placeholder="Email address...">
</InputField><br/><br/>
<InputField
  color="purple"
  type="url"
  placeholder="Website URL...">
</InputField><br/><br/>
<InputField
  color="green"
  type="number"
  placeholder="Age in years..."
  min="0"
  max="122">
</InputField><br/><br/>
<InputField
  color="magenta"
  type="date">
</InputField><br/><br/>
<InputField
  color="orange"
  type="time">
</InputField><br/><br/>
<InputField
  color="red"
  type="range"
  max="5"
  min="0">
</InputField><br/><br/>
<InputField
  color="yellow"
  type="file">
</InputField>
```
