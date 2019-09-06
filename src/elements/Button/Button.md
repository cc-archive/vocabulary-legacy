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
CC Vocabulary. We know you hate that grey button.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Button color="blue">Click me</Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Button color="green">Click me</Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Button color="magenta">Click me</Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Button color="olive">Click me</Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Button color="orange">Click me</Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Button color="purple">Click me</Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Button color="red">Click me</Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Button color="sand">Click me</Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Button color="yellow">Click me</Button>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Button 
      color="blue" 
      shade="light">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Button color="blue">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Button 
      color="blue" 
      shade="dark">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Button 
      color="blue" 
      shade="darker">
      Click me
    </Button>
  </GridCell>
</Grid>
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
      color="magenta" 
      is-inverted>
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Button 
      color="magenta" 
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
  color="red" 
  icon="hand-point-up"/>
<br/><br/>
<Button 
  color="red" 
  icon="hand-point-up">
  Click me
</Button>
```

If you'd like your own something there, you can override the add-on slot with 
something you like.

```jsx
<Button color="green">
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
      color="magenta"
      icon="hand-point-up"
      roundness="slight"/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="magenta"
      roundness="slight">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="magenta"
      icon="hand-point-up"
      roundness="slight">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="magenta"
      icon="hand-point-up"
      roundness="complete"/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="magenta"
      roundness="complete">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="magenta"
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
      color="purple"
      icon="hand-point-up"
      simplicity="slight"/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="purple"
      simplicity="slight">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="purple"
      icon="hand-point-up"
      simplicity="slight">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="purple"
      icon="hand-point-up"
      simplicity="extreme"/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="purple"
      simplicity="extreme">
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="purple"
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
      color="orange"
      icon="hand-point-up"
      is-call-to-action/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="orange"
      is-call-to-action>
      Click me
    </Button>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Button
      color="orange"
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
    color="blue"
    shade="dark"
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
    color="blue"
    shade="dark"
    :icon-set="['arrow-left', 'arrow-right']"
    simplicity="slight"/>
  <Button 
    color="blue"
    shade="dark"
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
<Button color="purple" size="small">Click me</Button>
<br/><br/>
<Button color="purple">Click me</Button>
<br/><br/>
<Button color="purple" size="big">Click me</Button>
<br/><br/>
<Button color="purple" size="large">Click me</Button>
<br/><br/>
<Button color="purple" size="huge">Click me</Button>
<br/><br/>
<Button color="purple" size="enormous">Click me</Button>
<br/><br/>
<Button color="purple" size="gigantic">Click me</Button>
<br/><br/>
<Button color="purple" size="mega">Click me</Button>
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
