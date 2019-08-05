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

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="blue">
      <TabbedPane title="Blue">I'm blue colored.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="green">
      <TabbedPane title="Green">I'm green colored.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="magenta">
      <TabbedPane title="Magenta">I'm magenta colored.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="olive">
      <TabbedPane title="Olive">I'm olive colored.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="orange">
      <TabbedPane title="Orange">I'm orange colored.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="purple">
      <TabbedPane title="Purple">I'm purple colored.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="red">
      <TabbedPane title="Red">I'm red colored.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="sand">
      <TabbedPane title="Sand">I'm sand colored.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="yellow">
      <TabbedPane title="Yellow">I'm yellow colored.</TabbedPane>
    </Tabbed>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Tabbed 
      color="blue"
      shade="light">
      <TabbedPane title="Blue">I'm light shaded.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Tabbed color="blue">
      <TabbedPane title="Blue">I'm default shaded.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Tabbed 
      color="blue"
      shade="dark">
      <TabbedPane title="Blue">I'm dark shaded.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Tabbed 
      color="blue"
      shade="darker">
      <TabbedPane title="Blue">I'm darker shaded.</TabbedPane>
    </Tabbed>
  </GridCell>
</Grid>
```

### Add-on set

You can provide the tab title using the `title` prop.

```
<Tabbed color="red">
  <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
  <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
  <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
</Tabbed>
```

However if a plain text title is not your thing, you can replace it with 
whatever your thing is by populating the `tab` slot.

```
<Tabbed color="green">
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
<Tabbed color="green">
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
