Here, look at my card. 

```jsx
let dhruvSource = 'https://avatars0.githubusercontent.com/u/16580576';
let dhruvAlt = 'Dhruv Bhanushali\'s profile picture';

<Grid density="sparse">
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
      color="orange"
      heading="Dhruv Bhanushali"
      subheading="Developer"
      :featuredImageSource="dhruvSource"
      :featuredImageAlternateText="dhruvAlt"
      roundness="slight"
      is-raised>
      <template #foot>
        🇮🇳 India
      </template>
    </Card>
  </GridCell>
</Grid>
```

### Style set

A card can be elevated over the surrounding-content via a shadow.

```jsx
let kritiSource = 'https://avatars0.githubusercontent.com/u/287034';
let kritiAlt = 'Kriti Godey\'s profile picture';

<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
      color="green"
      heading="Kriti Godey"
      subheading="Mentor"
      :featuredImageSource="kritiSource"
      :featuredImageAlternateText="kritiAlt"
      is-raised>
      <template #foot>
        🇺🇸 USA
      </template>
    </Card>
  </GridCell>
</Grid>
```

A card be designed to have more minimalist appearance so as to not be too
eye-catching or prominent. A card can be ghosted to have the ultimate minimalist
appearance.

```jsx
let hugoSource = 'https://avatars0.githubusercontent.com/u/894708';
let hugoAlt = 'Hugo Solar\'s profile picture';

let brenoSource = 'https://avatars0.githubusercontent.com/u/707019';
let brenoAlt = 'Breno Ferreira\'s profile picture';

<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
      color="green"
      heading="Hugo Solar"
      subheading="Mentor"
      :featuredImageSource="hugoSource"
      :featuredImageAlternateText="hugoAlt"      
      simplicity="slight">
      <template #foot>
        🇨🇱 Chile
      </template>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
      color="green"
      heading="Breno Ferreira"
      subheading="Unofficial mentor"
      :featuredImageSource="brenoSource"
      :featuredImageAlternateText="brenoAlt"
      simplicity="extreme">
      <template #foot>
        🇧🇷 Brazil
      </template>
    </Card>
  </GridCell>
</Grid>
```

A card can be made slightly rounded instead of sharp cuts at right angles so as
to fit in better with more curvy layouts. Or it can be completely rounded and
made into a pill-shape if that's more your thing. To be fair, completely rounded
cards look awful. 

```jsx
let timidSource = 'https://avatars0.githubusercontent.com/u/691322';
let timidAlt = 'Timid Robot\'s profile picture';

let sophineSource = 'https://creativecommons.org/wp-content/uploads/2018/03/Sophine-Clachar_avatar_1520861079.jpg';
let sophineAlt = 'Sophine Clachar\'s profile picture';

<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
      color="green"
      heading="Timid Robot"
      subheading="Mentor"
      :featuredImageSource="timidSource"
      :featuredImageAlternateText="timidAlt"
      roundness="slight">
      <template #foot>
        🇺🇸 USA
      </template>
    </Card>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
      color="green"
      heading="Sophine Clachar"
      subheading="Mentor"
      :featuredImageSource="sophineSource"
      :featuredImageAlternateText="sophineAlt"
      roundness="complete">
      <template #foot>
        🇺🇸 USA
      </template>
    </Card>
  </GridCell>
</Grid>
```

### Add-on set

Apart from the main content, a card has a heading, a subheading, a featured 
image. These can be set via props `heading`, `subheading`,
`featuredImageSource` and `featuredImageAlternateText` respectively.

The footer still uses a slot though, so you'll need to populate that. The body
of the card goes into the default slot.

```jsx
let giraffeSource = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Two_Giraffes.PNG/405px-Two_Giraffes.PNG';
let giraffeAlt = 'Two giraffes in Kenya';

<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Card
      color="tomato"
      :heading="giraffeAlt"
      subheading="Brandt Luke Zorn's father"
      :featuredImageSource="giraffeSource"
      :featuredImageAlternateText="giraffeAlt">
      <template #foot>
        CC BY-SA
      </template>
      <Paragraph>
        How are unicorns fake but giraffes real? Like, what's more belieavable:
        a horse with a horn or a leopard-moose-camel with a 40 foot neck?
      </Paragraph>
      <Paragraph>
        - Kyle Brownlee
      </Paragraph>
    </Card>
  </GridCell>
</Grid>
```

If you'd like something of your own there, you can override the slots to fit
in your own stuff.

```jsx
let hummingbirdSource = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/640px-Hummingbird.jpg';
let hummingbirdAlt = 'Costa\'s hummingbird';

<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Card
      color="tomato"
      is-decked>
      <template #feature>
        <img 
          style="width: 100%;"
          :src="hummingbirdSource"
          :alt="hummingbirdAlt"/>
      </template>
      <template #head>
        <div class="heading"><u>{{ hummingbirdAlt }}</u></div>
        <div class="subheading"><i>San Diego Zoo</i></div>
      </template>
      <template #foot>
        <LicenseIconography :icon-list="['pd']"/>
      </template>
      <Paragraph>
        It it not the strength of the body that counts, but the strength of the
        spirit.
      </Paragraph>
      <Paragraph>
        - Tolkien
      </Paragraph>
    </Card>
  </GridCell>
</Grid>
```


### Color set

A card without any color looks like this.

```jsx
<Card 
  heading="Colorless card"
  subheading="No accent"
  is-raised>
  <template #foot>
    BORING!
  </template>
</Card>
```

Again like any other component, cards can be colored using any color from the
set provided by CC Vocabulary. Let's jazz it up a little.

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
<Card
  :color="color ? color : null"
  :shade="shade ? shade : null"
  is-raised>
  <template #head>
    <Heading>Card with {{ color ? color : 'no' }} accent</Heading>
    <s>BORING!</s>
  </template>
</Card>
```

On a dark or non-white canvas, you should use the inverted version of the 
component.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
      heading="Dark?"
      subheading="Inverted"
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
      color="turquoise"
      heading="Dark?"
      subheading="Inverted"
      is-inverted/>
  </GridCell>
</Grid>
```
