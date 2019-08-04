A set of shields look like this.

```jsx
<Shield label="CC" message="vocabulary" color="orange"/>
<Shield label="Build" message="passing" color="green" shade="dark"/>
<Shield label="License" message="MIT" color="blue"/>
```

### Color set

A shield without any given color is grey.

```jsx
<Shield label="Color" message="Grey"/> 
```

The message part of the shield can be colored with any color from the set
provided by CC Vocabulary. No one likes grey.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield label="Color" message="Blue" color="blue"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield label="Color" message="Green" color="green"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield label="Color" message="Magenta" color="magenta"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield label="Color" message="Olive" color="olive"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield label="Color" message="Orange" color="orange"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield label="Color" message="Purple" color="purple"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield label="Color" message="Red" color="red"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield label="Color" message="Sand" color="sand"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield label="Color" message="Yellow" color="yellow"/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Shield label="Shade" message="Light" color="blue" shade="light"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Shield label="Shade" message="Default" color="blue"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Shield label="Shade" message="Dark" color="blue" shade="dark"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Shield label="Shade" message="Darker" color="blue" shade="darker"/>
  </GridCell>
</Grid>
```

On a dark or non-white background, use the inverted type of shield.

```jsx { "props": { "className": "dark-background" } }
<Shield label="Dark?" message="Inverted" is-inverted/>
<br/><br/>
<Shield color="magenta" label="Dark?" message="Inverted" is-inverted/>
```

### Style set

Shield allows both label and message to be manipulated in terms of text case. By
default labels are lowercased whereas messages are not. This can be changed if
needed or desired.

```jsx
<Shield
  color="orange"
  :lowercase-set="[false, true]"
  label="Creative Commons"
  message="When we share, everyone wins"/>
```

### Size set

Shields come in all sizes.

```jsx { "props": { "className": "contain-content" } }
<Shield label="Size" message="Level 1" color="purple" size="small"/>
<br/><br/>
<Shield label="Size" message="Level 2" color="purple"/>
<br/><br/>
<Shield label="Size" message="Level 3" color="purple" size="big"/>
<br/><br/>
<Shield label="Size" message="Level 4" color="purple" size="large"/>
<br/><br/>
<Shield label="Size" message="Level 5" color="purple" size="huge"/>
<br/><br/>
<Shield label="Size" message="Level 6" color="purple" size="enormous"/>
<br/><br/>
<Shield label="Size" message="Level 7" color="purple" size="gigantic"/>
<br/><br/>
<Shield label="Size" message="Level 8" color="purple" size="mega"/>
```

### Add-on set

A label accepts strings for the label and the message via the `label` and 
`message` props.

```jsx
<Shield color="red" label="Customisation" message="None"/>
``` 

But there are times when you just want to control the formatting of the text or
want some additional stuff to go in those sections.

```jsx
<Shield color="green">
  <template #label>
     <LicenseIconography :icon-list="['', 'by']"/>
  </template>
  <strong>Creative Commons</strong> Attribution
</Shield>
```

### Indication set

A shield can indicate the nature of the message.

```jsx
let one = true;
let two = true;

<Paragraph>
  <SwitchField color="blue" v-model="one"/> Test one
</Paragraph>
<Paragraph>
  <SwitchField color="blue" v-model="two"/> Test two
</Paragraph>
<br/>
<Shield 
  :indication="one & two ? 'positive' : one || two ? 'probably' : 'negative'"
  label="Tests"
  :message="one & two ? 'passing' : one || two ? 'partial' : 'failing'"/>
```
