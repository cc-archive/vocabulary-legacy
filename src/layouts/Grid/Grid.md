CC Vocabulary uses a 12-slice grid. Every column may span a certain number of 
slices of this grid.

```jsx
let style = {
  backgroundColor: 'rgb(251, 121, 40)'
};
let spanSet = [1, 1];

<Grid>
  <GridCell
    v-for="index in 12"
    :key="index"
    :style="style"
    :span-set="spanSet"/>
</Grid>
```

Grids are also responsive and the number of slices each cell spans can be
specified for various devices. For example a cell may span one third of the
total space on all devices except mobile where it automatically scales to occupy
full width. You should use the component [GridCell](#/Layouts/GridCell) to
specify these spans using the `spanSet` prop.

Placing the grid inside the component [Container](#/Layouts/Container) is 
usually a good idea to ensure consistent look across screen size ranges.

### Density set

The gutter space between cells of the grid is customisable and can be increased
or decreased all the way to zero, as per the needs of the situation.

```jsx
let style = (backgroundColor) => {
  return {
    backgroundColor: backgroundColor
  };
};
let spanSet = [12, 6];

<Heading
  :level="3"
  color="green"
  shade="dark">
  Sparser
</Heading>
<Grid density="sparser">
  <GridCell :style="style('#01a635')" :span-set="spanSet"/>
  <GridCell :style="style('#01a635')" :span-set="spanSet"/>
</Grid>
<Heading
  :level="3"
  color="green">
  Sparse
</Heading>
<Grid density="sparse">
  <GridCell :style="style('#98c807')" :span-set="spanSet"/>
  <GridCell :style="style('#98c807')" :span-set="spanSet"/>
</Grid>
<Heading
  :level="3"
  color="yellow">
  Default
</Heading>
<Grid>
  <GridCell :style="style('#edd812')" :span-set="spanSet"/>
  <GridCell :style="style('#edd812')" :span-set="spanSet"/>
</Grid>
<Heading
  :level="3"
  color="red">
  Dense
</Heading>
<Grid density="dense">
  <GridCell :style="style('#d13814')" :span-set="spanSet"/>
  <GridCell :style="style('#d13814')" :span-set="spanSet"/>
</Grid>
<Heading
  :level="3"
  color="red"
  shade="dark">
  Denser
</Heading>
<Grid density="denser">
  <GridCell :style="style('#912b10')" :span-set="spanSet"/>
  <GridCell :style="style('#912b10')" :span-set="spanSet"/>
</Grid>
<Heading
  :level="3"
  color="red"
  shade="darker">
  Full
</Heading>
<Grid density="full">
  <GridCell :style="style('#5a1c0e')" :span-set="spanSet"/>
  <GridCell :style="style('#5a1c0e')" :span-set="spanSet"/>
</Grid>
```

### Note

Do note that grids behave poorly on sizes less than 11 times the gap. So a
sparser grid will break responsiveness on screens smaller than 11 times `2rem`,
which equals 11 times `32px` which equals `352px`.

If you face this issue, switch to a higher density and add padding to your 
columns.

This is a trade-off for building a powerful grid based on CSS `grid` instead of
one severely limited in functionality using CSS `flex`.
