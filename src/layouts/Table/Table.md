Here is an example of a table.

```jsx
let information = {
  head: {
    item: {
      display: 'Item',
      isHeading: true
    },
    taste: {
      display: 'Taste'
    }
  },
  body: [
    {
      item: 'Mango',
      taste: 'Sweetest'
    },
    {
      item: 'Grape',
      taste: 'Sweet'
    },
    {
      item: 'Apple',
      taste: 'Meh'
    },
    {
      item: 'Orange',
      taste: 'Sour'
    },
    {
      item: 'Lemon',
      taste: 'Sourest'
    }
  ],
  foot: [
    {
      item: 'Juice',
      taste: 'Sweet'
    },
    {
      item: 'Shake',
      taste: 'Sweet'
    },
    {
      item: 'Jam',
      taste: 'Sweet'
    }
  ]
}

<Table 
  :information="information"
  caption="Fruits, their concoctions and their taste"
  color="orange"
  simplicity="slight"
  is-striped
  is-following
  is-fixed/>
```

The above table can be recreated in a declarative way which offers many more 
features at the cost of terseness of expression. You may form
complex structured tables, use icons and more if you use the declarative syntax
but you will lose quite a bit of programmatic control.

```jsx
<Table 
  caption="Fruits, their concoctions and their taste"
  color="orange"
  simplicity="slight"
  is-striped
  is-following
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Item</TableCell>
      <TableCell is-heading>Taste</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading label="Item:">Mango</TableCell>
    <TableCell label="Taste:">Sweetest</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Grapes</TableCell>
    <TableCell label="Taste:">Sweet</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Apple</TableCell>
    <TableCell label="Taste:">Meh</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Orange</TableCell>
    <TableCell label="Taste:">Sour</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Lemon</TableCell>
    <TableCell label="Taste:">Sourest</TableCell>
  </tr>
  <template #foot>
    <tr>
      <TableCell is-heading label="Item:">Juice</TableCell>
      <TableCell label="Taste:">Sweet</TableCell>
    </tr>
    <tr>
      <TableCell is-heading label="Item:">Shake</TableCell>
      <TableCell label="Taste:">Sweet</TableCell>
    </tr>
    <tr>
      <TableCell is-heading label="Item:">Jam</TableCell>
      <TableCell label="Taste:">Sweet</TableCell>
    </tr>
  </template>
</Table>
```

### Color set

A table without color specified is colored black.

```jsx
<Table is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>None</TableCell>
    <TableCell>Black accent</TableCell>
  </tr>
</Table>
```

Much like the rest of CC Vocabulary, tables can be colored using any color from
the set provided by CC Vocabulary. Black accent, pfft.

```jsx
<Table
  color="blue"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>Blue</TableCell>
    <TableCell>Blue accent</TableCell>
  </tr>
</Table>
<Table
  color="green"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>Green</TableCell>
    <TableCell>Green accent</TableCell>
  </tr>
</Table>
<Table
  color="magenta"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>Magenta</TableCell>
    <TableCell>Magenta accent</TableCell>
  </tr>
</Table>
<Table
  color="olive"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>Olive</TableCell>
    <TableCell>Olive accent</TableCell>
  </tr>
</Table>
<Table
  color="orange"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>Orange </TableCell>
    <TableCell>Orange accent</TableCell>
  </tr>
</Table>
<Table
  color="purple"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>Purple</TableCell>
    <TableCell>Purple accent</TableCell>
  </tr>
</Table>
<Table
  color="red"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>Red</TableCell>
    <TableCell>Red accent</TableCell>
  </tr>
</Table>
<Table
  color="sand"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>Sand</TableCell>
    <TableCell>Sand accent</TableCell>
  </tr>
</Table>
<Table
  color="yellow"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>Yellow</TableCell>
    <TableCell>Yellow accent</TableCell>
  </tr>
</Table>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Table
  color="blue"
  shade="light"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Shade</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Blue</TableCell>
    <TableCell is-heading>Light</TableCell>
    <TableCell>Light blue accent</TableCell>
  </tr>
</Table>
<Table
  color="blue"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Shade</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Blue</TableCell>
    <TableCell is-heading>Default</TableCell>
    <TableCell>Blue accent</TableCell>
  </tr>
</Table>
<Table
  color="blue"
  shade="dark"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Shade</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Blue</TableCell>
    <TableCell is-heading>Dark</TableCell>
    <TableCell>Dark blue accent</TableCell>
  </tr>
</Table>
<Table
  color="blue"
  shade="darker"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Color</TableCell>
      <TableCell is-heading>Shade</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Blue</TableCell>
    <TableCell is-heading>Darker</TableCell>
    <TableCell>Darker blue accent</TableCell>
  </tr>
</Table>
```

A table can be inverted for use on dark or non-white backgrounds.

