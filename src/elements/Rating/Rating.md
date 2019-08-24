A rating component looks like this.

```jsx
<Rating
  color="red"
  size="huge"
  :icon-set="['heart']"
  :value="3"
  is-toggleable/>
```

### Color set

A rating bar without a color specified is black.

```jsx
<Rating :value="3"/>
```

Ratings can be colored using any color from the set provided by CC Vocabulary.
A black ratings bar, come on!

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating
      color="blue"
      :value="3"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating
      color="green"
      :value="3"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating
      color="magenta"
      :value="3"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating
      color="olive"
      :value="3"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating
      color="orange"
      :value="3"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating
      color="purple"
      :value="3"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating
      color="red"
      :value="3"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating
      color="sand"
      :value="3"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating
      color="yellow"
      :value="3"/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Rating
      color="blue"
      shade="light"
      :value="1"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Rating
      color="blue" 
      :value="2"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Rating
      color="blue"
      shade="dark"
      :value="3"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Rating
      color="blue"
      shade="darker"
      :value="4"/>
  </GridCell>
</GridCell>
```

On dark or non-white backgrounds use the inverted version of the component.

```jsx { "props": { "className": "dark-background" } }
<Rating
  :value="3"
  is-inverted/>
<br/><br/>
<Rating
  color="magenta"
  :value="3"
  is-inverted/>
```

### Size set

Ratings come in all sizes, from small to mega.

```jsx
<Rating
  color="purple"
  size="small"
  :max="8"
  :value="1"/>
<br/><br/>
<Rating
  color="purple"
  :max="8"
  :value="2"/>
<br/><br/>
<Rating
  color="purple"
  size="big"
  :max="8"
  :value="3"/>
<br/><br/>
<Rating
  color="purple"
  size="large"
  :max="8"
  :value="4"/>
<br/><br/>
<Rating
  color="purple"
  size="huge"
  :max="8"
  :value="5"/>
<br/><br/>
<Rating
  color="purple"
  size="enormous"
  :max="8"
  :value="6"/>
<br/><br/>
<Rating
  color="purple"
  size="gigantic"
  :max="8"
  :value="7"/>
<br/><br/>
<Rating
  color="purple"
  size="mega"
  :max="8"
  :value="8"/>
```

### Style set

You can use any icons in your rating. The default is a collection of stars, but 
it could be anything based on your needs. Icons must be provided as an array of 
icon names. This array will be extended or cropped depending on whether the
array length is less or more than prop `max`.

```jsx
<Rating
  color="red"
  :icon-set="['heart']"
  :value="3"/>
```

A rating can be set to toggleable in which case, instead of the dot, selecting
the current rating will clear it altogether.

```jsx
<Rating
  color="yellow"
  :value="3"
  is-toggleable/>
```

A rating can be single select, so that it only highlights the active rating icon
and not all icons before it. This works best in toggleable mode.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faThumbsDown, faThumbsUp);

let value = 2;

<Rating
  v-model="value"
  :icon-set="['thumbs-down', 'thumbs-up']"
  :indication="value === 2 ? 'positive': 'negative'"
  :max="2"
  :value="2"
  is-toggleable
  is-single-select/>
```

You can increase the maximum rating available on the bar.

```jsx
<Rating
  color="yellow"
  :max="10"
  :value="5"/>
```

### Indication set

A rating can indicate the contextual nature of its value.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSmile, faMeh, faFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSmile, faMeh, faFrown);

let value = 3;

<Rating
  v-model="value"
  size="huge"
  :icon-set="['frown', 'meh', 'smile']"
  :indication="value > 2 ? 'positive': value < 2 ? 'negative': 'probably'"
  :value="3"
  :max="3"
  is-toggleable
  is-single-select/>
```

### State set

A rating may be disabled to prevent input altogether.

```jsx
<Rating
  color="red"
  :value="3"
  is-disabled/>
```

A rating may be made read-only to prevent input while preserving readability as
an output component.

```jsx
<Rating
  color="red"
  :value="3"
  is-read-only/>
```

### Similarity

The component is functionally similar to [InputField](#/Elements/InputField)
with `type="range"`. Do make sure to see which of the two components is a better
fit for your use case.
