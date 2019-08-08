Without many frills a logo looks like this.

```jsx
<BrandImagery
  color="black"
  type="letterheart"
  size="big"/>
```

### Logo set

To start with we have two brands.

```jsx
<Grid style="text-align: center;">
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <BrandImagery color="black"/>
    <Paragraph>
      CC
    </Paragraph>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <BrandImagery brand="vocabulary" color="black"/>
    <Paragraph>
      Vocabulary
    </Paragraph>
  </GridCell>
</Grid>
```

For the CC brand, we have three types of logos.

```jsx
<Grid style="text-align: center;">
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <BrandImagery color="black"/>
    <Paragraph>
      Wordmark
    </Paragraph>
  </GridCell>
  <GridCell :span-set="[12, 3, 4, 4, 4]">
    <BrandImagery type="lettermark" color="black"/>
    <Paragraph>
      Lettermark
    </Paragraph>
  </GridCell>
  <GridCell :span-set="[12, 3, 4, 4, 4]">
    <BrandImagery type="letterheart" color="black"/>
    <Paragraph>
      Letterheart
    </Paragraph>
  </GridCell>
</Grid>
```

### Color set

All imagery comes in two colors.

```jsx { "props": { "className": "dark-background" } }
<Grid density="sparser" style="text-align: center; color: white;">
  <GridCell :span-set="[12, 6, 6, 6, 3]">
    <BrandImagery color="white"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 3]">
    <BrandImagery type="lettermark" color="white"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 3]">
    <BrandImagery type="letterheart" color="white"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 3]">
    <BrandImagery brand="vocabulary" color="white"/>
  </GridCell>
</Grid>
```

### Attribute set

Since `BrandImagery` is a transparent wrapper on `ImageView` all props that you
could pass to an `ImageView` will still work. Slots however will not.

Here is an example with size.

```jsx
<BrandImagery type="letterheart" color="black" size="large"/>
``` 
