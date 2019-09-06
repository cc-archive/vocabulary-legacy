Here, look at my card. 

```jsx
let dhruvSource = 'https://avatars0.githubusercontent.com/u/16580576';
let dhruvAlt = 'Dhruv Bhanushali\'s profile picture';

<Grid density="sparse">
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
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
      color="purple"
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
      color="magenta"
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
      color="yellow"
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
      color="purple"
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
      color="orange"
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
      color="red"
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
      color="green"
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

```jsx
<Grid>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Card
      color="blue"
      heading="Blue card"
      subheading="Blue accent"
      is-raised/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Card
      color="green"
      heading="Green card"
      subheading="Green accent"
      is-raised/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Card
      color="magenta"
      heading="Magenta card"
      subheading="Magenta accent"
      is-raised/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Card
      color="olive"
      heading="Olive card"
      subheading="Olive accent"
      is-raised/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Card
      color="orange"
      heading="Orange card"
      subheading="Orange accent"
      is-raised/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Card
      color="purple"
      heading="Purple card"
      subheading="Purple accent"
      is-raised/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Card
      color="red"
      heading="Red card"
      subheading="Red accent"
      is-raised/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Card
      color="sand"
      heading="Sand card"
      subheading="Sand accent"
      is-raised/>
  </GridCell>
  <GridCell :span-set="[12, 4, 4, 4, 4]">
    <Card
      color="yellow"
      heading="Yellow card"
      subheading="Yellow accent"
      is-raised/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
      color="blue"
      shade="light"
      heading="Light blue card"
      subheading="Light blue accent"
      is-raised/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
      color="blue"
      heading="Blue card"
      subheading="Default blue accent"
      is-raised/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
      color="blue"
      shade="dark"
      heading="Dark blue card"
      subheading="Dark blue accent"
      is-raised/>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Card
      color="blue"
      shade="darker"
      heading="Darker blue card"
      subheading="Darker blue accent"
      is-raised/>
  </GridCell>
</Grid>
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
      color="magenta"
      heading="Dark?"
      subheading="Inverted"
      is-inverted/>
  </GridCell>
</Grid>
```
