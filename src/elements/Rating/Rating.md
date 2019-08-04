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
    <Rating :value="3" color="blue"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating :value="3" color="green"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating :value="3" color="magenta"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating :value="3" color="olive"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating :value="3" color="orange"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating :value="3" color="purple"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating :value="3" color="red"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating :value="3" color="sand"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Rating :value="3" color="yellow"/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Rating color="blue" :value="1" shade="light"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Rating color="blue" :value="2"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Rating color="blue" :value="3" shade="dark"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Rating color="blue" :value="4" shade="darker"/>
  </GridCell>
</GridCell>
```

On dark or non-white backgrounds use the inverted version of the component.

```jsx { "props": { "className": "dark-background" } }
<Rating :value="3" is-inverted/><br/><br/>
<Rating color="magenta" :value="3" is-inverted/>
```

### Size set

Ratings come in all sizes, from small to mega.

```jsx { "props": { "className": "contain-content" } }
<Rating color="purple" :max="8" :value="1" size="small"/><br/><br/>
<Rating color="purple" :max="8" :value="2"/><br/><br/>
<Rating color="purple" :max="8" :value="3" size="big"/><br/><br/>
<Rating color="purple" :max="8" :value="4" size="large"/><br/><br/>
<Rating color="purple" :max="8" :value="5" size="huge"/><br/><br/>
<Rating color="purple" :max="8" :value="6" size="enormous"/><br/><br/>
<Rating color="purple" :max="8" :value="7" size="gigantic"/><br/><br/>
<Rating color="purple" :max="8" :value="8" size="mega"/><br/><br/>
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
  :icon-set="['thumbs-down', 'thumbs-up']"
  :value="2"
  :max="2"
  v-model="value"
  :indication="value === 2 ? 'positive': 'negative'"
  is-toggleable
  is-single-select/>
```

You can increase the maximum rating available on the bar.

```jsx
<Rating
  color="yellow"
  :value="5"
  :max="10"/>
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
  size="huge"
  :icon-set="['frown', 'meh', 'smile']"
  :value="3"
  :max="3"
  v-model="value"
  :indication="value > 2 ? 'positive': value < 2 ? 'negative': 'probably'"
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
