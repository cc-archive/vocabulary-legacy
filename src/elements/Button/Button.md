## Examples

Here's a sample button. Yes, you want to click it. That's the point.

```jsx
<Button color="orange" is-basic>
  <template v-slot:addons>
    <LicenseIconography :iconList="['', 'by']"/>
  </template>
  Assign CC BY license
</Button>
```

### Color set

A button without color is grey.

```jsx
<Button>Click me</Button>
```

As is tradition, buttons can be colored with any color from the set provided by
CC Vocabulary. We know you hate that grey with your guts.

```jsx
<Button color="blue">Click me</Button>
<br/><br/>
<Button color="green">Click me</Button>
<br/><br/>
<Button color="magenta">Click me</Button>
<br/><br/>
<Button color="olive">Click me</Button>
<br/><br/>
<Button color="orange">Click me</Button>
<br/><br/>
<Button color="purple">Click me</Button>
<br/><br/>
<Button color="red">Click me</Button>
<br/><br/>
<Button color="sand">Click me</Button>
<br/><br/>
<Button color="yellow">Click me</Button>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Button color="blue" shade="light">Click me</Button>
<br/><br/>
<Button color="blue">Click me</Button>
<br/><br/>
<Button color="blue" shade="dark">Click me</Button>
<br/><br/>
<Button color="blue" shade="darker">Click me</Button>
```

### Add-on set

A button can be paired with (or the content replaced with) an icon to act as a 
visual aid as to what it does. Note that the icon must be added to the 
FontAwesome library by the application.

```jsx
<Button color="magenta" icon="hand-point-up"/><br/><br/>
<Button color="magenta" icon="hand-point-up">Click me</Button>
```

If you'd like your own something there, you can override the add-on slot with 
something you like.

```jsx
<Button color="blue">
  <template v-slot:addons>
    <LicenseBadge license="by-sa"/>
  </template>
  Assign CC BY-SA license
</Button>
```

### Style set

A button can be rounded to fit in with more curvy layouts and UI components. 
Although supported, the use of this is highly unlikely given CC's love for 
sharp vertices and 90° angles. Looks good with pure icon buttons.

```jsx
<Button is-rounded color="red" icon="hand-point-up"/><br/><br/>
<Button is-rounded color="red">Click me</Button><br/><br/>
<Button is-rounded color="red" icon="hand-point-up">Click me</Button>
```

A button can be defined to not attract attention, unless given attention via 
means of a hover.

```jsx
<Button is-basic color="green" icon="hand-point-up"/><br/><br/>
<Button is-basic color="green">Click me</Button><br/><br/>
<Button is-basic color="green" icon="hand-point-up">Click me</Button>
```

Styles can be combined.

### Size set

Buttons come in all sizes, from small to mega.

```jsx { "props": { "className": "contain-content" } }
<Button color="purple" size="small">Click me</Button>
<br/><br/>
<Button color="purple">Click me</Button>
<br/><br/>
<Button color="purple" size="big">Click me</Button>
<br/><br/>
<Button color="purple" size="large">Click me</Button>
<br/><br/>
<Button color="purple" size="huge">Click me</Button>
<br/><br/>
<Button color="purple" size="enormous">Click me</Button>
<br/><br/>
<Button color="purple" size="gigantic">Click me</Button>
<br/><br/>
<Button color="purple" size="mega">Click me</Button>
```

### Indication set

A button may indicate a negative or positive outcome. For example, in this case
clicking the button that calls itself dangerous will lead to much agony and 
unpleasantness.

```jsx
<Button indication="negative">I'm dangerous to click</Button>
<Button indication="positive">I'm safe to click</Button>
```

### State set

A button may be disabled to prevent input altogether.

```jsx
<Button is-disabled>Can't click me</Button>
```

### Attributes

All attributes that you would pass to a `button` tag can be passed to the 
`Button` component.

So a button may have a `name` and a `value`.

```jsx
<Button name="Name" value="Value">OK</Button>
```

The `type` attribute works as you would expect.

```jsx
<Button type="submit" indication="positive">Submit</Button>
<Button type="reset" indication="negative">Reset</Button>
```
