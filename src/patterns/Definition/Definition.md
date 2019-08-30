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
colors other than black. 

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card
      color="blue"
      is-decked>
      <Definition
        color="blue"
        word="blue"
        pronunciation="bluː"
        part-of-speech="adj.">
        of a colour intermediate between green and violet, as of the sky or sea on a sunny day
      </Definition>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card
      color="green"
      is-decked>
      <Definition
        color="green"
        word="green"
        pronunciation="ɡriːn"
        part-of-speech="adj.">
        of the colour between blue and yellow in the spectrum, as of grass or emeralds
      </Definition>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card
      color="magenta"
      is-decked>
      <Definition
        color="magenta"
        word="magenta"
        pronunciation="məˈdʒɛntə"
        part-of-speech="adj.">
        a light mauvish-crimson which is one of the primary subtractive colours, complementary to green
      </Definition>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card
      color="olive"
      is-decked>
      <Definition
        color="olive"
        word="olive"
        pronunciation="ˈɒlɪv"
        part-of-speech="adj.">
        greyish-green
      </Definition>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card
      color="orange"
      is-decked>
      <Definition
        color="orange"
        word="orange"
        pronunciation="ˈɒrɪn(d)ʒ"
        part-of-speech="adj.">
        reddish yellow
      </Definition>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card
      color="purple"
      is-decked>
      <Definition
        color="purple"
        word="purple"
        pronunciation="ˈpəːp(ə)l"
        part-of-speech="adj.">
        of a colour intermediate between red and blue
      </Definition>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card
      color="red"
      is-decked>
      <Definition
        color="red"
        word="red"
        pronunciation="rɛd"
        part-of-speech="adj.">
        of a colour at the end of the spectrum next to orange and opposite violet, as of blood, fire, or rubies
      </Definition>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card
      color="sand"
      is-decked>
      <Definition
        color="sand"
        word="sand"
        pronunciation="sand"
        part-of-speech="adj.">
        a light yellow-brown colour like that of sand
      </Definition>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card
      color="yellow"
      is-decked>
      <Definition
        color="yellow"
        word="yellow"
        pronunciation="ˈjɛləʊ"
        part-of-speech="adj.">
        of the colour between green and orange in the spectrum, a primary subtractive colour complementary to blue, as of ripe lemons or egg yolks
      </Definition>
    </Card>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card 
      color="blue"
      shade="light">
      <Definition
        color="blue"
        shade="light"
        word="blue"
        pronunciation="bluː"
        part-of-speech="adj.">
        of a colour intermediate between green and violet, as of the sky or sea on a sunny day
      </Definition>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card color="blue">
      <Definition
        color="blue"
        word="blue"
        pronunciation="bluː"
        part-of-speech="adj.">
        of a colour intermediate between green and violet, as of the sky or sea on a sunny day
      </Definition>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card
      color="blue"
      shade="dark">
      <Definition
        color="blue"
        shade="dark"
        word="blue"
        pronunciation="bluː"
        part-of-speech="adj.">
        of a colour intermediate between green and violet, as of the sky or sea on a sunny day
      </Definition>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Card
      color="blue"
      shade="darker">
      <Definition
        color="blue"
        shade="darker"
        word="blue"
        pronunciation="bluː"
        part-of-speech="adj.">
        of a colour intermediate between green and violet, as of the sky or sea on a sunny day
      </Definition>
    </Card>
  </GridCell>
</Grid>
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
