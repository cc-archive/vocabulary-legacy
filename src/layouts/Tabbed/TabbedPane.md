For example usage, see [Tabbed](#/Layouts/Tabbed).

### Color set

A tabbed pane without color does not lend any color to the tabbed view and falls
back to the view's color and shade.

```jsx
<Tabbed color="magenta">
  <TabbedPane title="Inherit">No color specified.</TabbedPane>
</Tabbed>
```

A tabbed pane can have any color from the set provided by CC Vocabulary
associated with it. Obeying your parents is good, rebelling occasionally is
better.

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
<Tabbed>
  <TabbedPane
    :color="color ? color : null"
    :shade="shade ? shade : null"
    title="Colored">I'm {{ color ? color : 'default' }} colored.
  </TabbedPane>
</Tabbed>
```

### Add-on set

You can provide the tab title using the `title` prop.

```
<Tabbed color="tomato">
  <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
  <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
  <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
</Tabbed>
```

However if a plain text title is not your thing, you can replace it with 
whatever your thing is by populating the `tab` slot.

```
<Tabbed color="tomato">
  <TabbedPane>
    <template #tab>
      <b>Tab 1</b>
    </template>
    This is the first tab.
  </TabbedPane>
  <TabbedPane>
    <template #tab>
      <i>Tab 2</i>
    </template>
    This is the second tab.
  </TabbedPane>
  <TabbedPane>
    <template #tab>
      <u>Tab 3</u>
    </template>
    This is the third tab.
  </TabbedPane>
</Tabbed>
```

While the content does go in the default slot of the `TabbedPane` and therefore
there is no reason to wrap the content in any way, there have been incidents of
misbehaviour when the content contains components that use named slots
themselves such as `Table`s and `InputField`s. Just wrap content in a template
with the `default` slot if you experience content going missing or appearing
incorrectly and if you want consistency, you should wrap content everywhere.

```html static
<template #default>
  ...
</template>
```

Here's an example of this practice in action.

```jsx
<Tabbed color="tomato">
  <TabbedPane>
    <template #tab>
      Tab 1
    </template>

    <!-- This template tag makes a difference -->
    <template #default>
      This is the first tab.
    </template>
  </TabbedPane>
  <TabbedPane>
    <template #tab>
      Tab 2
    </template>

    <!-- This template tag makes a difference -->
    <template #default>
      This is the second tab.
    </template>
  </TabbedPane>
  <TabbedPane>
    <template #tab>
      Tab 3
    </template>

    <!-- This template tag makes a difference -->
    <template #default>
      This is the third tab.
    </template>
  </TabbedPane>
</Tabbed>
```
