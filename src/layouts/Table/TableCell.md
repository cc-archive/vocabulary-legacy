## Examples

For example usage, see [Table](#/Layouts/Table).

### Indication set

A cell may indicate the positive or negative interpretation of the data it 
contains.

```jsx { "props": { "className": "no-i18n" }}
<Table 
  caption="Fruits and their taste"
  color="blue"
  is-basic
  is-fixed>
  <template v-slot:head>
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
    <TableCell>Meh</TableCell>
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

A cell may be marked as active to indicate that it is capable of performing an
action.

```jsx { "props": { "className": "no-i18n" }}
let homeVisits = 0;

<Table
  caption="Websites"
  color="blue"
  is-basic
  is-fixed>
  <template v-slot:head>
    <tr>
      <TableCell is-heading>Websites</TableCell>
      <TableCell is-heading>URL</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading>CC homepage</TableCell>
    <TableCell is-active>Link</TableCell>
  </tr>
  <tr>
    <TableCell is-heading>CC Vocabulary</TableCell>
    <TableCell is-active>Link</TableCell>
  </tr>
  <tr>
    <TableCell is-heading>CC Search</TableCell>
    <TableCell is-active>Link</TableCell>
  </tr>
</Table>
```
