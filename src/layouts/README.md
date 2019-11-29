## lay·outs

<center>
<img
  src="https://raw.githubusercontent.com/creativecommons/vue-vocabulary/master/src/assets/icons/ds_nomenclature/layout.svg?sanitize=true"
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

Here are some available layouts in action.

```jsx
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTh, faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

library.add(faTh, faTable);

let spanSet = [12, 4, 3, 2];
let style = {
  backgroundColor: 'rgb(182, 43, 110)'
};

let alphaSet = ['A', 'B', 'C', 'D', 'E'];
let numSet = 5;


<Tabbed>
  <TabbedPane color="magenta">
    <template #tab>
      <FontAwesomeIcon :icon="['fas', 'th']"/>
      Grid
    </template>
    <template #default>
      <Grid>
        <GridCell
          v-for="index in 12"
          :key="index"
          :style="style"
          :span-set="spanSet"/>
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
        :border-list="['edge']"
        simplicity="slight"
        is-striped
        is-following>
        <template #head>
          <tr>
            <TableCell is-heading></TableCell>
            <TableCell
              v-for="(alpha, index) in alphaSet"
              :key="index"
              is-heading>{{ alpha }}</TableCell>
          </tr>
        </template>
        <template #default>
          <tr v-for="num in numSet" :key="num">
            <TableCell is-heading>{{ num }}</TableCell>
            <TableCell
              v-for="(alpha, index) in alphaSet"
              :key="index">
              {{ alpha }}{{ num }}
            </TableCell>
          </tr>
        </template>
      </Table>
    </template>
  </TabbedPane>
</Tabbed>
```
