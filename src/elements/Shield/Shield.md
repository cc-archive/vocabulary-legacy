## Examples

A set of shields look like this.

```jsx
<Shield label="CC" message="vocabulary" color="orange"/>
<Shield label="Build" message="passing" color="green" shade="dark"/>
<Shield label="License" message="MIT" color="blue"/>
```

### Color set

A shield without color is grey.

```jsx
<Shield label="Color" message="grey"/> 
```

The message part of the shield can be colored with any color from the set
provided by CC Vocabulary. No one likes grey.

```jsx
<Shield label="Color" message="blue" color="blue"/>
<br/><br/>
<Shield label="Color" message="green" color="green"/>
<br/><br/>
<Shield label="Color" message="magenta" color="magenta"/>
<br/><br/>
<Shield label="Color" message="olive" color="olive"/>
<br/><br/>
<Shield label="Color" message="orange" color="orange"/>
<br/><br/>
<Shield label="Color" message="purple" color="purple"/>
<br/><br/>
<Shield label="Color" message="red" color="red"/>
<br/><br/>
<Shield label="Color" message="sand" color="sand"/>
<br/><br/>
<Shield label="Color" message="yellow" color="yellow"/>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Shield label="Shade" message="light" color="blue" shade="light"/>
<br/><br/>
<Shield label="Shade" message="default" color="blue"/>
<br/><br/>
<Shield label="Shade" message="dark" color="blue" shade="dark"/>
<br/><br/>
<Shield label="Shade" message="darker" color="blue" shade="darker"/>
```

### Size set

Shields come in all sizes.

```jsx { "props": { "className": "contain-content" } }
<Shield label="Label" message="message" color="purple" size="small"/>
<br/><br/>
<Shield label="Label" message="message" color="purple"/>
<br/><br/>
<Shield label="Label" message="message" color="purple" size="big"/>
<br/><br/>
<Shield label="Label" message="message" color="purple" size="large"/>
<br/><br/>
<Shield label="Label" message="message" color="purple" size="huge"/>
<br/><br/>
<Shield label="Label" message="message" color="purple" size="enormous"/>
<br/><br/>
<Shield label="Label" message="message" color="purple" size="gigantic"/>
<br/><br/>
<Shield label="Label" message="message" color="purple" size="mega"/>
```
