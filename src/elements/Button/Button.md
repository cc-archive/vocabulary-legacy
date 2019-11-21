Here's a sample button. If you intuitively feel to click it, it's working.

```jsx
<Button 
  color="orange" 
  is-call-to-action>
  <template #addons>
    <LicenseIconography :icon-list="['', 'by']"/>
  </template>
  Assign CC BY license
</Button>
```

### Color set

A button without color is black.

```jsx
<Button>Click me</Button>
```

As is tradition, buttons can be colored with any color from the set provided by
CC Vocabulary. We know you hate that black button.

Also you may use one of the four shades, namely `lighter`, `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFillDrip, faSwatchbook } from '@fortawesome/free-solid-svg-icons'

library.add(faFillDrip, faSwatchbook);

let color = '';
let colorOptions = [
  { value: '', text: 'None' },
  { value: 'tomato', text: 'Tomato' },
  { value: 'gold', text: 'Gold' },
  { value: 'green', text: 'Green' },
  { value: 'blue', text: 'Blue' },
  { value: 'orange', text: 'Orange' },
  { value: 'turquoise', text: 'Turquoise' },
];

let shade = '';
let shadeOptions = [
  { value: '', text: 'Default' },
  { value: 'lighter', text: 'Lighter' },
  { value: 'light', text: 'Light' },
  { value: 'normal', text: 'Normal' },
  { value: 'dark', text: 'Dark' },
  { value: 'darker', text: 'Darker' }
];

<SelectField
  v-model="color"
  :color="color ? color : null"
  icon="fill-drip"
  :option-list="colorOptions"/>
<SelectField
  v-model="shade"
  :color="color ? color : null"
  :shade="shade ? shade : null"
  icon="swatchbook"
  :option-list="shadeOptions"
  :is-disabled="color === ''"/>
<br/>
<br/>
<Button
  :color="color ? color : null"
  :shade="shade ? shade : null">
  Click me
</Button>
```

If the button is to be placed on a dark or non-white background, we use the 
inverted variant.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Button is-inverted>
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Button 
      is-inverted
      simplicity="slight">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Button 
      color="turquoise" 
      is-inverted>
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Button 
      color="turquoise" 
      is-inverted
      simplicity="slight">
      Click me
    </Button>
  </GridCell>
</Grid>
```

### Add-on set

A button can be paired with (or the content replaced with) an icon to act as a 
visual aid as to what it does. Note that the icon must be added to the 
FontAwesome library by the application.

```jsx
<Button 
  color="tomato" 
  icon="hand-point-up"/>
<br/><br/>
<Button 
  color="tomato" 
  icon="hand-point-up">
  Click me
</Button>
```

If you'd like your own something there, you can override the add-on slot with 
something you like.

```jsx
<Button color="tomato">
  <template #addons>
    <LicenseBadge license="by-sa"/>
  </template>
  Assign CC BY-SA license
</Button>
```

### Style set

A button can be slightly rounded to fit in with more curvy layouts and UI
components. Although supported, the use of this is highly unlikely given CC's
love for sharp vertices and 90° angles. Even more rounded is the pill shape. It
is in complete contrast to the sharp edged CC design but looks really good for
icon buttons.

```jsx
<Grid>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      icon="hand-point-up"
      roundness="slight"/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      roundness="slight">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      icon="hand-point-up"
      roundness="slight">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      icon="hand-point-up"
      roundness="complete"/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      roundness="complete">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      icon="hand-point-up"
      roundness="complete">
      Click me
    </Button>
  </GridCell>
</Grid>
```

A button can be defined to not attract attention, unless given attention via
means of a hover. A button can be defined to deny attention, unless that is
really what the user wanted.

```jsx
<Grid>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      icon="hand-point-up"
      simplicity="slight"/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      simplicity="slight">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      icon="hand-point-up"
      simplicity="slight">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      icon="hand-point-up"
      simplicity="extreme"/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      simplicity="extreme">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      icon="hand-point-up"
      simplicity="extreme">
      Click me
    </Button>
  </GridCell>
</Grid>
```

A button can be a call-to-action button to immediately direct the user to commit
a certain action.

```jsx
<Grid>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      icon="hand-point-up"
      is-call-to-action/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      is-call-to-action>
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="green"
      icon="hand-point-up"
      is-call-to-action>
      Click me
    </Button>
  </GridCell>
</Grid>
```

A button may appear joined to another component such as another button or an
`InputField`. The border on the join side is dropped to share it with the other
component.

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
    color="green"
    join-side="right"
    simplicity="slight">
    <template #addons>
      Joined
    </template>
    <FontAwesomeIcon 
      :icon="['fas', 'arrow-right']"
      fixed-width/>
  </Button>
  <InputField
    color="green"
    :icon-set="['arrow-left', 'arrow-right']"
    simplicity="slight"/>
  <Button 
    color="green"
    icon="arrow-left"
    join-side="left"
    simplicity="slight">
    Joined
  </Button>
</div>
```

Styles can be combined.

### Size set

Buttons come in all sizes, from small to mega.

```jsx
<Button color="blue" size="small">Click me</Button>
<br/><br/>
<Button color="blue">Click me</Button>
<br/><br/>
<Button color="blue" size="big">Click me</Button>
<br/><br/>
<Button color="blue" size="large">Click me</Button>
<br/><br/>
<Button color="blue" size="huge">Click me</Button>
<br/><br/>
<Button color="blue" size="enormous">Click me</Button>
<br/><br/>
<Button color="blue" size="gigantic">Click me</Button>
<br/><br/>
<Button color="blue" size="mega">Click me</Button>
```

### Indication set

A button may indicate a negative or positive outcome. For example, in this case
clicking the button that calls itself dangerous will lead to much agony and 
unpleasantness.

```jsx
<Button indication="positive">I'm safe to click</Button>
<Button indication="probably">I'm not sure what I am</Button>
<Button indication="negative">I'm dangerous to click</Button>
```

### State set

A button may be disabled to prevent input altogether.

```jsx
<Button is-disabled>Can't click me</Button>
```

### Attributes

All attributes that you would pass to a `button` tag can be passed to the 
`Button` component.

So a button may have a `name` and a `value`.

```jsx
<Button name="Name" value="Value">OK</Button>
```

The `type` attribute works as you would expect.

```jsx
<Button type="submit" indication="positive">Submit</Button>
<Button type="reset" indication="negative">Reset</Button>
```
