## Examples

CC Vocabulary uses a 12-slice grid. Every column may span a certain number of 
slices of this grid.

```jsx
<Grid>
  <GridCell 
    :spanSet="[1, 1]" 
    style="background-color: rgb(251, 121, 40)"/>
  <GridCell 
    :spanSet="[1, 1]" 
    style="background-color: rgb(251, 121, 40)"/>
  <GridCell 
    :spanSet="[1, 1]" 
    style="background-color: rgb(251, 121, 40)"/>
  <GridCell 
    :spanSet="[1, 1]" 
    style="background-color: rgb(251, 121, 40)"/>
  <GridCell 
    :spanSet="[1, 1]" 
    style="background-color: rgb(251, 121, 40)"/>
  <GridCell 
    :spanSet="[1, 1]" 
    style="background-color: rgb(251, 121, 40)"/>
  <GridCell 
    :spanSet="[1, 1]" 
    style="background-color: rgb(251, 121, 40)"/>
  <GridCell 
    :spanSet="[1, 1]" 
    style="background-color: rgb(251, 121, 40)"/>
  <GridCell 
    :spanSet="[1, 1]" 
    style="background-color: rgb(251, 121, 40)"/>
  <GridCell 
    :spanSet="[1, 1]" 
    style="background-color: rgb(251, 121, 40)"/>
  <GridCell 
    :spanSet="[1, 1]" 
    style="background-color: rgb(251, 121, 40)"/>
  <GridCell 
    :spanSet="[1, 1]" 
    style="background-color: rgb(251, 121, 40)"/>
</Grid>
```

Grids are also responsive and the number of slices each cell spans can be
specified for various devices. For example a cell may span one third of the 
total space on all devices except mobile where it automatically scales to occupy
full width. 

You may use the component [GridCell](#/Layouts/GridCell) to specify these spans 
using the `spanSet` prop.

Placing the grid inside the component [Container](#/Layouts/Container) is 
usually a good idea to ensure consistent look across screen size ranges. But
that's your call to make because Container usually looks quite small on devices
on the larger end of the breakpoint.

```jsx { "props": { "className": "contain-content" } }
<div 
  style="width:100%; 
         background-image: linear-gradient(45deg, #ddd 25%, #fff 25%, #fff 50%, #ddd 50%, #ddd 75%, #fff 75%, #fff 100%);
         background-size: 8px 8px;">
  <Container
    style="background-color: white;">
    <Grid>
      <GridCell 
        :spanSet="[1, 1]" 
        style="background-color: rgb(251, 121, 40)"/>
      <GridCell 
        :spanSet="[1, 1]" 
        style="background-color: rgb(251, 121, 40)"/>
      <GridCell 
        :spanSet="[1, 1]" 
        style="background-color: rgb(251, 121, 40)"/>
      <GridCell 
        :spanSet="[1, 1]" 
        style="background-color: rgb(251, 121, 40)"/>
      <GridCell 
        :spanSet="[1, 1]" 
        style="background-color: rgb(251, 121, 40)"/>
      <GridCell 
        :spanSet="[1, 1]" 
        style="background-color: rgb(251, 121, 40)"/>
      <GridCell 
        :spanSet="[1, 1]" 
        style="background-color: rgb(251, 121, 40)"/>
      <GridCell 
        :spanSet="[1, 1]" 
        style="background-color: rgb(251, 121, 40)"/>
      <GridCell 
        :spanSet="[1, 1]" 
        style="background-color: rgb(251, 121, 40)"/>
      <GridCell 
        :spanSet="[1, 1]" 
        style="background-color: rgb(251, 121, 40)"/>
      <GridCell 
        :spanSet="[1, 1]" 
        style="background-color: rgb(251, 121, 40)"/>
      <GridCell 
        :spanSet="[1, 1]" 
        style="background-color: rgb(251, 121, 40)"/>
    </Grid>
  </Container>
</div>
```


### Density set

The gutter space between cells of the grid is customisable and can be increased
or decreased all the way to zero, as per the needs of the situation.

```jsx
<Heading :level="3" color="green" shade="dark">Sparser</Heading>
<Grid density="sparser">
  <GridCell 
    :spanSet="[12, 6]" 
    style="background-color: #01a635"/>
  <GridCell 
    :spanSet="[12, 6]" 
    style="background-color: #01a635"/>
</Grid>
<Heading :level="3" color="green">Sparse</Heading>
<Grid density="sparse">
  <GridCell 
    :spanSet="[12, 6]" 
    style="background-color: #98c807"/>
  <GridCell 
    :spanSet="[12, 6]" 
    style="background-color: #98c807"/>
</Grid>
<Heading :level="3" color="yellow">Default</Heading>
<Grid>
  <GridCell 
    :spanSet="[12, 6]" 
    style="background-color: #edd812"/>
  <GridCell 
    :spanSet="[12, 6]" 
    style="background-color: #edd812"/>
</Grid>
<Heading :level="3" color="red">Dense</Heading>
<Grid density="dense">
  <GridCell 
    :spanSet="[12, 6]" 
    style="background-color: #d13814"/>
  <GridCell 
    :spanSet="[12, 6]" 
    style="background-color: #d13814"/>
</Grid>
<Heading :level="3" color="red" shade="dark">Denser</Heading>
<Grid density="denser">
  <GridCell 
    :spanSet="[12, 6]" 
    style="background-color: #912b10"/>
  <GridCell 
    :spanSet="[12, 6]" 
    style="background-color: #912b10"/>
</Grid>
<Heading :level="3" color="red" shade="darker">Packed</Heading>
<Grid density="packed">
  <GridCell 
    :spanSet="[12, 6]" 
    style="background-color: #5a1c0e"/>
  <GridCell 
    :spanSet="[12, 6]" 
    style="background-color: #5a1c0e"/>
</Grid>
```

### Note

Do note that grids behave poorly on sizes less than 11 times the gap. So a 
sparser grid will break responsiveness on screens smaller than 11 times `2rem`, 
which equals 11 times 32px which equals 352px.

If you  face this issue, switch to a higher density and add padding to your 
columns. 

This is a trade-off for building a powerful grid based on CSS `grid` instead of
one severely limited in functionality using CSS `flex`.
 
