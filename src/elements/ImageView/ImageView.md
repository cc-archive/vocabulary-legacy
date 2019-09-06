Here is an image. Nothing really extraordinary, right? Scroll on.

```jsx
let source = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/7weeks_old.JPG/1024px-7weeks_old.JPG";

<ImageView
  alternate-text="7 weeks old"
  :source="source"
  title="7 weeks old"
  size="big"
  is-centered
  is-circular/>
```

### Size and constrain set

Image views come in all sizes, from small to mega.  An image can be constrained
to match the view's width or height. The prop `size` only affects the 
constrained dimension.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRuler, faRulerCombined } from '@fortawesome/free-solid-svg-icons'

library.add(faRuler, faRulerCombined);

let source = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/7weeks_old.JPG/1024px-7weeks_old.JPG";

let size = '';
let sizeOptions = [
  { value: '', text: 'Natural' },
  { value: 'small', text: 'Small' },
  { value: 'normal', text: 'Normal' },
  { value: 'big', text: 'Big' },
  { value: 'large', text: 'Large' },
  { value: 'huge', text: 'Huge' },
  { value: 'enormous', text: 'Enormous' },
  { value: 'gigantic', text: 'Gigantic' },
  { value: 'mega', text: 'Mega' }
];

let primaryDimension = 'height';
let primaryDimensionOptions = [
  { value: 'height', text: 'Height' },
  { value: 'width', text: 'Width' }
];

<SelectField
  v-model="size"
  color="blue"
  icon="ruler"
  :option-list="sizeOptions"/>
<SelectField
  v-model="primaryDimension"
  color="blue"
  icon="ruler-combined"
  :option-list="primaryDimensionOptions"/>
<br/>
<br/>
<ImageView
  :size="size ? size : null"
  :primary-dimension="primaryDimension ? primaryDimension : null"
  :source="source"
  alternate-text="7 weeks old"/>
```

To set the dimensions other than those supported by `size` you may set the CSS
variables `--image-view-height` and `--image-view-width`. To set the dimensions
of the image inside the view, you may set the variables `--image-height` and
`--image-width`.

### Style set

An image can be vertically centered to sit well with text.

```jsx
let source = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/7weeks_old.JPG/1024px-7weeks_old.JPG";

<Heading 
  color="green"
  shade="dark"
  :level="1">
  Who's a good boi?
</Heading>
<Paragraph>
  <ImageView 
    alternate-text="7 weeks old"
    :source="source"
    title="7 weeks old"
    size="big"
    is-centered/>:
  <em>*barks*</em> (I am!)
</Paragraph>
```

An image may be cropped into a circle, as you would see in profile pictures for
example.

```jsx
let source = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/7weeks_old.JPG/1024px-7weeks_old.JPG";

<Button
  color="blue"
  simplicity="slight"
  roundness="pill-shaped">
  <template #addons>
    <ImageView
      :source="source"
      alternate-text="7 weeks old"
      size="small"
      is-circular
      is-centered/>
  </template>
  7 weeks old
</Button>
```

Styles may be combined.

### Add-on set

An image may display information about it on hover. This information can be set
partly via the `title` prop and partly via the `topAddons` slot. Or you can go
all out and just populate the `bottomAddons` slot too. If the content is small
enough, bars on circular images look cool too.

```jsx
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('FontAwesomeIcon', FontAwesomeIcon); 

library.add(faImage, faUserCircle);

let source = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/7weeks_old.JPG/1024px-7weeks_old.JPG";

<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <ImageView
      :source="source"
      alternate-text="7 weeks old"
      title="7 weeks old"
      size="huge"
      is-hoverable
      is-circular>
      <template #topAddons>
        <FontAwesomeIcon
          :icon="['fas', 'user-circle']"/>
        Bodlina
      </template>
    </ImageView>
    <Paragraph>
        This uses the topAddons slot and the title prop.
    </Paragraph>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <ImageView
      :source="source"
      alternate-text="7 weeks old"
      title="7 weeks old"
      size="huge"
      is-hoverable>
      <template #topAddons>
        <FontAwesomeIcon
          :icon="['fas', 'user-circle']"/>
        Bodlina
      </template>
      <template #bottomAddons>
        7 weeks old
        <LicenseIconography :icon-list="['', 'by', 'sa']"/>
      </template>
    </ImageView>
    <Paragraph>
        This uses the topAddons slot and the bottomAddons slot.
    </Paragraph>
  </GridCell>
</Grid>
```
