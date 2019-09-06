For example usage, see [Table](#/Layouts/Table).

### Indication set

A cell may indicate the positive or negative interpretation of the data it 
contains.

```jsx
<Table 
  caption="Fruits and their taste"
  color="blue"
  simplicity="slight"
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Item</TableCell>
      <TableCell is-heading>Taste</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>Mango</TableCell>
    <TableCell indication="positive">Sweetest</TableCell>
  </tr>
  <tr>
    <TableCell is-heading>Grapes</TableCell>
    <TableCell indication="positive">Sweet</TableCell>
  </tr>
  <tr>
    <TableCell is-heading>Apple</TableCell>
    <TableCell indication="probably">Meh</TableCell>
  </tr>
  <tr>
    <TableCell is-heading>Orange</TableCell>
    <TableCell indication="negative">Sour</TableCell>
  </tr>
  <tr>
    <TableCell is-heading>Lemon</TableCell>
    <TableCell indication="negative">Sourest</TableCell>
  </tr>
</Table>
```

### Style set

A cell may be marked as actionable to indicate that it is capable of performing
an action on click.

```jsx
let output = [];

<Table
  caption="Websites"
  color="purple"
  is-striped
  is-fixed>
  <template #head>
    <tr>
      <TableCell is-heading>Websites</TableCell>
      <TableCell is-heading>URL</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>CC homepage</TableCell>
    <TableCell 
      is-actionable
      @click.native="output.push('Link 1')">
        Link 1
    </TableCell>
  </tr>
  <tr>
    <TableCell is-heading>CC Vocabulary</TableCell>
    <TableCell
      is-actionable
      @click.native="output.push('Link 2')">
        Link 2
    </TableCell>
  </tr>
  <tr>
    <TableCell is-heading>CC Search</TableCell>
    <TableCell
      is-actionable
      @click.native="output.push('Link 3')">
        Link 3
    </TableCell>
  </tr>
</Table>
<Heading
  v-if="output.length !== 0"
  color="purple"
  :level="4">
  Log
</Heading>
<ul>
  <li
    v-for="(entry, index) in output"
    :key="index">
    {{ entry }}
  </li>
</ul>
```