```jsx { "props": { "className": "dark-background" }}
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBrain } from '@fortawesome/free-solid-svg-icons'

library.add(faBrain);

let isMagenta = false;

let simplicity = '';
let simplicityOptions = [
  { value: '', text: 'None' },
  { value: 'slight', text: 'Slightly simple' },
  { value: 'extreme', text: 'Extremely simple' }
];

<Paragraph style="color: white;">
  <SelectField
    v-model="simplicity"
    color="blue"
    icon="brain"
    :option-list="simplicityOptions"/>
</Paragraph>
<Paragraph color="magenta" is-inverted>
  <SwitchField
    v-model="isMagenta"
    color="magenta"
    is-inverted/>
  Magenta
</Paragraph>
<br/>
<Table 
  caption="Fruits, their concoctions and their taste"
  :color="isMagenta ? 'magenta' : ''"
  :simplicity="simplicity ? simplicity : null"
  is-striped
  is-following
  is-fixed
  is-inverted>
  <template #head>
    <tr>
      <TableCell is-heading>Item</TableCell>
      <TableCell is-heading>Taste</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading label="Item:">Mango</TableCell>
    <TableCell label="Taste:">Sweetest</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Grapes</TableCell>
    <TableCell label="Taste:">Sweet</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Apple</TableCell>
    <TableCell label="Taste:">Meh</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Orange</TableCell>
    <TableCell label="Taste:">Sour</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Lemon</TableCell>
    <TableCell label="Taste:">Sourest</TableCell>
  </tr>
  <template #foot>
    <tr>
      <TableCell is-heading label="Item:">Juice</TableCell>
      <TableCell label="Taste:">Sweet</TableCell>
    </tr>
    <tr>
      <TableCell is-heading label="Item:">Shake</TableCell>
      <TableCell label="Taste:">Sweet</TableCell>
    </tr>
    <tr>
      <TableCell is-heading label="Item:">Jam</TableCell>
      <TableCell label="Taste:">Sweet</TableCell>
    </tr>
  </template>
</Table>
```

### Style set

A table may be striped to enhance the readability of its rows.

```jsx
<Table
  caption="This is a striped table"
  color="magenta"
  is-fixed
  is-striped>
  <template #head>
    <tr>
      <TableCell is-heading>Index</TableCell>
      <TableCell is-heading>Parity</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>1</TableCell>
    <TableCell>Odd</TableCell>
  </tr>
  <tr>
    <TableCell>2</TableCell>
    <TableCell>Even</TableCell>
  </tr>
  <tr>
    <TableCell>3</TableCell>
    <TableCell>Odd</TableCell>
  </tr>
  <tr>
    <TableCell>4</TableCell>
    <TableCell>Even</TableCell>
  </tr>
</Table>
```

A table can be directed to highlight the row that has mouseover. The highlight
is a stronger color than the stripes to avoid confusion.

```jsx
<Table
  caption="This is a following table"
  color="blue"
  is-fixed
  is-striped
  is-following>
  <template #head>
    <tr>
      <TableCell is-heading>Cardinal</TableCell>
      <TableCell is-heading>Ordinal</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>One</TableCell>
    <TableCell>First</TableCell>
  </tr>
  <tr>
    <TableCell>Two</TableCell>
    <TableCell>Second</TableCell>
  </tr>
  <tr>
    <TableCell>Three</TableCell>
    <TableCell>Third</TableCell>
  </tr>
  <tr>
    <TableCell>Four</TableCell>
    <TableCell>Fourth</TableCell>
  </tr>
</Table>
```

A table may be fixed, which means that column widths will be decided by the
first row if it has a width set or will be divided equally.

```jsx
<Table 
  caption="This is a fixed table"
  color="green"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>
        What is the effect of this style on the layout of the table? Please 
        explain in a terse and condensed way.
      </TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Fixed</TableCell>
    <TableCell>Equal column widths</TableCell>
  </tr>
</Table>
```

A table can be simplified so that the colors are not as pronounced. A table can
be extremely simplified so that the colors are even less pronounced.

```jsx
<Table
  caption="This is a slightly simplified table"
  color="red"
  simplicity="slight"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>Color prominence</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Slightly simplified</TableCell>
    <TableCell>Diminished</TableCell>
  </tr>
</Table>
<br/>
<Table 
  caption="This is an extremely simplified table" 
  color="orange"
  simplicity="extreme"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>Color prominence</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Extremely simplified</TableCell>
    <TableCell>Nearly gone</TableCell>
  </tr>
</Table>
```

A table can be rounded for extra cohesiveness in curvy designs.

```jsx
<Table
  caption="This is a fixed table"
  color="blue"
  is-fixed
  is-rounded>
  <template #head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>Roundness</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Rounded</TableCell>
    <TableCell>Present</TableCell>
  </tr>
</Table>
``` 

A table can be made compact so as to not take the full width of the parent.

```jsx
<Table
  caption="This is a compact table"
  color="yellow"
  is-compact>
  <template #head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>Width</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Compact</TableCell>
    <TableCell>Not 100%, only as much as needed</TableCell>
  </tr>
</Table>
```

A table may be boxed, sliced or celled to enable separation of content.

```jsx
<Table 
  caption="This is a boxed table" 
  color="purple" 
  :border-list="['edge']"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>Borders</TableCell>
      <TableCell is-heading>Location</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Boxed</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Around table</TableCell>
  </tr>
  <tr>
    <TableCell>Boxed</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Around table</TableCell>
  </tr>
</Table>
<Table
  caption="This is a horizontally sliced table" 
  color="purple" 
  :border-list="['row']"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>Borders</TableCell>
      <TableCell is-heading>Location</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Sliced horizontally</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Between rows</TableCell>
  </tr>
  <tr>
    <TableCell>Sliced horizontally</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Between rows</TableCell>
  </tr>
</Table>
<Table 
  caption="This is a vertically sliced table" 
  color="purple" 
  :border-list="['column']"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>Borders</TableCell>
      <TableCell is-heading>Location</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Sliced vertically</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Between cells</TableCell>
  </tr>
  <tr>
    <TableCell>Sliced vertically</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Between cells</TableCell>
  </tr>
</Table>
<Table
  caption="This is a chopped table" 
  color="purple" 
  :border-list="['row', 'column', 'edge']"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>Borders</TableCell>
      <TableCell is-heading>Location</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Chopped</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Everywhere</TableCell>
  </tr>
  <tr>
    <TableCell>Chopped</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Everywhere</TableCell>
  </tr>
</Table>
```

Styles can be combined.
