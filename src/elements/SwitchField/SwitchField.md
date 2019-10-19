A switch looks like this.

```jsx
<SwitchField
  color="orange"
  size="large"
  :value="true"
  is-labelled/>
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
    <SwitchField
      color="blue"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField
      color="green"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField
      color="magenta"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField
      color="olive"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField
      color="orange"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField
      color="purple"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField
      color="red"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField
      color="sand"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <SwitchField
      color="yellow"
      :value="true"/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <SwitchField
       color="blue"
       shade="light"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <SwitchField
       color="blue"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <SwitchField
       color="blue"
       shade="dark"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <SwitchField
       color="blue"
       shade="darker"
      :value="true"/>
  </GridCell>
</Grid>
```

On a dark or non-white background, use the inverted form of the switch.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      :value="true"
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      color="magenta"
      :value="true"
      is-inverted/>
  </GridCell>
</Grid>
```

### Size set

Switches come in all sizes, from small to mega.

```jsx
<SwitchField
  color="purple"
  size="small"
  :value="true"/>
<br/><br/>
<SwitchField
  color="purple"
  :value="true"/>
<br/><br/>
<SwitchField
  color="purple"
  size="big"
  :value="true"/>
<br/><br/>
<SwitchField
  color="purple"
  size="large"
  :value="true"/>
<br/><br/>
<SwitchField
  color="purple"
  size="huge"
  :value="true"/>
<br/><br/>
<SwitchField
  color="purple"
  size="enormous"
  :value="true"/>
<br/><br/>
<SwitchField
  color="purple"
  size="gigantic"
  :value="true"/>
<br/><br/>
<SwitchField
  color="purple"
  size="mega"
  :value="true"/>
```

### Style set

A switch field can be rounded to be more compatible with curvy layouts. Even
more rounded is the pill shape. It is in complete contrast to the sharp edged CC
design but looks really good.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      color="blue"
      roundness="slight"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      color="blue"
      roundness="complete"
      :value="true"/>
  </GridCell>
</Grid>
```

The switch field can be defined so that it does not attract attention or it can 
defined to actively deny it. This ensures that other content on the page gets
the prominence it deserves.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      color="magenta"
      simplicity="slight"
      :value="true"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      color="magenta"
      simplicity="extreme"
      :value="true"/>
  </GridCell>
</Grid>
```

### Add-on set

A switch may indicate the state with on/off icons for clarity. If the standard
I and O don't meet your expectations, you can supply the off and on icons 
yourself.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      color="red" 
      size="huge" 
      :value="true"
      is-labelled/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <SwitchField
      color="red" 
      size="huge"
      :value="true"
      :iconSet="['times', 'check']"
      is-labelled/>
  </GridCell>
</Grid>
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
<SwitchField
  color="blue"
  :value="true"
  is-disabled/>
```

A switch may be made read-only to prevent input while preserving readability.

```jsx
<SwitchField
  color="blue"
  :value="true"
  is-read-only/>
```
