## Examples

A rating component looks like this.

```jsx
<Rating
  color="yellow"
  :value="4"/>
```

### Color set

A rating bar without a color specified is black.

```jsx
<Rating :value="3">
```

Ratings can be colored using any color from the set provided by CC Vocabulary.
A black ratings bar, come on!

```jsx
<Rating :value="1" :max="9" color="blue"/><br/><br/>
<Rating :value="2" :max="9" color="green"/><br/><br/>
<Rating :value="3" :max="9" color="magenta"/><br/><br/>
<Rating :value="4" :max="9" color="olive"/><br/><br/>
<Rating :value="5" :max="9" color="orange"/><br/><br/>
<Rating :value="6" :max="9" color="purple"/><br/><br/>
<Rating :value="7" :max="9" color="red"/><br/><br/>
<Rating :value="8" :max="9" color="sand"/><br/><br/>
<Rating :value="9" :max="9" color="yellow"/>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Rating color="blue" :value="1" :max="4" shade="light"/><br/><br/>
<Rating color="blue" :value="2" :max="4"/><br/><br/>
<Rating color="blue" :value="3" :max="4" shade="dark"/><br/><br/>
<Rating color="blue" :value="4" :max="4" shade="darker"/>
```

### Style set

A rating can be set to toggleable in which case, instead of the dot, selecting
the current rating will clear it altogether.

```jsx
<Rating
  color="yellow"
  :value="3"
  is-toggleable/>
```

You can increase the maximum rating available on the bar.

```jsx
<Rating
  color="yellow"
  :value="5"
  :max="10"/>
```

You can use any icon as your rating. The default is a star, but it could be 
anything.

```jsx
<Rating
  icon="heart"
  color="red"
  :value="3"/>
```

### Indication set

A rating can indicate the contextual nature of its value.

```jsx
let value = 3;

<Rating
  v-model="value"
  :indication="value >= 4 ? 'positive' : 'negative'"/>
```
