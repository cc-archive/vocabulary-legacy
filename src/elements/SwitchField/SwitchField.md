A switch looks like this.

```jsx
let value = true;
<SwitchField color="orange" size="large" v-model="value"/>
```

### Color set

A switch without color is black.

```jsx
<SwitchField :value="true"/>
```

But as always, switches can be colored with any color from the set provided by
CC Vocabulary. Sometimes, black doesn't indicate on.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField :value="true" color="blue"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField :value="true" color="green"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField :value="true" color="magenta"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField :value="true" color="olive"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField :value="true" color="orange"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField :value="true" color="purple"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField :value="true" color="red"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField :value="true" color="sand"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField :value="true" color="yellow"/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <SwitchField :value="true" color="blue" shade="light"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <SwitchField :value="true" color="blue"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <SwitchField :value="true" color="blue" shade="dark"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <SwitchField :value="true" color="blue" shade="darker"/>
  </GridCell>
</Grid>
```

On a dark or non-white background, use the inverted form of the switch.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField :value="true" is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField color="magenta" :value="true" is-inverted/>
  </GridCell>
</Grid>
```

### Size set

Switches come in all sizes, from small to mega.

```jsx { "props": { "className": "contain-content" } }
<SwitchField :value="true" color="purple" size="small"/><br/><br/>
<SwitchField :value="true" color="purple"/><br/><br/>
<SwitchField :value="true" color="purple" size="big"/><br/><br/>
<SwitchField :value="true" color="purple" size="large"/><br/><br/>
<SwitchField :value="true" color="purple" size="huge"/><br/><br/>
<SwitchField :value="true" color="purple" size="enormous"/><br/><br/>
<SwitchField :value="true" color="purple" size="gigantic"/><br/><br/>
<SwitchField :value="true" color="purple" size="mega"/><br/><br/>
```

### Style set

A switch may indicate the state with on/off icons for clarity. If the standard
I and O don't meet your expectations, you can supply the off and on icons 
yourself.

```jsx
<SwitchField
  color="blue" 
  size="huge" 
  :value="true"
  is-labelled/>
<SwitchField
  color="blue" 
  size="huge"
  :value="true"
  :iconSet="['times', 'check']"
  is-labelled/>
```

### Indication set

A switch can indicate the nature of the consequences if flipped.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField indication="positive"/> Save all life
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField indication="probably"/> Thanos
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField indication="negative"/> End all life
  </GridCell>
</Grid>
```

A special kind of conditional indication has also been provided.

```jsx
<SwitchField indication="conditional"/>
```

### State set

A switch may be disabled to prevent input altogether.

```jsx
<SwitchField color="blue" :value="true" is-disabled/>
```

A switch may be made read-only to prevent input while preserving readability.

```jsx
<SwitchField color="blue" :value="true" is-read-only/>
```
