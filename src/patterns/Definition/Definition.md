A definition looks like this. Note how Adobe's Source Sans Pro gives way to the
elegant [Libre Baskerville by Impallari
Type](https://fonts.google.com/specimen/Libre+Baskerville). Look at the `fi`
ligature and tell me you are not impressed.

```jsx { "props": { "className": "i18n-enabled" } }
<Definition
  word="definition"
  pronunciation="dɛfɪˈnɪʃ(ə)n"
  part-of-speech="n.">
  <ul>
    <li>
      a statement of the exact meaning of a word, especially in a dictionary
    </li>
  </ul>
  <template #seeAlso>
    <a href="#">dictionary</a>
  </template>
</Definition>
```

Interpuncts at syllable breaks look really awesome, which is why they made their
way into our wordmark.

```jsx { "props": { "className": "dark-background" } }
<Definition
  word="vo·cab·u·lar·y"
  pronunciation="və(ʊ)ˈkabjʊləri"
  part-of-speech="noun">
  <ul>
    <li class="unimportant">
      the body of words used in a particular language
    </li>
    <li>
      a cohesive design system to unite the web facing Creative Commons 
    </li>
  </ul>
</Definition>
```

### Color set

A definition without a specified color is black.

```jsx
<Definition
  word="black"
  pronunciation="blak"
  part-of-speech="adj.">
  of the very darkest colour owing to the absence of or complete absorption of light
</Definition>
```

Like other components, definitions can be colored using any color from the set
provided by CC Vocabulary. Unlike other components, definitions look terrible in
colors other than black. Also you may use one of the three shades, namely `light`,
`dark` and `darker`, to accentuate the color.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFillDrip, faSwatchbook } from '@fortawesome/free-solid-svg-icons'

library.add(faFillDrip, faSwatchbook);

let color = '';
let colorOptions = [
  { value: '', text: 'None' },
  { value: 'blue', text: 'Blue' },
  { value: 'green', text: 'Green' },
  { value: 'magenta', text: 'Magenta' },
  { value: 'olive', text: 'Olive' },
  { value: 'orange', text: 'Orange' },
  { value: 'purple', text: 'Purple' },
  { value: 'red', text: 'Red' },
  { value: 'sand', text: 'Sand' },
  { value: 'yellow', text: 'Yellow' }
];

let shade = '';
let shadeOptions = [
  { value: 'light', text: 'Light' },
  { value: '', text: 'Default' },
  { value: 'dark', text: 'Dark' },
  { value: 'darker', text: 'Darker' }
];

let definitions = {
  '': {
    word: 'black',
    pronunciation: 'blak',
    definition: 'of the very darkest colour owing to the absence of or complete absorption of light'
  },
  blue: {
    word: 'blue',
    pronunciation: 'bluː',
    definition: 'of a colour intermediate between green and violet, as of the sky or sea on a sunny day'
  },
  green: {
    word: 'green',
    pronunciation: 'ɡriːn',
    definition: 'of the colour between blue and yellow in the spectrum, as of grass or emeralds'
  },
  magenta: {
    word: 'magenta',
    pronunciation: 'məˈdʒɛntə',
    definition: 'a light mauvish-crimson which is one of the primary subtractive colours, complementary to green'
  },
  olive: {
    word: 'olive',
    pronunciation: 'ɒlɪv',
    definition: 'greyish-green'
  },
  orange: {
    word: 'orange',
    pronunciation: 'ɒrɪn(d)ʒ',
    definition: 'reddish yellow'
  },
  purple: {
    word: 'purple',
    pronunciation: 'ˈpəːp(ə)l',
    definition: 'of a colour intermediate between red and blue'
  },
  red: {
    word: 'red',
    pronunciation: 'rɛd',
    definition: 'of a colour at the end of the spectrum next to orange and opposite violet, as of blood, fire, or rubies'
  },
  sand: {
    word: 'sand',
    pronunciation: 'sand',
    definition: 'a light yellow-brown colour like that of sand'
  },
  yellow: {
    word: 'yellow',
    pronunciation: 'ˈjɛləʊ',
    definition: 'of the colour between green and orange in the spectrum, a primary subtractive colour complementary to blue, as of ripe lemons or egg yolks'
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
<Definition
  :color="color ? color : null"
  :shade="shade ? shade : null"
  :word="definitions[color].word"
  :pronunciation="definitions[color].pronunciation"
  part-of-speech="adj.">
  {{ definitions[color].definition }}
</Definition>
```

### Add-on set

The word being defined can be passed either via the prop `word` or if markup is
involved, via the slot `word`. 

The contents of the dictionary definition are provided using the default slot.
Definitions must be passed as `ul` > `li`. If a particular definition is to be
marked as unimportant, apply the class `unimportant` to the list item.

This might also be an excellent time to point out that Libre Baskerville has
a special italic style that will make you go weak at the knees.

```jsx { "props": { "className": "dark-background" } }
<Definition
  pronunciation="dɛfɪˈnɪʃ(ə)n"
  part-of-speech="n.">
  <template #word>
    <i>definition</i>
  </template>
  <ul>
    <li>
      a statement of the exact meaning of a word, especially in a dictionary
    </li>
    <li class="unimportant">
      the degree of distinctness in outline of an object, image, or sound
    </li>
  </ul>
</Definition>
```

```jsx
<Definition
  pronunciation="və(ʊ)ˈkabjʊləri"
  part-of-speech="n.">
  <template #word>
    <i>vo·cab·u·lar·y</i>
  </template>
  <ul>
    <li>
      the body of words used in a particular language
    </li>
    <li class="unimportant">
      <em>the vocabulary wordmark may not be italicised when referring to the
      CC Vocabulary brand identity</em>
    </li>
  </ul>
</Definition>
```
