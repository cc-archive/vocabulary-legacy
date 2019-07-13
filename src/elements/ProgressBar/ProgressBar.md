## Examples

Depending on whether completion value is known, progress bars look like this.

```jsx { "props": { "className": "no-i18n" } }
<ProgressBar :value="20" color="orange" is-percent-visible/>
<br/><br/>
<ProgressBar color="orange"/>
```

### Color set

A progress bar without the color specified indicates progress in black.

```jsx { "props": { "className": "no-i18n" } }
<ProgressBar :value="20"/>
```

You already know that the progress bar can be colored using any color from the 
set provided by CC Vocabulary. Black is no fit color for a progress bar. 

```jsx { "props": { "className": "no-i18n" } }
<ProgressBar :value="20" color="blue"/>
<br/><br/>
<ProgressBar :value="20" color="green"/>
<br/><br/>
<ProgressBar :value="20" color="magenta"/>
<br/><br/>
<ProgressBar :value="20" color="olive"/>
<br/><br/>
<ProgressBar :value="20" color="orange"/>
<br/><br/>
<ProgressBar :value="20" color="purple"/>
<br/><br/>
<ProgressBar :value="20" color="red"/>
<br/><br/>
<ProgressBar :value="20" color="sand"/>
<br/><br/>
<ProgressBar :value="20" color="yellow"/>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx { "props": { "className": "no-i18n" } }
<ProgressBar :value="20" color="blue" shade="light"/>
<br/><br/>
<ProgressBar :value="20" color="blue"/>
<br/><br/>
<ProgressBar :value="20" color="blue" shade="dark"/>
<br/><br/>
<ProgressBar :value="20" color="blue" shade="darker"/>
```

On dark and non-white backgrounds, use the inverted option.

```jsx { "props": { "className": "no-i18n dark-background" } }
<ProgressBar :value="20" color="orange" is-percent-visible is-inverted/>
<br/><br/>
<ProgressBar color="orange" is-inverted/>
```

### Add-on set

A progress bar may show the percentage value adjacent to it.

```jsx { "props": { "className": "no-i18n" } }
<ProgressBar :value="20" :max="50" color="magenta" is-percent-visible/>
```

### Size set

Progress bars come in all sizes, from small to mega.

```jsx { "props": { "className": "no-i18n contain-content" } }
<ProgressBar :value="20" color="purple" size="small" is-percent-visible/>
<br/><br/>
<ProgressBar :value="20" color="purple" is-percent-visible/>
<br/><br/>
<ProgressBar :value="20" color="purple" size="big" is-percent-visible/>
<br/><br/>
<ProgressBar :value="20" color="purple" size="large" is-percent-visible/>
<br/><br/>
<ProgressBar :value="20" color="purple" size="huge" is-percent-visible/>
<br/><br/>
<ProgressBar :value="20" color="purple" size="enormous" is-percent-visible/>
<br/><br/>
<ProgressBar :value="20" color="purple" size="gigantic" is-percent-visible/>
<br/><br/>
<ProgressBar :value="20" color="purple" size="mega" is-percent-visible/>
```

### Indication set

A progress bar may indicate the positive or negative connotation attached to the
percentage completion.

```jsx { "props": { "className": "no-i18n contain-content" } }
let value = 20;
<InputField
  type="number"
  v-model="value"
  :iconSet="['keyboard', '']"
  :indication="value > 50 ? 'positive' : 'negative'">
</InputField>
<br/><br/>
<ProgressBar 
  :value="parseInt(value)"
  :indication="value > 50 ? 'positive': 'negative'"
  is-percent-visible/>
```
