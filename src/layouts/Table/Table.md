## Examples

Here is an example of a table.

```jsx { "props": { "className": "no-i18n" }}
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
  is-basic
  is-striped
  is-following
  is-fixed/>
```

### Architectural variant set

The above table can be recreated in a declarative way which offers many more 
features at the cost of terseness of expression. For example, you may form
complex-structured tables, use icons and more. 

```jsx { "props": { "className": "no-i18n" }}
<Table 
  caption="Fruits, their concoctions and their taste"
  color="orange"
  is-basic
  is-striped
  is-following
  is-fixed>
  <template v-slot:head>
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
  <template v-slot:foot>
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

A table wihout color specified is colored black.

```jsx { "props": { "className": "no-i18n" }}
<Table is-fixed>
  <template v-slot:head>
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

```jsx { "props": { "className": "no-i18n" }}
<Table color="blue" is-fixed>
  <template v-slot:head>
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
<Table color="green" is-fixed>
  <template v-slot:head>
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
<Table color="magenta" is-fixed>
  <template v-slot:head>
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
<Table color="olive" is-fixed>
  <template v-slot:head>
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
<Table color="orange" is-fixed>
  <template v-slot:head>
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
<Table color="purple" is-fixed>
  <template v-slot:head>
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
<Table color="red" is-fixed>
  <template v-slot:head>
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
<Table color="sand" is-fixed>
  <template v-slot:head>
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
<Table color="yellow" is-fixed>
  <template v-slot:head>
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

```jsx { "props": { "className": "no-i18n" }}
<Table color="blue" shade="light" is-fixed>
  <template v-slot:head>
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
<Table color="blue" is-fixed>
  <template v-slot:head>
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
<Table color="blue" shade="dark" is-fixed>
  <template v-slot:head>
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
<Table color="blue" shade="darker" is-fixed>
  <template v-slot:head>
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

```jsx { "props": { "className": "no-i18n dark-background" }}
<Table 
  caption="Fruits, their concoctions and their taste"
  color="blue"
  is-basic
  is-striped
  is-following
  is-fixed
  is-inverted>
  <template v-slot:head>
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
  <template v-slot:foot>
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

```jsx { "props": { "className": "no-i18n" }}
<Table caption="This is a striped table" color="magenta" is-striped>
  <template v-slot:head>
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

A table may be boxed, sliced or celled to enable separation of content.

```jsx { "props": { "className": "no-i18n" }}
<Table caption="This is a boxed table" color="purple" 
  is-boxed>
  <template v-slot:head>
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
<Table caption="This is a sliced table" color="purple" 
  is-sliced>
  <template v-slot:head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>Borders</TableCell>
      <TableCell is-heading>Location</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Sliced</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Between rows</TableCell>
  </tr>
  <tr>
    <TableCell>Sliced</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Between rows</TableCell>
  </tr>
</Table>
<Table caption="This is a celled table" color="purple" 
  is-celled>
  <template v-slot:head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>Borders</TableCell>
      <TableCell is-heading>Location</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Celled</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Between cells</TableCell>
  </tr>
  <tr>
    <TableCell>Celled</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Between cells</TableCell>
  </tr>
</Table>
<Table caption="This is a fully chopped table" color="purple" 
  is-boxed 
  is-sliced 
  is-celled>
  <template v-slot:head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>Borders</TableCell>
      <TableCell is-heading>Location</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Celled</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Everywhere</TableCell>
  </tr>
  <tr>
    <TableCell>Celled</TableCell>
    <TableCell>Visible</TableCell>
    <TableCell>Everywhere</TableCell>
  </tr>
</Table>
```

A table may be fixed, which means that column widths will be decided by the
first row if it has a width set or will be divided equally.

```jsx { "props": { "className": "no-i18n" }}
<Table caption="This is a fixed table" color="green" is-fixed>
  <template v-slot:head>
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

A table can be basic so that the colors are not as pronounced.

```jsx { "props": { "className": "no-i18n" }}
<Table caption="This is a basic table" color="red" is-basic>
  <template v-slot:head>
    <tr>
      <TableCell is-heading>Style</TableCell>
      <TableCell is-heading>Color prominence</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell>Basic</TableCell>
    <TableCell>Diminished</TableCell>
  </tr>
</Table>
```

A table can be made compact so as to not take the full width of the parent.

```jsx { "props": { "className": "no-i18n" }}
<Table caption="This is a compact table" color="yellow" is-compact>
  <template v-slot:head>
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

A table can be directed to highlight the row that has mouseover. The highlight
is a stronger color than the stripes to avoid confusion.

```jsx { "props": { "className": "no-i18n" }}
<Table caption="This is a following table" color="blue" is-striped is-following>
  <template v-slot:head>
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

Styles can be combined.
