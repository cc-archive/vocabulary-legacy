## Examples

For example usage, see [Grid](#/Layouts/Grid).

### Span set

The following shows 12 cells that align themselves as follows.
 
- solo on mobile, occupy all 12 slices
- duo on tablets in portrait mode, occupy 6 slices
- trio on tablets in landscape mode, occupy 4 slices
- quartet on desktops, occupy 3 slices
- sextet on big desktops, occupy 2 slices

Resize your browser or visit this page from another device to see them reflow.

```jsx
<Grid>
  <GridCell 
    :spanSet="[12, 6, 4, 3, 2]" 
    style="color: white; padding: 0.5em; background-color: rgb(182, 43, 110)">
    1
  </GridCell>
  <GridCell 
    :spanSet="[12, 6, 4, 3, 2]" 
    style="color: white; padding: 0.5em; background-color: rgb(182, 43, 110)">
    2
  </GridCell>
  <GridCell 
    :spanSet="[12, 6, 4, 3, 2]" 
    style="color: white; padding: 0.5em; background-color: rgb(182, 43, 110)">
    3
  </GridCell>
  <GridCell 
    :spanSet="[12, 6, 4, 3, 2]" 
    style="color: white; padding: 0.5em; background-color: rgb(182, 43, 110)">
    4
  </GridCell>
  <GridCell 
    :spanSet="[12, 6, 4, 3, 2]" 
    style="color: white; padding: 0.5em; background-color: rgb(182, 43, 110)">
    5
  </GridCell>
  <GridCell 
    :spanSet="[12, 6, 4, 3, 2]" 
    style="color: white; padding: 0.5em; background-color: rgb(182, 43, 110)">
    6
  </GridCell>
  <GridCell 
    :spanSet="[12, 6, 4, 3, 2]" 
    style="color: white; padding: 0.5em; background-color: rgb(182, 43, 110)">
    7
  </GridCell>
  <GridCell 
    :spanSet="[12, 6, 4, 3, 2]" 
    style="color: white; padding: 0.5em; background-color: rgb(182, 43, 110)">
    8
  </GridCell>
  <GridCell 
    :spanSet="[12, 6, 4, 3, 2]" 
    style="color: white; padding: 0.5em; background-color: rgb(182, 43, 110)">
    9
  </GridCell>
  <GridCell 
    :spanSet="[12, 6, 4, 3, 2]" 
    style="color: white; padding: 0.5em; background-color: rgb(182, 43, 110)">
    10
  </GridCell>
  <GridCell 
    :spanSet="[12, 6, 4, 3, 2]" 
    style="color: white; padding: 0.5em; background-color: rgb(182, 43, 110)">
    11
  </GridCell>
  <GridCell 
    :spanSet="[12, 6, 4, 3, 2]" 
    style="color: white; padding: 0.5em; background-color: rgb(182, 43, 110)">
    12
  </GridCell>
</Grid>
```

You can easily mix and match column spans, while maintaining the same level of
control over the sizes at various device sizes.

```jsx
<Grid>
  <GridCell
    :spanSet="[3, 3]"
    style="color: white; padding: 0.5em; background-color: rgb(150, 40, 198)">
    One third
  </GridCell>
  <GridCell
    :spanSet="[9, 9]"
    style="color: white; padding: 0.5em; background-color: rgb(150, 40, 198)">
    Two thirds
  </GridCell>
  <GridCell
    :spanSet="[4, 4]"
    style="color: white; padding: 0.5em; background-color: rgb(150, 40, 198)">
    One fourth
  </GridCell>
  <GridCell
    :spanSet="[8, 8]"
    style="color: white; padding: 0.5em; background-color: rgb(150, 40, 198)">
    Three fourths
  </GridCell>
  <GridCell
    :spanSet="[5, 5]"
    style="color: white; padding: 0.5em; background-color: rgb(150, 40, 198)">
    Spans 5 slices
  </GridCell>
  <GridCell
    :spanSet="[7, 7]"
    style="color: white; padding: 0.5em; background-color: rgb(150, 40, 198)">
    Spans 7 slices
  </GridCell>
</Grid>
```
