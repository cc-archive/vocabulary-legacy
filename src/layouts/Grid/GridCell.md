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
let spanSet = [12, 6, 4, 3, 2];
let style = {
  color: 'white',
  padding: '0.5em',
  backgroundColor: 'rgb(182, 43, 110)'
};

<Grid>
  <GridCell :style="style" :span-set="spanSet">01</GridCell>
  <GridCell :style="style" :span-set="spanSet">02</GridCell>
  <GridCell :style="style" :span-set="spanSet">03</GridCell>
  <GridCell :style="style" :span-set="spanSet">04</GridCell>

  <GridCell :style="style" :span-set="spanSet">05</GridCell>
  <GridCell :style="style" :span-set="spanSet">06</GridCell>
  <GridCell :style="style" :span-set="spanSet">07</GridCell>
  <GridCell :style="style" :span-set="spanSet">08</GridCell>

  <GridCell :style="style" :span-set="spanSet">09</GridCell>
  <GridCell :style="style" :span-set="spanSet">10</GridCell>
  <GridCell :style="style" :span-set="spanSet">11</GridCell>
  <GridCell :style="style" :span-set="spanSet">12</GridCell>
</Grid>
```

You can easily mix and match column spans, while maintaining the same level of
control over the sizes at various device sizes.

```jsx
let style = {
  color: 'white',
  padding: '0.5em',
  backgroundColor: 'rgb(150, 40, 198)'
};

<Grid>
  <GridCell :style="style" :span-set="[1, 1]">1</GridCell>
  <GridCell :style="style" :span-set="[11, 11]">11</GridCell>

  <GridCell :style="style" :span-set="[2, 2]">2</GridCell>
  <GridCell :style="style" :span-set="[10, 10]">10</GridCell>

  <GridCell :style="style" :span-set="[3, 3]">3</GridCell>
  <GridCell :style="style" :span-set="[9, 9]">9</GridCell>

  <GridCell :style="style" :span-set="[4, 4]">4</GridCell>
  <GridCell :style="style" :span-set="[8, 8]">8</GridCell>

  <GridCell :style="style" :span-set="[5, 5]">5</GridCell>
  <GridCell :style="style" :span-set="[7, 7]">7</GridCell>

  <GridCell :style="style" :span-set="[6, 6]">6</GridCell>
  <GridCell :style="style" :span-set="[6, 6]">6</GridCell>
</Grid>
```
