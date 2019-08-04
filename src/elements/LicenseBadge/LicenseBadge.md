Without frills, badges looks like these.

```jsx
<Heading :level="3" color="orange">
 The CC BY license
  <LicenseBadge license="by"/>:
</Heading>
<Paragraph>
  The CC BY license
  (<LicenseBadge license="by" version="small" is-centered/>)
  is a permissive free-culture license.
</Paragraph>
```

### Style set

The badge may be vertically centered with respect to surrounding text.

```jsx
<Paragraph>
  The CC BY license
  (<LicenseBadge license="by" is-centered/>)
  is a permissive free-culture license.
</Paragraph>
```

### Badge set

To start with we have badges for all CC licenses.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]" style="text-align: center;">
    <LicenseBadge license="by"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]" style="text-align: center;">
    <LicenseBadge license="by-nc"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]" style="text-align: center;">
    <LicenseBadge license="by-nc-nd"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]" style="text-align: center;">
    <LicenseBadge license="by-nc-sa"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]" style="text-align: center;">
    <LicenseBadge license="by-nd"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]" style="text-align: center;">
    <LicenseBadge license="by-sa"/>
  </GridCell>
</Grid>
```

Apart from these, we also have badges for the CC Zero license and the Public 
Domain mark.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]" style="text-align: center;">
    <LicenseBadge license="zero"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]" style="text-align: center;">
    <LicenseBadge license="pd"/>
  </GridCell>
</Grid>
```

### Version set

Badges for all licenses come in two variants:
- a larger one with natural dimensions of 120px &times; 42px
- a smaller one with natural dimensions of 80px &times; 15px

Smaller badges for the licenses use only abbreviations for every individual 
aspect of the license.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]" style="text-align: center;">
    <LicenseBadge license="by-sa" version="small"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]" style="text-align: center;">
    <LicenseBadge license="zero" version="small"/>
  </GridCell>
</Grid>
```

Larger badges for the licenses use both abbreviations as well as iconography for 
every individual aspect of the license.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]" style="text-align: center;">
    <LicenseBadge license="by-sa"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]" style="text-align: center;">
    <LicenseBadge license="zero"/>
  </GridCell>
</Grid>
```

### Size set

Since a `LicenseBadge` is effectively an `ImageView` component, one can use
the `size` prop or CSS rules to change the size of the badge.
And since the images are all SVGs, they can scale beautifully to virtually any
size.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]" style="text-align: center;">
    <LicenseBadge license="by-sa" height="84" size="big"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]" style="text-align: center;">
    <LicenseBadge license="zero" size="big"/>
  </GridCell>
</Grid>
```

The same applies to the smaller versions of the badges, but if you wanted to
enlarge them, you'd probably be better off using the large versions themselves.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]" style="text-align: center;">
    <LicenseBadge license="by-sa" version="small" size="small"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]" style="text-align: center;">
    <LicenseBadge license="zero" version="small" size="small"/>
  </GridCell>
</Grid>
```

### Note

These badges have a look of legacy and age about them. If you are not a fan of
this look, feel free to use [LicenseIconography](#/Elements/LicenseIconography).
