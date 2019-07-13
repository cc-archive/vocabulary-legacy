## Examples

Without frills, a badge looks like this.

```jsx
<LicenseBadge license="by"/>
```

It may be in the middle of some text.

```jsx
<Heading :level="3" color="orange">
 The CC BY license
  <LicenseBadge license="by"/>:
</Heading>
<Paragraph>
  The CC BY license
  (<LicenseBadge license="by" size="small"/>)
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
<LicenseBadge license="by"/>
<LicenseBadge license="by-nc"/>
<LicenseBadge license="by-nc-nd"/>
<LicenseBadge license="by-nc-sa"/>
<LicenseBadge license="by-nd"/>
<LicenseBadge license="by-sa"/>
```

Apart from these, we also have badges for the CC Zero license and the Public 
Domain mark.

```jsx
<LicenseBadge license="zero"/>
<LicenseBadge license="pd"/>
```

### Size set

Badges for all licenses come in two variants:
- a larger one with natural dimensions of 120px &times; 42px
- a smaller one with natural dimensions of 80px &times; 15px

Smaller badges for the licenses use only abbreviations for every individual 
aspect of the license.

```jsx
<LicenseBadge license="by-sa" size="small"/>
<LicenseBadge license="zero" size="small"/>
```

Larger badges for the licenses use both abbreviations as well as iconography for 
every individual aspect of the license.

```jsx
<LicenseBadge license="by-sa"/>
<LicenseBadge license="zero"/>
```

Since `Badge` tags are effectively `img` tags, one can use `height` and `width`
attributes or CSS rules to change the size of the badge. And since the images 
are all SVGs, they can scale beautifully to virtually any size.

```jsx
<LicenseBadge license="by-sa" height="84px"/>
<LicenseBadge license="zero" style="height: 84px;"/>
```

The same applies to the smaller versions of the badges, but if you wanted to
enlarge them, you'd probably be better off using the large versions themselves.

```jsx
<LicenseBadge license="by-sa" size="small" height="30px"/>
<LicenseBadge license="zero" size="small" style="height: 30px;"/>
```

### Note

These badges have a look of legacy and age about them. If you are not a fan of
this look, feel free to use [LicenseIconography](#/Elements/LicenseIconography).
