Take a gander at this text. Now hover on it.

```jsx
<br/>
<br/>
<span>The most restrictive license is the</span>
<Popup
  to="top"
  color="orange">
  <LicenseIconography :icon-list="['']"/>
  <template #popup>
    <Paragraph color="orange">
      <strong>Creative Commons</strong>
    </Paragraph>
  </template>
</Popup>
<Popup
  to="top"
  color="green">
  BY
  <template #popup>
    <Paragraph color="green">
      <LicenseIconography :icon-list="['by']"/>
      Attribution
    </Paragraph>
  </template>
</Popup>
<span>license.</span>
```

### Direction set

A popup may be pointed in one of four directions: 
- top
- right
- bottom
- left

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCompass } from '@fortawesome/free-solid-svg-icons'

library.add(faCompass);

let direction = 'top';
let directionOptions = [
  { value: 'top', text: 'Top' },
  { value: 'right', text: 'Right' },
  { value: 'bottom', text: 'Bottom' },
  { value: 'left', text: 'Left' }
];

<SelectField
  v-model="direction"
  color="blue"
  icon="compass"
  :option-list="directionOptions"/>
<div style="padding: 100px 200px;">
  <Popup :to="direction">
    I'm hoverable!
    <template #popup>
      This opens to the <strong>{{ direction }}</strong>.<br/>
      That's super cool!
    </template>
  </Popup>
</div>
```

### Action set

A popup can be directed to react to one of two actions:
- hover
- click

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMousePointer } from '@fortawesome/free-solid-svg-icons'

library.add(faMousePointer);

let action = 'hover';
let actionOptions = [
  { value: 'hover', text: 'Hover' },
  { value: 'click', text: 'Click' }
];

<SelectField
  v-model="action"
  color="blue"
  icon="mouse-pointer"
  :option-list="actionOptions"/>
<div style="padding: 100px 200px;">
  <Popup :action="action">
    I'm {{ action }}able!
    <template #popup>
      This when the trigger is <strong>{{ action }}ed</strong>.<br/>
      That's super cool!
    </template>
  </Popup>
</div>
```

### Attribute set

Since `Popup` is a transparent wrapper on `Section`, all props that you could
pass to a `Section` will still work. Slots however will not.

Here is an example with roundness.

```jsx
<br/>
<br/>
<span>The most restrictive license is the</span>
<Popup
  to="top"
  color="orange"
  color-side="none"
  roundness="slight">
  <LicenseIconography :icon-list="['']"/>
  <template #popup>
    <Paragraph color="orange">
      <strong>Creative Commons</strong>
    </Paragraph>
  </template>
</Popup>
<Popup
  to="top"
  color="red"
  color-side="none"
  roundness="slight">
  BY-NC-ND
  <template #popup>
    <Paragraph color="red">
      <LicenseIconography :icon-list="['by', 'nc', 'nd']"/>
      Attribution-NonCommercial-NoDerivatives
    </Paragraph>
  </template>
</Popup>
<span>license.</span>
```
