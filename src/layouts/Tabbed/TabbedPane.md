## Examples

For example usage, see [Tabbed](#/Layouts/Tabbed).

### Add-on set

You can provide the tab title using the `title` prop.

```
<Tabbed color="red">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
```

However if a plain text title is not your thing, you can replace it with 
whatever your thing is by populating the `tab` slot.

```
<Tabbed color="red">
  <TabbedPane>
    <template v-slot:tab>
      <b>Tab 1</b>
    </template>
    This is the first tab.
  </TabbedPane>
  <TabbedPane>
    <template v-slot:tab>
      <i>Tab 2</i>
    </template>
    This is the second tab.
  </TabbedPane>
  <TabbedPane>
    <template v-slot:tab>
      <u>Tab 3</u>
    </template>
    This is the third tab.
  </TabbedPane>
</Tabbed>
```
