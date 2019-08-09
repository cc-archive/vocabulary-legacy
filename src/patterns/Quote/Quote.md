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
    color="blue"
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
    color="blue"
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
      color="orange"
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
      color="magenta"
      attribution="The Bhagvad Gita"
      is-lined
      is-analected>
      Set thy heart upon thy work but never its reward.
    </Quote>
  </GridCell>
</Grid>
```

### Color set

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Quote
      color="blue"
      attribution="Siouxsie Sioux"
      is-lined
      is-analected>
      I love the ocean. I've always liked the <b>blue</b>, so tranquil and 
      peaceful and gliding. And the fear of it.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Quote
      color="green"
      attribution="Martin Luther"
      is-lined
      is-analected>
      For in the true nature of things, if we rightly consider, every 
      <b>green</b> tree is far more glorious than if it were made of gold and
      silver.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Quote
      color="magenta"
      attribution="Joni Mitchell"
      is-lined
      is-analected>
      I wanted <b>magenta</b> and turquoise and silver and gold.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Quote
      color="olive"
      attribution="Boris Johnson"
      is-lined
      is-analected>
      My chances of being PM are about as good as the chances of finding Elvis
      on Mars, or my being reincarnated as an <b>olive</b>.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Quote
      color="orange"
      attribution="Vincent Van Gogh"
      is-lined
      is-analected>
      There is no blue without yellow and without <b>orange</b>.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Quote
      color="purple"
      attribution="Alice Walker"
      is-lined
      is-analected>
      I think it pisses God off if you walk by the color <b>purple</b> in a
      field somewhere and don't notice it.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Quote
      color="red"
      attribution="Thomas Holcroft"
      is-lined
      is-analected>
      Love and a <b>red</b> rose can't be hid.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Quote
      color="sand"
      attribution="William Blake"
      is-lined
      is-analected>
      To see a world in a grain of <b>sand</b> and heaven in a wild flower,
      hold infinity in the palm of your hand and eternity in an hour.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Quote
      color="yellow"
      attribution="Michy Batshuayi"
      is-lined
      is-analected>
      I love black and <b>yellow</b>. Black and yellow is Batman; black and 
      yellow is Spongebob!
    </Quote>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 3]">
    <Quote
      color="blue"
      shade="light"
      attribution="Tory Burch"
      is-lined>
      I love blue in all its <b>shades</b> and textures. I wear navy like others 
      wear black, and I love the blue in flowers - cornflowers, delphiniums.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 3]">
    <Quote
      color="blue"
      attribution="Tory Burch"
      is-lined>
      I love blue in all its <b>shades</b> and textures. I wear navy like others 
      wear black, and I love the blue in flowers - cornflowers, delphiniums.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 3]">
    <Quote
      color="blue"
      shade="dark"
      attribution="Tory Burch"
      is-lined>
      I love blue in all its <b>shades</b> and textures. I wear navy like others 
      wear black, and I love the blue in flowers - cornflowers, delphiniums.
    </Quote>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 3]">
    <Quote
      color="blue"
      shade="darker"
      attribution="Tory Burch"
      is-lined>
      I love blue in all its <b>shades</b> and textures. I wear navy like others 
      wear black, and I love the blue in flowers - cornflowers, delphiniums.
    </Quote>
  </GridCell>
</Grid>
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
      color="magenta"
      attribution="Robert Frost"
      is-lined
      is-inverted>
      The woods are lovely, <b>dark</b> and deep. But I have promises to keep,
      and miles to go before I sleep.
    </Quote>
  </GridCell>
</Grid>
```
