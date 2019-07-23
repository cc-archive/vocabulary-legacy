## Examples

Here is an example of a card.

```jsx
<Grid density="sparse">
  <GridCell :spanSet="[12, 6, 3, 3, 2]">
    <Card
      color="blue"
      shade="darker"
      is-decked
      is-inverted
      heading="Dhruv Bhanushali"
      subheading="Developer"
      featuredImageSource="https://avatars0.githubusercontent.com/u/16580576"
      featuredImageAlternateText="Dhruv Bhanushali's profile picture">
      <template v-slot:foot>
        India
      </template>
    </Card>
  </GridCell>
</Grid>
```

### Style set

A card can be elevated over the surrounding-content via a shadow.

```jsx
<Grid>
  <GridCell :spanSet="[12, 6, 3, 3, 2]">
    <Card
      color="magenta"
      is-decked
      is-raised
      heading="Hugo Solar"
      subheading="Mentor"
      featuredImageSource="https://avatars0.githubusercontent.com/u/894708"
      featuredImageAlternateText="Hugo Solar's profile picture">
      <template v-slot:foot>
        <CountryFlag country=""/>Chile
      </template>
    </Card>
  </GridCell>
</Grid>
```

A card can be rounded instead of sharp cuts at right angles so as to fit in 
better with more curvy layouts.

```jsx
<Grid>
  <GridCell :spanSet="[12, 6, 3, 3, 2]">
    <Card
      color="purple"
      is-decked
      is-rounded
      heading="Kriti Godey"
      subheading="Mentor"
      featuredImageSource="https://avatars0.githubusercontent.com/u/287034"
      featuredImageAlternateText="Kriti Godey's profile picture">
      <template v-slot:foot>
        USA
      </template>
    </Card>
  </GridCell>
</Grid>
```

A card be designed to have more minimalist appearance so as to not be too 
eye-catching or prominent.

```jsx
<Grid>
  <GridCell :spanSet="[12, 6, 3, 3, 2]">
    <Card
      color="orange"
      is-decked
      is-basic
      heading="Sophine Clachar"
      subheading="Mentor"
      featuredImageSource="https://creativecommons.org/wp-content/uploads/2018/03/Sophine-Clachar_avatar_1520861079.jpg"
      featuredImageAlternateText="Sophine Clachar's profile picture">
      <template v-slot:foot>
        USA
      </template>
    </Card>
  </GridCell>
</Grid>
```

### Add-on set

Apart from the main content, a card has a heading, a subheading, a featured 
image. These can be set via props `heading`, `subheading`,
`featuredImageSource` and `featuredImageAlternateText` respectively.

```jsx
<Grid>
  <GridCell :spanSet="[12, 6, 4, 4, 3]">
    <Card
      color="yellow"
      is-rounded
      is-raised
      heading="Two giraffes in Kenya"
      subheading="Brandt Luke Zorn's father"
      featuredImageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Two_Giraffes.PNG/405px-Two_Giraffes.PNG"
      featuredImageAlternateText="Two giraffes in Kenya">
      <template v-slot:foot>
        CC BY-SA
      </template
    </Card>
  </GridCell>
</Grid>
```

If you'd like something of your own there, you can override the slots to fit
in your own stuff.

```jsx
<Grid>
  <GridCell :spanSet="[12, 6, 4, 4, 3]">
    <Card
      color="orange"
      is-decked
      is-rounded
      is-raised>
      <template v-slot:feature>
        <img alt="Royal Bengal tiger" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Royal_Bengal_Tiger.jpg"/>
      </template>
      <template v-slot:head>
        <div class="heading">Royal Bengal tiger</div>
        <div class="subheading">
          Sujit Kumar
        </div>
      </template>
      <template v-slot:foot>
        <LicenseIconography :iconList="['', 'by', 'sa']"/>
      </template>
    </Card>
  </GridCell>
  <GridCell :spanSet="[12, 6, 4, 4, 3]">
    <Card
      color="green"
      is-decked
      is-rounded
      is-raised
      featuredImageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/640px-Hummingbird.jpg"
      featuredImageAlternateText="Costa's hummingbird">
      <template v-slot:head>
        <div class="heading">Costa's hummingbird</div>
        <div class="subheading">
          San Diego Zoo
        </div>
      </template>
      <template v-slot:foot>
        <LicenseIconography :iconList="['pd']"/>
      </template>
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
  is-raised
  is-rounded/>
```

Again like any other component, cards can be colored using any color from the
set provided by CC Vocabulary. Let's jazz it up a little.

```jsx
<Grid>
  <GridCell :spanSet="[12, 4, 4, 4, 4]">
    <Card
      color="blue"
      heading="Blue card"
      subheading="Blue accent"
      is-raised
      is-rounded/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]">
    <Card
      color="green"
      heading="Green card"
      subheading="Green accent"
      is-raised
      is-rounded/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]">
    <Card
      color="magenta"
      heading="Magenta card"
      subheading="Magenta accent"
      is-raised
      is-rounded/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]">
    <Card
      color="olive"
      heading="Olive card"
      subheading="Olive accent"
      is-raised
      is-rounded/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]">
    <Card
      color="orange"
      heading="Orange card"
      subheading="Orange accent"
      is-raised
      is-rounded/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]">
    <Card
      color="purple"
      heading="Purple card"
      subheading="Purple accent"
      is-raised
      is-rounded/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]">
    <Card
      color="red"
      heading="Red card"
      subheading="Red accent"
      is-raised
      is-rounded/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]">
    <Card
      color="sand"
      heading="Sand card"
      subheading="Sand accent"
      is-raised
      is-rounded/>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4, 4, 4]">
    <Card
      color="yellow"
      heading="Yellow card"
      subheading="Yellow accent"
      is-raised
      is-rounded/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :spanSet="[12, 6, 3, 3, 3]">
    <Card
      color="blue"
      shade="light"
      heading="Light blue card"
      subheading="Light blue accent"
      is-raised
      is-rounded/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 3, 3, 3]">
    <Card
      color="blue"
      heading="Blue card"
      subheading="Default blue accent"
      is-raised
      is-rounded/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 3, 3, 3]">
    <Card
      color="blue"
      shade="dark"
      heading="Dark blue card"
      subheading="Dark blue accent"
      is-raised
      is-rounded/>
  </GridCell>
  <GridCell :spanSet="[12, 6, 3, 3, 3]">
    <Card
      color="blue"
      shade="darker"
      heading="Darker blue card"
      subheading="Darker blue accent"
      is-raised
      is-rounded/>
  </GridCell>
</Grid>
```
