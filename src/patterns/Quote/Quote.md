Here is a quote. Wise, isn't it?

```jsx
let source = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Douglas_adams_portrait_cropped.jpg';
let divStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};
let imageStyle = {
  marginRight: '1em'
};

<div :style="divStyle">
  <ImageView
    :style="imageStyle"
    :source="source"
    alternateText="Douglas Adams"
    size="large"
    is-centered/>
  <Quote
    color="orange"
    attribution="Douglas Adams">
    A common mistake that people make when trying<br/>
    to design something completely foolproof is<br/>
    to underestimate the ingenuity of complete fools.
  </Quote>
</div>
```

### Style set

A quote can be lined if you like to separate it from the content around it.

```jsx
let source = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Douglas_adams_portrait_cropped.jpg';
let divStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};
let imageStyle = {
  marginRight: '1em'
};

<div :style="divStyle">
  <ImageView
    :style="imageStyle"
    :source="source"
    alternateText="Douglas Adams"
    size="large"
    is-centered/>
  <Quote
    color="green"
    attribution="Douglas Adams"
    is-lined>
    A common mistake that people make when trying<br/>
    to design something completely foolproof is<br/>
    to underestimate the ingenuity of complete fools.
  </Quote>
</div>
```

When there are multiple quotes side by side, they can be analected to match
the heights of their companions.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Quote
      color="green"
      attribution="The Bhagvad Gita"
      is-lined
      is-analected>
      Delusion arises from anger.<br/>
      The mind is bewildered by delusion.<br/>
      Reasoning is destroyed when the mind is bewildered.<br/>
      One falls down when reasoning is destroyed.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Quote
      color="green"
      attribution="The Bhagvad Gita"
      is-lined
      is-analected>
      Set thy heart upon thy work but never its reward.
    </Quote>
  </GridCell>
</Grid>
```

### Color set

A quote without a defined color set is black.

```jsx
<Quote
  attribution="Douglas Adams"
  is-lined>
  A common mistake that people make when trying<br/>
  to design something completely foolproof is<br/>
  to underestimate the ingenuity of complete fools.
</Quote>
```

As is the case with all of Vocabulary, definitions can be colored using any
color from the set provided by CC Vocabulary. Black looks so plain!

Also you may use one of the four shades, namely `lighter`, `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFillDrip, faSwatchbook } from '@fortawesome/free-solid-svg-icons'

library.add(faFillDrip, faSwatchbook);

let color = '';
let colorOptions = [
  { value: '', text: 'None' },
  { value: 'tomato', text: 'Tomato' },
  { value: 'gold', text: 'Gold' },
  { value: 'green', text: 'Green' },
  { value: 'blue', text: 'Blue' },
  { value: 'orange', text: 'Orange' },
  { value: 'turquoise', text: 'Turquoise' },
];

let shade = '';
let shadeOptions = [
  { value: '', text: 'Default' },
  { value: 'lighter', text: 'Lighter' },
  { value: 'light', text: 'Light' },
  { value: 'normal', text: 'Normal' },
  { value: 'dark', text: 'Dark' },
  { value: 'darker', text: 'Darker' }
];

let quotes = {
  '': {
    attribution: 'Douglas Adams',
    quote: 'A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.'
  },
  blue: {
    attribution: 'Siouxsie Sioux',
    quote: 'I love the ocean. I\'ve always liked the blue, so tranquil and peaceful and gliding. And the fear of it.'
  },
  green: {
    attribution: 'Martin Luther',
    quote: 'For in the true nature of things, if we rightly consider, every green tree is far more glorious than if it were made of gold and silver.'
  },
  orange: {
    attribution: 'Vincent Van Gogh',
    quote: 'There is no blue without yellow and without orange.'
  },
  tomato: {
    attribution: 'Thomas Holcroft',
    quote: 'Love and a red rose can\'t be hid.'
  },
  gold: {
    attribution: 'Michy Batshuayi',
    quote: 'I love black and yellow. Black and yellow is Batman; black and yellow is Spongebob!'
  },
  turquoise: {
    attribution: 'Christian Dior',
    quote: 'The tones of grey, pale turquoise and pink will prevail.'
  }
}

<SelectField
  v-model="color"
  :color="color ? color : null"
  icon="fill-drip"
  :option-list="colorOptions"/>
<SelectField
  v-model="shade"
  :color="color ? color : null"
  :shade="shade ? shade : null"
  icon="swatchbook"
  :option-list="shadeOptions"
  :is-disabled="color === ''"/>
<br/>
<br/>
<Quote
  :color="color ? color : null"
  :shade="shade ? shade : null"
  :attribution="quotes[color].attribution"
  is-lined
  is-analected>
  <span>{{ quotes[color].quote }}</span>
</Quote>
```

For placement on dark or non-white backgrounds, use the inverted version.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Quote
      attribution="Hellen Keller"
      is-lined
      is-inverted>
      Walking with a friend in the <b>dark</b> is better than walking alone in
      the light.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Quote
      color="turqoise"
      attribution="Robert Frost"
      is-lined
      is-inverted>
      The woods are lovely, <b>dark</b> and deep. But I have promises to keep,
      and miles to go before I sleep.
    </Quote>
  </GridCell>
</Grid>
```
