## Examples

A rating component looks like this.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSmile, faMeh, faFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSmile, faMeh, faFrown);

let value = 3;

<Rating
  color="yellow"
  size="large"
  :iconSet="['frown', 'meh', 'smile']"
  :value="3"
  :max="3"
  v-model="value"
  :indication="value > 2 ? 'positive': value < 2 ? 'negative': ''"
  is-toggleable
  is-single-select/>
```

### Color set

A rating bar without a color specified is black.

```jsx
<Rating :value="3">
```

Ratings can be colored using any color from the set provided by CC Vocabulary.
A black ratings bar, come on!

```jsx
<Rating :value="1" :max="9" color="blue"/><br/><br/>
<Rating :value="2" :max="9" color="green"/><br/><br/>
<Rating :value="3" :max="9" color="magenta"/><br/><br/>
<Rating :value="4" :max="9" color="olive"/><br/><br/>
<Rating :value="5" :max="9" color="orange"/><br/><br/>
<Rating :value="6" :max="9" color="purple"/><br/><br/>
<Rating :value="7" :max="9" color="red"/><br/><br/>
<Rating :value="8" :max="9" color="sand"/><br/><br/>
<Rating :value="9" :max="9" color="yellow"/>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Rating color="blue" :value="1" :max="4" shade="light"/><br/><br/>
<Rating color="blue" :value="2" :max="4"/><br/><br/>
<Rating color="blue" :value="3" :max="4" shade="dark"/><br/><br/>
<Rating color="blue" :value="4" :max="4" shade="darker"/>
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
  :iconSet="['heart']"
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
  :iconSet="['thumbs-down', 'thumbs-up']"
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
let value = 3;

<Rating
  v-model="value"
  :indication="value >= 4 ? 'positive' : 'negative'"/>
```
