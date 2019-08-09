Without frills, license badges looks like these.

```jsx
<Heading
  color="orange"
  :level="3">
  The CC BY license
  <LicenseBadge 
    license="by"
    is-centered/>:
</Heading>
<Paragraph>
  The CC BY license
  (<LicenseBadge 
     license="by" 
     version="reduced" 
     is-centered/>)
  is a permissive free-culture license.
</Paragraph>
```

### Style set

The badge may be vertically centered with respect to surrounding text.

```jsx
<Paragraph>
  The CC BY license
  (<LicenseBadge 
     license="by" 
     is-centered/>)
  is a permissive free-culture license.
</Paragraph>
```

### Badge set

To start with we have badges for all CC licenses.

```jsx
<Grid style="text-align: center;">
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <LicenseBadge license="by"/>
    <Paragraph>
      CC Attribution
    </Paragraph>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <LicenseBadge license="by-nc"/>
    <Paragraph>
      CC Attribution-NonCommercial 
    </Paragraph>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <LicenseBadge license="by-nc-nd"/>
    <Paragraph>
      CC Attribution-NonCommercial-NoDerivs
    </Paragraph>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <LicenseBadge license="by-nc-sa"/>
    <Paragraph>
      CC Attribution-NonCommercial-ShareAlike
    </Paragraph>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <LicenseBadge license="by-nd"/>
    <Paragraph>
      CC Attribution-NoDerivs
    </Paragraph>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <LicenseBadge license="by-sa"/>
    <Paragraph>
      CC Attribution-ShareAlike
    </Paragraph>
  </GridCell>
</Grid>
```

Apart from these, we also have badges for the CC Zero license and the Public 
Domain mark.

```jsx
<Grid style="text-align: center;">
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <LicenseBadge license="zero"/>
    <Paragraph>
      CC Zero
    </Paragraph>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <LicenseBadge license="pd"/>
    <Paragraph>
      Public domain
    </Paragraph>
  </GridCell>
</Grid>
```

### Version set

Badges for all licenses come in two variants:
- Full (dimensions: 120px &times; 42px)
- Reduced (dimensions: 80px &times; 15px)

Smaller badges for the licenses use only abbreviations for every individual 
aspect of the license.

```jsx
<Grid style="text-align: center;">
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <LicenseBadge license="by-sa" version="reduced"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <LicenseBadge license="zero" version="reduced"/>
  </GridCell>
</Grid>
```

Larger badges for the licenses use both abbreviations as well as iconography for 
every individual aspect of the license.

```jsx
<Grid style="text-align: center;">
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <LicenseBadge license="by-sa"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <LicenseBadge license="zero"/>
  </GridCell>
</Grid>
```

### Attribute set

Since `LicenseBadge` is a transparent wrapper on `ImageView`, all props that you
could pass to an `ImageView` will still work. Slots however will not.

Here is an example with size.

```jsx
<LicenseBadge license="by" size="large"/>
```

### Age

These badges have a look of legacy and age about them. If you are not a fan of
this look, feel free to use [LicenseIconography](#/Elements/LicenseIconography).
