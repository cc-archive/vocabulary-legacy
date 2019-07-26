## Examples

A switch looks like this.

```jsx
<SwitchField color="orange" size="large" v-model="value"/>
```

### Color set

A switch without color is black.

```jsx
<SwitchField :value="true">
```

But as always, switches can be colored with any color from the set provided by
CC Vocabulary. Sometimes, black doesn't indicate on.

```jsx
<SwitchField :value="true" color="blue"/><br/><br/>
<SwitchField :value="true" color="green"/><br/><br/>
<SwitchField :value="true" color="magenta"/><br/><br/>
<SwitchField :value="true" color="olive"/><br/><br/>
<SwitchField :value="true" color="orange"/><br/><br/>
<SwitchField :value="true" color="purple"/><br/><br/>
<SwitchField :value="true" color="red"/><br/><br/>
<SwitchField :value="true" color="sand"/><br/><br/>
<SwitchField :value="true" color="yellow"/>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<SwitchField :value="true" color="blue" shade="light"/><br/><br/>
<SwitchField :value="true" color="blue"/><br/><br/>
<SwitchField :value="true" color="blue" shade="dark"/><br/><br/>
<SwitchField :value="true" color="blue" shade="darker"/>
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

### Indication set

A switch can indicate the nature of the consequences if flipped.

```jsx
<SwitchField indication="positive"/>
<SwitchField indication="negative"/>
```

### State set

A switch may be disabled to prevent input altogether.

```jsx
<SwitchField color="blue" :value="true" is-disabled/>
```
