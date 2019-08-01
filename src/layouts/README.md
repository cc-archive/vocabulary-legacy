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
<div 
  style="width:100%; 
  background-image: linear-gradient(45deg, #ddd 25%, #fff 25%, #fff 50%, #ddd 50%, #ddd 75%, #fff 75%, #fff 100%);
  background-size: 8px 8px;">
  <Container
    style="border: 1px solid #ddd; background-color: white;">
    <Tabbed color="blue">
      <TabbedPane title="Grid">
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
      </TabbedPane>
      <TabbedPane title="Table">
        <Table color="purple" is-compact is-basic is-striped is-following>
          <template v-slot:head>
            <tr>
              <TableCell is-heading></TableCell>
              <TableCell is-heading>A</TableCell>
              <TableCell is-heading>B</TableCell>
            </tr>
          </template>
          <tr>
            <TableCell is-heading>1</TableCell>
            <TableCell>A1</TableCell>
            <TableCell>B1</TableCell>
          </tr>
          <tr>
            <TableCell is-heading>2</TableCell>
            <TableCell>A2</TableCell>
            <TableCell>B2</TableCell>
          </tr>
        </Table>
      </TabbedPane>
    </Tabbed>
  </Container>
</div>
```
