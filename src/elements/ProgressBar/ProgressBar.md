Depending on whether completion value is known, progress bars look like this.

```jsx
<ProgressBar
  color="orange"
  icon="hourglass-half"
  :value="20"  
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="orange"
  icon="hourglass-half"/>
```

### Color set

A progress bar without the color specified indicates progress in black.

```jsx
<ProgressBar :value="20"/>
```

You already know that the progress bar can be colored using any color from the 
set provided by CC Vocabulary. Black is no fit color for a progress bar. 

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <ProgressBar
      color="blue"
      :value="20"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <ProgressBar
      color="green"
      :value="20"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <ProgressBar
      color="magenta"
      :value="20"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <ProgressBar
      color="olive"
      :value="20"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <ProgressBar
      color="orange"
      :value="20"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <ProgressBar
      color="purple"
      :value="20"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <ProgressBar
      color="red"
      :value="20"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <ProgressBar
      color="sand"
      :value="20"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <ProgressBar
      color="yellow"
      :value="20"/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <ProgressBar 
      color="blue"
      shade="light"
      :value="20"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <ProgressBar 
      color="blue"
      :value="40"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <ProgressBar 
      color="blue"
      shade="dark"
      :value="60"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <ProgressBar 
      color="blue"
      shade="darker"
      :value="80"/>
  </GridCell>
</GridCell>
```

On dark and non-white backgrounds, use the inverted option.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :spanSet="[12, 6, 6, 6, 6]">
    <ProgressBar
      :value="20" 
      is-percent-visible 
      is-inverted/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 6, 6, 6]">
    <ProgressBar is-inverted/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 6, 6, 6]">
    <ProgressBar
      color="magenta"
      :value="20" 
      is-percent-visible 
      is-inverted/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 6, 6, 6]">
    <ProgressBar
      color="magenta"
      is-inverted/>
  </GridCell>
</Grid>
```

### Add-on set

A progress bar may include an icon as well as show the percentage value adjacent
to it.

```jsx
<ProgressBar 
  color="red"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
```

But if an icon and the percent completion don't meet your requirements, or your
demands, you can swap them out for things that do.

```jsx
<ProgressBar 
  color="green" 
  :value="20">
  <template #leftAddons>
    <strong>:-(</strong>
  </template>
  <template #rightAddons>
    <strong>:-)</strong>
  </template>
</ProgressBar>
```

### Size set

Progress bars come in all sizes, from small to mega.

```jsx
<ProgressBar
  color="purple"
  size="small"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="purple"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="purple"
  size="big"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="purple"
  size="large"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="purple"
  size="huge"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="purple"
  size="enormous"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="purple"
  size="gigantic"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="purple"
  size="mega"
  icon="hourglass-half"
  :value="20"
  is-percent-visible/>
```

### Style set

A progress bar may be rounded slightly to fit in better amongst curvy layouts.
Or it can be taken to an extreme and made completely round, completely
antithetical to the traditional CC design aesthetic.

```jsx
<ProgressBar
  color="blue"
  icon="hourglass-half"
  :value="20"
  roundness="slight"
  is-percent-visible/>
<br/><br/>
<ProgressBar
  color="blue"
  icon="hourglass-half"
  :value="20"
  roundness="complete"
  is-percent-visible/>
```

### Indication set

A progress bar may indicate the positive or negative connotation attached to the
percentage completion.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faMinus);

let value = 50;
<ProgressBar 
  icon="hourglass-half"
  :value="parseInt(value)"
  :indication="value >= 60 ? 'positive' : value <= 40 ? 'negative' : 'probably'"
  is-percent-visible/>
<span>&nbsp;&nbsp;</span>
<Button
  icon="plus"
  indication="positive"
  @click="value += 10; if (value > 100) value = 100;">
  10%
</Button>
<Button 
  icon="minus" 
  indication="negative" 
  @click="value -= 10; if (value < 0) value = 0;">
  10%
</Button>
```
