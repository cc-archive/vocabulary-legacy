Simply used, license icons look like a bunch of circular shapes. These icons can
be used in the midst of running text and they will inherit the font size and
color of their surrounding content.

```jsx
<Heading
  color="orange"
  :level="3">
  The CC BY license
  <LicenseIconography :icon-list="['', 'by']"/>:
</Heading>
<Paragraph>
  The CC BY license
  (<LicenseIconography :icon-list="['', 'by']"/>)
  is a permissive free-culture license.
</Paragraph>
```

### Icon set

To start there is the plain CC logo icon. This should precede all other icons
that depict CC licenses.

```jsx { "props": { "className": "enlarged-text" } }
<LicenseIconography :icon-list="['']"/>
```

Then there all all the various components that make up the CC license aspects.

```jsx { "props": { "className": "enlarged-text" } }
<LicenseIconography :icon-list="['by', 'nc', 'nd', 'sa']"/>
```

The non-commercial icon has region specific variants for Europe and Japan (why
these two regions only and specifically is beyond my understanding).

```jsx { "props": { "className": "enlarged-text" } }
<LicenseIconography :icon-list="['nc-eu', 'nc-jp']"/>
```

Some very domain specific and niche aspects have also been covered.

```jsx { "props": { "className": "enlarged-text" } }
<LicenseIconography :icon-list="['sampling', 'sampling-plus', 'remix', 'share']"/>
```

Finally there are icons for the CC Zero license and the Public Domain mark.

```jsx { "props": { "className": "enlarged-text" } }
<LicenseIconography :icon-list="['zero', 'pd']"/>
```

### Add-on set

License icons can contain popups with additional content.

```jsx
<div style="padding: 100px 200px;">
  <LicenseIconography
    :icon-list="['', 'zero']"
    :string-list="['Creative Commons', 'Zero']"/>
</div>
```

But if plain strings are not cutting it for you, feel free to populate slots,
named after icon indices.

```jsx
<div style="padding: 100px 200px;">
  <LicenseIconography
    :icon-list="['', 'zero']">
    <template #0>
      <Heading :level="5">Creative Commons</Heading>
      <Paragraph>When we share, everyone wins.</Paragraph>
    </template>
    <template #1>
      <Heading :level="5">Zero</Heading>
      <Paragraph>No rights reserved.</Paragraph>
    </template>
  </LicenseIconography>
</div>
```
