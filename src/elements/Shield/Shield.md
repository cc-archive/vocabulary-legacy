A set of shields look like this.

```jsx
<Shield
  color="orange"
  label="CC"
  message="vocabulary"/>
<Shield
  color="green" shade="dark"
  label="Build"
  message="passing"/>
<Shield
  color="blue"
  label="License"
  message="MIT"/>
```

### Color set

A shield without any given color is grey.

```jsx
<Shield
  label="Color"
  message="Grey"/> 
```

The message part of the shield can be colored with any color from the set
provided by CC Vocabulary. No one likes grey.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield
      color="blue"
      label="Color"
      message="Blue"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield
      color="green"
      label="Color"
      message="Green"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield
      color="magenta"
      label="Color"
      message="Magenta"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield
      color="olive"
      label="Color"
      message="Olive"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield
      color="orange"
      label="Color"
      message="Orange"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield
      color="purple"
      label="Color"
      message="Purple"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield
      color="red"
      label="Color"
      message="Red"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield
      color="sand"
      label="Color"
      message="Sand"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Shield
      color="yellow"
      label="Color"
      message="Yellow"/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Shield
      color="blue"
      shade="light"
      label="Shade"
      message="Light" />
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Shield
      color="blue"
      label="Shade"
      message="Default" />
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Shield
      color="blue"
      shade="dark"
      label="Shade"
      message="Dark" />
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Shield
      color="blue"
      shade="darker"
      label="Shade"
      message="Darker" />
  </GridCell>
</Grid>
```

On a dark or non-white background, use the inverted type of shield.

```jsx { "props": { "className": "dark-background" } }
<Shield
  label="Dark?"
  message="Inverted"
  is-inverted/>
<br/><br/>
<Shield
  color="magenta"
  label="Dark?"
  message="Inverted"
  is-inverted/>
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

A shield can be rounded slightly to fit in better with curvy layouts. And you
can go against the CC design aesthetic and make it completely rounded.

```jsx
<Shield
  color="blue"
  label="Roundness"
  message="Slight"
  roundness="slight"/>
<br/><br/>
<Shield
  color="blue"
  label="Roundness"
  message="Complete"
  roundness="complete"/>
```  

A shield can be made slightly simple version, which is not too much prominent
or extremely simple, which is even less eye-catching.

```jsx
<Shield
  color="magenta"
  label="Simplicity"
  message="Slight"
  simplicity="slight"/>
<br/><br/>
<Shield
  color="magenta"
  label="Simplicity"
  message="Extreme"
  simplicity="extreme"/>
```  


### Size set

Shields come in all sizes.

```jsx
<Shield
  color="purple"
  size="small"
  label="Size"
  message="Level 1"/>
<br/><br/>
<Shield
  color="purple"
  label="Size"
  message="Level 2"/>
<br/><br/>
<Shield
  color="purple"
  size="big"
  label="Size"
  message="Level 3"/>
<br/><br/>
<Shield
  color="purple"
  size="large"
  label="Size"
  message="Level 4"/>
<br/><br/>
<Shield
  color="purple"
  size="huge"
  label="Size"
  message="Level 5"/>
<br/><br/>
<Shield
  color="purple"
  size="enormous"
  label="Size"
  message="Level 6"/>
<br/><br/>
<Shield
  color="purple"
  size="gigantic"
  label="Size"
  message="Level 7"/>
<br/><br/>
<Shield
  color="purple"
  size="mega"
  label="Size"
  message="Level 8"/>
```

### Add-on set

A label accepts strings for the label and the message via the `label` and 
`message` props.

```jsx
<Shield
  color="red"
  label="Customisation"
  message="None"/>
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
  <SwitchField 
    v-model="one"
    color="blue"/>
   Test one
</Paragraph>
<Paragraph>
  <SwitchField 
    v-model="two"
    color="blue"/>
   Test two
</Paragraph>
<br/>
<Shield 
  :indication="one & two ? 'positive' : one || two ? 'probably' : 'negative'"
  label="Tests"
  :message="one & two ? 'passing' : one || two ? 'partial' : 'failing'"/>
```
