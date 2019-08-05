## Layouts

<center>
<img 
  src="https://raw.githubusercontent.com/creativecommons/cc-vocabulary/master/src/assets/icons/ds_nomenclature/layout.svg?sanitize=true"
  width="64px"/>
</center>

&nbsp;

Layouts are components that are concerned with positioning and placement. They
are zero-content components whose sole purpose is to define ways for children
to be placed in a sensible fashion.

Layouts place content with respect to other content in the same component. This
is different from templates which place entire components next to each other. 
Thus, they occupy a level between elements and patterns.


### Working with layouts

Layouts are nothing but Vue components with a major CSS aspect and consequently
live in eponymous folders containing `Layout.vue`, `Layout.md` and `Layout.styl` 
files.

Layouts should not contain components other than their cells (as is the case with
`Grid`) or their panes as is the case with `Tabbed` in order to uphold the 
no-content principle.


### Examples

We've seen that layouts are purely positional elements with no content 
whatsoever. You can think of the `Container` and the `Grid` as perfect examples.
A container restricts content to a fixed size and a Grid allows component 
placement in a 2D space. They don't specify the content, rather how to display 
it.

Here are some available layouts in action. You should probably 
[isolate](#!/Layouts) this view for clarity. In isolated mode already? Go 
[back to normal](#/Layouts).

```jsx { "props": { "className": "contain-content" } }
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTh, faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

library.add(faTh, faTable);

<Tabbed>
  <TabbedPane color="magenta">
    <template #tab>
      <FontAwesomeIcon :icon="['fas', 'th']"/>
      Grid
    </template>
    <template #default>
      <Grid>
        <GridCell :span-set="[12, 4, 3, 2]" style="background-color: rgb(182, 43, 110)"/>
        <GridCell :span-set="[12, 4, 3, 2]" style="background-color: rgb(182, 43, 110)"/>
        <GridCell :span-set="[12, 4, 3, 2]" style="background-color: rgb(182, 43, 110)"/>
        <GridCell :span-set="[12, 4, 3, 2]" style="background-color: rgb(182, 43, 110)"/>
        <GridCell :span-set="[12, 4, 3, 2]" style="background-color: rgb(182, 43, 110)"/>
        <GridCell :span-set="[12, 4, 3, 2]" style="background-color: rgb(182, 43, 110)"/>
        <GridCell :span-set="[12, 4, 3, 2]" style="background-color: rgb(182, 43, 110)"/>
        <GridCell :span-set="[12, 4, 3, 2]" style="background-color: rgb(182, 43, 110)"/>
      </Grid>
    </template>
  </TabbedPane>
  <TabbedPane color="purple">
    <template #tab>
      <FontAwesomeIcon :icon="['fas', 'table']"/>
      Table
    </template>
    <template #default>
      <Table
        color="purple"
        is-basic
        is-striped
        is-following>
        <template #head>
          <tr>
            <TableCell is-heading></TableCell>
            <TableCell is-heading>A</TableCell>
            <TableCell is-heading>B</TableCell>
            <TableCell is-heading>C</TableCell>
            <TableCell is-heading>D</TableCell>
            <TableCell is-heading>E</TableCell>
          </tr>
        </template>
        <tr>
          <TableCell is-heading>1</TableCell>
          <TableCell>A1</TableCell>
          <TableCell>B1</TableCell>
          <TableCell>C1</TableCell>
          <TableCell>D1</TableCell>
          <TableCell>E1</TableCell>
        </tr>
        <tr>
          <TableCell is-heading>2</TableCell>
          <TableCell>A2</TableCell>
          <TableCell>B2</TableCell>
          <TableCell>C2</TableCell>
          <TableCell>D2</TableCell>
          <TableCell>E2</TableCell>
        </tr>
        <tr>
          <TableCell is-heading>2</TableCell>
          <TableCell>A3</TableCell>
          <TableCell>B3</TableCell>
          <TableCell>C3</TableCell>
          <TableCell>D3</TableCell>
          <TableCell>E3</TableCell>
        </tr>
        <tr>
          <TableCell is-heading>2</TableCell>
          <TableCell>A4</TableCell>
          <TableCell>B4</TableCell>
          <TableCell>C4</TableCell>
          <TableCell>D4</TableCell>
          <TableCell>E4</TableCell>
        </tr>
        <tr>
          <TableCell is-heading>2</TableCell>
          <TableCell>A5</TableCell>
          <TableCell>B5</TableCell>
          <TableCell>C5</TableCell>
          <TableCell>D5</TableCell>
          <TableCell>E5</TableCell>
        </tr>
      </Table>
    </template>
  </TabbedPane>
</Tabbed>
```
